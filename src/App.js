import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles'
import './App.css';
import PersonIcon from '@mui/icons-material/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.success.dark,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Button variant="contained" size='large' startIcon={<PersonIcon />}
        className={classes.root}
      >Contained</Button>
    </div>
  );
}

export default App;
