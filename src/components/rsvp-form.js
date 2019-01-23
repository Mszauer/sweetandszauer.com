import React from 'react'
import { Form, Field } from 'react-final-form'

// const RSVP = ({}) => (
//     // maybe use https://github.com/final-form/react-final-form
//     // https://codesandbox.io/s/ww40y2m595 for styling
//     // On submit data will get sent to an google spreadsheet:
//     // https://www.gatsbyjs.org/packages/gatsby-source-google-sheets/?=google
//     // https://www.gatsbyjs.org/packages/gatsby-plugin-recaptcha/?=google
//     // and email sent to one of us
// )
const onSubmit = async values => {
  // do submission things here
  console.log("submitted, sending data")
}

const RsvpForm = () => (
  <Form
  onSubmit={onSubmit}
  initialValues={{ }}
  render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <h2>RSVP</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
        <div>
          <label>Last Name</label>
          <Field name="lastName" component="input" type="text" placeholder="Last Name" />
        </div>

        <div>
          <label>Questions / Comments</label>
          <Field name="questions" component="textarea" placeholder="Questions / Comments" />
        </div>
        <div>
            <label>Additional Guests</label>
            <Field name="guests" component="select">
              <option />
              <option value="0">+0</option>
              <option value="1">+1</option>
              <option value="2">+2</option>
              <option value="other">More (please specify in comments)</option>
            </Field>
          </div>
        <div>
          <label>Will you be attending?</label>
          <div>
            <label>
              <Field
                name="attending"
                component="input"
                type="radio"
                value="yes"
              />{' '}
              Yes
            </label>
            <label>
              <Field
                name="attending"
                component="input"
                type="radio"
                value="no"
              />{' '}
              No
            </label>
          </div>
        </div>
        <div className="buttons">
          <button type="submit" disabled={submitting || pristine} onClick={form.reset}>
            Submit
          </button>
          <button
            type="button" onClick={form.reset} disabled={submitting || pristine}>
            Reset
          </button>
        </div>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  />
)
export default RsvpForm