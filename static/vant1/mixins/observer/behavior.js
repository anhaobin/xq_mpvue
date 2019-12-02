'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function setAsync(context, data) {
    return new Promise(function (resolve) {
        context.setData(data, resolve);
    });
}
var behavior = exports.behavior = Behavior({
    created: function created() {
        var _this = this;

        if (!this.$options) {
            return;
        }
        var cache = {};

        var _$options = this.$options(),
            computed = _$options.computed;

        var keys = Object.keys(computed);
        this.calcComputed = function () {
            var needUpdate = {};
            keys.forEach(function (key) {
                var value = computed[key].call(_this);
                if (cache[key] !== value) {
                    cache[key] = value;
                    needUpdate[key] = value;
                }
            });
            return needUpdate;
        };
    },
    attached: function attached() {
        this.set();
    },

    methods: {
        // set data and set computed data
        set: function set(data, callback) {
            var _this2 = this;

            var stack = [];
            if (data) {
                stack.push(setAsync(this, data));
            }
            if (this.calcComputed) {
                stack.push(setAsync(this, this.calcComputed()));
            }
            return Promise.all(stack).then(function (res) {
                if (callback && typeof callback === 'function') {
                    callback.call(_this2);
                }
                return res;
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGF2aW9yLmpzIl0sIm5hbWVzIjpbInNldEFzeW5jIiwiY29udGV4dCIsImRhdGEiLCJQcm9taXNlIiwic2V0RGF0YSIsInJlc29sdmUiLCJiZWhhdmlvciIsIkJlaGF2aW9yIiwiY3JlYXRlZCIsIiRvcHRpb25zIiwiY2FjaGUiLCJjb21wdXRlZCIsImtleXMiLCJPYmplY3QiLCJjYWxjQ29tcHV0ZWQiLCJuZWVkVXBkYXRlIiwiZm9yRWFjaCIsInZhbHVlIiwia2V5IiwiY2FsbCIsImF0dGFjaGVkIiwic2V0IiwibWV0aG9kcyIsImNhbGxiYWNrIiwic3RhY2siLCJwdXNoIiwiYWxsIiwidGhlbiIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxRQUFULENBQWtCQyxPQUFsQixFQUEyQkMsSUFBM0IsRUFBaUM7QUFDN0IsV0FBTyxJQUFJQyxPQUFKLENBQVksbUJBQVc7QUFDMUJGLGdCQUFRRyxPQUFSLENBQWdCRixJQUFoQixFQUFzQkcsT0FBdEI7QUFDSCxLQUZNLENBQVA7QUFHSDtBQUNNLElBQU1DLDhCQUFXQyxTQUFTO0FBQzdCQyxXQUQ2QixxQkFDbkI7QUFBQTs7QUFDTixZQUFJLENBQUMsS0FBS0MsUUFBVixFQUFvQjtBQUNoQjtBQUNIO0FBQ0QsWUFBTUMsUUFBUSxFQUFkOztBQUpNLHdCQUtlLEtBQUtELFFBQUwsRUFMZjtBQUFBLFlBS0VFLFFBTEYsYUFLRUEsUUFMRjs7QUFNTixZQUFNQyxPQUFPQyxPQUFPRCxJQUFQLENBQVlELFFBQVosQ0FBYjtBQUNBLGFBQUtHLFlBQUwsR0FBb0IsWUFBTTtBQUN0QixnQkFBTUMsYUFBYSxFQUFuQjtBQUNBSCxpQkFBS0ksT0FBTCxDQUFhLGVBQU87QUFDaEIsb0JBQU1DLFFBQVFOLFNBQVNPLEdBQVQsRUFBY0MsSUFBZCxDQUFtQixLQUFuQixDQUFkO0FBQ0Esb0JBQUlULE1BQU1RLEdBQU4sTUFBZUQsS0FBbkIsRUFBMEI7QUFDdEJQLDBCQUFNUSxHQUFOLElBQWFELEtBQWI7QUFDQUYsK0JBQVdHLEdBQVgsSUFBa0JELEtBQWxCO0FBQ0g7QUFDSixhQU5EO0FBT0EsbUJBQU9GLFVBQVA7QUFDSCxTQVZEO0FBV0gsS0FuQjRCO0FBb0I3QkssWUFwQjZCLHNCQW9CbEI7QUFDUCxhQUFLQyxHQUFMO0FBQ0gsS0F0QjRCOztBQXVCN0JDLGFBQVM7QUFDTDtBQUNBRCxXQUZLLGVBRURuQixJQUZDLEVBRUtxQixRQUZMLEVBRWU7QUFBQTs7QUFDaEIsZ0JBQU1DLFFBQVEsRUFBZDtBQUNBLGdCQUFJdEIsSUFBSixFQUFVO0FBQ05zQixzQkFBTUMsSUFBTixDQUFXekIsU0FBUyxJQUFULEVBQWVFLElBQWYsQ0FBWDtBQUNIO0FBQ0QsZ0JBQUksS0FBS1ksWUFBVCxFQUF1QjtBQUNuQlUsc0JBQU1DLElBQU4sQ0FBV3pCLFNBQVMsSUFBVCxFQUFlLEtBQUtjLFlBQUwsRUFBZixDQUFYO0FBQ0g7QUFDRCxtQkFBT1gsUUFBUXVCLEdBQVIsQ0FBWUYsS0FBWixFQUFtQkcsSUFBbkIsQ0FBd0IsZUFBTztBQUNsQyxvQkFBSUosWUFBWSxPQUFPQSxRQUFQLEtBQW9CLFVBQXBDLEVBQWdEO0FBQzVDQSw2QkFBU0osSUFBVCxDQUFjLE1BQWQ7QUFDSDtBQUNELHVCQUFPUyxHQUFQO0FBQ0gsYUFMTSxDQUFQO0FBTUg7QUFoQkk7QUF2Qm9CLENBQVQsQ0FBakIiLCJmaWxlIjoiYmVoYXZpb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZXRBc3luYyhjb250ZXh0LCBkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBjb250ZXh0LnNldERhdGEoZGF0YSwgcmVzb2x2ZSk7XG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgYmVoYXZpb3IgPSBCZWhhdmlvcih7XG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiRvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FjaGUgPSB7fTtcbiAgICAgICAgY29uc3QgeyBjb21wdXRlZCB9ID0gdGhpcy4kb3B0aW9ucygpO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcHV0ZWQpO1xuICAgICAgICB0aGlzLmNhbGNDb21wdXRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRVcGRhdGUgPSB7fTtcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29tcHV0ZWRba2V5XS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZVtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIG5lZWRVcGRhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5lZWRVcGRhdGU7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgdGhpcy5zZXQoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8gc2V0IGRhdGEgYW5kIHNldCBjb21wdXRlZCBkYXRhXG4gICAgICAgIHNldChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChzZXRBc3luYyh0aGlzLCBkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jYWxjQ29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHNldEFzeW5jKHRoaXMsIHRoaXMuY2FsY0NvbXB1dGVkKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjaykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=