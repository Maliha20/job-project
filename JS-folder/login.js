const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  login();
});

const setError = (element, message) => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector('.error');

  errorDisplay.innerText = message;
  formControl.classList.add('error');
  formControl.classList.remove('success');
};

const setSuccess = element => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector('.error');

  errorDisplay.innerText = '';
  formControl.classList.add('success');
  formControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const login = () => {
  const emailValue = document.getElementById('email').value.trim();
  const passwordValue = document.getElementById('password').value.trim();

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Please provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else {
    setSuccess(password);
  }

  // check for existing users
  const user = registeredUsers.find(
    user => user.email === emailValue && user.password === passwordValue
  );

  if (user) {
    // Successful login
    alert('Login successful');
   
  } else {
    
    setError(email, 'Invalid email or password');
    setError(password, 'Invalid email or password');
  }
 
};
