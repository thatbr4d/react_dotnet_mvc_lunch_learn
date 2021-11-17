

export const ListGroupItem = ({itemName, itemDesc, itemExtra, itemDate}) => {
 
    return (
        <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{itemName}</h5>
                <small>{itemDate}</small>
            </div>
            <p className="mb-1">{itemDesc}</p>
            <small>{itemExtra}</small>
        </a>
    );
    
}

