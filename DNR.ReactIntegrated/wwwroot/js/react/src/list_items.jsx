import {ListGroupItem} from "./list_group_item.js";

'use strict';

const e = React.createElement;

const ListItems = () => {
    const [items, setItems] = React.useState([{itemName: null, itemDesc: null, itemExtra: null, itemDate: null}])
    const [currentItemName, setCurrentItemName] = React.useState("")
    const [currentItemDesc, setCurrentItemDesc] = React.useState("")
    const [currentItemExtra, setCurrentItemExtra] = React.useState("")
    const [currentItemDate, setCurrentItemDate] = React.useState("")

    const addAnother = () => {
        setItems([...items, {itemName: currentItemName, itemDesc: currentItemDesc, itemExtra: currentItemExtra, itemDate: currentItemDate}]);
        setCurrentItemName("");
        setCurrentItemDesc("");
        setCurrentItemExtra("");
        setCurrentItemDate("");
    }

    return (
        <div>
            <ListGroupItem itemName={currentItemName} itemDesc={currentItemDesc} itemExtra={currentItemExtra} itemDate={currentItemDate}  />
            <hr />

                {
                    items.map((item, index) => (
                        <div key={index} className="list-group">
                            {item.itemName == null ? "" : 
                                <ListGroupItem itemName={item.itemName} itemDesc={item.itemDesc} itemExtra={item.itemExtra} itemDate={item.itemDate}  />
                            }
                        </div>
                    ))
                }

            <hr />
            <div className="form-horizontal">
                <input className="form-control" value={currentItemName} onChange={(e) => setCurrentItemName(e.target.value)} />
                <input className="form-control" value={currentItemDesc} onChange={(e) => setCurrentItemDesc(e.target.value)} />
                <input className="form-control" value={currentItemExtra} onChange={(e) => setCurrentItemExtra(e.target.value)} />
                <input className="form-control" value={currentItemDate} onChange={(e) => setCurrentItemDate(e.target.value)} />
            </div>

            <button className="btn btn-primary" type="button" onClick={addAnother}>Add</button>
        </div>
    )
}

const domContainer = document.querySelector('#ListItems');
ReactDOM.render(e(ListItems), domContainer);
