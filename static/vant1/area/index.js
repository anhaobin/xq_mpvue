'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _component = require('./../common/component.js');

var _shared = require('./../picker/shared.js');

var COLUMNSPLACEHOLDERCODE = '000000';
(0, _component.VantComponent)({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: Object.assign({}, _shared.pickerProps, { value: String, areaList: {
            type: Object,
            value: {}
        }, columnsNum: {
            type: [String, Number],
            value: 3
        }, columnsPlaceholder: {
            type: Array,
            observer: function observer(val) {
                this.setData({
                    typeToColumnsPlaceholder: {
                        province: val[0] || '',
                        city: val[1] || '',
                        county: val[2] || ''
                    }
                });
            }
        } }),
    data: {
        columns: [{ values: [] }, { values: [] }, { values: [] }],
        displayColumns: [{ values: [] }, { values: [] }, { values: [] }],
        typeToColumnsPlaceholder: {}
    },
    watch: {
        value: function value(_value) {
            this.code = _value;
            this.setValues();
        },

        areaList: 'setValues',
        columnsNum: function columnsNum(value) {
            this.set({
                displayColumns: this.data.columns.slice(0, +value)
            });
        }
    },
    mounted: function mounted() {
        var _this = this;

        setTimeout(function () {
            _this.setValues();
        }, 0);
    },

    methods: {
        getPicker: function getPicker() {
            if (this.picker == null) {
                this.picker = this.selectComponent('.van-area__picker');
            }
            return this.picker;
        },
        onCancel: function onCancel(event) {
            this.emit('cancel', event.detail);
        },
        onConfirm: function onConfirm(event) {
            var index = event.detail.index;
            var value = event.detail.value;

            value = this.parseOutputValues(value);
            this.emit('confirm', { value: value, index: index });
        },
        emit: function emit(type, detail) {
            detail.values = detail.value;
            delete detail.value;
            this.$emit(type, detail);
        },

        // parse output columns data
        parseOutputValues: function parseOutputValues(values) {
            var columnsPlaceholder = this.data.columnsPlaceholder;

            return values.map(function (value, index) {
                // save undefined value
                if (!value) return value;
                value = JSON.parse(JSON.stringify(value));
                if (!value.code || value.name === columnsPlaceholder[index]) {
                    value.code = '';
                    value.name = '';
                }
                return value;
            });
        },
        onChange: function onChange(event) {
            var _this2 = this;

            var _event$detail = event.detail,
                index = _event$detail.index,
                picker = _event$detail.picker,
                value = _event$detail.value;

            this.code = value[index].code;
            var getValues = picker.getValues();
            getValues = this.parseOutputValues(getValues);
            this.setValues().then(function () {
                _this2.$emit('change', {
                    picker: picker,
                    values: getValues,
                    index: index
                });
            });
        },
        getConfig: function getConfig(type) {
            var areaList = this.data.areaList;

            return areaList && areaList[type + '_list'] || {};
        },
        getList: function getList(type, code) {
            var typeToColumnsPlaceholder = this.data.typeToColumnsPlaceholder;

            var result = [];
            if (type !== 'province' && !code) {
                return result;
            }
            var list = this.getConfig(type);
            result = Object.keys(list).map(function (code) {
                return {
                    code: code,
                    name: list[code]
                };
            });
            if (code) {
                // oversea code
                if (code[0] === '9' && type === 'city') {
                    code = '9';
                }
                result = result.filter(function (item) {
                    return item.code.indexOf(code) === 0;
                });
            }
            if (typeToColumnsPlaceholder[type] && result.length) {
                // set columns placeholder
                var codeFill = type === 'province' ? '' : type === 'city' ? COLUMNSPLACEHOLDERCODE.slice(2, 4) : COLUMNSPLACEHOLDERCODE.slice(4, 6);
                result.unshift({
                    code: '' + code + codeFill,
                    name: typeToColumnsPlaceholder[type]
                });
            }
            return result;
        },
        getIndex: function getIndex(type, code) {
            var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
            var list = this.getList(type, code.slice(0, compareNum - 2));
            // oversea code
            if (code[0] === '9' && type === 'province') {
                compareNum = 1;
            }
            code = code.slice(0, compareNum);
            for (var i = 0; i < list.length; i++) {
                if (list[i].code.slice(0, compareNum) === code) {
                    return i;
                }
            }
            return 0;
        },
        setValues: function setValues() {
            var _this3 = this;

            var county = this.getConfig('county');
            var code = this.code;

            if (!code) {
                if (this.data.columnsPlaceholder.length) {
                    code = COLUMNSPLACEHOLDERCODE;
                } else if (Object.keys(county)[0]) {
                    code = Object.keys(county)[0];
                } else {
                    code = '';
                }
            }
            var province = this.getList('province');
            var city = this.getList('city', code.slice(0, 2));
            var picker = this.getPicker();
            if (!picker) {
                return;
            }
            var stack = [];
            stack.push(picker.setColumnValues(0, province, false));
            stack.push(picker.setColumnValues(1, city, false));
            if (city.length && code.slice(2, 4) === '00') {
                var _city = _slicedToArray(city, 1);

                code = _city[0].code;
            }
            stack.push(picker.setColumnValues(2, this.getList('county', code.slice(0, 4)), false));
            return Promise.all(stack).catch(function () {}).then(function () {
                return picker.setIndexes([_this3.getIndex('province', code), _this3.getIndex('city', code), _this3.getIndex('county', code)]);
            }).catch(function () {});
        },
        getValues: function getValues() {
            var picker = this.getPicker();
            return picker ? picker.getValues().filter(function (value) {
                return !!value;
            }) : [];
        },
        getDetail: function getDetail() {
            var values = this.getValues();
            var area = {
                code: '',
                country: '',
                province: '',
                city: '',
                county: ''
            };
            if (!values.length) {
                return area;
            }
            var names = values.map(function (item) {
                return item.name;
            });
            area.code = values[values.length - 1].code;
            if (area.code[0] === '9') {
                area.country = names[1] || '';
                area.province = names[2] || '';
            } else {
                area.province = names[0] || '';
                area.city = names[1] || '';
                area.county = names[2] || '';
            }
            return area;
        },
        reset: function reset() {
            this.code = '';
            return this.setValues();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNPTFVNTlNQTEFDRUhPTERFUkNPREUiLCJjbGFzc2VzIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwaWNrZXJQcm9wcyIsInZhbHVlIiwiU3RyaW5nIiwiYXJlYUxpc3QiLCJ0eXBlIiwiY29sdW1uc051bSIsIk51bWJlciIsImNvbHVtbnNQbGFjZWhvbGRlciIsIkFycmF5Iiwib2JzZXJ2ZXIiLCJ2YWwiLCJzZXREYXRhIiwidHlwZVRvQ29sdW1uc1BsYWNlaG9sZGVyIiwicHJvdmluY2UiLCJjaXR5IiwiY291bnR5IiwiZGF0YSIsImNvbHVtbnMiLCJ2YWx1ZXMiLCJkaXNwbGF5Q29sdW1ucyIsIndhdGNoIiwiY29kZSIsInNldFZhbHVlcyIsInNldCIsInNsaWNlIiwibW91bnRlZCIsInNldFRpbWVvdXQiLCJtZXRob2RzIiwiZ2V0UGlja2VyIiwicGlja2VyIiwic2VsZWN0Q29tcG9uZW50Iiwib25DYW5jZWwiLCJldmVudCIsImVtaXQiLCJkZXRhaWwiLCJvbkNvbmZpcm0iLCJpbmRleCIsInBhcnNlT3V0cHV0VmFsdWVzIiwiJGVtaXQiLCJtYXAiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuYW1lIiwib25DaGFuZ2UiLCJnZXRWYWx1ZXMiLCJ0aGVuIiwiZ2V0Q29uZmlnIiwiZ2V0TGlzdCIsInJlc3VsdCIsImxpc3QiLCJrZXlzIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4T2YiLCJsZW5ndGgiLCJjb2RlRmlsbCIsInVuc2hpZnQiLCJnZXRJbmRleCIsImNvbXBhcmVOdW0iLCJpIiwic3RhY2siLCJwdXNoIiwic2V0Q29sdW1uVmFsdWVzIiwiUHJvbWlzZSIsImFsbCIsImNhdGNoIiwic2V0SW5kZXhlcyIsImdldERldGFpbCIsImFyZWEiLCJjb3VudHJ5IiwibmFtZXMiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBLElBQU1BLHlCQUF5QixRQUEvQjtBQUNBLDhC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QmdELHFCQUFLQyxPQUFMLEdBQWVDLE1BQU0sQ0FBTixLQUFZLEVBQTNCO0FBQ0FGLHFCQUFLeEQsUUFBTCxHQUFnQjBELE1BQU0sQ0FBTixLQUFZLEVBQTVCO0FBQ0gsYUFIRCxNQUlLO0FBQ0RGLHFCQUFLeEQsUUFBTCxHQUFnQjBELE1BQU0sQ0FBTixLQUFZLEVBQTVCO0FBQ0FGLHFCQUFLdkQsSUFBTCxHQUFZeUQsTUFBTSxDQUFOLEtBQVksRUFBeEI7QUFDQUYscUJBQUt0RCxNQUFMLEdBQWN3RCxNQUFNLENBQU4sS0FBWSxFQUExQjtBQUNIO0FBQ0QsbUJBQU9GLElBQVA7QUFDSCxTQWhLSTtBQWlLTEcsYUFqS0ssbUJBaUtHO0FBQ0osaUJBQUtuRCxJQUFMLEdBQVksRUFBWjtBQUNBLG1CQUFPLEtBQUtDLFNBQUwsRUFBUDtBQUNIO0FBcEtJO0FBMUNDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBwaWNrZXJQcm9wcyB9IGZyb20gJy4uL3BpY2tlci9zaGFyZWQnO1xuY29uc3QgQ09MVU1OU1BMQUNFSE9MREVSQ09ERSA9ICcwMDAwMDAnO1xuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogWydhY3RpdmUtY2xhc3MnLCAndG9vbGJhci1jbGFzcycsICdjb2x1bW4tY2xhc3MnXSxcbiAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7fSwgcGlja2VyUHJvcHMsIHsgdmFsdWU6IFN0cmluZywgYXJlYUxpc3Q6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHZhbHVlOiB7fVxuICAgICAgICB9LCBjb2x1bW5zTnVtOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgdmFsdWU6IDNcbiAgICAgICAgfSwgY29sdW1uc1BsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIG9ic2VydmVyKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVUb0NvbHVtbnNQbGFjZWhvbGRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2U6IHZhbFswXSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IHZhbFsxXSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50eTogdmFsWzJdIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gfSksXG4gICAgZGF0YToge1xuICAgICAgICBjb2x1bW5zOiBbeyB2YWx1ZXM6IFtdIH0sIHsgdmFsdWVzOiBbXSB9LCB7IHZhbHVlczogW10gfV0sXG4gICAgICAgIGRpc3BsYXlDb2x1bW5zOiBbeyB2YWx1ZXM6IFtdIH0sIHsgdmFsdWVzOiBbXSB9LCB7IHZhbHVlczogW10gfV0sXG4gICAgICAgIHR5cGVUb0NvbHVtbnNQbGFjZWhvbGRlcjoge31cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFyZWFMaXN0OiAnc2V0VmFsdWVzJyxcbiAgICAgICAgY29sdW1uc051bSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDb2x1bW5zOiB0aGlzLmRhdGEuY29sdW1ucy5zbGljZSgwLCArdmFsdWUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcygpO1xuICAgICAgICB9LCAwKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0UGlja2VyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGlja2VyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlciA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcudmFuLWFyZWFfX3BpY2tlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyO1xuICAgICAgICB9LFxuICAgICAgICBvbkNhbmNlbChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjYW5jZWwnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbmZpcm0oZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGV2ZW50LmRldGFpbDtcbiAgICAgICAgICAgIGxldCB7IHZhbHVlIH0gPSBldmVudC5kZXRhaWw7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucGFyc2VPdXRwdXRWYWx1ZXModmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjb25maXJtJywgeyB2YWx1ZSwgaW5kZXggfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgZGV0YWlsKSB7XG4gICAgICAgICAgICBkZXRhaWwudmFsdWVzID0gZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgZGVsZXRlIGRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQodHlwZSwgZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcGFyc2Ugb3V0cHV0IGNvbHVtbnMgZGF0YVxuICAgICAgICBwYXJzZU91dHB1dFZhbHVlcyh2YWx1ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sdW1uc1BsYWNlaG9sZGVyIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB1bmRlZmluZWQgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZS5jb2RlIHx8IHZhbHVlLm5hbWUgPT09IGNvbHVtbnNQbGFjZWhvbGRlcltpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY29kZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5uYW1lID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBpbmRleCwgcGlja2VyLCB2YWx1ZSB9ID0gZXZlbnQuZGV0YWlsO1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gdmFsdWVbaW5kZXhdLmNvZGU7XG4gICAgICAgICAgICBsZXQgZ2V0VmFsdWVzID0gcGlja2VyLmdldFZhbHVlcygpO1xuICAgICAgICAgICAgZ2V0VmFsdWVzID0gdGhpcy5wYXJzZU91dHB1dFZhbHVlcyhnZXRWYWx1ZXMpO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBnZXRWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29uZmlnKHR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXJlYUxpc3QgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiAoYXJlYUxpc3QgJiYgYXJlYUxpc3RbYCR7dHlwZX1fbGlzdGBdKSB8fCB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0TGlzdCh0eXBlLCBjb2RlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGVUb0NvbHVtbnNQbGFjZWhvbGRlciB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgaWYgKHR5cGUgIT09ICdwcm92aW5jZScgJiYgIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0Q29uZmlnKHR5cGUpO1xuICAgICAgICAgICAgcmVzdWx0ID0gT2JqZWN0LmtleXMobGlzdCkubWFwKGNvZGUgPT4gKHtcbiAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGxpc3RbY29kZV1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gb3ZlcnNlYSBjb2RlXG4gICAgICAgICAgICAgICAgaWYgKGNvZGVbMF0gPT09ICc5JyAmJiB0eXBlID09PSAnY2l0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9ICc5JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IGl0ZW0uY29kZS5pbmRleE9mKGNvZGUpID09PSAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlVG9Db2x1bW5zUGxhY2Vob2xkZXJbdHlwZV0gJiYgcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHNldCBjb2x1bW5zIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgY29uc3QgY29kZUZpbGwgPSB0eXBlID09PSAncHJvdmluY2UnID8gJycgOiB0eXBlID09PSAnY2l0eScgPyBDT0xVTU5TUExBQ0VIT0xERVJDT0RFLnNsaWNlKDIsIDQpIDogQ09MVU1OU1BMQUNFSE9MREVSQ09ERS5zbGljZSg0LCA2KTtcbiAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IGAke2NvZGV9JHtjb2RlRmlsbH1gLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0eXBlVG9Db2x1bW5zUGxhY2Vob2xkZXJbdHlwZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEluZGV4KHR5cGUsIGNvZGUpIHtcbiAgICAgICAgICAgIGxldCBjb21wYXJlTnVtID0gdHlwZSA9PT0gJ3Byb3ZpbmNlJyA/IDIgOiB0eXBlID09PSAnY2l0eScgPyA0IDogNjtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldExpc3QodHlwZSwgY29kZS5zbGljZSgwLCBjb21wYXJlTnVtIC0gMikpO1xuICAgICAgICAgICAgLy8gb3ZlcnNlYSBjb2RlXG4gICAgICAgICAgICBpZiAoY29kZVswXSA9PT0gJzknICYmIHR5cGUgPT09ICdwcm92aW5jZScpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlTnVtID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnNsaWNlKDAsIGNvbXBhcmVOdW0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0uY29kZS5zbGljZSgwLCBjb21wYXJlTnVtKSA9PT0gY29kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VmFsdWVzKCkge1xuICAgICAgICAgICAgY29uc3QgY291bnR5ID0gdGhpcy5nZXRDb25maWcoJ2NvdW50eScpO1xuICAgICAgICAgICAgbGV0IHsgY29kZSB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY29sdW1uc1BsYWNlaG9sZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlID0gQ09MVU1OU1BMQUNFSE9MREVSQ09ERTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LmtleXMoY291bnR5KVswXSkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlID0gT2JqZWN0LmtleXMoY291bnR5KVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZSA9IHRoaXMuZ2V0TGlzdCgncHJvdmluY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGNpdHkgPSB0aGlzLmdldExpc3QoJ2NpdHknLCBjb2RlLnNsaWNlKDAsIDIpKTtcbiAgICAgICAgICAgIGNvbnN0IHBpY2tlciA9IHRoaXMuZ2V0UGlja2VyKCk7XG4gICAgICAgICAgICBpZiAoIXBpY2tlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgICAgICBzdGFjay5wdXNoKHBpY2tlci5zZXRDb2x1bW5WYWx1ZXMoMCwgcHJvdmluY2UsIGZhbHNlKSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHBpY2tlci5zZXRDb2x1bW5WYWx1ZXMoMSwgY2l0eSwgZmFsc2UpKTtcbiAgICAgICAgICAgIGlmIChjaXR5Lmxlbmd0aCAmJiBjb2RlLnNsaWNlKDIsIDQpID09PSAnMDAnKSB7XG4gICAgICAgICAgICAgICAgW3sgY29kZSB9XSA9IGNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFjay5wdXNoKHBpY2tlci5zZXRDb2x1bW5WYWx1ZXMoMiwgdGhpcy5nZXRMaXN0KCdjb3VudHknLCBjb2RlLnNsaWNlKDAsIDQpKSwgZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjaylcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4geyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHBpY2tlci5zZXRJbmRleGVzKFtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluZGV4KCdwcm92aW5jZScsIGNvZGUpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5kZXgoJ2NpdHknLCBjb2RlKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluZGV4KCdjb3VudHknLCBjb2RlKVxuICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFZhbHVlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHBpY2tlciA9IHRoaXMuZ2V0UGlja2VyKCk7XG4gICAgICAgICAgICByZXR1cm4gcGlja2VyID8gcGlja2VyLmdldFZhbHVlcygpLmZpbHRlcih2YWx1ZSA9PiAhIXZhbHVlKSA6IFtdO1xuICAgICAgICB9LFxuICAgICAgICBnZXREZXRhaWwoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgICAgICAgICAgY29uc3QgYXJlYSA9IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiAnJyxcbiAgICAgICAgICAgICAgICBwcm92aW5jZTogJycsXG4gICAgICAgICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgICAgICAgY291bnR5OiAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmVhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmFtZXMgPSB2YWx1ZXMubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpO1xuICAgICAgICAgICAgYXJlYS5jb2RlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXS5jb2RlO1xuICAgICAgICAgICAgaWYgKGFyZWEuY29kZVswXSA9PT0gJzknKSB7XG4gICAgICAgICAgICAgICAgYXJlYS5jb3VudHJ5ID0gbmFtZXNbMV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgYXJlYS5wcm92aW5jZSA9IG5hbWVzWzJdIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJlYS5wcm92aW5jZSA9IG5hbWVzWzBdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGFyZWEuY2l0eSA9IG5hbWVzWzFdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGFyZWEuY291bnR5ID0gbmFtZXNbMl0gfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJlYTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSAnJztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=