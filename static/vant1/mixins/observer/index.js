'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.observe = observe;

var _behavior = require('./behavior.js');

var _props = require('./props.js');

function observe(vantOptions, options) {
    var watch = vantOptions.watch,
        computed = vantOptions.computed;

    options.behaviors.push(_behavior.behavior);
    if (watch) {
        var props = options.properties || {};
        Object.keys(watch).forEach(function (key) {
            if (key in props) {
                var prop = props[key];
                if (prop === null || !('type' in prop)) {
                    prop = { type: prop };
                }
                prop.observer = watch[key];
                props[key] = prop;
            }
        });
        options.properties = props;
    }
    if (computed) {
        options.methods = options.methods || {};
        options.methods.$options = function () {
            return vantOptions;
        };
        if (options.properties) {
            (0, _props.observeProps)(options.properties);
        }
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm9ic2VydmUiLCJ2YW50T3B0aW9ucyIsIm9wdGlvbnMiLCJ3YXRjaCIsImNvbXB1dGVkIiwiYmVoYXZpb3JzIiwicHVzaCIsImJlaGF2aW9yIiwicHJvcHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcm9wIiwidHlwZSIsIm9ic2VydmVyIiwibWV0aG9kcyIsIiRvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsTyxHQUFBQSxPOztBQUZoQjs7QUFDQTs7QUFDTyxTQUFTQSxPQUFULENBQWlCQyxXQUFqQixFQUE4QkMsT0FBOUIsRUFBdUM7QUFBQSxRQUNsQ0MsS0FEa0MsR0FDZEYsV0FEYyxDQUNsQ0UsS0FEa0M7QUFBQSxRQUMzQkMsUUFEMkIsR0FDZEgsV0FEYyxDQUMzQkcsUUFEMkI7O0FBRTFDRixZQUFRRyxTQUFSLENBQWtCQyxJQUFsQixDQUF1QkMsa0JBQXZCO0FBQ0EsUUFBSUosS0FBSixFQUFXO0FBQ1AsWUFBTUssUUFBUU4sUUFBUU8sVUFBUixJQUFzQixFQUFwQztBQUNBQyxlQUFPQyxJQUFQLENBQVlSLEtBQVosRUFBbUJTLE9BQW5CLENBQTJCLGVBQU87QUFDOUIsZ0JBQUlDLE9BQU9MLEtBQVgsRUFBa0I7QUFDZCxvQkFBSU0sT0FBT04sTUFBTUssR0FBTixDQUFYO0FBQ0Esb0JBQUlDLFNBQVMsSUFBVCxJQUFpQixFQUFFLFVBQVVBLElBQVosQ0FBckIsRUFBd0M7QUFDcENBLDJCQUFPLEVBQUVDLE1BQU1ELElBQVIsRUFBUDtBQUNIO0FBQ0RBLHFCQUFLRSxRQUFMLEdBQWdCYixNQUFNVSxHQUFOLENBQWhCO0FBQ0FMLHNCQUFNSyxHQUFOLElBQWFDLElBQWI7QUFDSDtBQUNKLFNBVEQ7QUFVQVosZ0JBQVFPLFVBQVIsR0FBcUJELEtBQXJCO0FBQ0g7QUFDRCxRQUFJSixRQUFKLEVBQWM7QUFDVkYsZ0JBQVFlLE9BQVIsR0FBa0JmLFFBQVFlLE9BQVIsSUFBbUIsRUFBckM7QUFDQWYsZ0JBQVFlLE9BQVIsQ0FBZ0JDLFFBQWhCLEdBQTJCO0FBQUEsbUJBQU1qQixXQUFOO0FBQUEsU0FBM0I7QUFDQSxZQUFJQyxRQUFRTyxVQUFaLEVBQXdCO0FBQ3BCLHFDQUFhUCxRQUFRTyxVQUFyQjtBQUNIO0FBQ0o7QUFDSiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJlaGF2aW9yIH0gZnJvbSAnLi9iZWhhdmlvcic7XG5pbXBvcnQgeyBvYnNlcnZlUHJvcHMgfSBmcm9tICcuL3Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlKHZhbnRPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyB3YXRjaCwgY29tcHV0ZWQgfSA9IHZhbnRPcHRpb25zO1xuICAgIG9wdGlvbnMuYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IpO1xuICAgIGlmICh3YXRjaCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IG9wdGlvbnMucHJvcGVydGllcyB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMod2F0Y2gpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvcCA9IHByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IG51bGwgfHwgISgndHlwZScgaW4gcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcCA9IHsgdHlwZTogcHJvcCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wLm9ic2VydmVyID0gd2F0Y2hba2V5XTtcbiAgICAgICAgICAgICAgICBwcm9wc1trZXldID0gcHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG9wdGlvbnMucHJvcGVydGllcyA9IHByb3BzO1xuICAgIH1cbiAgICBpZiAoY29tcHV0ZWQpIHtcbiAgICAgICAgb3B0aW9ucy5tZXRob2RzID0gb3B0aW9ucy5tZXRob2RzIHx8IHt9O1xuICAgICAgICBvcHRpb25zLm1ldGhvZHMuJG9wdGlvbnMgPSAoKSA9PiB2YW50T3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMucHJvcGVydGllcykge1xuICAgICAgICAgICAgb2JzZXJ2ZVByb3BzKG9wdGlvbnMucHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=