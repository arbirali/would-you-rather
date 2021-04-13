import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { getUsers, addUserAnswer, addNewUserQuestion } from './users'
import { getQuestions, addAnswer, addNewQuestion } from './questions'

import { _getQuestions, _getUsers, _saveQuestionAnswer, _saveQuestion } from '../helpers/_Data'

export function handleInitialData (dispatch) {
    return (dispatch) => {
        dispatch(showLoading())
        _getUsers().then((users)=> {
            dispatch(getUsers(users))
            dispatch(hideLoading())
        })
        _getQuestions().then((questions) => {
            dispatch(getQuestions(questions))
            dispatch(hideLoading())
        })
    }
}

export function saveQuestionAnswer ({ qid, answer, history }) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(showLoading())
        return _saveQuestionAnswer({authedUser, qid, answer }).then(()=> {
            dispatch(addAnswer( {authedUser, qid, answer} ))
            dispatch(addUserAnswer( {authedUser, qid, answer} ))
            dispatch(hideLoading())
        })
    }
}

export function handleNewQuestion ({ optionOneText, optionTwoText }) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        const author = authedUser
        dispatch(showLoading())
        return _saveQuestion({optionOneText, optionTwoText, author}).then((data)=> {
            console.log(data, "data")
            dispatch(addNewQuestion(data))
            dispatch(addNewUserQuestion(data))
            dispatch(hideLoading())
        })
    }
}