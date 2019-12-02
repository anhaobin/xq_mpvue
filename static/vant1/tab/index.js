'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'tabs',
        type: 'ancestor'
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean,
        titleStyle: String
    },
    data: {
        width: null,
        inited: false,
        active: false,
        animated: false
    },
    watch: {
        title: 'update',
        disabled: 'update',
        dot: 'update',
        info: 'update',
        titleStyle: 'update'
    },
    methods: {
        update: function update() {
            var parent = this.getRelationNodes('../tabs/index')[0];
            if (parent) {
                parent.updateTabs();
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsImRvdCIsIkJvb2xlYW4iLCJpbmZvIiwidGl0bGUiLCJTdHJpbmciLCJkaXNhYmxlZCIsInRpdGxlU3R5bGUiLCJkYXRhIiwid2lkdGgiLCJpbml0ZWQiLCJhY3RpdmUiLCJhbmltYXRlZCIsIndhdGNoIiwibWV0aG9kcyIsInVwZGF0ZSIsInBhcmVudCIsImdldFJlbGF0aW9uTm9kZXMiLCJ1cGRhdGVUYWJzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLGNBQVU7QUFDTkMsY0FBTSxNQURBO0FBRU5DLGNBQU07QUFGQSxLQURBO0FBS1ZDLFdBQU87QUFDSEMsYUFBS0MsT0FERjtBQUVIQyxjQUFNLElBRkg7QUFHSEMsZUFBT0MsTUFISjtBQUlIQyxrQkFBVUosT0FKUDtBQUtISyxvQkFBWUY7QUFMVCxLQUxHO0FBWVZHLFVBQU07QUFDRkMsZUFBTyxJQURMO0FBRUZDLGdCQUFRLEtBRk47QUFHRkMsZ0JBQVEsS0FITjtBQUlGQyxrQkFBVTtBQUpSLEtBWkk7QUFrQlZDLFdBQU87QUFDSFQsZUFBTyxRQURKO0FBRUhFLGtCQUFVLFFBRlA7QUFHSEwsYUFBSyxRQUhGO0FBSUhFLGNBQU0sUUFKSDtBQUtISSxvQkFBWTtBQUxULEtBbEJHO0FBeUJWTyxhQUFTO0FBQ0xDLGNBREssb0JBQ0k7QUFDTCxnQkFBTUMsU0FBUyxLQUFLQyxnQkFBTCxDQUFzQixlQUF0QixFQUF1QyxDQUF2QyxDQUFmO0FBQ0EsZ0JBQUlELE1BQUosRUFBWTtBQUNSQSx1QkFBT0UsVUFBUDtBQUNIO0FBQ0o7QUFOSTtBQXpCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3RhYnMnLFxuICAgICAgICB0eXBlOiAnYW5jZXN0b3InXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBkb3Q6IEJvb2xlYW4sXG4gICAgICAgIGluZm86IG51bGwsXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICB0aXRsZVN0eWxlOiBTdHJpbmdcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgd2lkdGg6IG51bGwsXG4gICAgICAgIGluaXRlZDogZmFsc2UsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdGl0bGU6ICd1cGRhdGUnLFxuICAgICAgICBkaXNhYmxlZDogJ3VwZGF0ZScsXG4gICAgICAgIGRvdDogJ3VwZGF0ZScsXG4gICAgICAgIGluZm86ICd1cGRhdGUnLFxuICAgICAgICB0aXRsZVN0eWxlOiAndXBkYXRlJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYnMvaW5kZXgnKVswXTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQudXBkYXRlVGFicygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=