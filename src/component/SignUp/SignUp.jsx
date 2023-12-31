import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const SignUp = () => {
    const {createUser} =useContext(AuthContext)
    const handelSignUp = event =>{
        event.preventDefault()
        const form =event.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        const photo =form.photo.value;
        console.log(name,email,password,photo)

        createUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user)
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                name: name, photoURL:photo
            }).then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
               console.log(error)
            })
        })
        .catch(error=>console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200 py-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-3xl text-center font-bold">Sign Up</h2>
                        <form onSubmit={handelSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" name="photo" placeholder="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="my-4 text-center">Already Have an Account <Link className="text-orange-600 font-bold" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;