import React from 'react';
import s from './Register.module.css';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const Register = () => {

const dispatch = useDispatch();

const initialValues = {
name: '',
email: '',
password: '',
};
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values)); 
    options.resetForm();
  };


  return (
    <div className={s.registerHero}>
      <div className={s.registerHeroContent}>
        <div className={s.registerText}>
          <h1 className={s.registerTitle}>Register now!</h1>
          <p className={s.registerDescription}>
            Join us today and enjoy all the benefits. Create an account to get started!
          </p>
        </div>
        <div className={s.registerCard}>
          


          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
              <Form className={s.registerForm}>
            <div className={s.formGroup}>
              <label className={s.formLabel}>
                <span>Name</span>
              </label>
              <Field name="name" type="text" placeholder="Name" className={s.formInput} required />
            </div>
            <div className={s.formGroup}>
              <label className={s.formLabel}>
                <span>Email</span>
              </label>
              <Field name="email" type="email" placeholder="Email" className={s.formInput} required />
            </div>
            <div className={s.formGroup}>
              <label className={s.formLabel}>
                <span>Password</span>
              </label>
              <Field name="password" type="password" placeholder="Password" className={s.formInput} required />
            </div>
            <div className={s.formActions}>
              <button type='submit' className={s.formButton} >Register</button>
            </div>
          </Form>
        </Formik>




        </div>
      </div>
    </div>
  );
};

export default Register;