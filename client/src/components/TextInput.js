import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function TextInput(props) {
    const classes = useStyles();

    return (
        <span className={classes.root}>
            <TextField 
                id={props.id}
                type="text" 
                label={props.label}
                autoComplete="off"
                variant="filled"
                onChange={props.onChange}
                required={props.required}
                error={props.error}
            />
        </span>
    )
}