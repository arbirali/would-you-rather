export const RECIEVE_USERS = 'RECIEVE_USERS'
export const ADD_USERS_ANSWER = 'ADD_USERS_ANSWER'
export const ADD_NEW_USER_QUESTION = 'ADD_NEW_USER_QUESTION'

export function getUsers (users) {
    return {
        type: RECIEVE_USERS,
        users
    }
}

export function addUserAnswer ({ authedUser, qid, answer }) {
    return {
        type: ADD_USERS_ANSWER,
        authedUser,
        answer,
        qid
    }
}

export function addNewUserQuestion (question) {
  return {
    type: ADD_NEW_USER_QUESTION,
    question
  }
}

