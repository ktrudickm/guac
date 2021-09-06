import React from 'react'
import Mailchimp from 'react-mailchimp-subscribe'

function MailchimpForm(props) {
    return (
        <div>
            <h2>SignUp For Our Emails</h2>
            <Mailchimp
                action={process.env.MAILCHIMP_KEY}
                fields={[
                {
                    name: "EMAIL",
                    placeholder: "email",
                    type: "email",
                    required: true,
                },
                {
                    name: "FNAME",
                    placeholder: "first name",
                    type: "text",
                    required: true,
                },
                {
                    name: "LNAME",
                    placeholder: "last name",
                    type: "text",
                    required: true,
                }

                ]}
            />
        </div>
    )
}

export default MailchimpForm

