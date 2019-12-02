'use strict';

var _component = require('./../common/component.js');

var _safeArea = require('./../mixins/safe-area.js');

(0, _component.VantComponent)({
    mixins: [(0, _safeArea.safeArea)()],
    classes: ['bar-class', 'price-class', 'button-class'],
    props: {
        tip: {
            type: null,
            observer: 'updateTip'
        },
        tipIcon: String,
        type: Number,
        price: {
            type: null,
            observer: 'updatePrice'
        },
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: '¥'
        },
        buttonType: {
            type: String,
            value: 'danger'
        },
        decimalLength: {
            type: Number,
            value: 2,
            observer: 'updatePrice'
        },
        suffixLabel: String
    },
    methods: {
        updatePrice: function updatePrice() {
            var _data = this.data,
                price = _data.price,
                decimalLength = _data.decimalLength;

            this.set({
                hasPrice: typeof price === 'number',
                priceStr: (price / 100).toFixed(decimalLength)
            });
        },
        updateTip: function updateTip() {
            this.set({ hasTip: typeof this.data.tip === 'string' });
        },
        onSubmit: function onSubmit(event) {
            this.$emit('submit', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImNsYXNzZXMiLCJwcm9wcyIsInRpcCIsInR5cGUiLCJvYnNlcnZlciIsInRpcEljb24iLCJTdHJpbmciLCJOdW1iZXIiLCJwcmljZSIsImxhYmVsIiwibG9hZGluZyIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImJ1dHRvblRleHQiLCJjdXJyZW5jeSIsInZhbHVlIiwiYnV0dG9uVHlwZSIsImRlY2ltYWxMZW5ndGgiLCJzdWZmaXhMYWJlbCIsIm1ldGhvZHMiLCJ1cGRhdGVQcmljZSIsImRhdGEiLCJzZXQiLCJoYXNQcmljZSIsInByaWNlU3RyIiwidG9GaXhlZCIsInVwZGF0ZVRpcCIsImhhc1RpcCIsIm9uU3VibWl0IiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxZQUFRLENBQUMseUJBQUQsQ0FERTtBQUVWQyxhQUFTLENBQ0wsV0FESyxFQUVMLGFBRkssRUFHTCxjQUhLLENBRkM7QUFPVkMsV0FBTztBQUNIQyxhQUFLO0FBQ0RDLGtCQUFNLElBREw7QUFFREMsc0JBQVU7QUFGVCxTQURGO0FBS0hDLGlCQUFTQyxNQUxOO0FBTUhILGNBQU1JLE1BTkg7QUFPSEMsZUFBTztBQUNITCxrQkFBTSxJQURIO0FBRUhDLHNCQUFVO0FBRlAsU0FQSjtBQVdISyxlQUFPSCxNQVhKO0FBWUhJLGlCQUFTQyxPQVpOO0FBYUhDLGtCQUFVRCxPQWJQO0FBY0hFLG9CQUFZUCxNQWRUO0FBZUhRLGtCQUFVO0FBQ05YLGtCQUFNRyxNQURBO0FBRU5TLG1CQUFPO0FBRkQsU0FmUDtBQW1CSEMsb0JBQVk7QUFDUmIsa0JBQU1HLE1BREU7QUFFUlMsbUJBQU87QUFGQyxTQW5CVDtBQXVCSEUsdUJBQWU7QUFDWGQsa0JBQU1JLE1BREs7QUFFWFEsbUJBQU8sQ0FGSTtBQUdYWCxzQkFBVTtBQUhDLFNBdkJaO0FBNEJIYyxxQkFBYVo7QUE1QlYsS0FQRztBQXFDVmEsYUFBUztBQUNMQyxtQkFESyx5QkFDUztBQUFBLHdCQUN1QixLQUFLQyxJQUQ1QjtBQUFBLGdCQUNGYixLQURFLFNBQ0ZBLEtBREU7QUFBQSxnQkFDS1MsYUFETCxTQUNLQSxhQURMOztBQUVWLGlCQUFLSyxHQUFMLENBQVM7QUFDTEMsMEJBQVUsT0FBT2YsS0FBUCxLQUFpQixRQUR0QjtBQUVMZ0IsMEJBQVUsQ0FBQ2hCLFFBQVEsR0FBVCxFQUFjaUIsT0FBZCxDQUFzQlIsYUFBdEI7QUFGTCxhQUFUO0FBSUgsU0FQSTtBQVFMUyxpQkFSSyx1QkFRTztBQUNSLGlCQUFLSixHQUFMLENBQVMsRUFBRUssUUFBUSxPQUFPLEtBQUtOLElBQUwsQ0FBVW5CLEdBQWpCLEtBQXlCLFFBQW5DLEVBQVQ7QUFDSCxTQVZJO0FBV0wwQixnQkFYSyxvQkFXSUMsS0FYSixFQVdXO0FBQ1osaUJBQUtDLEtBQUwsQ0FBVyxRQUFYLEVBQXFCRCxNQUFNRSxNQUEzQjtBQUNIO0FBYkk7QUFyQ0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IHNhZmVBcmVhIH0gZnJvbSAnLi4vbWl4aW5zL3NhZmUtYXJlYSc7XG5WYW50Q29tcG9uZW50KHtcbiAgICBtaXhpbnM6IFtzYWZlQXJlYSgpXSxcbiAgICBjbGFzc2VzOiBbXG4gICAgICAgICdiYXItY2xhc3MnLFxuICAgICAgICAncHJpY2UtY2xhc3MnLFxuICAgICAgICAnYnV0dG9uLWNsYXNzJ1xuICAgIF0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGlwOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVUaXAnXG4gICAgICAgIH0sXG4gICAgICAgIHRpcEljb246IFN0cmluZyxcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlUHJpY2UnXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBidXR0b25UZXh0OiBTdHJpbmcsXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ8KlJ1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25UeXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2RhbmdlcidcbiAgICAgICAgfSxcbiAgICAgICAgZGVjaW1hbExlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDIsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZVByaWNlJ1xuICAgICAgICB9LFxuICAgICAgICBzdWZmaXhMYWJlbDogU3RyaW5nXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZVByaWNlKCkge1xuICAgICAgICAgICAgY29uc3QgeyBwcmljZSwgZGVjaW1hbExlbmd0aCB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIGhhc1ByaWNlOiB0eXBlb2YgcHJpY2UgPT09ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIHByaWNlU3RyOiAocHJpY2UgLyAxMDApLnRvRml4ZWQoZGVjaW1hbExlbmd0aClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUaXAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IGhhc1RpcDogdHlwZW9mIHRoaXMuZGF0YS50aXAgPT09ICdzdHJpbmcnIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0JywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19