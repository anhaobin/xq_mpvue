'use strict';

var _component = require('./../common/component.js');

var _link = require('./../mixins/link.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
    mixins: [_link.link, _button.button, _openType.openType],
    props: {
        text: String,
        loading: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            value: 'danger'
        }
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImxpbmsiLCJidXR0b24iLCJvcGVuVHlwZSIsInByb3BzIiwidGV4dCIsIlN0cmluZyIsImxvYWRpbmciLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJ0eXBlIiwidmFsdWUiLCJtZXRob2RzIiwib25DbGljayIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxZQUFRLENBQUNDLFVBQUQsRUFBT0MsY0FBUCxFQUFlQyxrQkFBZixDQURFO0FBRVZDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxpQkFBU0MsT0FGTjtBQUdIQyxrQkFBVUQsT0FIUDtBQUlIRSxjQUFNO0FBQ0ZBLGtCQUFNSixNQURKO0FBRUZLLG1CQUFPO0FBRkw7QUFKSCxLQUZHO0FBV1ZDLGFBQVM7QUFDTEMsZUFESyxtQkFDR0MsS0FESCxFQUNVO0FBQ1gsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxNQUFNRSxNQUExQjtBQUNBLGlCQUFLQyxRQUFMO0FBQ0g7QUFKSTtBQVhDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsaW5rIH0gZnJvbSAnLi4vbWl4aW5zL2xpbmsnO1xuaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi4vbWl4aW5zL2J1dHRvbic7XG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbbGluaywgYnV0dG9uLCBvcGVuVHlwZV0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdkYW5nZXInXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=