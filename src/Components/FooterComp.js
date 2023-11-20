import React, { Component } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FooterComp extends Component {
    constructor() {
        super();
        this.state = {
            email: ''
        };
    }

    handleSubmit = (event) => {

        event.preventDefault();
        axios.post('http://localhost:3001/subscriptions', { email: this.state.email })
            .then(res => {
                alert("Thanks for Subscribing!")
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <div>
                    <footer className="bg-dark text-center text-white">
                        <div className="container p-4">
                            <section className="mb-4">
                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" >
                                    <FacebookIcon />
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <TwitterIcon />
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <GoogleIcon />
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <InstagramIcon />
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <LinkedInIcon />
                                </a> 
                            </section>

                            <section>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-auto">
                                            <p className="pt-2">
                                                <strong>Sign up for our newsletter</strong>
                                            </p>
                                        </div>
                                        <div className="col-md-5 col-12">
                                            <div className="form-outline form-white mb-4">
                                                <input type="email" id="subscriberEmail" name="subscriberEmail" className="form-control" placeholder='Email Address' onChange={(e) => this.setState({ email: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-outline-light mb-4">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>

                            <section className="mb-4">
                                <p>
                                    Quality is at the heart of everything we do. We source the finest fabrics and collaborate with skilled artisans to ensure each garment is a masterpiece of craftsmanship. Our commitment to sustainability is reflected in our eco-friendly practices, making fashion not just beautiful but responsible too.
                                </p>
                            </section>

                            <section>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                        <h5 className="text-uppercase">Home</h5>

                                        <div className="list-unstyled mb-0">
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 1</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 2</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 3</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 4</a>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                        <h5 className="text-uppercase">Menu</h5>

                                        <div className="list-unstyled mb-0">
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 1</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 2</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 3</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 4</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                        <h5 className="text-uppercase">About</h5>

                                        <div className="list-unstyled mb-0">
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 1</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 2</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 3</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 4</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                        <h5 className="text-uppercase">Contact</h5>

                                        <div className="list-unstyled mb-0">
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 1</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 2</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 3</a>
                                            </p>
                                            <p className="mb-0">
                                                <a href="#!" className="text-white">Link 4</a>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>

                        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                            © 2020 Copyright:
                            <a className="text-white" href="">
                                Women's Cloth
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default FooterComp;
