import React  from 'react';
const Navbar = () => {
    return ( 
        <nav className="flex justify-between sm:justify-between bg-white p-2">
            <div className="float-left text-2xl text-gray-600 mr-2 mt-3">
                <div className="float-left hidden sm:flex text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 float-left" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </div>
                <span className="font-regular">Contacts</span>
            </div>
            <div className="flex shadow-md float-left rounded w-6/12 float-left">
                <input type="text" className="shadow bg-gray-200 appearance-none border rounded w-full h-full py-2 pl-4 pr-2 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" name="search" id="search" placeholder="Search"/>
            </div>
            <div className="flex p-3 text-gray-500">
                <div className="float-right">
                    <ul className="flex">
                        <li className="mr-6 pt-2 hidden sm:flex"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </li>
                        <li className="mr-6"><svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 float-left" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg></li>
                    </ul>
                </div>
            </div>
      </nav>
     );
}
 
export default Navbar;