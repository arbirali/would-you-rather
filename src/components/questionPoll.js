import { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class QuestionPoll extends Component {

  render () {
    const { question, users, authedUser, qid } = this.props
    const optionOnePercent = Math.round(question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)*100)
    const optionTwoPercent = Math.round(question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)*100)

    if (authedUser === null) {
      return <Redirect to="/login" />
    }

    return (
      <div>
        <Link to="/"><span className="back-arrow">&#8678;</span> Go Back</Link>
        <div className="question-post">
          <div className="image-block">
            <img src={`../assets/images/${users[question.author].avatarURL}`} alt={users[question.author].name} />
          </div>
          <div className="text-block">
            <span><i>{users[question.author].name}</i> asks: </span>
            <h2>Would you rather?</h2>
            {
              (users[authedUser].answers[qid] === 'optionOne')?
              (
                <div className="alert alert-success">
                  <small>Your Answer</small>
                  <span className="text-1">{question.optionOne.text}</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: optionOnePercent + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      {optionOnePercent}%
                    </div>
                  </div>
                </div>
              ): (
                <div>
                  <span className="text-1">{question.optionOne.text}</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: optionOnePercent + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      {optionOnePercent}%
                    </div>
                  </div>
                </div>
              )
            }
            <span className="text-or">Or</span>
            {
              (users[authedUser].answers[qid] === 'optionTwo')?
              (
                <div className="alert alert-success">
                  <small>Your Answer</small>
                  <span className="text-2">{question.optionTwo.text}</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: optionTwoPercent + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      {optionTwoPercent}%
                    </div>
                  </div>
                </div>
              ): (
                <div>
                  <span className="text-2">{question.optionTwo.text}</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: optionTwoPercent + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      {optionTwoPercent}%
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
  const qid = ownProps.match.params.id
  const question = questions[qid]
  return {
    authedUser,
    question,
    users,
    qid
  }
}

export default connect(mapStatetoProps)(QuestionPoll);
