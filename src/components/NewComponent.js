import React, { Component } from 'react';

class NewComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age,
        };

    }
    addOne = ( ) => {
        this.setState({
            age: this.state.age + 1,
        });
    }


    render(){
        return(
            <div className="card">
                <h1>{this.props.firstName}</h1>
                <p>First Name: {this.props.lastName}</p>
                <p>Last Name: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.addOne}>Birthday Button</button>

            </div>
        );
    }

}

export default NewComponent;