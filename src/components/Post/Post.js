import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Comments from '../Comments/Comments'



class Post extends Component {
    

    render () {
        const {error, posts, isLoaded, comments} = this.props
        console.log(comments)
        if(error){
            return <div>Error: {error.message}</div>
        }else if(!isLoaded){
            return <div>Loading .....</div>
        }else{
            return (
                <ol>
                    {
                        posts.map(post => (
                            <div key={post.id}>
                            <Link key={post.id} to={`/view-post/${post.id}`}> 
                                <h3>{post.title}</h3> 
                                <p>{post.body}</p>
                            </Link>
                            <Link to={`/view-comment/${post.id}`}><Comments>{comments.filter(comment => comment.postId === post.id).length}</Comments></Link>
                           </div>
                        ))
                    }
                </ol>
            )
        }
    }
}

export default Post