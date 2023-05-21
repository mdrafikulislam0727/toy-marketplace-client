import { Link } from "react-router-dom";

const MyToyRow = ({ myToy,handleDelete }) => {
    const { price, quantity, details, photo, category, _id } = myToy;

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