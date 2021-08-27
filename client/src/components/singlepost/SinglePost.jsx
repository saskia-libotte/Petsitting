import React, {useEffect, useState,} from 'react';
import {useLocation} from 'react-router'; 
import axios from 'axios'; 

import "./singlepost.css"; 

export default function SinglePost() {

    
    const publicFolder = "http://localhost:5000/images/"; 
    const location = useLocation();
    const path = location.pathname.split('/')[2]; 
    const [post, setPost] = useState({}); 

    const [title, setTitle] = useState(''); 
    const [desc, setDesc] = useState(''); 
    const [update, setUpdate] = useState('');

    useEffect(() => {
        const displayPost = async () => {
            const res = await axios.get('/posts/'+ path);
            setPost(res.data); 
            setTitle(res.data.title)
            setDesc(res.data.desc)
        };
        displayPost()
    }, [path]); 

    const handelDelete = async () =>{
         try {
             await axios.delete('/posts/'+ path); 
             window.location.replace('/');
         } catch (error) {
             
         }
    }

    const handleUpdate = async () =>{
        try {
             await axios.put('/posts/'+path,{
                title, 
                desc
             });
             
             window.location.reload();
        } catch (error) {
            
        }
    }


    return (
        <div className="singlePost">
           <div className="wrapper">
                {post.photo && (
                    <img 
                        className="image" 
                        src={publicFolder + post.photo} 
                        alt="postimage"
                />
                )}
                {
                    update ? <input type="text" value={title} className="titleInput" autoFocus onChange={(event)=>setTitle(event.target.value)}/> : (
                        <h1 className="title">
                                {post.title}
                            < div className="edit">
                                <i className="editIcone fas fa-edit" onClick={()=>setUpdate(true)}></i>
                                <i className="deleteIcone fas fa-eraser" onClick={handelDelete}></i>
                            </div> 
                        </h1>
                    )
                }
                
                <div className="postInfo">
                    <span className="postAuthor">
                            <i>{post.username}</i>
                    </span>
                   
                    <span className="postDate">{new Date(post.createdAt).toLocaleString('fr-FR',{
                        weekday: 'long',
                        year:'numeric',
                        month: 'long',
                        day:'numeric' 
                    })}</span>
                </div>
                {
                    update ? (<textarea className="descInput" value={desc} onChange={(event)=>setDesc(event.target.value)}>

                    </textarea>) : (<p>{post.desc}</p>)
                }
                {
                    update &&  (<button className="singlePostButton" onClick={handleUpdate}>
                                Modifer
                        </button>
                    )
                }
                
            </div>
        </div>
    )
}
