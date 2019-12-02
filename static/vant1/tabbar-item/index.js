'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    props: {
        info: null,
        icon: String,
        dot: Boolean,
        name: {
            type: [String, Number]
        }
    },
    relation: {
        name: 'tabbar',
        type: 'ancestor'
    },
    data: {
        active: false
    },
    methods: {
        onClick: function onClick() {
            if (this.parent) {
                this.parent.onChange(this);
            }
            this.$emit('click');
        },
        updateFromParent: function updateFromParent() {
            var parent = this.parent;

            if (!parent) {
                return;
            }
            var index = parent.children.indexOf(this);
            var parentData = parent.data;
            var data = this.data;

            var active = (data.name || index) === parentData.active;
            var patch = {};
            if (active !== data.active) {
                patch.active = active;
            }
            if (parentData.activeColor !== data.activeColor) {
                patch.activeColor = parentData.activeColor;
            }
            if (parentData.inactiveColor !== data.inactiveColor) {
                patch.inactiveColor = parentData.inactiveColor;
            }
            return Object.keys(patch).length > 0 ? this.set(patch) : Promise.resolve();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5mbyIsImljb24iLCJTdHJpbmciLCJkb3QiLCJCb29sZWFuIiwibmFtZSIsInR5cGUiLCJOdW1iZXIiLCJyZWxhdGlvbiIsImRhdGEiLCJhY3RpdmUiLCJtZXRob2RzIiwib25DbGljayIsInBhcmVudCIsIm9uQ2hhbmdlIiwiJGVtaXQiLCJ1cGRhdGVGcm9tUGFyZW50IiwiaW5kZXgiLCJjaGlsZHJlbiIsImluZGV4T2YiLCJwYXJlbnREYXRhIiwicGF0Y2giLCJhY3RpdmVDb2xvciIsImluYWN0aXZlQ29sb3IiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic2V0IiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTztBQUNIQyxjQUFNLElBREg7QUFFSEMsY0FBTUMsTUFGSDtBQUdIQyxhQUFLQyxPQUhGO0FBSUhDLGNBQU07QUFDRkMsa0JBQU0sQ0FBQ0osTUFBRCxFQUFTSyxNQUFUO0FBREo7QUFKSCxLQURHO0FBU1ZDLGNBQVU7QUFDTkgsY0FBTSxRQURBO0FBRU5DLGNBQU07QUFGQSxLQVRBO0FBYVZHLFVBQU07QUFDRkMsZ0JBQVE7QUFETixLQWJJO0FBZ0JWQyxhQUFTO0FBQ0xDLGVBREsscUJBQ0s7QUFDTixnQkFBSSxLQUFLQyxNQUFULEVBQWlCO0FBQ2IscUJBQUtBLE1BQUwsQ0FBWUMsUUFBWixDQUFxQixJQUFyQjtBQUNIO0FBQ0QsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FOSTtBQU9MQyx3QkFQSyw4QkFPYztBQUFBLGdCQUNQSCxNQURPLEdBQ0ksSUFESixDQUNQQSxNQURPOztBQUVmLGdCQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNUO0FBQ0g7QUFDRCxnQkFBTUksUUFBUUosT0FBT0ssUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsSUFBeEIsQ0FBZDtBQUNBLGdCQUFNQyxhQUFhUCxPQUFPSixJQUExQjtBQU5lLGdCQU9QQSxJQVBPLEdBT0UsSUFQRixDQU9QQSxJQVBPOztBQVFmLGdCQUFNQyxTQUFTLENBQUNELEtBQUtKLElBQUwsSUFBYVksS0FBZCxNQUF5QkcsV0FBV1YsTUFBbkQ7QUFDQSxnQkFBTVcsUUFBUSxFQUFkO0FBQ0EsZ0JBQUlYLFdBQVdELEtBQUtDLE1BQXBCLEVBQTRCO0FBQ3hCVyxzQkFBTVgsTUFBTixHQUFlQSxNQUFmO0FBQ0g7QUFDRCxnQkFBSVUsV0FBV0UsV0FBWCxLQUEyQmIsS0FBS2EsV0FBcEMsRUFBaUQ7QUFDN0NELHNCQUFNQyxXQUFOLEdBQW9CRixXQUFXRSxXQUEvQjtBQUNIO0FBQ0QsZ0JBQUlGLFdBQVdHLGFBQVgsS0FBNkJkLEtBQUtjLGFBQXRDLEVBQXFEO0FBQ2pERixzQkFBTUUsYUFBTixHQUFzQkgsV0FBV0csYUFBakM7QUFDSDtBQUNELG1CQUFPQyxPQUFPQyxJQUFQLENBQVlKLEtBQVosRUFBbUJLLE1BQW5CLEdBQTRCLENBQTVCLEdBQ0QsS0FBS0MsR0FBTCxDQUFTTixLQUFULENBREMsR0FFRE8sUUFBUUMsT0FBUixFQUZOO0FBR0g7QUE3Qkk7QUFoQkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGluZm86IG51bGwsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgZG90OiBCb29sZWFuLFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICd0YWJiYXInLFxuICAgICAgICB0eXBlOiAnYW5jZXN0b3InXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Lm9uQ2hhbmdlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRnJvbVBhcmVudCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGFyZW50IH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50RGF0YSA9IHBhcmVudC5kYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gKGRhdGEubmFtZSB8fCBpbmRleCkgPT09IHBhcmVudERhdGEuYWN0aXZlO1xuICAgICAgICAgICAgY29uc3QgcGF0Y2ggPSB7fTtcbiAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IGRhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2guYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmVudERhdGEuYWN0aXZlQ29sb3IgIT09IGRhdGEuYWN0aXZlQ29sb3IpIHtcbiAgICAgICAgICAgICAgICBwYXRjaC5hY3RpdmVDb2xvciA9IHBhcmVudERhdGEuYWN0aXZlQ29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50RGF0YS5pbmFjdGl2ZUNvbG9yICE9PSBkYXRhLmluYWN0aXZlQ29sb3IpIHtcbiAgICAgICAgICAgICAgICBwYXRjaC5pbmFjdGl2ZUNvbG9yID0gcGFyZW50RGF0YS5pbmFjdGl2ZUNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhdGNoKS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyB0aGlzLnNldChwYXRjaClcbiAgICAgICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=