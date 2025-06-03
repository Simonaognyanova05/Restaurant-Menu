import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getDishes } from "../../services/getDishes";
import MenuItem from "./MenuItem";

export default function Menu() {
    const [dishes, setDishes] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        getDishes(category)
            .then(res => {
                setDishes(res);
            })
    }, [dishes])
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h1>Gourmet Bistro</h1>
                <p>Деликатесни ястия, приготвени с любов</p>

            </div>

            <div className="menu-section" id="appetizers">
                {
                    dishes.map((x) => <MenuItem key={x._id} dish={x}/>)
                }
                
            </div>

        </div>

    );
}