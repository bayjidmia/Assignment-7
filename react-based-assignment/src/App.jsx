 
import './App.css' 
//  import { ToastContainer } from 'react-toastify'; 
import Banner from './component/banner/Banner'
import Footer from './component/Footer/footer'
import Main from './component/Main/main'
import Navbar from './component/Navbar/Navbar'
import { Suspense, useState } from "react";

   

  const loaddata =fetch('tiket.json').then(res=>res.json())
   

function App() {
   const [progress,setprogress]=useState(0);
    const[resolve,setresolve]=useState(0)

  return (
    <>
    <Navbar></Navbar>
       <Banner progress={progress} resolve={resolve}></Banner>   
          <Suspense fallback={<p>Loading Data...</p> }>
            <Main loaddata={loaddata} progress={progress} setprogress={setprogress} resolve={resolve} setresolve={setresolve} ></Main>
            
          </Suspense>
          
      <Footer></Footer>

      
       
       {/* <ToastContainer /> */}
    </>
  )
}

export default App;
