'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'checkbox',
        type: 'descendant',
        linked: function linked(target) {
            this.children = this.children || [];
            this.children.push(target);
            this.updateChild(target);
        },
        unlinked: function unlinked(target) {
            this.children = this.children.filter(function (child) {
                return child !== target;
            });
        }
    },
    props: {
        max: Number,
        value: {
            type: Array,
            observer: 'updateChildren'
        },
        disabled: {
            type: Boolean,
            observer: 'updateChildren'
        }
    },
    methods: {
        updateChildren: function updateChildren() {
            var _this = this;

            (this.children || []).forEach(function (child) {
                return _this.updateChild(child);
            });
        },
        updateChild: function updateChild(child) {
            var _data = this.data,
                value = _data.value,
                disabled = _data.disabled;

            child.set({
                value: value.indexOf(child.data.name) !== -1,
                disabled: disabled || child.data.disabled
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsImNoaWxkcmVuIiwicHVzaCIsInVwZGF0ZUNoaWxkIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJjaGlsZCIsInByb3BzIiwibWF4IiwiTnVtYmVyIiwidmFsdWUiLCJBcnJheSIsIm9ic2VydmVyIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibWV0aG9kcyIsInVwZGF0ZUNoaWxkcmVuIiwiZm9yRWFjaCIsImRhdGEiLCJzZXQiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU8sSUFERztBQUVWQyxjQUFVO0FBQ05DLGNBQU0sVUFEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsaUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxJQUFpQixFQUFqQztBQUNBLGlCQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUJGLE1BQW5CO0FBQ0EsaUJBQUtHLFdBQUwsQ0FBaUJILE1BQWpCO0FBQ0gsU0FQSztBQVFOSSxnQkFSTSxvQkFRR0osTUFSSCxFQVFXO0FBQ2IsaUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjSSxNQUFkLENBQXFCLFVBQUNDLEtBQUQ7QUFBQSx1QkFBV0EsVUFBVU4sTUFBckI7QUFBQSxhQUFyQixDQUFoQjtBQUNIO0FBVkssS0FGQTtBQWNWTyxXQUFPO0FBQ0hDLGFBQUtDLE1BREY7QUFFSEMsZUFBTztBQUNIWixrQkFBTWEsS0FESDtBQUVIQyxzQkFBVTtBQUZQLFNBRko7QUFNSEMsa0JBQVU7QUFDTmYsa0JBQU1nQixPQURBO0FBRU5GLHNCQUFVO0FBRko7QUFOUCxLQWRHO0FBeUJWRyxhQUFTO0FBQ0xDLHNCQURLLDRCQUNZO0FBQUE7O0FBQ2IsYUFBQyxLQUFLZixRQUFMLElBQWlCLEVBQWxCLEVBQXNCZ0IsT0FBdEIsQ0FBOEIsVUFBQ1gsS0FBRDtBQUFBLHVCQUFXLE1BQUtILFdBQUwsQ0FBaUJHLEtBQWpCLENBQVg7QUFBQSxhQUE5QjtBQUNILFNBSEk7QUFJTEgsbUJBSkssdUJBSU9HLEtBSlAsRUFJYztBQUFBLHdCQUNhLEtBQUtZLElBRGxCO0FBQUEsZ0JBQ1BSLEtBRE8sU0FDUEEsS0FETztBQUFBLGdCQUNBRyxRQURBLFNBQ0FBLFFBREE7O0FBRWZQLGtCQUFNYSxHQUFOLENBQVU7QUFDTlQsdUJBQU9BLE1BQU1VLE9BQU4sQ0FBY2QsTUFBTVksSUFBTixDQUFXckIsSUFBekIsTUFBbUMsQ0FBQyxDQURyQztBQUVOZ0IsMEJBQVVBLFlBQVlQLE1BQU1ZLElBQU4sQ0FBV0w7QUFGM0IsYUFBVjtBQUlIO0FBVkk7QUF6QkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICAgICAgbGlua2VkKHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4gfHwgW107XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGQodGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5saW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZCAhPT0gdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbWF4OiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVDaGlsZHJlbigpIHtcbiAgICAgICAgICAgICh0aGlzLmNoaWxkcmVuIHx8IFtdKS5mb3JFYWNoKChjaGlsZCkgPT4gdGhpcy51cGRhdGVDaGlsZChjaGlsZCkpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVDaGlsZChjaGlsZCkge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgZGlzYWJsZWQgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNoaWxkLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLmluZGV4T2YoY2hpbGQuZGF0YS5uYW1lKSAhPT0gLTEsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IGNoaWxkLmRhdGEuZGlzYWJsZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=