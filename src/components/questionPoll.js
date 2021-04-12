import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class QuestionPoll extends Component {

  render () {
    const { questions, users, authedUser, id } = this.props
    const question = questions[id]
    return (
      <div className="">
        <Link to="/dashboard"><span className="back-arrow">&#8678;</span> Go Back</Link>
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
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)*100 + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      {`${question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)*100}`}%
                    </div>
                  </div>
                </div>
              ): (
                <div>
                  <span className="text-1">{question.optionOne.text}</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)*100 + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      {`${question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)*100}`}%
                    </div>
                  </div>
                </div>
              )
            }
            <span className="text-or">Or</span>
            {
              (users[authedUser].answers[id] === 'optionTwo')?
              (
                <div className="alert alert-success">
                  <small>Your Answer</small>
                  <span className="text-2">{question.optionTwo.text}</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)*100 + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      {`${question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)*100}`}%
                    </div>
                  </div>
                </div>
              ): (
                <div>
                  <span className="text-2">{question.optionTwo.text}</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)*100 + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      {`${question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)*100}`}%
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStatetoProps ({questions, authedUser, users}, ownProps) {
  return {
    questions,
    authedUser,
    users,
    id: ownProps.match.params.id
  }
}

export default connect(mapStatetoProps)(QuestionPoll);
