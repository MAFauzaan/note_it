import { Card, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {activateModal} from "../../../store/actions/modalActions"; 

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import "./AddCard.scss"

const AddCard = () => {
    const dispatch = useDispatch()
    return (  
        <Card variant="outlined" className="cardContainer" onClick={() => dispatch(activateModal())}>
            <AddCircleOutlineIcon style={{fontSize: '10rem'}} /><br />
            <Typography style={{textAlign: 'center'}}>Add Note</Typography>
        </Card>
    );
}
 
export default AddCard;