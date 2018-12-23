import React from 'react';

class NameEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Doe',
      editedName: '',
      editing: false
    };

    this.renderView = this.renderView.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  renderView() {
    const editForm = (
      <form onSubmit={this.changeName}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={this.state.editedName}
            className="form-control"
            placeholder="Enter your name"
            onChange={this.handleNameChange}
            autoFocus  
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success" onClick={this.changeName}>Submit</button>&nbsp;
        <button type="reset" className="btn btn-sm btn-danger" onClick={this.toggleEdit}>Cancel</button>
      </form>
    );

    const nameDisplay = (
      <p>
        Name: <span onClick={this.toggleEdit}>{this.state.name}</span>
      </p>
    );

    return this.state.editing ? editForm : nameDisplay;
  }

  toggleEdit() {
    this.setState((prevState) => ({
      editing: !prevState.editing,
      editedName: ''
    }));
  }

  handleNameChange(e) {
    e.preventDefault();
    this.setState({
      editedName: e.target.value
    });
  }

  changeName(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      name: prevState.editedName !== '' ? prevState.editedName : prevState.name,
      editedName: '',
      editing: !prevState.editing
    }));
  }

  render() {
    return(
      <div className="container">
        <div className="card">
          <div className="card-body">
            {this.renderView()}
          </div>
        </div>
      </div>
    );
  }
};

export default NameEdit;