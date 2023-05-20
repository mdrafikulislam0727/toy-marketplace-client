import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
    const updateToys =useLoaderData()
    
    return (
        <div>
            <h2>update Toy</h2>
        </div>
    );
};

export default UpdateToy;