import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

class ErrorMessage extends React.Component {
  state = {
    vertical: "top",
    horizontal: "center"
  };

  render() {
    const { vertical, horizontal } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={this.props.openErrorMessage}
          message={<span>{this.props.errorMessage}</span>}
          style={{marginTop: "15px"}}
        />
      </div>
    );
  }
}

export default ErrorMessage;
