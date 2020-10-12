import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));


export default function Page() {
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className={classes.root} 
    // style={{paddingTop:'30vh '}}
    >
      
      
      
      <FormControl variant="outlined" className={classes.formControl}>
        <div className="flex-container">
        <div className="items">
      
        <InputLabel style={{width:'200px'}} htmlFor="outlined-age-native-simple">Search Engine</InputLabel>
        <Select
          native
          value={state.engine}
          onChange={handleChange}
          label="Search Engine"
          inputProps={{
            name: 'engine',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'200px'}}
        >
          
          <option aria-label="None" value="" />
          <option value={'google'}>Google</option>
          <option value={'Bing'}>Bing</option>
          <option value={'Yahoo'}>Yahoo</option>
          <option value={'DuckDuckGo'}>DuckDuckGo</option>
        </Select>
        </div>

        {/* <div className="items">
      
      <InputLabel style={{width:'200px'}} htmlFor="outlined-age-native-simple">Website</InputLabel>
      <Select
        native
        value={state.engine}
        onChange={handleChange}
        label="Website"
        inputProps={{
          name: 'engine',
          id: 'outlined-age-native-simple',
        }}
        style={{width:'200px'}}
      >
        
        <option aria-label="None" value="" />
        <option value={'google'}>BBC News</option>
        <option value={'Bing'}>CNN</option>
        <option value={'Yahoo'}>Fox News</option>
        <option value={'DuckDuckGo'}>The Guardian</option>
      </Select>
      </div> */}

        
      

      
        {/* <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select> */}
      
      <div className="items">
              <TextField
          id="outlined-secondary"
          label="Search Text"
          variant="outlined"
          color="secondary"
        />
        </div>
        </div>
      </FormControl>
   
     
      
    </div>
  )
}
