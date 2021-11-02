import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Grid, ThemeProvider } from "@mui/material";
import NoteIcon from '@mui/icons-material/Note';
import DeleteIcon from '@mui/icons-material/Delete';

import Todo from "./components/tabs/todo/Todo";
import theme from "./CustomTheme";
import "./App.scss"
import { getNotes } from "./store/actions/notesActions";
    
const App = () => {                                 
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes)

    const [ defaultTab, setDefaultTab ] = useState('todo')

    useEffect(() => {
        dispatch(getNotes())
    }, [dispatch]);

    console.log(notes)

    return (  
        <ThemeProvider theme={theme}>
            <Container className="container">
                <h1>Note-it!</h1>
                <div className="btn-group">
                    <Button 
                        onClick={() => setDefaultTab('todo')} 
                        style={defaultTab === 'todo' ? {backgroundColor: '#403f3d', color: '#ffff'}: null} 
                        sx={{paddingLeft: '23px', paddingRight: '23px', marginRight: '5px'}}
                    >
                        <NoteIcon />
                    </Button>
                    <Button 
                        onClick={() => setDefaultTab('bin')} 
                        style={defaultTab === 'bin' ? {backgroundColor: '#403f3d', color: '#ffff'}: null}
                        sx={{paddingLeft: '23px', paddingRight: '23px', marginRight: '5px'}}
                    >
                        <DeleteIcon />
                    </Button>
                </div>
                <hr />
                <Grid container>
                    {
                        defaultTab === 'todo' ?
                        <Todo />
                        :
                        <p>finished</p>
                    }
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
 
export default App;