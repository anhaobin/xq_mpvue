'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var basic = exports.basic = Behavior({
    methods: {
        $emit: function $emit() {
            this.triggerEvent.apply(this, arguments);
        },
        getRect: function getRect(selector, all) {
            var _this = this;

            return new Promise(function (resolve) {
                wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
                    if (all && Array.isArray(rect) && rect.length) {
                        resolve(rect);
                    }
                    if (!all && rect) {
                        resolve(rect);
                    }
                }).exec();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbImJhc2ljIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwiJGVtaXQiLCJ0cmlnZ2VyRXZlbnQiLCJnZXRSZWN0Iiwic2VsZWN0b3IiLCJhbGwiLCJQcm9taXNlIiwid3giLCJjcmVhdGVTZWxlY3RvclF1ZXJ5IiwiaW4iLCJib3VuZGluZ0NsaWVudFJlY3QiLCJBcnJheSIsImlzQXJyYXkiLCJyZWN0IiwibGVuZ3RoIiwicmVzb2x2ZSIsImV4ZWMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsd0JBQVFDLFNBQVM7QUFDMUJDLGFBQVM7QUFDTEMsYUFESyxtQkFDVTtBQUNYLGlCQUFLQyxZQUFMO0FBQ0gsU0FISTtBQUlMQyxlQUpLLG1CQUlHQyxRQUpILEVBSWFDLEdBSmIsRUFJa0I7QUFBQTs7QUFDbkIsbUJBQU8sSUFBSUMsT0FBSixDQUFZLG1CQUFXO0FBQzFCQyxtQkFBR0MsbUJBQUgsR0FDS0MsRUFETCxDQUNRLEtBRFIsRUFDY0osTUFBTSxXQUFOLEdBQW9CLFFBRGxDLEVBQzRDRCxRQUQ1QyxFQUVLTSxrQkFGTCxDQUV3QixnQkFBUTtBQUM1Qix3QkFBSUwsT0FBT00sTUFBTUMsT0FBTixDQUFjQyxJQUFkLENBQVAsSUFBOEJBLEtBQUtDLE1BQXZDLEVBQStDO0FBQzNDQyxnQ0FBUUYsSUFBUjtBQUNIO0FBQ0Qsd0JBQUksQ0FBQ1IsR0FBRCxJQUFRUSxJQUFaLEVBQWtCO0FBQ2RFLGdDQUFRRixJQUFSO0FBQ0g7QUFDSixpQkFURCxFQVVLRyxJQVZMO0FBV0gsYUFaTSxDQUFQO0FBYUg7QUFsQkk7QUFEaUIsQ0FBVCxDQUFkIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJhc2ljID0gQmVoYXZpb3Ioe1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgJGVtaXQoLi4uYXJncykge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJlY3Qoc2VsZWN0b3IsIGFsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgICAgICAgICAgICAuaW4odGhpcylbYWxsID8gJ3NlbGVjdEFsbCcgOiAnc2VsZWN0J10oc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgIC5ib3VuZGluZ0NsaWVudFJlY3QocmVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGwgJiYgQXJyYXkuaXNBcnJheShyZWN0KSAmJiByZWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFsbCAmJiByZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=