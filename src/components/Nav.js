import React from 'react';
import {Link} from 'react-router-dom';


const Nav= () => {

    return(
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <span class="ml-3 text-4xl text-white">BookMoviesNow</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button class=" bg-red-500 mr-5 hover:text-gray-900 rounded px-4 py-2 text-white">Home</button>
            <Link to="/signup" ><button class="bg-red-500 mr-5 hover:text-gray-900 rounded px-4 py-2 text-white">Signup</button> </Link>
            <Link to="/signin" ><button class="bg-red-500 mr-5 hover:text-gray-900 rounded px-4 py-2 text-white">Signin</button> </Link>
           
          </nav>
        </div>
      </header>

    );

}
export default Nav;