'use strict';

var _component = require('./../common/component.js');

var _safeArea = require('./../mixins/safe-area.js');

(0, _component.VantComponent)({
    mixins: [(0, _safeArea.safeArea)()],
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        customStyle: String,
        overlayStyle: String,
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onSelect: function onSelect(event) {
            var index = event.currentTarget.dataset.index;

            var item = this.data.actions[index];
            if (item && !item.disabled && !item.loading) {
                this.$emit('select', item);
            }
        },
        onCancel: function onCancel() {
            this.$emit('cancel');
        },
        onClose: function onClose() {
            this.$emit('close');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJ0aXRsZSIsIlN0cmluZyIsImNhbmNlbFRleHQiLCJjdXN0b21TdHlsZSIsIm92ZXJsYXlTdHlsZSIsInpJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsImFjdGlvbnMiLCJBcnJheSIsIm92ZXJsYXkiLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwibWV0aG9kcyIsIm9uU2VsZWN0IiwiZXZlbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXRlbSIsImRhdGEiLCJkaXNhYmxlZCIsImxvYWRpbmciLCIkZW1pdCIsIm9uQ2FuY2VsIiwib25DbG9zZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNWQSxZQUFRLENBQUMseUJBQUQsQ0FERTtBQUVWQyxXQUFPO0FBQ0hDLGNBQU1DLE9BREg7QUFFSEMsZUFBT0MsTUFGSjtBQUdIQyxvQkFBWUQsTUFIVDtBQUlIRSxxQkFBYUYsTUFKVjtBQUtIRyxzQkFBY0gsTUFMWDtBQU1ISSxnQkFBUTtBQUNKQyxrQkFBTUMsTUFERjtBQUVKQyxtQkFBTztBQUZILFNBTkw7QUFVSEMsaUJBQVM7QUFDTEgsa0JBQU1JLEtBREQ7QUFFTEYsbUJBQU87QUFGRixTQVZOO0FBY0hHLGlCQUFTO0FBQ0xMLGtCQUFNUCxPQUREO0FBRUxTLG1CQUFPO0FBRkYsU0FkTjtBQWtCSEksNkJBQXFCO0FBQ2pCTixrQkFBTVAsT0FEVztBQUVqQlMsbUJBQU87QUFGVTtBQWxCbEIsS0FGRztBQXlCVkssYUFBUztBQUNMQyxnQkFESyxvQkFDSUMsS0FESixFQUNXO0FBQUEsZ0JBQ0pDLEtBREksR0FDTUQsTUFBTUUsYUFBTixDQUFvQkMsT0FEMUIsQ0FDSkYsS0FESTs7QUFFWixnQkFBTUcsT0FBTyxLQUFLQyxJQUFMLENBQVVYLE9BQVYsQ0FBa0JPLEtBQWxCLENBQWI7QUFDQSxnQkFBSUcsUUFBUSxDQUFDQSxLQUFLRSxRQUFkLElBQTBCLENBQUNGLEtBQUtHLE9BQXBDLEVBQTZDO0FBQ3pDLHFCQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkosSUFBckI7QUFDSDtBQUNKLFNBUEk7QUFRTEssZ0JBUkssc0JBUU07QUFDUCxpQkFBS0QsS0FBTCxDQUFXLFFBQVg7QUFDSCxTQVZJO0FBV0xFLGVBWEsscUJBV0s7QUFDTixpQkFBS0YsS0FBTCxDQUFXLE9BQVg7QUFDSDtBQWJJO0FBekJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBzYWZlQXJlYSB9IGZyb20gJy4uL21peGlucy9zYWZlLWFyZWEnO1xuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbc2FmZUFyZWEoKV0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2hvdzogQm9vbGVhbixcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgY2FuY2VsVGV4dDogU3RyaW5nLFxuICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgICBvdmVybGF5U3R5bGU6IFN0cmluZyxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvblNlbGVjdChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YS5hY3Rpb25zW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChpdGVtICYmICFpdGVtLmRpc2FibGVkICYmICFpdGVtLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25DYW5jZWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbG9zZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==