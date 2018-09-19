import React, { Component } from 'react'

import Comment from '../Comment/Comment'

class componentName extends Component {
    constructor (props) {
        super(props)
       
    }
    
    render () {
        const {posts, comments,match} = this.props
        console.log(this.props)
        return (
            <div>
                {
                    posts.filter((post) =>{
                        return post.id === parseInt(match.params.id)
                    }).map(post =>{
                        return (
                            <div key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        )
                    })
                        
                }
                {
                    comments.filter((comment)=>{
                        return comment.postId === parseInt(match.params.id)
                    }).map(comment =>{
                        return (
                            <div key={comment.id}>
                                <p>{comment.name}</p>
                                <p>{comment.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default componentName