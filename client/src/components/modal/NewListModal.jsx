import { useState } from "react";
import { Modal, Paper, TextField, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CreateIcon from '@mui/icons-material/Create';

import { deactivateModal } from "../../store/actions/actions";
import { Labels } from "../labels/labels";

import "./NewListModal.scss"

const NewListModal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);

    
    const [ title, setTitle ] = useState(" ");
    const [ content, setContent ] = useState(" ");


    const handleTitleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    } 

    const handleContentChange = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    }

    console.log(title, content)

    return(
    <Modal
        open={modal}
        onClose={() => dispatch(deactivateModal())}
    >
        <Paper elevation={3} className="modal-overlay" sx={{outline: 0}}>

            <div className="input-content">
                <div className="header">
                    <Typography variant="h3">Create a new note <CreateIcon sx={{fontSize: '30px'}}/></Typography>
                    <div className="label">
                        
                    </div>
                </div>
                <hr />
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
            </div>

            <div className="utility">
               <div className="labels">
                   <Typography>Add a label</Typography>
                   {
                       Labels.map(label => (
                            <Button>{label.name}</Button>   
                       ))
                   }
                   <Button><CreateIcon/></Button>
                </div>
            </div>
            
        </Paper>
    </Modal>
    )
}

export default NewListModal;