import React, { Component } from 'react';
import dresswal from '../Shared/Images/dressi.avif';
import dre from '../Shared/Images/dresswal.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import offer from '../Shared/Images/special.avif';
import saree from '../Shared/Images/saree.webp';
import lehanga from '../Shared/Images/lehanga.webp'
import jeans from '../Shared/Images/jeans.jpg'
import cour from '../Shared/Images/cour.jpg'



class BodyComp extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>

                    <div className='row'>
                        <div className='col-8 '>
                            <Carousel controls indicators>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={cour} alt="slide 1" width={900} height={500} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={dresswal} alt="slide 2" width={900} height={500} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={dre} alt="slide 3" width={900} height={500} />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='col-4'>
                            <h1 style={{ fontFamily: 'sans-serif', fontSize: '50', fontWeight: 300 }}>Women's Cloth</h1>
                            <p style={{ marginTop: 20 }}>Welcome to <strong style={{ fontSize: 20, color: 'blue' }}>Women's Cloth</strong> where style meets elegance, and every garment tells a unique story. As a premier destination for fashion-forward women,
                                we curate a diverse collection that celebrates individuality and empowers you to express your authentic self through the art of clothing.</p>
                            <img src={offer} alt='special offer' width={350} style={{ marginTop: 30 }} ></img>

                        </div>


                    </div>
                    <div>
                        <h1>Sample Products</h1>
                        <div className="row">
    
                            <div className="card col-3 m-5">
                                <img className="card-img-top" src={saree} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Saree</h5>
                                        <p className="card-text">Nivi sari – style originally worn in Deccan region; besides the modern nivi, there is also the Nauvari, kaccha or kasta nivi, where the pleats are passed through the legs and tucked into at the back. This allows free movement while covering the legs</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Saree</small>
                                    </div>
                            </div>
                            
                            <div class="card col-3 m-5">
                                <img className="card-img-top" src={lehanga} alt="Card image cap" width={1100} height={450}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Lehanga</h5>
                                        <p className="card-text">The lehenga, lehnga or langa (also known as a ghagra or gagra, chaniya, chaniyo, paavada, or lacha) is a form of ankle-length skirt from the Indian subcontinent. Different patterns and styles of traditional embroidery are used to decorate the aiushi mazumder. Gota patti embroidery is often used for festivals and weddings.</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Lehanga</small>
                                    </div>
                            </div>
                            <div class="card col-3 m-5">
                                <img className="card-img-top" src={jeans} alt="Card image cap" height={460}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Jeans</h5>
                                        <p className="card-text">Jeans are a type of pants or trousers made from denim or dungaree cloth. Often the term "jeans" refers to a particular style of trousers, called "blue jeans", with copper-riveted pockets which were invented by Jacob W.</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Jeans</small>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
        );
    }
}

export default BodyComp;