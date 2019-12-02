'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VantComponent = undefined;

var _basic = require('./../mixins/basic.js');

var _index = require('./../mixins/observer/index.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mapKeys(source, target, map) {
    Object.keys(map).forEach(function (key) {
        if (source[key]) {
            target[map[key]] = source[key];
        }
    });
}
function VantComponent() {
    var vantOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var options = {};
    mapKeys(vantOptions, options, {
        data: 'data',
        props: 'properties',
        mixins: 'behaviors',
        methods: 'methods',
        beforeCreate: 'created',
        created: 'attached',
        mounted: 'ready',
        relations: 'relations',
        destroyed: 'detached',
        classes: 'externalClasses'
    });
    var relation = vantOptions.relation;

    if (relation) {
        options.relations = Object.assign(options.relations || {}, _defineProperty({}, '../' + relation.name + '/index', relation));
    }
    // add default externalClasses
    options.externalClasses = options.externalClasses || [];
    options.externalClasses.push('custom-class');
    // add default behaviors
    options.behaviors = options.behaviors || [];
    options.behaviors.push(_basic.basic);
    // map field to form-field behavior
    if (vantOptions.field) {
        options.behaviors.push('wx://form-field');
    }
    // add default options
    options.options = {
        multipleSlots: true,
        addGlobalClass: true
    };
    (0, _index.observe)(vantOptions, options);
    Component(options);
}
exports.VantComponent = VantComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtYXBLZXlzIiwic291cmNlIiwidGFyZ2V0IiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJWYW50Q29tcG9uZW50IiwidmFudE9wdGlvbnMiLCJvcHRpb25zIiwiZGF0YSIsInByb3BzIiwibWl4aW5zIiwibWV0aG9kcyIsImJlZm9yZUNyZWF0ZSIsImNyZWF0ZWQiLCJtb3VudGVkIiwicmVsYXRpb25zIiwiZGVzdHJveWVkIiwiY2xhc3NlcyIsInJlbGF0aW9uIiwiYXNzaWduIiwibmFtZSIsImV4dGVybmFsQ2xhc3NlcyIsInB1c2giLCJiZWhhdmlvcnMiLCJiYXNpYyIsImZpZWxkIiwibXVsdGlwbGVTbG90cyIsImFkZEdsb2JhbENsYXNzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQSxTQUFTQSxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ2xDQyxXQUFPQyxJQUFQLENBQVlGLEdBQVosRUFBaUJHLE9BQWpCLENBQXlCLGVBQU87QUFDNUIsWUFBSUwsT0FBT00sR0FBUCxDQUFKLEVBQWlCO0FBQ2JMLG1CQUFPQyxJQUFJSSxHQUFKLENBQVAsSUFBbUJOLE9BQU9NLEdBQVAsQ0FBbkI7QUFDSDtBQUNKLEtBSkQ7QUFLSDtBQUNELFNBQVNDLGFBQVQsR0FBeUM7QUFBQSxRQUFsQkMsV0FBa0IsdUVBQUosRUFBSTs7QUFDckMsUUFBTUMsVUFBVSxFQUFoQjtBQUNBVixZQUFRUyxXQUFSLEVBQXFCQyxPQUFyQixFQUE4QjtBQUMxQkMsY0FBTSxNQURvQjtBQUUxQkMsZUFBTyxZQUZtQjtBQUcxQkMsZ0JBQVEsV0FIa0I7QUFJMUJDLGlCQUFTLFNBSmlCO0FBSzFCQyxzQkFBYyxTQUxZO0FBTTFCQyxpQkFBUyxVQU5pQjtBQU8xQkMsaUJBQVMsT0FQaUI7QUFRMUJDLG1CQUFXLFdBUmU7QUFTMUJDLG1CQUFXLFVBVGU7QUFVMUJDLGlCQUFTO0FBVmlCLEtBQTlCO0FBRnFDLFFBYzdCQyxRQWQ2QixHQWNoQlosV0FkZ0IsQ0FjN0JZLFFBZDZCOztBQWVyQyxRQUFJQSxRQUFKLEVBQWM7QUFDVlgsZ0JBQVFRLFNBQVIsR0FBb0JkLE9BQU9rQixNQUFQLENBQWNaLFFBQVFRLFNBQVIsSUFBcUIsRUFBbkMsOEJBQ1RHLFNBQVNFLElBREEsYUFDZUYsUUFEZixFQUFwQjtBQUdIO0FBQ0Q7QUFDQVgsWUFBUWMsZUFBUixHQUEwQmQsUUFBUWMsZUFBUixJQUEyQixFQUFyRDtBQUNBZCxZQUFRYyxlQUFSLENBQXdCQyxJQUF4QixDQUE2QixjQUE3QjtBQUNBO0FBQ0FmLFlBQVFnQixTQUFSLEdBQW9CaEIsUUFBUWdCLFNBQVIsSUFBcUIsRUFBekM7QUFDQWhCLFlBQVFnQixTQUFSLENBQWtCRCxJQUFsQixDQUF1QkUsWUFBdkI7QUFDQTtBQUNBLFFBQUlsQixZQUFZbUIsS0FBaEIsRUFBdUI7QUFDbkJsQixnQkFBUWdCLFNBQVIsQ0FBa0JELElBQWxCLENBQXVCLGlCQUF2QjtBQUNIO0FBQ0Q7QUFDQWYsWUFBUUEsT0FBUixHQUFrQjtBQUNkbUIsdUJBQWUsSUFERDtBQUVkQyx3QkFBZ0I7QUFGRixLQUFsQjtBQUlBLHdCQUFRckIsV0FBUixFQUFxQkMsT0FBckI7QUFDQXFCLGNBQVVyQixPQUFWO0FBQ0g7UUFDUUYsYSxHQUFBQSxhIiwiZmlsZSI6ImNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhc2ljIH0gZnJvbSAnLi4vbWl4aW5zL2Jhc2ljJztcbmltcG9ydCB7IG9ic2VydmUgfSBmcm9tICcuLi9taXhpbnMvb2JzZXJ2ZXIvaW5kZXgnO1xuZnVuY3Rpb24gbWFwS2V5cyhzb3VyY2UsIHRhcmdldCwgbWFwKSB7XG4gICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChzb3VyY2Vba2V5XSkge1xuICAgICAgICAgICAgdGFyZ2V0W21hcFtrZXldXSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBWYW50Q29tcG9uZW50KHZhbnRPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBvcHRpb25zID0ge307XG4gICAgbWFwS2V5cyh2YW50T3B0aW9ucywgb3B0aW9ucywge1xuICAgICAgICBkYXRhOiAnZGF0YScsXG4gICAgICAgIHByb3BzOiAncHJvcGVydGllcycsXG4gICAgICAgIG1peGluczogJ2JlaGF2aW9ycycsXG4gICAgICAgIG1ldGhvZHM6ICdtZXRob2RzJyxcbiAgICAgICAgYmVmb3JlQ3JlYXRlOiAnY3JlYXRlZCcsXG4gICAgICAgIGNyZWF0ZWQ6ICdhdHRhY2hlZCcsXG4gICAgICAgIG1vdW50ZWQ6ICdyZWFkeScsXG4gICAgICAgIHJlbGF0aW9uczogJ3JlbGF0aW9ucycsXG4gICAgICAgIGRlc3Ryb3llZDogJ2RldGFjaGVkJyxcbiAgICAgICAgY2xhc3NlczogJ2V4dGVybmFsQ2xhc3NlcydcbiAgICB9KTtcbiAgICBjb25zdCB7IHJlbGF0aW9uIH0gPSB2YW50T3B0aW9ucztcbiAgICBpZiAocmVsYXRpb24pIHtcbiAgICAgICAgb3B0aW9ucy5yZWxhdGlvbnMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMucmVsYXRpb25zIHx8IHt9LCB7XG4gICAgICAgICAgICBbYC4uLyR7cmVsYXRpb24ubmFtZX0vaW5kZXhgXTogcmVsYXRpb25cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGFkZCBkZWZhdWx0IGV4dGVybmFsQ2xhc3Nlc1xuICAgIG9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzID0gb3B0aW9ucy5leHRlcm5hbENsYXNzZXMgfHwgW107XG4gICAgb3B0aW9ucy5leHRlcm5hbENsYXNzZXMucHVzaCgnY3VzdG9tLWNsYXNzJyk7XG4gICAgLy8gYWRkIGRlZmF1bHQgYmVoYXZpb3JzXG4gICAgb3B0aW9ucy5iZWhhdmlvcnMgPSBvcHRpb25zLmJlaGF2aW9ycyB8fCBbXTtcbiAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKGJhc2ljKTtcbiAgICAvLyBtYXAgZmllbGQgdG8gZm9ybS1maWVsZCBiZWhhdmlvclxuICAgIGlmICh2YW50T3B0aW9ucy5maWVsZCkge1xuICAgICAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKCd3eDovL2Zvcm0tZmllbGQnKTtcbiAgICB9XG4gICAgLy8gYWRkIGRlZmF1bHQgb3B0aW9uc1xuICAgIG9wdGlvbnMub3B0aW9ucyA9IHtcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcbiAgICAgICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcbiAgICB9O1xuICAgIG9ic2VydmUodmFudE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIENvbXBvbmVudChvcHRpb25zKTtcbn1cbmV4cG9ydCB7IFZhbnRDb21wb25lbnQgfTtcbiJdfQ==