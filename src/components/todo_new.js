import React, {PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createTodo} from '../actions/index.js';
import {browserHistory} from 'react-router';

class TodoNew extends React.Component{
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(formProps){
    console.log('Form props', formProps);
    this.props.createTodo(formProps).then(()=>{
      this.context.router.push('/');
    });
  }

  createInput(input, type){
    switch (type) {
      case 'textarea':
        return(
          <textarea {...input} className='form-control'></textarea>
        );
      default:
        return (
          <input {...input} className='form-control' type={type}/>
        )

    }
  }

  renderInput({input, label, type}){
    return(
      <div className='form-group row'>
        <label className='col-sm-3 col-form-label'>{label}</label>
        <div className='col-sm-9'>
          {this.createInput(input, type)}
        </div>
      </div>
    )
  }
  render(){
    const {handleSubmit} = this.props;

    return(
      <div>
        <h2>Create new todo item</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field name='title' component={this.renderInput.bind(this)} type='text' label="Title"/>
            <Field name='details' component={this.renderInput.bind(this)} type='textarea' label="Details"/>
            <Field name='completeBy' component={this.renderInput.bind(this)} type='date' label="Complete By"/>

          <button className='btn btn-outline-primary'>Add Item</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {createTodo})(reduxForm({
  form: 'TodoNew'
})(TodoNew));
