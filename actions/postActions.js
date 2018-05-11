import {FETCH_USERS, NEW_USER} from './types';

export const createUser = (postData) => dispatch => {
    fetch('https://emplug-usersapi.herokuapp.com/user',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch ({
            type: NEW_USER,
            payload: post
        }))
        .catch(err => console.log(err) )
    };