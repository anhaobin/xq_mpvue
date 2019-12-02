'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    props: {
        info: null,
        name: String,
        size: String,
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'van-icon'
        }
    },
    methods: {
        onClick: function onClick() {
            this.$emit('click');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5mbyIsIm5hbWUiLCJTdHJpbmciLCJzaXplIiwiY29sb3IiLCJjdXN0b21TdHlsZSIsImNsYXNzUHJlZml4IiwidHlwZSIsInZhbHVlIiwibWV0aG9kcyIsIm9uQ2xpY2siLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPO0FBQ0hDLGNBQU0sSUFESDtBQUVIQyxjQUFNQyxNQUZIO0FBR0hDLGNBQU1ELE1BSEg7QUFJSEUsZUFBT0YsTUFKSjtBQUtIRyxxQkFBYUgsTUFMVjtBQU1ISSxxQkFBYTtBQUNUQyxrQkFBTUwsTUFERztBQUVUTSxtQkFBTztBQUZFO0FBTlYsS0FERztBQVlWQyxhQUFTO0FBQ0xDLGVBREsscUJBQ0s7QUFDTixpQkFBS0MsS0FBTCxDQUFXLE9BQVg7QUFDSDtBQUhJO0FBWkMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGluZm86IG51bGwsXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICBjb2xvcjogU3RyaW5nLFxuICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgICBjbGFzc1ByZWZpeDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd2YW4taWNvbidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19