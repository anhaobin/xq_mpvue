'use strict';

var _component = require('./../common/component.js');

var ITEM_HEIGHT = 44;
(0, _component.VantComponent)({
    classes: ['main-item-class', 'content-item-class', 'main-active-class', 'content-active-class', 'main-disabled-class', 'content-disabled-class'],
    props: {
        items: Array,
        mainActiveIndex: {
            type: Number,
            value: 0
        },
        activeId: {
            type: [Number, String, Array]
        },
        maxHeight: {
            type: Number,
            value: 300
        }
    },
    data: {
        subItems: [],
        mainHeight: 0,
        itemHeight: 0
    },
    watch: {
        items: function items() {
            var _this = this;

            this.updateSubItems().then(function () {
                _this.updateMainHeight();
            });
        },
        maxHeight: function maxHeight() {
            this.updateItemHeight(this.data.subItems);
            this.updateMainHeight();
        },

        mainActiveIndex: 'updateSubItems'
    },
    methods: {
        // 当一个子项被选择时
        onSelectItem: function onSelectItem(event) {
            var item = event.currentTarget.dataset.item;

            if (!item.disabled) {
                this.$emit('click-item', item);
            }
        },

        // 当一个导航被点击时
        onClickNav: function onClickNav(event) {
            var index = event.currentTarget.dataset.index;

            var item = this.data.items[index];
            if (!item.disabled) {
                this.$emit('click-nav', { index: index });
            }
        },

        // 更新子项列表
        updateSubItems: function updateSubItems() {
            var _data = this.data,
                items = _data.items,
                mainActiveIndex = _data.mainActiveIndex;

            var _ref = items[mainActiveIndex] || {},
                _ref$children = _ref.children,
                children = _ref$children === undefined ? [] : _ref$children;

            this.updateItemHeight(children);
            return this.set({ subItems: children });
        },

        // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
        updateMainHeight: function updateMainHeight() {
            var _data2 = this.data,
                _data2$items = _data2.items,
                items = _data2$items === undefined ? [] : _data2$items,
                _data2$subItems = _data2.subItems,
                subItems = _data2$subItems === undefined ? [] : _data2$subItems;

            var maxHeight = Math.max(items.length * ITEM_HEIGHT, subItems.length * ITEM_HEIGHT);
            this.set({ mainHeight: Math.min(maxHeight, this.data.maxHeight) });
        },

        // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
        updateItemHeight: function updateItemHeight(subItems) {
            var itemHeight = Math.min(subItems.length * ITEM_HEIGHT, this.data.maxHeight);
            return this.set({ itemHeight: itemHeight });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIklURU1fSEVJR0hUIiwiY2xhc3NlcyIsInByb3BzIiwiaXRlbXMiLCJBcnJheSIsIm1haW5BY3RpdmVJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsImFjdGl2ZUlkIiwiU3RyaW5nIiwibWF4SGVpZ2h0IiwiZGF0YSIsInN1Ykl0ZW1zIiwibWFpbkhlaWdodCIsIml0ZW1IZWlnaHQiLCJ3YXRjaCIsInVwZGF0ZVN1Ykl0ZW1zIiwidGhlbiIsInVwZGF0ZU1haW5IZWlnaHQiLCJ1cGRhdGVJdGVtSGVpZ2h0IiwibWV0aG9kcyIsIm9uU2VsZWN0SXRlbSIsImV2ZW50IiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCIkZW1pdCIsIm9uQ2xpY2tOYXYiLCJpbmRleCIsImNoaWxkcmVuIiwic2V0IiwiTWF0aCIsIm1heCIsImxlbmd0aCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSxJQUFNQSxjQUFjLEVBQXBCO0FBQ0EsOEJBQWM7QUFDVkMsYUFBUyxDQUNMLGlCQURLLEVBRUwsb0JBRkssRUFHTCxtQkFISyxFQUlMLHNCQUpLLEVBS0wscUJBTEssRUFNTCx3QkFOSyxDQURDO0FBU1ZDLFdBQU87QUFDSEMsZUFBT0MsS0FESjtBQUVIQyx5QkFBaUI7QUFDYkMsa0JBQU1DLE1BRE87QUFFYkMsbUJBQU87QUFGTSxTQUZkO0FBTUhDLGtCQUFVO0FBQ05ILGtCQUFNLENBQUNDLE1BQUQsRUFBU0csTUFBVCxFQUFpQk4sS0FBakI7QUFEQSxTQU5QO0FBU0hPLG1CQUFXO0FBQ1BMLGtCQUFNQyxNQURDO0FBRVBDLG1CQUFPO0FBRkE7QUFUUixLQVRHO0FBdUJWSSxVQUFNO0FBQ0ZDLGtCQUFVLEVBRFI7QUFFRkMsb0JBQVksQ0FGVjtBQUdGQyxvQkFBWTtBQUhWLEtBdkJJO0FBNEJWQyxXQUFPO0FBQ0hiLGFBREcsbUJBQ0s7QUFBQTs7QUFDSixpQkFBS2MsY0FBTCxHQUFzQkMsSUFBdEIsQ0FBMkIsWUFBTTtBQUM3QixzQkFBS0MsZ0JBQUw7QUFDSCxhQUZEO0FBR0gsU0FMRTtBQU1IUixpQkFORyx1QkFNUztBQUNSLGlCQUFLUyxnQkFBTCxDQUFzQixLQUFLUixJQUFMLENBQVVDLFFBQWhDO0FBQ0EsaUJBQUtNLGdCQUFMO0FBQ0gsU0FURTs7QUFVSGQseUJBQWlCO0FBVmQsS0E1Qkc7QUF3Q1ZnQixhQUFTO0FBQ0w7QUFDQUMsb0JBRkssd0JBRVFDLEtBRlIsRUFFZTtBQUFBLGdCQUNSQyxJQURRLEdBQ0NELE1BQU1FLGFBQU4sQ0FBb0JDLE9BRHJCLENBQ1JGLElBRFE7O0FBRWhCLGdCQUFJLENBQUNBLEtBQUtHLFFBQVYsRUFBb0I7QUFDaEIscUJBQUtDLEtBQUwsQ0FBVyxZQUFYLEVBQXlCSixJQUF6QjtBQUNIO0FBQ0osU0FQSTs7QUFRTDtBQUNBSyxrQkFUSyxzQkFTTU4sS0FUTixFQVNhO0FBQUEsZ0JBQ05PLEtBRE0sR0FDSVAsTUFBTUUsYUFBTixDQUFvQkMsT0FEeEIsQ0FDTkksS0FETTs7QUFFZCxnQkFBTU4sT0FBTyxLQUFLWixJQUFMLENBQVVULEtBQVYsQ0FBZ0IyQixLQUFoQixDQUFiO0FBQ0EsZ0JBQUksQ0FBQ04sS0FBS0csUUFBVixFQUFvQjtBQUNoQixxQkFBS0MsS0FBTCxDQUFXLFdBQVgsRUFBd0IsRUFBRUUsWUFBRixFQUF4QjtBQUNIO0FBQ0osU0FmSTs7QUFnQkw7QUFDQWIsc0JBakJLLDRCQWlCWTtBQUFBLHdCQUNzQixLQUFLTCxJQUQzQjtBQUFBLGdCQUNMVCxLQURLLFNBQ0xBLEtBREs7QUFBQSxnQkFDRUUsZUFERixTQUNFQSxlQURGOztBQUFBLHVCQUVhRixNQUFNRSxlQUFOLEtBQTBCLEVBRnZDO0FBQUEscUNBRUwwQixRQUZLO0FBQUEsZ0JBRUxBLFFBRkssaUNBRU0sRUFGTjs7QUFHYixpQkFBS1gsZ0JBQUwsQ0FBc0JXLFFBQXRCO0FBQ0EsbUJBQU8sS0FBS0MsR0FBTCxDQUFTLEVBQUVuQixVQUFVa0IsUUFBWixFQUFULENBQVA7QUFDSCxTQXRCSTs7QUF1Qkw7QUFDQVosd0JBeEJLLDhCQXdCYztBQUFBLHlCQUN1QixLQUFLUCxJQUQ1QjtBQUFBLHNDQUNQVCxLQURPO0FBQUEsZ0JBQ1BBLEtBRE8sZ0NBQ0MsRUFERDtBQUFBLHlDQUNLVSxRQURMO0FBQUEsZ0JBQ0tBLFFBREwsbUNBQ2dCLEVBRGhCOztBQUVmLGdCQUFNRixZQUFZc0IsS0FBS0MsR0FBTCxDQUFTL0IsTUFBTWdDLE1BQU4sR0FBZW5DLFdBQXhCLEVBQXFDYSxTQUFTc0IsTUFBVCxHQUFrQm5DLFdBQXZELENBQWxCO0FBQ0EsaUJBQUtnQyxHQUFMLENBQVMsRUFBRWxCLFlBQVltQixLQUFLRyxHQUFMLENBQVN6QixTQUFULEVBQW9CLEtBQUtDLElBQUwsQ0FBVUQsU0FBOUIsQ0FBZCxFQUFUO0FBQ0gsU0E1Qkk7O0FBNkJMO0FBQ0FTLHdCQTlCSyw0QkE4QllQLFFBOUJaLEVBOEJzQjtBQUN2QixnQkFBTUUsYUFBYWtCLEtBQUtHLEdBQUwsQ0FBU3ZCLFNBQVNzQixNQUFULEdBQWtCbkMsV0FBM0IsRUFBd0MsS0FBS1ksSUFBTCxDQUFVRCxTQUFsRCxDQUFuQjtBQUNBLG1CQUFPLEtBQUtxQixHQUFMLENBQVMsRUFBRWpCLHNCQUFGLEVBQVQsQ0FBUDtBQUNIO0FBakNJO0FBeENDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5jb25zdCBJVEVNX0hFSUdIVCA9IDQ0O1xuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogW1xuICAgICAgICAnbWFpbi1pdGVtLWNsYXNzJyxcbiAgICAgICAgJ2NvbnRlbnQtaXRlbS1jbGFzcycsXG4gICAgICAgICdtYWluLWFjdGl2ZS1jbGFzcycsXG4gICAgICAgICdjb250ZW50LWFjdGl2ZS1jbGFzcycsXG4gICAgICAgICdtYWluLWRpc2FibGVkLWNsYXNzJyxcbiAgICAgICAgJ2NvbnRlbnQtZGlzYWJsZWQtY2xhc3MnXG4gICAgXSxcbiAgICBwcm9wczoge1xuICAgICAgICBpdGVtczogQXJyYXksXG4gICAgICAgIG1haW5BY3RpdmVJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlSWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZywgQXJyYXldXG4gICAgICAgIH0sXG4gICAgICAgIG1heEhlaWdodDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDMwMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHN1Ykl0ZW1zOiBbXSxcbiAgICAgICAgbWFpbkhlaWdodDogMCxcbiAgICAgICAgaXRlbUhlaWdodDogMFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgaXRlbXMoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN1Ykl0ZW1zKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYWluSGVpZ2h0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWF4SGVpZ2h0KCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtSGVpZ2h0KHRoaXMuZGF0YS5zdWJJdGVtcyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1haW5IZWlnaHQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWFpbkFjdGl2ZUluZGV4OiAndXBkYXRlU3ViSXRlbXMnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vIOW9k+S4gOS4quWtkOmhueiiq+mAieaLqeaXtlxuICAgICAgICBvblNlbGVjdEl0ZW0oZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaXRlbSB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2staXRlbScsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyDlvZPkuIDkuKrlr7zoiKrooqvngrnlh7vml7ZcbiAgICAgICAgb25DbGlja05hdihldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YS5pdGVtc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1uYXYnLCB7IGluZGV4IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyDmm7TmlrDlrZDpobnliJfooahcbiAgICAgICAgdXBkYXRlU3ViSXRlbXMoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGl0ZW1zLCBtYWluQWN0aXZlSW5kZXggfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gaXRlbXNbbWFpbkFjdGl2ZUluZGV4XSB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbUhlaWdodChjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoeyBzdWJJdGVtczogY2hpbGRyZW4gfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOabtOaWsOe7hOS7tuaVtOS9k+mrmOW6pu+8jOagueaNruacgOWkp+mrmOW6puWSjOW9k+WJjee7hOS7tumcgOimgeWxleekuueahOmrmOW6puadpeWGs+WumlxuICAgICAgICB1cGRhdGVNYWluSGVpZ2h0KCkge1xuICAgICAgICAgICAgY29uc3QgeyBpdGVtcyA9IFtdLCBzdWJJdGVtcyA9IFtdIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heChpdGVtcy5sZW5ndGggKiBJVEVNX0hFSUdIVCwgc3ViSXRlbXMubGVuZ3RoICogSVRFTV9IRUlHSFQpO1xuICAgICAgICAgICAgdGhpcy5zZXQoeyBtYWluSGVpZ2h0OiBNYXRoLm1pbihtYXhIZWlnaHQsIHRoaXMuZGF0YS5tYXhIZWlnaHQpIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyDmm7TmlrDlrZDpobnliJfooajpq5jluqbvvIzmoLnmja7lj6/lsZXnpLrnmoTmnIDlpKfpq5jluqblkozlvZPliY3lrZDpobnliJfooajnmoTpq5jluqblhrPlrppcbiAgICAgICAgdXBkYXRlSXRlbUhlaWdodChzdWJJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IE1hdGgubWluKHN1Ykl0ZW1zLmxlbmd0aCAqIElURU1fSEVJR0hULCB0aGlzLmRhdGEubWF4SGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldCh7IGl0ZW1IZWlnaHQgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==