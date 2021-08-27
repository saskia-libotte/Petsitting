import React from 'react'
import {Link} from 'react-router-dom'; 



import './post.css'; 
export default function Post({post}) {

    const publicFolder = "http://localhost:5000/images/"
    return (
        <div className="post">
            <div>
                {post.photo && (
                    <img 
                        className="postImg"
                        src={publicFolder + post.photo}
                        alt="postimage"          
                    />
                )}
                <div className="postInfo">
                    <Link className="link" to={`/post/${post._id}`}>
                        <span className="title">{post.title}</span>
                    </Link>
                    <span className="author">{post.username}</span>
                    <hr/>
                    <p className="desc">{post.desc}</p>
                    <hr/>
                    <span className="date">{new Date(post.createdAt).toLocaleString('fr-FR',{
                        weekday: 'long',
                        year:'numeric',
                        month: 'long',
                        day:'numeric' 
                    })}</span>
                </div>
            </div>
        </div>
    )
}
