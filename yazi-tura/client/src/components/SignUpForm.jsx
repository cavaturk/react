import React from 'react';
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom';


import { Card, Input} from 'antd';

import { Button } from 'antd';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Card className="container">  
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <Input
          placeholder="Name"
          name="name"
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <Input
          placeholder="Email"
          name="email"
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={onChange}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <Button type="primary" htmlType="submit">Create New Account</Button>
      </div>

      Already have an account? <Link to={'/login'}>Log in </Link> 
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;