import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'

import {POST_URL, COMMENT_URL, PHOTO_URL, ALBUM_URL, USER_URL} from '../Contants'

//Component
import Post from './Post/Post.js'
import ViewPost from './ViewPost/ViewPost'
import Comment from './Comment/Comment'
import Photos from './Photos/Photos';
import Albums from './Albums/Albums'
import NavBar from './NavBar/NavBar';
import Users from './Users/Users';

class App extends Component {
      constructor(props) {
        super(props);
        this.state={
            albums:[],
            photos:[],
            comments:[],
            posts:[],
            users:[],
            isLoaded:false,
            error:null
        }
    }

    async getPost(){
        const res = await axios(POST_URL)
        return await res
    }

    async getComment(){
        const res = await axios(COMMENT_URL)
        return await res
    }

    async getPhotos(){
      const res = await axios(PHOTO_URL)
      return await res
    }

    async getAlbums(){
      const res = await axios(ALBUM_URL)
      return await res
    }

    async getUsers(){
      const res = await axios(USER_URL)
      return await res
    }




    componentDidMount(){
        this.getPost()            
            .then( (result) =>{
                this.setState({
                    isLoaded:true,
                    posts: result.data
                })
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                })
            }
            )
        
        this.getComment()
            .then((result)=>{
                this.setState({
                    comments: result.data
                })
            },
            (error)=>{
                console.log(error)
            })

        this.getPhotos()
        .then((result)=>{
            this.setState({
                photos: result.data
            })
        },
        (error)=>{
            console.log(error)
        })

        this.getAlbums()
        .then((result)=>{
            this.setState({
                albums: result.data
            })
        },
        (error)=>{
            console.log(error)
        })

        this.getUsers()
        .then((result)=>{
            this.setState({
                users: result.data
            })
        },
        (error)=>{
            console.log(error)
        })
    }

  render() {
    const {error, posts, isLoaded, comments, photos, albums, users} = this.state
    
    return (
      <div>
        <NavBar isLoaded={isLoaded}/> 
        <Switch>
            <Route exact path='/' render={(props) =>(
              <Post {...props} comments={comments} error={error} posts={posts} isLoaded={isLoaded} />
            )}/>
            <Route path='/view-post/:id' render={(props) =>(
              <ViewPost {...props} comments={comments} posts={posts}/>
            )}/>
            <Route path='/view-comment/:id' render={(props) =>(
              <Comment {...props} comments={comments}/>
            )}/>
            <Route path='/album' render={(props)=> (
              <Albums {...props} photos={photos} albums={albums}/>
            )}/>
            <Route path='/view-album/:id' render={(props)=> (
              <Photos {...props} photos={photos}/>
            )}/>
            <Route path='/users' render={(props)=>(
              <Users {...props} users={users}/>
            )}/>
        </Switch>
      </div>

    );
  }
}

export default App;
