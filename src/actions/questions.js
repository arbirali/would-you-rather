export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'

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

export function addNewQuestion (question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  }
}
