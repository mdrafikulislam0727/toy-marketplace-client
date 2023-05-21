import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
    const toyCars = useLoaderData();
    console.log(toyCars)
    return (
        <div>
            <div className="form-control text-center mb-4">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Car</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>price</th>
                            <th>Available Quantity</th>
                            <th>view details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toyCars.map((toyCar) => <tr key={toyCar._id}>
                                <td><img className="w-32" src={toyCar.photo} alt="" /></td>
                                <td>{toyCar.seller}</td>
                                <td>{toyCar.name}</td>
                                <td>{toyCar.category}</td>
                                <td>{toyCar.price}</td>
                                <td>{toyCar.quantity}</td>
                                <Link to={`/toyDetails/${toyCar._id}`}><button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">View Details</button>
                                </Link>
                            </tr>)
                        }

                        {/* row 2 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;