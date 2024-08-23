// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onChangeFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onChangeLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="cards-container">
          <div className="card">
            <button className="btn" onClick={this.onChangeFirstName}>
              Show/Hide Firstname
            </button>
            {firstName && (
              <div className="name-card">
                <p className="name">Joe</p>
              </div>
            )}
          </div>
          <div className="card">
            <button className="btn" onClick={this.onChangeLastName}>
              Show/Hide Lastname
            </button>
            {lastName && (
              <div className="name-card">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
