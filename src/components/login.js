import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  state = {
    value : ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    dispatch(handleAuthedUser(this.state.value))
  }

  handleSelect = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render () {

    const { users, authedUser } = this.props
    if(authedUser !== null) {
      return <Redirect to="/dashboard" />
    }
    let options = ''
    if(Object.keys(users).length === 0) {
      return ''
    } else {
      options = Object.keys(users).map(id => <option key={id} value={id}>{users[id].name}</option>)
    }

    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center">Login</h1>
                <form action="#" onSubmit={this.handleSubmit}>
                  <select defaultValue="Select User" className="form-control mb-3" onChange={this.handleSelect}>
                    <option disabled value='Select User' >Select User</option>
                    {options}
                  </select>
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({users, authedUser}) => {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Login);
