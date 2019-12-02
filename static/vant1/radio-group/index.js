'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'radio',
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
        value: {
            type: null,
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
                value: value,
                disabled: disabled || child.data.disabled
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsImNoaWxkcmVuIiwicHVzaCIsInVwZGF0ZUNoaWxkIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJjaGlsZCIsInByb3BzIiwidmFsdWUiLCJvYnNlcnZlciIsImRpc2FibGVkIiwiQm9vbGVhbiIsIm1ldGhvZHMiLCJ1cGRhdGVDaGlsZHJlbiIsImZvckVhY2giLCJkYXRhIiwic2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU8sSUFERztBQUVWQyxjQUFVO0FBQ05DLGNBQU0sT0FEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsaUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxJQUFpQixFQUFqQztBQUNBLGlCQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUJGLE1BQW5CO0FBQ0EsaUJBQUtHLFdBQUwsQ0FBaUJILE1BQWpCO0FBQ0gsU0FQSztBQVFOSSxnQkFSTSxvQkFRR0osTUFSSCxFQVFXO0FBQ2IsaUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjSSxNQUFkLENBQXFCLFVBQUNDLEtBQUQ7QUFBQSx1QkFBV0EsVUFBVU4sTUFBckI7QUFBQSxhQUFyQixDQUFoQjtBQUNIO0FBVkssS0FGQTtBQWNWTyxXQUFPO0FBQ0hDLGVBQU87QUFDSFYsa0JBQU0sSUFESDtBQUVIVyxzQkFBVTtBQUZQLFNBREo7QUFLSEMsa0JBQVU7QUFDTlosa0JBQU1hLE9BREE7QUFFTkYsc0JBQVU7QUFGSjtBQUxQLEtBZEc7QUF3QlZHLGFBQVM7QUFDTEMsc0JBREssNEJBQ1k7QUFBQTs7QUFDYixhQUFDLEtBQUtaLFFBQUwsSUFBaUIsRUFBbEIsRUFBc0JhLE9BQXRCLENBQThCLFVBQUNSLEtBQUQ7QUFBQSx1QkFBVyxNQUFLSCxXQUFMLENBQWlCRyxLQUFqQixDQUFYO0FBQUEsYUFBOUI7QUFDSCxTQUhJO0FBSUxILG1CQUpLLHVCQUlPRyxLQUpQLEVBSWM7QUFBQSx3QkFDYSxLQUFLUyxJQURsQjtBQUFBLGdCQUNQUCxLQURPLFNBQ1BBLEtBRE87QUFBQSxnQkFDQUUsUUFEQSxTQUNBQSxRQURBOztBQUVmSixrQkFBTVUsR0FBTixDQUFVO0FBQ05SLDRCQURNO0FBRU5FLDBCQUFVQSxZQUFZSixNQUFNUyxJQUFOLENBQVdMO0FBRjNCLGFBQVY7QUFJSDtBQVZJO0FBeEJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAncmFkaW8nLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkKHRhcmdldCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkKHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQgIT09IHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuKCkge1xuICAgICAgICAgICAgKHRoaXMuY2hpbGRyZW4gfHwgW10pLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLnVwZGF0ZUNoaWxkKGNoaWxkKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCBkaXNhYmxlZCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY2hpbGQuc2V0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQgfHwgY2hpbGQuZGF0YS5kaXNhYmxlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==