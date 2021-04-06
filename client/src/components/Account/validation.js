const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regUser = /^[a-z0-9_-]{3,16}$/i;

function validate(values) {
  let errors = {};

  if (!values.username) errors.username = "Username cannot be blank";
  else if (values.username.length < 3)
    errors.username = "Please enter a username longer than 3 characters";
  else if (values.username.length > 16)
    errors.username = "Please enter a username that's 16 characters or shorter";
  else if (!regUser.test(values.username))
    errors.username = "Please enter a valid username";

  if (!values.password) errors.password = "Password cannot be blank";

  if (values.email !== undefined) {
    if (!values.email) errors.email = "Email cannot be blank";
    else if (!regEmail.test(values.email))
      errors.email = "Please enter a valid email";
  }

  if (values.confirmPassword !== undefined) {
    if (!values.confirmPassword) errors.confirmPassword = "Please confirm password";
    else if (values.password !== values.confirmPassword)
      errors.confirmPassword = "Password doesn't match";
  }

  return errors;
}
export default validate;
