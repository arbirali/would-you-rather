import { RECIEVE_USERS, ADD_USERS_ANSWER, ADD_NEW_USER_QUESTION } from '../actions/users'

export default function users (state={}, action) {
    switch (action.type) {
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USERS_ANSWER:
          const { qid, answer, authedUser } = action
          return {
            ...state,
            [authedUser]: {
              ...state[authedUser],
              answers: {
                ...state[authedUser].answers,
                [qid]: answer
              }
            }
          }
        case ADD_NEW_USER_QUESTION:
          const { question } = action
          return {
            ...state,
            [question.author]: {
              ...state[question.author],
              questions: state[[question.author]].questions.concat(question.id)
            }
          }
        default:
        return state
    }
}
