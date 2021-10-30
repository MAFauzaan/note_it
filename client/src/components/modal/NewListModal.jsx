import { useState } from "react";
import { Modal, Paper, TextField, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CreateIcon from '@mui/icons-material/Create';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios'


import { deactivateModal } from "../../store/actions/modalActions";
import { Labels } from "../labels/labels";

import "./NewListModal.scss"

require('dotenv').config();

const NewListModal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);

    
    const [ title, setTitle ] = useState(" ");
    const [ content, setContent ] = useState(" ");
    const [ label, setLabel ] = useState({});
    const [ hover, setHover ] = useState(false)


    const handleTitleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    } 

    const handleContentChange = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    }

    const postNote = () => {
        axios({
            method: 'POST',
            data: {
                title: title,   
                label: label,
                content: content
            },
            url: `${process.env.REACT_APP_BASE_URL}/postnewnote`
        })
    }

    console.log( label);

    return(
    <Modal
        open={modal}
        onClose={() => dispatch(deactivateModal())}
    >
        <Paper elevation={3} className="modal-overlay" sx={{outline: 0}}>

            <div className="input-content">
                <div className="header">
                    <Typography variant="h4">Create a new note <CreateIcon sx={{fontSize: '30px'}}/></Typography>
                </div>
                <hr /><br /><br />
                {
                    label &&
                    <div 
                        className="label" 
                        style={{backgroundColor: `${label.color}`}}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onClick={() => setLabel(null)}
                    >
                        <Typography>{label.name}</Typography> 
                        {
                            hover?
                            <CancelIcon className="cancel-icon"/>                       
                            :
                            null
                        }
                    </div>
                }
                <div className="title-input">
                    <TextField 
                        // value={title}
                        onChange={handleTitleChange}
                        fullWidth
                        variant="standard"
                        placeholder="Enter the title here..."
                        InputProps={{
                            disableUnderline: true
                        }}
                    />
                </div> 
                <div className="content-input">
                    <TextField 
                        // value={content}
                        onChange={handleContentChange}
                        fullWidth
                        multiline
                        variant="standard"
                        placeholder="Enter the content here..."
                        InputProps={{
                            disableUnderline: true
                        }}
                    />
                </div>
                <div className="btn-group">
                    <Button  className="save-button"  onClick={postNote}>Save</Button>
                    <Button  className="cancel-button"  onClick={postNote}>Cancel</Button>
                </div>
            </div>

            <div className="utility">
               <div className="labels">
                   <Typography sx={{textAlign: 'center'}}>Add a label</Typography>
                   {
                       Labels.map(label => (
                            <Button 
                                fullWidth 
                                className="label-button"
                                sx={{backgroundColor: `${label.color}`}}
                                onClick={() => setLabel(label)}
                            >
                                {label.name}
                            </Button>   
                       ))
                   }
                   <Button fullWidth className="add-label">
                       <AddCircleOutlineIcon sx={{color: '#ffff'}}/>
                    </Button>
                </div>
            </div>
            
        </Paper>
    </Modal>
    )
}

export default NewListModal;