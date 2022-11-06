import React from 'react';
import Logo from './logo/Logo';
import Nav_bar from './nav-bar/Nav-bar';

import Search from './search-bar/Search';
import Wishlit from './wishlit/Wishlist';
import Shop from './shop/Shop';
import Compte from './compte/Compte';
import '../../assets/style/App.css';

export default function Header ()  {
    return (
        <>
        <div className="top">
            <div className="Header">
                <Logo />
                <div className="nav-bar">
                <Nav_bar />
                </div>
                <div className="nav-search">
                
                <Search />
                </div>
                <div className="compte">
                    <Shop />
                    <Wishlit/>
                    <Compte/>

                </div>
            </div>
           
        </div>
          
        </>
    )
}

