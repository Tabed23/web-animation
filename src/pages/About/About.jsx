import React , {useState, useEffect, useRef}from 'react'
import './About.css'
import { Parallax } from 'react-scroll-parallax';

import asset1 from '../../assets/images/detailtile1.svg'
import asset2 from '../../assets/images/detailtile2.svg'
import asset3 from '../../assets/images/detailtile3.svg'

const About = () => {
   
    const [scroll, setScroll] = useState(0)
    const [scroll1, setScroll1] = useState(0)
    const [scroll2, setScroll2] = useState(0)
      const ref = useRef(null)
        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, [scroll])

        function handleScroll() {
            let yScroll = window.scrollY;
            if(window.innerWidth<1930 && window.innerWidth > 1440){
                console.log(document.documentElement.offsetHeight)
                if(yScroll > ref.current.clientHeight+500 && yScroll < ref.current.clientHeight+1700){
                    setScroll((yScroll/document.documentElement.offsetHeight)*200)
                    setScroll1(0)
                    setScroll2(0)
                }
                else if (yScroll > ref.current.clientHeight+1700 && yScroll < ref.current.clientHeight+2500){
                    setScroll(0)
                    setScroll2(0)
                    setScroll1((yScroll/document.documentElement.offsetHeight)*200)
                }
                else if (yScroll > ref.current.clientHeight+2500 && yScroll < ref.current.clientHeight+3000){
                    setScroll(0)
                    setScroll1(0)
                    setScroll2((yScroll/document.documentElement.offsetHeight)*200)
                }
                else{
                    setScroll(0)
                    setScroll1(0)
                    setScroll2(0)
                }
            }
            else if(window.innerWidth<1440 && window.innerWidth > 1200){
                console.log(document.documentElement.offsetHeight)
                if(yScroll > ref.current.clientHeight+500 && yScroll < ref.current.clientHeight+1300){
                    setScroll((yScroll/document.documentElement.offsetHeight)*200)
                    setScroll1(0)
                    setScroll2(0)
                }
                else if (yScroll > ref.current.clientHeight+1300 && yScroll < ref.current.clientHeight+2200){
                    setScroll(0)
                    setScroll2(0)
                    setScroll1((yScroll/document.documentElement.offsetHeight)*200)
                }
                else if (yScroll > ref.current.clientHeight+2200 && yScroll < ref.current.clientHeight+2700){
                    setScroll(0)
                    setScroll1(0)
                    setScroll2((yScroll/document.documentElement.offsetHeight)*200)
                }
                else{
                    setScroll(0)
                    setScroll1(0)
                    setScroll2(0)
                }
            }
            else if(window.innerWidth<1200 && window.innerWidth > 900){
                console.log(document.documentElement.offsetHeight)
                if(yScroll > ref.current.clientHeight+500 && yScroll < ref.current.clientHeight+1300){
                    setScroll((yScroll/document.documentElement.offsetHeight)*200)
                    setScroll1(0)
                    setScroll2(0)
                }
                else if (yScroll > ref.current.clientHeight+1300 && yScroll < ref.current.clientHeight+2200){
                    setScroll(0)
                    setScroll2(0)
                    setScroll1((yScroll/document.documentElement.offsetHeight)*200)
                }
                else if (yScroll > ref.current.clientHeight+2200 && yScroll < ref.current.clientHeight+2700){
                    setScroll(0)
                    setScroll1(0)
                    setScroll2((yScroll/document.documentElement.offsetHeight)*200)
                }
                else{
                    setScroll(0)
                    setScroll1(0)
                    setScroll2(0)
                }
            }
            else if(window.innerWidth<900 && window.innerWidth > 767){
                console.log(document.documentElement.offsetHeight)
                if(yScroll > ref.current.clientHeight && yScroll < ref.current.clientHeight+100){
                    setScroll((yScroll/document.documentElement.offsetHeight)*200)
                    setScroll1(0)
                    setScroll2(0)
                }
                else if (yScroll > ref.current.clientHeight+100 && yScroll < ref.current.clientHeight+150){
                    setScroll(0)
                    setScroll2(0)
                    setScroll1((yScroll/document.documentElement.offsetHeight)*200)
                }
                else if (yScroll > ref.current.clientHeight+150 && yScroll < ref.current.clientHeight+200){
                    setScroll(0)
                    setScroll1(0)
                    setScroll2((yScroll/document.documentElement.offsetHeight)*200)
                }
                else{
                    setScroll(0)
                    setScroll1(0)
                    setScroll2(0)
                }
            }
        }
  return (
    <>
        <section className="about-intro">
            <div className="container">
                <p>
                    Hi! I’m Nehal, a product designer invested in creating a more <em>equitable world</em> and designing fore <em>human well being.</em> 
                </p>
                <a href="/">Resume &#8594;</a>
                <div className="about-border-text">
                    <p><strong>MY DESIGN PHILOSOPHY</strong></p>
                    <p>I am determined to leave the industry better than I found it.</p>
                </div>
            </div>
        </section>
        <section className='about-animted-header' ref={ref}>
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
                        <div className='animated-detail-text'>
                            <div className="animatedtextcontainer1">
                                <span>ui/ux design, figma, <br /> interaction design,</span>
                                <span className='animatedtext1' style={{width: `${scroll}%`}}>ui/ux design, figma, <br /> interaction design,</span>
                            </div>
                            <div className="animatedtextcontainer2">
                                <span>interaction design, <br /> visual strategy, adobe  <br /> suite, sketch, prototyping,</span>
                                <span className='animatedtext2' style={{width: `${scroll1}%`}}>interaction design, <br /> visual strategy, adobe  <br /> suite, sketch, prototyping,</span>
                            </div>
                            <div className="animatedtextcontainer3">
                                <span>user research and <br /> testing, iterative design <br /> process</span>
                                <span className='animatedtext3' style={{width: `${scroll2}%`}}>user research and <br /> testing, iterative design <br /> process</span>
                            </div>
                        </div>
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