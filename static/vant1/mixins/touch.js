'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var touch = exports.touch = Behavior({
    methods: {
        touchStart: function touchStart(event) {
            var touch = event.touches[0];
            this.direction = '';
            this.deltaX = 0;
            this.deltaY = 0;
            this.offsetX = 0;
            this.offsetY = 0;
            this.startX = touch.clientX;
            this.startY = touch.clientY;
        },
        touchMove: function touchMove(event) {
            var touch = event.touches[0];
            this.deltaX = touch.clientX - this.startX;
            this.deltaY = touch.clientY - this.startY;
            this.offsetX = Math.abs(this.deltaX);
            this.offsetY = Math.abs(this.deltaY);
            this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdWNoLmpzIl0sIm5hbWVzIjpbInRvdWNoIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwidG91Y2hTdGFydCIsImV2ZW50IiwidG91Y2hlcyIsImRpcmVjdGlvbiIsImRlbHRhWCIsImRlbHRhWSIsIm9mZnNldFgiLCJvZmZzZXRZIiwic3RhcnRYIiwiY2xpZW50WCIsInN0YXJ0WSIsImNsaWVudFkiLCJ0b3VjaE1vdmUiLCJNYXRoIiwiYWJzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLHdCQUFRQyxTQUFTO0FBQzFCQyxhQUFTO0FBQ0xDLGtCQURLLHNCQUNNQyxLQUROLEVBQ2E7QUFDZCxnQkFBTUosUUFBUUksTUFBTUMsT0FBTixDQUFjLENBQWQsQ0FBZDtBQUNBLGlCQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsaUJBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsaUJBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsaUJBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsaUJBQUtDLE1BQUwsR0FBY1gsTUFBTVksT0FBcEI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjYixNQUFNYyxPQUFwQjtBQUNILFNBVkk7QUFXTEMsaUJBWEsscUJBV0tYLEtBWEwsRUFXWTtBQUNiLGdCQUFNSixRQUFRSSxNQUFNQyxPQUFOLENBQWMsQ0FBZCxDQUFkO0FBQ0EsaUJBQUtFLE1BQUwsR0FBY1AsTUFBTVksT0FBTixHQUFnQixLQUFLRCxNQUFuQztBQUNBLGlCQUFLSCxNQUFMLEdBQWNSLE1BQU1jLE9BQU4sR0FBZ0IsS0FBS0QsTUFBbkM7QUFDQSxpQkFBS0osT0FBTCxHQUFlTyxLQUFLQyxHQUFMLENBQVMsS0FBS1YsTUFBZCxDQUFmO0FBQ0EsaUJBQUtHLE9BQUwsR0FBZU0sS0FBS0MsR0FBTCxDQUFTLEtBQUtULE1BQWQsQ0FBZjtBQUNBLGlCQUFLRixTQUFMLEdBQ0ksS0FBS0csT0FBTCxHQUFlLEtBQUtDLE9BQXBCLEdBQ00sWUFETixHQUVNLEtBQUtELE9BQUwsR0FBZSxLQUFLQyxPQUFwQixHQUNJLFVBREosR0FFSSxFQUxkO0FBTUg7QUF2Qkk7QUFEaUIsQ0FBVCxDQUFkIiwiZmlsZSI6InRvdWNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRvdWNoID0gQmVoYXZpb3Ioe1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG91Y2hTdGFydChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnJztcbiAgICAgICAgICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGVsdGFZID0gMDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGFydFggPSB0b3VjaC5jbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5zdGFydFkgPSB0b3VjaC5jbGllbnRZO1xuICAgICAgICB9LFxuICAgICAgICB0b3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgICAgIHRoaXMuZGVsdGFYID0gdG91Y2guY2xpZW50WCAtIHRoaXMuc3RhcnRYO1xuICAgICAgICAgICAgdGhpcy5kZWx0YVkgPSB0b3VjaC5jbGllbnRZIC0gdGhpcy5zdGFydFk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFggPSBNYXRoLmFicyh0aGlzLmRlbHRhWCk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFkgPSBNYXRoLmFicyh0aGlzLmRlbHRhWSk7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9XG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRYID4gdGhpcy5vZmZzZXRZXG4gICAgICAgICAgICAgICAgICAgID8gJ2hvcml6b250YWwnXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5vZmZzZXRYIDwgdGhpcy5vZmZzZXRZXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==