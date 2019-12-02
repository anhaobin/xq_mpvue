'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['node-class'],
    props: {
        checked: null,
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: '30px'
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
        onClick: function onClick() {
            var _data = this.data,
                activeValue = _data.activeValue,
                inactiveValue = _data.inactiveValue;

            if (!this.data.disabled && !this.data.loading) {
                var checked = this.data.checked === activeValue;
                var value = checked ? inactiveValue : activeValue;
                this.$emit('input', value);
                this.$emit('change', value);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiY2hlY2tlZCIsImxvYWRpbmciLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJhY3RpdmVDb2xvciIsIlN0cmluZyIsImluYWN0aXZlQ29sb3IiLCJzaXplIiwidHlwZSIsInZhbHVlIiwiYWN0aXZlVmFsdWUiLCJpbmFjdGl2ZVZhbHVlIiwid2F0Y2giLCJzZXQiLCJjcmVhdGVkIiwiZGF0YSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTyxJQURHO0FBRVZDLGFBQVMsQ0FBQyxZQUFELENBRkM7QUFHVkMsV0FBTztBQUNIQyxpQkFBUyxJQUROO0FBRUhDLGlCQUFTQyxPQUZOO0FBR0hDLGtCQUFVRCxPQUhQO0FBSUhFLHFCQUFhQyxNQUpWO0FBS0hDLHVCQUFlRCxNQUxaO0FBTUhFLGNBQU07QUFDRkMsa0JBQU1ILE1BREo7QUFFRkksbUJBQU87QUFGTCxTQU5IO0FBVUhDLHFCQUFhO0FBQ1RGLGtCQUFNLElBREc7QUFFVEMsbUJBQU87QUFGRSxTQVZWO0FBY0hFLHVCQUFlO0FBQ1hILGtCQUFNLElBREs7QUFFWEMsbUJBQU87QUFGSTtBQWRaLEtBSEc7QUFzQlZHLFdBQU87QUFDSFosZUFERyxtQkFDS1MsS0FETCxFQUNZO0FBQ1gsaUJBQUtJLEdBQUwsQ0FBUyxFQUFFSixZQUFGLEVBQVQ7QUFDSDtBQUhFLEtBdEJHO0FBMkJWSyxXQTNCVSxxQkEyQkE7QUFDTixhQUFLRCxHQUFMLENBQVMsRUFBRUosT0FBTyxLQUFLTSxJQUFMLENBQVVmLE9BQW5CLEVBQVQ7QUFDSCxLQTdCUzs7QUE4QlZnQixhQUFTO0FBQ0xDLGVBREsscUJBQ0s7QUFBQSx3QkFDaUMsS0FBS0YsSUFEdEM7QUFBQSxnQkFDRUwsV0FERixTQUNFQSxXQURGO0FBQUEsZ0JBQ2VDLGFBRGYsU0FDZUEsYUFEZjs7QUFFTixnQkFBSSxDQUFDLEtBQUtJLElBQUwsQ0FBVVosUUFBWCxJQUF1QixDQUFDLEtBQUtZLElBQUwsQ0FBVWQsT0FBdEMsRUFBK0M7QUFDM0Msb0JBQU1ELFVBQVUsS0FBS2UsSUFBTCxDQUFVZixPQUFWLEtBQXNCVSxXQUF0QztBQUNBLG9CQUFNRCxRQUFRVCxVQUFVVyxhQUFWLEdBQTBCRCxXQUF4QztBQUNBLHFCQUFLUSxLQUFMLENBQVcsT0FBWCxFQUFvQlQsS0FBcEI7QUFDQSxxQkFBS1MsS0FBTCxDQUFXLFFBQVgsRUFBcUJULEtBQXJCO0FBQ0g7QUFDSjtBQVRJO0FBOUJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICBjbGFzc2VzOiBbJ25vZGUtY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICBjaGVja2VkOiBudWxsLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgaW5hY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJzMwcHgnXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZVZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaW5hY3RpdmVWYWx1ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBjaGVja2VkKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLnNldCh7IHZhbHVlOiB0aGlzLmRhdGEuY2hlY2tlZCB9KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljaygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYWN0aXZlVmFsdWUsIGluYWN0aXZlVmFsdWUgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubG9hZGluZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmRhdGEuY2hlY2tlZCA9PT0gYWN0aXZlVmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjaGVja2VkID8gaW5hY3RpdmVWYWx1ZSA6IGFjdGl2ZVZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19