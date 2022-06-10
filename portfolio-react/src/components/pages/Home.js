import React, { Component } from "react";
import About from './About'
import Projects from './Projects'

export default class Home extends Component {
    render () {
        return (
        <div className="home-page">
            <About/>
            <Projects/>
        </div>
        )
    }

}
