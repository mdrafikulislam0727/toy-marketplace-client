import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [myToys, setMyToy] = useState([])
    const url = `http://localhost:5000/toyCars?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [user])
    console.log(myToys)
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
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        myToys.map(myToy =><MyToyRow
                        key={myToy._id}
                        myToy={myToy}
                        ></MyToyRow>)
                       }
                    
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToy;