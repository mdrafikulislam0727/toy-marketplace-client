import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyRow = ({ myToy }) => {
    const { price, quantity, details, photo, category, _id } = myToy;
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://toy-marketplace-server-ivory.vercel.app/toyCars${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <tr>
            <th>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {category}
            </td>
            <td>
                {quantity}
            </td>
            <td>
                {details}
            </td>
            <td>{price}</td>
            <th>
                <Link to={`/updateToy/${_id}`}><button className="btn btn-sm me-3">Update</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm">Delete</button>
            </th>
        </tr>
    );
};

export default MyToyRow;