import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyDetails =useLoaderData()
    console.log(toyDetails)
    return (
        <div>
            <h2>This is Toy details</h2>
        </div>
    );
};

export default ToyDetails;