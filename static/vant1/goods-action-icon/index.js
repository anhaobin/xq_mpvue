'use strict';

var _component = require('./../common/component.js');

var _link = require('./../mixins/link.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
    classes: ['icon-class', 'text-class'],
    mixins: [_link.link, _button.button, _openType.openType],
    props: {
        text: String,
        info: String,
        icon: String,
        disabled: Boolean,
        loading: Boolean
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwiYnV0dG9uIiwib3BlblR5cGUiLCJwcm9wcyIsInRleHQiLCJTdHJpbmciLCJpbmZvIiwiaWNvbiIsImRpc2FibGVkIiwiQm9vbGVhbiIsImxvYWRpbmciLCJtZXRob2RzIiwib25DbGljayIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxhQUFTLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0FEQztBQUVWQyxZQUFRLENBQUNDLFVBQUQsRUFBT0MsY0FBUCxFQUFlQyxrQkFBZixDQUZFO0FBR1ZDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxjQUFNRCxNQUZIO0FBR0hFLGNBQU1GLE1BSEg7QUFJSEcsa0JBQVVDLE9BSlA7QUFLSEMsaUJBQVNEO0FBTE4sS0FIRztBQVVWRSxhQUFTO0FBQ0xDLGVBREssbUJBQ0dDLEtBREgsRUFDVTtBQUNYLGlCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsTUFBTUUsTUFBMUI7QUFDQSxpQkFBS0MsUUFBTDtBQUNIO0FBSkk7QUFWQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgbGluayB9IGZyb20gJy4uL21peGlucy9saW5rJztcbmltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4uL21peGlucy9idXR0b24nO1xuaW1wb3J0IHsgb3BlblR5cGUgfSBmcm9tICcuLi9taXhpbnMvb3Blbi10eXBlJztcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFsnaWNvbi1jbGFzcycsICd0ZXh0LWNsYXNzJ10sXG4gICAgbWl4aW5zOiBbbGluaywgYnV0dG9uLCBvcGVuVHlwZV0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICBpbmZvOiBTdHJpbmcsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=