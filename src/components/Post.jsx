import React from 'react'
import './Post.css'

const Post = (props) => {
    return (
        <div className='post'>
            <img src={props.image} />
            <h3>{props.title}</h3>
            <small className='category'>{props.category}</small>
            <p className='location'>{props.location}</p>
            <a href={props.link}>
                <button>Detail</button>
            </a>
        </div>
    )
}

export default Post