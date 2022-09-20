import { useState, useRef, Fragment } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [formIsShown, setFormIsShown] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6ThmhjMn67u2Oot7mS3HO6Kt-MuyPos0',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            setFormIsShown(false);
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Autentication failed!!!';
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
                throw Error(errorMessage);
              }
            });
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return (
    <Fragment>
      {!formIsShown && <h1>Welcome!!!</h1>}
      {formIsShown && (
        <section className={classes.auth}>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            <div className={classes.actions}>
              <button>{isLogin ? 'Login' : 'Create Account'}</button>
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? 'Create new account' : 'Login with existing account'}
              </button>
            </div>
          </form>
          {error && <h1 className={classes['error-message']}>{error}</h1>}
        </section>
      )}
    </Fragment>
  );
};

export default AuthForm;
