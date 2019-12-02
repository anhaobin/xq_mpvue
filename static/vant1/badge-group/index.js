'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'badge',
        type: 'descendant',
        linked: function linked(target) {
            this.badges.push(target);
            this.setActive(this.data.active);
        },
        unlinked: function unlinked(target) {
            this.badges = this.badges.filter(function (item) {
                return item !== target;
            });
            this.setActive(this.data.active);
        }
    },
    props: {
        active: {
            type: Number,
            value: 0,
            observer: 'setActive'
        }
    },
    beforeCreate: function beforeCreate() {
        this.badges = [];
        this.currentActive = -1;
    },

    methods: {
        setActive: function setActive(active) {
            var badges = this.badges,
                currentActive = this.currentActive;

            if (!badges.length) {
                return Promise.resolve();
            }
            this.currentActive = active;
            var stack = [];
            if (currentActive !== active && badges[currentActive]) {
                stack.push(badges[currentActive].setActive(false));
            }
            if (badges[active]) {
                stack.push(badges[active].setActive(true));
            }
            return Promise.all(stack);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJiYWRnZXMiLCJwdXNoIiwic2V0QWN0aXZlIiwiZGF0YSIsImFjdGl2ZSIsInVubGlua2VkIiwiZmlsdGVyIiwiaXRlbSIsInByb3BzIiwiTnVtYmVyIiwidmFsdWUiLCJvYnNlcnZlciIsImJlZm9yZUNyZWF0ZSIsImN1cnJlbnRBY3RpdmUiLCJtZXRob2RzIiwibGVuZ3RoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdGFjayIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxjQUFVO0FBQ05DLGNBQU0sT0FEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsaUJBQUtDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkYsTUFBakI7QUFDQSxpQkFBS0csU0FBTCxDQUFlLEtBQUtDLElBQUwsQ0FBVUMsTUFBekI7QUFDSCxTQU5LO0FBT05DLGdCQVBNLG9CQU9HTixNQVBILEVBT1c7QUFDYixpQkFBS0MsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWU0sTUFBWixDQUFtQjtBQUFBLHVCQUFRQyxTQUFTUixNQUFqQjtBQUFBLGFBQW5CLENBQWQ7QUFDQSxpQkFBS0csU0FBTCxDQUFlLEtBQUtDLElBQUwsQ0FBVUMsTUFBekI7QUFDSDtBQVZLLEtBREE7QUFhVkksV0FBTztBQUNISixnQkFBUTtBQUNKUCxrQkFBTVksTUFERjtBQUVKQyxtQkFBTyxDQUZIO0FBR0pDLHNCQUFVO0FBSE47QUFETCxLQWJHO0FBb0JWQyxnQkFwQlUsMEJBb0JLO0FBQ1gsYUFBS1osTUFBTCxHQUFjLEVBQWQ7QUFDQSxhQUFLYSxhQUFMLEdBQXFCLENBQUMsQ0FBdEI7QUFDSCxLQXZCUzs7QUF3QlZDLGFBQVM7QUFDTFosaUJBREsscUJBQ0tFLE1BREwsRUFDYTtBQUFBLGdCQUNOSixNQURNLEdBQ29CLElBRHBCLENBQ05BLE1BRE07QUFBQSxnQkFDRWEsYUFERixHQUNvQixJQURwQixDQUNFQSxhQURGOztBQUVkLGdCQUFJLENBQUNiLE9BQU9lLE1BQVosRUFBb0I7QUFDaEIsdUJBQU9DLFFBQVFDLE9BQVIsRUFBUDtBQUNIO0FBQ0QsaUJBQUtKLGFBQUwsR0FBcUJULE1BQXJCO0FBQ0EsZ0JBQU1jLFFBQVEsRUFBZDtBQUNBLGdCQUFJTCxrQkFBa0JULE1BQWxCLElBQTRCSixPQUFPYSxhQUFQLENBQWhDLEVBQXVEO0FBQ25ESyxzQkFBTWpCLElBQU4sQ0FBV0QsT0FBT2EsYUFBUCxFQUFzQlgsU0FBdEIsQ0FBZ0MsS0FBaEMsQ0FBWDtBQUNIO0FBQ0QsZ0JBQUlGLE9BQU9JLE1BQVAsQ0FBSixFQUFvQjtBQUNoQmMsc0JBQU1qQixJQUFOLENBQVdELE9BQU9JLE1BQVAsRUFBZUYsU0FBZixDQUF5QixJQUF6QixDQUFYO0FBQ0g7QUFDRCxtQkFBT2MsUUFBUUcsR0FBUixDQUFZRCxLQUFaLENBQVA7QUFDSDtBQWZJO0FBeEJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAnYmFkZ2UnLFxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFkZ2VzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuZGF0YS5hY3RpdmUpO1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFkZ2VzID0gdGhpcy5iYWRnZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuZGF0YS5hY3RpdmUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRBY3RpdmUnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5iYWRnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlID0gLTE7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEFjdGl2ZShhY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYmFkZ2VzLCBjdXJyZW50QWN0aXZlIH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCFiYWRnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aXZlICE9PSBhY3RpdmUgJiYgYmFkZ2VzW2N1cnJlbnRBY3RpdmVdKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChiYWRnZXNbY3VycmVudEFjdGl2ZV0uc2V0QWN0aXZlKGZhbHNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFkZ2VzW2FjdGl2ZV0pIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGJhZGdlc1thY3RpdmVdLnNldEFjdGl2ZSh0cnVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=