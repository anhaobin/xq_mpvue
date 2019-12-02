'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    props: {
        show: Boolean,
        mask: Boolean,
        customStyle: String,
        duration: {
            type: [Number, Object],
            value: 300
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onClick: function onClick() {
            this.$emit('click');
        },

        // for prevent touchmove
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwiY3VzdG9tU3R5bGUiLCJTdHJpbmciLCJkdXJhdGlvbiIsInR5cGUiLCJOdW1iZXIiLCJPYmplY3QiLCJ2YWx1ZSIsInpJbmRleCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiLCJub29wIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU87QUFDSEMsY0FBTUMsT0FESDtBQUVIQyxjQUFNRCxPQUZIO0FBR0hFLHFCQUFhQyxNQUhWO0FBSUhDLGtCQUFVO0FBQ05DLGtCQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURBO0FBRU5DLG1CQUFPO0FBRkQsU0FKUDtBQVFIQyxnQkFBUTtBQUNKSixrQkFBTUMsTUFERjtBQUVKRSxtQkFBTztBQUZIO0FBUkwsS0FERztBQWNWRSxhQUFTO0FBQ0xDLGVBREsscUJBQ0s7QUFDTixpQkFBS0MsS0FBTCxDQUFXLE9BQVg7QUFDSCxTQUhJOztBQUlMO0FBQ0FDLFlBTEssa0JBS0UsQ0FBRztBQUxMO0FBZEMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IEJvb2xlYW4sXG4gICAgICAgIG1hc2s6IEJvb2xlYW4sXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBPYmplY3RdLFxuICAgICAgICAgICAgdmFsdWU6IDMwMFxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljaygpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGZvciBwcmV2ZW50IHRvdWNobW92ZVxuICAgICAgICBub29wKCkgeyB9XG4gICAgfVxufSk7XG4iXX0=