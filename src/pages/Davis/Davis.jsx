import React , {useEffect} from 'react'
import './Davis.css'
import { useLocation } from "react-router-dom";

import davis from '../../assets/images/DavisHousing2.svg'

const Davis = () => {
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
      }
    useEffect(() => {
        onTop()
           
        
      }, [routePath]);
  return (
    <>
        <section className="dav-intro">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="dav-intro-text">
                        <span>
                        Davis Housing 
                        </span> 
                        <ul>
                            <li>
                                <p>Role</p>
                                <p className='dav-intro-light'>UX Designer</p>
                            </li>
                            <li>
                                <p>Duration</p>
                                <p  className='dav-intro-light'>January - March 2020</p>
                            </li>
                            <li>
                                <p>Tools</p>
                                <p  className='dav-intro-light'>AdobeXD, Zeplin</p>
                            </li>
                            <li>
                                <p>Tools</p>
                                <p  className='dav-intro-light'>Davis Housing Design and Engineering</p>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    </div>
                </div>
                
                </div>
            </section>
        <section className='dav-sec'>
            <div className="container">
                <div className="row  mb-5">
                    <div className="col-lg-6">
                        <h2>Davis Housing</h2>
                    </div>
                    <div className="col-lg-6">
                        <p className='mb-5'><span>Davis Housing</span> is the largest guide for finding apartments, homes, condos, and duplexes in Davis. The team manages hundreds of listings and maintains the most up-to-date information by working with property managers and owners to ensure the accuracy and relevance for students, families, and professionals alike. </p>
                        <p>
                        Our goal is to offer the most complete and up-to-date database of apartments and rental properties in Davis to help potential renters make informed housing decisions in an ever-changing market.
                        </p>
                    </div>
                </div>
                <div className="row  mb-5"  >
                    <div className="col-lg-6">
                        <h2>My Contribution</h2>
                    </div>
                    <div className="col-lg-6">
                        <p>
                        I can’t share the details about this project because I signed an NDA but you can see my work currently at the live site.
                        </p>
                    </div>
                </div>
                <img src={davis} alt="" />
            </div>
        </section>
    </>
  )
}

export default Davis