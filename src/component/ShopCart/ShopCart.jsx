import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';


const ShopCart = ({toy}) => {
    const { name,price,photo,rating,_id}=toy || {};
    console.log(toy)
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className='font-bold'>Price : $ {price}</p>
          <p className='flex justify-center items-center gap-3'>
          <Rating style={{ maxWidth: 150 }} value={(rating)} readOnly/>
          <span className='text-2xl font-bold'>{rating}</span>
          </p>
          <div className="card-actions">
          <Link to={`/shopCategoryDetails/${_id}`}><button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ShopCart;