import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { handleAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class Header extends Component {

  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(handleAuthedUser(null))
  }

  render () {
    let { loggedInUser } = this.props

    return (
      <header className='header'>
        <nav className='navbar'>
          <div className='container-fluid'>
            <ul className='main-nav'>
              <li><NavLink activeClassName='active' to='/dashboard'>Home</NavLink></li>
              <li><NavLink activeClassName='active' to='/add'>New Question</NavLink></li>
              <li><NavLink activeClassName='active' to='/leader-board'>Leader Board</NavLink></li>
            </ul>
            <div className='login-section'>
            {
              (loggedInUser !== null) ?
              <div>
                <span className='text'>Hello, <strong>{loggedInUser.name}</strong></span>
                <span className='image-frame'>
                  <img height='50' width='100' src={`../assets/images/${loggedInUser.avatarURL}`} alt={loggedInUser.name} />
                </span>
                <button className='btn btn-link' onClick={this.handleLogout}>Logout</button>
              </div>
              :<div><NavLink className='btn btn-link' activeClassName='hidden' to='/login'>Login</NavLink></div>
            }
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

function mapStateToProps ({users, authedUser}) {
  let loggedInUser = null
  if (authedUser !== null) {
    loggedInUser = users[authedUser]
  }
  return {
    users,
    loggedInUser
  }
}

export default connect(mapStateToProps)(Header);
