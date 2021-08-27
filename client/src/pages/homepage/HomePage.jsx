import React, {useEffect, useState} from 'react'; 
import { useLocation } from 'react-router';
import axios from 'axios'; 

import './homepage.css'; 
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts'; 
import SideBar from '../../components/sidebar/SideBar'; 


export default function HomePage() {

    const [posts, setPosts] = useState([]); 
    const {search}= useLocation(); 


    useEffect(() =>{
        const displayPosts = async() =>{
            const res = await axios.get('/posts' + search);
            setPosts(res.data);
        }
        displayPosts()
    },[search]);

    return (
        <>  
            <Header/>
            <div className="homepage">
                <SideBar/>
                <Posts posts={posts}/>
            </div>
        </>
    )
}
