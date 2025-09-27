import React from 'react';
import image from '../../assets/image.png'
const Banner = ({progress,resolve}) => {
    return (
        <div className='w-full max-w-[1440px] flex gap-6 flex-col mx-auto md:flex-row mb-10'>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  flex-1 h-[200px]'>
             <div className='flex justify-between'>
               <img className='w-[25%] h-[200px] lg:w-[200px]'  src={image} alt="" />
                 <div className=' flex justify-center flex-col font-extrabold text-2xl items-center text-white'>
                <h3>In-Progress</h3>
                <h3>{progress}</h3>
                </div>
               <img className=' rotate-y-180 w-[25%] h-[200px] lg:w-[200px]' src={image} alt="" />
             </div>
             
              
            
            </div> 
          <div className='  bg-gradient-to-r from-[#54CF68] to-[#00827A]  flex-1 h-[200px]'>
              <div className='flex justify-between'>
               <img className='w-[25%] h-[200px] lg:w-[200px]'  src={image} alt="" />
                <div className=' flex justify-center font-extrabold text-2xl items-center flex-col text-white'>
                <h3>Resolved</h3>
                <h3>{resolve}</h3>
             </div>
               <img className=' rotate-y-180 w-[25%] h-[200px] lg:w-[200px]' src={image} alt="" /> 
                
             </div>
             
              
             
           </div> 
             
        </div>
    );
};

export default Banner;