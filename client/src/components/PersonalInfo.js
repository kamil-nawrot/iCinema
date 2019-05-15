import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';

import { addPersonalInfo } from '../actions';

class PersonalInfo extends React.Component 
{
    renderError({ error, touched, focused }){
        if (touched && error) {
            return(
                <div className="error-message">
                    {error}
                </div>
            );
        }
    }

    renderInput = ({ input, label, inputType, meta }) => {
        const className = `${meta.error && meta.touched ? 'error-input' : ''}`;
        return (
            <div>
                <label>{label}</label>
                <input type={inputType} {...input} className={className}/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.addPersonalInfo(formValues);
    }

    render(){
        return (
            <div className="container" id="personal-info-box" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
            <NavLink className = "arrowleft" to = "/seats"> <i className = "fas fa-angle-double-left"> </i></NavLink>
                <h1>Enter your personal data</h1>
                <form id="personal-info" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Field name="firstName" component={this.renderInput} label="First Name" inputType="text" />
                    <Field name="lastName" component={this.renderInput} label="Last Name" inputType="text" />
                    <Field name="email" component={this.renderInput} label="EMail" inputType="text" />
                    <Field name="phone" component={this.renderInput} label="Phone Number" inputType="tel" />
                    <h3>Warning! Entering false data could cause you refusal of lounching the ticket.</h3>
                    <button className="nav-button" id="confirm-btn" style={{width: "50%"}}>SAVE</button>
                </form>
                <NavLink className = "arrowright" to = "/confirmation" > <i className = "fas fa-angle-double-right"> </i></NavLink>
            </div>
        );
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validate = formValues => {
    const errors = {};
    if (!formValues.firstName){
        errors.firstName = 'You must enter first name';
    }
    if (!formValues.lastName) {
        errors.lastName = 'You must enter last name';
    }
    if (!formValues.email) {
        errors.email = 'You must enter an email';
    } else if (!validateEmail(formValues.email)) {
        errors.email = 'Wrong email';
    } 
    if (!formValues.phone) {
        errors.phone = 'You must enter phone number';
    }
    return errors;
}

const mapStateToProps = state => {
    return {
        person: state.person
    };
}

PersonalInfo = connect(mapStateToProps, { addPersonalInfo })(PersonalInfo);

export default reduxForm({
    form: 'personalInfo',
    validate,
    destroyOnUnmount: false
})(PersonalInfo)