import { useState, } from 'react';
import axios from 'axios';

import './posted.css'

export default function Posted() {

    const [title, setTitle] = useState("");
    const [username, setUsername] = useState(""); 
    const [desc, setDesc] = useState(""); 
    const [file, setFile] = useState(null); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const  newPost = {
            title,
            username,
            desc, 
            
        }; 
        if(file){
            const data = new FormData(); 
            const filename = Date.now() + file.name; 
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename; 
            try {
                await axios.post('/upload', data)
            } catch (error) {
                //afficher un truc
            }
        }
        try {
            const res = await axios.post('/posts', newPost);
            window.location.replace('/post/' + res.data._id); 
        } catch (error) {
            //afficher un truc
        } 
    }

    return (
        <div className="posted">
            {file && (
                <img 
                    className="postedImg"
                    src={URL.createObjectURL(file)} 
                    alt="postimage"
                />
            )}
            
           <form className="postForm" onSubmit={handleSubmit}>
               <div className="postFormGroup">
                   <label htmlFor="fileInput">
                       <i class="addFile fas fa-plus-square"></i>
                   </label>
                   <input 
                        type="file" 
                        id="fileInput" 
                        style={{display:"none"}} 
                        onChange={event => setFile(event.target.files[0])}/>
                   <input 
                        type="text" 
                        placeholder="Titre du post" 
                        className="titleInput" 
                        autoFocus={true}
                        onChange={event => setTitle(event.target.value)}
                    />
               </div>
               <div className="postFormGroup">
                   <input 
                        type="text" 
                        placeholder="Auteur" 
                        className="userInput" 
                        autoFocus={true}
                        onChange={event => setUsername(event.target.value)}
                    />
               </div>
               <div className="postFromGroup">
                   <textarea 
                        placeholder="description..." 
                        type="text" 
                        className="descInput desc"
                        onChange={event => setDesc(event.target.value)}
                    >

                    </textarea>
               </div>
               <button className="submit" type="submit">Poster</button>
           </form>  
        </div>
    )
}
