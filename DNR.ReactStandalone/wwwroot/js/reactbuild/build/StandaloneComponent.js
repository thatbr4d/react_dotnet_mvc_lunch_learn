'use strict';

const e = React.createElement;

const StandaloneComponent = () => {
    const [items, setItems] = React.useState(["apple", "orange"])
    const [currentItem, setCurrentItem] = React.useState("")

    const addAnother = () => {
        setItems([...items, currentItem]);
        setCurrentItem("");
    }

    return (
        <div>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <input value={currentItem} onChange={(e) => setCurrentItem(e.target.value)} />
            <button type="button" onClick={addAnother}>Add</button>

            <input type="hidden" id="hiddenItems" value={items} />
        </div>
    )
}

const domContainer = document.querySelector('#myReactContainer');
ReactDOM.render(e(StandaloneComponent), domContainer);
