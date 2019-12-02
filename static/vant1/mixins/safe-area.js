"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var cache = null;
function getSafeArea() {
    return new Promise(function (resolve, reject) {
        if (cache != null) {
            resolve(cache);
        } else {
            wx.getSystemInfo({
                success: function success(_ref) {
                    var model = _ref.model,
                        screenHeight = _ref.screenHeight,
                        statusBarHeight = _ref.statusBarHeight;

                    var iphoneX = /iphone x/i.test(model);
                    var iphoneNew = /iPhone11/i.test(model) && screenHeight === 812;
                    cache = {
                        isIPhoneX: iphoneX || iphoneNew,
                        statusBarHeight: statusBarHeight
                    };
                    resolve(cache);
                },
                fail: reject
            });
        }
    });
}
var safeArea = exports.safeArea = function safeArea() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$safeAreaInsetBo = _ref2.safeAreaInsetBottom,
        safeAreaInsetBottom = _ref2$safeAreaInsetBo === undefined ? true : _ref2$safeAreaInsetBo,
        _ref2$safeAreaInsetTo = _ref2.safeAreaInsetTop,
        safeAreaInsetTop = _ref2$safeAreaInsetTo === undefined ? false : _ref2$safeAreaInsetTo;

    return Behavior({
        properties: {
            safeAreaInsetTop: {
                type: Boolean,
                value: safeAreaInsetTop
            },
            safeAreaInsetBottom: {
                type: Boolean,
                value: safeAreaInsetBottom
            }
        },
        created: function created() {
            var _this = this;

            getSafeArea().then(function (_ref3) {
                var isIPhoneX = _ref3.isIPhoneX,
                    statusBarHeight = _ref3.statusBarHeight;

                _this.set({ isIPhoneX: isIPhoneX, statusBarHeight: statusBarHeight });
            });
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZmUtYXJlYS5qcyJdLCJuYW1lcyI6WyJjYWNoZSIsImdldFNhZmVBcmVhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3eCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwibW9kZWwiLCJzY3JlZW5IZWlnaHQiLCJzdGF0dXNCYXJIZWlnaHQiLCJpcGhvbmVYIiwidGVzdCIsImlwaG9uZU5ldyIsImlzSVBob25lWCIsImZhaWwiLCJzYWZlQXJlYSIsInNhZmVBcmVhSW5zZXRCb3R0b20iLCJzYWZlQXJlYUluc2V0VG9wIiwiQmVoYXZpb3IiLCJwcm9wZXJ0aWVzIiwidHlwZSIsIkJvb2xlYW4iLCJ2YWx1ZSIsImNyZWF0ZWQiLCJ0aGVuIiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUlBLFFBQVEsSUFBWjtBQUNBLFNBQVNDLFdBQVQsR0FBdUI7QUFDbkIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLFlBQUlKLFNBQVMsSUFBYixFQUFtQjtBQUNmRyxvQkFBUUgsS0FBUjtBQUNILFNBRkQsTUFHSztBQUNESyxlQUFHQyxhQUFILENBQWlCO0FBQ2JDLHlCQUFTLHVCQUE4QztBQUFBLHdCQUEzQ0MsS0FBMkMsUUFBM0NBLEtBQTJDO0FBQUEsd0JBQXBDQyxZQUFvQyxRQUFwQ0EsWUFBb0M7QUFBQSx3QkFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjs7QUFDbkQsd0JBQU1DLFVBQVUsWUFBWUMsSUFBWixDQUFpQkosS0FBakIsQ0FBaEI7QUFDQSx3QkFBTUssWUFBWSxZQUFZRCxJQUFaLENBQWlCSixLQUFqQixLQUEyQkMsaUJBQWlCLEdBQTlEO0FBQ0FULDRCQUFRO0FBQ0pjLG1DQUFXSCxXQUFXRSxTQURsQjtBQUVKSDtBQUZJLHFCQUFSO0FBSUFQLDRCQUFRSCxLQUFSO0FBQ0gsaUJBVFk7QUFVYmUsc0JBQU1YO0FBVk8sYUFBakI7QUFZSDtBQUNKLEtBbEJNLENBQVA7QUFtQkg7QUFDTSxJQUFNWSw4QkFBVyxTQUFYQSxRQUFXO0FBQUEsb0ZBQTRELEVBQTVEO0FBQUEsc0NBQUdDLG1CQUFIO0FBQUEsUUFBR0EsbUJBQUgseUNBQXlCLElBQXpCO0FBQUEsc0NBQStCQyxnQkFBL0I7QUFBQSxRQUErQkEsZ0JBQS9CLHlDQUFrRCxLQUFsRDs7QUFBQSxXQUFtRUMsU0FBUztBQUNoR0Msb0JBQVk7QUFDUkYsOEJBQWtCO0FBQ2RHLHNCQUFNQyxPQURRO0FBRWRDLHVCQUFPTDtBQUZPLGFBRFY7QUFLUkQsaUNBQXFCO0FBQ2pCSSxzQkFBTUMsT0FEVztBQUVqQkMsdUJBQU9OO0FBRlU7QUFMYixTQURvRjtBQVdoR08sZUFYZ0cscUJBV3RGO0FBQUE7O0FBQ052QiwwQkFBY3dCLElBQWQsQ0FBbUIsaUJBQW9DO0FBQUEsb0JBQWpDWCxTQUFpQyxTQUFqQ0EsU0FBaUM7QUFBQSxvQkFBdEJKLGVBQXNCLFNBQXRCQSxlQUFzQjs7QUFDbkQsc0JBQUtnQixHQUFMLENBQVMsRUFBRVosb0JBQUYsRUFBYUosZ0NBQWIsRUFBVDtBQUNILGFBRkQ7QUFHSDtBQWYrRixLQUFULENBQW5FO0FBQUEsQ0FBakIiLCJmaWxlIjoic2FmZS1hcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGNhY2hlID0gbnVsbDtcbmZ1bmN0aW9uIGdldFNhZmVBcmVhKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChjYWNoZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXNvbHZlKGNhY2hlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7IG1vZGVsLCBzY3JlZW5IZWlnaHQsIHN0YXR1c0JhckhlaWdodCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlwaG9uZVggPSAvaXBob25lIHgvaS50ZXN0KG1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXBob25lTmV3ID0gL2lQaG9uZTExL2kudGVzdChtb2RlbCkgJiYgc2NyZWVuSGVpZ2h0ID09PSA4MTI7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNJUGhvbmVYOiBpcGhvbmVYIHx8IGlwaG9uZU5ldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBzYWZlQXJlYSA9ICh7IHNhZmVBcmVhSW5zZXRCb3R0b20gPSB0cnVlLCBzYWZlQXJlYUluc2V0VG9wID0gZmFsc2UgfSA9IHt9KSA9PiBCZWhhdmlvcih7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzYWZlQXJlYUluc2V0VG9wOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHNhZmVBcmVhSW5zZXRUb3BcbiAgICAgICAgfSxcbiAgICAgICAgc2FmZUFyZWFJbnNldEJvdHRvbToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBzYWZlQXJlYUluc2V0Qm90dG9tXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGdldFNhZmVBcmVhKCkudGhlbigoeyBpc0lQaG9uZVgsIHN0YXR1c0JhckhlaWdodCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IGlzSVBob25lWCwgc3RhdHVzQmFySGVpZ2h0IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiJdfQ==