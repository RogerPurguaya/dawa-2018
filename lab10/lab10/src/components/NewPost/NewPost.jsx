import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import classes from './NewPost.css'

export default class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Tecsup',
        submitted: false
    }

    componentDidMount () {
        console.log( this.props )
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => this.props.history.replace('/posts'))
    }

    render(){
        let redirect = null
        if (this.state.submitted) {
            redirect = <Redirect to="Posts" />
        }
        return(
            <div className = {classes.NewPost}>
                {redirect}
                <h1>Add a post</h1>
               
                <label>Title</label>
                <input type="text" value={this.state.title} onChange= { (e) => this.setState({content: e.target.value})} />
                
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange= { (e) => this.setState({content: e.target.value})} />
                
                <label>Author</label>
                <select value={this.state.title} onChange= { (e) => this.setState({content: e.target.value})}>
                    <option value="Dawa">Dawa</option>
                    <option value="Tecsup">Tecsup</option>
                </select>
                <button onClick= {this.postDataHandler}>Add Post</button>
            </div>
        )
    }


}