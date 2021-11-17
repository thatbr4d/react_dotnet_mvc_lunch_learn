var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { ListGroupItem } from "./list_group_item.js";

'use strict';

var e = React.createElement;

var ListItems = function ListItems() {
    var _React$useState = React.useState([{ itemName: null, itemDesc: null, itemExtra: null, itemDate: null }]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        items = _React$useState2[0],
        setItems = _React$useState2[1];

    var _React$useState3 = React.useState(""),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        currentItemName = _React$useState4[0],
        setCurrentItemName = _React$useState4[1];

    var _React$useState5 = React.useState(""),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        currentItemDesc = _React$useState6[0],
        setCurrentItemDesc = _React$useState6[1];

    var _React$useState7 = React.useState(""),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        currentItemExtra = _React$useState8[0],
        setCurrentItemExtra = _React$useState8[1];

    var _React$useState9 = React.useState(""),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        currentItemDate = _React$useState10[0],
        setCurrentItemDate = _React$useState10[1];

    var addAnother = function addAnother() {
        setItems([].concat(_toConsumableArray(items), [{ itemName: currentItemName, itemDesc: currentItemDesc, itemExtra: currentItemExtra, itemDate: currentItemDate }]));
        setCurrentItemName("");
        setCurrentItemDesc("");
        setCurrentItemExtra("");
        setCurrentItemDate("");
    };

    return React.createElement(
        "div",
        null,
        React.createElement(ListGroupItem, { itemName: currentItemName, itemDesc: currentItemDesc, itemExtra: currentItemExtra, itemDate: currentItemDate }),
        React.createElement("hr", null),
        items.map(function (item, index) {
            return React.createElement(
                "div",
                { key: index, className: "list-group" },
                item.itemName == null ? "" : React.createElement(ListGroupItem, { itemName: item.itemName, itemDesc: item.itemDesc, itemExtra: item.itemExtra, itemDate: item.itemDate })
            );
        }),
        React.createElement("hr", null),
        React.createElement(
            "div",
            { className: "form-horizontal" },
            React.createElement("input", { className: "form-control", value: currentItemName, onChange: function onChange(e) {
                    return setCurrentItemName(e.target.value);
                } }),
            React.createElement("input", { className: "form-control", value: currentItemDesc, onChange: function onChange(e) {
                    return setCurrentItemDesc(e.target.value);
                } }),
            React.createElement("input", { className: "form-control", value: currentItemExtra, onChange: function onChange(e) {
                    return setCurrentItemExtra(e.target.value);
                } }),
            React.createElement("input", { className: "form-control", value: currentItemDate, onChange: function onChange(e) {
                    return setCurrentItemDate(e.target.value);
                } })
        ),
        React.createElement(
            "button",
            { className: "btn btn-primary", type: "button", onClick: addAnother },
            "Add"
        )
    );
};

var domContainer = document.querySelector('#ListItems');
ReactDOM.render(e(ListItems), domContainer);