import React from 'react';
import s from './Login.module.css';

const Login = () => {
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
          <form className={s.loginForm}>
            <div className={s.formGroup}>
              <label className={s.formLabel}>
                <span>Email</span>
              </label>
              <input type="email" placeholder="email" className={s.formInput} required />
            </div>
            <div className={s.formGroup}>
              <label className={s.formLabel}>
                <span>Password</span>
              </label>
              <input type="password" placeholder="password" className={s.formInput} required />
              <label className={s.formLabel}>
                <a href="#" className={s.forgotPasswordLink}>Forgot password?</a>
              </label>
            </div>
            <div className={s.formActions}>
              <button className={s.formButton}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;