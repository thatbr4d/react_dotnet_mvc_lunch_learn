

export var ListGroupItem = function ListGroupItem(_ref) {
    var itemName = _ref.itemName,
        itemDesc = _ref.itemDesc,
        itemExtra = _ref.itemExtra,
        itemDate = _ref.itemDate;


    return React.createElement(
        "a",
        { href: "#", className: "list-group-item list-group-item-action" },
        React.createElement(
            "div",
            { className: "d-flex w-100 justify-content-between" },
            React.createElement(
                "h5",
                { className: "mb-1" },
                itemName
            ),
            React.createElement(
                "small",
                null,
                itemDate
            )
        ),
        React.createElement(
            "p",
            { className: "mb-1" },
            itemDesc
        ),
        React.createElement(
            "small",
            null,
            itemExtra
        )
    );
};