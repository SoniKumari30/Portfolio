import React, { Component } from 'react'
import Widecard from '../components/Widecard'

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Project :-</h1>
            <Widecard title="My Portfolio :-" where="By Using ReactJs" from="June 2021" to="June 2021" />
            <Widecard title="To Do Application :-" where="By Using ReactJS" from="June 2021" to="June 2021"/>
            <Widecard title="Commenting Application :-" where="By Using ReactJs" from="May 2021" to="May 2021" />
            </div>
            )
        }
    }
    
export default Education//