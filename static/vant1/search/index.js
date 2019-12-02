'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['field-class', 'input-class', 'cancel-class'],
    props: {
        label: String,
        focus: Boolean,
        error: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        inputAlign: String,
        showAction: Boolean,
        useActionSlot: Boolean,
        placeholder: String,
        placeholderStyle: String,
        background: {
            type: String,
            value: '#ffffff'
        },
        maxlength: {
            type: Number,
            value: -1
        },
        shape: {
            type: String,
            value: 'square'
        },
        clearable: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onChange: function onChange(event) {
            this.set({ value: event.detail });
            this.$emit('change', event.detail);
        },
        onCancel: function onCancel() {
            var _this = this;

            /**
             * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
             * // https://github.com/youzan/vant-weapp/issues/1768
             */
            setTimeout(function () {
                _this.set({ value: '' });
                _this.$emit('cancel');
                _this.$emit('change', '');
            }, 200);
        },
        onSearch: function onSearch() {
            this.$emit('search', this.data.value);
        },
        onFocus: function onFocus() {
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.$emit('blur');
        },
        onClear: function onClear() {
            this.$emit('clear');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwibGFiZWwiLCJTdHJpbmciLCJmb2N1cyIsIkJvb2xlYW4iLCJlcnJvciIsImRpc2FibGVkIiwicmVhZG9ubHkiLCJpbnB1dEFsaWduIiwic2hvd0FjdGlvbiIsInVzZUFjdGlvblNsb3QiLCJwbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyU3R5bGUiLCJiYWNrZ3JvdW5kIiwidHlwZSIsInZhbHVlIiwibWF4bGVuZ3RoIiwiTnVtYmVyIiwic2hhcGUiLCJjbGVhcmFibGUiLCJtZXRob2RzIiwib25DaGFuZ2UiLCJldmVudCIsInNldCIsImRldGFpbCIsIiRlbWl0Iiwib25DYW5jZWwiLCJzZXRUaW1lb3V0Iiwib25TZWFyY2giLCJkYXRhIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uQ2xlYXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTyxJQURHO0FBRVZDLGFBQVMsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGNBQS9CLENBRkM7QUFHVkMsV0FBTztBQUNIQyxlQUFPQyxNQURKO0FBRUhDLGVBQU9DLE9BRko7QUFHSEMsZUFBT0QsT0FISjtBQUlIRSxrQkFBVUYsT0FKUDtBQUtIRyxrQkFBVUgsT0FMUDtBQU1ISSxvQkFBWU4sTUFOVDtBQU9ITyxvQkFBWUwsT0FQVDtBQVFITSx1QkFBZU4sT0FSWjtBQVNITyxxQkFBYVQsTUFUVjtBQVVIVSwwQkFBa0JWLE1BVmY7QUFXSFcsb0JBQVk7QUFDUkMsa0JBQU1aLE1BREU7QUFFUmEsbUJBQU87QUFGQyxTQVhUO0FBZUhDLG1CQUFXO0FBQ1BGLGtCQUFNRyxNQURDO0FBRVBGLG1CQUFPLENBQUM7QUFGRCxTQWZSO0FBbUJIRyxlQUFPO0FBQ0hKLGtCQUFNWixNQURIO0FBRUhhLG1CQUFPO0FBRkosU0FuQko7QUF1QkhJLG1CQUFXO0FBQ1BMLGtCQUFNVixPQURDO0FBRVBXLG1CQUFPO0FBRkE7QUF2QlIsS0FIRztBQStCVkssYUFBUztBQUNMQyxnQkFESyxvQkFDSUMsS0FESixFQUNXO0FBQ1osaUJBQUtDLEdBQUwsQ0FBUyxFQUFFUixPQUFPTyxNQUFNRSxNQUFmLEVBQVQ7QUFDQSxpQkFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJILE1BQU1FLE1BQTNCO0FBQ0gsU0FKSTtBQUtMRSxnQkFMSyxzQkFLTTtBQUFBOztBQUNQOzs7O0FBSUFDLHVCQUFXLFlBQU07QUFDYixzQkFBS0osR0FBTCxDQUFTLEVBQUVSLE9BQU8sRUFBVCxFQUFUO0FBQ0Esc0JBQUtVLEtBQUwsQ0FBVyxRQUFYO0FBQ0Esc0JBQUtBLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLEVBQXJCO0FBQ0gsYUFKRCxFQUlHLEdBSkg7QUFLSCxTQWZJO0FBZ0JMRyxnQkFoQkssc0JBZ0JNO0FBQ1AsaUJBQUtILEtBQUwsQ0FBVyxRQUFYLEVBQXFCLEtBQUtJLElBQUwsQ0FBVWQsS0FBL0I7QUFDSCxTQWxCSTtBQW1CTGUsZUFuQksscUJBbUJLO0FBQ04saUJBQUtMLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FyQkk7QUFzQkxNLGNBdEJLLG9CQXNCSTtBQUNMLGlCQUFLTixLQUFMLENBQVcsTUFBWDtBQUNILFNBeEJJO0FBeUJMTyxlQXpCSyxxQkF5Qks7QUFDTixpQkFBS1AsS0FBTCxDQUFXLE9BQVg7QUFDSDtBQTNCSTtBQS9CQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgY2xhc3NlczogWydmaWVsZC1jbGFzcycsICdpbnB1dC1jbGFzcycsICdjYW5jZWwtY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgICBmb2N1czogQm9vbGVhbixcbiAgICAgICAgZXJyb3I6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICByZWFkb25seTogQm9vbGVhbixcbiAgICAgICAgaW5wdXRBbGlnbjogU3RyaW5nLFxuICAgICAgICBzaG93QWN0aW9uOiBCb29sZWFuLFxuICAgICAgICB1c2VBY3Rpb25TbG90OiBCb29sZWFuLFxuICAgICAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlOiBTdHJpbmcsXG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2ZmZmZmZidcbiAgICAgICAgfSxcbiAgICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogLTFcbiAgICAgICAgfSxcbiAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnc3F1YXJlJ1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcmFibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlOiBldmVudC5kZXRhaWwgfSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNhbmNlbCgpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5L+u5aSN5L+u5pS56L6T5YWl5qGG5YC85pe277yM6L6T5YWl5qGG5aSx54Sm5ZKM6LWL5YC85ZCM5pe26Kem5Y+R77yM6LWL5YC85aSx5pWIXG4gICAgICAgICAgICAgKiAvLyBodHRwczovL2dpdGh1Yi5jb20veW91emFuL3ZhbnQtd2VhcHAvaXNzdWVzLzE3NjhcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZTogJycgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgJycpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TZWFyY2goKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CbHVyKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xlYXInKTtcbiAgICAgICAgfSxcbiAgICB9XG59KTtcbiJdfQ==