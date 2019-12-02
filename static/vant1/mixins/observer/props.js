'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.observeProps = observeProps;
function observeProps(props) {
    if (!props) {
        return;
    }
    Object.keys(props).forEach(function (key) {
        var prop = props[key];
        if (prop === null || !('type' in prop)) {
            prop = { type: prop };
        }
        var _prop = prop,
            observer = _prop.observer;

        prop.observer = function () {
            if (observer) {
                if (typeof observer === 'string') {
                    observer = this[observer];
                }

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                observer.apply(this, args);
            }
            this.set();
        };
        props[key] = prop;
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BzLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVQcm9wcyIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wIiwia2V5IiwidHlwZSIsIm9ic2VydmVyIiwiYXJncyIsImFwcGx5Iiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsWSxHQUFBQSxZO0FBQVQsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDaEMsUUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUjtBQUNIO0FBQ0RDLFdBQU9DLElBQVAsQ0FBWUYsS0FBWixFQUFtQkcsT0FBbkIsQ0FBMkIsZUFBTztBQUM5QixZQUFJQyxPQUFPSixNQUFNSyxHQUFOLENBQVg7QUFDQSxZQUFJRCxTQUFTLElBQVQsSUFBaUIsRUFBRSxVQUFVQSxJQUFaLENBQXJCLEVBQXdDO0FBQ3BDQSxtQkFBTyxFQUFFRSxNQUFNRixJQUFSLEVBQVA7QUFDSDtBQUo2QixvQkFLWEEsSUFMVztBQUFBLFlBS3hCRyxRQUx3QixTQUt4QkEsUUFMd0I7O0FBTTlCSCxhQUFLRyxRQUFMLEdBQWdCLFlBQW1CO0FBQy9CLGdCQUFJQSxRQUFKLEVBQWM7QUFDVixvQkFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQzlCQSwrQkFBVyxLQUFLQSxRQUFMLENBQVg7QUFDSDs7QUFIUyxrREFEV0MsSUFDWDtBQURXQSx3QkFDWDtBQUFBOztBQUlWRCx5QkFBU0UsS0FBVCxDQUFlLElBQWYsRUFBcUJELElBQXJCO0FBQ0g7QUFDRCxpQkFBS0UsR0FBTDtBQUNILFNBUkQ7QUFTQVYsY0FBTUssR0FBTixJQUFhRCxJQUFiO0FBQ0gsS0FoQkQ7QUFpQkgiLCJmaWxlIjoicHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVByb3BzKHByb3BzKSB7XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNba2V5XTtcbiAgICAgICAgaWYgKHByb3AgPT09IG51bGwgfHwgISgndHlwZScgaW4gcHJvcCkpIHtcbiAgICAgICAgICAgIHByb3AgPSB7IHR5cGU6IHByb3AgfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeyBvYnNlcnZlciB9ID0gcHJvcDtcbiAgICAgICAgcHJvcC5vYnNlcnZlciA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlciA9IHRoaXNbb2JzZXJ2ZXJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYnNlcnZlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHByb3BzW2tleV0gPSBwcm9wO1xuICAgIH0pO1xufVxuIl19