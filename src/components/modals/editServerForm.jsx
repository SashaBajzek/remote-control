import React from "react";
import Form from "../common/form";
import Toggle from "../common/toggle";
import axios from "axios";
import { updateSettings } from "../../config/clientSettings";

export default class EditServerForm extends Form {
  state = {
    data: {},
    errors: {},
    settings: { unlist: null, private: null },
    compareSettings: { unlist: null, private: null },
    error: ""
  };
  schema = {};

  componentDidMount() {
    this.setState({
      settings: this.props.server.settings,
      compareSettings: this.props.server.settings
    });
  }

  handleUnlistToggle = () => {
    let { settings } = this.state;
    console.log("CHANGE SETTINGS BEFORE: ", settings);
    settings.unlist = !settings.unlist;
    this.setState({ settings: settings });
    console.log("CHANGE SETTINGS AFTER: ", settings);
  };

  handlePrivateToggle = () => {
    let { settings } = this.state;
    console.log("CHANGE SETTINGS BEFORE: ", settings);
    settings.private = !settings.private;
    this.setState({ settings: settings });
    console.log("CHANGE SETTINGS AFTER: ", settings);
  };

  settingsObject = () => {
    console.log(this.props.server.server_id);
    return {
      server: {
        server_id: this.props.server.server_id,
        settings: {
          unlist: this.state.settings.unlist,
          private: this.state.settings.private
        }
      }
    };
  };

  handleUpdateSettings = async token => {
    //  if (this.state.settings.unlist !== this.state.compareSettings.unlist) {
    console.log("Ding");
    await axios
      .post(updateSettings, this.settingsObject(), {
        headers: { authorization: `Bearer ${token}` }
      })
      .then(response => {
        console.log("SET LISTING RESPONSE: ", response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  doSubmit = async () => {
    const token = localStorage.getItem("token");
    console.log("SUBMITTED: ", this.state.settings);
    await this.handleUpdateSettings(token);
    this.props.onCloseModal();
  };

  render() {
    return (
      <div className="modal">
        Editing Server:{" "}
        <span className="register-form-emphasis">
          {this.props.server.server_name}
        </span>
        <br />
        <form onSubmit={this.handleSubmit}>
          Public Listing
          <div className="toggle-group">
            <span className="info">
              {" "}
              Server will be listed in the public directory unless otherwise
              specified{" "}
            </span>
            <Toggle
              toggle={this.state.settings.unlist}
              label={"Unlist this server? "}
              onClick={this.handleUnlistToggle}
              critical={true}
            />
          </div>
          <br />
          Private Listing
          <div className="toggle-group">
            <span className="info">
              {" "}
              Only server members can access a private server{" "}
            </span>
            <Toggle
              toggle={this.state.settings.private}
              label={"Set server to private? "}
              onClick={this.handlePrivateToggle}
              critical={true}
            />
          </div>
          {this.renderButton("Submit", "Submit")}
        </form>
      </div>
    );
  }
}
