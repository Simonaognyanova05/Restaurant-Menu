import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteDish } from '../services/deleteDish';

export default function Delete() {
    const navigate = useNavigate();
    const { dishId } = useParams();

    useEffect(() => {
        deleteDish(dishId)
            .then(() => {
                navigate('/'); 
            })
            .catch((error) => {
                console.error("Error deleting dish:", error);
            });
    }, [dishId, navigate]);

    return null;
}
