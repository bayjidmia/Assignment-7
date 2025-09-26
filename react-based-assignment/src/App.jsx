
import './App.css'
import Banner from './component/banner/Banner'
import Footer from './component/Footer/footer'
import Main from './component/Main/main'
import Navbar from './component/Navbar/Navbar'
import { Suspense } from "react";
   
  const loaddata =fetch('tiket.json').then(res=>res.json())


function App() {
 

  return (
    <>
    <Navbar></Navbar>
       <Banner></Banner>   
          <Suspense fallback={<p>Loading Data...</p> }>
            <Main loaddata={loaddata}></Main>
          </Suspense>
      <Footer></Footer>
      
    </>
  )
}

export default App
