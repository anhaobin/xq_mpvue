'use strict';

var _component = require('./../common/component.js');

var _shared = require('./shared.js');

(0, _component.VantComponent)({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: Object.assign({}, _shared.pickerProps, { valueKey: {
            type: String,
            value: 'text'
        }, defaultIndex: {
            type: Number,
            value: 0
        }, columns: {
            type: Array,
            value: [],
            observer: function observer() {
                var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                this.simple = columns.length && !columns[0].values;
                this.children = this.selectAllComponents('.van-picker__column');
                if (Array.isArray(this.children) && this.children.length) {
                    this.setColumns().catch(function () {});
                }
            }
        } }),
    beforeCreate: function beforeCreate() {
        this.children = [];
    },

    methods: {
        noop: function noop() {},
        setColumns: function setColumns() {
            var _this = this;

            var data = this.data;

            var columns = this.simple ? [{ values: data.columns }] : data.columns;
            var stack = columns.map(function (column, index) {
                return _this.setColumnValues(index, column.values);
            });
            return Promise.all(stack);
        },
        emit: function emit(event) {
            var type = event.currentTarget.dataset.type;

            if (this.simple) {
                this.$emit(type, {
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit(type, {
                    value: this.getValues(),
                    index: this.getIndexes()
                });
            }
        },
        onChange: function onChange(event) {
            if (this.simple) {
                this.$emit('change', {
                    picker: this,
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit('change', {
                    picker: this,
                    value: this.getValues(),
                    index: event.currentTarget.dataset.index
                });
            }
        },

        // get column instance by index
        getColumn: function getColumn(index) {
            return this.children[index];
        },

        // get column value by index
        getColumnValue: function getColumnValue(index) {
            var column = this.getColumn(index);
            return column && column.getValue();
        },

        // set column value by index
        setColumnValue: function setColumnValue(index, value) {
            var column = this.getColumn(index);
            if (column == null) {
                return Promise.reject(new Error('setColumnValue: 对应列不存在'));
            }
            return column.setValue(value);
        },

        // get column option index by column index
        getColumnIndex: function getColumnIndex(columnIndex) {
            return (this.getColumn(columnIndex) || {}).data.currentIndex;
        },

        // set column option index by column index
        setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
            var column = this.getColumn(columnIndex);
            if (column == null) {
                return Promise.reject(new Error('setColumnIndex: 对应列不存在'));
            }
            return column.setIndex(optionIndex);
        },

        // get options of column by index
        getColumnValues: function getColumnValues(index) {
            return (this.children[index] || {}).data.options;
        },

        // set options of column by index
        setColumnValues: function setColumnValues(index, options) {
            var needReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var column = this.children[index];
            if (column == null) {
                return Promise.reject(new Error('setColumnValues: 对应列不存在'));
            }
            var isSame = JSON.stringify(column.data.options) === JSON.stringify(options);
            if (isSame) {
                return Promise.resolve();
            }
            return column.set({ options: options }).then(function () {
                if (needReset) {
                    column.setIndex(0);
                }
            });
        },

        // get values of all columns
        getValues: function getValues() {
            return this.children.map(function (child) {
                return child.getValue();
            });
        },

        // set values of all columns
        setValues: function setValues(values) {
            var _this2 = this;

            var stack = values.map(function (value, index) {
                return _this2.setColumnValue(index, value);
            });
            return Promise.all(stack);
        },

        // get indexes of all columns
        getIndexes: function getIndexes() {
            return this.children.map(function (child) {
                return child.data.currentIndex;
            });
        },

        // set indexes of all columns
        setIndexes: function setIndexes(indexes) {
            var _this3 = this;

            var stack = indexes.map(function (optionIndex, columnIndex) {
                return _this3.setColumnIndex(columnIndex, optionIndex);
            });
            return Promise.all(stack);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsInBpY2tlclByb3BzIiwidmFsdWVLZXkiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJkZWZhdWx0SW5kZXgiLCJOdW1iZXIiLCJjb2x1bW5zIiwiQXJyYXkiLCJvYnNlcnZlciIsInNpbXBsZSIsImxlbmd0aCIsInZhbHVlcyIsImNoaWxkcmVuIiwic2VsZWN0QWxsQ29tcG9uZW50cyIsImlzQXJyYXkiLCJzZXRDb2x1bW5zIiwiY2F0Y2giLCJiZWZvcmVDcmVhdGUiLCJtZXRob2RzIiwibm9vcCIsImRhdGEiLCJzdGFjayIsIm1hcCIsImNvbHVtbiIsImluZGV4Iiwic2V0Q29sdW1uVmFsdWVzIiwiUHJvbWlzZSIsImFsbCIsImVtaXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiJGVtaXQiLCJnZXRDb2x1bW5WYWx1ZSIsImdldENvbHVtbkluZGV4IiwiZ2V0VmFsdWVzIiwiZ2V0SW5kZXhlcyIsIm9uQ2hhbmdlIiwicGlja2VyIiwiZ2V0Q29sdW1uIiwiZ2V0VmFsdWUiLCJzZXRDb2x1bW5WYWx1ZSIsInJlamVjdCIsIkVycm9yIiwic2V0VmFsdWUiLCJjb2x1bW5JbmRleCIsImN1cnJlbnRJbmRleCIsInNldENvbHVtbkluZGV4Iiwib3B0aW9uSW5kZXgiLCJzZXRJbmRleCIsImdldENvbHVtblZhbHVlcyIsIm9wdGlvbnMiLCJuZWVkUmVzZXQiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzb2x2ZSIsInNldCIsInRoZW4iLCJjaGlsZCIsInNldFZhbHVlcyIsInNldEluZGV4ZXMiLCJpbmRleGVzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1ZBLGFBQVMsQ0FBQyxjQUFELEVBQWlCLGVBQWpCLEVBQWtDLGNBQWxDLENBREM7QUFFVkMsV0FBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQs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a0JBbEdLLHdCQWtHUTtBQUNULG1CQUFPLEtBQUt4QixRQUFMLENBQWNVLEdBQWQsQ0FBa0IsVUFBQ3FDLEtBQUQ7QUFBQSx1QkFBV0EsTUFBTXZDLElBQU4sQ0FBVzBCLFlBQXRCO0FBQUEsYUFBbEIsQ0FBUDtBQUNILFNBcEdJOztBQXFHTDtBQUNBZSxrQkF0R0ssc0JBc0dNQyxPQXRHTixFQXNHZTtBQUFBOztBQUNoQixnQkFBTXpDLFFBQVF5QyxRQUFReEMsR0FBUixDQUFZLFVBQUMwQixXQUFELEVBQWNILFdBQWQ7QUFBQSx1QkFBOEIsT0FBS0UsY0FBTCxDQUFvQkYsV0FBcEIsRUFBaUNHLFdBQWpDLENBQTlCO0FBQUEsYUFBWixDQUFkO0FBQ0EsbUJBQU90QixRQUFRQyxHQUFSLENBQVlOLEtBQVosQ0FBUDtBQUNIO0FBekdJO0FBdEJDLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBwaWNrZXJQcm9wcyB9IGZyb20gJy4vc2hhcmVkJztcblZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFsnYWN0aXZlLWNsYXNzJywgJ3Rvb2xiYXItY2xhc3MnLCAnY29sdW1uLWNsYXNzJ10sXG4gICAgcHJvcHM6IE9iamVjdC5hc3NpZ24oe30sIHBpY2tlclByb3BzLCB7IHZhbHVlS2V5OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3RleHQnXG4gICAgICAgIH0sIGRlZmF1bHRJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSwgY29sdW1uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICBvYnNlcnZlcihjb2x1bW5zID0gW10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbXBsZSA9IGNvbHVtbnMubGVuZ3RoICYmICFjb2x1bW5zWzBdLnZhbHVlcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5zZWxlY3RBbGxDb21wb25lbnRzKCcudmFuLXBpY2tlcl9fY29sdW1uJyk7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5jaGlsZHJlbikgJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2x1bW5zKCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gfSksXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5vb3AoKSB7IH0sXG4gICAgICAgIHNldENvbHVtbnMoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5zaW1wbGUgPyBbeyB2YWx1ZXM6IGRhdGEuY29sdW1ucyB9XSA6IGRhdGEuY29sdW1ucztcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gY29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHRoaXMuc2V0Q29sdW1uVmFsdWVzKGluZGV4LCBjb2x1bW4udmFsdWVzKSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spO1xuICAgICAgICB9LFxuICAgICAgICBlbWl0KGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQodHlwZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRDb2x1bW5WYWx1ZSgwKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0Q29sdW1uSW5kZXgoMClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQodHlwZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRWYWx1ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0SW5kZXhlcygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaW1wbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlcjogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29sdW1uVmFsdWUoMCksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmdldENvbHVtbkluZGV4KDApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlcjogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0VmFsdWVzKCksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IGNvbHVtbiBpbnN0YW5jZSBieSBpbmRleFxuICAgICAgICBnZXRDb2x1bW4oaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IGNvbHVtbiB2YWx1ZSBieSBpbmRleFxuICAgICAgICBnZXRDb2x1bW5WYWx1ZShpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5nZXRDb2x1bW4oaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbiAmJiBjb2x1bW4uZ2V0VmFsdWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2V0IGNvbHVtbiB2YWx1ZSBieSBpbmRleFxuICAgICAgICBzZXRDb2x1bW5WYWx1ZShpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGluZGV4KTtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ3NldENvbHVtblZhbHVlOiDlr7nlupTliJfkuI3lrZjlnKgnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IGNvbHVtbiBvcHRpb24gaW5kZXggYnkgY29sdW1uIGluZGV4XG4gICAgICAgIGdldENvbHVtbkluZGV4KGNvbHVtbkluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZ2V0Q29sdW1uKGNvbHVtbkluZGV4KSB8fCB7fSkuZGF0YS5jdXJyZW50SW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCBjb2x1bW4gb3B0aW9uIGluZGV4IGJ5IGNvbHVtbiBpbmRleFxuICAgICAgICBzZXRDb2x1bW5JbmRleChjb2x1bW5JbmRleCwgb3B0aW9uSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ3NldENvbHVtbkluZGV4OiDlr7nlupTliJfkuI3lrZjlnKgnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLnNldEluZGV4KG9wdGlvbkluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IG9wdGlvbnMgb2YgY29sdW1uIGJ5IGluZGV4XG4gICAgICAgIGdldENvbHVtblZhbHVlcyhpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmNoaWxkcmVuW2luZGV4XSB8fCB7fSkuZGF0YS5vcHRpb25zO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgb3B0aW9ucyBvZiBjb2x1bW4gYnkgaW5kZXhcbiAgICAgICAgc2V0Q29sdW1uVmFsdWVzKGluZGV4LCBvcHRpb25zLCBuZWVkUmVzZXQgPSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ3NldENvbHVtblZhbHVlczog5a+55bqU5YiX5LiN5a2Y5ZyoJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNTYW1lID0gSlNPTi5zdHJpbmdpZnkoY29sdW1uLmRhdGEub3B0aW9ucykgPT09IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGlzU2FtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4uc2V0KHsgb3B0aW9ucyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmVlZFJlc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zZXRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IHZhbHVlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBnZXRWYWx1ZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC5nZXRWYWx1ZSgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2V0IHZhbHVlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBzZXRWYWx1ZXModmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IHZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gdGhpcy5zZXRDb2x1bW5WYWx1ZShpbmRleCwgdmFsdWUpKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBpbmRleGVzIG9mIGFsbCBjb2x1bW5zXG4gICAgICAgIGdldEluZGV4ZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC5kYXRhLmN1cnJlbnRJbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCBpbmRleGVzIG9mIGFsbCBjb2x1bW5zXG4gICAgICAgIHNldEluZGV4ZXMoaW5kZXhlcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSBpbmRleGVzLm1hcCgob3B0aW9uSW5kZXgsIGNvbHVtbkluZGV4KSA9PiB0aGlzLnNldENvbHVtbkluZGV4KGNvbHVtbkluZGV4LCBvcHRpb25JbmRleCkpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19