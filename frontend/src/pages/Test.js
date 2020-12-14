import React, { Component } from 'react'

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            a: 10
        }
        //it runs firstly
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("ComponentDidMount");
        //it runs after component render
        //Rest Api Request
        this.setState({
            a: 20
        })
    }

    componentDidUpdate(prevProps, prevState) {
        //called immediately after the update takes place.
        console.log("Component Did Update");
    }

    shouldComponentUpdate(){
        //default true.
        //if you return true, componentWillUpdate, render and componentDidUpdate wouldnt call.
        //if you dont want render jsx format again, you return false for shouldComponentUpdate method
        console.log("Should Component Update") 
        return true;
    }
    

    render() {
        //it runs secondly(after constructor)
        console.log("Render");
        return (
            <div>

            </div>
        )
    }
}

export default Test;