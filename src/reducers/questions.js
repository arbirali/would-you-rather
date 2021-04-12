import { RECIEVE_QUESTIONS } from '../actions/questions'
import { ADD_ANSWER } from '../actions/questions'

export default function questions(state={}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_ANSWER:
    console.log(action, 'this is the action ')
    console.log(action.authedUser, 'action.authedUser')
      return {
        ...state,
        users: {
          ...state.users,
          [action.authedUser]: {
            ...state.users[action.authedUser],
            answers: {
              ...state.users[action.authedUser.answers],
              [action.qid]: action.answer
            }
          }
        },
        questions: {
          ...state.questions,
          [action.qid]: {
              ...state.questions[action.qid],
              [action.answer]: {
                ...state.questions[action.qid][action.answer],
                votes: state[action.qid][action.answer].votes.push(action.authedId)
              }
          }
        }
      }
    default:
      return state
  }
}
