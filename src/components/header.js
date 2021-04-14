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
    let { user, authedUser } = this.props

    return (
      <header className='header'>
        <nav className='navbar'>
          <div className='container-fluid'>
            <ul className='main-nav'>
              <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
              <li><NavLink activeClassName='active' to='/add'>New Question</NavLink></li>
              <li><NavLink activeClassName='active' to='/leader-board'>Leader Board</NavLink></li>
            </ul>
            <div className='login-section'>
            {
              (authedUser !== null) ?
              <div>
                <span className='text'>Hello, <strong>{user.name}</strong></span>
                <span className='image-frame'>
                  <img height='50' width='100' src={`../assets/images/${user.avatarURL}`} alt={user.name} />
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
  const user = users[authedUser]
  return {
    user,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Header);
