'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'col',
        type: 'descendant',
        linked: function linked(target) {
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        }
    },
    props: {
        gutter: Number
    },
    watch: {
        gutter: 'setGutter'
    },
    mounted: function mounted() {
        if (this.data.gutter) {
            this.setGutter();
        }
    },

    methods: {
        setGutter: function setGutter() {
            var _this = this;

            var gutter = this.data.gutter;

            var margin = '-' + Number(gutter) / 2 + 'px';
            var style = gutter ? 'margin-right: ' + margin + '; margin-left: ' + margin + ';' : '';
            this.set({ style: style });
            this.getRelationNodes('../col/index').forEach(function (col) {
                col.setGutter(_this.data.gutter);
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJkYXRhIiwiZ3V0dGVyIiwic2V0R3V0dGVyIiwicHJvcHMiLCJOdW1iZXIiLCJ3YXRjaCIsIm1vdW50ZWQiLCJtZXRob2RzIiwibWFyZ2luIiwic3R5bGUiLCJzZXQiLCJnZXRSZWxhdGlvbk5vZGVzIiwiZm9yRWFjaCIsImNvbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxjQUFVO0FBQ05DLGNBQU0sS0FEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsZ0JBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFkLEVBQXNCO0FBQ2xCRix1QkFBT0csU0FBUCxDQUFpQixLQUFLRixJQUFMLENBQVVDLE1BQTNCO0FBQ0g7QUFDSjtBQVBLLEtBREE7QUFVVkUsV0FBTztBQUNIRixnQkFBUUc7QUFETCxLQVZHO0FBYVZDLFdBQU87QUFDSEosZ0JBQVE7QUFETCxLQWJHO0FBZ0JWSyxXQWhCVSxxQkFnQkE7QUFDTixZQUFJLEtBQUtOLElBQUwsQ0FBVUMsTUFBZCxFQUFzQjtBQUNsQixpQkFBS0MsU0FBTDtBQUNIO0FBQ0osS0FwQlM7O0FBcUJWSyxhQUFTO0FBQ0xMLGlCQURLLHVCQUNPO0FBQUE7O0FBQUEsZ0JBQ0FELE1BREEsR0FDVyxLQUFLRCxJQURoQixDQUNBQyxNQURBOztBQUVSLGdCQUFNTyxlQUFhSixPQUFPSCxNQUFQLElBQWlCLENBQTlCLE9BQU47QUFDQSxnQkFBTVEsUUFBUVIsNEJBQ1NPLE1BRFQsdUJBQ2lDQSxNQURqQyxTQUVSLEVBRk47QUFHQSxpQkFBS0UsR0FBTCxDQUFTLEVBQUVELFlBQUYsRUFBVDtBQUNBLGlCQUFLRSxnQkFBTCxDQUFzQixjQUF0QixFQUFzQ0MsT0FBdEMsQ0FBOEMsZUFBTztBQUNqREMsb0JBQUlYLFNBQUosQ0FBYyxNQUFLRixJQUFMLENBQVVDLE1BQXhCO0FBQ0gsYUFGRDtBQUdIO0FBWEk7QUFyQkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdjb2wnLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZ3V0dGVyKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldEd1dHRlcih0aGlzLmRhdGEuZ3V0dGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZ3V0dGVyOiBOdW1iZXJcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGd1dHRlcjogJ3NldEd1dHRlcidcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuZ3V0dGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldEd1dHRlcigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEd1dHRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZ3V0dGVyIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSBgLSR7TnVtYmVyKGd1dHRlcikgLyAyfXB4YDtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZ3V0dGVyXG4gICAgICAgICAgICAgICAgPyBgbWFyZ2luLXJpZ2h0OiAke21hcmdpbn07IG1hcmdpbi1sZWZ0OiAke21hcmdpbn07YFxuICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHN0eWxlIH0pO1xuICAgICAgICAgICAgdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jb2wvaW5kZXgnKS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgY29sLnNldEd1dHRlcih0aGlzLmRhdGEuZ3V0dGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=