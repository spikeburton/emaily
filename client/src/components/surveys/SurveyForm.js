import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

export class SurveyForm extends Component {
  render() {
    return (
      <div>
        <h3>SurveyForm!</h3>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
