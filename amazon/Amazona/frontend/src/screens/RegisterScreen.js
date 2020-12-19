import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link } from 'react-router-dom';
import { register } from '../actions/UserActions';
import Loadingbox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen (props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const userRegister = useSelector((state) => state.userRegister);
const { userInfo,loading,error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Password and confirmPassword are not match');
        }else{
            dispatch(register( name,email,password));
       }
      
    };
    useEffect (()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[props.history,redirect,userInfo]);
    return(
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>CREATE ACCOUNT</h1>
                </div>
                {loading && <Loadingbox></Loadingbox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    id="name"
                    placeholder="Enter Name"
                    required onChange={(e)=> setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email"> Email Address</label>
                    <input type="email"
                    id="email"
                    placeholder="Enter email address"
                    required onChange={(e)=> setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    id="password"
                    placeholder="Enter password"
                    required onChange={(e)=> setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor=" confirmpassword"> Confirm Password</label>
                    <input type="password"
                    id="confirmpassword"
                    placeholder="Enter confirm password"
                    required onChange={(e)=> setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary block" type="submit"> Register </button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account ?
                        <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}