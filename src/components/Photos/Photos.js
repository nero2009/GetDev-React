import React, { Component } from 'react';
import './Photos.css'

class Photos extends Component {
    render() {
        console.log(this.props)
        const {photos, match} = this.props
        return (
            <div className='image-gallery'>
                {
                    photos.filter((photo)=>{
                        return photo.albumId === parseInt(match.params.id) 
                    }).map(photo =>{
                        return( 
                            <div  key={photo.id}>
                                <img src={`${photo.thumbnailUrl}.png`} />
                                hhhh
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Photos;