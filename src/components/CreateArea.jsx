import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){
    const [isExpanded, setIsExpanded]=useState(false);

    const [note,setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name, value}=event.target;

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]:value
            };
        });
    }

    function submitNote(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        setIsExpanded(false);
    }

    function expanded(){
        setIsExpanded(true);
    }

    return <div>
        <form>
            {isExpanded ? <input 
            name="title" 
            value={note.title} 
            onChange={handleChange} 
            placeholder ="Title" 
            /> : null}
            
            <textarea 
            name="content" 
            onClick={expanded}
            value={note.content} 
            onChange={handleChange} 
            rows={isExpanded ? 3 : 1} 
            placeholder="Take a note..." 
            />
            <Zoom in={isExpanded}>
            <button 
            onClick={submitNote} ><AddIcon /></button></Zoom>
        </form>
    </div>;
}

export default CreateArea;