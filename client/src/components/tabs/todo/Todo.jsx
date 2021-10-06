import {Grid} from "@mui/material";

import AddCard from '../../card/addCard/AddCard.jsx';

import "./Todo.scss"
import NewListModal from "../../modal/NewListModal.jsx";

const Todo = () => {
    return (  
        <Grid item className="todo">
            <AddCard />
            <NewListModal />
        </Grid>
    );
};
 
export default Todo;