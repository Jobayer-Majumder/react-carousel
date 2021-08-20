import React from 'react';
import { MdLiveTv } from 'react-icons/md'
import { CgNotes } from 'react-icons/cg'
import { BiShapeTriangle } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs'


const CarouselCard = ({data}) => {
    const {title, img, classes, questions, notes, timeRemaining} = data;

    return (
        <>
            <div className="px-5 text-gray-600">
                <div className="shadow-lg rounded-md transform hover:scale-105 duration-500 overflow-hidden cursor-pointer">
                    <div className="">
                        <img src={img} alt="" className='rounded-t-lg w-full'/>
                        <h2 className='text-white bg-indigo-500 py-2 px-4'><BsClock className='inline mr-2' /> {timeRemaining}</h2>
                    </div>
                    <div className="px-4 py-5">
                        <h2 className='font-bold text-2xl pb-6'>{title}</h2>
                        <hr />
                        <div className="flex justify-start items-center pt-5 pb-2">
                            <MdLiveTv className='inline mr-2' style={{color: '#E08783'}}/>
                            <h3 className='font-medium'>{classes}+ Live Classes</h3>
                        </div>
                        <div className="flex justify-between pt-2">
                            <div className="flex justify-center items-center">
                                <CgNotes className='inline mr-2' style={{color: '#ED9D3D'}}/>
                                <h3 className='font-medium'>{questions}+ Questions</h3>
                            </div>
                            <div className="flex justify-center items-center">
                                <BiShapeTriangle className='inline mr-2' style={{color: '#D05651'}}/>
                                <h3 className='inline font-medium'> {notes}+ Notes</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselCard;