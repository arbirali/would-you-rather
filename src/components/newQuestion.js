import { Component } from 'react'


class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }

  handleDisabled = (event) => {
    const { optionOneText, optionTwoText } = this.state
    return ( optionOneText === '' || optionTwoText === '' )
  }

  render () {
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
                    id=""
                    cols="10"
                    rows="3"
                    onChange={this.handleChange}
                    defaultValue={this.state.optionOneText}
                    />
                  <div className="text-or text-center py-3">Or</div>
                  <textarea
                    className="form-control mb-4"
                    name="optionTwoText"
                    id=""
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

export default NewQuestion;
