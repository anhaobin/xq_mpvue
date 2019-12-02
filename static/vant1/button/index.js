'use strict';

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
    mixins: [_button.button, _openType.openType],
    classes: ['hover-class', 'loading-class'],
    props: {
        icon: String,
        color: String,
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
        }
    },
    methods: {
        onClick: function onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImJ1dHRvbiIsIm9wZW5UeXBlIiwiY2xhc3NlcyIsInByb3BzIiwiaWNvbiIsIlN0cmluZyIsImNvbG9yIiwicGxhaW4iLCJCb29sZWFuIiwiYmxvY2siLCJyb3VuZCIsInNxdWFyZSIsImxvYWRpbmciLCJoYWlybGluZSIsImRpc2FibGVkIiwibG9hZGluZ1RleHQiLCJ0eXBlIiwidmFsdWUiLCJzaXplIiwibG9hZGluZ1NpemUiLCJtZXRob2RzIiwib25DbGljayIsImRhdGEiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxZQUFRLENBQUNDLGNBQUQsRUFBU0Msa0JBQVQsQ0FERTtBQUVWQyxhQUFTLENBQUMsYUFBRCxFQUFnQixlQUFoQixDQUZDO0FBR1ZDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxlQUFPRCxNQUZKO0FBR0hFLGVBQU9DLE9BSEo7QUFJSEMsZUFBT0QsT0FKSjtBQUtIRSxlQUFPRixPQUxKO0FBTUhHLGdCQUFRSCxPQU5MO0FBT0hJLGlCQUFTSixPQVBOO0FBUUhLLGtCQUFVTCxPQVJQO0FBU0hNLGtCQUFVTixPQVRQO0FBVUhPLHFCQUFhVixNQVZWO0FBV0hXLGNBQU07QUFDRkEsa0JBQU1YLE1BREo7QUFFRlksbUJBQU87QUFGTCxTQVhIO0FBZUhDLGNBQU07QUFDRkYsa0JBQU1YLE1BREo7QUFFRlksbUJBQU87QUFGTCxTQWZIO0FBbUJIRSxxQkFBYTtBQUNUSCxrQkFBTVgsTUFERztBQUVUWSxtQkFBTztBQUZFO0FBbkJWLEtBSEc7QUEyQlZHLGFBQVM7QUFDTEMsZUFESyxxQkFDSztBQUNOLGdCQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVUixRQUFYLElBQXVCLENBQUMsS0FBS1EsSUFBTCxDQUFVVixPQUF0QyxFQUErQztBQUMzQyxxQkFBS1csS0FBTCxDQUFXLE9BQVg7QUFDSDtBQUNKO0FBTEk7QUEzQkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4uL21peGlucy9idXR0b24nO1xuaW1wb3J0IHsgb3BlblR5cGUgfSBmcm9tICcuLi9taXhpbnMvb3Blbi10eXBlJztcblZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW2J1dHRvbiwgb3BlblR5cGVdLFxuICAgIGNsYXNzZXM6IFsnaG92ZXItY2xhc3MnLCAnbG9hZGluZy1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgY29sb3I6IFN0cmluZyxcbiAgICAgICAgcGxhaW46IEJvb2xlYW4sXG4gICAgICAgIGJsb2NrOiBCb29sZWFuLFxuICAgICAgICByb3VuZDogQm9vbGVhbixcbiAgICAgICAgc3F1YXJlOiBCb29sZWFuLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBoYWlybGluZTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmdUZXh0OiBTdHJpbmcsXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnZGVmYXVsdCdcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdub3JtYWwnXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRpbmdTaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJzIwcHgnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljaygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==