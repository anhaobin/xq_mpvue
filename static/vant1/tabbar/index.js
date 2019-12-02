'use strict';

var _component = require('./../common/component.js');

var _safeArea = require('./../mixins/safe-area.js');

(0, _component.VantComponent)({
    mixins: [(0, _safeArea.safeArea)()],
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        linked: function linked(target) {
            this.children.push(target);
            target.parent = this;
            target.updateFromParent();
        },
        unlinked: function unlinked(target) {
            this.children = this.children.filter(function (item) {
                return item !== target;
            });
            this.updateChildren();
        }
    },
    props: {
        active: {
            type: [Number, String],
            observer: 'updateChildren'
        },
        activeColor: {
            type: String,
            observer: 'updateChildren'
        },
        inactiveColor: {
            type: String,
            observer: 'updateChildren'
        },
        fixed: {
            type: Boolean,
            value: true
        },
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },

    methods: {
        updateChildren: function updateChildren() {
            var children = this.children;

            if (!Array.isArray(children) || !children.length) {
                return Promise.resolve();
            }
            return Promise.all(children.map(function (child) {
                return child.updateFromParent();
            }));
        },
        onChange: function onChange(child) {
            var index = this.children.indexOf(child);
            var active = child.data.name || index;
            if (active !== this.data.active) {
                this.$emit('change', active);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsInB1c2giLCJwYXJlbnQiLCJ1cGRhdGVGcm9tUGFyZW50IiwidW5saW5rZWQiLCJmaWx0ZXIiLCJpdGVtIiwidXBkYXRlQ2hpbGRyZW4iLCJwcm9wcyIsImFjdGl2ZSIsIk51bWJlciIsIlN0cmluZyIsIm9ic2VydmVyIiwiYWN0aXZlQ29sb3IiLCJpbmFjdGl2ZUNvbG9yIiwiZml4ZWQiLCJCb29sZWFuIiwidmFsdWUiLCJib3JkZXIiLCJ6SW5kZXgiLCJiZWZvcmVDcmVhdGUiLCJtZXRob2RzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbGwiLCJtYXAiLCJjaGlsZCIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJpbmRleE9mIiwiZGF0YSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLFlBQVEsQ0FBQyx5QkFBRCxDQURFO0FBRVZDLGNBQVU7QUFDTkMsY0FBTSxhQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxjQUhNLGtCQUdDQyxNQUhELEVBR1M7QUFDWCxpQkFBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CRixNQUFuQjtBQUNBQSxtQkFBT0csTUFBUCxHQUFnQixJQUFoQjtBQUNBSCxtQkFBT0ksZ0JBQVA7QUFDSCxTQVBLO0FBUU5DLGdCQVJNLG9CQVFHTCxNQVJILEVBUVc7QUFDYixpQkFBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNLLE1BQWQsQ0FBcUIsVUFBQ0MsSUFBRDtBQUFBLHVCQUFVQSxTQUFTUCxNQUFuQjtBQUFBLGFBQXJCLENBQWhCO0FBQ0EsaUJBQUtRLGNBQUw7QUFDSDtBQVhLLEtBRkE7QUFlVkMsV0FBTztBQUNIQyxnQkFBUTtBQUNKWixrQkFBTSxDQUFDYSxNQUFELEVBQVNDLE1BQVQsQ0FERjtBQUVKQyxzQkFBVTtBQUZOLFNBREw7QUFLSEMscUJBQWE7QUFDVGhCLGtCQUFNYyxNQURHO0FBRVRDLHNCQUFVO0FBRkQsU0FMVjtBQVNIRSx1QkFBZTtBQUNYakIsa0JBQU1jLE1BREs7QUFFWEMsc0JBQVU7QUFGQyxTQVRaO0FBYUhHLGVBQU87QUFDSGxCLGtCQUFNbUIsT0FESDtBQUVIQyxtQkFBTztBQUZKLFNBYko7QUFpQkhDLGdCQUFRO0FBQ0pyQixrQkFBTW1CLE9BREY7QUFFSkMsbUJBQU87QUFGSCxTQWpCTDtBQXFCSEUsZ0JBQVE7QUFDSnRCLGtCQUFNYSxNQURGO0FBRUpPLG1CQUFPO0FBRkg7QUFyQkwsS0FmRztBQXlDVkcsZ0JBekNVLDBCQXlDSztBQUNYLGFBQUtwQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0gsS0EzQ1M7O0FBNENWcUIsYUFBUztBQUNMZCxzQkFESyw0QkFDWTtBQUFBLGdCQUNMUCxRQURLLEdBQ1EsSUFEUixDQUNMQSxRQURLOztBQUViLGdCQUFJLENBQUNzQixNQUFNQyxPQUFOLENBQWN2QixRQUFkLENBQUQsSUFBNEIsQ0FBQ0EsU0FBU3dCLE1BQTFDLEVBQWtEO0FBQzlDLHVCQUFPQyxRQUFRQyxPQUFSLEVBQVA7QUFDSDtBQUNELG1CQUFPRCxRQUFRRSxHQUFSLENBQVkzQixTQUFTNEIsR0FBVCxDQUFhLFVBQUNDLEtBQUQ7QUFBQSx1QkFBV0EsTUFBTTFCLGdCQUFOLEVBQVg7QUFBQSxhQUFiLENBQVosQ0FBUDtBQUNILFNBUEk7QUFRTDJCLGdCQVJLLG9CQVFJRCxLQVJKLEVBUVc7QUFDWixnQkFBTUUsUUFBUSxLQUFLL0IsUUFBTCxDQUFjZ0MsT0FBZCxDQUFzQkgsS0FBdEIsQ0FBZDtBQUNBLGdCQUFNcEIsU0FBU29CLE1BQU1JLElBQU4sQ0FBV3JDLElBQVgsSUFBbUJtQyxLQUFsQztBQUNBLGdCQUFJdEIsV0FBVyxLQUFLd0IsSUFBTCxDQUFVeEIsTUFBekIsRUFBaUM7QUFDN0IscUJBQUt5QixLQUFMLENBQVcsUUFBWCxFQUFxQnpCLE1BQXJCO0FBQ0g7QUFDSjtBQWRJO0FBNUNDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBzYWZlQXJlYSB9IGZyb20gJy4uL21peGlucy9zYWZlLWFyZWEnO1xuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbc2FmZUFyZWEoKV0sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3RhYmJhci1pdGVtJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICAgICAgdGFyZ2V0LnVwZGF0ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5saW5rZWQodGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZUNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9LFxuICAgICAgICBpbmFjdGl2ZUNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9LFxuICAgICAgICBmaXhlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuKCkge1xuICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbikgfHwgIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChjaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC51cGRhdGVGcm9tUGFyZW50KCkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2UoY2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGNoaWxkLmRhdGEubmFtZSB8fCBpbmRleDtcbiAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IHRoaXMuZGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBhY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=