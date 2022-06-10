import React, { Component } from "react";
import '../../App.css'



export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h1>Projects🌸</h1>
                <h4><a href={"https://animoots.herokuapp.com/"}>Animoots</a></h4>
                <h4><a href={"https://lindzcoding.github.io/"}>Draco Meteor</a></h4>

                <img src='/gameshot.png' className='game-image' />
            </div>
        )
    }

}