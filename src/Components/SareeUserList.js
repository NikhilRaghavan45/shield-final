import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Table.css';


const SareeUserList = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3001/sareeuser`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);
   

    return (
        <div className='container mt-5 '>
            <h3 className=' d-flex justify-content-center'>Product List</h3>
            <table className='table table-striped'>
                <thead>
                    <tr className='bg-secondary'>
                        <th>ID</th>
                        <th>Saree Name</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.price}</td>

                           
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SareeUserList;
