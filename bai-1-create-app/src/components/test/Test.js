import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        data: {
            title: '',
            body: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(res => 
            this.setState({data: {title: res.title, body: res.body }})    
        );
    }

    // componentWillMount() {
    //     console.log('componentWillMount....');
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate...');
    // }

    // componentWillUpdate() {
    //     console.log('this is componentWillUpdate');
    // }

    render() {
        console.log('render.....adasdasda');
        const {data} = this.state;
        return (
            <div>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </div>
        )
    }
}
