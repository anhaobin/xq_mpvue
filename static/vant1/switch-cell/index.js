'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    props: {
        value: null,
        icon: String,
        title: String,
        label: String,
        border: Boolean,
        checked: Boolean,
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        useLabelSlot: Boolean,
        size: {
            type: String,
            value: '24px'
        },
        activeValue: {
            type: null,
            value: true
        },
        inactiveValue: {
            type: null,
            value: false
        }
    },
    watch: {
        checked: function checked(value) {
            this.set({ value: value });
        }
    },
    created: function created() {
        this.set({ value: this.data.checked });
    },

    methods: {
        onChange: function onChange(event) {
            this.$emit('change', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicHJvcHMiLCJ2YWx1ZSIsImljb24iLCJTdHJpbmciLCJ0aXRsZSIsImxhYmVsIiwiYm9yZGVyIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJhY3RpdmVDb2xvciIsImluYWN0aXZlQ29sb3IiLCJ1c2VMYWJlbFNsb3QiLCJzaXplIiwidHlwZSIsImFjdGl2ZVZhbHVlIiwiaW5hY3RpdmVWYWx1ZSIsIndhdGNoIiwic2V0IiwiY3JlYXRlZCIsImRhdGEiLCJtZXRob2RzIiwib25DaGFuZ2UiLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU8sSUFERztBQUVWQyxXQUFPO0FBQ0hDLGVBQU8sSUFESjtBQUVIQyxjQUFNQyxNQUZIO0FBR0hDLGVBQU9ELE1BSEo7QUFJSEUsZUFBT0YsTUFKSjtBQUtIRyxnQkFBUUMsT0FMTDtBQU1IQyxpQkFBU0QsT0FOTjtBQU9IRSxpQkFBU0YsT0FQTjtBQVFIRyxrQkFBVUgsT0FSUDtBQVNISSxxQkFBYVIsTUFUVjtBQVVIUyx1QkFBZVQsTUFWWjtBQVdIVSxzQkFBY04sT0FYWDtBQVlITyxjQUFNO0FBQ0ZDLGtCQUFNWixNQURKO0FBRUZGLG1CQUFPO0FBRkwsU0FaSDtBQWdCSGUscUJBQWE7QUFDVEQsa0JBQU0sSUFERztBQUVUZCxtQkFBTztBQUZFLFNBaEJWO0FBb0JIZ0IsdUJBQWU7QUFDWEYsa0JBQU0sSUFESztBQUVYZCxtQkFBTztBQUZJO0FBcEJaLEtBRkc7QUEyQlZpQixXQUFPO0FBQ0hWLGVBREcsbUJBQ0tQLEtBREwsRUFDWTtBQUNYLGlCQUFLa0IsR0FBTCxDQUFTLEVBQUVsQixZQUFGLEVBQVQ7QUFDSDtBQUhFLEtBM0JHO0FBZ0NWbUIsV0FoQ1UscUJBZ0NBO0FBQ04sYUFBS0QsR0FBTCxDQUFTLEVBQUVsQixPQUFPLEtBQUtvQixJQUFMLENBQVViLE9BQW5CLEVBQVQ7QUFDSCxLQWxDUzs7QUFtQ1ZjLGFBQVM7QUFDTEMsZ0JBREssb0JBQ0lDLEtBREosRUFDVztBQUNaLGlCQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkQsTUFBTUUsTUFBM0I7QUFDSDtBQUhJO0FBbkNDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgaWNvbjogU3RyaW5nLFxuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgICBib3JkZXI6IEJvb2xlYW4sXG4gICAgICAgIGNoZWNrZWQ6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICBpbmFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgICAgIHVzZUxhYmVsU2xvdDogQm9vbGVhbixcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcyNHB4J1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVWYWx1ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGluYWN0aXZlVmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgY2hlY2tlZCh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZTogdGhpcy5kYXRhLmNoZWNrZWQgfSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=