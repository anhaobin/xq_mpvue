'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['input-class', 'plus-class', 'minus-class'],
    props: {
        value: null,
        integer: Boolean,
        disabled: Boolean,
        inputWidth: String,
        asyncChange: Boolean,
        disableInput: Boolean,
        min: {
            type: null,
            value: 1
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER
        },
        step: {
            type: null,
            value: 1
        },
        showPlus: {
            type: Boolean,
            value: true
        },
        showMinus: {
            type: Boolean,
            value: true
        }
    },
    computed: {
        minusDisabled: function minusDisabled() {
            return this.data.disabled || this.data.value <= this.data.min;
        },
        plusDisabled: function plusDisabled() {
            return this.data.disabled || this.data.value >= this.data.max;
        }
    },
    watch: {
        value: function value(_value) {
            if (_value === '') {
                return;
            }
            var newValue = this.range(_value);
            if (typeof newValue === 'number' && +this.data.value !== newValue) {
                this.set({ value: newValue });
            }
        }
    },
    data: {
        focus: false
    },
    created: function created() {
        this.set({
            value: this.range(this.data.value)
        });
    },

    methods: {
        onFocus: function onFocus(event) {
            this.$emit('focus', event.detail);
        },
        onBlur: function onBlur(event) {
            var value = this.range(this.data.value);
            this.triggerInput(value);
            this.$emit('blur', event.detail);
        },

        // limit value range
        range: function range(value) {
            value = String(value).replace(/[^0-9.-]/g, '');
            return Math.max(Math.min(this.data.max, value), this.data.min);
        },
        onInput: function onInput(event) {
            var _ref = event.detail || {},
                _ref$value = _ref.value,
                value = _ref$value === undefined ? '' : _ref$value;

            this.triggerInput(value);
        },
        onChange: function onChange(type) {
            if (this.data[type + 'Disabled']) {
                this.$emit('overlimit', type);
                return;
            }
            var diff = type === 'minus' ? -this.data.step : +this.data.step;
            var value = Math.round((+this.data.value + diff) * 100) / 100;
            this.triggerInput(this.range(value));
            this.$emit(type);
        },
        onMinus: function onMinus() {
            this.onChange('minus');
        },
        onPlus: function onPlus() {
            this.onChange('plus');
        },
        triggerInput: function triggerInput(value) {
            this.set({
                value: this.data.asyncChange ? this.data.value : value
            });
            this.$emit('change', value);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwidmFsdWUiLCJpbnRlZ2VyIiwiQm9vbGVhbiIsImRpc2FibGVkIiwiaW5wdXRXaWR0aCIsIlN0cmluZyIsImFzeW5jQ2hhbmdlIiwiZGlzYWJsZUlucHV0IiwibWluIiwidHlwZSIsIm1heCIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJzdGVwIiwic2hvd1BsdXMiLCJzaG93TWludXMiLCJjb21wdXRlZCIsIm1pbnVzRGlzYWJsZWQiLCJkYXRhIiwicGx1c0Rpc2FibGVkIiwid2F0Y2giLCJuZXdWYWx1ZSIsInJhbmdlIiwic2V0IiwiZm9jdXMiLCJjcmVhdGVkIiwibWV0aG9kcyIsIm9uRm9jdXMiLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwib25CbHVyIiwidHJpZ2dlcklucHV0IiwicmVwbGFjZSIsIk1hdGgiLCJvbklucHV0Iiwib25DaGFuZ2UiLCJkaWZmIiwicm91bmQiLCJvbk1pbnVzIiwib25QbHVzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1ZBLFdBQU8sSUFERztBQUVWQyxhQUFTLENBQ0wsYUFESyxFQUVMLFlBRkssRUFHTCxhQUhLLENBRkM7QUFPVkMsV0FBTztBQUNIQyxlQUFPLElBREo7QUFFSEMsaUJBQVNDLE9BRk47QUFHSEMsa0JBQVVELE9BSFA7QUFJSEUsb0JBQVlDLE1BSlQ7QUFLSEMscUJBQWFKLE9BTFY7QUFNSEssc0JBQWNMLE9BTlg7QUFPSE0sYUFBSztBQUNEQyxrQkFBTSxJQURMO0FBRURULG1CQUFPO0FBRk4sU0FQRjtBQVdIVSxhQUFLO0FBQ0RELGtCQUFNLElBREw7QUFFRFQsbUJBQU9XLE9BQU9DO0FBRmIsU0FYRjtBQWVIQyxjQUFNO0FBQ0ZKLGtCQUFNLElBREo7QUFFRlQsbUJBQU87QUFGTCxTQWZIO0FBbUJIYyxrQkFBVTtBQUNOTCxrQkFBTVAsT0FEQTtBQUVORixtQkFBTztBQUZELFNBbkJQ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QVgsQ0FBbEI7QUFDQSxpQkFBSzZCLEtBQUwsQ0FBV3BCLElBQVg7QUFDSCxTQTNCSTtBQTRCTDhCLGVBNUJLLHFCQTRCSztBQUNOLGlCQUFLSCxRQUFMLENBQWMsT0FBZDtBQUNILFNBOUJJO0FBK0JMSSxjQS9CSyxvQkErQkk7QUFDTCxpQkFBS0osUUFBTCxDQUFjLE1BQWQ7QUFDSCxTQWpDSTtBQWtDTEosb0JBbENLLHdCQWtDUWhDLEtBbENSLEVBa0NlO0FBQ2hCLGlCQUFLdUIsR0FBTCxDQUFTO0FBQ0x2Qix1QkFBTyxLQUFLa0IsSUFBTCxDQUFVWixXQUFWLEdBQXdCLEtBQUtZLElBQUwsQ0FBVWxCLEtBQWxDLEdBQTBDQTtBQUQ1QyxhQUFUO0FBR0EsaUJBQUs2QixLQUFMLENBQVcsUUFBWCxFQUFxQjdCLEtBQXJCO0FBQ0g7QUF2Q0k7QUE5REMsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIGNsYXNzZXM6IFtcbiAgICAgICAgJ2lucHV0LWNsYXNzJyxcbiAgICAgICAgJ3BsdXMtY2xhc3MnLFxuICAgICAgICAnbWludXMtY2xhc3MnXG4gICAgXSxcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgaW50ZWdlcjogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGlucHV0V2lkdGg6IFN0cmluZyxcbiAgICAgICAgYXN5bmNDaGFuZ2U6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVJbnB1dDogQm9vbGVhbixcbiAgICAgICAgbWluOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcbiAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgICAgIH0sXG4gICAgICAgIHN0ZXA6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuICAgICAgICBzaG93UGx1czoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dNaW51czoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1pbnVzRGlzYWJsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmRpc2FibGVkIHx8IHRoaXMuZGF0YS52YWx1ZSA8PSB0aGlzLmRhdGEubWluO1xuICAgICAgICB9LFxuICAgICAgICBwbHVzRGlzYWJsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmRpc2FibGVkIHx8IHRoaXMuZGF0YS52YWx1ZSA+PSB0aGlzLmRhdGEubWF4O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5yYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSAnbnVtYmVyJyAmJiArdGhpcy5kYXRhLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGZvY3VzOiBmYWxzZVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMucmFuZ2UodGhpcy5kYXRhLnZhbHVlKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25Gb2N1cyhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yYW5nZSh0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VySW5wdXQodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGxpbWl0IHZhbHVlIHJhbmdlXG4gICAgICAgIHJhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvW14wLTkuLV0vZywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHRoaXMuZGF0YS5tYXgsIHZhbHVlKSwgdGhpcy5kYXRhLm1pbik7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUgPSAnJyB9ID0gZXZlbnQuZGV0YWlsIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VySW5wdXQodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZSh0eXBlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhW2Ake3R5cGV9RGlzYWJsZWRgXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ292ZXJsaW1pdCcsIHR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0eXBlID09PSAnbWludXMnID8gLXRoaXMuZGF0YS5zdGVwIDogK3RoaXMuZGF0YS5zdGVwO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLnJvdW5kKCgrdGhpcy5kYXRhLnZhbHVlICsgZGlmZikgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VySW5wdXQodGhpcy5yYW5nZSh2YWx1ZSkpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCh0eXBlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25NaW51cygpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoJ21pbnVzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUGx1cygpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoJ3BsdXMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlcklucHV0KHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZGF0YS5hc3luY0NoYW5nZSA/IHRoaXMuZGF0YS52YWx1ZSA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19