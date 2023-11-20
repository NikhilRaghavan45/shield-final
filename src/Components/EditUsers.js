import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditUsers = () => {
    const { id } = useParams();
    const nav = useNavigate();

    const [product, setProduct] = useState({
        id: 1,
        fname: "",
        lname: "",
        num: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:3001/users/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
        }, [id]);

    const inputHandler = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const updateProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3001/users/${id}`,product)
            .then((res) => {
              window.alert("User details updated successfully");
             
                nav("/users");
            })
            .catch((err) => {
                window.alert(`error${id}`)
                console.error(err);
            });
    };

    return (
       
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2 className='mb-4'> Update Product</h2>
                <form onSubmit={updateProduct}>
                    <div className='mb-2'>
                        <label htmlFor='BranchName'><strong>First Name :</strong> </label>
                        <input type='text' name='fname' className='form-control' placeholder='Enter first name' 
                        onChange={inputHandler} value={product.fname} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='BranchName'><strong>last Name :</strong> </label>
                        <input type='text' name='lname' className='form-control' placeholder='Enter first name' 
                        onChange={inputHandler} value={product.lname} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='BranchName'><strong>Mobile No:</strong> </label>
                        <input type='text' name='num' className='form-control' placeholder='Enter first name' 
                        onChange={inputHandler} value={product.num} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='BranchName'><strong>Email:</strong> </label>
                        <input type='text' name='email' className='form-control' placeholder='Enter first name' 
                        onChange={inputHandler} value={product.email} />
                    </div>
                    
                    <div  className='mb-2'>
                        <label htmlFor='Location'><strong>Password:</strong> </label>
                        <input type='text' name='password' className='form-control' placeholder='Enter price'
                          onChange={inputHandler} value={product.password} />
                    </div>
                   
                    <div className='pt-3'>
                    <button className='btn btn-success'>Update</button>
                    <Link to={`/users`} className='btn btn-primary ms-3'>Back</Link>
                    </div>
                </form>

            </div>
            
        </div>
    );
}

export default EditUsers;