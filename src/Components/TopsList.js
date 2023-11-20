import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Table.css';


const TopsList = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3001/tops`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);
    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure want to delete");
        if (confirm) {
            axios.delete(`http://localhost:3001/tops/${id}`)
                .then(res => {
                    window.location.reload()
                }).catch(err => console.log(err))
        }
    }

    return (
        <div className='container mt-5 '>
            <h3 className=' d-flex justify-content-center'>Product List</h3>
            <div className=' d-flex justify-content-end'>
                <Link to="/addtops" className="btn btn-success">AddProduct
                </Link>{"\n"}
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr className='bg-secondary'>
                        <th>ID</th>
                        <th>Tops Name</th>
                        <th>Price</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.price}</td>

                            <td>
                                {/* <Link to="/edit" className='btn btn-sm btn-primary me-2'>View</Link> */}
                                <Link to={`/edittops/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                {/* <Link to="/delete" className='btn btn-sm btn-danger me-2' onClick={e => handleDelete(d.id)}>Delete</Link> */}
                                <button className='btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>

                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TopsList;
