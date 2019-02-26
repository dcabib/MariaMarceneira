import React from 'react';
import Slider from "react-slick";

import slide_1 from '../../resources/images/Foto1.JPG';
import slide_2 from '../../resources/images/Foto2.JPG';
import slide_3 from '../../resources/images/Foto3.JPG';
import slide_4 from '../../resources/images/Foto4.JPG';
import slide_5 from '../../resources/images/Foto5.JPG';
import slide_6 from '../../resources/images/Foto6.JPG';
import slide_7 from '../../resources/images/Foto7.JPG';
import slide_8 from '../../resources/images/Foto8.JPG';
import slide_9 from '../../resources/images/Foto9.JPG';
import slide_10 from '../../resources/images/Foto10.JPG';

const Carrousel = () => {

    const settings = {
        dots: true,
        infinite:true,
        autoplay: true,
        speed: 500
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>

                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`black url(${slide_2}) center bottom no-repeat`,
                            backgroundSize: 'contain',
                            height:`${window.innerHeight}px`,
                        }}
                   ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`black url(${slide_3}) center bottom no-repeat`,
                            backgroundSize: 'contain',
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`black url(${slide_4}) center bottom no-repeat`,
                            backgroundSize: 'contain',
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`black url(${slide_5}) center bottom no-repeat`,
                            backgroundSize: 'contain',
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`black url(${slide_6}) center bottom no-repeat`,
                            backgroundSize: 'contain',
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`black url(${slide_7}) center bottom no-repeat`,
                            backgroundSize: 'contain',
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`black url(${slide_8}) center bottom no-repeat`,
                            backgroundSize: 'contain',
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`black url(${slide_9}) center bottom no-repeat`,
                            backgroundSize: 'contain',
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`black url(${slide_10}) center bottom no-repeat`,
                            backgroundSize: 'contain',
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`black url(${slide_1}) center bottom no-repeat`,
                            backgroundSize: 'contain',
                            height:`${window.innerHeight}px`,
                        }}
                    ></div>
                </div>


            </Slider>
            
        </div>
    );
};

export default Carrousel;