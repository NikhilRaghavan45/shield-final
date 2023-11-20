import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditLehenga = () => {
    const { id } = useParams();
    const nav = useNavigate();

    const [product, setProduct] = useState({
        id: 1,
        name: "",
        price: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:3001/lehenga/${id}`)
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
        axios.put(`http://localhost:3001/lehenga/${id}`,product)
            .then((res) => {
              window.alert("lehenga details updated successfully");
             
                nav("/lehenga");
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
                        <label htmlFor='BranchName'><strong>Product Name :</strong> </label>
                        <input type='text' name='name' className='form-control' placeholder='Enter product name' 
                        onChange={inputHandler} value={product.name} />
                    </div>
                    
                    <div  className='mb-2'>
                        <label htmlFor='Location'><strong>Price:</strong> </label>
                        <input type='number' name='price' className='form-control' placeholder='Enter price'
                          onChange={inputHandler} value={product.price} />
                    </div>
                   
                    <div className='pt-3'>
                    <button className='btn btn-success'>Update</button>
                    <Link to={`/lehenga`} className='btn btn-primary ms-3'>Back</Link>
                    </div>
                </form>

            </div>
            
        </div>
    );
}

export default EditLehenga;