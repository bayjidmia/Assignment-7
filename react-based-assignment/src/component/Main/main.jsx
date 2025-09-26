import React, { use } from 'react';

const Main = ({loaddata}) => {
    const loadtiket =use(loaddata)
    console.log(loadtiket)
    return (
        <div className='max-w-[1200px] mx-auto'>
           <h1 className='text-[#34485A] font-bold'>Customer Tickets</h1> 
        </div>
    );
};

export default Main;