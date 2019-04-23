import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";

class InformationDialog extends React.Component {
  state = {
    open: false
  };

  //Handle Agree
  handleAgree = () => {
    this.props.dialogResponse(true);
  };

  handleClose = () => {
    this.props.dialogResponse(false);
  };

  render() {
    return (
      <div className="InformationDialog">
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Short URL</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <span>Original URL: {this.props.originalURL}</span>
              <br />

              <span>
                Short url:
                <a href={`${this.props.originalURL}`} rel="noopener noreferrer" target="_blank">
                  {this.props.shortURL}
                </a>
              </span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default InformationDialog;
