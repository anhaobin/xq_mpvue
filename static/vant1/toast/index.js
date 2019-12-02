'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    props: {
        show: Boolean,
        mask: Boolean,
        message: String,
        forbidClick: Boolean,
        zIndex: {
            type: Number,
            value: 1000
        },
        type: {
            type: String,
            value: 'text'
        },
        loadingType: {
            type: String,
            value: 'circular'
        },
        position: {
            type: String,
            value: 'middle'
        }
    },
    methods: {
        // for prevent touchmove
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwibWVzc2FnZSIsIlN0cmluZyIsImZvcmJpZENsaWNrIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwibG9hZGluZ1R5cGUiLCJwb3NpdGlvbiIsIm1ldGhvZHMiLCJub29wIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU87QUFDSEMsY0FBTUMsT0FESDtBQUVIQyxjQUFNRCxPQUZIO0FBR0hFLGlCQUFTQyxNQUhOO0FBSUhDLHFCQUFhSixPQUpWO0FBS0hLLGdCQUFRO0FBQ0pDLGtCQUFNQyxNQURGO0FBRUpDLG1CQUFPO0FBRkgsU0FMTDtBQVNIRixjQUFNO0FBQ0ZBLGtCQUFNSCxNQURKO0FBRUZLLG1CQUFPO0FBRkwsU0FUSDtBQWFIQyxxQkFBYTtBQUNUSCxrQkFBTUgsTUFERztBQUVUSyxtQkFBTztBQUZFLFNBYlY7QUFpQkhFLGtCQUFVO0FBQ05KLGtCQUFNSCxNQURBO0FBRU5LLG1CQUFPO0FBRkQ7QUFqQlAsS0FERztBQXVCVkcsYUFBUztBQUNMO0FBQ0FDLFlBRkssa0JBRUUsQ0FBRztBQUZMO0FBdkJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiBCb29sZWFuLFxuICAgICAgICBtYXNrOiBCb29sZWFuLFxuICAgICAgICBtZXNzYWdlOiBTdHJpbmcsXG4gICAgICAgIGZvcmJpZENsaWNrOiBCb29sZWFuLFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMDAwXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAndGV4dCdcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZ1R5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnY2lyY3VsYXInXG4gICAgICAgIH0sXG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ21pZGRsZSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyBmb3IgcHJldmVudCB0b3VjaG1vdmVcbiAgICAgICAgbm9vcCgpIHsgfVxuICAgIH1cbn0pO1xuIl19