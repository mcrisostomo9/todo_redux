import axios from 'axios';

const instance = axios.create({
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO';

const BASE_URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
const API_KEY = '?key=dsaffdafdfdafds';

export function fetchTodos(){
  const request = instance.get(`${BASE_URL}`);
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
