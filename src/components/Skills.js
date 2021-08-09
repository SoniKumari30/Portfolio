import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','Bootstrap','Javascript','ReactJS','NodeJS','ExpressJS','MongoDB']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Tach Stack :-</h1>
            <ul>
            {this.state.myskill//s.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    