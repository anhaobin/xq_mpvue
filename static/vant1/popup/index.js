'use strict';

var _component = require('./../common/component.js');

var _transition = require('./../mixins/transition.js');

var _safeArea = require('./../mixins/safe-area.js');

(0, _component.VantComponent)({
    classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
    mixins: [(0, _transition.transition)(false), (0, _safeArea.safeArea)()],
    props: {
        transition: {
            type: String,
            observer: 'observeClass'
        },
        customStyle: String,
        overlayStyle: String,
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center',
            observer: 'observeClass'
        }
    },
    created: function created() {
        this.observeClass();
    },

    methods: {
        onClickOverlay: function onClickOverlay() {
            this.$emit('click-overlay');
            if (this.data.closeOnClickOverlay) {
                this.$emit('close');
            }
        },
        observeClass: function observeClass() {
            var _data = this.data,
                transition = _data.transition,
                position = _data.position;

            var updateData = {
                name: transition || position
            };
            if (transition === 'none') {
                updateData.duration = 0;
            }
            this.set(updateData);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJwcm9wcyIsInRyYW5zaXRpb24iLCJ0eXBlIiwiU3RyaW5nIiwib2JzZXJ2ZXIiLCJjdXN0b21TdHlsZSIsIm92ZXJsYXlTdHlsZSIsInpJbmRleCIsIk51bWJlciIsInZhbHVlIiwib3ZlcmxheSIsIkJvb2xlYW4iLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwicG9zaXRpb24iLCJjcmVhdGVkIiwib2JzZXJ2ZUNsYXNzIiwibWV0aG9kcyIsIm9uQ2xpY2tPdmVybGF5IiwiJGVtaXQiLCJkYXRhIiwidXBkYXRlRGF0YSIsIm5hbWUiLCJkdXJhdGlvbiIsInNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxhQUFTLENBQ0wsYUFESyxFQUVMLG9CQUZLLEVBR0wsZ0JBSEssRUFJTCxhQUpLLEVBS0wsb0JBTEssRUFNTCxnQkFOSyxDQURDO0FBU1ZDLFlBQVEsQ0FBQyw0QkFBVyxLQUFYLENBQUQsRUFBb0IseUJBQXBCLENBVEU7QUFVVkMsV0FBTztBQUNIQyxvQkFBWTtBQUNSQyxrQkFBTUMsTUFERTtBQUVSQyxzQkFBVTtBQUZGLFNBRFQ7QUFLSEMscUJBQWFGLE1BTFY7QUFNSEcsc0JBQWNILE1BTlg7QUFPSEksZ0JBQVE7QUFDSkwsa0JBQU1NLE1BREY7QUFFSkMsbUJBQU87QUFGSCxTQVBMO0FBV0hDLGlCQUFTO0FBQ0xSLGtCQUFNUyxPQUREO0FBRUxGLG1CQUFPO0FBRkYsU0FYTjtBQWVIRyw2QkFBcUI7QUFDakJWLGtCQUFNUyxPQURXO0FBRWpCRixtQkFBTztBQUZVLFNBZmxCO0FBbUJISSxrQkFBVTtBQUNOWCxrQkFBTUMsTUFEQTtBQUVOTSxtQkFBTyxRQUZEO0FBR05MLHNCQUFVO0FBSEo7QUFuQlAsS0FWRztBQW1DVlUsV0FuQ1UscUJBbUNBO0FBQ04sYUFBS0MsWUFBTDtBQUNILEtBckNTOztBQXNDVkMsYUFBUztBQUNMQyxzQkFESyw0QkFDWTtBQUNiLGlCQUFLQyxLQUFMLENBQVcsZUFBWDtBQUNBLGdCQUFJLEtBQUtDLElBQUwsQ0FBVVAsbUJBQWQsRUFBbUM7QUFDL0IscUJBQUtNLEtBQUwsQ0FBVyxPQUFYO0FBQ0g7QUFDSixTQU5JO0FBT0xILG9CQVBLLDBCQU9VO0FBQUEsd0JBQ3NCLEtBQUtJLElBRDNCO0FBQUEsZ0JBQ0hsQixVQURHLFNBQ0hBLFVBREc7QUFBQSxnQkFDU1ksUUFEVCxTQUNTQSxRQURUOztBQUVYLGdCQUFNTyxhQUFhO0FBQ2ZDLHNCQUFNcEIsY0FBY1k7QUFETCxhQUFuQjtBQUdBLGdCQUFJWixlQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCbUIsMkJBQVdFLFFBQVgsR0FBc0IsQ0FBdEI7QUFDSDtBQUNELGlCQUFLQyxHQUFMLENBQVNILFVBQVQ7QUFDSDtBQWhCSTtBQXRDQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgdHJhbnNpdGlvbiB9IGZyb20gJy4uL21peGlucy90cmFuc2l0aW9uJztcbmltcG9ydCB7IHNhZmVBcmVhIH0gZnJvbSAnLi4vbWl4aW5zL3NhZmUtYXJlYSc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbXG4gICAgICAgICdlbnRlci1jbGFzcycsXG4gICAgICAgICdlbnRlci1hY3RpdmUtY2xhc3MnLFxuICAgICAgICAnZW50ZXItdG8tY2xhc3MnLFxuICAgICAgICAnbGVhdmUtY2xhc3MnLFxuICAgICAgICAnbGVhdmUtYWN0aXZlLWNsYXNzJyxcbiAgICAgICAgJ2xlYXZlLXRvLWNsYXNzJ1xuICAgIF0sXG4gICAgbWl4aW5zOiBbdHJhbnNpdGlvbihmYWxzZSksIHNhZmVBcmVhKCldLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZUNsYXNzJ1xuICAgICAgICB9LFxuICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgICBvdmVybGF5U3R5bGU6IFN0cmluZyxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnY2VudGVyJyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZUNsYXNzJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLm9ic2VydmVDbGFzcygpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrT3ZlcmxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLW92ZXJsYXknKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xvc2VPbkNsaWNrT3ZlcmxheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9ic2VydmVDbGFzcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHJhbnNpdGlvbiwgcG9zaXRpb24gfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogdHJhbnNpdGlvbiB8fCBwb3NpdGlvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVEYXRhLmR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0KHVwZGF0ZURhdGEpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=