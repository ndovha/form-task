import { isFunction } from 'lodash';

export const INVALID = 'invalid';
export const REQUIRED = 'Field is required';
export const IS_EMAIL = 'Email is invalid';

export const REG_EXP_EMAIL = new RegExp(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
export const onRequired = (value) => value.toString().trim().length > 0;
const onRegExpChecking = (value, regExp) => regExp.test(value);

const validationMap = {
    [REQUIRED]: onRequired,
    [IS_EMAIL]: (value) => onRegExpChecking(value, REG_EXP_EMAIL)
}

const validationErrorMap = {
    [INVALID]: 'invalid',
    [REQUIRED]: 'Field is required',
    [IS_EMAIL]: 'Email is invalid'

}

const validateRunner = (rule, val) => {
    const isValid = isFunction(validationMap[rule]) ? validationMap[rule](val) : true;
    if (!isValid) {
      return validationErrorMap[rule] ? validationErrorMap[rule] : validationErrorMap[INVALID];
    }
  
    return !isValid && validationErrorMap[rule] ? validationErrorMap[rule] : '';
  };

export const validate = (val, rules) => {
  const value = val.toString();
  let errorKey = '';
  for (let index = 0; index < rules.length; index++) {
    errorKey = validateRunner(rules[index], value);
    if (errorKey) {
      break;
    }
  }

  return errorKey;
};