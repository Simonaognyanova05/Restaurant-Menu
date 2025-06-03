export default function MenuItem({dish}) {
    return (
        <>
            <h2>{dish.category}</h2>
            <div className="menu-item">
                <span className="menu-item-name">{dish.name}</span>
                <span className="menu-item-description">{dish.description}</span>
                <span className="menu-item-price">{dish.price} лв.</span>
            </div>
        </>
    );
}