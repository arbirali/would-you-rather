import { connect } from 'react-redux'

function  LeaderBoard (props) {

  const { keysSorted, users } = props

  return (
    <div>
      {
        keysSorted.map((userId, index)=> {
          const answeredQuestions = Object.keys(users[userId].answers).length;
          const createdQuestions = users[userId].questions.length
          return (
            <div className="leader-post" key={userId}>
              <div className="image-block">
                <img src={`../assets/images/${users[userId].avatarURL}`} alt={users[userId].name} />
              </div>
              <div className="text-block">
                {users[userId].name}
                <h2>{users[userId].name}</h2>
                <span className="answered">
                  Answered questions
                  <span className="number">{answeredQuestions}</span>
                </span>
                <span className="created">
                  Created questions
                  <span className="number">{createdQuestions}</span>
                </span>
              </div>
              <div className="count">
                <div className="card">
                  <div className="card-header">Total Score</div>
                  <div className="card-body">
                    <span className="total">{ answeredQuestions + answeredQuestions }</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

function mapStatetoProps ({users}) {
  let usersList = {}
  Object.keys(users).forEach((user)=> {
    usersList[user] = Object.keys(users[user].answers).length + users[user].questions.length
  })
  let keysSorted = []
  keysSorted = Object.keys(usersList).sort(function(a,b){return usersList[b]-usersList[a]})

  return {
    users,
    keysSorted
  }
}

export default connect(mapStatetoProps)(LeaderBoard)
