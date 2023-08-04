import React from 'react'
import resume from './Resume.pdf'
const Footer = () => {
  return (
    <>
        <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <p>Thanks for stopping by, let’s connect!</p>
                </div>
                <div className="col-lg-5">
                    <ul>
                        <li><a href="mailto:nehalj98@gmail.com">Email</a></li>
                        <li><a href="linkedin/nehalj98.com">LinkedIn</a></li>
                        <li><a href={resume} download>Resume</a></li> 
                    </ul>
                </div>
            </div>
        </div>
           
        </section>
    </>
  )
}

export default Footer