import React from 'react'
import './Play.css'

import play1 from '../../assets/images/play1.svg'
import play2 from '../../assets/images/play2.svg'
import play3 from '../../assets/images/play3.svg'
import play4 from '../../assets/images/play4.svg'
import play5 from '../../assets/images/play5.svg'
import play6 from '../../assets/images/play6.svg'
import play7 from '../../assets/images/play7.svg'
import play8 from '../../assets/images/play8.svg'
import play9 from '../../assets/images/play9.svg'
import play10 from '../../assets/images/play10.svg'

const Play = () => {
    // window.onscroll = () => {
    //     var scrolltop  = window.pageYOffset || document.documentElement.scrollTop
    //     const item =  document.getElementById('anime-img')
    //     var w = window.innerWidth;
    //     var temp  = scrolltop
    //     if( w > 1440){
    //         if(scrolltop < 899){
    //             item.style.transform = 'translateY(' + temp + 'px)' ;
    //         }
    //     }
    //     else if(w <= 1440 && w >= 900){
    //         if(scrolltop < 780){
    //             item.style.transform = 'translateY(' + temp + 'px)' ;
    //         }
    //     }

    //     else if(w <= 900 && w >=375){
    //         if(scrolltop < 780){
    //             item.style.transform = 'translateY(' + temp + 'px)' ;
    //         }
    //     }
        
    // }
    
  return (
    <>
        <section className='play-section'>
            <div className="contaier-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="play-images">
                            <img src={play1} alt="" />
                            <img src={play2} alt="" />
                            <img src={play3} alt="" />
                            <img src={play4} alt="" />
                        </div>
                        
                    </div>
                    <div className="col-lg-4">
                        <div className="play-images">
                            <img src={play5} alt="" />
                            <img src={play6} alt="" />
                            <img src={play7} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="play-images">
                            <img src={play8} alt="" />
                            <img src={play9} alt="" />
                            <img src={play10} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Play