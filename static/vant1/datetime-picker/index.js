'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

var _shared = require('./../picker/shared.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var currentYear = new Date().getFullYear();
function isValidDate(date) {
    return (0, _utils.isDef)(date) && !isNaN(new Date(date).getTime());
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function padZero(val) {
    return ('00' + val).slice(-2);
}
function times(n, iteratee) {
    var index = -1;
    var result = Array(n < 0 ? 0 : n);
    while (++index < n) {
        result[index] = iteratee(index);
    }
    return result;
}
function getTrueValue(formattedValue) {
    if (!formattedValue) return;
    while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
    }
    return parseInt(formattedValue, 10);
}
function getMonthEndDay(year, month) {
    return 32 - new Date(year, month - 1, 32).getDate();
}
var defaultFormatter = function defaultFormatter(_, value) {
    return value;
};
(0, _component.VantComponent)({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: Object.assign({}, _shared.pickerProps, { formatter: {
            type: Function,
            value: defaultFormatter
        }, value: null, type: {
            type: String,
            value: 'datetime'
        }, showToolbar: {
            type: Boolean,
            value: true
        }, minDate: {
            type: Number,
            value: new Date(currentYear - 10, 0, 1).getTime()
        }, maxDate: {
            type: Number,
            value: new Date(currentYear + 10, 11, 31).getTime()
        }, minHour: {
            type: Number,
            value: 0
        }, maxHour: {
            type: Number,
            value: 23
        }, minMinute: {
            type: Number,
            value: 0
        }, maxMinute: {
            type: Number,
            value: 59
        } }),
    data: {
        innerValue: Date.now(),
        columns: []
    },
    watch: {
        value: 'updateValue',
        type: 'updateValue',
        minDate: 'updateValue',
        maxDate: 'updateValue',
        minHour: 'updateValue',
        maxHour: 'updateValue',
        minMinute: 'updateValue',
        maxMinute: 'updateValue'
    },
    methods: {
        updateValue: function updateValue() {
            var _this = this;

            var data = this.data;

            var val = this.correctValue(this.data.value);
            var isEqual = val === data.innerValue;
            if (!isEqual) {
                this.updateColumnValue(val).then(function () {
                    _this.$emit('input', val);
                });
            } else {
                this.updateColumns();
            }
        },
        getPicker: function getPicker() {
            if (this.picker == null) {
                this.picker = this.selectComponent('.van-datetime-picker');
                var picker = this.picker;
                var setColumnValues = picker.setColumnValues;

                picker.setColumnValues = function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return setColumnValues.apply(picker, [].concat(args, [false]));
                };
            }
            return this.picker;
        },
        updateColumns: function updateColumns() {
            var _data$formatter = this.data.formatter,
                formatter = _data$formatter === undefined ? defaultFormatter : _data$formatter;

            var results = this.getRanges().map(function (_ref) {
                var type = _ref.type,
                    range = _ref.range;

                var values = times(range[1] - range[0] + 1, function (index) {
                    var value = range[0] + index;
                    value = type === 'year' ? '' + value : padZero(value);
                    return formatter(type, value);
                });
                return { values: values };
            });
            return this.set({ columns: results });
        },
        getRanges: function getRanges() {
            var data = this.data;

            if (data.type === 'time') {
                return [{
                    type: 'hour',
                    range: [data.minHour, data.maxHour]
                }, {
                    type: 'minute',
                    range: [data.minMinute, data.maxMinute]
                }];
            }

            var _getBoundary = this.getBoundary('max', data.innerValue),
                maxYear = _getBoundary.maxYear,
                maxDate = _getBoundary.maxDate,
                maxMonth = _getBoundary.maxMonth,
                maxHour = _getBoundary.maxHour,
                maxMinute = _getBoundary.maxMinute;

            var _getBoundary2 = this.getBoundary('min', data.innerValue),
                minYear = _getBoundary2.minYear,
                minDate = _getBoundary2.minDate,
                minMonth = _getBoundary2.minMonth,
                minHour = _getBoundary2.minHour,
                minMinute = _getBoundary2.minMinute;

            var result = [{
                type: 'year',
                range: [minYear, maxYear]
            }, {
                type: 'month',
                range: [minMonth, maxMonth]
            }, {
                type: 'day',
                range: [minDate, maxDate]
            }, {
                type: 'hour',
                range: [minHour, maxHour]
            }, {
                type: 'minute',
                range: [minMinute, maxMinute]
            }];
            if (data.type === 'date') result.splice(3, 2);
            if (data.type === 'year-month') result.splice(2, 3);
            return result;
        },
        correctValue: function correctValue(value) {
            var data = this.data;
            // validate value

            var isDateType = data.type !== 'time';
            if (isDateType && !isValidDate(value)) {
                value = data.minDate;
            } else if (!isDateType && !value) {
                var minHour = data.minHour;

                value = padZero(minHour) + ':00';
            }
            // time type
            if (!isDateType) {
                var _value$split = value.split(':'),
                    _value$split2 = _slicedToArray(_value$split, 2),
                    hour = _value$split2[0],
                    minute = _value$split2[1];

                hour = padZero(range(hour, data.minHour, data.maxHour));
                minute = padZero(range(minute, data.minMinute, data.maxMinute));
                return hour + ':' + minute;
            }
            // date type
            value = Math.max(value, data.minDate);
            value = Math.min(value, data.maxDate);
            return value;
        },
        getBoundary: function getBoundary(type, innerValue) {
            var _ref2;

            var value = new Date(innerValue);
            var boundary = new Date(this.data[type + 'Date']);
            var year = boundary.getFullYear();
            var month = 1;
            var date = 1;
            var hour = 0;
            var minute = 0;
            if (type === 'max') {
                month = 12;
                date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
                hour = 23;
                minute = 59;
            }
            if (value.getFullYear() === year) {
                month = boundary.getMonth() + 1;
                if (value.getMonth() + 1 === month) {
                    date = boundary.getDate();
                    if (value.getDate() === date) {
                        hour = boundary.getHours();
                        if (value.getHours() === hour) {
                            minute = boundary.getMinutes();
                        }
                    }
                }
            }
            return _ref2 = {}, _defineProperty(_ref2, type + 'Year', year), _defineProperty(_ref2, type + 'Month', month), _defineProperty(_ref2, type + 'Date', date), _defineProperty(_ref2, type + 'Hour', hour), _defineProperty(_ref2, type + 'Minute', minute), _ref2;
        },
        onCancel: function onCancel() {
            this.$emit('cancel');
        },
        onConfirm: function onConfirm() {
            this.$emit('confirm', this.data.innerValue);
        },
        onChange: function onChange() {
            var _this2 = this;

            var data = this.data;

            var value = void 0;
            var picker = this.getPicker();
            if (data.type === 'time') {
                var indexes = picker.getIndexes();
                value = indexes[0] + data.minHour + ':' + (indexes[1] + data.minMinute);
            } else {
                var values = picker.getValues();
                var year = getTrueValue(values[0]);
                var month = getTrueValue(values[1]);
                var maxDate = getMonthEndDay(year, month);
                var date = getTrueValue(values[2]);
                if (data.type === 'year-month') {
                    date = 1;
                }
                date = date > maxDate ? maxDate : date;
                var hour = 0;
                var minute = 0;
                if (data.type === 'datetime') {
                    hour = getTrueValue(values[3]);
                    minute = getTrueValue(values[4]);
                }
                value = new Date(year, month - 1, date, hour, minute);
            }
            value = this.correctValue(value);
            this.updateColumnValue(value).then(function () {
                _this2.$emit('input', value);
                _this2.$emit('change', picker);
            });
        },
        updateColumnValue: function updateColumnValue(value) {
            var _this3 = this;

            var values = [];
            var _data = this.data,
                type = _data.type,
                _data$formatter2 = _data.formatter,
                formatter = _data$formatter2 === undefined ? defaultFormatter : _data$formatter2;

            var picker = this.getPicker();
            if (type === 'time') {
                var pair = value.split(':');
                values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
            } else {
                var date = new Date(value);
                values = [formatter('year', '' + date.getFullYear()), formatter('month', padZero(date.getMonth() + 1))];
                if (type === 'date') {
                    values.push(formatter('day', padZero(date.getDate())));
                }
                if (type === 'datetime') {
                    values.push(formatter('day', padZero(date.getDate())), formatter('hour', padZero(date.getHours())), formatter('minute', padZero(date.getMinutes())));
                }
            }
            return this.set({ innerValue: value }).then(function () {
                return _this3.updateColumns();
            }).then(function () {
                return picker.setValues(values);
            });
        }
    },
    created: function created() {
        var _this4 = this;

        var innerValue = this.correctValue(this.data.value);
        this.updateColumnValue(innerValue).then(function () {
            _this4.$emit('input', innerValue);
        });
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaXNWYWxpZERhdGUiLCJkYXRlIiwiaXNOYU4iLCJnZXRUaW1lIiwicmFuZ2UiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIiwicGFkWmVybyIsInZhbCIsInNsaWNlIiwidGltZXMiLCJuIiwiaXRlcmF0ZWUiLCJpbmRleCIsInJlc3VsdCIsIkFycmF5IiwiZ2V0VHJ1ZVZhbHVlIiwiZm9ybWF0dGVkVmFsdWUiLCJwYXJzZUludCIsImdldE1vbnRoRW5kRGF5IiwieWVhciIsIm1vbnRoIiwiZ2V0RGF0ZSIsImRlZmF1bHRGb3JtYXR0ZXIiLCJfIiwidmFsdWUiLCJjbGFzc2VzIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwaWNrZXJQcm9wcyIsImZvcm1hdHRlciIsInR5cGUiLCJGdW5jdGlvbiIsIlN0cmluZyIsInNob3dUb29sYmFyIiwiQm9vbGVhbiIsIm1pbkRhdGUiLCJOdW1iZXIiLCJtYXhEYXRlIiwibWluSG91ciIsIm1heEhvdXIiLCJtaW5NaW51dGUiLCJtYXhNaW51dGUiLCJkYXRhIiwiaW5uZXJWYWx1ZSIsIm5vdyIsImNvbHVtbnMiLCJ3YXRjaCIsIm1ldGhvZHMiLCJ1cGRhdGVWYWx1ZSIsImNvcnJlY3RWYWx1ZSIsImlzRXF1YWwiLCJ1cGRhdGVDb2x1bW5WYWx1ZSIsInRoZW4iLCIkZW1pdCIsInVwZGF0ZUNvbHVtbnMiLCJnZXRQaWNrZXIiLCJwaWNrZXIiLCJzZWxlY3RDb21wb25lbnQiLCJzZXRDb2x1bW5WYWx1ZXMiLCJhcmdzIiwiYXBwbHkiLCJyZXN1bHRzIiwiZ2V0UmFuZ2VzIiwibWFwIiwidmFsdWVzIiwic2V0IiwiZ2V0Qm91bmRhcnkiLCJtYXhZZWFyIiwibWF4TW9udGgiLCJtaW5ZZWFyIiwibWluTW9udGgiLCJzcGxpY2UiLCJpc0RhdGVUeXBlIiwic3BsaXQiLCJob3VyIiwibWludXRlIiwiYm91bmRhcnkiLCJnZXRNb250aCIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwib25DaGFuZ2UiLCJpbmRleGVzIiwiZ2V0SW5kZXhlcyIsImdldFZhbHVlcyIsInBhaXIiLCJwdXNoIiwic2V0VmFsdWVzIiwiY3JlYXRlZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0EsSUFBTUEsY0FBYyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBcEI7QUFDQSxTQUFTQyxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUN2QixXQUFPLGtCQUFNQSxJQUFOLEtBQWUsQ0FBQ0MsTUFBTSxJQUFJSixJQUFKLENBQVNHLElBQVQsRUFBZUUsT0FBZixFQUFOLENBQXZCO0FBQ0g7QUFDRCxTQUFTQyxLQUFULENBQWVDLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUMxQixXQUFPQyxLQUFLRixHQUFMLENBQVNFLEtBQUtELEdBQUwsQ0FBU0YsR0FBVCxFQUFjQyxHQUFkLENBQVQsRUFBNkJDLEdBQTdCLENBQVA7QUFDSDtBQUNELFNBQVNFLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQ2xCLFdBQU8sUUFBS0EsR0FBTCxFQUFXQyxLQUFYLENBQWlCLENBQUMsQ0FBbEIsQ0FBUDtBQUNIO0FBQ0QsU0FBU0MsS0FBVCxDQUFlQyxDQUFmLEVBQWtCQyxRQUFsQixFQUE0QjtBQUN4QixRQUFJQyxRQUFRLENBQUMsQ0FBYjtBQUNBLFFBQU1DLFNBQVNDLE1BQU1KLElBQUksQ0FBSixHQUFRLENBQVIsR0FBWUEsQ0FBbEIsQ0FBZjtBQUNBLFdBQU8sRUFBRUUsS0FBRixHQUFVRixDQUFqQixFQUFvQjtBQUNoQkcsZUFBT0QsS0FBUCxJQUFnQkQsU0FBU0MsS0FBVCxDQUFoQjtBQUNIO0FBQ0QsV0FBT0MsTUFBUDtBQUNIO0FBQ0QsU0FBU0UsWUFBVCxDQUFzQkMsY0FBdEIsRUFBc0M7QUFDbEMsUUFBSSxDQUFDQSxjQUFMLEVBQ0k7QUFDSixXQUFPakIs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UEE7QUFBQTs7QUFDTixZQUFNOUMsYUFBYSxLQUFLTSxZQUFMLENBQWtCLEtBQUtQLElBQUwsQ0FBVW5CLEtBQTVCLENBQW5CO0FBQ0EsYUFBSzRCLGlCQUFMLENBQXVCUixVQUF2QixFQUFtQ1MsSUFBbkMsQ0FBd0MsWUFBTTtBQUMxQyxtQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JWLFVBQXBCO0FBQ0gsU0FGRDtBQUdIO0FBNVBTLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpc0RlZiB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5pbXBvcnQgeyBwaWNrZXJQcm9wcyB9IGZyb20gJy4uL3BpY2tlci9zaGFyZWQnO1xuY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5mdW5jdGlvbiBpc1ZhbGlkRGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIGlzRGVmKGRhdGUpICYmICFpc05hTihuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCkpO1xufVxuZnVuY3Rpb24gcmFuZ2UobnVtLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5mdW5jdGlvbiBwYWRaZXJvKHZhbCkge1xuICAgIHJldHVybiBgMDAke3ZhbH1gLnNsaWNlKC0yKTtcbn1cbmZ1bmN0aW9uIHRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgY29uc3QgcmVzdWx0ID0gQXJyYXkobiA8IDAgPyAwIDogbik7XG4gICAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRUcnVlVmFsdWUoZm9ybWF0dGVkVmFsdWUpIHtcbiAgICBpZiAoIWZvcm1hdHRlZFZhbHVlKVxuICAgICAgICByZXR1cm47XG4gICAgd2hpbGUgKGlzTmFOKHBhcnNlSW50KGZvcm1hdHRlZFZhbHVlLCAxMCkpKSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0dGVkVmFsdWUuc2xpY2UoMSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChmb3JtYXR0ZWRWYWx1ZSwgMTApO1xufVxuZnVuY3Rpb24gZ2V0TW9udGhFbmREYXkoeWVhciwgbW9udGgpIHtcbiAgICByZXR1cm4gMzIgLSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIDMyKS5nZXREYXRlKCk7XG59XG5jb25zdCBkZWZhdWx0Rm9ybWF0dGVyID0gKF8sIHZhbHVlKSA9PiB2YWx1ZTtcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFsnYWN0aXZlLWNsYXNzJywgJ3Rvb2xiYXItY2xhc3MnLCAnY29sdW1uLWNsYXNzJ10sXG4gICAgcHJvcHM6IE9iamVjdC5hc3NpZ24oe30sIHBpY2tlclByb3BzLCB7IGZvcm1hdHRlcjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICB2YWx1ZTogZGVmYXVsdEZvcm1hdHRlclxuICAgICAgICB9LCB2YWx1ZTogbnVsbCwgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdkYXRldGltZSdcbiAgICAgICAgfSwgc2hvd1Rvb2xiYXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LCBtaW5EYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoY3VycmVudFllYXIgLSAxMCwgMCwgMSkuZ2V0VGltZSgpXG4gICAgICAgIH0sIG1heERhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShjdXJyZW50WWVhciArIDEwLCAxMSwgMzEpLmdldFRpbWUoKVxuICAgICAgICB9LCBtaW5Ib3VyOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LCBtYXhIb3VyOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMjNcbiAgICAgICAgfSwgbWluTWludXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LCBtYXhNaW51dGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA1OVxuICAgICAgICB9IH0pLFxuICAgIGRhdGE6IHtcbiAgICAgICAgaW5uZXJWYWx1ZTogRGF0ZS5ub3coKSxcbiAgICAgICAgY29sdW1uczogW11cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlOiAndXBkYXRlVmFsdWUnLFxuICAgICAgICB0eXBlOiAndXBkYXRlVmFsdWUnLFxuICAgICAgICBtaW5EYXRlOiAndXBkYXRlVmFsdWUnLFxuICAgICAgICBtYXhEYXRlOiAndXBkYXRlVmFsdWUnLFxuICAgICAgICBtaW5Ib3VyOiAndXBkYXRlVmFsdWUnLFxuICAgICAgICBtYXhIb3VyOiAndXBkYXRlVmFsdWUnLFxuICAgICAgICBtaW5NaW51dGU6ICd1cGRhdGVWYWx1ZScsXG4gICAgICAgIG1heE1pbnV0ZTogJ3VwZGF0ZVZhbHVlJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuY29ycmVjdFZhbHVlKHRoaXMuZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBpc0VxdWFsID0gdmFsID09PSBkYXRhLmlubmVyVmFsdWU7XG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtblZhbHVlKHZhbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sdW1ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRQaWNrZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5waWNrZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyID0gdGhpcy5zZWxlY3RDb21wb25lbnQoJy52YW4tZGF0ZXRpbWUtcGlja2VyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwaWNrZXIgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzZXRDb2x1bW5WYWx1ZXMgfSA9IHBpY2tlcjtcbiAgICAgICAgICAgICAgICBwaWNrZXIuc2V0Q29sdW1uVmFsdWVzID0gKC4uLmFyZ3MpID0+IHNldENvbHVtblZhbHVlcy5hcHBseShwaWNrZXIsIFsuLi5hcmdzLCBmYWxzZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVDb2x1bW5zKCkge1xuICAgICAgICAgICAgY29uc3QgeyBmb3JtYXR0ZXIgPSBkZWZhdWx0Rm9ybWF0dGVyIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5nZXRSYW5nZXMoKS5tYXAoKHsgdHlwZSwgcmFuZ2UgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRpbWVzKHJhbmdlWzFdIC0gcmFuZ2VbMF0gKyAxLCBpbmRleCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhbmdlWzBdICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHlwZSA9PT0gJ3llYXInID8gYCR7dmFsdWV9YCA6IHBhZFplcm8odmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0dGVyKHR5cGUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZXMgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHsgY29sdW1uczogcmVzdWx0cyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmFuZ2VzKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hvdXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFtkYXRhLm1pbkhvdXIsIGRhdGEubWF4SG91cl1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21pbnV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogW2RhdGEubWluTWludXRlLCBkYXRhLm1heE1pbnV0ZV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IG1heFllYXIsIG1heERhdGUsIG1heE1vbnRoLCBtYXhIb3VyLCBtYXhNaW51dGUgfSA9IHRoaXMuZ2V0Qm91bmRhcnkoJ21heCcsIGRhdGEuaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB7IG1pblllYXIsIG1pbkRhdGUsIG1pbk1vbnRoLCBtaW5Ib3VyLCBtaW5NaW51dGUgfSA9IHRoaXMuZ2V0Qm91bmRhcnkoJ21pbicsIGRhdGEuaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAneWVhcicsXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbbWluWWVhciwgbWF4WWVhcl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vbnRoJyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5Nb250aCwgbWF4TW9udGhdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYXknLFxuICAgICAgICAgICAgICAgICAgICByYW5nZTogW21pbkRhdGUsIG1heERhdGVdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdob3VyJyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5Ib3VyLCBtYXhIb3VyXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWludXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5NaW51dGUsIG1heE1pbnV0ZV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ2RhdGUnKVxuICAgICAgICAgICAgICAgIHJlc3VsdC5zcGxpY2UoMywgMik7XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAneWVhci1tb250aCcpXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNwbGljZSgyLCAzKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGNvcnJlY3RWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgICAgICAgICAgLy8gdmFsaWRhdGUgdmFsdWVcbiAgICAgICAgICAgIGNvbnN0IGlzRGF0ZVR5cGUgPSBkYXRhLnR5cGUgIT09ICd0aW1lJztcbiAgICAgICAgICAgIGlmIChpc0RhdGVUeXBlICYmICFpc1ZhbGlkRGF0ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGEubWluRGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFpc0RhdGVUeXBlICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbWluSG91ciB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGAke3BhZFplcm8obWluSG91cil9OjAwYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRpbWUgdHlwZVxuICAgICAgICAgICAgaWYgKCFpc0RhdGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgbGV0IFtob3VyLCBtaW51dGVdID0gdmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBob3VyID0gcGFkWmVybyhyYW5nZShob3VyLCBkYXRhLm1pbkhvdXIsIGRhdGEubWF4SG91cikpO1xuICAgICAgICAgICAgICAgIG1pbnV0ZSA9IHBhZFplcm8ocmFuZ2UobWludXRlLCBkYXRhLm1pbk1pbnV0ZSwgZGF0YS5tYXhNaW51dGUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7aG91cn06JHttaW51dGV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRhdGUgdHlwZVxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1heCh2YWx1ZSwgZGF0YS5taW5EYXRlKTtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4odmFsdWUsIGRhdGEubWF4RGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEJvdW5kYXJ5KHR5cGUsIGlubmVyVmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IERhdGUoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBib3VuZGFyeSA9IG5ldyBEYXRlKHRoaXMuZGF0YVtgJHt0eXBlfURhdGVgXSk7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gYm91bmRhcnkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGxldCBtb250aCA9IDE7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IDE7XG4gICAgICAgICAgICBsZXQgaG91ciA9IDA7XG4gICAgICAgICAgICBsZXQgbWludXRlID0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbWF4Jykge1xuICAgICAgICAgICAgICAgIG1vbnRoID0gMTI7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IGdldE1vbnRoRW5kRGF5KHZhbHVlLmdldEZ1bGxZZWFyKCksIHZhbHVlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBob3VyID0gMjM7XG4gICAgICAgICAgICAgICAgbWludXRlID0gNTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUuZ2V0RnVsbFllYXIoKSA9PT0geWVhcikge1xuICAgICAgICAgICAgICAgIG1vbnRoID0gYm91bmRhcnkuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmdldE1vbnRoKCkgKyAxID09PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlID0gYm91bmRhcnkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuZ2V0RGF0ZSgpID09PSBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyID0gYm91bmRhcnkuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5nZXRIb3VycygpID09PSBob3VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlID0gYm91bmRhcnkuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbYCR7dHlwZX1ZZWFyYF06IHllYXIsXG4gICAgICAgICAgICAgICAgW2Ake3R5cGV9TW9udGhgXTogbW9udGgsXG4gICAgICAgICAgICAgICAgW2Ake3R5cGV9RGF0ZWBdOiBkYXRlLFxuICAgICAgICAgICAgICAgIFtgJHt0eXBlfUhvdXJgXTogaG91cixcbiAgICAgICAgICAgICAgICBbYCR7dHlwZX1NaW51dGVgXTogbWludXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBvbkNhbmNlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbCcpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbmZpcm0oKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb25maXJtJywgdGhpcy5kYXRhLmlubmVyVmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHBpY2tlciA9IHRoaXMuZ2V0UGlja2VyKCk7XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAndGltZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleGVzID0gcGlja2VyLmdldEluZGV4ZXMoKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGAke2luZGV4ZXNbMF0gKyBkYXRhLm1pbkhvdXJ9OiR7aW5kZXhlc1sxXSArIGRhdGEubWluTWludXRlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBwaWNrZXIuZ2V0VmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IGdldFRydWVWYWx1ZSh2YWx1ZXNbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gZ2V0VHJ1ZVZhbHVlKHZhbHVlc1sxXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4RGF0ZSA9IGdldE1vbnRoRW5kRGF5KHllYXIsIG1vbnRoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGdldFRydWVWYWx1ZSh2YWx1ZXNbMl0pO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICd5ZWFyLW1vbnRoJykge1xuICAgICAgICAgICAgICAgICAgICBkYXRlID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0ZSA9IGRhdGUgPiBtYXhEYXRlID8gbWF4RGF0ZSA6IGRhdGU7XG4gICAgICAgICAgICAgICAgbGV0IGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBtaW51dGUgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdkYXRldGltZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IGdldFRydWVWYWx1ZSh2YWx1ZXNbM10pO1xuICAgICAgICAgICAgICAgICAgICBtaW51dGUgPSBnZXRUcnVlVmFsdWUodmFsdWVzWzRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRhdGUsIGhvdXIsIG1pbnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuY29ycmVjdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sdW1uVmFsdWUodmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHBpY2tlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ29sdW1uVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgZm9ybWF0dGVyID0gZGVmYXVsdEZvcm1hdHRlciB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgcGlja2VyID0gdGhpcy5nZXRQaWNrZXIoKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGltZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0gdmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcignaG91cicsIHBhaXJbMF0pLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXIoJ21pbnV0ZScsIHBhaXJbMV0pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXIoJ3llYXInLCBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9YCksXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcignbW9udGgnLCBwYWRaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChmb3JtYXR0ZXIoJ2RheScsIHBhZFplcm8oZGF0ZS5nZXREYXRlKCkpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZXRpbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGZvcm1hdHRlcignZGF5JywgcGFkWmVybyhkYXRlLmdldERhdGUoKSkpLCBmb3JtYXR0ZXIoJ2hvdXInLCBwYWRaZXJvKGRhdGUuZ2V0SG91cnMoKSkpLCBmb3JtYXR0ZXIoJ21pbnV0ZScsIHBhZFplcm8oZGF0ZS5nZXRNaW51dGVzKCkpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHsgaW5uZXJWYWx1ZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnVwZGF0ZUNvbHVtbnMoKSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBwaWNrZXIuc2V0VmFsdWVzKHZhbHVlcykpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBjb25zdCBpbm5lclZhbHVlID0gdGhpcy5jb3JyZWN0VmFsdWUodGhpcy5kYXRhLnZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb2x1bW5WYWx1ZShpbm5lclZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgaW5uZXJWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl19