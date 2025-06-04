import { Link } from "react-router-dom";

export default function MenuItem({ dish, admin }) {
    const loggedAdmin = (
        <div className="menu-item-actions">
            <Link className="edit-button" to={`/edit/${dish._id}`}>Edit</Link>
            <Link className="delete-button" to={`/delete/${dish._id}`}>Delete</Link>
        </div>
    );
    return (
        <>
            <div className="menu-item">
                <span className="menu-item-name">{dish.name}</span>
                <span className="menu-item-description">{dish.description}</span>
                <span className="menu-item-price">{dish.price} лв.</span>

                {
                    admin._id ? loggedAdmin : '' 
                }
            </div>


        </>
    );
}