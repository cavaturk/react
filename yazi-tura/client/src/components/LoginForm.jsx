import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types'

import { Card, Input} from 'antd';
import { Button } from 'antd';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

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
          type="password"
          name="password"
          onChange={onChange}
        
          value={user.password}
        />
      </div>

      <div className="button-line">
        <Button type="primary"  htmlType="submit"> Log in</Button>
      </div>

      Don't have an account? <Link to={'/signup'}>Creatne one </Link> 

    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;