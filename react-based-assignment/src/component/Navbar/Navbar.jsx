import React from 'react';
import Container from '../container/Container';

const Navbar = () => {
    return (
        <div>
            <div class=" bg-base-100 shadow-sm mb-8">
              <div className='max-w-[1200px] p-5 mx-auto flex'>
                    
               <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
        </li>
         <li><a>Item 3</a></li>
          <li><a>Blog</a></li>
         <li ><a>Download</a></li>
         <li><a>Contact</a></li>
         
      </ul>
    </div>
    <a class="btn btn-ghost  md:text-xl font-bold">CS — Ticket System</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          
        </details>
      </li>
      <li><a>Item 3</a></li>
      <li><a>Blog</a></li>
      <li ><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn text-white rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"> + New Ticket</a>
  </div>
            
              </div>
              
              </div>
            
        </div>
    );
};

export default Navbar;