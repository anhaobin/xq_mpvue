'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    classes: ['icon-class'],
    props: {
        value: Number,
        readonly: Boolean,
        disabled: Boolean,
        allowHalf: Boolean,
        size: {
            type: Number,
            value: 20
        },
        icon: {
            type: String,
            value: 'star'
        },
        voidIcon: {
            type: String,
            value: 'star-o'
        },
        color: {
            type: String,
            value: '#ffd21e'
        },
        voidColor: {
            type: String,
            value: '#c7c7c7'
        },
        disabledColor: {
            type: String,
            value: '#bdbdbd'
        },
        count: {
            type: Number,
            value: 5
        }
    },
    data: {
        innerValue: 0
    },
    watch: {
        value: function value(_value) {
            if (_value !== this.data.innerValue) {
                this.set({ innerValue: _value });
            }
        }
    },
    methods: {
        onSelect: function onSelect(event) {
            var data = this.data;
            var score = event.currentTarget.dataset.score;

            if (!data.disabled && !data.readonly) {
                this.set({ innerValue: score + 1 });
                this.$emit('input', score + 1);
                this.$emit('change', score + 1);
            }
        },
        onTouchMove: function onTouchMove(event) {
            var _this = this;

            var _event$touches$ = event.touches[0],
                clientX = _event$touches$.clientX,
                clientY = _event$touches$.clientY;

            this.getRect('.van-rate__icon', true).then(function (list) {
                var target = list.sort(function (item) {
                    return item.right - item.left;
                }).find(function (item) {
                    return clientX >= item.left && clientX <= item.right && clientY >= item.top && clientY <= item.bottom;
                });
                if (target != null) {
                    _this.onSelect(Object.assign({}, event, { currentTarget: target }));
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwidmFsdWUiLCJOdW1iZXIiLCJyZWFkb25seSIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImFsbG93SGFsZiIsInNpemUiLCJ0eXBlIiwiaWNvbiIsIlN0cmluZyIsInZvaWRJY29uIiwiY29sb3IiLCJ2b2lkQ29sb3IiLCJkaXNhYmxlZENvbG9yIiwiY291bnQiLCJkYXRhIiwiaW5uZXJWYWx1ZSIsIndhdGNoIiwic2V0IiwibWV0aG9kcyIsIm9uU2VsZWN0IiwiZXZlbnQiLCJzY29yZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiJGVtaXQiLCJvblRvdWNoTW92ZSIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImdldFJlY3QiLCJ0aGVuIiwibGlzdCIsInRhcmdldCIsInNvcnQiLCJpdGVtIiwicmlnaHQiLCJsZWZ0IiwiZmluZCIsInRvcCIsImJvdHRvbSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPLElBREc7QUFFVkMsYUFBUyxDQUFDLFlBQUQsQ0FGQztBQUdWQyxXQUFPO0FBQ0hDLGVBQU9DLE1BREo7QUFFSEMsa0JBQVVDLE9BRlA7QUFHSEMsa0JBQVVELE9BSFA7QUFJSEUsbUJBQVdGLE9BSlI7QUFLSEcsY0FBTTtBQUNGQyxrQkFBTU4sTUFESjtBQUVGRCxtQkFBTztBQUZMLFNBTEg7QUFTSFEsY0FBTTtBQUNGRCxrQkFBTUUsTUFESjtBQUVGVCxtQkFBTztBQUZMLFNBVEg7QUFhSFUsa0JBQVU7QUFDTkgsa0JBQU1FLE1BREE7QUFFTlQsbUJBQU87QUFGRCxTQWJQO0FBaUJIVyxlQUFPO0FBQ0hKLGtCQUFNRSxNQURIO0FBRUhULG1CQUFPO0FBRkosU0FqQko7QUFxQkhZLG1CQUFXO0FBQ1BMLGtCQUFNRSxNQURDO0FBRVBULG1CQUFPO0FBRkEsU0FyQlI7QUF5QkhhLHVCQUFlO0FBQ1hOLGtCQUFNRSxNQURLO0FBRVhULG1CQUFPO0FBRkksU0F6Qlo7QUE2QkhjLGVBQU87QUFDSFAsa0JBQU1OLE1BREg7QUFFSEQsbUJBQU87QUFGSjtBQTdCSixLQUhHO0FBcUNWZSxVQUFNO0FBQ0ZDLG9CQUFZO0FBRFYsS0FyQ0k7QUF3Q1ZDLFdBQU87QUFDSGpCLGFBREcsaUJBQ0dBLE1BREgsRUFDVTtBQUNULGdCQUFJQSxXQUFVLEtBQUtlLElBQUwsQ0FBVUMsVUFBeEIsRUFBb0M7QUFDaEMscUJBQUtFLEdBQUwsQ0FBUyxFQUFFRixZQUFZaEIsTUFBZCxFQUFUO0FBQ0g7QUFDSjtBQUxFLEtBeENHO0FBK0NWbUIsYUFBUztBQUNMQyxnQkFESyxvQkFDSUMsS0FESixFQUNXO0FBQUEsZ0JBQ0pOLElBREksR0FDSyxJQURMLENBQ0pBLElBREk7QUFBQSxnQkFFSk8sS0FGSSxHQUVNRCxNQUFNRSxhQUFOLENBQW9CQyxPQUYxQixDQUVKRixLQUZJOztBQUdaLGdCQUFJLENBQUNQLEtBQUtYLFFBQU4sSUFBa0IsQ0FBQ1csS0FBS2IsUUFBNUIsRUFBc0M7QUFDbEMscUJBQUtnQixHQUFMLENBQVMsRUFBRUYsWUFBWU0sUUFBUSxDQUF0QixFQUFUO0FBQ0EscUJBQUtHLEtBQUwsQ0FBVyxPQUFYLEVBQW9CSCxRQUFRLENBQTVCO0FBQ0EscUJBQUtHLEtBQUwsQ0FBVyxRQUFYLEVBQXFCSCxRQUFRLENBQTdCO0FBQ0g7QUFDSixTQVRJO0FBVUxJLG1CQVZLLHVCQVVPTCxLQVZQLEVBVWM7QUFBQTs7QUFBQSxrQ0FDY0EsTUFBTU0sT0FBTixDQUFjLENBQWQsQ0FEZDtBQUFBLGdCQUNQQyxPQURPLG1CQUNQQSxPQURPO0FBQUEsZ0JBQ0VDLE9BREYsbUJBQ0VBLE9BREY7O0FBRWYsaUJBQUtDLE9BQUwsQ0FBYSxpQkFBYixFQUFnQyxJQUFoQyxFQUFzQ0MsSUFBdEMsQ0FBMkMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pELG9CQUFNQyxTQUFTRCxLQUNWRSxJQURVLENBQ0w7QUFBQSwyQkFBUUMsS0FBS0MsS0FBTCxHQUFhRCxLQUFLRSxJQUExQjtBQUFBLGlCQURLLEVBRVZDLElBRlUsQ0FFTDtBQUFBLDJCQUFRVixXQUFXTyxLQUFLRSxJQUFoQixJQUNkVCxXQUFXTyxLQUFLQyxLQURGLElBRWRQLFdBQVdNLEtBQUtJLEdBRkYsSUFHZFYsV0FBV00sS0FBS0ssTUFIVjtBQUFBLGlCQUZLLENBQWY7QUFNQSxvQkFBSVAsVUFBVSxJQUFkLEVBQW9CO0FBQ2hCLDBCQUFLYixRQUFMLENBQWNxQixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQnJCLEtBQWxCLEVBQXlCLEVBQUVFLGVBQWVVLE1BQWpCLEVBQXpCLENBQWQ7QUFDSDtBQUNKLGFBVkQ7QUFXSDtBQXZCSTtBQS9DQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgY2xhc3NlczogWydpY29uLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IE51bWJlcixcbiAgICAgICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBhbGxvd0hhbGY6IEJvb2xlYW4sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAyMFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3N0YXInXG4gICAgICAgIH0sXG4gICAgICAgIHZvaWRJY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3N0YXItbydcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2ZmZDIxZSdcbiAgICAgICAgfSxcbiAgICAgICAgdm9pZENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJyNjN2M3YzcnXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2JkYmRiZCdcbiAgICAgICAgfSxcbiAgICAgICAgY291bnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaW5uZXJWYWx1ZTogMFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5kYXRhLmlubmVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7IGlubmVyVmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uU2VsZWN0KGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCB7IHNjb3JlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICBpZiAoIWRhdGEuZGlzYWJsZWQgJiYgIWRhdGEucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7IGlubmVyVmFsdWU6IHNjb3JlICsgMSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHNjb3JlICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgc2NvcmUgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi1yYXRlX19pY29uJywgdHJ1ZSkudGhlbigobGlzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGxpc3RcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoaXRlbSA9PiBpdGVtLnJpZ2h0IC0gaXRlbS5sZWZ0KVxuICAgICAgICAgICAgICAgICAgICAuZmluZChpdGVtID0+IGNsaWVudFggPj0gaXRlbS5sZWZ0ICYmXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFggPD0gaXRlbS5yaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICBjbGllbnRZID49IGl0ZW0udG9wICYmXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFkgPD0gaXRlbS5ib3R0b20pO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0KE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7IGN1cnJlbnRUYXJnZXQ6IHRhcmdldCB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==