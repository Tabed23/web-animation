import React from 'react'
import './About.css'
import { useLocation} from 'react-router-dom'
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { ScrollText } from "../Scrolltext/ScrollText";

import asset1 from '../../assets/images/detailtile1.svg'
import asset2 from '../../assets/images/detailtile2.svg'
import asset3 from '../../assets/images/detailtile3.svg'

const About = () => {
    // window.onscroll = () => {
        
    //     var scrolltop  = window.pageYOffset || document.documentElement.scrollTop
    //     const item =  document.getElementById('first-span')
    //     const item2 =  document.getElementById('last-span')
    //     const item3 =  document.getElementById('first-text-span')
    //     const item4 =  document.getElementById('second-text-span')
    //     const item5 =  document.getElementById('third-text-span')
    //     // var w = window.innerWidth;
    //     var temp  = scrolltop
    //     if(scrolltop > 518){
    //         item.style.transform = 'translatex(-20%)' ;
    //         item2.style.transform = 'translatex(20%)' ;
    //     }
    //     else{
    //         item.style.transform = 'unset' ;
    //         item2.style.transform = 'unset' ;

    //     }

    //     if(scrolltop > 1100 && scrolltop < 2000){
    //         item3.style.backgroundPosition = '0 100%' ;
    //         item4.style.backgroundPosition = '100%' ;
    //         item5.style.backgroundPosition = '100%' ;

    //     }else if (scrolltop > 2000 && scrolltop < 2500){
    //         item3.style.backgroundPosition = '100%' ;
    //         item4.style.backgroundPosition = '0 100%' ;
    //         item5.style.backgroundPosition = '100%' ;
    //     }
    //     else if (scrolltop > 2500){
    //         item3.style.backgroundPosition = '100%' ;
    //         item4.style.backgroundPosition = '100%' ;
    //         item5.style.backgroundPosition = '0 100%' ;
    //     }
    
        
        
    // }
    const content = [
        "ui/ux design, figma, interaction design,",
        "visual strategy, adobe suite, sketch, prototyping, ",
        "user research and testing, iterative design process"
      ];
      
  return (
    <>
        <section className="about-intro">
            <div className="container">
                <p>
                    Hi! I’m Nehal, a product designer invested in creating a more <em>equitable world</em> and designing fore <em>human well being.</em> 
                </p>
                <a href="#">Resume &#8594;</a>
                <div className="about-border-text">
                    <p><strong>MY DESIGN PHILOSOPHY</strong></p>
                    <p>I am determined to leave the industry better than I found it.</p>
                </div>
            </div>
        </section>
        <section className='about-animted-header'>
            <div className="container">
                <Parallax translateX={['0px', '-200px']}>
                    <span id='first-span'>empathic</span>
                </Parallax>

                <span>curious</span>
                <Parallax translateX={['0px', '200px']}>
                    <span  id='last-span'>passionate</span>
                </Parallax>
            </div>
        </section>
        <section className='about-details'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 about-detail-animation" >
                        <p className='animated-detail-text'>
{/*                         
                            <span id='first-text-span'>ui/ux design, figma, interaction design,</span>
                            <span id='second-text-span'>visual strategy, adobe suite, sketch, prototyping, </span>
                            <span id='third-text-span'>user research and testing, iterative design process</span>
                         */}
                            <ScrollText content={content} />

                        
                        
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-detail-tiles">
                            <div className="about-detail-tile">
                                <div className="detail-tile-img">
                                    <img src={asset1} alt="" />
                                </div>
                                <h3>A LITTLE BIT ABOUT ME</h3>
                                <p>My passion for design and creation started at the age of 16, when I began to teach myself Photoshop to bring my ideas to life. I became interested in design because of its nature—the process of creating something from nothing. This led me to my double major in Design and Business at UC Davis. Since graduating, I have been able to make an impact on people's lives by designing delightful experiences and using human-centered design to solve problems.</p>
                            </div>
                            <div className="about-detail-tile">
                                <div className="detail-tile-img">
                                    <img src={asset2} alt="" />
                                </div>
                                <h3>INSPIRATION</h3>
                                <p>Through years of global travel with a home base in India, I have developed a unique perspective of the world and people that shapes my approach and thought process. Due to this global perspective, I make an effort to find inspiration in whatever is available to me. My favorite source of inspiration is people. I learn and grow through my conversations and experiences with people.  This is also how I found one of my favorite books The Artist Way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="about-detail-tiles second-tiles-col">
                            <div className="about-detail-tile ">
                                <div className="detail-tile-img">
                                    <img src={asset3} alt="" />
                                </div>
                                <h3>PERSONAL LIFE</h3>
                                <p>I recently moved back to California from Oregon. I had the great privilege of working remotely so I was able to spend a year exploring the beautiful pacific northwest. It was super fun to be able to immerse myself in local markets and meet skilled artisans who were active in the local community. The moroccan pistachio latte at Ovation Coffee in Portland is still some of the best coffee I have had. Now that I am living in Los Angeles, I have been enjoying evening hikes and weekends at the beach.  It has been exciting to be surrounded by creatives who seek inspiration in this extremely diverse and dynamic city.</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About