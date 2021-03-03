// export const  userGetFetch = () => {
//   console.log('data.get');
//   return async dispatch => {
//     await fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((response) => response.json())
//     .then((data) => dispatch({
//       type: 'FETCH_REQUEST',
//       data,
//     })
//     );
//   }
// }

export const userGet=(data) => {
  console.log('data.get',data);
  return async dispatch => {
    dispatch({
      type: 'USER_GET',
      data,
    })
    
  }
}


