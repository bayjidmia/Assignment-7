import React, { useState } from 'react';

const Historysection = ({history,progress,setprogress,resolve,setresolve}) => {
     const [resolved, setResolved] = useState([]);

      const handleResolve=(tiket)=>{
        setResolved((prev) => [...prev, tiket]);
      }
      
      
    return (
        <div>
             <h2 className="text-xl font-bold mb-4 text-center">Task Status</h2>
      {history.length === 0 ? (
        <p className="text-gray-500 text-center">No history yet.</p>
      ) : (
        <div className="space-y-3">
          {history.map((h, index) => (
            <div key={index} className="card  p-4  bg-base-100 card-xs shadow-lg">
              <h3 className="font-semibold">{h.title}</h3>
              <button onClick={()=>{handleResolve(h)
                setresolve(resolve+1);setprogress(progress-1)
                 }} class="btn btn-active btn-success text-white">Complete</button>
            </div>
          ))}
        </div>
      )}

        <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-center">Resolved Tasks</h2>
        {resolved.length === 0 ? (
          <p className="text-gray-500 text-center">No resolved tasks yet.</p>
        ) : (
          <div className="space-y-3">
            {resolved.map((r, idx) => (
              <div
                key={idx}
                className="card p-4 bg-[#E0E7FF] shadow-md flex items-center"
              >
                <h3 className="text-[#001931] font-medium">{r.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>




      </div>)}
      
  
   
    
  

    
    
    
      


      
      
        


export default Historysection;


