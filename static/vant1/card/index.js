'use strict';

var _link = require('./../mixins/link.js');

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    classes: ['num-class', 'desc-class', 'thumb-class', 'title-class', 'price-class', 'origin-price-class'],
    mixins: [_link.link],
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: String,
        title: String,
        price: String,
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        originPrice: String,
        thumbMode: {
            type: String,
            value: 'aspectFit'
        },
        currency: {
            type: String,
            value: '¥'
        }
    },
    methods: {
        onClickThumb: function onClickThumb() {
            this.jumpLink('thumbLink');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0YWciLCJTdHJpbmciLCJudW0iLCJkZXNjIiwidGh1bWIiLCJ0aXRsZSIsInByaWNlIiwiY2VudGVyZWQiLCJCb29sZWFuIiwibGF6eUxvYWQiLCJ0aHVtYkxpbmsiLCJvcmlnaW5QcmljZSIsInRodW1iTW9kZSIsInR5cGUiLCJ2YWx1ZSIsImN1cnJlbmN5IiwibWV0aG9kcyIsIm9uQ2xpY2tUaHVtYiIsImp1bXBMaW5rIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLGFBQVMsQ0FDTCxXQURLLEVBRUwsWUFGSyxFQUdMLGFBSEssRUFJTCxhQUpLLEVBS0wsYUFMSyxFQU1MLG9CQU5LLENBREM7QUFTVkMsWUFBUSxDQUFDQyxVQUFELENBVEU7QUFVVkMsV0FBTztBQUNIQyxhQUFLQyxNQURGO0FBRUhDLGFBQUtELE1BRkY7QUFHSEUsY0FBTUYsTUFISDtBQUlIRyxlQUFPSCxNQUpKO0FBS0hJLGVBQU9KLE1BTEo7QUFNSEssZUFBT0wsTUFOSjtBQU9ITSxrQkFBVUMsT0FQUDtBQVFIQyxrQkFBVUQsT0FSUDtBQVNIRSxtQkFBV1QsTUFUUjtBQVVIVSxxQkFBYVYsTUFWVjtBQVdIVyxtQkFBVztBQUNQQyxrQkFBTVosTUFEQztBQUVQYSxtQkFBTztBQUZBLFNBWFI7QUFlSEMsa0JBQVU7QUFDTkYsa0JBQU1aLE1BREE7QUFFTmEsbUJBQU87QUFGRDtBQWZQLEtBVkc7QUE4QlZFLGFBQVM7QUFDTEMsb0JBREssMEJBQ1U7QUFDWCxpQkFBS0MsUUFBTCxDQUFjLFdBQWQ7QUFDSDtBQUhJO0FBOUJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaW5rIH0gZnJvbSAnLi4vbWl4aW5zL2xpbmsnO1xuaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogW1xuICAgICAgICAnbnVtLWNsYXNzJyxcbiAgICAgICAgJ2Rlc2MtY2xhc3MnLFxuICAgICAgICAndGh1bWItY2xhc3MnLFxuICAgICAgICAndGl0bGUtY2xhc3MnLFxuICAgICAgICAncHJpY2UtY2xhc3MnLFxuICAgICAgICAnb3JpZ2luLXByaWNlLWNsYXNzJyxcbiAgICBdLFxuICAgIG1peGluczogW2xpbmtdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRhZzogU3RyaW5nLFxuICAgICAgICBudW06IFN0cmluZyxcbiAgICAgICAgZGVzYzogU3RyaW5nLFxuICAgICAgICB0aHVtYjogU3RyaW5nLFxuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBwcmljZTogU3RyaW5nLFxuICAgICAgICBjZW50ZXJlZDogQm9vbGVhbixcbiAgICAgICAgbGF6eUxvYWQ6IEJvb2xlYW4sXG4gICAgICAgIHRodW1iTGluazogU3RyaW5nLFxuICAgICAgICBvcmlnaW5QcmljZTogU3RyaW5nLFxuICAgICAgICB0aHVtYk1vZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnYXNwZWN0Rml0J1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICfCpSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrVGh1bWIoKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBMaW5rKCd0aHVtYkxpbmsnKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19