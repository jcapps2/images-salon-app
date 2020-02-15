import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export default function Dropdown(props) {
    const classes = useStyles()
    // const [card] = React.useState('');

    // const handleChange = event => {
    //     setCard(event.target.value);
    //     //console.log(event.target.value)     // here i'm getting the value i need to pass over to Form
    // };

    return (
        <div>
            <FormControl required className={classes.formControl}>
                <InputLabel id="simple-select-label">Card type</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id={props.id}
                    name={props.name}
                    // value={card}
                    // onChange={handleChange}
                    onChange={props.onChange}
                    className={classes.selectEmpty}
                >
                    <MenuItem value={0.015}>Visa (1.5%)</MenuItem>
                    <MenuItem value={0.02}>Mastercard (2%)</MenuItem>
                    <MenuItem value={0.03}>American Express (3%)</MenuItem>
                </Select>
                {/* <FormHelperText>Required</FormHelperText> */}
            </FormControl>
        </div>
    )
}