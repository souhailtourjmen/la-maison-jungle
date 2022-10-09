
import Logo from './logo/Logo';
import Nav_bar from './nav-bar/Nav-bar';
import Slide from '../../assets/img/slide1.png';
import Search from './search-bar/Search';
import '../../assets/style/App.css';

export default function Header ()  {
    return (
        <>
        <div className="top">
        <div className="slide">
            <img src={Slide}></img>
        </div>
            <div className="Header">
                <Logo />
                <div className="nav-bar">
                <Nav_bar />
                </div>
                <div className="nav-search">
                
                <Search />
                </div>
                <div className="compte">

                </div>
            </div>
           
        </div>
          
        </>
    )
}

