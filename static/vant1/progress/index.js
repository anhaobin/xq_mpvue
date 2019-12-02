'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

(0, _component.VantComponent)({
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
        showPivot: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
            value: _color.BLUE
        },
        textColor: {
            type: String,
            value: '#fff'
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5hY3RpdmUiLCJCb29sZWFuIiwicGVyY2VudGFnZSIsIk51bWJlciIsInBpdm90VGV4dCIsIlN0cmluZyIsInBpdm90Q29sb3IiLCJzaG93UGl2b3QiLCJ0eXBlIiwidmFsdWUiLCJjb2xvciIsIkJMVUUiLCJ0ZXh0Q29sb3IiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTztBQUNIQyxrQkFBVUMsT0FEUDtBQUVIQyxvQkFBWUMsTUFGVDtBQUdIQyxtQkFBV0MsTUFIUjtBQUlIQyxvQkFBWUQsTUFKVDtBQUtIRSxtQkFBVztBQUNQQyxrQkFBTVAsT0FEQztBQUVQUSxtQkFBTztBQUZBLFNBTFI7QUFTSEMsZUFBTztBQUNIRixrQkFBTUgsTUFESDtBQUVISSxtQkFBT0U7QUFGSixTQVRKO0FBYUhDLG1CQUFXO0FBQ1BKLGtCQUFNSCxNQURDO0FBRVBJLG1CQUFPO0FBRkE7QUFiUjtBQURHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBCTFVFIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yJztcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGluYWN0aXZlOiBCb29sZWFuLFxuICAgICAgICBwZXJjZW50YWdlOiBOdW1iZXIsXG4gICAgICAgIHBpdm90VGV4dDogU3RyaW5nLFxuICAgICAgICBwaXZvdENvbG9yOiBTdHJpbmcsXG4gICAgICAgIHNob3dQaXZvdDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogQkxVRVxuICAgICAgICB9LFxuICAgICAgICB0ZXh0Q29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2ZmZidcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19