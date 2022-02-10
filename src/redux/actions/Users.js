import {FAILURE, FETCH_USERS, REQUEST, SUCCESS} from '../constants/Users'


// export const loadUsers = () => async (dispatch, getState) => {
//     const state = getState();
//     const loading = state.loading
//     const loaded = state.loaded
//     console.log('asd')
  
//     if (loading === null && loaded === null) return;
//     dispatch({ type: FETCH_USERS + REQUEST });
//     try {
//       const data = await fetch(`https://jsonplaceholder.typicode.com/users`).then((res) =>
//         res.json()
//       );
//       dispatch({ type: FETCH_USERS + SUCCESS, data });
//     } catch (error) {
//       dispatch({ type: FETCH_USERS + FAILURE, error });
//     }
//   };

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
