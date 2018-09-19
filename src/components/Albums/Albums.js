import React from 'react';
import {Link} from 'react-router-dom'

const Albums = (props) => {
    const {albums, photos} = props
    return(
    
        <ul>
            {
                albums.map(album =>{
                    return (
                        <ol key={album.id}>
                            <Link to={`/view-album/${album.id}`}>{album.title}</Link>
                        </ol>
                    )
                })
            }
        </ul>
    
    )
    
};

export default Albums;