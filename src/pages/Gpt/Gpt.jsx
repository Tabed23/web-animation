import React , {useEffect} from 'react'
import './Gpt.css'
import { useLocation } from "react-router-dom";

import gptlogo from '../../assets/images/ChatGPT_logo.svg'
import gptbg from '../../assets/images/chatgptbg.svg'
import mock1 from '../../assets/images/mock1.svg'
import mock2 from '../../assets/images/mock2.svg'
import mock3 from '../../assets/images/mock3.svg'
import desingsys1 from '../../assets/images/desingsys1.svg'
import desingsys2 from '../../assets/images/desingsys2.svg'
import mock4 from '../../assets/images/mock4.svg'
import gptw from '../../assets/images/gptwhite.svg'
import gptb from '../../assets/images/gptblack.svg'

const Gpt = () => {
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
      }
    useEffect(() => {
        onTop()
      }, [routePath]);
      
  return (
    <>
        <section className="gpt-intro">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                     <div className="gpt-intro-text">
                    <span>
                        ChatGPT
                    </span> 
                    <ul>
                        <li>
                            <p>Role</p>
                            <p className='gpt-intro-light'>Visual Designer</p>
                        </li>
                        <li>
                            <p>Duration</p>
                            <p  className='gpt-intro-light'>March 2023</p>
                        </li>
                        <li>
                            <p>Tools</p>
                            <p  className='gpt-intro-light'>Figma, ChatGPT</p>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-6">
                    <img src={gptlogo} alt="" />
                </div>
            </div>
               
            </div>
        </section>
        <section className='gpt-sec'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>ChatGPT</h2>
                    </div>
                    <div className="col-lg-6">
                        <p className='mb-5'><span>ChatGPT</span> is an AI-powered conversational agent developed by OpenAI. ChatGPT is designed to generate human-like text responses, enabling interactive and dynamic conversations with users.</p>
                        <p>
                        ChatGPT can understand and generate text in natural language, allowing users to engage in dialogue with the model. Users can provide prompts or ask questions, and ChatGPT responds accordingly by generating relevant and contextually coherent text.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='gpt-sec-2'>
            <img src={gptbg} alt="" />
        </section>
        <section className="gpt-research">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>
                            Context
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <h3>Problem</h3>
                        <p className='mb-0'>ChatGPT is designed to cater to a wide range of users and target audiences. The current issue with ChatGPT lies in its limited user interface, which hinders its ability to effectively manage context, ensure clarity, and handle errors. Furthermore, it lacks customization options and accessibility features. It is necessary to rephrase this problem statement in a way that conveys a clearer understanding of the limitations and challenges faced by ChatGPT's user interface.</p> 
                    </div>
                </div>
            </div>
        </section>
        <section className="gpt-craft">
            <p>
            Crafting an experience that is <span>intuitive</span>, <span>innovative</span> and <span>beautiful</span>  to help people engage in interactive and dynamic conversations. 
            </p>
        </section>
        <section className="gpt-research">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>
                            Context
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <h3>My Role</h3>
                        <p >As the sole designer, I seized the opportunity to push the boundaries of visual design. This involved studying various other language models, developing frameworks, and crafting mockups to showcase my vision. Throughout this process, I focused on implementing innovative design principles and formulating a compelling visual strategy that aligns with ChatGPT’s objective.</p> 

                        <h3>Timeline</h3>
                        <p className='mb-0'>Over the six week timeline, I allocated two weeks to research language models and gather pain points.  I allocated the rest of the time for total design time which was iterative. I got one design review and one dev review from designer John Smith and developer Jane Smith.</p> 
                    </div>
                </div>
            </div>
        </section>
        <section className="gpt-imp">
            <div className="container">
                <span>CHALLENGE</span>
                <p>Balancing style with an efficient user experience. </p>
            </div>
        </section>
        <section className="gpt-fewproblems">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>
                        Design
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="few-problems">
                            <p>Four key areas that I prioritized:</p>
                            <div className="problem-tile">
                                <div className='prob-h3-txt'>
                                    <span>01</span> 
                                    <h3> Context Management</h3> 
                                </div>
                                <p> I devised strategies to better capture and retain user context throughout the conversation</p>
                                
                            </div>
                            <div className="problem-tile">
                                <div className='prob-h3-txt'>
                                    <span>02</span> 
                                    <h3> Poor communication between members</h3> 
                                </div>
                                <p>I implemented error detection mechanisms and developed intuitive error messages to guide users in case of input mistakes or system limitations.</p>
                                
                            </div>
                            <div className="problem-tile third">
                                <div className='prob-h3-txt'>
                                    <span>03</span> 
                                    <h3>Customization and Personalization</h3> 
                                </div>
                                <p> I dedicated efforts to provide users with options to personalize their experience. This included features such as customizable themes, font sizes etc.</p>
                                
                            </div>
                            <div className="problem-tile">
                                <div className='prob-h3-txt'>
                                    <span>04</span> 
                                    <h3>Accessibility Features</h3> 
                                </div>
                                <p> I implemented accessibility features like screen reader compatibility, ensuring inclusivity and usability for a wider range of users.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>.
        <section className="gpt-architect">
            <div className="container">
                <span>PROCESS</span>
                <h2>Brainstorm & Ideate</h2>
                <img src={mock1} alt="" />
                <p>Idea 1 - Adding animation to make the product more dynamic allowing the chat based tool to hold user interest. Idea for inbuilt prompts and roles for added functionality.</p>
                <img src={mock2} alt="" />
                <p>Idea 2 - Instead of animation, using carasol to explain ChatGPT’s capability. It retains the original design while adding visual interest. Retaining the prompts and roles functionality from idea 1.</p>
                <img  src={mock3} alt="" />
                <p>Idea 3 - Scrolling within the panels so there is nothing off screen which will retain all information as soon as the user lands on the main page. </p>
            </div>
        </section> 
        <section className="gpt-architect second-architect">
            <div className="container">
                <span>PROCESS</span>
                <h2>Working with a design system</h2>
                <p>Using the ChatGPT Design System in Figma, I designed multiple layout iterations within Figma to find the most optimal components and assets to ensure a consistent and clear design. I added components to their existing system so that I could add to the visual story.</p>
                <img className='mb-5' src={desingsys1} alt="" />
                <img src={desingsys2} alt="" />
               
            </div>
        </section> 
        <section className="gpt-architect second-architect">
            <div className="container">
                <span>PROCESS</span>
                <h2>Context through Prompts and Characters</h2>
                <ul>
                    <li>
                        Offering a prompt library
                        <ul>
                            <li>This would improve the variety of prompts used by users. </li>
                            <li>It will also help decrease the learning curve for not so tech-savvy users.</li>
                        </ul>
                    </li>
                    <li>
                        Allowing them to create their own prompts and save them
                        <ul>
                            <li>Most users use ChatGPT to achieve specific goals. This will improve a return user experience</li>
                            <li>Even though ChatGPT has a conversation history, it is not great at remembering context. Users can easily re-use prompts when ChatGPT forgets context.</li>
                        </ul>
                    </li>
                    <li>
                        Selecting a character for ChatGPT so that it can maintain if for the whole conversation 
                        <ul>
                            <li>Due to its open ended information library, it is difficult to narrow down context when using ChatGPT as a tool. Inbuild characters will help limit the parameters of the conversation so that users can get improved answers.</li>
                            <li>Choosing a character can stay for the entirety of the conversation, decreasing time typing the character in every single prompt.</li>
                        </ul>
                    </li>
                </ul>
                <img src={mock4} alt="" />
               
            </div>
        </section>
        <section className="gpt-architect second-architect">
            <div className="container">
                <span>PROCESS</span>
                <h2>Error Handling through Error Messages, Feedback Loop and Alternatives</h2>
                <p>I focused on error handling that are not based on informational load or training data to limit the scope of this project. </p>
                <p className='mb-5'>Different types of error messages:</p>
                <ul>
                    <li>
                    Misunderstands a message due to ambiguity                        
                    </li>
                    <li>
                    Response to Insensitive or Offensive Content                        
                    </li>
                    <li>
                    Misspelling or Typo                        
                    </li>
                    <li>
                    Gathering feedback from users
                    </li>
                    <li>
                        Suggesting an alternative prompt or question
                    </li>
                </ul>
                <img src={mock4} alt="" />
               
            </div>
        </section>
        <section className="gpt-architect second-architect">
            <div className="container">
                <span>PROCESS</span>
                <h2>Customizing Capabilities</h2>
                <p>When approaching customizing capabilities, I looked at current customization. ChatGPT only offers users with a light theme and a dark theme. </p>
                <div className="row mb-5">
                    <div className="col-lg-6 h-100">
                        <img src={gptw} alt="" />
                        <p className='text-center mt-3'>Light Theme</p>
                    </div>
                    <div className="col-lg-6 h-100">
                        <img src={gptb} alt="" />
                        <p className='text-center  mt-3'>Dark Theme</p>
                    </div>
                </div>
                
                <p className='mb-5'>This is what I added:</p>
                <ul>
                    <li>
                    Light Theme Update                    </li>
                    <li>
                    Customized Text Color                    </li>
                    <li>
                    App Icon                    </li>
                    <li>
                    Selected Chat UI                    </li>
                    <li>
                        Suggesting an alternative prompt or question
                    </li>
                </ul>
                <img src={mock4} alt="" />

            </div>
        </section>
        <section className="gpt-architect second-architect">
            <div className="container">
                <span>PROCESS</span>
                <h2>Accessibility</h2>
                <p>When approaching customizing capabilities, I looked at current customization. ChatGPT only offers users with a light theme and a dark theme.</p>
                
                <p className='mb-5'>Different types of error messages:</p>
                <ul>
                    <li>
                    Voice Commands                   </li>
                    <li>
                    Text Size                 </li>
                    <li>
                    WCAG Color Contrast Check                  </li>
                    <li>
                    Tooltips and Labels                   </li>
                    <li>
                    Loading Information Message
                    </li>
                </ul>
                <img src={mock4} alt="" />

            </div>
        </section>
        
        <section className="gpt-architect second-architect srchblack">
            <div className="container">
                <h2>Clickable Prototype:</h2>
               
                <img src={mock4} alt="" />

            </div>
        </section>
    </>
  )
}

export default Gpt