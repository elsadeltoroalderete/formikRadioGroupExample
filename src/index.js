import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Example = () => (
  <div>
    <h1>Cookie Management</h1>
    <Formik
      initialValues={{
        option: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="accept-all" value="Accept all" />
              One
            </label>
            <label>
              <Field type="radio" name="deny-all" value="Deny All" />
              Two
            </label>
            <label>
              <Field type="radio" name="necessary-only" value="Necessary Only" />
              Three
            </label>
            <div>option: {values.option}</div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

ReactDOM.render(<Example />, document.getElementById('root'));
