import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

class App extends Component {
  render() {
    return (
        <Mailchimp
        action='https://meetup.us12.list-manage.com/subscribe/post?u=eac87b23d5f3c13306aff118d&amp;id=9662e2fd4a'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}

        // Change predetermined language
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Ok!"
          }
        }
        // Add a personalized class
        className='mailchimp'

        />
    );
  }
}

export default App;
