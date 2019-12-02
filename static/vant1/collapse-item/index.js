'use strict';

var _component = require('./../common/component.js');

var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 20);
    });
};
(0, _component.VantComponent)({
    classes: ['title-class', 'content-class'],
    relation: {
        name: 'collapse',
        type: 'ancestor',
        linked: function linked(parent) {
            this.parent = parent;
        }
    },
    props: {
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        clickable: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        isLink: {
            type: Boolean,
            value: true
        }
    },
    data: {
        contentHeight: 0,
        expanded: false,
        transition: false
    },
    mounted: function mounted() {
        var _this = this;

        this.updateExpanded().then(nextTick).then(function () {
            var data = { transition: true };
            if (_this.data.expanded) {
                data.contentHeight = 'auto';
            }
            _this.set(data);
        });
    },

    methods: {
        updateExpanded: function updateExpanded() {
            if (!this.parent) {
                return Promise.resolve();
            }
            var _parent$data = this.parent.data,
                value = _parent$data.value,
                accordion = _parent$data.accordion;
            var _parent$children = this.parent.children,
                children = _parent$children === undefined ? [] : _parent$children;
            var name = this.data.name;

            var index = children.indexOf(this);
            var currentName = name == null ? index : name;
            var expanded = accordion ? value === currentName : (value || []).some(function (name) {
                return name === currentName;
            });
            var stack = [];
            if (expanded !== this.data.expanded) {
                stack.push(this.updateStyle(expanded));
            }
            stack.push(this.set({ index: index, expanded: expanded }));
            return Promise.all(stack);
        },
        updateStyle: function updateStyle(expanded) {
            var _this2 = this;

            return this.getRect('.van-collapse-item__content').then(function (rect) {
                return rect.height;
            }).then(function (height) {
                if (expanded) {
                    return _this2.set({
                        contentHeight: height ? height + 'px' : 'auto'
                    });
                }
                return _this2.set({ contentHeight: height + 'px' }).then(nextTick).then(function () {
                    return _this2.set({ contentHeight: 0 });
                });
            });
        },
        onClick: function onClick() {
            if (this.data.disabled) {
                return;
            }
            var _data = this.data,
                name = _data.name,
                expanded = _data.expanded;

            var index = this.parent.children.indexOf(this);
            var currentName = name == null ? index : name;
            this.parent.switch(currentName, !expanded);
        },
        onTransitionEnd: function onTransitionEnd() {
            if (this.data.expanded) {
                this.set({
                    contentHeight: 'auto'
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm5leHRUaWNrIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiY2xhc3NlcyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJwYXJlbnQiLCJwcm9wcyIsInRpdGxlIiwidmFsdWUiLCJpY29uIiwiU3RyaW5nIiwibGFiZWwiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJjbGlja2FibGUiLCJib3JkZXIiLCJpc0xpbmsiLCJkYXRhIiwiY29udGVudEhlaWdodCIsImV4cGFuZGVkIiwidHJhbnNpdGlvbiIsIm1vdW50ZWQiLCJ1cGRhdGVFeHBhbmRlZCIsInRoZW4iLCJzZXQiLCJtZXRob2RzIiwiYWNjb3JkaW9uIiwiY2hpbGRyZW4iLCJpbmRleCIsImluZGV4T2YiLCJjdXJyZW50TmFtZSIsInNvbWUiLCJzdGFjayIsInB1c2giLCJ1cGRhdGVTdHlsZSIsImFsbCIsImdldFJlY3QiLCJyZWN0IiwiaGVpZ2h0Iiwib25DbGljayIsInN3aXRjaCIsIm9uVHJhbnNpdGlvbkVuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxXQUFNLElBQUlDLE9BQUosQ0FBWTtBQUFBLGVBQVdDLFdBQVdDLE9BQVgsRUFBb0IsRUFBcEIsQ0FBWDtBQUFBLEtBQVosQ0FBTjtBQUFBLENBQWpCO0FBQ0EsOEJBQWM7QUFDVkMsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsZUFBaEIsQ0FEQztBQUVWQyxjQUFVO0FBQ05DLGNBQU0sVUFEQTtBQUVOQyxjQUFNLFVBRkE7QUFHTkMsY0FITSxrQkFHQ0MsTUFIRCxFQUdTO0FBQ1gsaUJBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIO0FBTEssS0FGQTtBQVNWQyxXQUFPO0FBQ0hKLGNBQU0sSUFESDtBQUVISyxlQUFPLElBRko7QUFHSEMsZUFBTyxJQUhKO0FBSUhDLGNBQU1DLE1BSkg7QUFLSEMsZUFBT0QsTUFMSjtBQU1IRSxr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QjtBQUFBLGdCQUlFZixJQUpGLFNBSUVBLElBSkY7QUFBQSxnQkFJUWlCLFFBSlIsU0FJUUEsUUFKUjs7QUFLTixnQkFBTVMsUUFBUSxLQUFLdkIsTUFBTCxDQUFZc0IsUUFBWixDQUFxQkUsT0FBckIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBLGdCQUFNQyxjQUFjNUIsUUFBUSxJQUFSLEdBQWUwQixLQUFmLEdBQXVCMUIsSUFBM0M7QUFDQSxpQkFBS0csTUFBTCxDQUFZbUMsTUFBWixDQUFtQlYsV0FBbkIsRUFBZ0MsQ0FBQ1gsUUFBakM7QUFDSCxTQTFDSTtBQTJDTHNCLHVCQTNDSyw2QkEyQ2E7QUFDZCxnQkFBSSxLQUFLeEIsSUFBTCxDQUFVRSxRQUFkLEVBQXdCO0FBQ3BCLHFCQUFLSyxHQUFMLENBQVM7QUFDTE4sbUNBQWU7QUFEVixpQkFBVDtBQUdIO0FBQ0o7QUFqREk7QUExQ0MsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmNvbnN0IG5leHRUaWNrID0gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwKSk7XG5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbJ3RpdGxlLWNsYXNzJywgJ2NvbnRlbnQtY2xhc3MnXSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAnY29sbGFwc2UnLFxuICAgICAgICB0eXBlOiAnYW5jZXN0b3InLFxuICAgICAgICBsaW5rZWQocGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBjbGlja2FibGU6IEJvb2xlYW4sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGlzTGluazoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgY29udGVudEhlaWdodDogMCxcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICB0cmFuc2l0aW9uOiBmYWxzZVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFeHBhbmRlZCgpXG4gICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7IHRyYW5zaXRpb246IHRydWUgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmNvbnRlbnRIZWlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUV4cGFuZGVkKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIGFjY29yZGlvbiB9ID0gdGhpcy5wYXJlbnQuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROYW1lID0gbmFtZSA9PSBudWxsID8gaW5kZXggOiBuYW1lO1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBhY2NvcmRpb25cbiAgICAgICAgICAgICAgICA/IHZhbHVlID09PSBjdXJyZW50TmFtZVxuICAgICAgICAgICAgICAgIDogKHZhbHVlIHx8IFtdKS5zb21lKChuYW1lKSA9PiBuYW1lID09PSBjdXJyZW50TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICAgICAgaWYgKGV4cGFuZGVkICE9PSB0aGlzLmRhdGEuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHRoaXMudXBkYXRlU3R5bGUoZXhwYW5kZWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5zZXQoeyBpbmRleCwgZXhwYW5kZWQgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlU3R5bGUoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlY3QoJy52YW4tY29sbGFwc2UtaXRlbV9fY29udGVudCcpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlY3QpID0+IHJlY3QuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIC50aGVuKChoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQ6IGhlaWdodCA/IGAke2hlaWdodH1weGAgOiAnYXV0bydcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldCh7IGNvbnRlbnRIZWlnaHQ6IGAke2hlaWdodH1weGAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obmV4dFRpY2spXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0KHsgY29udGVudEhlaWdodDogMCB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIGV4cGFuZGVkIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TmFtZSA9IG5hbWUgPT0gbnVsbCA/IGluZGV4IDogbmFtZTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnN3aXRjaChjdXJyZW50TmFtZSwgIWV4cGFuZGVkKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEhlaWdodDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==