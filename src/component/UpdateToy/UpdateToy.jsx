import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const updateToys = useLoaderData()
    console.log(updateToys)
    const {name,category,price,quantity,details,photo,rating, _id} =updateToys
    const handelUpdateToy = event =>{
        event.preventDefault()

        const form =event.target;

        const name =form.name.value;
        const category =form.category.value;
        const price =form.price.value;
        const quantity =form.quantity.value;
        const details =form.details.value;
        const photo =form.photo.value;
        const rating =form.rating.value;
        const updateToy ={
            name,category,price,quantity,details,photo,rating
        }

        fetch(`https://toy-marketplace-server-ivory.vercel.app/toyCars/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateToy)
        
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.matchedCount){
                Swal.fire({
                    title: 'Success',
                    text: 'Toy Car Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center my-6">Update Toy</h2>
            <form onSubmit={handelUpdateToy}>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub_category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="url" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url  row */}
                 {/* form name and quantity row */}
                 <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Toy name" className="input input-bordered w-full" />
                        </label>
                    </div>
                   
                </div>

                <input type="submit" value="Update Toy " className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateToy;