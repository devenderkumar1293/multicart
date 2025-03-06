import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useState } from "react";
import { Products } from './Product';
import SpecialProducts from "./SpecialProducts";
// import Shop from "./Shop";


function Home() {
    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="slider_slick">
                <Slider {...settings}>
                    <div className="first_img_slide">
                        <div className="container text-center">
                            <div className="row hero_slider_height">
                                <div className="hero_first_div">
                                    <h4 className="hero_subtitle text_big">welcome to fashion</h4>
                                    <h1 className="hero_heading text_big">Men fashion</h1>
                                    <a className="btn-solid btn text_big" href="/shop">Shop Now</a>
                                </div>
                                <div className="hero_first_div_2">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second_img_slide">
                        <div className="container text-center">
                            <div className="row hero_slider_height">
                                <div className="hero_first_div">
                                    <h4 className="hero_subtitle text_big">welcome to fashion</h4>
                                    <h1 className="hero_heading text_big">Women fashion</h1>
                                    <a className="btn-solid btn text_big" href="#">Shop Now</a>
                                </div>
                                <div className="hero_first_div_2">

                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div>
                <div className="container section_space">
                    <div className="row justify-space-between second_section">
                        <div className="col-6">
                            <a href="#">
                                <div className="img_box">
                                    <img src="sub-banner1.5d5f9c6f.jpg"></img>
                                    <div className="contain-banner">
                                        <div>
                                            <h4 className="color_red text_big">10% off</h4>
                                            <h2 className="text_big">men</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="#">
                                <div className="img_box">
                                    <img src="sub-banner2.3b2448f3.jpg"></img>
                                    <div className="contain-banner">
                                        <div>
                                            <h4 className="color_red text_big">10% off</h4>
                                            <h2 className="text_big">women</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container section_space">
                <div className="third_section">
                    <h4 className="color_red text_big">special offer</h4>
                    <h3 className="title-inner1 text_big">Top collection</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    {/* <p>This color is {color}</p>
                    <button onClick={
                        () => setColor("Black")
                    }>Click me</button> */}
                </div>

                <div className="Product">
                    {Products.map((product) => (
                        <div key={product.id}>
                            <div className="hover_image_box">
                                <img className="product_image" src={product.Image}></img>
                                <img className="hover_image" src={product.Hover_imgae}></img>
                            </div>
                            <h3>{product.Title}</h3>
                            <p>{product.Price}</p>
                            <p>{product.Description}</p>
                        </div>
                    )
                    )}
                </div>
            </div>

            <div className="background_image">
                <div className="container">
                    <div className="row">
                        <div className="hero_first_div">
                            <h2 className="color_red">2024</h2>
                            <h3 className="text_big ">fashion trends</h3>
                            <h4 className="text_big ">special offer</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container special_product section_space">
                <div className="third_section">
                    <h4 className="color_red text_big">exclusive products</h4>
                    <h3 className="title-inner1 text_big">special products</h3>
                </div>
                <SpecialProducts />
            </div>

            {/* <div className="container">
                    <Shop text="This is shop page content" />
            </div> */}

            <div className="container">
                <div className="row border-section small-section">
                    <div className="col-4">
                        <div className="row">
                            <div>
                                <img src="img/truck.png"></img>
                            </div>
                            <div>
                                <h4 className="text_big">free shipping</h4>
                                <p>Free Shipping World Wide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div>
                                <img src="img/24.png"></img>
                            </div>
                            <div>
                                <h4 className="text_big">24 X 7 service</h4>
                                <p>Online Service For 24 x 7</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div>
                                <img src="img/horn.png"></img>
                            </div>
                            <div>
                                <h4 className="text_big">festival offer</h4>
                                <p>New Online Special Festival Offer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container section_space ">
                <div className="third_section">
                    <h4 className="color_red text_big">our collection</h4>
                    <h3 className="title-inner1 text_big">special products</h3>
                </div>
            </div>
        </>
    );
}
export default Home;
