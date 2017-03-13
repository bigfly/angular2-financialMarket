import { Http, Response } from '@angular/http';
import { Component, OnInit,Injectable,Input,ElementRef,ViewChild} from '@angular/core';
import  {MemMonService}  from '../../../app/service/createjs.service';

@Component({
  selector: 'jdb-picker-selector',
  templateUrl: './JdbPickerSelector.component.html',
  styleUrls: ['./JdbPickerSelector.component.scss']
})
export class JdbPickerSelector {

    fontSize: string;
    reset: string;

    @Input() onSelect: Function; //&
    @Input() items: Array<any>;
    @Input() value: string;
    @Input() innerCtl: Object;
    @Input() text: string;
    @Input() index: any;
    @Input() defaultValue: string;
    @Input() align: string;

    @ViewChild('itemContainer') itemContainer: ElementRef;

    title: string;
    colNumber;
    smallFontNumber;
    createjs: any;
    handleTick: Function;

    constructor(private elementRef: ElementRef,private memMonService: MemMonService) {}

    ngOnInit(): void {

        this.createjs = this.memMonService.createMemGauge();
        this.title = this.title || '选择';
        let smallFontNumberList = [null, 14, 7, 4];
        this.colNumber = parseInt(this.colNumber) || 1;
        this.smallFontNumber = smallFontNumberList[this.colNumber] || 4;
        let FONT_STYLE = '18px STHeiti';
        let FONT_STYLE_2 = '12px STHeiti';
        let FONT_COLOR = '#000000';
        let SELECTION_HEIGHT = 34;
        let SENSITIVITY = 0.7;
        let EXTRAOFFSET = 30;
        let SPEEDBUMP = 2;
        let THREED_RAITO = 0.25;
        let CANVAS_HEIGHT = 150;
        let dom = this.elementRef.nativeElement;
        this.innerCtl;
        let selectionArray = [];
        let minOffset;
        let maxOffset;
        let Y;
        let lastY = 0;
        let endY;
        let X;
        let lastX = 0;
        let endX;
        let lastOffset = 0;
        let lastOffset2 = 0;
        let lastOffset3 = 0;
        let stage;
        let canvas;
        let offset = 0;
        let maskLine;
        let newSelection;
        let that = this;

        let bezierSpeed = bezier('');

        function bezier(points) {
            if (points == '') {
                points = [
                    [0.0, 0.0],
                    [0.0, 0.0],
                    [0.58, 1.0],
                    [1.0, 1.0]
                ];
                return function (t) {
                    return interpolate(t, points)[0];
                }
            }

            function interpolate(t, p) {
                let order = p.length - 1; // curve order is number of control point - 1
                let d = p[0].length; // control point dimensionality

                // create a source vector array copy that will be
                // used to store intermediate results
                let v = p.map(function (point) {
                    return point.slice();
                });
                // for each order reduce the control point array by updating
                // each control point with its linear interpolation to the next
                for (let i = order; i > 0; i--) {
                    for (let j = 0; j < order; j++) {
                        // interpolate each component
                        for (let k = 0; k < d; k++) {
                            v[j][k] = (1 - t) * v[j][k] + t * v[j + 1][k];
                        }
                    }
                }
                return v[0];
            }
        }

        init();

        function init() {
            that.innerCtl = initSelect();
        };

        function initSelect() {
            setTimeout(function () {
                if (that.value) {
                    initialOffset(that.value);
                } else {
                    initialOffset(that.defaultValue);
                }
                initial();
                // that.innerCtl = innerCtl;
            });

            return {
                selectValue: function () {
                    stop(that.handleTick);
                    let index = Math.floor(-offset / SELECTION_HEIGHT);
                    index = Math.max(index, 0);
                    index = Math.min(index, that.items.length - 1);
                    // that.value = angular.extend({}, that.items[index]);
                    that.value = that.items[index];
                    that.text = that.items[index].text;
                    that.index = index;
                }
            };

            function initialSelections() {
                if (!that.items.length) {
                    return;
                }
                selectionArray = [];
                minOffset = -(that.items.length - 1) * SELECTION_HEIGHT;
                maxOffset = 0;
                if (offset < minOffset) {
                    offset = minOffset;
                }
                for (let i = 0; i < that.items.length; i++) {
                    initialSelection(that.items[i].text, i);
                }
                // stage.setChildIndex(maskLine, stage.getNumChildren() - 1);
                moveSelections(offset);
            }

            function removeSelections() {
                selectionArray = [];
                stage.removeAllChildren();
            }

            function attachEvent() {
                canvas.addEventListener('touchstart', touch, false);
                canvas.addEventListener('touchmove', touch, false);
                canvas.addEventListener('touchend', touch, false);
            }

            function detachEvent() {
                canvas.removeEventListener('touchstart', touch, false);
                canvas.removeEventListener('touchmove', touch, false);
                canvas.removeEventListener('touchend', touch, false);
            }

            function initialSelection(text, order) {
                // 根据文字数量调整字体
                if (text.length <= that.smallFontNumber) {
                    let newSelection = new that.createjs.Text(text, FONT_STYLE, FONT_COLOR);
                } else {
                    let newSelection = new that.createjs.Text(text, FONT_STYLE_2, FONT_COLOR);
                }
                let selectionX;
                let selectionAlign;
                if (that.align == 'center') {
                    selectionX = (canvas.width / 2) / window.devicePixelRatio;
                    selectionAlign = 'center';
                } else if (that.align == 'left') {
                    selectionX = (canvas.width - 20) / window.devicePixelRatio;
                    selectionAlign = 'right';
                } else {
                    selectionX = (20) / window.devicePixelRatio;
                    selectionAlign = 'left';
                }
                newSelection.maxWidth = (canvas.width) / window.devicePixelRatio;
                newSelection.textAlign = selectionAlign;
                newSelection.textBaseline = 'middle';
                newSelection.x = selectionX;
                stage.addChild(newSelection);
                selectionArray.push(newSelection);
            }

            function slide(speed) {
                that.handleTick = handleTick;
                that.createjs.Ticker.addEventListener('tick', handleTick);
                let lastTime = +new Date();

                function handleTick(event) {
                    let curTime = +new Date();
                    let slideFrame = Math.round((curTime - lastTime) / 16.7);
                    lastTime = curTime;
                    if (!event.paused) {
                        speed = speed * Math.pow(0.9, slideFrame);
                        if ((offset > EXTRAOFFSET || offset < minOffset - EXTRAOFFSET) && Math.abs(speed) > SPEEDBUMP) {
                            speed = speed / Math.abs(speed) * SPEEDBUMP;
                        }
                        offset += speed;
                        moveSelections(offset);
                        stage.update();
                        if (Math.abs(speed) < 0.1) {
                            stop(handleTick);
                            slideToEnd();
                        }
                    }
                }
            }

            function slideToEnd() {
                let target = Math.round(offset / SELECTION_HEIGHT) * SELECTION_HEIGHT;
                if (target > maxOffset) {
                    target = maxOffset;
                } else if (target < minOffset) {
                    target = minOffset;
                }
                let distance = (target - offset);

                let startPoint = offset;
                let startTime = +new Date();

                that.createjs.Ticker.addEventListener('tick', handleTick);
                that.handleTick = handleTick;

                function handleTick(event) {
                    let curTime = +new Date();
                    let slideTime = (curTime - startTime) / 300;
                    if (!event.paused) {
                        if (slideTime >= 1) {
                            offset = target;
                            moveSelections(offset);
                            stop(handleTick);
                            let index = Math.floor(Math.abs(offset) / SELECTION_HEIGHT);
                            if (that.items[index]) {
                                that.index = index;
                                that.onSelect({
                                    value: that.items[index]
                                });
                            }
                        } else {
                            let tempDistance = distance * bezierSpeed(slideTime);
                            offset = startPoint + tempDistance;
                            moveSelections(offset);
                        }
                        stage.update();
                    }
                }
            }

            function moveSelections(offset) {
                for (let i = 0; i < selectionArray.length; i++) {
                    let offsetRaito = Math.abs(-offset / SELECTION_HEIGHT - i);
                    let offsetRaito2 = -offset / SELECTION_HEIGHT - i;
                    if (offsetRaito > 3) {
                        selectionArray[i].visible = false;
                        continue;
                    }
                    selectionArray[i].visible = true;
                    selectionArray[i].y = offset + (i) * SELECTION_HEIGHT + CANVAS_HEIGHT / 2 + offsetRaito2 * offsetRaito * SELECTION_HEIGHT / 10;
                    selectionArray[i].scaleY = 1 - offsetRaito * THREED_RAITO;
                    selectionArray[i].scaleX = 1 - offsetRaito * THREED_RAITO / 10;
                    // selectionArray[i].skewX= -20;
                }
            }

            function scroll() {
                let inc = ((Y - lastY) * SENSITIVITY);
                if (inc != undefined && !isNaN(inc) && !isNaN(offset)) {
                    offset += inc;
                }
                if (offset > maxOffset + EXTRAOFFSET * 2) {
                    offset = maxOffset + EXTRAOFFSET * 2;
                } else if (offset < minOffset - EXTRAOFFSET * 2) {
                    offset = minOffset - EXTRAOFFSET * 2;
                }
                moveSelections(offset);
                stage.update();
            }

            function touch(event) {
                event = event || window.event;
                switch (event.type) {
                    case 'touchstart':
                        {
                            X = event.touches[0].clientX || 0;
                            Y = event.touches[0].clientY || 0;
                            lastX = X;
                            lastY = Y;
                            stop(that.handleTick);
                            // scrollStart();
                        }
                        break;
                    case 'touchend':
                        {
                            endY = event.changedTouches[0].clientY;
                            endX = event.changedTouches[0].clientX;
                            let startSpeed = (lastOffset3 + lastOffset2 + lastOffset) / 3.0 * 2;
                            slide(startSpeed);
                        }
                        break;
                    case 'touchmove':
                        {
                            event.preventDefault();
                            lastX = X;
                            lastY = Y;
                            X = event.touches[0].clientX || 0;
                            Y = event.touches[0].clientY || 0;
                            let xOffset = X - lastX;
                            let yOffset = Y - lastY;
                            if (yOffset == 0) {
                                lastOffset = 0;
                            } else {
                                lastOffset = (yOffset / Math.abs(yOffset)) * Math.sqrt(xOffset * xOffset + yOffset * yOffset);
                            }
                            // 保留最近两次的位移记录
                            lastOffset3 = lastOffset2;
                            lastOffset2 = lastOffset;
                            scroll();
                        }
                        break;
                }
            }

            function resizeIfDPR() {
                if (window.devicePixelRatio) {
                    // grab the width and height from canvas
                    let height = that.itemContainer.nativeElement.height;
                    let width = that.itemContainer.nativeElement.width;
                    // let height = $(canvas).height();
                    // let width = $(canvas).width();

                    
                    // reset the canvas width and height with window.devicePixelRatio applied
                    // canvas.setAttribute('width', Math.round(width * window.devicePixelRatio) + '');
                    // canvas.setAttribute('height', Math.round(height * window.devicePixelRatio) + '');
                    that.itemContainer.nativeElement.width = Math.round(width * window.devicePixelRatio) + 'px';
                    that.itemContainer.nativeElement.height = Math.round(height * window.devicePixelRatio) + 'px';

                    // // force the canvas back to the original size using css
                    // canvas.style.width = width + 'px';
                    // canvas.style.height = height + 'px';


                    // set CreateJS to render scaled
                    stage.scaleX = stage.scaleY = window.devicePixelRatio;
                }
            }

            function stop(fn) {
                if (fn) {
                    that.createjs.Ticker.removeEventListener('tick', fn);
                }
            }

            function initial() {
                // canvas = $(dom).find('.item-container')[0];
                canvas = that.itemContainer.nativeElement;
                // class = canvas = that.itemContainer.nativeElement.classList;
                stage = new that.createjs.Stage(canvas);
                that.createjs.Touch.enable(stage);
                resizeIfDPR();
                let delayTime = 0;
                if (!window.requestAnimationFrame) {
                    delayTime = 400;
                }
                // that.$on('destroy', () => {
                //     detachEvent();
                //     that.createjs.Ticker.removeEventListener('tick', that.handleTick);
                //     stage = undefined;
                // });
                setTimeout(function () {
                    that.createjs.Ticker.framerate = 60;
                    that.createjs.Ticker.timingMode = that.createjs.Ticker.RAF;
                    // that.$watch('items', function (newValue, oldValue) {
                    //     if (that.items && that.items.length > 0) {
                    //         removeSelections();
                    //         initialSelections();
                    //         stage.update()
                    //         detachEvent();
                    //         attachEvent();
                    //     }
                    // });
                }, delayTime);
            }

            function initialOffset(item) {
                // that.innerCtl = innerCtl;
                if (item == undefined) {
                    offset = 0;
                    return;
                }
                for (let i = 0; i < that.items.length; i++) {
                    if (that.items[i].value.code == item.code) {
                        offset = -i * SELECTION_HEIGHT;
                        break;
                    }
                }
                // if (offset != 0) {
                //     that.$apply();
                //     return;
                // }
                let index = 0;
                for (let i = 0; i < that.items.length; i++) {
                    if (that.items[i].value == item.value) {
                        index = i;
                        break;
                    }
                }
                offset = -index * SELECTION_HEIGHT;
                // that.$apply();
            }
        }
    }
}
