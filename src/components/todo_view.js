import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchTodo, deleteTodo} from '../actions/index';

class TodoView extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.fetchTodo(this.props.params.id).then(data => {
      console.log('data is: ', data);
    });
  }

  onDeleteClick(){
    this.props.deleteTodo(this.props.params.id).then(()=>{
      this.context.router.push('/')
    });
  };

  render(){
    const {todo} = this.props;

    if(!todo){
      return <div>Loading...</div>
    }

    return(
      <div>
          <Link to='/' className='btn btn-warning'>&laquo; Go Back</Link>
          <button
             onclick={this.onDeleteClick.bind(this)}
             className='btn btn-danger float-right'>
                Delete item
          </button>
          <h3>{todo.title}</h3>
          <h5>Comolete by: {todo.dueDate}</h5>
          <p>{todo.details}</p>
          <p>Created: {todo.created}</p>
          <p>Status {todo.completed ? 'Completed': 'open'}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{ todo: state.todos.todo}
}

export default connect(mapStateToProps, {fetchTodo, deleteTodo})(TodoView);
