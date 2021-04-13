import { Component, Fragement } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import { handleInitialData } from './actions'
import Login from './components/login'
import Header from './components/header'
import Dashboard from './components/dashboard'
import LeaderBoard from './components/leaderBoard'
import NewQuestion from './components/newQuestion'
import QuestionPoll from './components/questionPoll'
import QuestionSubmit from './components/questionSubmit'

import './assets/scss/style.scss';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <Router>
        <div className="App">
          <Header />
          <LoadingBar />
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-8">
                <Switch>
                  <Route path='/login'>
                    <Login />
                  </Route>
                  <Route exact path='/'>
                    <Dashboard />
                  </Route>
                  <Route path='/add'>
                    <NewQuestion />
                  </Route>
                  <Route path='/leader-board'>
                    <LeaderBoard />
                  </Route>
                  <Route
                    path='/submit-question/:id'
                    render={(props) =>
                      <QuestionSubmit
                        {...props}
                      />
                    }
                     />
                  <Route
                    path='/question/:id'
                    render={(props) =>
                      <QuestionPoll
                        {...props}
                      />
                    }
                     />
                  <Route path='*/'>
                    Not found
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
