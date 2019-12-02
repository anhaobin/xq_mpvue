'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var FONT_COLOR = '#ed6a0c';
var BG_COLOR = '#fffbe8';
(0, _component.VantComponent)({
    props: {
        text: {
            type: String,
            value: ''
        },
        mode: {
            type: String,
            value: ''
        },
        url: {
            type: String,
            value: ''
        },
        openType: {
            type: String,
            value: 'navigate'
        },
        delay: {
            type: Number,
            value: 1
        },
        speed: {
            type: Number,
            value: 50
        },
        scrollable: {
            type: Boolean,
            value: true
        },
        leftIcon: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: FONT_COLOR
        },
        backgroundColor: {
            type: String,
            value: BG_COLOR
        },
        wrapable: Boolean
    },
    data: {
        show: true
    },
    watch: {
        text: function text() {
            this.set({}, this.init);
        }
    },
    created: function created() {
        this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: 'linear'
        });
    },
    destroyed: function destroyed() {
        this.timer && clearTimeout(this.timer);
    },

    methods: {
        init: function init() {
            var _this = this;

            Promise.all([this.getRect('.van-notice-bar__content'), this.getRect('.van-notice-bar__wrap')]).then(function (rects) {
                var _rects = _slicedToArray(rects, 2),
                    contentRect = _rects[0],
                    wrapRect = _rects[1];

                if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width) {
                    return;
                }
                var _data = _this.data,
                    speed = _data.speed,
                    scrollable = _data.scrollable,
                    delay = _data.delay;

                if (scrollable && wrapRect.width < contentRect.width) {
                    var duration = contentRect.width / speed * 1000;
                    _this.wrapWidth = wrapRect.width;
                    _this.contentWidth = contentRect.width;
                    _this.duration = duration;
                    _this.animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: 'linear',
                        delay: delay
                    });
                    _this.scroll();
                }
            });
        },
        scroll: function scroll() {
            var _this2 = this;

            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.set({
                animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
            });
            setTimeout(function () {
                _this2.set({
                    animationData: _this2.animation.translateX(-_this2.contentWidth).step().export()
                });
            }, 20);
            this.timer = setTimeout(function () {
                _this2.scroll();
            }, this.duration);
        },
        onClickIcon: function onClickIcon() {
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.set({ show: false });
        },
        onClick: function onClick(event) {
            this.$emit('click', event);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZPTlRfQ09MT1IiLCJCR19DT0xPUiIsInByb3BzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsIm1vZGUiLCJ1cmwiLCJvcGVuVHlwZSIsImRlbGF5IiwiTnVtYmVyIiwic3BlZWQiLCJzY3JvbGxhYmxlIiwiQm9vbGVhbiIsImxlZnRJY29uIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3cmFwYWJsZSIsImRhdGEiLCJzaG93Iiwid2F0Y2giLCJzZXQiLCJpbml0IiwiY3JlYXRlZCIsInJlc2V0QW5pbWF0aW9uIiwid3giLCJjcmVhdGVBbmltYXRpb24iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwiZGVzdHJveWVkIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJtZXRob2RzIiwiUHJvbWlzZSIsImFsbCIsImdldFJlY3QiLCJ0aGVuIiwicmVjdHMiLCJjb250ZW50UmVjdCIsIndyYXBSZWN0Iiwid2lkdGgiLCJ3cmFwV2lkdGgiLCJjb250ZW50V2lkdGgiLCJhbmltYXRpb24iLCJzY3JvbGwiLCJhbmltYXRpb25EYXRhIiwidHJhbnNsYXRlWCIsInN0ZXAiLCJleHBvcnQiLCJzZXRUaW1lb3V0Iiwib25DbGlja0ljb24iLCJvbkNsaWNrIiwiZXZlbnQiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBLElBQU1BLGFBQWEsU0FBbkI7QUFDQSxJQUFNQyxXQUFXLFNBQWpCO0FBQ0EsOEJBQWM7QUFDVkMsV0FBTztBQUNIQyxjQUFNO0FBQ0ZDLGtCQUFNQyxNQURKO0FBRUZDLG1CQUFPO0FBRkwsU0FESDtBQUtIQyxjQUFNO0FBQ0ZILGtCQUFNQyxNQURKO0FBRUZDLG1CQUFPO0FBRkwsU0FMSDtBQVNIRSxhQUFLO0FBQ0RKLGtCQUFNQyxNQURMO0FBRURDLG1CQUFPO0FBRk4sU0FURjtBQWFIRyxrQkFBVTtBQUNOTCxrQkFBTUMsTUFEQTtBQUVOQyxtQkFBTztBQUZELFNBYlA7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QVBELEVBT0csRUFQSDtBQVFBLGlCQUFLbEIsS0FBTCxHQUFhbUIsV0FBVyxZQUFNO0FBQzFCLHVCQUFLTCxNQUFMO0FBQ0gsYUFGWSxFQUVWLEtBQUtqQixRQUZLLENBQWI7QUFHSCxTQWhESTtBQWlETHVCLG1CQWpESyx5QkFpRFM7QUFDVixpQkFBS3BCLEtBQUwsSUFBY0MsYUFBYSxLQUFLRCxLQUFsQixDQUFkO0FBQ0EsaUJBQUtBLEtBQUwsR0FBYSxJQUFiO0FBQ0EsaUJBQUtULEdBQUwsQ0FBUyxFQUFFRixNQUFNLEtBQVIsRUFBVDtBQUNILFNBckRJO0FBc0RMZ0MsZUF0REssbUJBc0RHQyxLQXRESCxFQXNEVTtBQUNYLGlCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsS0FBcEI7QUFDSDtBQXhESTtBQTdEQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuY29uc3QgRk9OVF9DT0xPUiA9ICcjZWQ2YTBjJztcbmNvbnN0IEJHX0NPTE9SID0gJyNmZmZiZTgnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBvcGVuVHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICduYXZpZ2F0ZSdcbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNTBcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGxlZnRJY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiBGT05UX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IEJHX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHdyYXBhYmxlOiBCb29sZWFuXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHNob3c6IHRydWVcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHRleHQoKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7fSwgdGhpcy5pbml0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5yZXNldEFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgdGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLW5vdGljZS1iYXJfX2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tbm90aWNlLWJhcl9fd3JhcCcpXG4gICAgICAgICAgICBdKS50aGVuKChyZWN0cykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjb250ZW50UmVjdCwgd3JhcFJlY3RdID0gcmVjdHM7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRSZWN0ID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgd3JhcFJlY3QgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICAhY29udGVudFJlY3Qud2lkdGggfHxcbiAgICAgICAgICAgICAgICAgICAgIXdyYXBSZWN0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzcGVlZCwgc2Nyb2xsYWJsZSwgZGVsYXkgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsYWJsZSAmJiB3cmFwUmVjdC53aWR0aCA8IGNvbnRlbnRSZWN0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gKGNvbnRlbnRSZWN0LndpZHRoIC8gc3BlZWQpICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwV2lkdGggPSB3cmFwUmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50V2lkdGggPSBjb250ZW50UmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzY3JvbGwoKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IHRoaXMucmVzZXRBbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zbGF0ZVgodGhpcy53cmFwV2lkdGgpXG4gICAgICAgICAgICAgICAgICAgIC5zdGVwKClcbiAgICAgICAgICAgICAgICAgICAgLmV4cG9ydCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGF0YTogdGhpcy5hbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2xhdGVYKC10aGlzLmNvbnRlbnRXaWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGVwKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5leHBvcnQoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja0ljb24oKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zZXQoeyBzaG93OiBmYWxzZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==