import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    task: '',
    util: '',
  }
  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { name, job } = this.state;
  
    return (
      <form>
        <label htmlFor="name">Task</label>
        <input
          type="text"
          name="task"
          id="task"
          value={name}
          onChange={this.handleChange} />
        <label htmlFor="job">Util</label>
        <input
          type="text"
          name="util"
          id="util"
          value={job}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />

      </form>
    );
  }
  

}
export default Form;
