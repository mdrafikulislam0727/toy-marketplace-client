import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useLoaderData } from "react-router-dom";

const ShopCategoryDetails = () => {
    const shopCategoryS = useLoaderData()
    const {price,details,email,photo,quantity,seller,name,rating,category} =shopCategoryS
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
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ShopCategoryDetails;