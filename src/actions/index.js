import axios from 'axios';

const instance = axios.create({
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO';

const BASE_URL = 'http://192.168.1.109/todo/';
const API_KEY = '?key=dsaffdafdfdafds';

export function fetchTodos(){
  const request = instance.get(`${BASE_URL}${API_KEY}`);
  return {
    type: FETCH_TODOS,
    payload: request
  }
}

export function createTodo(item){
  const request = instance.post(`${BASE_URL}${API_KEY}`, item);
  return{
    type: createTodo,
    payload: request 
  }
}
