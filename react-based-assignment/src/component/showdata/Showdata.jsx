import { toast } from "react-toastify";




const Showdata = ({tiket,handleCardClick,progress,setprogress}) => {
     const { id, title, description, customer, priority, status, createdAt } = tiket;
     
  
   const bgColor =
   status === "Open"
       ? "bg-[#B9F8CF] text-[#0B5E06]"
       : status === "In- Progress"
       ? "bg-[#F8F3B9] text-[#9C7700]"
       : "bg-gray-200";

       const textColor =
       priority==="HIGH PRIORITY"?"text-[#F83044]"
       :priority==="MEDIUM PRIORITY"?"text-[#FEBB0C]"
       :"text-[#02A53B]";
      
    
    return (
        <div onClick={() =>{ handleCardClick(tiket)
          setprogress(progress+1); toast('hello friend')
        }} class="card  p-4  bg-base-100 card-xs shadow-lg ">
          <div className="flex justify-between text-center">
            <h2 className="text-[#001931] md:font-normal lg:font-semibold">{title} </h2>
             <button className={`flex items-centercenter border-none w-auto gap-2 rounded-3xl p-1 ${bgColor}`}><img className="w-4 h-4 text-center" src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png" alt="" />{status}</button>
          </div>
          <div className="mb-2 mt-2">
            <h3 className="text-[#627382]">{description}</h3>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 ">
             <p className="text-[#627382]">#{id}</p>
             <p className={`${textColor} `}>{priority}</p>
            </div>
            <div className="flex gap-1 text-[#627382]">
              <p>{customer}</p>
              <p>{createdAt}</p>

            </div>
          </div>
        </div>
    )};
            
          

export default Showdata;