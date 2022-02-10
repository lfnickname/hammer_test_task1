import {FAILURE, FETCH_USERS, REQUEST, SUCCESS} from '../constants/Users'

export const requestUsers = () => {
  return { type: FETCH_USERS + REQUEST }
};

export const requestUsersSuccess = (data) => {
  return { type: FETCH_USERS + SUCCESS, payload: data }
};

export const requestUsersError = (error) => {
  return { type: FETCH_USERS + FAILURE, payload: error }
};

export const fetchUsers = () => {
  return { type: FETCH_USERS + REQUEST }
};
