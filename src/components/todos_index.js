import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions/index';
import styles from './css/todo_index.css';

class TodoIndex extends Component {
  componentWillMount(){
    this.props.fetchTodos().then(data => {
      console.log('Fetch data: ', data.payload.data.feed);
    })
  }

  renderTodos(){
    return this.props.todos.map( item =>{
      return(
        <Link to={`todo/${item.id}`} key={item.id}>
            <li className='list-group-item'>
              <strong>{item.title}</strong>
              <div className={styles.pullRight}>Complete By: {item.dueDate}</div>
            </li>
        </Link>
      )
    })
  }


  render(){
    return (
      <div>
        <Link to='/todo-new' className='btn btn-outline-primary float-right'>Add  item </Link>
        <h2>Where are my todos?</h2>
        <ul className='list-group'>
          {this.renderTodos()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state){
  return {todos: state.todos.all}
}


export default connect(mapStateToProps, {fetchTodos})(TodoIndex);
