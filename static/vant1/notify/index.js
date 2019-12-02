'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

var _safeArea = require('./../mixins/safe-area.js');

(0, _component.VantComponent)({
    mixins: [(0, _safeArea.safeArea)()],
    props: {
        text: String,
        color: {
            type: String,
            value: '#fff'
        },
        backgroundColor: {
            type: String,
            value: _color.RED
        },
        duration: {
            type: Number,
            value: 3000
        },
        zIndex: {
            type: Number,
            value: 110
        }
    },
    methods: {
        show: function show() {
            var _this = this;

            var duration = this.data.duration;

            clearTimeout(this.timer);
            this.set({
                show: true
            });
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(function () {
                    _this.hide();
                }, duration);
            }
        },
        hide: function hide() {
            clearTimeout(this.timer);
            this.set({
                show: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInByb3BzIiwidGV4dCIsIlN0cmluZyIsImNvbG9yIiwidHlwZSIsInZhbHVlIiwiYmFja2dyb3VuZENvbG9yIiwiUkVEIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJ6SW5kZXgiLCJtZXRob2RzIiwic2hvdyIsImRhdGEiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNldCIsIkluZmluaXR5Iiwic2V0VGltZW91dCIsImhpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsWUFBUSxDQUFDLHlCQUFELENBREU7QUFFVkMsV0FBTztBQUNIQyxjQUFNQyxNQURIO0FBRUhDLGVBQU87QUFDSEMsa0JBQU1GLE1BREg7QUFFSEcsbUJBQU87QUFGSixTQUZKO0FBTUhDLHlCQUFpQjtBQUNiRixrQkFBTUYsTUFETztBQUViRyxtQkFBT0U7QUFGTSxTQU5kO0FBVUhDLGtCQUFVO0FBQ05KLGtCQUFNSyxNQURBO0FBRU5KLG1CQUFPO0FBRkQsU0FWUDtBQWNISyxnQkFBUTtBQUNKTixrQkFBTUssTUFERjtBQUVKSixtQkFBTztBQUZIO0FBZEwsS0FGRztBQXFCVk0sYUFBUztBQUNMQyxZQURLLGtCQUNFO0FBQUE7O0FBQUEsZ0JBQ0tKLFFBREwsR0FDa0IsS0FBS0ssSUFEdkIsQ0FDS0wsUUFETDs7QUFFSE0seUJBQWEsS0FBS0MsS0FBbEI7QUFDQSxpQkFBS0MsR0FBTCxDQUFTO0FBQ0xKLHNCQUFNO0FBREQsYUFBVDtBQUdBLGdCQUFJSixXQUFXLENBQVgsSUFBZ0JBLGFBQWFTLFFBQWpDLEVBQTJDO0FBQ3ZDLHFCQUFLRixLQUFMLEdBQWFHLFdBQVcsWUFBTTtBQUMxQiwwQkFBS0MsSUFBTDtBQUNILGlCQUZZLEVBRVZYLFFBRlUsQ0FBYjtBQUdIO0FBQ0osU0FaSTtBQWFMVyxZQWJLLGtCQWFFO0FBQ0hMLHlCQUFhLEtBQUtDLEtBQWxCO0FBQ0EsaUJBQUtDLEdBQUwsQ0FBUztBQUNMSixzQkFBTTtBQURELGFBQVQ7QUFHSDtBQWxCSTtBQXJCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgUkVEIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yJztcbmltcG9ydCB7IHNhZmVBcmVhIH0gZnJvbSAnLi4vbWl4aW5zL3NhZmUtYXJlYSc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBtaXhpbnM6IFtzYWZlQXJlYSgpXSxcbiAgICBwcm9wczoge1xuICAgICAgICB0ZXh0OiBTdHJpbmcsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJyNmZmYnXG4gICAgICAgIH0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IFJFRFxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDMwMDBcbiAgICAgICAgfSxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMTEwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2hvdygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZHVyYXRpb24gfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA+IDAgJiYgZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGUoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=