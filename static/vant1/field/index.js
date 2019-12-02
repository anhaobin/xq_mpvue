'use strict';

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['input-class', 'right-icon-class'],
    props: {
        size: String,
        icon: String,
        label: String,
        error: Boolean,
        fixed: Boolean,
        focus: Boolean,
        center: Boolean,
        isLink: Boolean,
        leftIcon: String,
        rightIcon: String,
        disabled: Boolean,
        autosize: Boolean,
        readonly: Boolean,
        required: Boolean,
        password: Boolean,
        iconClass: String,
        clearable: Boolean,
        inputAlign: String,
        customStyle: String,
        confirmType: String,
        confirmHold: Boolean,
        errorMessage: String,
        placeholder: String,
        placeholderStyle: String,
        errorMessageAlign: String,
        selectionEnd: {
            type: Number,
            value: -1
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        showConfirmBar: {
            type: Boolean,
            value: true
        },
        adjustPosition: {
            type: Boolean,
            value: true
        },
        cursorSpacing: {
            type: Number,
            value: 50
        },
        maxlength: {
            type: Number,
            value: -1
        },
        type: {
            type: String,
            value: 'text'
        },
        border: {
            type: Boolean,
            value: true
        },
        titleWidth: {
            type: String,
            value: '90px'
        }
    },
    data: {
        focused: false,
        system: (0, _utils.getSystemInfoSync)().system.split(' ').shift().toLowerCase()
    },
    methods: {
        onInput: function onInput(event) {
            var _this = this;

            var _ref = event.detail || {},
                _ref$value = _ref.value,
                value = _ref$value === undefined ? '' : _ref$value;

            this.set({ value: value }, function () {
                _this.emitChange(value);
            });
        },
        onFocus: function onFocus(event) {
            this.set({ focused: true });
            this.$emit('focus', event.detail);
        },
        onBlur: function onBlur(event) {
            this.set({ focused: false });
            this.$emit('blur', event.detail);
        },
        onClickIcon: function onClickIcon() {
            this.$emit('click-icon');
        },
        onClear: function onClear() {
            var _this2 = this;

            this.set({ value: '' }, function () {
                _this2.emitChange('');
                _this2.$emit('clear', '');
            });
        },
        onConfirm: function onConfirm() {
            this.$emit('confirm', this.data.value);
        },
        emitChange: function emitChange(value) {
            this.$emit('input', value);
            this.$emit('change', value);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwic2l6ZSIsIlN0cmluZyIsImljb24iLCJsYWJlbCIsImVycm9yIiwiQm9vbGVhbiIsImZpeGVkIiwiZm9jdXMiLCJjZW50ZXIiLCJpc0xpbmsiLCJsZWZ0SWNvbiIsInJpZ2h0SWNvbiIsImRpc2FibGVkIiwiYXV0b3NpemUiLCJyZWFkb25seSIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJpY29uQ2xhc3MiLCJjbGVhcmFibGUiLCJpbnB1dEFsaWduIiwiY3VzdG9tU3R5bGUiLCJjb25maXJtVHlwZSIsImNvbmZpcm1Ib2xkIiwiZXJyb3JNZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclN0eWxlIiwiZXJyb3JNZXNzYWdlQWxpZ24iLCJzZWxlY3Rpb25FbmQiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJzZWxlY3Rpb25TdGFydCIsInNob3dDb25maXJtQmFyIiwiYWRqdXN0UG9zaXRpb24iLCJjdXJzb3JTcGFjaW5nIiwibWF4bGVuZ3RoIiwiYm9yZGVyIiwidGl0bGVXaWR0aCIsImRhdGEiLCJmb2N1c2VkIiwic3lzdGVtIiwic3BsaXQiLCJzaGlmdCIsInRvTG93ZXJDYXNlIiwibWV0aG9kcyIsIm9uSW5wdXQiLCJldmVudCIsImRldGFpbCIsInNldCIsImVtaXRDaGFuZ2UiLCJvbkZvY3VzIiwiJGVtaXQiLCJvbkJsdXIiLCJvbkNsaWNrSWNvbiIsIm9uQ2xlYXIiLCJvbkNvbmZpcm0iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDVkEsV0FBTyxJQURHO0FBRVZDLGFBQVMsQ0FBQyxhQUFELEVBQWdCLGtCQUFoQixDQUZDO0FBR1ZDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxjQUFNRCxNQUZIO0FBR0hFLGVBQU9GLE1BSEo7QUFJSEcsZUFBT0MsT0FKSjtBQUtIQyxlQUFPRCxPQUxKO0FBTUhFLGVBQU9GLE9BTko7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QVVSLEtBQWhDO0FBQ0gsU0ExQkk7QUEyQkxtQixrQkEzQkssc0JBMkJNbkIsS0EzQk4sRUEyQmE7QUFDZCxpQkFBS3FCLEtBQUwsQ0FBVyxPQUFYLEVBQW9CckIsS0FBcEI7QUFDQSxpQkFBS3FCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCckIsS0FBckI7QUFDSDtBQTlCSTtBQXRFQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgZ2V0U3lzdGVtSW5mb1N5bmMgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgY2xhc3NlczogWydpbnB1dC1jbGFzcycsICdyaWdodC1pY29uLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICAgIGVycm9yOiBCb29sZWFuLFxuICAgICAgICBmaXhlZDogQm9vbGVhbixcbiAgICAgICAgZm9jdXM6IEJvb2xlYW4sXG4gICAgICAgIGNlbnRlcjogQm9vbGVhbixcbiAgICAgICAgaXNMaW5rOiBCb29sZWFuLFxuICAgICAgICBsZWZ0SWNvbjogU3RyaW5nLFxuICAgICAgICByaWdodEljb246IFN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGF1dG9zaXplOiBCb29sZWFuLFxuICAgICAgICByZWFkb25seTogQm9vbGVhbixcbiAgICAgICAgcmVxdWlyZWQ6IEJvb2xlYW4sXG4gICAgICAgIHBhc3N3b3JkOiBCb29sZWFuLFxuICAgICAgICBpY29uQ2xhc3M6IFN0cmluZyxcbiAgICAgICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgICAgICBpbnB1dEFsaWduOiBTdHJpbmcsXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIGNvbmZpcm1UeXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbmZpcm1Ib2xkOiBCb29sZWFuLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFN0cmluZyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICAgICAgcGxhY2Vob2xkZXJTdHlsZTogU3RyaW5nLFxuICAgICAgICBlcnJvck1lc3NhZ2VBbGlnbjogU3RyaW5nLFxuICAgICAgICBzZWxlY3Rpb25FbmQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Rpb25TdGFydDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IC0xXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dDb25maXJtQmFyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYWRqdXN0UG9zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjdXJzb3JTcGFjaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNTBcbiAgICAgICAgfSxcbiAgICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogLTFcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0ZXh0J1xuICAgICAgICB9LFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZVdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJzkwcHgnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICAgIHN5c3RlbTogZ2V0U3lzdGVtSW5mb1N5bmMoKS5zeXN0ZW0uc3BsaXQoJyAnKS5zaGlmdCgpLnRvTG93ZXJDYXNlKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JbnB1dChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSA9ICcnIH0gPSBldmVudC5kZXRhaWwgfHwge307XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CbHVyKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tJY29uKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2staWNvbicpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZTogJycgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xlYXInLCAnJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db25maXJtKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY29uZmlybScsIHRoaXMuZGF0YS52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXRDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=