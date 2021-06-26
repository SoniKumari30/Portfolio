import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import profilepic from '../picture/soni.jpg'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <h1>Hi Folks !!!</h1>
                <h2><center> Welcome To My Portfolio...</center></h2>
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am soni',' A Learner','A Programmer','A Frontend Developer']}/>
            </div>
            )
        }
        //
    }
    
    export default Home
    