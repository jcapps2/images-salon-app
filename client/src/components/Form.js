import React, { Component } from 'react';
import TextInput from './TextInput';
import MyButton from './Button';
import Dropdown from './Dropdown';
import validator from 'validator';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            service: '0',
            tip: '0',
            percentage: '0',
            total: '0'
        };
    }

    changeHandler = (event) => {
        let nam = event.target.name
        let val = event.target.value
        this.setState({[nam]: val})
    }

    // selectHandler = (event) => {
    //     let val = event.target.value
    //     console.log('test')
    //     console.log(val)
    // }


    handleSubmit = (event) => {
        let service = this.state.service
        let tip = this.state.tip
        let total = parseFloat(this.state.total)
        
        if (validator.isCurrency(service) && validator.isCurrency(tip)) {
            total = parseFloat(service) + parseFloat(tip)

            let percent = total * this.state.percentage
            console.log('Percent of total: ' + percent)

            total = (total * this.state.percentage) + total

            total = total.toFixed(2)

            document.getElementById("display").innerHTML = 'Total: $' + total

            // Remove error message
            document.getElementById("error-bar").style.display = 'none'
        } else {    // reset state of service and tip values if improper values are entered
            this.setState((state, props) => {
                return {
                    service: '0',
                    tip: '0'
                }
            })
            document.getElementById("service-id").value=''
            document.getElementById("tip-id").value=''
            document.getElementById("display").innerHTML=''

            // Display error message
            document.getElementById("error-bar").style.display = 'inline'
        }

        // console.log(this.state)
        event.preventDefault();     // Keeps page from reloading on form submission
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput id="service-id" name="service" label="Service amount" onChange={this.changeHandler} required/>
                <TextInput id="tip-id" name="tip" label="Tip (optional)" onChange={this.changeHandler}/>
                <Dropdown id="percentage-id" name="percentage" value={this.props.value} onChange={this.changeHandler} required/>
                <MyButton/>
            </form>
        )
    };
}


export default Form;