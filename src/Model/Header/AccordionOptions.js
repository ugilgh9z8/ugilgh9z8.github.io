import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';

function AccordionOptions(props) {

    return(
        <div>
            <div class="ToDoList" onClick={props.onToDoListTable}>
        <Accordion TransitionProps={{ unmountOnExit: true }}  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ToDoList Table</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Auflistung aller bevorstehenden Aufgaben.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div class="CreateTask" onClick={props.onCreateTask}>
      <Accordion  TransitionProps={{ unmountOnExit: true }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Create Task</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Erstellen einer neuen Aufgabe.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </div>   );
}
export default AccordionOptions;