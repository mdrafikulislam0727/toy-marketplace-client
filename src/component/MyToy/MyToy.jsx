import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";

const MyToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [myToys, setMyToy] = useState([])
    const url = ` https://toy-marketplace-server-ivory.vercel.app/toyCars?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [user])

// delete function
    const handleDelete = id => {
        console.log(id)
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


                fetch(`https://toy-marketplace-server-ivory.vercel.app/toyCars/${id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted successful.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== id)
                            setMyToy(remaining)
                        }
                    })

            }
        })
    }
    return (
        <div>
            <h2>My toy section : {myToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>photo</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>details</th>
                            <th>Price</th>
                            <th>Update and Delate</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        myToys.map(myToy =><MyToyRow
                        key={myToy._id}
                        myToy={myToy}
                        handleDelete={handleDelete}
                        ></MyToyRow>)
                       }
                    
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToy;