import React from 'react'

const NavbarComponent = () => {

  return (
    <div>
      <div className="navbar absolute">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
          <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="" className=" w-20 h-12" />
          
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-gray-100">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#home">Home</a></li>
            <li><a href="#populer">Populer</a></li>
            <li><a href="#Romance">Romance</a></li>
            <li><a href="#Anime">Anime</a></li>
          </ul>
        </div>
        <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
      </div>
    </div>
  )
}

export default NavbarComponent;
