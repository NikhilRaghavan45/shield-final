import React, { useState } from 'react'
import axios from 'axios';
// import './Contact.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'





const ContactComp = () => {
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        contact: '',
        message: ''
    })
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {

            const response = await axios.post('http://localhost:3001/contacts', formData);

            console.log('User created:', response.data);
            window.alert('Message Send Successfull')


        } catch (error) {
            console.error('Error creating user:', error);
        }
    }



    return (
        <div>
            <div className="container">
                <div><h1>Contact Us</h1></div>
                <br />
                <div className='row col-12'>
                    <div className="col-6">
                        <form className="my-form" onSubmit={handleSubmit}>
                            <div class="form-group ">
                                <label for="fname"><b>Name</b></label>
                                <input type='text' name='fname' className='form-control' placeholder='Enter full name'
                                    onChange={handleChange} />
                            </div>


                            <div class="form-group mt-3">
                                <label for="email "><b>Email Address</b></label>
                                <input type='email'
                                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                    name='email' className='form-control' placeholder='Enter email'
                                    onChange={handleChange} />
                            </div>


                            <div class="form-group mt-3">
                                <label for="tel"><b>Contact</b></label>
                                <input type="tel" className="form-control" name='contact' pattern="[789][0-9]{9}"
                                    onChange={handleChange} placeholder="contact" />
                            </div>


                            <div class="form-group mt-3">
                                <label for="form-message" ><b>Email your Message</b></label>
                                <textarea class="form-control" id="form-message" name='message'
                                    onChange={handleChange} placeholder="message"></textarea>
                            </div>


                            <button class="btn btn-info" type="submit" style={{ marginTop: 20 }}>Contact Us</button>
                        </form>
                    </div>
                    <div className='col-6'>
                        <div id="map-container-google-2" className="z-depth-1-half map-container">
                            <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                                style={{ border: 0, height: 300, width: 600 }} allowfullscreen title="Google Map of Chicago"></iframe>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}


export default ContactComp