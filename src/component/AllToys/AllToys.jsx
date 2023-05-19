import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
    const toyCars = useLoaderData();
    console.log(toyCars)
    return (
        <div>
            <div className="text-center my-6">
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mx-auto" />
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Car</th>
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
                                <td>{toyCar.name}</td>
                                <td>{toyCar.category}</td>
                                <td>{toyCar.price}</td>
                                <td>{toyCar.quantity}</td>
                                <Link to={`/toyDetails/${toyCar._id}`}><button className="btn mt-4">View Details</button>
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