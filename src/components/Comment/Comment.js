import React from 'react';

const Comment = (props) => {
    const {comments, match} = props
    console.log(props)
    return (
        <div>
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
    );
};

export default Comment;