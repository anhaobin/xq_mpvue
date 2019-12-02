'use strict';

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

var THRESHOLD = 0.3;
(0, _component.VantComponent)({
    props: {
        disabled: Boolean,
        leftWidth: {
            type: Number,
            value: 0
        },
        rightWidth: {
            type: Number,
            value: 0
        },
        asyncClose: Boolean
    },
    mixins: [_touch.touch],
    data: {
        catchMove: false
    },
    created: function created() {
        this.offset = 0;
    },

    methods: {
        open: function open(position) {
            var _data = this.data,
                leftWidth = _data.leftWidth,
                rightWidth = _data.rightWidth;

            var offset = position === 'left' ? leftWidth : -rightWidth;
            this.swipeMove(offset);
        },
        close: function close() {
            this.swipeMove(0);
        },
        swipeMove: function swipeMove() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.offset = offset;
            var transform = 'translate3d(' + offset + 'px, 0, 0)';
            var transition = this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)';
            this.set({
                wrapperStyle: '\n        -webkit-transform: ' + transform + ';\n        -webkit-transition: ' + transition + ';\n        transform: ' + transform + ';\n        transition: ' + transition + ';\n      '
            });
        },
        swipeLeaveTransition: function swipeLeaveTransition() {
            var _data2 = this.data,
                leftWidth = _data2.leftWidth,
                rightWidth = _data2.rightWidth;
            var offset = this.offset;

            if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
                this.open('right');
            } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
                this.open('left');
            } else {
                this.swipeMove(0);
            }
            this.set({ catchMove: false });
        },
        startDrag: function startDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.draging = true;
            this.startOffset = this.offset;
            this.firstDirection = '';
            this.touchStart(event);
        },
        noop: function noop() {},
        onDrag: function onDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.touchMove(event);
            if (!this.firstDirection) {
                this.firstDirection = this.direction;
                this.set({ catchMove: this.firstDirection === 'horizontal' });
            }
            if (this.firstDirection === 'vertical') {
                return;
            }
            var _data3 = this.data,
                leftWidth = _data3.leftWidth,
                rightWidth = _data3.rightWidth;

            var offset = this.startOffset + this.deltaX;
            if (rightWidth > 0 && -offset > rightWidth || leftWidth > 0 && offset > leftWidth) {
                return;
            }
            this.swipeMove(offset);
        },
        endDrag: function endDrag() {
            if (this.data.disabled) {
                return;
            }
            this.draging = false;
            this.swipeLeaveTransition();
        },
        onClick: function onClick(event) {
            var _event$currentTarget$ = event.currentTarget.dataset.key,
                position = _event$currentTarget$ === undefined ? 'outside' : _event$currentTarget$;

            this.$emit('click', position);
            if (!this.offset) {
                return;
            }
            if (this.data.asyncClose) {
                this.$emit('close', { position: position, instance: this });
            } else {
                this.swipeMove(0);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRIUkVTSE9MRCIsInByb3BzIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGVmdFdpZHRoIiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwicmlnaHRXaWR0aCIsImFzeW5jQ2xvc2UiLCJtaXhpbnMiLCJ0b3VjaCIsImRhdGEiLCJjYXRjaE1vdmUiLCJjcmVhdGVkIiwib2Zmc2V0IiwibWV0aG9kcyIsIm9wZW4iLCJwb3NpdGlvbiIsInN3aXBlTW92ZSIsImNsb3NlIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsImRyYWdpbmciLCJzZXQiLCJ3cmFwcGVyU3R5bGUiLCJzd2lwZUxlYXZlVHJhbnNpdGlvbiIsInN0YXJ0RHJhZyIsImV2ZW50Iiwic3RhcnRPZmZzZXQiLCJmaXJzdERpcmVjdGlvbiIsInRvdWNoU3RhcnQiLCJub29wIiwib25EcmFnIiwidG91Y2hNb3ZlIiwiZGlyZWN0aW9uIiwiZGVsdGFYIiwiZW5kRHJhZyIsIm9uQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImtleSIsIiRlbWl0IiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFsQjtBQUNBLDhCQUFjO0FBQ1ZDLFdBQU87QUFDSEMsa0JBQVVDLE9BRFA7QUFFSEMsbUJBQVc7QUFDUEMsa0JBQU1DLE1BREM7QUFFUEMsbUJBQU87QUFGQSxTQUZSO0FBTUhDLG9CQUFZO0FBQ1JILGtCQUFNQyxNQURFO0FBRVJDLG1CQUFPO0FBRkMsU0FOVDtBQVVIRSxvQkFBWU47QUFWVCxLQURHO0FBYVZPLFlBQVEsQ0FBQ0MsWUFBRCxDQWJFO0FBY1ZDLFVBQU07QUFDRkMsbUJBQVc7QUFEVCxLQWRJO0FBaUJWQyxXQWpCVSxxQkFpQkE7QUFDTixhQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNILEtBbkJTOztBQW9CVkMsYUFBUztBQUNMQyxZQURLLGdCQUNBQyxRQURBLEVBQ1U7QUFBQSx3QkFDdUIs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S3FCLE9BQUwsR0FBZSxLQUFmO0FBQ0EsaUJBQUtHLG9CQUFMO0FBQ0gsU0ExRUk7QUEyRUxZLGVBM0VLLG1CQTJFR1YsS0EzRUgsRUEyRVU7QUFBQSx3Q0FDMkJBLE1BQU1XLGFBQU4sQ0FBb0JDLE9BRC9DLENBQ0hDLEdBREc7QUFBQSxnQkFDRXZCLFFBREYseUNBQ2EsU0FEYjs7QUFFWCxpQkFBS3dCLEtBQUwsQ0FBVyxPQUFYLEVBQW9CeEIsUUFBcEI7QUFDQSxnQkFBSSxDQUFDLEtBQUtILE1BQVYsRUFBa0I7QUFDZDtBQUNIO0FBQ0QsZ0JBQUksS0FBS0gsSUFBTCxDQUFVSCxVQUFkLEVBQTBCO0FBQ3RCLHFCQUFLaUMsS0FBTCxDQUFXLE9BQVgsRUFBb0IsRUFBRXhCLGtCQUFGLEVBQVl5QixVQUFVLElBQXRCLEVBQXBCO0FBQ0gsYUFGRCxNQUdLO0FBQ0QscUJBQUt4QixTQUFMLENBQWUsQ0FBZjtBQUNIO0FBQ0o7QUF2Rkk7QUFwQkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IHRvdWNoIH0gZnJvbSAnLi4vbWl4aW5zL3RvdWNoJztcbmNvbnN0IFRIUkVTSE9MRCA9IDAuMztcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBsZWZ0V2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHJpZ2h0V2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jQ2xvc2U6IEJvb2xlYW5cbiAgICB9LFxuICAgIG1peGluczogW3RvdWNoXSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGNhdGNoTW92ZTogZmFsc2VcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb3Blbihwb3NpdGlvbikge1xuICAgICAgICAgICAgY29uc3QgeyBsZWZ0V2lkdGgsIHJpZ2h0V2lkdGggfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHBvc2l0aW9uID09PSAnbGVmdCcgPyBsZWZ0V2lkdGggOiAtcmlnaHRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKG9mZnNldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN3aXBlTW92ZShvZmZzZXQgPSAwKSB7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke29mZnNldH1weCwgMCwgMClgO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IHRoaXMuZHJhZ2luZ1xuICAgICAgICAgICAgICAgID8gJ25vbmUnXG4gICAgICAgICAgICAgICAgOiAnLjZzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxKSc7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlOiBgXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiAke3RyYW5zZm9ybX07XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHt0cmFuc2l0aW9ufTtcbiAgICAgICAgdHJhbnNmb3JtOiAke3RyYW5zZm9ybX07XG4gICAgICAgIHRyYW5zaXRpb246ICR7dHJhbnNpdGlvbn07XG4gICAgICBgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3dpcGVMZWF2ZVRyYW5zaXRpb24oKSB7XG4gICAgICAgICAgICBjb25zdCB7IGxlZnRXaWR0aCwgcmlnaHRXaWR0aCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAocmlnaHRXaWR0aCA+IDAgJiYgLW9mZnNldCA+IHJpZ2h0V2lkdGggKiBUSFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsZWZ0V2lkdGggPiAwICYmIG9mZnNldCA+IGxlZnRXaWR0aCAqIFRIUkVTSE9MRCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbignbGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldCh7IGNhdGNoTW92ZTogZmFsc2UgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0RHJhZyhldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhZ2luZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RGlyZWN0aW9uID0gJyc7XG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBub29wKCkgeyB9LFxuICAgICAgICBvbkRyYWcoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvdWNoTW92ZShldmVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlyc3REaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0RGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoeyBjYXRjaE1vdmU6IHRoaXMuZmlyc3REaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0RGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBsZWZ0V2lkdGgsIHJpZ2h0V2lkdGggfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuc3RhcnRPZmZzZXQgKyB0aGlzLmRlbHRhWDtcbiAgICAgICAgICAgIGlmICgocmlnaHRXaWR0aCA+IDAgJiYgLW9mZnNldCA+IHJpZ2h0V2lkdGgpIHx8XG4gICAgICAgICAgICAgICAgKGxlZnRXaWR0aCA+IDAgJiYgb2Zmc2V0ID4gbGVmdFdpZHRoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKG9mZnNldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZERyYWcoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmFnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN3aXBlTGVhdmVUcmFuc2l0aW9uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5OiBwb3NpdGlvbiA9ICdvdXRzaWRlJyB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBwb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoIXRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5hc3luY0Nsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnLCB7IHBvc2l0aW9uLCBpbnN0YW5jZTogdGhpcyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=