import React, { Component } from 'react'
import './About.css'
import about from '../Shared/Images/about.webp'
import abouth from '../Shared/Images/aboutho.avif'


class AboutComp extends Component {
    render() {
        return (
            <div>
                <div id="about" class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8">
                            <h2><b>About</b></h2><br />
                            <h4>Welcome to Women's Cloth – where fashion meets passion, and every thread tells a story. We are not just a brand; we are a celebration of style, individuality, and the spirit of womanhood. Founded with a vision to redefine the way women experience fashion, Women's Cloth has become synonymous with elegance, quality, and empowerment.</h4><br/>
                            <h4>Our Story</h4><br/>
                                <h4>In the bustling world of fashion, Women's Cloth emerged as a dream nurtured by a group of visionary individuals who shared a common love for style. Our journey began with the simple belief that clothing is more than just fabric stitched together – it's a form of self-expression. Inspired by this philosophy, we embarked on a mission to curate a collection that resonates with the diverse tastes and preferences of the modern woman.</h4>
                                <br/>
                                </div>
                                <div class="col-sm-4">
                                    <img src={about} width={400} alt='about'></img>
                                </div>
                        </div>
                    </div>

                    <div class="container-fluid bg-grey">
                        <div class="row">
                            <div class="col-sm-4">
                                <img src={abouth} alt='about' width={300}></img>
                            </div>
                            <div class="col-sm-8">
                                <br/>
                                <h3><b>Our Values</b></h3><br />
                                <h4><h2>MISSION</h2>At Women's Cloth, our mission is to empower women through fashion, fostering confidence and self-expression. We are dedicated to providing a curated collection of clothing that celebrates individuality, embraces diversity, and promotes ethical and sustainable fashion practices.</h4><br/>
                                    <h4><h2>VISION</h2>We envision a world where every woman embraces her unique beauty and expresses her personality through the art of clothing. Our collections are carefully curated to reflect the latest trends while offering timeless pieces that stand the test of time.</h4>
                            </div>
                        </div>
                    </div>

                </div>
    
)
}
}
                
export default AboutComp