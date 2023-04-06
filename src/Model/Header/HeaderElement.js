import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccordionOptions from './AccordionOptions';

function HeaderElement(props){
    const [expanded, setExpanded] = React.useState(false);
    return(
        <Box sx={{ flexGrow: 222 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setExpanded(!expanded)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                To-Do List
              </Typography>
              
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          {expanded ? <AccordionOptions onToDoListTable={props.onToDoListTable} onCreateTask={props.onCreateTask}  /> : <p></p>}
      
        </Box>
      );
}
export default HeaderElement;