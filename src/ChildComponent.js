import React, { Component } from 'react';

class ChildComponent extends Component {

    constructor() {
        super()
        console.log('My ChildComponent is being created')
    }

    componentDidMount() {
        console.log('My ChildComponent has mounted')
    }

    componentWillUnmount() {
        console.log('My Childcomponent is unmounting')
    }

    render() {
        console.log('My ChildComponent is rendering its JSX')
        
        return (
            <h2>I'm the child component</h2>
        )
    }
}

export default ChildComponent;