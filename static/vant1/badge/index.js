'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        type: 'ancestor',
        name: 'badge-group',
        linked: function linked(target) {
            this.parent = target;
        }
    },
    props: {
        info: null,
        title: String
    },
    methods: {
        onClick: function onClick() {
            var _this = this;

            var parent = this.parent;

            if (!parent) {
                return;
            }
            var index = parent.badges.indexOf(this);
            parent.setActive(index).then(function () {
                _this.$emit('click', index);
                parent.$emit('change', index);
            });
        },
        setActive: function setActive(active) {
            return this.set({ active: active });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJwYXJlbnQiLCJwcm9wcyIsImluZm8iLCJ0aXRsZSIsIlN0cmluZyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiaW5kZXgiLCJiYWRnZXMiLCJpbmRleE9mIiwic2V0QWN0aXZlIiwidGhlbiIsIiRlbWl0IiwiYWN0aXZlIiwic2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLGNBQVU7QUFDTkMsY0FBTSxVQURBO0FBRU5DLGNBQU0sYUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxNQUhELEVBR1M7QUFDWCxpQkFBS0MsTUFBTCxHQUFjRCxNQUFkO0FBQ0g7QUFMSyxLQURBO0FBUVZFLFdBQU87QUFDSEMsY0FBTSxJQURIO0FBRUhDLGVBQU9DO0FBRkosS0FSRztBQVlWQyxhQUFTO0FBQ0xDLGVBREsscUJBQ0s7QUFBQTs7QUFBQSxnQkFDRU4sTUFERixHQUNhLElBRGIsQ0FDRUEsTUFERjs7QUFFTixnQkFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDVDtBQUNIO0FBQ0QsZ0JBQU1PLFFBQVFQLE9BQU9RLE1BQVAsQ0FBY0MsT0FBZCxDQUFzQixJQUF0QixDQUFkO0FBQ0FULG1CQUFPVSxTQUFQLENBQWlCSCxLQUFqQixFQUF3QkksSUFBeEIsQ0FBNkIsWUFBTTtBQUMvQixzQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JMLEtBQXBCO0FBQ0FQLHVCQUFPWSxLQUFQLENBQWEsUUFBYixFQUF1QkwsS0FBdkI7QUFDSCxhQUhEO0FBSUgsU0FYSTtBQVlMRyxpQkFaSyxxQkFZS0csTUFaTCxFQVlhO0FBQ2QsbUJBQU8sS0FBS0MsR0FBTCxDQUFTLEVBQUVELGNBQUYsRUFBVCxDQUFQO0FBQ0g7QUFkSTtBQVpDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICByZWxhdGlvbjoge1xuICAgICAgICB0eXBlOiAnYW5jZXN0b3InLFxuICAgICAgICBuYW1lOiAnYmFkZ2UtZ3JvdXAnLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgaW5mbzogbnVsbCxcbiAgICAgICAgdGl0bGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrKCkge1xuICAgICAgICAgICAgY29uc3QgeyBwYXJlbnQgfSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmJhZGdlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgcGFyZW50LnNldEFjdGl2ZShpbmRleCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgcGFyZW50LiRlbWl0KCdjaGFuZ2UnLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWN0aXZlKGFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHsgYWN0aXZlIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=