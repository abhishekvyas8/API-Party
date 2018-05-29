import React, {Component} from 'react';
import './Github.css';

class Github extends Component{
    state = {
        username: '',

    }

    handleChange = (ev) => {
        this.setState({
            username: ev.target.value
        });
    }
    
    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.props.history);
        this.props.history.push(`/github/${this.state.username}`);
    }


    render(){
        return(
            <div className = "Github">
                <h1> Github Component </h1>
                <img className = "logo"
                    src = "http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
                    alt = "GitHub"
                />

                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <input type = "text" value = {this.state.username} onChange = {this.handleChange}/>
                    </div>

                    <div>
                        <button type = "submit"> Look up Github user </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Github;