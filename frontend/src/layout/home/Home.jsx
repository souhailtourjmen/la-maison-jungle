import React from 'react';
import '../../assets/style/App.css';
import Slide from '../../assets/img/slide1.png';
function Home() {
  return (
    <>
    <section className="main">
        <div className="container">
            <div className="slide">
                  <img src={Slide}></img>
                 
            </div>
        </div>
       
    </section>
    </>
  );
}

export default Home;