import React, { Component } from 'react';
import saree1 from '../Shared/Images/saree1.webp'
import saree2 from '../Shared/Images/saree2.jpg'
import saree3 from '../Shared/Images/saree3.webp'
import saree4 from '../Shared/Images/saree4.webp'
import saree5 from '../Shared/Images/saree5.webp'
import saree6 from '../Shared/Images/saree6.webp'
import saree7 from '../Shared/Images/saree7.webp'
import lehanga1 from '../Shared/Images/lehanga1.webp'
import lehanga2 from '../Shared/Images/lehanga2.webp'
import lehanga3 from '../Shared/Images/lehanga3.webp'
import lehanga4 from '../Shared/Images/lehanga4.webp'
import jeans1 from '../Shared/Images/jeans1.webp'
import jeans2 from '../Shared/Images/jeans2.webp'
import jeans3 from '../Shared/Images/jeans3.webp'
import jeans4 from '../Shared/Images/jeans4.webp'
import hood1 from '../Shared/Images/hood1.jpg'
import hood2 from '../Shared/Images/hood2.jpg'
import hood3 from '../Shared/Images/hood3.jpg'

class MenuComp extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row  row-cols-md-5 g-4">
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={saree1} className="card-img-top" alt="Product Image" />
                        </div>  <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Kanji saree</h5>
                                <p className="card-text">₹ 3740</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={saree2} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Banarasi saree</h5>
                                <p className="card-text">₹ 8750</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={saree3} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Baluchari saree</h5>
                                <p className="card-text">₹ 3750</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={saree4} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Chanderi saree</h5>
                                <p className="card-text">₹ 1550</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body">  <img src={saree5} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Sambalpuri saree</h5>
                                <p className="card-text">₹ 5750</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={saree6} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Paithani saree</h5>
                                <p className="card-text">₹ 6450</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body">  <img src={saree7} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Banaras pattu</h5>
                                <p className="card-text">₹ 2350</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={lehanga1} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">A-line lehanga</h5>
                                <p className="card-text">₹ 5690</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={lehanga2} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Kali wala lehanga</h5>
                                <p className="card-text">₹ 4550</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={lehanga3} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Circular cut lehanga</h5>
                                <p className="card-text">₹ 7650</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={lehanga4} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Fish cut lehanga</h5>
                                <p className="card-text">₹ 6450</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={jeans1} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Bell bottoms</h5>
                                <p className="card-text">₹ 2350</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={jeans2} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Capri jeans</h5>
                                <p className="card-text">₹ 1450</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"><img src={jeans3} className="card-img-top" alt="Product Image" />
                        </div>  <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Wide leg jeans</h5>
                                <p className="card-text">₹ 2350</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={jeans4} className="card-img-top" alt="Product Image" />
                        </div>  <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Cargo jeans</h5>
                                <p className="card-text">₹ 5450</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"><img src={hood1} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Lace-up Hoodie</h5>
                                <p className="card-text">₹3350</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"><img src={hood2} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Faux Fur Hoodie</h5>
                                <p className="card-text">₹ 6450</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body"> <img src={hood3} className="card-img-top" alt="Product Image" />
                        </div> <div className="card-footer bg-danger text-white">
                                <h5 className="card-title">Cropped Hoodie</h5>
                                <p className="card-text">₹ 4450</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        );
    }
}

export default MenuComp;
