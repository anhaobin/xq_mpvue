'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    relation: {
        name: 'row',
        type: 'ancestor'
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: ''
    },
    methods: {
        setGutter: function setGutter(gutter) {
            var padding = gutter / 2 + 'px';
            var style = gutter ? 'padding-left: ' + padding + '; padding-right: ' + padding + ';' : '';
            if (style !== this.data.style) {
                this.set({ style: style });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInNwYW4iLCJOdW1iZXIiLCJvZmZzZXQiLCJkYXRhIiwic3R5bGUiLCJtZXRob2RzIiwic2V0R3V0dGVyIiwiZ3V0dGVyIiwicGFkZGluZyIsInNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxjQUFVO0FBQ05DLGNBQU0sS0FEQTtBQUVOQyxjQUFNO0FBRkEsS0FEQTtBQUtWQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsZ0JBQVFEO0FBRkwsS0FMRztBQVNWRSxVQUFNO0FBQ0ZDLGVBQU87QUFETCxLQVRJO0FBWVZDLGFBQVM7QUFDTEMsaUJBREsscUJBQ0tDLE1BREwsRUFDYTtBQUNkLGdCQUFNQyxVQUFhRCxTQUFTLENBQXRCLE9BQU47QUFDQSxnQkFBTUgsUUFBUUcsNEJBQTBCQyxPQUExQix5QkFBcURBLE9BQXJELFNBQWtFLEVBQWhGO0FBQ0EsZ0JBQUlKLFVBQVUsS0FBS0QsSUFBTCxDQUFVQyxLQUF4QixFQUErQjtBQUMzQixxQkFBS0ssR0FBTCxDQUFTLEVBQUVMLFlBQUYsRUFBVDtBQUNIO0FBQ0o7QUFQSTtBQVpDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAncm93JyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJ1xuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc3BhbjogTnVtYmVyLFxuICAgICAgICBvZmZzZXQ6IE51bWJlclxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBzdHlsZTogJydcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0R3V0dGVyKGd1dHRlcikge1xuICAgICAgICAgICAgY29uc3QgcGFkZGluZyA9IGAke2d1dHRlciAvIDJ9cHhgO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBndXR0ZXIgPyBgcGFkZGluZy1sZWZ0OiAke3BhZGRpbmd9OyBwYWRkaW5nLXJpZ2h0OiAke3BhZGRpbmd9O2AgOiAnJztcbiAgICAgICAgICAgIGlmIChzdHlsZSAhPT0gdGhpcy5kYXRhLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoeyBzdHlsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19