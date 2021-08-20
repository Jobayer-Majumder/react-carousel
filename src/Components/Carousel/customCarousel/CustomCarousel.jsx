import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { cardData } from '../CardData/CardData'
import CarouselCard from '../CarouselCard/CarouselCard'
import { settings } from "../CarouselSetting/CarouselSetting";
import img from '../../../images/Basic-Circle.svg'

export default class CustomCarousel extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    };

    previous() {
        this.slider.slickPrev();
    };

    render() {
        return (
            <div>
                <div className="container mx-auto p-3">
                    <div className="grid grid-cols-3 py-4">
                        <div className="col-span-2 flex space-x-4 items-center font-bold">
                            <button className="pr-4 pl-3 py-1 bg-red-400 text-white rounded">
                                <img src={img} alt="" className='w-2 inline mr-2' />
                                LIVE
                            </button>
                            <p>Upcoming Live Coaching</p>
                        </div>
                        <div className="flex space-x-4 md:space-x-6 justify-end items-center">
                            <IoIosArrowBack onClick={this.previous} className='border text-3xl bg-gray-400 text-white py-1 px-1 rounded cursor-pointer' />
                            <IoIosArrowForward onClick={this.next} className='border text-3xl bg-gray-400 text-white py-1 px-1 rounded cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='container mx-auto'>

                    <Slider {...settings} ref={c => (this.slider = c)}>
                        {
                            cardData.map(data => <CarouselCard data={data} />)
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}
