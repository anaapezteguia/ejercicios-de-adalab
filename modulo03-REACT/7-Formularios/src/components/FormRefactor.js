import React from "react";
import "../stylesheets/form.scss";

// PreviewCard del proyecto
class FormRefactor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
      age: "A",
      genres: [],
    };
    this.handleGenres = this.handleGenres.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  handleGenres(ev) {
    if (ev.target.checked) {
      this.setState((prevState) => {
        prevState.genres.push(ev.target.value);
        return {
          genres: [...prevState.genres],
        };
      });
    }
    // añadir aquí else con splice, pero hacer un indexOf para buscar
  }
  onChange = (event) => {
    const target = event.target;
    // debugger;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <form className="moviesForm">
          <h1>Movies</h1>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="8"
            cols="80"
            value={this.state.description}
            onChange={this.onChange}
          ></textarea>
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            name="language"
            value={this.state.language}
            onChange={this.onChange}
          >
            <option value="Spanish">Spanish</option>
            <option value="English">English</option>
            <option value="Portuguese">Portuguese</option>
          </select>
          <label htmlFor="age">Age:</label>
          <div className="radios">
            <input
              id="A"
              type="radio"
              value="A"
              name="age"
              checked={this.state.age === "A"}
              onChange={this.onChange}
            />
            A (All public)
            <input
              id="7"
              type="radio"
              value="7"
              name="age"
              checked={this.state.age === "7"}
              onChange={this.onChange}
            />
            7
            <input
              id="12"
              type="radio"
              value="12"
              name="age"
              checked={this.state.age === "12"}
              onChange={this.onChange}
            />
            12
            <input
              id="16"
              type="radio"
              value="16"
              name="age"
              checked={this.state.age === "16"}
              onChange={this.onChange}
            />
            16
            <input
              id="18"
              type="radio"
              value="18"
              name="age"
              checked={this.state.age === "18"}
              onChange={this.onChange}
            />
            18
          </div>
          <label htmlFor="genre">Genres:</label>
          <div className="checkboxes">
            <input
              type="checkbox"
              value="comedy"
              name="genre"
              checked={this.state.genres.includes("comedy")}
              onChange={this.handleGenres}
            />
            Comedy
            <input
              type="checkbox"
              value="drama"
              name="genre"
              checked={this.state.genres.includes("drama")}
              onChange={this.handleGenres}
            />
            Drama
            <input
              type="checkbox"
              value="fantasy"
              name="genre"
              checked={this.state.genres.includes("fantasy")}
              onChange={this.handleGenres}
            />
            Fantasy
            <input
              type="checkbox"
              value="action"
              name="genre"
              checked={this.state.genres.includes("action")}
              onChange={this.handleGenres}
            />
            Action
            <input
              type="checkbox"
              value="family"
              name="genre"
              checked={this.state.genres.includes("family")}
              onChange={this.handleGenres}
            />
            Family
            <input
              type="checkbox"
              value="terror"
              name="genre"
              checked={this.state.genres.includes("terror")}
              onChange={this.handleGenres}
            />
            Terror
          </div>
          <input className="btn" type="submit" value="Enviar" />
        </form>
        <article className="previewCard">
          <h2>Movie data</h2>
          <p>Title: {this.state.name}</p>
          <p>Synopsis: {this.state.description}</p>
          <p>Language: {this.state.language}</p>
          <p>Age: {this.state.age}</p>
          <p>Genre: {this.state.genres.join(" , ")}</p>
        </article>
      </>
    );
  }
}

export default FormRefactor;
