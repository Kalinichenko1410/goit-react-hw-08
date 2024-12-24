import React from 'react';
import s from './Login.module.css';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values));
    options.resetForm();
  }
  return (
    <div className={s.loginHero}>
      <div className={s.loginHeroContent}>
        <div className={s.loginText}>
          <h1 className={s.loginTitle}>Login now!</h1>
          <p className={s.loginDescription}>
            We are soo happy that you are a part of our community.
          </p>
        </div>
        <div className={s.loginCard}>
        
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
              <Form className={s.loginForm}>
            <div className={s.formGroup}>
              <label className={s.formLabel}>
                <span>Email</span>
              </label>
              <Field name="email" type="email" placeholder="email" className={s.formInput} required />
            </div>
            <div className={s.formGroup}>
              <label className={s.formLabel}>
                <span>Password</span>
              </label>
              <Field name="password" type="password" placeholder="password" className={s.formInput} required />
              <label className={s.formLabel}>
                <a href="#" className={s.forgotPasswordLink}>Forgot password?</a>
              </label>
            </div>
            <div className={s.formActions}>
              <button type="submit" className={s.formButton} >Login</button>
            </div>
          </Form>
          </Formik>




        </div>
      </div>
    </div>
  );
};

export default Login;