import React, {useState} from "react";
import axios from 'axios';
import { useNavigate, Link} from "react-router-dom";
//import { ToastContainer, toast } from 'react-toastify';

 function Login(){

    let history = useNavigate();
    let userDetails;
    let userOne;
    let presentUser;
    let isUserPresent=false;
    let loggedInUser;

    const [details, setDetails] = useState({
        "uuid": "",
        "username": "",
        "password": "",
        "salt": "",
        "md5": "",
        "sha1": "",
        "sha256": ""
    });

   // const api = "http://localhost:3005/users";

    const { username, password} = details;

    const onInputChange = e => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    //const [error, setError] = useState("");

    const onSubmit = async e => {
        e.preventDefault();
        if(!details.username, !details.password){
            alert('Enter all the fields');
         }
        //else{ 
        //     await axios.get(`https://randomuser.me/api/?results=500`)
        //     .then((response) => {
        //         userDetails=response;
        //         userOne= userDetails.data;
        //     });
        //     console.log("userDetails", userDetails);
        //     console.log("userOne", userOne);
        //     history.push(`/api/?page=1&results=20`);
            
        //     userOne['results'].forEach(element => {
        //         if(element.username!==undefined && (element.username.toLowerCase() === details.username.toLowerCase()) && element.password !==undefined && (element.password.toLowerCase() === details.password.toLowerCase())){
        //             presentUser=element;
        //             isUserPresent=true;
        //             return presentUser;
        //         }
        //     })
        //     console.log("presentUser", presentUser);
        //     if(isUserPresent){  
        //     await axios.get(`https://randomuser.me/api/?results=500/${presentUser.uuid}`)
        //         .then((response) => {
        //             console.log("response",response);
        //             if(response.data!=null){
        //                 loggedInUser = response.data
        //             };
        //             console.log("loggedInUser", loggedInUser);
        //         })
        //         setDetails(""); 
                
        //     }else{
        //         alert("Ooops... User not found");
        //     }
        // }
    };

    return(
        <div className="row" style={{marginTop:"100px"}}>
            {/* <ToastContainer/> */}
            <div className=" col-sm-12 col-md-4 mx-auto shadow p-4 border">
                <h2 className="text-center mb-4">Login to see all users</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group pb-3">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your User Name"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group pb-3">
                        <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/* <button className="btn btn-primary btn-block" > Log In </button> */}
                    <Link className="btn btn-primary btn-block" to="/home">
                    Login
                    </Link> 
                </form>
            </div>
        </div>
    );
}

export default Login;