const validator = {
  username: {
    rules: [
      {
        test: /^[a-z0-9_]+$/,
        message: "Username must only contain alphaneumeric lowecase letters"
      },
      {
        test: value => {
          return value.length > 2;
        },
        message: "Username must be longer than two characters"
      }
    ],
    errors: [],
    valid: false,
    state: ''
  },
  email:{
      rules: [
          {
              test: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: 'Please enter a Valid email'

      },
      {
        test: value => {
            return value.length >2;
        },
        message: 'Email enter a valid email'
      }      
      ],
      errors: [],
      valid: false,
      state: ''
  },
  password: {
    rules: [
      {
        test: value => {
          return value.length >= 6;
        },
        message: "password must not be shorter than 6 characters"
      }
    ],
    errors: [],
    valid: false,
    state: ""
  }
};
export default validator;
