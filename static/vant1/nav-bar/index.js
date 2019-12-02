'use strict';

var _component = require('./../common/component.js');

var _safeArea = require('./../mixins/safe-area.js');

(0, _component.VantComponent)({
    mixins: [(0, _safeArea.safeArea)({ safeAreaInsetTop: true })],
    classes: ['title-class'],
    props: {
        title: String,
        fixed: Boolean,
        leftText: String,
        rightText: String,
        leftArrow: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 120
        }
    },
    methods: {
        onClickLeft: function onClickLeft() {
            this.$emit('click-left');
        },
        onClickRight: function onClickRight() {
            this.$emit('click-right');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInNhZmVBcmVhSW5zZXRUb3AiLCJjbGFzc2VzIiwicHJvcHMiLCJ0aXRsZSIsIlN0cmluZyIsImZpeGVkIiwiQm9vbGVhbiIsImxlZnRUZXh0IiwicmlnaHRUZXh0IiwibGVmdEFycm93IiwiYm9yZGVyIiwidHlwZSIsInZhbHVlIiwiekluZGV4IiwiTnVtYmVyIiwibWV0aG9kcyIsIm9uQ2xpY2tMZWZ0IiwiJGVtaXQiLCJvbkNsaWNrUmlnaHQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsWUFBUSxDQUFDLHdCQUFTLEVBQUVDLGtCQUFrQixJQUFwQixFQUFULENBQUQsQ0FERTtBQUVWQyxhQUFTLENBQUMsYUFBRCxDQUZDO0FBR1ZDLFdBQU87QUFDSEMsZUFBT0MsTUFESjtBQUVIQyxlQUFPQyxPQUZKO0FBR0hDLGtCQUFVSCxNQUhQO0FBSUhJLG1CQUFXSixNQUpSO0FBS0hLLG1CQUFXSCxPQUxSO0FBTUhJLGdCQUFRO0FBQ0pDLGtCQUFNTCxPQURGO0FBRUpNLG1CQUFPO0FBRkgsU0FOTDtBQVVIQyxnQkFBUTtBQUNKRixrQkFBTUcsTUFERjtBQUVKRixtQkFBTztBQUZIO0FBVkwsS0FIRztBQWtCVkcsYUFBUztBQUNMQyxtQkFESyx5QkFDUztBQUNWLGlCQUFLQyxLQUFMLENBQVcsWUFBWDtBQUNILFNBSEk7QUFJTEMsb0JBSkssMEJBSVU7QUFDWCxpQkFBS0QsS0FBTCxDQUFXLGFBQVg7QUFDSDtBQU5JO0FBbEJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBzYWZlQXJlYSB9IGZyb20gJy4uL21peGlucy9zYWZlLWFyZWEnO1xuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbc2FmZUFyZWEoeyBzYWZlQXJlYUluc2V0VG9wOiB0cnVlIH0pXSxcbiAgICBjbGFzc2VzOiBbJ3RpdGxlLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgZml4ZWQ6IEJvb2xlYW4sXG4gICAgICAgIGxlZnRUZXh0OiBTdHJpbmcsXG4gICAgICAgIHJpZ2h0VGV4dDogU3RyaW5nLFxuICAgICAgICBsZWZ0QXJyb3c6IEJvb2xlYW4sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDEyMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2tMZWZ0KCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stbGVmdCcpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrUmlnaHQoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1yaWdodCcpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=