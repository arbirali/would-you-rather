import { RECIEVE_QUESTIONS, ADD_ANSWER, ADD_NEW_QUESTION } from '../actions/questions'

export default function questions(state={}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_ANSWER:
      const { authedUser, qid, answer } = action
      return {
        ...state,
        [qid]: {
            ...state[qid],
            [answer]: {
              ...state[qid][answer],
              votes: state[qid][answer].votes.concat(authedUser)
            }
        }
      }
    case ADD_NEW_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: {
          ...state[question.id],
          ...question
        }
      }
    default:
      return state
  }
}
