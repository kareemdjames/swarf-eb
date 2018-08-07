import React, { Component } from 'react';
import { database } from '../../firebase';
import { Grid, FormGroup, FormControl, ControlLabel, Button, ButtonGroup } from 'react-bootstrap';

class AddTicketForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }

  handleSubmitEvent(e) {
    e.preventDefault();
    console.log("Email--" + this.email.value.trim());
    console.log("Issue Type--" + this.issueType.value.trim());
    console.log("Department--" + this.department.value.trim());
    console.log("Comments--" + this.comments.value.trim());
  }
  
  render() {
    const style = {color: "#ffaaaa"};
    return (
      <Grid>
        <form refs="form" onSubmit={this.handleSubmitEvent}>
          <FormGroup controlid="email">
            <ControlLabel>Email Address</ControlLabel>
            <FormControl 
              type="email" 
              placeholder="Enter email"
              required inputRef={email => this.email = email}
            />
          </FormGroup>
          <FormGroup controlId="issueType">
            <ControlLabel>Issue Type</ControlLabel>
            <FormControl 
              componentClass="select" 
              placeholder="select"
              required inputRef={issueType => this.issueType = issueType}
            >
              <option value="select">-----Select-----</option>
              <option value="Access Related Issue">Access Related Issue</option>
              <option value="Email Related Issues">Email Related Issues</option>
              <option value="Hardware Request">Hardware Request</option>
              <option value="Health & Safety">Health & Safety</option>
              <option value="Network">Network</option>
              <option value="Intranet">Intranet</option>
              <option value="Other">Other</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="department">
            <ControlLabel>Assign Department</ControlLabel>
            <FormControl 
              componentClass="select" 
              placeholder="select"
              required inputRef={department => this.department = department}
            >
              <option value="">-----Select----</option>
              <option value="Admin">Admin</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Development">Development</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="comments">
            <ControlLabel>Comments <span style={style}> *</span>
            (<span id="maxlength"> 200 </span>characters left )</ControlLabel>
            <FormControl 
              componentClass="textarea" 
              placeholder="Comments"
              rows="3"
              required inputRef={comments => this.comments = comments}
            />
          </FormGroup>
          <ButtonGroup>
            <Button type="submit" bsStyle= "primary">Submit</Button>
            <Button type="reset" bsStyle='default'>Cancel</Button>
          </ButtonGroup>
        </form>
      </Grid>
    );
  }
}

export default AddTicketForm;