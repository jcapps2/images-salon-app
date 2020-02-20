import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextInput from './TextInput'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import validator from 'validator'



const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
            color: '#4db6ac',
            border: '1px solid #4db6ac',
            backgroundColor: '#fff',
            fontWeight: 'bold',
        },
    },
  }));


export default function MyForm(props) {
    const classes = useStyles()

    // Setting initial state
    const [service, setService] = React.useState(0)
    const [tip, setTip] = React.useState(0)
    const [percentage, setPercent] = React.useState('')

    // Set state for service value
    const serviceHandler = (event) => {
        setService(event.target.value)
    }

    // Set state for tip value
    const tipHandler = (event) => {
        setTip(event.target.value)
    }

    // Set state for percentage value
    const percentHandler = (event) => {
        setPercent(event.target.value)
    }

    const handleSubmit = (event) => {
        let finalService = validator.isCurrency(service) ? parseFloat(service) : "null"

        let finalTip

        // Check to see if tip exists and is valid, if not, set to 0
        if (tip) {
            finalTip = validator.isCurrency(tip) ? parseFloat(tip) : "null"
        } else {
            finalTip = 0
        }
        

        console.log('Service = ' + finalService)
        console.log('Tip = ' + finalTip)
        console.log('Percent = ' + percentage)

        if (finalService === "null" || finalTip === "null") {
            document.getElementById("error-bar").style.display = 'inline-block'
        } else {
            let total = finalService + finalTip

            // Calculate percentage of total, then add that to the total
            let percent = total * percentage
            total = percent + total
            total = total.toFixed(2)

            // Display total and remove error bar (if showing)
            document.getElementById("display").innerHTML = 'Total: $' + total
            document.getElementById("error-bar").style.display = 'none'
        }

        
        event.preventDefault()     
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput id="service-id" name="service" label="Service amount" required onChange={serviceHandler} />
            <TextInput id="tip-id" name="tip" label="Tip (optional)" onChange={tipHandler} />

            <FormControl className={classes.formControl}>
                <InputLabel id="simple-select-label">Card type</InputLabel>
                <Select value={percentage} onChange={percentHandler} >
                    <MenuItem value={0.015}>Visa (1.5%)</MenuItem>
                    <MenuItem value={0.02}>Mastercard (2%)</MenuItem>
                    <MenuItem value={0.03}>American Express (3%)</MenuItem>
                </Select>
            </FormControl>

            <div className={classes.button}>
                <Button variant="contained" size="large" type="submit">Submit</Button>
            </div>
        </form>
    )
}