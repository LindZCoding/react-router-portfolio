import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='links' className='active'>
                <nav>
                <h1 className="header-name">Lindsay Haigh🌸</h1>
                    <ul>
                        <li><a href="https://github.com/LindZCoding">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/lindsaytaylorhaigh/">LinkedIn</a></li>
                        <li><a href="/Lindsay_Haigh_Resume.pdf" target='_blank'>Resume</a></li>
                        <li><Link to='/projects'>Projects</Link></li>
                    </ul>
                </nav>
                </div>
            </header>
        )
    }
}