import React, { Component } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import InformationDialog from "./InformationDialog/InformationDialog";
import UrlList from "./List/urlList";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

class Main extends Component {
  state = {
    data: {},
    originalURL: "",
    isDialogOpen: false,
    isTrue: true,
    history: [],
    error: false
  };

  componentWillMount() {
    window.localStorage.getItem("data") &&
      this.setState({
        history: JSON.parse(window.localStorage.getItem("data"))
      });
  }

  componentWillUpdate(nextProps, nextState) {
    window.localStorage.setItem("data", JSON.stringify(nextState.history));
  }

  handleOnChange = event => {
    this.setState({
      originalURL: event.target.value,
      isTrue: false,
      error: false
    });
  };

  handleDialogResponse = res => this.setState({ isDialogOpen: res });

  getShortURL = () => {
    const { originalURL, history } = this.state;
    if (this.validateInput(originalURL)) {
      fetch("/api/", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ longURL: originalURL })
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            data,
            originalURL: "",
            isDialogOpen: true,
            isTrue: true
          });
          history.length === 10 && history.shift();
          history.length < 10 && this.handleSessionStorage();
        })
        .catch(err => err);
    } else {
      return this.setState({ error: true, originalURL: "" });
    }
  };

  validateInput = link => {
    let validationHttp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/;
    let validationUrl = /[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/;
    let regexHTTP = new RegExp(validationHttp);
    let regexUrl = new RegExp(validationUrl);
    return link.match(regexHTTP) || link.match(regexUrl) ? true : false;
  };

  handleSessionStorage = () => {
    window.localStorage.setItem("data", JSON.stringify(this.state.data));
    this.setState({
      history: [
        ...this.state.history,
        JSON.parse(window.localStorage.getItem("data"))
      ]
    });
  };

  render() {
    const { data, originalURL, isTrue, history } = this.state;
    return (
      <div className="main">
        <h2> URL Minifier Service </h2>
        <TextField
          value={originalURL}
          onChange={this.handleOnChange}
          error={this.state.error}
          label="Enter Valid URL"
          margin="normal"
          variant="outlined"
          style={{ width: "25%" }}
          autoFocus
        />

        <Button
          variant="contained"
          color="primary"
          onClick={this.getShortURL}
          disabled={isTrue}
          style={{ height: "57px", margin: "1em " }}
        >
        <strong>Minify it</strong>
         
        </Button>
        <Typography variant="h5" style={{ marginTop: "10px" }}>
          <a
            href={`${data.originalURL}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.shortURL}
          </a>
        </Typography>

        <UrlList urlList={history} listTitle={"Recently generated urls"} />

        <InformationDialog
          open={this.state.isDialogOpen}
          dialogResponse={this.handleDialogResponse}
          originalURL={data.originalURL}
          shortURL={data.shortURL}
        />
        <ErrorMessage
          openErrorMessage={this.state.error}
          errorMessage={"Please enter the valid url!!!!"}
        />
      </div>
    );
  }
}

export default Main;
