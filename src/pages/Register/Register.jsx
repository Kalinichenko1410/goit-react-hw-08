import React from 'react';
import s from './Register.module.css';

const Register = () => {
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
          <form className={s.registerForm}>
            <div className={s.formGroup}>
              <label className={s.formLabel}>
                <span>Name</span>
              </label>
              <input type="text" placeholder="Name" className={s.formInput} required />
            </div>
            <div className={s.formGroup}>
              <label className={s.formLabel}>
                <span>Email</span>
              </label>
              <input type="email" placeholder="Email" className={s.formInput} required />
            </div>
            <div className={s.formGroup}>
              <label className={s.formLabel}>
                <span>Password</span>
              </label>
              <input type="password" placeholder="Password" className={s.formInput} required />
            </div>
            <div className={s.formActions}>
              <button className={s.formButton}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;