'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    mixins: [_touch.touch],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: {
        name: 'tab',
        type: 'descendant',
        linked: function linked(child) {
            this.child.push(child);
            this.updateTabs(this.data.tabs.concat(child.data));
        },
        unlinked: function unlinked(child) {
            var index = this.child.indexOf(child);
            var tabs = this.data.tabs;

            tabs.splice(index, 1);
            this.child.splice(index, 1);
            this.updateTabs(tabs);
        }
    },
    props: {
        color: String,
        sticky: Boolean,
        animated: Boolean,
        swipeable: Boolean,
        lineWidth: {
            type: Number,
            value: -1
        },
        lineHeight: {
            type: Number,
            value: -1
        },
        active: {
            type: Number,
            value: 0
        },
        type: {
            type: String,
            value: 'line'
        },
        border: {
            type: Boolean,
            value: true
        },
        duration: {
            type: Number,
            value: 0.3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4
        },
        offsetTop: {
            type: Number,
            value: 0
        }
    },
    data: {
        tabs: [],
        lineStyle: '',
        scrollLeft: 0,
        scrollable: false,
        trackStyle: '',
        wrapStyle: '',
        position: ''
    },
    watch: {
        swipeThreshold: function swipeThreshold() {
            this.set({
                scrollable: this.child.length > this.data.swipeThreshold
            });
        },

        color: 'setLine',
        lineWidth: 'setLine',
        lineHeight: 'setLine',
        active: 'setActiveTab',
        animated: 'setTrack',
        offsetTop: 'setWrapStyle'
    },
    beforeCreate: function beforeCreate() {
        this.child = [];
    },
    mounted: function mounted() {
        var _this = this;

        this.setLine(true);
        this.setTrack();
        this.scrollIntoView();
        this.getRect('.van-tabs__wrap').then(function (rect) {
            _this.navHeight = rect.height;
            _this.observerContentScroll();
        });
    },
    destroyed: function destroyed() {
        // @ts-ignore
        this.createIntersectionObserver().disconnect();
    },

    methods: {
        updateTabs: function updateTabs(tabs) {
            tabs = tabs || this.data.tabs;
            this.set({
                tabs: tabs,
                scrollable: tabs.length > this.data.swipeThreshold
            });
            this.setActiveTab();
        },
        trigger: function trigger(eventName, index) {
            this.$emit(eventName, {
                index: index,
                title: this.data.tabs[index].title
            });
        },
        onTap: function onTap(event) {
            var index = event.currentTarget.dataset.index;

            if (this.data.tabs[index].disabled) {
                this.trigger('disabled', index);
            } else {
                this.trigger('click', index);
                this.setActive(index);
            }
        },
        setActive: function setActive(active) {
            if (active !== this.data.active) {
                this.trigger('change', active);
                this.set({ active: active });
                this.setActiveTab();
            }
        },
        setLine: function setLine(skipTransition) {
            var _this2 = this;

            if (this.data.type !== 'line') {
                return;
            }
            var _data = this.data,
                color = _data.color,
                active = _data.active,
                duration = _data.duration,
                lineWidth = _data.lineWidth,
                lineHeight = _data.lineHeight;

            this.getRect('.van-tab', true).then(function (rects) {
                var rect = rects[active];
                var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                var height = lineHeight !== -1 ? 'height: ' + lineHeight + 'px;' : '';
                var left = rects.slice(0, active).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                left += (rect.width - width) / 2;
                var transition = skipTransition ? '' : 'transition-duration: ' + duration + 's; -webkit-transition-duration: ' + duration + 's;';
                _this2.set({
                    lineStyle: '\n            ' + height + '\n            width: ' + width + 'px;\n            background-color: ' + color + ';\n            -webkit-transform: translateX(' + left + 'px);\n            transform: translateX(' + left + 'px);\n            ' + transition + '\n          '
                });
            });
        },
        setTrack: function setTrack() {
            var _this3 = this;

            var _data2 = this.data,
                animated = _data2.animated,
                active = _data2.active,
                duration = _data2.duration;

            if (!animated) return '';
            this.getRect('.van-tabs__content').then(function (rect) {
                var width = rect.width;

                _this3.set({
                    trackStyle: '\n            width: ' + width * _this3.child.length + 'px;\n            left: ' + -1 * active * width + 'px;\n            transition: left ' + duration + 's;\n            display: -webkit-box;\n            display: flex;\n          '
                });
                var props = { width: width, animated: animated };
                _this3.child.forEach(function (item) {
                    item.set(props);
                });
            });
        },
        setActiveTab: function setActiveTab() {
            var _this4 = this;

            this.child.forEach(function (item, index) {
                var data = {
                    active: index === _this4.data.active
                };
                if (data.active) {
                    data.inited = true;
                }
                if (data.active !== item.data.active) {
                    item.set(data);
                }
            });
            (0, _utils.nextTick)(function () {
                _this4.setLine();
                _this4.setTrack();
                _this4.scrollIntoView();
            });
        },

        // scroll active tab into view
        scrollIntoView: function scrollIntoView() {
            var _this5 = this;

            var _data3 = this.data,
                active = _data3.active,
                scrollable = _data3.scrollable;

            if (!scrollable) {
                return;
            }
            Promise.all([this.getRect('.van-tab', true), this.getRect('.van-tabs__nav')]).then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    tabRects = _ref2[0],
                    navRect = _ref2[1];

                var tabRect = tabRects[active];
                var offsetLeft = tabRects.slice(0, active).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                _this5.set({
                    scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
                });
            });
        },
        onTouchStart: function onTouchStart(event) {
            if (!this.data.swipeable) return;
            this.touchStart(event);
        },
        onTouchMove: function onTouchMove(event) {
            if (!this.data.swipeable) return;
            this.touchMove(event);
        },

        // watch swipe touch end
        onTouchEnd: function onTouchEnd() {
            if (!this.data.swipeable) return;
            var _data4 = this.data,
                active = _data4.active,
                tabs = _data4.tabs;
            var direction = this.direction,
                deltaX = this.deltaX,
                offsetX = this.offsetX;

            var minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && active !== 0) {
                    this.setActive(active - 1);
                } else if (deltaX < 0 && active !== tabs.length - 1) {
                    this.setActive(active + 1);
                }
            }
        },
        setWrapStyle: function setWrapStyle() {
            var _data5 = this.data,
                offsetTop = _data5.offsetTop,
                position = _data5.position;

            var wrapStyle = void 0;
            switch (position) {
                case 'top':
                    wrapStyle = '\n            top: ' + offsetTop + 'px;\n            position: fixed;\n          ';
                    break;
                case 'bottom':
                    wrapStyle = '\n            top: auto;\n            bottom: 0;\n          ';
                    break;
                default:
                    wrapStyle = '';
            }
            // cut down `set`
            if (wrapStyle === this.data.wrapStyle) return;
            this.set({ wrapStyle: wrapStyle });
        },
        observerContentScroll: function observerContentScroll() {
            var _this6 = this;

            if (!this.data.sticky) {
                return;
            }
            var offsetTop = this.data.offsetTop;

            var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
                windowHeight = _wx$getSystemInfoSync.windowHeight;
            // @ts-ignore


            this.createIntersectionObserver().disconnect();
            // @ts-ignore
            this.createIntersectionObserver().relativeToViewport({ top: -(this.navHeight + offsetTop) }).observe('.van-tabs', function (res) {
                var top = res.boundingClientRect.top;

                if (top > offsetTop) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : 'bottom';
                _this6.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this6.setPosition(position);
            });
            // @ts-ignore
            this.createIntersectionObserver().relativeToViewport({ bottom: -(windowHeight - 1 - offsetTop) }).observe('.van-tabs', function (res) {
                var _res$boundingClientRe = res.boundingClientRect,
                    top = _res$boundingClientRe.top,
                    bottom = _res$boundingClientRe.bottom;

                if (bottom < _this6.navHeight) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : '';
                _this6.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this6.setPosition(position);
            });
        },
        setPosition: function setPosition(position) {
            var _this7 = this;

            if (position !== this.data.position) {
                this.set({ position: position }).then(function () {
                    _this7.setWrapStyle();
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInRvdWNoIiwiY2xhc3NlcyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJjaGlsZCIsInB1c2giLCJ1cGRhdGVUYWJzIiwiZGF0YSIsInRhYnMiLCJjb25jYXQiLCJ1bmxpbmtlZCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInByb3BzIiwiY29sb3IiLCJTdHJpbmciLCJzdGlja3kiLCJCb29sZWFuIiwiYW5pbWF0ZWQiLCJzd2lwZWFibGUiLCJsaW5lV2lkdGgiLCJOdW1iZXIiLCJ2YWx1ZSIsImxpbmVIZWlnaHQiLCJhY3RpdmUiLCJib3JkZXIiLCJkdXJhdGlvbiIsInpJbmRleCIsInN3aXBlVGhyZXNob2xkIiwib2Zmc2V0VG9wIiwibGluZVN0eWxlIiwic2Nyb2xsTGVmdCIsInNjcm9sbGFibGUiLCJ0cmFja1N0eWxlIiwid3JhcFN0eWxlIiwicG9zaXRpb24iLCJ3YXRjaCIsInNldCIsImxlbmd0aCIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiLCJzZXRMaW5lIiwic2V0VHJhY2siLCJzY3JvbGxJbnRvVmlldyIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsIm5hdkhlaWdodCIsImhlaWdodCIsIm9ic2VydmVyQ29udGVudFNjcm9sbCIsImRlc3Ryb3llZCIsImNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm1ldGhvZHMiLCJzZXRBY3RpdmVUYWIiLCJ0cmlnZ2VyIiwiZXZlbnROYW1lIiwiJGVtaXQiLCJ0aXRsZSIsIm9uVGFwIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImRpc2FibGVkIiwic2V0QWN0aXZlIiwic2tpcFRyYW5zaXRpb24iLCJyZWN0cyIsIndpZHRoIiwibGVmdCIsInNsaWNlIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJ0cmFuc2l0aW9uIiwiZm9yRWFjaCIsIml0ZW0iLCJpbml0ZWQiLCJQcm9taXNlIiwiYWxsIiwidGFiUmVjdHMiLCJuYXZSZWN0IiwidGFiUmVjdCIsIm9mZnNldExlZnQiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmUiLCJvblRvdWNoRW5kIiwiZGlyZWN0aW9uIiwiZGVsdGFYIiwib2Zmc2V0WCIsIm1pblN3aXBlRGlzdGFuY2UiLCJzZXRXcmFwU3R5bGUiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0IiwicmVsYXRpdmVUb1ZpZXdwb3J0IiwidG9wIiwib2JzZXJ2ZSIsInJlcyIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImludGVyc2VjdGlvblJhdGlvIiwic2Nyb2xsVG9wIiwiaXNGaXhlZCIsInNldFBvc2l0aW9uIiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsWUFBUSxDQUFDQyxZQUFELENBREU7QUFFVkMsYUFBUyxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGtCQUEzQixFQUErQyxZQUEvQyxDQUZDO0FBR1ZDLGNBQVU7QUFDTkMsY0FBTSxLQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxLQUhELEVBR1E7QUFDVixpQkFBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCRCxLQUFoQjtBQUNBLGlCQUFLRSxVQUFMLENBQWdCLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixDQUFlQyxNQUFmLENBQXNCTCxNQUFNRyxJQUE1QixDQUFoQjtBQUNILFNBTks7QUFPTkcsZ0JBUE0sb0JBT0dOLEtBUEgsRUFPVTtBQUNaLGdCQUFNTyxRQUFRLEtBQUtQLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQlIsS0FBbkIsQ0FBZDtBQURZLGdCQUVKSSxJQUZJLEdBRUssS0FBS0QsSUFGVixDQUVKQyxJQUZJOztBQUdaQSxpQkFBS0ssTUFBTCxDQUFZRixLQUFaLEVBQW1CLENBQW5CO0FBQ0EsaUJBQUtQLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQkYsS0FBbEIsRUFBeUIsQ0FBekI7QUFDQSxpQkFBS0wsVUFBTCxDQUFnQkUsSUFBaEI7QUFDSDtBQWJLLEtBSEE7QUFrQlZNLFdBQU87QUFDSEMsZUFBT0MsTUFESjtBQUVIQyxnQkFBUUMsT0FGTDtBQUdIQyxrQkFBVUQsT0FIUDtBQUlIRSxtQkFBV0YsT0FKUjtBQUtIRyxtQkFBVztBQUNQbkIsa0JBQU1vQixNQURDO0FBRVBDLG1CQUFPLENBQUM7QUFGRCxTQUxSO0FBU0hDLG9CQUFZO0FBQ1J0QixrQkFBTW9CLE1BREU7QUFFUkMsbUJBQU8sQ0FBQztBQUZBLFNBVFQ7QUFhSEUsZ0JBQVE7QUFDSnZCLGtCQUFNb0IsTUFERjtBQUVKQyxtQkFBTztBQUZILFNBYkw7QUFpQkhyQixjQUFNO0FBQ0ZBLGtCQUFNYyxNQURKO0FBRUZPLG1CQUFPO0FBRkwsU0FqQkg7QUFxQkhHLGdCQUFRO0FBQ0p4QixrQkFBTWdCLE9BREY7QUFFSkssbUJBQU87QUFGSCxTQXJCTDtBQXlCSEksa0JBQVU7QUFDTnpCLGtCQUFNb0IsTUFEQTtBQUVOQyxtQkFBTztBQUZELFNBekJQO0FBNkJISyxnQkFBUTtBQUNKMUIsa0JBQU1vQixNQURGO0FBRUpDLG1CQUFPO0FBRkgsU0E3Qkw7QUFpQ0hNLHdCQUFnQjtBQUNaM0Isa0JBQU1vQixNQURNO0FBRVpDLG1CQUFPO0FBRkssU0FqQ2I7QUFxQ0hPLG1CQUFXO0FBQ1A1QixrQkFBTW9CLE1BREM7QUFFUEMsbUJBQU87QUFGQTtBQXJDUixLQWxCRztBQTREVmhCLFVBQU07QUFDRkMsY0FBTSxFQURKO0FBRUZ1QixtQkFBVyxFQUZUO0FBR0ZDLG9CQUFZLENBSFY7QUFJRkMsb0JBQVksS0FKVjtBQUtGQyxvQkFBWSxFQUxWO0FBTUZDLG1CQUFXLEVBTlQ7QUFPRkMsa0JBQVU7QUFQUixLQTVESTtBQXFFVkMsV0FBTztBQUNIUixzQkFERyw0QkFDYztBQUNiLGlCQUFLUyxHQUFMLENBQVM7QUFDTEwsNEJBQVksS0FBSzdCLEtBQUwsQ0FBV21DLE1BQVgsR0FBb0IsS0FBS2hDLElBQUwsQ0FBVXNCO0FBRHJDLGFBQVQ7QUFHSCxTQUxFOztBQU1IZCxlQUFPLFNBTko7QUFPSE0sbUJBQVcsU0FQUjtBQVFIRyxvQkFBWSxTQVJUO0FBU0hDLGdCQUFRLGNBVEw7QUFVSE4sa0JBQVUsVUFWUDtBQVdIVyxtQkFBVztBQVhSLEtBckVHO0FBa0ZWVSxnQkFsRlUsMEJBa0ZLO0FBQ1gsYUFBS3BDLEtBQUwsR0FBYSxFQUFiO0FBQ0gsS0FwRlM7QUFxRlZxQyxXQXJGVSxxQkFxRkE7QUFBQTs7QUFDTixhQUFLQyxPQUFMLENBQWEsSUFBYjtBQUNBLGFBQUtDLFFBQUw7QUFDQSxhQUFLQyxjQUFMO0FBQ0EsYUFBS0MsT0FBTCxDQUFhLGlCQUFiLEVBQWdDQyxJQUFoQyxDQUFxQyxVQUFDQyxJQUFELEVBQVU7QUFDM0Msa0JBQUtDLFNBQUwsR0FBaUJELEtBQUtFLE1BQXRCO0FBQ0Esa0JBQUtDLHFCQUFMO0FBQ0gsU0FIRDtBQUlILEtBN0ZTO0FBOEZWQyxhQTlGVSx1QkE4RkU7QUFDUjtBQUNBLGFBQUtDLDBCQUFMLEdBQWtDQyxVQUFsQztBQUNILEtBakdTOztBQWtHVkMsYUFBUztBQUNMaEQsa0JBREssc0JBQ01FLElBRE4sRUFDWTtBQUNiQSxtQkFBT0EsUUFBUSxLQUFLRCxJQUFMLENBQVVDLElBQXpCO0FBQ0EsaUJBQUs4QixHQUFMLENBQVM7QUFDTDlCLDBCQURLO0FBRUx5Qiw0QkFBWXpCLEtBQUsrQixNQUFMLEdBQWMsS0FBS2hDLElBQUwsQ0FBVXNCO0FBRi9CLGFBQVQ7QUFJQSxpQkFBSzBCLFlBQUw7QUFDSCxTQVJJO0FBU0xDLGVBVEssbUJBU0dDLFNBVEgsRUFTYzlDLEtBVGQsRUFTcUI7QUFDdEIsaUJBQUsrQyxLQUFMLENBQVdELFNBQVgsRUFBc0I7QUFDbEI5Qyw0QkFEa0I7QUFFbEJnRCx1QkFBTyxLQUFLcEQsSUFBTCxDQUFVQyxJQUFWLENBQWVHLEtBQWYsRUFBc0JnRDtBQUZYLGFBQXRCO0FBSUgsU0FkSTtBQWVMQyxhQWZLLGlCQWVDQyxLQWZELEVBZVE7QUFBQSxnQkFDRGxELEtBREMsR0FDU2tELE1BQU1DLGFBQU4sQ0FBb0JDLE9BRDdCLENBQ0RwRCxLQURDOztBQUVULGdCQUFJLEtBQUtKLElBQUwsQ0FBVUMsSUFBVixDQUFlRyxLQUFmLEVBQXNCcUQsUUFBMUIsRUFBb0M7QUFDaEMscUJBQUtSLE9BQUwsQ0FBYSxVQUFiLEVBQXlCN0MsS0FBekI7QUFDSCxhQUZELE1BR0s7QUFDRCxxQkFBSzZDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCN0MsS0FBdEI7QUFDQSxxQkFBS3NELFNBQUwsQ0FBZXRELEtBQWY7QUFDSDtBQUNKLFNBeEJJO0FBeUJMc0QsaUJBekJLLHFCQXlCS3hDLE1BekJMLEVBeUJhO0FBQ2QsZ0JBQUlBLFdBQVcsS0FBS2xCLElBQUwsQ0FBVWtCLE1BQXpCLEVBQWlDO0FBQzdCLHFCQUFLK0IsT0FBTCxDQUFhLFFBQWIsRUFBdUIvQixNQUF2QjtBQUNBLHFCQUFLYSxHQUFMLENBQVMsRUFBRWIsY0FBRixFQUFUO0FBQ0EscUJBQUs4QixZQUFMO0FBQ0g7QUFDSixTQS9CSTtBQWdDTGIsZUFoQ0ssbUJBZ0NHd0IsY0FoQ0gsRUFnQ21CO0FBQUE7O0FBQ3BCLGdCQUFJLEtBQUszRCxJQUFMLENBQVVMLElBQVYsS0FBbUIsTUFBdkIsRUFBK0I7QUFDM0I7QUFDSDtBQUhtQix3QkFJdUMsS0FBS0ssSUFKNUM7QUFBQSxnQkFJWlEsS0FKWSxTQUlaQSxLQUpZO0FBQUEsZ0JBSUxVLE1BSkssU0FJTEEsTUFKSztBQUFBLGdCQUlHRSxRQUpILFNBSUdBLFFBSkg7QUFBQSxnQkFJYU4sU0FKYixTQUlhQSxTQUpiO0FBQUEsZ0JBSXdCRyxVQUp4QixTQUl3QkEsVUFKeEI7O0FBS3BCLGlCQUFLcUIsT0FBTCxDQUFhLFVBQWIsRUFBeUIsSUFBekIsRUFBK0JDLElBQS9CLENBQW9DLFVBQUNxQixLQUFELEVBQVc7QUFDM0Msb0JBQU1wQixPQUFPb0IsTUFBTTFDLE1BQU4sQ0FBYjtBQUNBLG9CQUFNMkMsUUFBUS9DLGNBQWMsQ0FBQyxDQUFmLEdBQW1CQSxTQUFuQixHQUErQjBCLEtBQUtxQixLQUFMLEdBQWEsQ0FBMUQ7QUFDQSxvQkFBTW5CLFNBQVN6QixlQUFlLENBQUMsQ0FBaEIsZ0JBQStCQSxVQUEvQixXQUFpRCxFQUFoRTtBQUNBLG9CQUFJNkMsT0FBT0YsTUFDTkcsS0FETSxDQUNBLENBREEsRUFDRzdDLE1BREgsRUFFTjhDLE1BRk0sQ0FFQyxVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSwyQkFBZ0JELE9BQU9DLEtBQUtMLEtBQTVCO0FBQUEsaUJBRkQsRUFFb0MsQ0FGcEMsQ0FBWDtBQUdBQyx3QkFBUSxDQUFDdEIsS0FBS3FCLEtBQUwsR0FBYUEsS0FBZCxJQUF1QixDQUEvQjtBQUNBLG9CQUFNTSxhQUFhUixpQkFDYixFQURhLDZCQUVXdkMsUUFGWCx3Q0FFc0RBLFFBRnRELE9BQW5CO0FBR0EsdUJBQUtXLEdBQUwsQ0FBUztBQUNMUCxrREFDTmtCLE1BRE0sNkJBRUNtQixLQUZELDJDQUdZckQsS0FIWixxREFJd0JzRCxJQUp4QixnREFLZ0JBLElBTGhCLDBCQU1OSyxVQU5NO0FBREssaUJBQVQ7QUFVSCxhQXJCRDtBQXNCSCxTQTNESTtBQTRETC9CLGdCQTVESyxzQkE0RE07QUFBQTs7QUFBQSx5QkFDZ0MsS0FBS3BDLElBRHJDO0FBQUEsZ0JBQ0NZLFFBREQsVUFDQ0EsUUFERDtBQUFBLGdCQUNXTSxNQURYLFVBQ1dBLE1BRFg7QUFBQSxnQkFDbUJFLFFBRG5CLFVBQ21CQSxRQURuQjs7QUFFUCxnQkFBSSxDQUFDUixRQUFMLEVBQ0ksT0FBTyxFQUFQO0FBQ0osaUJBQUswQixPQUFMLENBQWEsb0JBQWIsRUFBbUNDLElBQW5DLENBQXdDLFVBQUNDLElBQUQsRUFBVTtBQUFBLG9CQUN0Q3FCLEtBRHNDLEdBQzVCckIsSUFENEIsQ0FDdENxQixLQURzQzs7QUFFOUMsdUJBQUs5QixHQUFMLENBQVM7QUFDTEosMERBQ0NrQyxRQUFRLE9BQUtoRSxLQUFMLENBQVdtQyxNQURwQiwrQkFFQSxDQUFDLENBQUQsR0FBS2QsTUFBTCxHQUFjMkMsS0FGZCwwQ0FHV3pDLFFBSFg7QUFESyxpQkFBVDtBQVNBLG9CQUFNYixRQUFRLEVBQUVzRCxZQUFGLEVBQVNqRCxrQkFBVCxFQUFkO0FBQ0EsdUJBQUtmLEtBQUwsQ0FBV3VFLE9BQVgsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCQSx5QkFBS3RDLEdBQUwsQ0FBU3hCLEtBQVQ7QUFDSCxpQkFGRDtBQUdILGFBZkQ7QUFnQkgsU0FoRkk7QUFpRkx5QyxvQkFqRkssMEJBaUZVO0FBQUE7O0FBQ1gsaUJBQUtuRCxLQUFMLENBQVd1RSxPQUFYLENBQW1CLFVBQUNDLElBQUQsRUFBT2pFLEtBQVAsRUFBaUI7QUFDaEMsb0JBQU1KLE9BQU87QUFDVGtCLDRCQUFRZCxVQUFVLE9BQUtKLElBQUwsQ0FBVWtCO0FBRG5CLGlCQUFiO0FBR0Esb0JBQUlsQixLQUFLa0IsTUFBVCxFQUFpQjtBQUNibEIseUJBQUtzRSxNQUFMLEdBQWMsSUFBZDtBQUNIO0FBQ0Qsb0JBQUl0RSxLQUFLa0IsTUFBTCxLQUFnQm1ELEtBQUtyRSxJQUFMLENBQVVrQixNQUE5QixFQUFzQztBQUNsQ21ELHlCQUFLdEMsR0FBTCxDQUFTL0IsSUFBVDtBQUNIO0FBQ0osYUFWRDtBQVdBLGlDQUFTLFlBQU07QUFDWCx1QkFBS21DLE9BQUw7QUFDQSx1QkFBS0MsUUFBTDtBQUNBLHVCQUFLQyxjQUFMO0FBQ0gsYUFKRDtBQUtILFNBbEdJOztBQW1HTDtBQUNBQSxzQkFwR0ssNEJBb0dZO0FBQUE7O0FBQUEseUJBQ2tCLEtBQUtyQyxJQUR2QjtBQUFBLGdCQUNMa0IsTUFESyxVQUNMQSxNQURLO0FBQUEsZ0JBQ0dRLFVBREgsVUFDR0EsVUFESDs7QUFFYixnQkFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2I7QUFDSDtBQUNENkMsb0JBQVFDLEdBQVIsQ0FBWSxDQUNSLEtBQUtsQyxPQUFMLENBQWEsVUFBYixFQUF5QixJQUF6QixDQURRLEVBRVIsS0FBS0EsT0FBTCxDQUFhLGdCQUFiLENBRlEsQ0FBWixFQUdHQyxJQUhILENBR1EsZ0JBQXlCO0FBQUE7QUFBQSxvQkFBdkJrQyxRQUF1QjtBQUFBLG9CQUFiQyxPQUFhOztBQUM3QixvQkFBTUMsVUFBVUYsU0FBU3ZELE1BQVQsQ0FBaEI7QUFDQSxvQkFBTTBELGFBQWFILFNBQ2RWLEtBRGMsQ0FDUixDQURRLEVBQ0w3QyxNQURLLEVBRWQ4QyxNQUZjLENBRVAsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsMkJBQWdCRCxPQUFPQyxLQUFLTCxLQUE1QjtBQUFBLGlCQUZPLEVBRTRCLENBRjVCLENBQW5CO0FBR0EsdUJBQUs5QixHQUFMLENBQVM7QUFDTE4sZ0NBQVltRCxhQUFhLENBQUNGLFFBQVFiLEtBQVIsR0FBZ0JjLFFBQVFkLEtBQXpCLElBQWtDO0FBRHRELGlCQUFUO0FBR0gsYUFYRDtBQVlILFNBckhJO0FBc0hMZ0Isb0JBdEhLLHdCQXNIUXZCLEtBdEhSLEVBc0hlO0FBQ2hCLGdCQUFJLENBQUMsS0FBS3RELElBQUwsQ0FBVWEsU0FBZixFQUNJO0FBQ0osaUJBQUtpRSxVQUFMLENBQWdCeEIsS0FBaEI7QUFDSCxTQTFISTtBQTJITHlCLG1CQTNISyx1QkEySE96QixLQTNIUCxFQTJIYztBQUNmLGdCQUFJLENBQUMsS0FBS3RELElBQUwsQ0FBVWEsU0FBZixFQUNJO0FBQ0osaUJBQUttRSxTQUFMLENBQWUxQixLQUFmO0FBQ0gsU0EvSEk7O0FBZ0lMO0FBQ0EyQixrQkFqSUssd0JBaUlRO0FBQ1QsZ0JBQUksQ0FBQyxLQUFLakYsSUFBTCxDQUFVYSxTQUFmLEVBQ0k7QUFGSyx5QkFHZ0IsS0FBS2IsSUFIckI7QUFBQSxnQkFHRGtCLE1BSEMsVUFHREEsTUFIQztBQUFBLGdCQUdPakIsSUFIUCxVQUdPQSxJQUhQO0FBQUEsZ0JBSURpRixTQUpDLEdBSThCLElBSjlCLENBSURBLFNBSkM7QUFBQSxnQkFJVUMsTUFKVixHQUk4QixJQUo5QixDQUlVQSxNQUpWO0FBQUEsZ0JBSWtCQyxPQUpsQixHQUk4QixJQUo5QixDQUlrQkEsT0FKbEI7O0FBS1QsZ0JBQU1DLG1CQUFtQixFQUF6QjtBQUNBLGdCQUFJSCxjQUFjLFlBQWQsSUFBOEJFLFdBQVdDLGdCQUE3QyxFQUErRDtBQUMzRCxvQkFBSUYsU0FBUyxDQUFULElBQWNqRSxXQUFXLENBQTdCLEVBQWdDO0FBQzVCLHlCQUFLd0MsU0FBTCxDQUFleEMsU0FBUyxDQUF4QjtBQUNILGlCQUZELE1BR0ssSUFBSWlFLFNBQVMsQ0FBVCxJQUFjakUsV0FBV2pCLEtBQUsrQixNQUFMLEdBQWMsQ0FBM0MsRUFBOEM7QUFDL0MseUJBQUswQixTQUFMLENBQWV4QyxTQUFTLENBQXhCO0FBQ0g7QUFDSjtBQUNKLFNBL0lJO0FBZ0pMb0Usb0JBaEpLLDBCQWdKVTtBQUFBLHlCQUNxQixLQUFLdEYsSUFEMUI7QUFBQSxnQkFDSHVCLFNBREcsVUFDSEEsU0FERztBQUFBLGdCQUNRTSxRQURSLFVBQ1FBLFFBRFI7O0FBRVgsZ0JBQUlELGtCQUFKO0FBQ0Esb0JBQVFDLFFBQVI7QUFDSSxxQkFBSyxLQUFMO0FBQ0lELHdEQUNETCxTQURDO0FBSUE7QUFDSixxQkFBSyxRQUFMO0FBQ0lLO0FBSUE7QUFDSjtBQUNJQSxnQ0FBWSxFQUFaO0FBZFI7QUFnQkE7QUFDQSxnQkFBSUEsY0FBYyxLQUFLNUIsSUFBTCxDQUFVNEIsU0FBNUIsRUFDSTtBQUNKLGlCQUFLRyxHQUFMLENBQVMsRUFBRUgsb0JBQUYsRUFBVDtBQUNILFNBdktJO0FBd0tMZSw2QkF4S0ssbUNBd0ttQjtBQUFBOztBQUNwQixnQkFBSSxDQUFDLEtBQUszQyxJQUFMLENBQVVVLE1BQWYsRUFBdUI7QUFDbkI7QUFDSDtBQUhtQixnQkFJWmEsU0FKWSxHQUlFLEtBQUt2QixJQUpQLENBSVp1QixTQUpZOztBQUFBLHdDQUtLZ0UsR0FBR0MsaUJBQUgsRUFMTDtBQUFBLGdCQUtaQyxZQUxZLHlCQUtaQSxZQUxZO0FBTXBCOzs7QUFDQSxpQkFBSzVDLDBCQUFMLEdBQWtDQyxVQUFsQztBQUNBO0FBQ0EsaUJBQUtELDBCQUFMLEdBQ0s2QyxrQkFETCxDQUN3QixFQUFFQyxLQUFLLEVBQUUsS0FBS2xELFNBQUwsR0FBaUJsQixTQUFuQixDQUFQLEVBRHhCLEVBRUtxRSxPQUZMLENBRWEsV0FGYixFQUUwQixVQUFDQyxHQUFELEVBQVM7QUFBQSxvQkFDdkJGLEdBRHVCLEdBQ2ZFLElBQUlDLGtCQURXLENBQ3ZCSCxHQUR1Qjs7QUFFL0Isb0JBQUlBLE1BQU1wRSxTQUFWLEVBQXFCO0FBQ2pCO0FBQ0g7QUFDRCxvQkFBTU0sV0FBV2dFLElBQUlFLGlCQUFKLEdBQXdCLENBQXhCLEdBQTRCLEtBQTVCLEdBQW9DLFFBQXJEO0FBQ0EsdUJBQUs1QyxLQUFMLENBQVcsUUFBWCxFQUFxQjtBQUNqQjZDLCtCQUFXTCxNQUFNcEUsU0FEQTtBQUVqQjBFLDZCQUFTcEUsYUFBYTtBQUZMLGlCQUFyQjtBQUlBLHVCQUFLcUUsV0FBTCxDQUFpQnJFLFFBQWpCO0FBQ0gsYUFiRDtBQWNBO0FBQ0EsaUJBQUtnQiwwQkFBTCxHQUNLNkMsa0JBREwsQ0FDd0IsRUFBRVMsUUFBUSxFQUFFVixlQUFlLENBQWYsR0FBbUJsRSxTQUFyQixDQUFWLEVBRHhCLEVBRUtxRSxPQUZMLENBRWEsV0FGYixFQUUwQixVQUFDQyxHQUFELEVBQVM7QUFBQSw0Q0FDUEEsSUFBSUMsa0JBREc7QUFBQSxvQkFDdkJILEdBRHVCLHlCQUN2QkEsR0FEdUI7QUFBQSxvQkFDbEJRLE1BRGtCLHlCQUNsQkEsTUFEa0I7O0FBRS9CLG9CQUFJQSxTQUFTLE9BQUsxRCxTQUFsQixFQUE2QjtBQUN6QjtBQUNIO0FBQ0Qsb0JBQU1aLFdBQVdnRSxJQUFJRSxpQkFBSixHQUF3QixDQUF4QixHQUE0QixLQUE1QixHQUFvQyxFQUFyRDtBQUNBLHVCQUFLNUMsS0FBTCxDQUFXLFFBQVgsRUFBcUI7QUFDakI2QywrQkFBV0wsTUFBTXBFLFNBREE7QUFFakIwRSw2QkFBU3BFLGFBQWE7QUFGTCxpQkFBckI7QUFJQSx1QkFBS3FFLFdBQUwsQ0FBaUJyRSxRQUFqQjtBQUNILGFBYkQ7QUFjSCxTQTlNSTtBQStNTHFFLG1CQS9NSyx1QkErTU9yRSxRQS9NUCxFQStNaUI7QUFBQTs7QUFDbEIsZ0JBQUlBLGFBQWEsS0FBSzdCLElBQUwsQ0FBVTZCLFFBQTNCLEVBQXFDO0FBQ2pDLHFCQUFLRSxHQUFMLENBQVMsRUFBRUYsa0JBQUYsRUFBVCxFQUF1QlUsSUFBdkIsQ0FBNEIsWUFBTTtBQUM5QiwyQkFBSytDLFlBQUw7QUFDSCxpQkFGRDtBQUdIO0FBQ0o7QUFyTkk7QUFsR0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IHRvdWNoIH0gZnJvbSAnLi4vbWl4aW5zL3RvdWNoJztcbmltcG9ydCB7IG5leHRUaWNrIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcblZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW3RvdWNoXSxcbiAgICBjbGFzc2VzOiBbJ25hdi1jbGFzcycsICd0YWItY2xhc3MnLCAndGFiLWFjdGl2ZS1jbGFzcycsICdsaW5lLWNsYXNzJ10sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3RhYicsXG4gICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICAgICAgbGlua2VkKGNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYWJzKHRoaXMuZGF0YS50YWJzLmNvbmNhdChjaGlsZC5kYXRhKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkKGNoaWxkKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGQuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgICAgICBjb25zdCB7IHRhYnMgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFicyh0YWJzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgY29sb3I6IFN0cmluZyxcbiAgICAgICAgc3RpY2t5OiBCb29sZWFuLFxuICAgICAgICBhbmltYXRlZDogQm9vbGVhbixcbiAgICAgICAgc3dpcGVhYmxlOiBCb29sZWFuLFxuICAgICAgICBsaW5lV2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuICAgICAgICBsaW5lSGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogLTFcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2xpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMC4zXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc3dpcGVUaHJlc2hvbGQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA0XG4gICAgICAgIH0sXG4gICAgICAgIG9mZnNldFRvcDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICB0YWJzOiBbXSxcbiAgICAgICAgbGluZVN0eWxlOiAnJyxcbiAgICAgICAgc2Nyb2xsTGVmdDogMCxcbiAgICAgICAgc2Nyb2xsYWJsZTogZmFsc2UsXG4gICAgICAgIHRyYWNrU3R5bGU6ICcnLFxuICAgICAgICB3cmFwU3R5bGU6ICcnLFxuICAgICAgICBwb3NpdGlvbjogJydcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHN3aXBlVGhyZXNob2xkKCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHNjcm9sbGFibGU6IHRoaXMuY2hpbGQubGVuZ3RoID4gdGhpcy5kYXRhLnN3aXBlVGhyZXNob2xkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6ICdzZXRMaW5lJyxcbiAgICAgICAgbGluZVdpZHRoOiAnc2V0TGluZScsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdzZXRMaW5lJyxcbiAgICAgICAgYWN0aXZlOiAnc2V0QWN0aXZlVGFiJyxcbiAgICAgICAgYW5pbWF0ZWQ6ICdzZXRUcmFjaycsXG4gICAgICAgIG9mZnNldFRvcDogJ3NldFdyYXBTdHlsZSdcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZCA9IFtdO1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5zZXRMaW5lKHRydWUpO1xuICAgICAgICB0aGlzLnNldFRyYWNrKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXRhYnNfX3dyYXAnKS50aGVuKChyZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdkhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlckNvbnRlbnRTY3JvbGwoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcigpLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlVGFicyh0YWJzKSB7XG4gICAgICAgICAgICB0YWJzID0gdGFicyB8fCB0aGlzLmRhdGEudGFicztcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICB0YWJzLFxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGU6IHRhYnMubGVuZ3RoID4gdGhpcy5kYXRhLnN3aXBlVGhyZXNob2xkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlVGFiKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXIoZXZlbnROYW1lLCBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdChldmVudE5hbWUsIHtcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5kYXRhLnRhYnNbaW5kZXhdLnRpdGxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25UYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudGFic1tpbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2Rpc2FibGVkJywgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldEFjdGl2ZShhY3RpdmUpIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IHRoaXMuZGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIGFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoeyBhY3RpdmUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVUYWIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0TGluZShza2lwVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS50eXBlICE9PSAnbGluZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yLCBhY3RpdmUsIGR1cmF0aW9uLCBsaW5lV2lkdGgsIGxpbmVIZWlnaHQgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi10YWInLCB0cnVlKS50aGVuKChyZWN0cykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSByZWN0c1thY3RpdmVdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gbGluZVdpZHRoICE9PSAtMSA/IGxpbmVXaWR0aCA6IHJlY3Qud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGxpbmVIZWlnaHQgIT09IC0xID8gYGhlaWdodDogJHtsaW5lSGVpZ2h0fXB4O2AgOiAnJztcbiAgICAgICAgICAgICAgICBsZXQgbGVmdCA9IHJlY3RzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBhY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgKyBjdXJyLndpZHRoLCAwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IChyZWN0LndpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gc2tpcFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICA6IGB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke2R1cmF0aW9ufXM7IC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtkdXJhdGlvbn1zO2A7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IGBcbiAgICAgICAgICAgICR7aGVpZ2h0fVxuICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGh9cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bGVmdH1weCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtsZWZ0fXB4KTtcbiAgICAgICAgICAgICR7dHJhbnNpdGlvbn1cbiAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VHJhY2soKSB7XG4gICAgICAgICAgICBjb25zdCB7IGFuaW1hdGVkLCBhY3RpdmUsIGR1cmF0aW9uIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIWFuaW1hdGVkKVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi10YWJzX19jb250ZW50JykudGhlbigocmVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHJlY3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICB0cmFja1N0eWxlOiBgXG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aCAqIHRoaXMuY2hpbGQubGVuZ3RofXB4O1xuICAgICAgICAgICAgbGVmdDogJHstMSAqIGFjdGl2ZSAqIHdpZHRofXB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAke2R1cmF0aW9ufXM7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BzID0geyB3aWR0aCwgYW5pbWF0ZWQgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXQocHJvcHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEFjdGl2ZVRhYigpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGluZGV4ID09PSB0aGlzLmRhdGEuYWN0aXZlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pbml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3RpdmUgIT09IGl0ZW0uZGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMaW5lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzY3JvbGwgYWN0aXZlIHRhYiBpbnRvIHZpZXdcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGFjdGl2ZSwgc2Nyb2xsYWJsZSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCFzY3JvbGxhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi10YWInLCB0cnVlKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tdGFic19fbmF2JylcbiAgICAgICAgICAgIF0pLnRoZW4oKFt0YWJSZWN0cywgbmF2UmVjdF0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJSZWN0ID0gdGFiUmVjdHNbYWN0aXZlXTtcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gdGFiUmVjdHNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIGFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIGN1cnIud2lkdGgsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogb2Zmc2V0TGVmdCAtIChuYXZSZWN0LndpZHRoIC0gdGFiUmVjdC53aWR0aCkgLyAyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zd2lwZWFibGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy50b3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN3aXBlYWJsZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnRvdWNoTW92ZShldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdhdGNoIHN3aXBlIHRvdWNoIGVuZFxuICAgICAgICBvblRvdWNoRW5kKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuc3dpcGVhYmxlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHsgYWN0aXZlLCB0YWJzIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCB7IGRpcmVjdGlvbiwgZGVsdGFYLCBvZmZzZXRYIH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgbWluU3dpcGVEaXN0YW5jZSA9IDUwO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIG9mZnNldFggPj0gbWluU3dpcGVEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWx0YVggPiAwICYmIGFjdGl2ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShhY3RpdmUgLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVsdGFYIDwgMCAmJiBhY3RpdmUgIT09IHRhYnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShhY3RpdmUgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldFdyYXBTdHlsZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0VG9wLCBwb3NpdGlvbiB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgbGV0IHdyYXBTdHlsZTtcbiAgICAgICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgICAgICB3cmFwU3R5bGUgPSBgXG4gICAgICAgICAgICB0b3A6ICR7b2Zmc2V0VG9wfXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgICAgIHdyYXBTdHlsZSA9IGBcbiAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB3cmFwU3R5bGUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGN1dCBkb3duIGBzZXRgXG4gICAgICAgICAgICBpZiAod3JhcFN0eWxlID09PSB0aGlzLmRhdGEud3JhcFN0eWxlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgd3JhcFN0eWxlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvYnNlcnZlckNvbnRlbnRTY3JvbGwoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IG9mZnNldFRvcCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgeyB3aW5kb3dIZWlnaHQgfSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKCkuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcigpXG4gICAgICAgICAgICAgICAgLnJlbGF0aXZlVG9WaWV3cG9ydCh7IHRvcDogLSh0aGlzLm5hdkhlaWdodCArIG9mZnNldFRvcCkgfSlcbiAgICAgICAgICAgICAgICAub2JzZXJ2ZSgnLnZhbi10YWJzJywgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdG9wIH0gPSByZXMuYm91bmRpbmdDbGllbnRSZWN0O1xuICAgICAgICAgICAgICAgIGlmICh0b3AgPiBvZmZzZXRUb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHJlcy5pbnRlcnNlY3Rpb25SYXRpbyA+IDAgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Njcm9sbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0b3AgKyBvZmZzZXRUb3AsXG4gICAgICAgICAgICAgICAgICAgIGlzRml4ZWQ6IHBvc2l0aW9uID09PSAndG9wJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKClcbiAgICAgICAgICAgICAgICAucmVsYXRpdmVUb1ZpZXdwb3J0KHsgYm90dG9tOiAtKHdpbmRvd0hlaWdodCAtIDEgLSBvZmZzZXRUb3ApIH0pXG4gICAgICAgICAgICAgICAgLm9ic2VydmUoJy52YW4tdGFicycsIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRvcCwgYm90dG9tIH0gPSByZXMuYm91bmRpbmdDbGllbnRSZWN0O1xuICAgICAgICAgICAgICAgIGlmIChib3R0b20gPCB0aGlzLm5hdkhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gcmVzLmludGVyc2VjdGlvblJhdGlvID4gMCA/ICd0b3AnIDogJyc7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsJywge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRvcCArIG9mZnNldFRvcCxcbiAgICAgICAgICAgICAgICAgICAgaXNGaXhlZDogcG9zaXRpb24gPT09ICd0b3AnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiAhPT0gdGhpcy5kYXRhLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoeyBwb3NpdGlvbiB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRXcmFwU3R5bGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19