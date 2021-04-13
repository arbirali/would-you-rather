import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import UnansweredQuestion from './unansweredQuestion'
import AnsweredQuestion from './answeredQuestion'

class Dashboard extends Component {
  render () {
    const { questions, authedUser, users } = this.props

    if (authedUser === null) {
      alert("Please login to view Dashboard")
      return <Redirect to="/login" />
    }

    let unanswered = []
    let answered = []
    Object.keys(questions).forEach((id)=> {
      if (users[authedUser].answers.hasOwnProperty(id)) {
        answered.push(id)
      } else {
        unanswered.push(id)
      }
    })

    return (
      <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
        <Tab eventKey="unanswered" title="Unanswered Questions">
          {
            (unanswered.length > 0) ?
            unanswered.map((id) => {
              return <UnansweredQuestion key={id} id={id} />
            })
            : <div className="alert alert-primary">You have responeded to all question</div>
          }
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
          {
            (answered.length > 0) ?
            answered.map((id) => {
              return <AnsweredQuestion key={id} id={id} />
            })
            : <div className="alert alert-primary">You have not responeded to any question yet</div>
          }
        </Tab>
      </Tabs>
    )
  }
}

function mapStatetoProps ({questions, authedUser, users}) {

  return {
    questions,
    authedUser,
    users
  }
}

export default connect(mapStatetoProps)(Dashboard)
