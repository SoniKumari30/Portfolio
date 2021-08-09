import React, { Component } from 'react'
import Widecard from '../components/Widecard'

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Experience :-</h1>
            <Widecard title="Associate React Developer" where="Celebal Technologies, Jaipur" from="April 2021" to="present" />
            <Widecard title="Full stack Developer Intern/ Trainee" where="DCT Academy, Bangalore" from="Feb 2020" to="Aug 2020"/>
            </div>
            )
        }
    }
    
export default Education