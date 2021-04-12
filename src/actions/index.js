import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { getUsers } from './users'
import { getQuestions, addAnswer } from './questions'

import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../helpers/_Data'

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

export function saveQuestionAnswer (info) {
    console.log(info, 'info')
    return (dispatch) => {
        dispatch(showLoading())
        _saveQuestionAnswer(info)
        dispatch(addAnswer(info))
        dispatch(hideLoading())
    }
}
