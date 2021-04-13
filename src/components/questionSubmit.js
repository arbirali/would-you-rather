import { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { saveQuestionAnswer } from '../actions'

class QuestionSubmit extends Component {

  state = {
      selectedOption: '',
      redirect: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { authedUser, qid, history } = this.props
    const answer = this.state.selectedOption

    new Promise((res, rej)=> {
      this.props.dispatch(saveQuestionAnswer({authedUser, qid, answer, history }))
      setTimeout(() => res('success'), 1000);
    }).then(()=> {
      this.setState({
        redirect: true
      })
    })
  }

  onChangeValue = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render () {
    const { redirect } = this.state
    const { question, users, qid } = this.props
    if (redirect) {
      return <Redirect to={`/question/${qid}`} />
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
            <form action="#" onSubmit={this.handleSubmit}>
              <label htmlFor="optionOne">
                <input
                  id="optionOne"
                  value="optionOne"
                  name="answer"
                  type="radio"
                  checked={this.state.selectedOption === "optionOne"}
                  onChange={this.onChangeValue}
                />
                {question.optionOne.text}
              </label>
              <span className="text-or">Or</span>
              <label htmlFor="optionTwo">
                <input
                  id="optionTwo"
                  value="optionTwo"
                  name="answer"
                  type="radio"
                  checked={this.state.selectedOption === "optionTwo"}
                  onChange={this.onChangeValue}
                />
                {question.optionTwo.text}
              </label>
              <button className="btn btn-primary btn-block" type="submit">Submit</button>
            </form>
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
    users,
    question,
    authedUser,
    qid
  }
}

export default connect(mapStatetoProps)(QuestionSubmit);
