import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    const toyDetails =useLoaderData()
    const {photo,price,quantity,seller,rating,name,email,details,category} =toyDetails
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-2 text-2xl font-bold">Seller Name :{seller}</p>
            <p className="py-2 text-2xl font-bold">Seller Email :{email}</p>
            <p className="py-2 text-2xl font-bold">Category :{category}</p>
            <p className="py-2 text-2xl font-bold">Price : {price}</p>
            <p className="py-2 text-2xl font-bold">Quantity :{quantity}</p>
            <p className="py-2 text-2xl font-bold">{details}</p>
            <p className='flex gap-2 items-center my-2'>
          <Rating style={{ maxWidth: 200 }} value={Math.round(rating || 0)} readOnly/>
          <span className='text-2xl font-bold'>{rating}</span>
          </p>
            <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;