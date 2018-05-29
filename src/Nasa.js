import React, { Component } from 'react';
import './Nasa.css';

class Nasa extends Component{
    render(){
        return(
            <div className = "Nasa">
                <img
                    src = "https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png"
                    alt = ""
                    className = "Nasa"
                />
            </div>
        )
    }
}

export default Nasa;