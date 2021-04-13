import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UnansweredQuestion extends Component {
  render () {
    const { questions, id, users } = this.props
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
            <span className="text-1">{question.optionOne.text}</span>
            <span className="text-or">Or</span>
            <span className="text-2">{question.optionTwo.text}</span>
            <Link to={`/submit-question/${question.id}`} className="btn btn-primary btn-block">Submit Your Answer</Link>
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStatetoProps ({questions, users}, {id}) {
  return {
    questions,
    users,
    id
  }
}

export default connect(mapStatetoProps)(UnansweredQuestion);
