import React from 'react'
import './Govenda.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import gov1 from '../../assets/images/ProductEcosystem.svg'
import gov2 from '../../assets/images/merubFatima.svg'
import gov3 from '../../assets/images/sarah.svg'
import gov4 from '../../assets/images/tom.svg'
import gov5 from '../../assets/images/arc1.svg'
import gov6 from '../../assets/images/arc2.svg'
import gov7 from '../../assets/images/arc3.svg'
import gov8 from '../../assets/images/focus1.svg'
import gov9 from '../../assets/images/focus2.svg'
import gov10 from '../../assets/images/focus3.svg'
import gov11 from '../../assets/images/focus4.svg'
import gov12 from '../../assets/images/focus5.svg'
import gov13 from '../../assets/images/focus6.svg'
import gov14 from '../../assets/images/focus7.svg'
import gov15 from '../../assets/images/focus8.svg'
import gov16 from '../../assets/images/focus9.svg'
import arrow from '../../assets/images/arrow-up-right-from-square.svg'
import gov17 from '../../assets/images/focus10.svg'
import gov18 from '../../assets/images/focus11.svg'
import gov20 from '../../assets/images/takeaway.svg'

const doSpeicalThing = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

    var element  = document.querySelector('.gov-persona .react-multi-carousel-track');
    const values = element.style.transform.split(/\w+\(|\);?/);
    const transform = values[1].split(/,\s?/g).map(parseInt);
    console.log(transform[0])
    if (transform[0] === 0){
        element.style.padding = '0 0 0 500px'
    }
    else{
        element.style.padding = '0 0 0 0'
    }
}

