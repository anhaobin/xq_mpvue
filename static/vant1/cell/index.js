'use strict';

var _link = require('./../mixins/link.js');

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    classes: ['title-class', 'label-class', 'value-class', 'right-icon-class', 'hover-class'],
    mixins: [_link.link],
    props: {
        title: null,
        value: null,
        icon: String,
        size: String,
        label: String,
        center: Boolean,
        isLink: Boolean,
        required: Boolean,
        clickable: Boolean,
        titleWidth: String,
        customStyle: String,
        arrowDirection: String,
        useLabelSlot: Boolean,
        border: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0aXRsZSIsInZhbHVlIiwiaWNvbiIsIlN0cmluZyIsInNpemUiLCJsYWJlbCIsImNlbnRlciIsIkJvb2xlYW4iLCJpc0xpbmsiLCJyZXF1aXJlZCIsImNsaWNrYWJsZSIsInRpdGxlV2lkdGgiLCJjdXN0b21TdHlsZSIsImFycm93RGlyZWN0aW9uIiwidXNlTGFiZWxTbG90IiwiYm9yZGVyIiwidHlwZSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCIsImp1bXBMaW5rIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLGFBQVMsQ0FDTCxhQURLLEVBRUwsYUFGSyxFQUdMLGFBSEssRUFJTCxrQkFKSyxFQUtMLGFBTEssQ0FEQztBQVFWQyxZQUFRLENBQUNDLFVBQUQsQ0FSRTtBQVNWQyxXQUFPO0FBQ0hDLGVBQU8sSUFESjtBQUVIQyxlQUFPLElBRko7QUFHSEMsY0FBTUMsTUFISDtBQUlIQyxjQUFNRCxNQUpIO0FBS0hFLGVBQU9GLE1BTEo7QUFNSEcsZ0JBQVFDLE9BTkw7QUFPSEMsZ0JBQVFELE9BUEw7QUFRSEUsa0JBQVVGLE9BUlA7QUFTSEcsbUJBQVdILE9BVFI7QUFVSEksb0JBQVlSLE1BVlQ7QUFXSFMscUJBQWFULE1BWFY7QUFZSFUsd0JBQWdCVixNQVpiO0FBYUhXLHNCQUFjUCxPQWJYO0FBY0hRLGdCQUFRO0FBQ0pDLGtCQUFNVCxPQURGO0FBRUpOLG1CQUFPO0FBRkg7QUFkTCxLQVRHO0FBNEJWZ0IsYUFBUztBQUNMQyxlQURLLG1CQUNHQyxLQURILEVBQ1U7QUFDWCxpQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELE1BQU1FLE1BQTFCO0FBQ0EsaUJBQUtDLFFBQUw7QUFDSDtBQUpJO0FBNUJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaW5rIH0gZnJvbSAnLi4vbWl4aW5zL2xpbmsnO1xuaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogW1xuICAgICAgICAndGl0bGUtY2xhc3MnLFxuICAgICAgICAnbGFiZWwtY2xhc3MnLFxuICAgICAgICAndmFsdWUtY2xhc3MnLFxuICAgICAgICAncmlnaHQtaWNvbi1jbGFzcycsXG4gICAgICAgICdob3Zlci1jbGFzcydcbiAgICBdLFxuICAgIG1peGluczogW2xpbmtdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgaWNvbjogU3RyaW5nLFxuICAgICAgICBzaXplOiBTdHJpbmcsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICAgIGNlbnRlcjogQm9vbGVhbixcbiAgICAgICAgaXNMaW5rOiBCb29sZWFuLFxuICAgICAgICByZXF1aXJlZDogQm9vbGVhbixcbiAgICAgICAgY2xpY2thYmxlOiBCb29sZWFuLFxuICAgICAgICB0aXRsZVdpZHRoOiBTdHJpbmcsXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIGFycm93RGlyZWN0aW9uOiBTdHJpbmcsXG4gICAgICAgIHVzZUxhYmVsU2xvdDogQm9vbGVhbixcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICB0aGlzLmp1bXBMaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==