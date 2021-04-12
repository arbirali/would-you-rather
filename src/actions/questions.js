export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'

export function getQuestions (questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions
  }
}

export function addAnswer ({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    answer,
    qid
  }
}
