import React, {useEffect} from 'react'
import './Home.css'
import home1 from '../../assets/images/home1.png';
import home2 from '../../assets/images/home-work-1.svg';
import home3 from '../../assets/images/home-work-2.svg';
import home4 from '../../assets/images/home-work-3.svg';
import { Link } from 'react-router-dom'

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { Parallax } from 'react-scroll-parallax';

const Home = (props) => {
    const homeimgEnter = () => props.setCursorVar("homeimg");
    const homeimgLeave = () => props.setCursorVar("default");
    
    const boxvariant = {
        visible: {
            opacity: 3, 
            y : 0,
            scale: 1,
            transition: {duration: 0.3}
        },
        hidden: {
            opacity: 3,
            scale: 1, y: 200
        }
    }

    const control = useAnimation();
    const control1 = useAnimation();
    const control2 = useAnimation();
    const [ref, inView] = useInView();
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
      if (inView1) {
        control1.start("visible");
      } else {
        control1.start("hidden");
      }
      if (inView2) {
        control2.start("visible");
      } else {
        control2.start("hidden");
      }
    }, [control, inView, control1, inView1, control2, inView2]);

  return (
    <>
   
        <section className="home-intro">
            <p className='para'>
            &nbsp; &nbsp; &nbsp;
            Designing the 
            &nbsp; &nbsp; &nbsp; &nbsp; 
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            line 
            &nbsp; &nbsp;  &nbsp;
            between &nbsp;
            <br/> 
            &nbsp; &nbsp;functionality
             &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             <br/> 
             &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
             & aesthetics</p>
             <span className='home-pd'>PRODUCT DESIGNER</span>
             <span className='home-port'>PORTFOLIO</span>
                <span className='anime-img desktop-img' id='anime-img'>
                    <Parallax translateY={[-522, 522]} scale={[0.9, 1.3]} speed={1000}>
                        <img src={home1} alt="" />
                    </Parallax>
                </span>
                <span className='anime-img mobile-img' id='anime-img'>
                    <Parallax translateY={[-1122, 1122]} scale={[0.3, 2.5]} speed={1000}>
                        <img src={home1} alt="" />
                    </Parallax>
                </span>
        </section>
        
        <section className='home-intro-2'></section>
           
        <section className="home-work" id="work">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className='para'>Work</h2>
                        <p className='work-sec-para'>I enjoy creating great products with great people.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="pages" >
                            <motion.div className="page-tile govendapagetile " ref={ref}
                            variants={boxvariant}
                            initial="hidden"
                            animate={control}>
                                <Link to={'/govenda'} className='children'>
                                    <div className="page-poster">
                                        <img src={home2} alt="" onMouseEnter={homeimgEnter} onMouseLeave={homeimgLeave} onClick={homeimgLeave}/>
                                    </div>
                                
                                <p className='page-pre-head'>Product Designer</p>
                                <h3>Govenda Committee Suite</h3>
                                <p className='page-para'>Led design for a new product, including product strategy, defining metrics and objectives, producing interactions and prototyping.</p>
                                <span className='btn' >EXPERIENCE DESIGN</span>
                                </Link>
                            </motion.div>
                            <motion.div className="page-tile gptpagetile" ref={ref1}
                            variants={boxvariant}
                            initial="hidden"
                            animate={control1}>
                                <Link to={'/gpt'}>
                                    <div className="page-poster">
                                        <img src={home3} alt=""  onMouseEnter={homeimgEnter} onMouseLeave={homeimgLeave}  onClick={homeimgLeave}/>
                                    </div>
                               
                                <p className='page-pre-head'>Visual Designer</p>
                                <h3>ChatGPT Reimagined</h3>
                                <p className='page-para'>Crafting an experience that is intuitive, beautiful, and engaging to help people have better interactions with AI.</p>
                                <div className="btn-holder">
                                    <span className='btn'>UI Design</span>
                                    <span className='btn' >Animation</span>

                                </div>
                                </Link>
                            </motion.div>
                            <motion.div className="page-tile davispagetile" ref={ref2}
                                variants={boxvariant}
                                initial="hidden"
                                animate={control2}>
                                <Link to={'/davis'}>
                                    <div className="page-poster">
                                        <img src={home4} alt=""  onMouseEnter={homeimgEnter} onMouseLeave={homeimgLeave}  onClick={homeimgLeave}/>
                                    </div>
                                
                                <p className='page-pre-head'>UX Designer</p>
                                <h3>Davis Housing</h3>
                                <p className='page-para'>Designing the next generation search bar to drive product growth for a local consumer-facing service</p>
                                <div className="btn-holder">
                                    <span className='btn'>UX Flow</span>
                                    <span className='btn'>Responsive Design</span>

                                </div>
                                </Link>
                            </motion.div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default Home