import React from "react";
import "../stylesheets/form.scss";

// PreviewCard del proyecto
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleChangeDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }
  handleChangeSelect(event) {
    this.setState({
      language: event.target.value,
    });
  }

  render() {
    return (
      <>
        <form className="moviesForm">
          <h1>Movies</h1>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" onChange={this.handleChangeName} />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="8"
            cols="80"
            onChange={this.handleChangeDescription}
          ></textarea>
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            name="language"
            onChange={this.handleChangeSelect}
          >
            <option value="Spanish">Spanish</option>
            <option value="English">English</option>
            <option value="Portuguese">Portuguese</option>
          </select>
          <input className="btn" type="submit" value="Enviar" />
        </form>
        <article className="previewCard">
          <h2>Movie data</h2>
          <p>Title: {this.state.name}</p>
          <p>Synopsis: {this.state.description}</p>
          <p>Language: {this.state.language}</p>
        </article>
      </>
    );
  }
}

export default Form;
