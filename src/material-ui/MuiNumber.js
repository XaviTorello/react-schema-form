/**
 * Created by steve on 15/09/15.
 */
import React from 'react';
var utils = require('../utils');
var classNames = require('classnames');
import ValidationMixin from '../ValidationMixin';
const TextField = require('material-ui/lib/text-field');

/**
 * There is no default number picker as part of Material-UI.
 * Instead, use a TextField and validate.
 */
class MuiNumber extends React.Component {

    constructor(props) {
        super(props);
        this.preValidationCheck = this.preValidationCheck.bind(this);
        this.state = {
            lastSuccessfulValue : this.props.value
        }
    }

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * Prevent the field from accepting non-numeric characters.
     * @param e
     */
    preValidationCheck(e) {
        if (this.isNumeric(e.target.value)) {
            this.setState({
                lastSuccessfulValue: e.target.value
            });
            this.props.onChangeValidate(e);
        } else {
            this.refs.numberField.setValue(this.state.lastSuccessfulValue);
        }
    }

    render() {
        return (
            <TextField
                type={this.props.form.type}
                floatingLabelText={this.props.form.title}
                hintText={this.props.form.placeholder}
                errorText={this.props.error}
                onChange={this.preValidationCheck}
                defaultValue={this.state.lastSuccessfulValue}
                ref="numberField"
                style={{width: '100%'}}/>
        );
    }
}

export default ValidationMixin(MuiNumber);