'use strict';

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

(0, _component.VantComponent)({
    mixins: [_touch.touch],
    props: {
        disabled: Boolean,
        useButtonSlot: Boolean,
        activeColor: String,
        inactiveColor: String,
        max: {
            type: Number,
            value: 100
        },
        min: {
            type: Number,
            value: 0
        },
        step: {
            type: Number,
            value: 1
        },
        value: {
            type: Number,
            value: 0
        },
        barHeight: {
            type: String,
            value: '2px'
        }
    },
    watch: {
        value: function value(_value) {
            this.updateValue(_value, false);
        }
    },
    created: function created() {
        this.updateValue(this.data.value);
    },

    methods: {
        onTouchStart: function onTouchStart(event) {
            if (this.data.disabled) return;
            this.touchStart(event);
            this.startValue = this.format(this.data.value);
        },
        onTouchMove: function onTouchMove(event) {
            var _this = this;

            if (this.data.disabled) return;
            this.touchMove(event);
            this.getRect('.van-slider').then(function (rect) {
                var diff = _this.deltaX / rect.width * 100;
                _this.newValue = _this.startValue + diff;
                _this.updateValue(_this.newValue, false, true);
            });
        },
        onTouchEnd: function onTouchEnd() {
            if (this.data.disabled) return;
            this.updateValue(this.newValue, true);
        },
        onClick: function onClick(event) {
            var _this2 = this;

            if (this.data.disabled) return;
            this.getRect('.van-slider').then(function (rect) {
                var value = (event.detail.x - rect.left) / rect.width * 100;
                _this2.updateValue(value, true);
            });
        },
        updateValue: function updateValue(value, end, drag) {
            value = this.format(value);
            this.set({
                value: value,
                barStyle: 'width: ' + value + '%; height: ' + this.data.barHeight + ';'
            });
            if (drag) {
                this.$emit('drag', { value: value });
            }
            if (end) {
                this.$emit('change', value);
            }
        },
        format: function format(value) {
            var _data = this.data,
                max = _data.max,
                min = _data.min,
                step = _data.step;

            return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInRvdWNoIiwicHJvcHMiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ1c2VCdXR0b25TbG90IiwiYWN0aXZlQ29sb3IiLCJTdHJpbmciLCJpbmFjdGl2ZUNvbG9yIiwibWF4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwibWluIiwic3RlcCIsImJhckhlaWdodCIsIndhdGNoIiwidXBkYXRlVmFsdWUiLCJjcmVhdGVkIiwiZGF0YSIsIm1ldGhvZHMiLCJvblRvdWNoU3RhcnQiLCJldmVudCIsInRvdWNoU3RhcnQiLCJzdGFydFZhbHVlIiwiZm9ybWF0Iiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmUiLCJnZXRSZWN0IiwidGhlbiIsInJlY3QiLCJkaWZmIiwiZGVsdGFYIiwid2lkdGgiLCJuZXdWYWx1ZSIsIm9uVG91Y2hFbmQiLCJvbkNsaWNrIiwiZGV0YWlsIiwieCIsImxlZnQiLCJlbmQiLCJkcmFnIiwic2V0IiwiYmFyU3R5bGUiLCIkZW1pdCIsIk1hdGgiLCJyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxZQUFRLENBQUNDLFlBQUQsQ0FERTtBQUVWQyxXQUFPO0FBQ0hDLGtCQUFVQyxPQURQO0FBRUhDLHVCQUFlRCxPQUZaO0FBR0hFLHFCQUFhQyxNQUhWO0FBSUhDLHVCQUFlRCxNQUpaO0FBS0hFLGFBQUs7QUFDREMsa0JBQU1DLE1BREw7QUFFREMsbUJBQU87QUFGTixTQUxGO0FBU0hDLGFBQUs7QUFDREgsa0JBQU1DLE1BREw7QUFFREMsbUJBQU87QUFGTixTQVRGO0FBYUhFLGNBQU07QUFDRkosa0JBQU1DLE1BREo7QUFFRkMsbUJBQU87QUFGTCxTQWJIO0FBaUJIQSxlQUFPO0FBQ0hGLGtCQUFNQyxNQURIO0FBRUhDLG1CQUFPO0FBRkosU0FqQko7QUFxQkhHLG1CQUFXO0FBQ1BMLGtCQUFNSCxNQURDO0FBRVBLLG1CQUFPO0FBRkE7QUFyQlIsS0FG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IjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyB0b3VjaCB9IGZyb20gJy4uL21peGlucy90b3VjaCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBtaXhpbnM6IFt0b3VjaF0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHVzZUJ1dHRvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgICAgIGluYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIG1pbjoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgc3RlcDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGJhckhlaWdodDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcycHgnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5kYXRhLnZhbHVlKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudG91Y2hTdGFydChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB0aGlzLmZvcm1hdCh0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnRvdWNoTW92ZShldmVudCk7XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tc2xpZGVyJykudGhlbigocmVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLmRlbHRhWCAvIHJlY3Qud2lkdGggKiAxMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHRoaXMuc3RhcnRWYWx1ZSArIGRpZmY7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLm5ld1ZhbHVlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLm5ld1ZhbHVlLCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tc2xpZGVyJykudGhlbigocmVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LmRldGFpbC54IC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGggKiAxMDA7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlVmFsdWUodmFsdWUsIGVuZCwgZHJhZykge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgYmFyU3R5bGU6IGB3aWR0aDogJHt2YWx1ZX0lOyBoZWlnaHQ6ICR7dGhpcy5kYXRhLmJhckhlaWdodH07YFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZHJhZykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2RyYWcnLCB7IHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7IG1heCwgbWluLCBzdGVwIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKSAvIHN0ZXApICogc3RlcDtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19