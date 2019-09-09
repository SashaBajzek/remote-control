import React from "react";
import axios from "axios";

import { Form } from "../../../common";
import { deleteChannel } from "../../../../config/clientSettings";

export default class EditChannelForm extends Form {
  state = { data: {}, errors: {} };

  schema = {};

  doSubmit = async () => {
    const token = localStorage.getItem("token");
    console.log("SUBMITTED: ", this.props);

    await axios
      .post(
        deleteChannel,
        {
          channel_id: this.props.channel.id,
          server_id: this.props.channel.host_id
        },
        {
          headers: { authorization: `Bearer ${token}` }
        }
      )
      .catch(err => {
        console.log("Add Server Error: ", err);
      });

    this.props.onCloseModal();
  };

  render() {
    return (
      <div className="modal">
        Editing Channel:{" "}
        <span className="register-form-emphasis">
          {this.props.channel.name}
        </span>
        <form onSubmit={this.handleSubmit}>
          <div>Delete: </div>
          {this.renderButton("Submit", "Submit")}
        </form>
      </div>
    );
  }
}