const Govenda = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
    }
};
  return (
    <>
        <section className="gov-intro">
            <div className="container">
                <div className="gov-intro-text">
                    <span>
                        <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.6867 26.6852H43.7236V45.1679C38.8752 49.0384 31.692 51.688 25.1429 51.688C11.0008 51.688 0 40.5847 0 26.2555C0 11.9263 11.1407 0.962891 25.6209 0.962891C32.4496 0.962891 39.2784 3.69096 44 7.98427L39.4312 14.2179C35.6568 10.5909 30.74 8.54999 25.6209 8.48555C15.8525 8.48555 8.21403 16.2947 8.21403 26.2521C8.21403 36.2812 15.9338 44.0903 25.7054 44.0903C29.2596 44.0903 33.2886 42.8013 36.703 40.6529L36.6867 26.6852Z" fill="white"/>
                        </svg>
                        <svg width="49" height="52" viewBox="0 0 49 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M49 26.2555C49 40.5779 38.3137 51.688 24.4843 51.688C10.6549 51.688 0 40.5779 0 26.2555C0 11.8547 10.6863 0.962891 24.5 0.962891C38.3137 0.962891 49 11.9332 49 26.2555ZM7.92676 26.2555C7.92676 36.213 15.5203 44.0937 24.566 44.0937C26.7269 44.1 28.8676 43.6429 30.8651 42.7488C32.8627 41.8546 34.6777 40.5409 36.2058 38.8833C37.7339 37.2257 38.945 35.2567 39.7696 33.0896C40.5941 30.9225 41.0158 28.6 41.0104 26.2555C41.0104 16.2947 33.6148 8.55716 24.566 8.55716C15.4543 8.56057 7.92676 16.2981 7.92676 26.2555Z" fill="white"/>
                        </svg>
                        <svg width="47" height="52" viewBox="0 0 47 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.72296 0.969789L23.5687 42.1962L38.5485 0.962891H47L27.5524 51.688H19.1696L0 0.969789H8.72296Z" fill="white"/>
                        </svg>
                        <svg width="34" height="52" viewBox="0 0 34 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.2004 0.962891V8.64391H7.83473V22.3401H30.5488V30.0211H7.8379V44.007H34V51.688H0V0.962891H33.2004Z" fill="white"/>
                        </svg>
                        <svg width="41" height="52" viewBox="0 0 41 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.8218 0.962891L33.1621 37.4124V0.962891H41V51.688H33.1621L7.97295 15.3109V51.688H0V0.962891H7.8218Z" fill="white"/>
                        </svg>
                        <svg width="43" height="52" viewBox="0 0 43 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43 26.3254C43 40.9642 32.8642 51.688 18.8178 51.688H0V0.962891H19.0165C32.9367 0.962891 43 11.6177 43 26.3254ZM35.1159 26.3979C35.1159 16.05 28.0264 8.64099 18.884 8.64099H7.81787V44.0099H19.2152C28.2251 44.0099 35.1159 36.6905 35.1159 26.4013V26.3979Z" fill="white"/>
                        </svg>
                        <svg width="50" height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.888 40.2406H12.9082L8.35542 51.688H0L20.9921 0.962891H29.2117L50 51.688H41.4409L36.888 40.2406ZM33.8324 32.632L24.8658 10.1132L15.896 32.6493L33.8324 32.632Z" fill="white"/>
                        </svg>
                    </span>
                    <ul>
                        <li>
                            <p>Role</p>
                            <p className='gov-intro-light'>Product Designer</p>
                        </li>
                        <li>
                            <p>Duration</p>
                            <p  className='gov-intro-light'>February 2022 - September 2022</p>
                        </li>
                        <li>
                            <p>Tools</p>
                            <p  className='gov-intro-light'>Figma, Pendo, ProductBoard</p>
                        </li>
                        <li>
                            <p>Team</p>
                            <p  className='gov-intro-light'>Govenda Product and Engineering</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className='gov-sec'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Govenda</h2>
                    </div>
                    <div className="col-lg-6">
                        <p><span>Govenda</span> is a board management software that provides a suite of tools to improve a company’s decision making so that they can achieve their strategic goals.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='gov-sec-img'>
        </section>
        <section className='gov-third'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Introduction</h2>
                    </div>
                    <div className="col-lg-6">
                        <h3>Overview</h3>
                        <p>Many organizations have multiple committees that are responsible for different aspects of their operations, such as finance, audit, and governance. However, <span>managing these committees can be challenging and time-consuming</span>, particularly if there are multiple members and a large volume of documents to track.</p>
                        <h3>Context</h3>
                        <p>There are <span> two different interfaces &nbsp;</span>that this product will impact. One is the web interface designed for board professionals that organize committees and the other is customer facing website and app for board and committee members. This meant working with two different design patterns while keeping in mind that the design will impact two different user groups.</p>
                        <h3>Stakeholders</h3>
                        <p>For this project, I had to continuously communicate with my stakeholders to update them on my progress as well as be proactive in seeking out feedback. I worked closely with my product manager Gavin Guest . I checked in with software engineers TJ Coyle, CL Lewis and Matt Hicks for engineering feedback to <span>
                        identify any limitations or restrictions and proposed solutions to any roadblocks
                        </span> .</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="gov-challenge">
            <div className="container">
                <h2>
                THE CHALLENGE:
                </h2>
                <p>
                How can we help board professionals and board members collaborate efficiently on committees while ensuring that they comply with committee charters and corporate governance rules?
                </p>
            </div>
        </section>
        <section className="gov-pro-eco">
            <div className="container">
                <span>PROCESS</span>
                <h2>Existing <br/> Product Ecosystem</h2>
                <div className="gov-pro-eco-img">
                    <img src={gov1} alt="" />
                </div>
            </div>
        </section>
        <section className="gov-imp">
            <div className="container">
                <span>IMPORTANT MENTION</span>
                <p>Action items such as tasks, eSignatures, surveys and votes  play crucial roles alongside a meeting to enhance decision making, collaboration, and efficiency. Unfortunately, these items existed more as silos and not in continuance with the meeting structure. This is something I wanted to avoid moving forward.</p>
            </div>
        </section>
        <section className="gov-fewproblems">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>
                            Top few problems to solve:
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="few-problems">
                            <div className="problem-tile">
                                <div className='prob-h3-txt'>
                                    <span>01</span> 
                                    <h3> Lack of clarity between admins & members</h3> 
                                </div>
                                <p>Without a clear structure and process for managing committees, it can be difficult to ensure that all members are on the same page and understand their responsibilities.</p>
                                <div className="problem-design">
                                    <em>DESIGN CONSIDERATION</em>
                                    <p>Break down of the standardized process into multiple tools.</p>
                                </div>
                            </div>
                            <div className="problem-tile">
                                <div className='prob-h3-txt'>
                                    <span>02</span> 
                                    <h3> Poor communication between members</h3> 
                                </div>
                                <p>Inefficient committee management can lead to poor communication between members, which can result in missed deadlines, misunderstandings, and ineffective decision-making.</p>
                                <div className="problem-design">
                                    <em>DESIGN CONSIDERATION</em>
                                    <p>Combine different tools that follow the flow of the committee process.</p>
                                </div>
                            </div>
                            <div className="problem-tile third">
                                <div className='prob-h3-txt'>
                                    <span>03</span> 
                                    <h3>Risk of Non-Compliance in the organisation</h3> 
                                </div>
                                <p> Committees are often responsible for ensuring compliance with regulations and policies, but without a streamlined process for managing them, there is a risk of non-compliance and potential legal or financial consequences.</p>
                                <div className="problem-design">
                                    <em>DESIGN CONSIDERATION</em>
                                    <p>Clear instructions, design guides for adoption and error prevention warning.</p>
                                </div>
                            </div>
                            <div className="problem-tile">
                                <div className='prob-h3-txt'>
                                    <span>04</span> 
                                    <h3>Time Consuming processes to organize</h3> 
                                </div>
                                <p>  If committees are managed using manual processes, such as email or paper-based documents, it can be time-consuming for members to keep track of tasks and stay up-to-date on meeting schedules and agendas</p>
                                <div className="problem-design">
                                    <em>DESIGN CONSIDERATION</em>
                                    <p>Tailor made user flows based on the charter needs and process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="gov-imp gov-solution">
            <div className="container">
                <span>IMPORTANT MENTION</span>
                <p>Action items such as tasks, eSignatures, surveys and votes  play crucial roles alongside a meeting to enhance decision making, collaboration, and efficiency. Unfortunately, these items existed more as silos and not in continuance with the meeting structure. This is something I wanted to avoid moving forward.</p>
            </div>
        </section>

        <section className="gov-research">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <span className='res-preheader'>PROCESS</span>
                        <h2>
                            Research
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <h3>Competitive Analysis</h3>
                        <p>Other board management software platforms like Diligent Boards, BoardEffect, Onboard etc. all have committee management functionality built in. While the specific features and capabilities may vary, they generally allow users to <span>
                            create and manage committees, schedule meetings, assign tasks, and collaborate on committee-related documents and materials.
                        </span> </p>
                        <h3>Constraints and Scope</h3>
                        <ul>
                            <li>User adoption: Our users are not tech-savvy so introducing completely new design patterns would be challenging. For this reason, we adopted existing UI and modified it to fit our feature’s needs.
</li>
                            <li>Cost: Cost is another potential constraint to consider. If the Committees feature requires additional resources, such as hardware or software, it may be cost-prohibitive for some organizations.
</li>
                            <li>Data security: Data security is a critical constraint to consider, particularly for sensitive information such as committee documents and meeting minutes. The Committees feature must ensure that data is stored and transmitted securely to protect against data breaches and other security risks.
</li>
                            <li>Governance: Committee charters vary depending on committees and company size. Moreover, every organization has multiple committees which are all governed in different ways. This would limit any automatic systems that we would want to place within the design.
</li>
                            <li>Technical limitations: Finally, there may be technical limitations to consider, such as limitations in the platform's ability to handle large files or support real-time collaboration. These limitations could impact the effectiveness of the Committees feature and limit its functionality.</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="gov-persona">
            <div className="container">
                <span>PROCESS</span>
                <h2>User Personas</h2>
            </div>
            <Carousel responsive={responsive} arrows={false} keyBoardControl={true} centerMode={true}
                afterChange={(previousSlide, { currentSlide, onMove }) => {doSpeicalThing()}}>
                <div>
                    <div className="persona-slide">
                        <h3>Meet Fatima</h3>
                        <p className='persona-header'>42, Board Member, Experienced in serving on various boards</p>
                        <div className="persona-img">
                            <img src={gov2} alt="" />
                        </div>
                        <p>
                            As a board member, Fatima wants to be able to access all committee-related information in one place and collaborate with other committee members efficiently. With Govenda's Committees feature, Fatima can easily view committee schedules, access meeting agendas and documents, communicate with other members in real-time, and track progress of tasks assigned to her. This allows her to stay informed and make better decisions.</p>
                        <p>One main goal - To ensure effective communication and collaboration among board members and committee members, and to make informed decisions.</p>
                    </div>
                </div>
                <div> 
                    <div className="persona-slide">
                        <h3>Meet Sarah</h3>
                        <p className='persona-header'>31, Compliance Officer, Experienced in ensuring compliance</p>
                        <div className="persona-img">
                            <img src={gov3} alt="" />
                        </div>
                        <p>
                        As a compliance officer, Sarah wants to ensure that all committees are complying with regulations and policies. With Govenda's Committees feature, Sarah can track tasks and deadlines assigned to committee members, ensure that all members are aware of their responsibilities, and access reports to identify areas for improvement. This helps her to reduce the risk of non-compliance and ensure that the organization is meeting its obligations.</p>
                        <p>One main goal - To ensure that all committees are compliant with regulations and policies, and to reduce the risk of non-compliance</p>
                    </div>
                </div>
                <div>
                    <div className="persona-slide">
                        <h3>Meet Tom</h3>
                        <p className='persona-header'>48, Committee Chair, Experienced in managing committees</p>
                        <div className="persona-img">
                            <img src={gov4} alt="" />
                        </div>
                        <p>
                        As a committee chair, Tom wants to be able to schedule meetings, create agendas, assign tasks, and track progress efficiently. With Govenda's Committees feature, Tom can easily create and share meeting agendas, assign tasks to committee members, and track progress of those tasks. This helps him to ensure that committee meetings are productive and that tasks are completed on time.</p>
                        <p>One main goal - To facilitate communication between board members and staff and streamline board meeting processes.</p>
                    </div> 
                </div>
                
            </Carousel>;
        </section>

        <section className="gov-architect">
            <div className="container">
                <span>PROCESS</span>
                <h2>Information <br /> Architecture</h2>
                <img className='img' src={gov5} alt="" />
                <span>PROCESS</span>
                <h2>Mockups</h2>
                <img className='mb-3' src={gov6} alt="" />
                <p>Meetings</p>
                <span className='post-img'>Board Professional Console</span>
                <img className='mb-3' src={gov7} alt="" />
                <p>Onboarding </p>
                <span className='post-img'>Board Professional Console</span>
            </div>
        </section>

        <section className="gov-research">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <span className='res-preheader'>PROCESS</span>
                        <h2>
                        Focus: Hierarchy
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <h3>Why</h3>
                        <p>Larger organizations may have a complicated committee structure that includes parent-child relationships between committees. The more complex your organization is, the more important it is to track and maintain these relationships to help improve organizational clarity.</p>
                        <h3>How</h3>
                        <p>Board professionals with this feature may create parent-child relationships between any number of committees regardless of type. Govenda creates a straightforward relationship between these groups; these relationships do not affect any other functionality in the system.</p>
                        <h3>Solution</h3>
                        <ul>
                            <li>Adding/Removing Children: After selecting a group, users may add or remove children in bulk. You may re-assign children to another parent, or leave them without a parent.

</li>
                            <li>Changing Parents: After selecting a group users may change the parent group of the currently selected committee or remove it's parent. Changing the parent of a group does not affect that groups children or grandchildren in any way. There is no direct relationship between "grandparent" and "grandchildren" in Govenda.
</li>
                        
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="gov-persona focus">
            <div className="container">
                <Carousel responsive={responsive} keyBoardControl={true}>
                    <div>
                        <img src={gov8} alt="" />
                    </div>
                    <div>
                        <img src={gov9} alt="" />
                    </div>
                    <div>
                        <img src={gov10} alt="" />
                    </div>
                    <div>
                        <img src={gov11} alt="" />
                    </div>
                    <div>
                        <img src={gov12} alt="" />
                    </div>
                </Carousel>
            </div>
            
        </section>

        <section className="gov-research">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <span className='res-preheader'>PROCESS</span>
                        <h2>
                        Focus: 
                            Tenure Tracking
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <h3>Why</h3>
                        <p>
                        At many organizations, board or committee charters specify how long a member may remain in a position on that board or committee. It falls on the office of the Corp. Sec. to enforce these limits. Govenda's tenure tracking tools help companies ensure compliance with their own rules.
                        </p>
                        <h3>How</h3>
                        <p>For any member of a committee, board professionals may add one or more roles for that user. For each role, a start and/or end date may be defined. Setting these dates will being tracking the total amount of time that this user has been in this role. Adding an end date will show this user on the Tenure Tracking report (analytics).</p>
                        <h3>Solution</h3>
                        <p className='mb-0'>As a board professional:</p>
                        <ul>
                            <li>I want to track how long a committee member has been on a particular committee.


</li>
                            <li>I want to track how long a committee member has been in a particular role on a committee.

</li>
<li>I want to see a consolidated list of all members and time served in a particular committee and role combination.
</li>
<li>I want to be able to set and manage roles across all committees.</li>
                        
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="gov-persona focus">
            <div className="container">
                <Carousel responsive={responsive} keyBoardControl={true}>
                    <div>
                        <img src={gov13} alt="" />
                    </div>
                    <div>
                        <img src={gov14} alt="" />
                    </div>
                    <div>
                        <img src={gov15} alt="" />
                    </div>
                    <div>
                        <img src={gov16} alt="" />
                    </div> 
                </Carousel>
            </div>
            
        </section>

        <section className="gov-architect">
            <div className="container">
                <span>BOARD PROFESSIONALS</span>
                <h2>Outcome</h2>
                <ul>
                    <li>A feature that helps board professionals create and organizing committees.</li>
                    <li>Improved clarity between board professionals and members when collaborating on a committee.</li>
                    <li>Streamlined the committee process resulting in decreased time spent managing a committee.</li>
                    <li>Learning from the silos that previously existed, we created this tool to be cohesive and powerful enough to become a stand alone product which led to increased revenue and sales generation. The product is called  <a href="https://www.govenda.com/committee-suite-product-overview">Govenda Committee Suite <span><img src={arrow} alt="" /></span></a> </li>
                </ul>
                <span>BOARD PROFESSIONALS</span>
                <h2>Setbacks</h2>
                <ul>
                    <li>Bulk management of committees was challenging as each committee required it’s own set-up.
</li>
                    <li>Committee charters could not be automated due to individual committee needs.
</li>
                    <li>Hierarchy chart had no visual chart which made it challenging to see the committee relationships as whole.</li>
                </ul>
                <img src={gov17} alt="" />
                <p>FINAL PRODUCT</p>
                
                <span>BOARD MEMBERS</span>
                <h2>Outcome</h2>
                <ul>
                    <li>A cohesive tool that helps board professionals create, organize and manage committees
</li>
                    <li>Improved clarity between board professionals and members when collaborating on a committee
</li>
                    <li>Decreased time spent managing a committee once the initial set up is done.</li>
                    
                </ul>
                <span>BOARD PROFESSIONALS</span>
                <h2>Setbacks</h2>
                <ul>
                    <li>Bulk management of committees was challenging as each committee required it’s own set-up.
</li>
                    <li>Committee charters could not be automated due to individual committee needs.
</li>
                    <li>Hierarchy chart had no visual chart which made it challenging to see the committee relationships as whole.</li>
                </ul>
                <img src={gov18} alt="" />
                <p>FINAL PRODUCT</p>
                
            </div>
        </section>

        <section className='gov-takeaway'>
            <div className="container">
                <span className='preheaderspan'>AFTERMATH</span>
                <h2>Takeaways</h2>
                <ul>
                    <li>After the introduction of our AI tool, we were able to automate the use of committee charters in creation of a committee. This did not require building user flows since the AI tool was able to coomplete initial set up using the charters which decreased the time that board professional spent on organizing committees.</li>
                    <li>We also introduced a visual hierarchy chart so that board professionals were easily able to view the hierarchy and make business decisions.</li>
                    
                </ul>
                <p>Overall, designing and working on this tool was one of the highlights of my career because I learned so much. It is always surreal seeing designs come to life especially in the form of a stand alone product. I couldn’t have done this without the excellent team at Govenda.</p>
                <img src={gov20} alt="" />
            </div>
        </section>
    </>
  )
}

export default Govenda