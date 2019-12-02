'use strict';

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _component.VantComponent)({
    mixins: [_button.button, _openType.openType],
    props: {
        show: Boolean,
        title: String,
        message: String,
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        zIndex: {
            type: Number,
            value: 2000
        },
        confirmButtonText: {
            type: String,
            value: '确认'
        },
        cancelButtonText: {
            type: String,
            value: '取消'
        },
        showConfirmButton: {
            type: Boolean,
            value: true
        },
        overlay: {
            type: Boolean,
            value: true
        },
        transition: {
            type: String,
            value: 'scale'
        }
    },
    data: {
        loading: {
            confirm: false,
            cancel: false
        }
    },
    watch: {
        show: function show(_show) {
            !_show && this.stopLoading();
        }
    },
    methods: {
        onConfirm: function onConfirm() {
            this.handleAction('confirm');
        },
        onCancel: function onCancel() {
            this.handleAction('cancel');
        },
        onClickOverlay: function onClickOverlay() {
            this.onClose('overlay');
        },
        handleAction: function handleAction(action) {
            if (this.data.asyncClose) {
                this.set(_defineProperty({}, 'loading.' + action, true));
            }
            this.onClose(action);
        },
        close: function close() {
            this.set({
                show: false
            });
        },
        stopLoading: function stopLoading() {
            this.set({
                loading: {
                    confirm: false,
                    cancel: false
                }
            });
        },
        onClose: function onClose(action) {
            if (!this.data.asyncClose) {
                this.close();
            }
            this.$emit('close', action);
            // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
            this.$emit(action, { dialog: this });
            var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];
            if (callback) {
                callback(this);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImJ1dHRvbiIsIm9wZW5UeXBlIiwicHJvcHMiLCJzaG93IiwiQm9vbGVhbiIsInRpdGxlIiwiU3RyaW5nIiwibWVzc2FnZSIsInVzZVNsb3QiLCJjbGFzc05hbWUiLCJjdXN0b21TdHlsZSIsImFzeW5jQ2xvc2UiLCJtZXNzYWdlQWxpZ24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2xvc2VPbkNsaWNrT3ZlcmxheSIsImNvbmZpcm1CdXR0b25PcGVuVHlwZSIsInpJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInNob3dDb25maXJtQnV0dG9uIiwib3ZlcmxheSIsInRyYW5zaXRpb24iLCJkYXRhIiwibG9hZGluZyIsImNvbmZpcm0iLCJjYW5jZWwiLCJ3YXRjaCIsInN0b3BMb2FkaW5nIiwibWV0aG9kcyIsIm9uQ29uZmlybSIsImhhbmRsZUFjdGlvbiIsIm9uQ2FuY2VsIiwib25DbGlja092ZXJsYXkiLCJvbkNsb3NlIiwiYWN0aW9uIiwic2V0IiwiY2xvc2UiLCIkZW1pdCIsImRpYWxvZyIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0EsOEJBQWM7QUFDVkEsWUFBUSxDQUFDQyxjQUFELEVBQVNDLGtCQUFULENBREU7QUFFVkMsV0FBTztBQUNIQyxjQUFNQyxPQURIO0FBRUhDLGVBQU9DLE1BRko7QUFHSEMsaUJBQVNELE1BSE47QUFJSEUsaUJBQVNKLE9BSk47QUFLSEssbUJBQVdILE1BTFI7QUFNSEkscUJBQWFKLE1BTlY7QUFPSEssb0JBQVlQLE9BUFQ7QUFRSFEsc0JBQWNOLE1BUlg7QUFTSE8sMEJBQWtCVCxPQVRmO0FBVUhVLDZCQUFxQlYsT0FWbEI7QUFXSFcsK0JBQXVCVCxNQVhwQjtBQVlIVSxnQkFBUTtBQUNKQyxrQkFBTUMsTUFERjtBQUVKQyxtQkFBTztBQUZILFNBWkw7QUFnQkhDLDJCQUFtQjtBQUNmSCxrQkFBTVgsTUFEUztBQUVmYSxtQkFBTztBQUZRLFNBaEJoQjtBQW9CSEUsMEJBQWtCO0FBQ2RKLGtCQUFNWCxNQURRO0FBRWRhLG1CQUFPO0FBRk8sU0FwQmY7QUF3QkhHLDJCQUFtQjtBQUNmTCxrQkFBTWIsT0FEUztBQUVmZSxtQkFBTztBQUZRLFNBeEJoQjtBQTRCSEksaUJBQVM7QUFDTE4sa0JBQU1iLE9BREQ7QUFFTGUsbUJBQU87QUFGRixTQTVCTjtBQWdDSEssb0JBQVk7QUFDUlAsa0JBQU1YLE1BREU7QUFFUmEsbUJBQU87QUFGQztBQWhDVCxLQUZHO0FBdUNWTSxVQUFNO0FBQ0ZDLGlCQUFTO0FBQ0xDLHFCQUFTLEtBREo7QUFFTEMsb0JBQVE7QUFGSDtBQURQLEtBdkNJO0FBNkNWQyxXQUFPO0FBQ0gxQixZQURHLGdCQUNFQSxLQURGLEVBQ1E7QUFDUCxhQUFDQSxLQUFELElBQVMsS0FBSzJCLFdBQUwsRUFBVDtBQUNIO0FBSEUsS0E3Q0c7QUFrRFZDLGFBQVM7QUFDTEMsaUJBREssdUJBQ087QUFDUixpQkFBS0MsWUFBTCxDQUFrQixTQUFsQjtBQUNILFNBSEk7QUFJTEMsZ0JBSkssc0JBSU07QUFDUCxpQkFBS0QsWUFBTCxDQUFrQixRQUFsQjtBQUNILFNBTkk7QUFPTEUsc0JBUEssNEJBT1k7QUFDYixpQkFBS0MsT0FBTCxDQUFhLFNBQWI7QUFDSCxTQVRJO0FBVUxILG9CQVZLLHdCQVVRSSxNQVZSLEVBVWdCO0FBQ2pCLGdCQUFJLEtBQUtaLElBQUwsQ0FBVWQsVUFBZCxFQUEwQjtBQUN0QixxQkFBSzJCLEdBQUwsa0NBQ2dCRCxNQURoQixFQUMyQixJQUQzQjtBQUdIO0FBQ0QsaUJBQUtELE9BQUwsQ0FBYUMsTUFBYjtBQUNILFNBakJJO0FBa0JMRSxhQWxCSyxtQkFrQkc7QUFDSixpQkFBS0QsR0FBTCxDQUFTO0FBQ0xuQyxzQkFBTTtBQURELGFBQVQ7QUFHSCxTQXRCSTtBQXVCTDJCLG1CQXZCSyx5QkF1QlM7QUFDVixpQkFBS1EsR0FBTCxDQUFTO0FBQ0xaLHlCQUFTO0FBQ0xDLDZCQUFTLEtBREo7QUFFTEMsNEJBQVE7QUFGSDtBQURKLGFBQVQ7QUFNSCxTQTlCSTtBQStCTFEsZUEvQkssbUJBK0JHQyxNQS9CSCxFQStCVztBQUNaLGdCQUFJLENBQUMsS0FBS1osSUFBTCxDQUFVZCxVQUFmLEVBQTJCO0FBQ3ZCLHFCQUFLNEIsS0FBTDtBQUNIO0FBQ0QsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CSCxNQUFwQjtBQUNBO0FBQ0EsaUJBQUtHLEtBQUwsQ0FBV0gsTUFBWCxFQUFtQixFQUFFSSxRQUFRLElBQVYsRUFBbkI7QUFDQSxnQkFBTUMsV0FBVyxLQUFLakIsSUFBTCxDQUFVWSxXQUFXLFNBQVgsR0FBdUIsV0FBdkIsR0FBcUMsVUFBL0MsQ0FBakI7QUFDQSxnQkFBSUssUUFBSixFQUFjO0FBQ1ZBLHlCQUFTLElBQVQ7QUFDSDtBQUNKO0FBMUNJO0FBbERDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tICcuLi9taXhpbnMvYnV0dG9uJztcbmltcG9ydCB7IG9wZW5UeXBlIH0gZnJvbSAnLi4vbWl4aW5zL29wZW4tdHlwZSc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBtaXhpbnM6IFtidXR0b24sIG9wZW5UeXBlXSxcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiBCb29sZWFuLFxuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBtZXNzYWdlOiBTdHJpbmcsXG4gICAgICAgIHVzZVNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGNsYXNzTmFtZTogU3RyaW5nLFxuICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgICBhc3luY0Nsb3NlOiBCb29sZWFuLFxuICAgICAgICBtZXNzYWdlQWxpZ246IFN0cmluZyxcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogQm9vbGVhbixcbiAgICAgICAgY2xvc2VPbkNsaWNrT3ZlcmxheTogQm9vbGVhbixcbiAgICAgICAgY29uZmlybUJ1dHRvbk9wZW5UeXBlOiBTdHJpbmcsXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDIwMDBcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAn56Gu6K6kJ1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ+WPlua2iCdcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdzY2FsZSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICBjb25maXJtOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgc2hvdyhzaG93KSB7XG4gICAgICAgICAgICAhc2hvdyAmJiB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25Db25maXJtKCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBY3Rpb24oJ2NvbmZpcm0nKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DYW5jZWwoKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFjdGlvbignY2FuY2VsJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tPdmVybGF5KCkge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKCdvdmVybGF5Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUFjdGlvbihhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXN5bmNDbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgW2Bsb2FkaW5nLiR7YWN0aW9ufWBdOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoYWN0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzdG9wTG9hZGluZygpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm06IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xvc2UoYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5hc3luY0Nsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnLCBhY3Rpb24pO1xuICAgICAgICAgICAgLy8g5oqKIGRpYWxvZyDlrp7kvovkvKDpgJLlh7rljrvvvIzlj6/ku6XpgJrov4cgc3RvcExvYWRpbmcoKSDlnKjlpJbpg6jlhbPpl63mjInpkq7nmoQgbG9hZGluZ1xuICAgICAgICAgICAgdGhpcy4kZW1pdChhY3Rpb24sIHsgZGlhbG9nOiB0aGlzIH0pO1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLmRhdGFbYWN0aW9uID09PSAnY29uZmlybScgPyAnb25Db25maXJtJyA6ICdvbkNhbmNlbCddO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==