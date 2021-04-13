import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleNewQuestion } from '../actions'


class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
    redirect: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props
    const { optionOneText, optionTwoText } = this.state
    new Promise((res, rej)=> {
      dispatch(handleNewQuestion({ optionOneText, optionTwoText }))
      setTimeout(() => res('success'), 1000);
    }).then(()=> {
      this.setState({
        redirect: true
      })
    })
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDisabled = (event) => {
    const { optionOneText, optionTwoText } = this.state
    return ( optionOneText === '' || optionTwoText === '' )
  }

  render () {
    const { redirect } = this.state
    const { authedUser } = this.props

    if (authedUser === null) {
      alert("Please login to Add Question")
      return <Redirect to="/login" />
    }

    if (redirect) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Create New Question</h2>
              </div>
              <div className="card-body">
                <h4>Would you rather?</h4>
                <form action="#" onSubmit={this.handleSubmit}>
                  <textarea
                    className="form-control"
                    name="optionOneText"
                    cols="10"
                    rows="3"
                    onChange={this.handleChange}
                    defaultValue={this.state.optionOneText}
                    />
                  <div className="text-or text-center py-3">Or</div>
                  <textarea
                    className="form-control mb-4"
                    name="optionTwoText"
                    cols="10"
                    rows="3"
                    onChange={this.handleChange}
                    defaultValue={this.state.optionTwoText}
                  />
                  <button type="submit" disabled={this.handleDisabled()} className="btn btn-primary btn-block">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStatetoProps ({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStatetoProps)(NewQuestion);
