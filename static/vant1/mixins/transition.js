'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transition = undefined;

var _utils = require('./../common/utils.js');

var getClassNames = function getClassNames(name) {
    return {
        enter: 'van-' + name + '-enter van-' + name + '-enter-active enter-class enter-active-class',
        'enter-to': 'van-' + name + '-enter-to van-' + name + '-enter-active enter-to-class enter-active-class',
        leave: 'van-' + name + '-leave van-' + name + '-leave-active leave-class leave-active-class',
        'leave-to': 'van-' + name + '-leave-to van-' + name + '-leave-active leave-to-class leave-active-class'
    };
};
var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 1000 / 30);
    });
};
var transition = exports.transition = function transition(showDefaultValue) {
    return Behavior({
        properties: {
            customStyle: String,
            // @ts-ignore
            show: {
                type: Boolean,
                value: showDefaultValue,
                observer: 'observeShow'
            },
            // @ts-ignore
            duration: {
                type: [Number, Object],
                value: 300,
                observer: 'observeDuration'
            },
            name: {
                type: String,
                value: 'fade'
            }
        },
        data: {
            type: '',
            inited: false,
            display: false
        },
        attached: function attached() {
            if (this.data.show) {
                this.enter();
            }
        },

        methods: {
            observeShow: function observeShow(value) {
                if (value) {
                    this.enter();
                } else {
                    this.leave();
                }
            },
            enter: function enter() {
                var _this = this;

                var _data = this.data,
                    duration = _data.duration,
                    name = _data.name;

                var classNames = getClassNames(name);
                var currentDuration = (0, _utils.isObj)(duration) ? duration.enter : duration;
                this.status = 'enter';
                Promise.resolve().then(nextTick).then(function () {
                    _this.checkStatus('enter');
                    _this.set({
                        inited: true,
                        display: true,
                        classes: classNames.enter,
                        currentDuration: currentDuration
                    });
                }).then(nextTick).then(function () {
                    _this.checkStatus('enter');
                    _this.set({
                        classes: classNames['enter-to']
                    });
                }).catch(function () {});
            },
            leave: function leave() {
                var _this2 = this;

                var _data2 = this.data,
                    duration = _data2.duration,
                    name = _data2.name;

                var classNames = getClassNames(name);
                var currentDuration = (0, _utils.isObj)(duration) ? duration.leave : duration;
                this.status = 'leave';
                Promise.resolve().then(nextTick).then(function () {
                    _this2.checkStatus('leave');
                    _this2.set({
                        classes: classNames.leave,
                        currentDuration: currentDuration
                    });
                }).then(function () {
                    return setTimeout(function () {
                        return _this2.onTransitionEnd();
                    }, currentDuration);
                }).then(nextTick).then(function () {
                    _this2.checkStatus('leave');
                    _this2.set({
                        classes: classNames['leave-to']
                    });
                }).catch(function () {});
            },
            checkStatus: function checkStatus(status) {
                if (status !== this.status) {
                    throw new Error('incongruent status: ' + status);
                }
            },
            onTransitionEnd: function onTransitionEnd() {
                if (!this.data.show) {
                    this.set({ display: false });
                    this.$emit('transitionEnd');
                }
            }
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXRpb24uanMiXSwibmFtZXMiOlsiZ2V0Q2xhc3NOYW1lcyIsIm5hbWUiLCJlbnRlciIsImxlYXZlIiwibmV4dFRpY2siLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJ0cmFuc2l0aW9uIiwic2hvd0RlZmF1bHRWYWx1ZSIsIkJlaGF2aW9yIiwicHJvcGVydGllcyIsImN1c3RvbVN0eWxlIiwiU3RyaW5nIiwic2hvdyIsInR5cGUiLCJCb29sZWFuIiwidmFsdWUiLCJvYnNlcnZlciIsImR1cmF0aW9uIiwiTnVtYmVyIiwiT2JqZWN0IiwiZGF0YSIsImluaXRlZCIsImRpc3BsYXkiLCJhdHRhY2hlZCIsIm1ldGhvZHMiLCJvYnNlcnZlU2hvdyIsImNsYXNzTmFtZXMiLCJjdXJyZW50RHVyYXRpb24iLCJzdGF0dXMiLCJ0aGVuIiwiY2hlY2tTdGF0dXMiLCJzZXQiLCJjbGFzc2VzIiwiY2F0Y2giLCJvblRyYW5zaXRpb25FbmQiLCJFcnJvciIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFEO0FBQUEsV0FBVztBQUM3QkMsd0JBQWNELElBQWQsbUJBQWdDQSxJQUFoQyxpREFENkI7QUFFN0IsNkJBQW1CQSxJQUFuQixzQkFBd0NBLElBQXhDLG9EQUY2QjtBQUc3QkUsd0JBQWNGLElBQWQsbUJBQWdDQSxJQUFoQyxpREFINkI7QUFJN0IsNkJBQW1CQSxJQUFuQixzQkFBd0NBLElBQXhDO0FBSjZCLEtBQVg7QUFBQSxDQUF0QjtBQU1BLElBQU1HLFdBQVcsU0FBWEEsUUFBVztBQUFBLFdBQU0sSUFBSUMsT0FBSixDQUFZO0FBQUEsZUFBV0MsV0FBV0MsT0FBWCxFQUFvQixPQUFPLEVBQTNCLENBQVg7QUFBQSxLQUFaLENBQU47QUFBQSxDQUFqQjtBQUNPLElBQU1DLGtDQUFhLFNBQWJBLFVBQWEsQ0FBVUMsZ0JBQVYsRUFBNEI7QUFDbEQsV0FBT0Ms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Q0xDLGlDQUFTTixXQUFXLFVBQVg7QUFESixxQkFBVDtBQUdILGlCQWhCRCxFQWlCS08sS0FqQkwsQ0FpQlcsWUFBTSxDQUFHLENBakJwQjtBQWtCSCxhQXpESTtBQTBETEgsdUJBMURLLHVCQTBET0YsTUExRFAsRUEwRGU7QUFDaEIsb0JBQUlBLFdBQVcsS0FBS0EsTUFBcEIsRUFBNEI7QUFDeEIsMEJBQU0sSUFBSU8sS0FBSiwwQkFBaUNQLE1BQWpDLENBQU47QUFDSDtBQUNKLGFBOURJO0FBK0RMTSwyQkEvREssNkJBK0RhO0FBQ2Qsb0JBQUksQ0FBQyxLQUFLZCxJQUFMLENBQVVSLElBQWYsRUFBcUI7QUFDakIseUJBQUttQixHQUFMLENBQVMsRUFBRVQsU0FBUyxLQUFYLEVBQVQ7QUFDQSx5QkFBS2MsS0FBTCxDQUFXLGVBQVg7QUFDSDtBQUNKO0FBcEVJO0FBOUJHLEtBQVQsQ0FBUDtBQXFHSCxDQXRHTSIsImZpbGUiOiJ0cmFuc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNPYmogfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuY29uc3QgZ2V0Q2xhc3NOYW1lcyA9IChuYW1lKSA9PiAoe1xuICAgIGVudGVyOiBgdmFuLSR7bmFtZX0tZW50ZXIgdmFuLSR7bmFtZX0tZW50ZXItYWN0aXZlIGVudGVyLWNsYXNzIGVudGVyLWFjdGl2ZS1jbGFzc2AsXG4gICAgJ2VudGVyLXRvJzogYHZhbi0ke25hbWV9LWVudGVyLXRvIHZhbi0ke25hbWV9LWVudGVyLWFjdGl2ZSBlbnRlci10by1jbGFzcyBlbnRlci1hY3RpdmUtY2xhc3NgLFxuICAgIGxlYXZlOiBgdmFuLSR7bmFtZX0tbGVhdmUgdmFuLSR7bmFtZX0tbGVhdmUtYWN0aXZlIGxlYXZlLWNsYXNzIGxlYXZlLWFjdGl2ZS1jbGFzc2AsXG4gICAgJ2xlYXZlLXRvJzogYHZhbi0ke25hbWV9LWxlYXZlLXRvIHZhbi0ke25hbWV9LWxlYXZlLWFjdGl2ZSBsZWF2ZS10by1jbGFzcyBsZWF2ZS1hY3RpdmUtY2xhc3NgXG59KTtcbmNvbnN0IG5leHRUaWNrID0gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDAgLyAzMCkpO1xuZXhwb3J0IGNvbnN0IHRyYW5zaXRpb24gPSBmdW5jdGlvbiAoc2hvd0RlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBCZWhhdmlvcih7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2hvd0RlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVTaG93J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogW051bWJlciwgT2JqZWN0XSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogMzAwLFxuICAgICAgICAgICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZUR1cmF0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmYWRlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgICAgIGluaXRlZDogZmFsc2UsXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuc2hvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb2JzZXJ2ZVNob3codmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWF2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnRlcigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGR1cmF0aW9uLCBuYW1lIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGdldENsYXNzTmFtZXMobmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudER1cmF0aW9uID0gaXNPYmooZHVyYXRpb24pID8gZHVyYXRpb24uZW50ZXIgOiBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdlbnRlcic7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obmV4dFRpY2spXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N0YXR1cygnZW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXMuZW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obmV4dFRpY2spXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N0YXR1cygnZW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NOYW1lc1snZW50ZXItdG8nXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWF2ZSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGR1cmF0aW9uLCBuYW1lIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGdldENsYXNzTmFtZXMobmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudER1cmF0aW9uID0gaXNPYmooZHVyYXRpb24pID8gZHVyYXRpb24ubGVhdmUgOiBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdsZWF2ZSc7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obmV4dFRpY2spXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N0YXR1cygnbGVhdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NOYW1lcy5sZWF2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25UcmFuc2l0aW9uRW5kKCksIGN1cnJlbnREdXJhdGlvbikpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG5leHRUaWNrKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGF0dXMoJ2xlYXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXNbJ2xlYXZlLXRvJ11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tTdGF0dXMoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gdGhpcy5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbmNvbmdydWVudCBzdGF0dXM6ICR7c3RhdHVzfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuc2hvdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldCh7IGRpc3BsYXk6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuIl19