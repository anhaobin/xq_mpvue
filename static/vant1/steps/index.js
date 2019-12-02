'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

(0, _component.VantComponent)({
    props: {
        icon: String,
        steps: Array,
        active: Number,
        direction: {
            type: String,
            value: 'horizontal'
        },
        activeColor: {
            type: String,
            value: _color.GREEN
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaWNvbiIsIlN0cmluZyIsInN0ZXBzIiwiQXJyYXkiLCJhY3RpdmUiLCJOdW1iZXIiLCJkaXJlY3Rpb24iLCJ0eXBlIiwidmFsdWUiLCJhY3RpdmVDb2xvciIsIkdSRUVOIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxlQUFPQyxLQUZKO0FBR0hDLGdCQUFRQyxNQUhMO0FBSUhDLG1CQUFXO0FBQ1BDLGtCQUFNTixNQURDO0FBRVBPLG1CQUFPO0FBRkEsU0FKUjtBQVFIQyxxQkFBYTtBQUNURixrQkFBTU4sTUFERztBQUVUTyxtQkFBT0U7QUFGRTtBQVJWO0FBREcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IEdSRUVOIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yJztcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgc3RlcHM6IEFycmF5LFxuICAgICAgICBhY3RpdmU6IE51bWJlcixcbiAgICAgICAgZGlyZWN0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2hvcml6b250YWwnXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZUNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogR1JFRU5cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19