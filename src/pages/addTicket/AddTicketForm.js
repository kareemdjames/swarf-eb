import React, { Component } from 'react';
import { database } from '../../firebase';
import { Grid, FormGroup, FormControl, ControlLabel, Button, ButtonGroup } from 'react-bootstrap';

class AddTicketForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleSubmitEvent(e) {
    e.preventDefault();
    
    const data = {
      date: Date(),
      email: this.email.value.trim(),
      issueType: this.issueType.value.trim(),
      department: this.department.value.trim(),
      comments: this.comments.value.trim()
    }

    database.ref().child('helpdesk').child('tickets').push(data);

    database.ref().on('child_added', function(snapshot) {
      const data = snapshot.val();
      snapshot.forEach(function(childSnap) {
        console.log(childSnap.val());
        console.log("Ticket submitted successfully");
      });
    });
    e.target.reset();
  }

  resetForm() {
    document.getElementById('form').reset();
  }
  
  render() {
    const style = {color: "#ffaaaa"};
    return (
      <Grid>
        <form id="form" ref={form => this.form = form} onSubmit={this.handleSubmitEvent}>
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
            <Button type="reset" bsStyle='default' onSubmit={this.resetForm}>Cancel</Button>
          </ButtonGroup>
        </form>
      </Grid>
    );
  }
}

export default AddTicketForm;