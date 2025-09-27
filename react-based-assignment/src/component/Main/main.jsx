import React, { use } from 'react';
 
import Showdata from '../showdata/Showdata';
import Historysection from '../historysection/Historysection';

const Main = ({loaddata,progress,setprogress,resolve,setresolve}) => {
   
    const loadtiket =use(loaddata)
       const [history, setHistory]=React.useState([])
       const handleCardClick = (ticket) => {
    setHistory((prev) => [...prev, ticket]);
  };
    return (
        
       
        <div>
            <h1 className='text-[#34485A] font-bold max-w-[1440px] mx-auto '>Customer Tickets</h1>
             <div className='max-w-[1440px] mx-auto   py-10 gap-7 grid 
             grid-cols-1 lg:grid-cols-12'>
           
             <div className=' col-span-1 md:col-span-7 gap-3 grid grid-cols-1 sm:grid-cols-2'>
               
                 {
             loadtiket.map(tiket=><Showdata key={tiket.id} tiket={tiket}
             handleCardClick={handleCardClick} progress={progress} setprogress={setprogress} ></Showdata>)
            } 
             </div>

             <div className=' md:col-span-7 lg:col-span-5 bg-white'>
                <Historysection history={history} resolve={resolve} setresolve={setresolve} progress={progress} setprogress={setprogress} ></Historysection>
                
             </div>
        </div>
          
        </div>
         
       
    );
};

export default Main;