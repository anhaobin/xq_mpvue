'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'radio-group',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: null,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: {
            type: String,
            value: 'right'
        },
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        }
    },
    methods: {
        emitChange: function emitChange(value) {
            var instance = this.parent || this;
            instance.$emit('input', value);
            instance.$emit('change', value);
        },
        onChange: function onChange(event) {
            console.log(event);
            this.emitChange(this.data.name);
        },
        onClickLabel: function onClickLabel() {
            var _data = this.data,
                disabled = _data.disabled,
                labelDisabled = _data.labelDisabled,
                name = _data.name;

            if (!disabled && !labelDisabled) {
                this.emitChange(name);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsInBhcmVudCIsInVubGlua2VkIiwiY2xhc3NlcyIsInByb3BzIiwidmFsdWUiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ1c2VJY29uU2xvdCIsImNoZWNrZWRDb2xvciIsIlN0cmluZyIsImxhYmVsUG9zaXRpb24iLCJsYWJlbERpc2FibGVkIiwic2hhcGUiLCJtZXRob2RzIiwiZW1pdENoYW5nZSIsImluc3RhbmNlIiwiJGVtaXQiLCJvbkNoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJvbkNsaWNrTGFiZWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTyxJQURHO0FBRVZDLGNBQVU7QUFDTkMsY0FBTSxhQURBO0FBRU5DLGNBQU0sVUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxNQUhELEVBR1M7QUFDWCxpQkFBS0MsTUFBTCxHQUFjRCxNQUFkO0FBQ0gsU0FMSztBQU1ORSxnQkFOTSxzQkFNSztBQUNQLGlCQUFLRCxNQUFMLEdBQWMsSUFBZDtBQUNIO0FBUkssS0FGQTtBQVlWRSxhQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FaQztBQWFWQyxXQUFPO0FBQ0hDLGVBQU8sSUFESjtBQUVIQyxrQkFBVUMsT0FGUDtBQUdIQyxxQkFBYUQsT0FIVjtBQUlIRSxzQkFBY0MsTUFKWDtBQUtIQyx1QkFBZTtBQUNYYixrQkFBTVksTUFESztBQUVYTCxtQkFBTztBQUZJLFNBTFo7QUFTSE8sdUJBQWVMLE9BVFo7QUFVSE0sZUFBTztBQUNIZixrQkFBTVksTUFESDtBQUVITCxtQkFBTztBQUZKO0FBVkosS0FiRztBQTRCVlMsYUFBUztBQUNMQyxrQkFESyxzQkFDTVYsS0FETixFQUNhO0FBQ2QsZ0JBQU1XLFdBQVcsS0FBS2YsTUFBTCxJQUFlLElBQWhDO0FBQ0FlLHFCQUFTQyxLQUFULENBQWUsT0FBZixFQUF3QlosS0FBeEI7QUFDQVcscUJBQVNDLEtBQVQsQ0FBZSxRQUFmLEVBQXlCWixLQUF6QjtBQUNILFNBTEk7QUFNTGEsZ0JBTkssb0JBTUlDLEtBTkosRUFNVztBQUNaQyxvQkFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0EsaUJBQUtKLFVBQUwsQ0FBZ0IsS0FBS08sSUFBTCxDQUFVekIsSUFBMUI7QUFDSCxTQVRJO0FBVUwwQixvQkFWSywwQkFVVTtBQUFBLHdCQUMrQixLQUFLRCxJQURwQztBQUFBLGdCQUNIaEIsUUFERyxTQUNIQSxRQURHO0FBQUEsZ0JBQ09NLGFBRFAsU0FDT0EsYUFEUDtBQUFBLGdCQUNzQmYsSUFEdEIsU0FDc0JBLElBRHRCOztBQUVYLGdCQUFJLENBQUNTLFFBQUQsSUFBYSxDQUFDTSxhQUFsQixFQUFpQztBQUM3QixxQkFBS0csVUFBTCxDQUFnQmxCLElBQWhCO0FBQ0g7QUFDSjtBQWZJO0FBNUJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAncmFkaW8tZ3JvdXAnLFxuICAgICAgICB0eXBlOiAnYW5jZXN0b3InLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHRhcmdldDtcbiAgICAgICAgfSxcbiAgICAgICAgdW5saW5rZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsYXNzZXM6IFsnaWNvbi1jbGFzcycsICdsYWJlbC1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgdXNlSWNvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGNoZWNrZWRDb2xvcjogU3RyaW5nLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3JpZ2h0J1xuICAgICAgICB9LFxuICAgICAgICBsYWJlbERpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdyb3VuZCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBlbWl0Q2hhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMucGFyZW50IHx8IHRoaXM7XG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKHRoaXMuZGF0YS5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja0xhYmVsKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgbGFiZWxEaXNhYmxlZCwgbmFtZSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCAmJiAhbGFiZWxEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19