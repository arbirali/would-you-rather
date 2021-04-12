import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UnansweredQuestion extends Component {
  render () {
    const { questions, id, users, authedUser } = this.props
    const question = questions[id]
    return (
      <Fragment>
        <div className="question-post">
          <div className="image-block">
            <img src={`../assets/images/${users[question.author].avatarURL}`} alt={users[question.author].name} />
          </div>
          <div className="text-block">
            <span><i>{users[question.author].name}</i> asks: </span>
            <h2>Would you rather?</h2>
            {
              (users[authedUser].answers[id] === 'optionOne')?
              (
                <div className="alert alert-success">
                  <small>Your Answer</small>
                  <span className="text-1">{question.optionOne.text}</span>
                </div>
              ): (
                <span className="text-1">{question.optionOne.text}</span>
              )
            }
            <span className="text-or">Or</span>
            {
              (users[authedUser].answers[id] === 'optionTwo')?
              (
                <div className="alert alert-success">
                  <small>Your Answer</small>
                  <span className="text-2">{question.optionTwo.text}</span>
                </div>
              ): (
                <span className="text-2">{question.optionTwo.text}</span>
              )
            }
            <Link to={`/question/${question.id}`} className="btn btn-primary btn-block">View Poll</Link>
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStatetoProps ({questions, authedUser, users}, {id}) {
  return {
    questions,
    authedUser,
    users,
    id
  }
}

export default connect(mapStatetoProps)(UnansweredQuestion);
