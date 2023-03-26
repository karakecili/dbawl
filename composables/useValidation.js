import { reactive, computed } from 'vue';

function validatorTypes() {
  const isEmpty = (fieldName, fieldValue) => {
    return !fieldValue ? '' + fieldName + ' field is required' : '';
  };

  const minLength = (fieldName, fieldValue, min) => {
    return fieldValue.toString().length < min
      ? `${fieldName} must have at least ${min} characters`
      : '';
  };
  const maxLength = (fieldName, fieldValue, max) => {
    return fieldValue.toString().length > max
      ? `${fieldName} must have at most ${max} characters`
      : '';
  };

  const minNumber = (fieldName, fieldValue, min) => {
    return fieldValue < min ? `${fieldName} cannot be less than ${min}` : '';
  };

  const maxNumber = (fieldName, fieldValue, max) => {
    return fieldValue > max ? `${fieldName} cannot be more than ${max}` : '';
  };

  const isEmail = (fieldName, fieldValue) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(fieldValue)
      ? fieldName + ' is not a valid email address'
      : '';
  };

  const isNum = (fieldName, fieldValue) => {
    let isNum = /^\d+$/.test(fieldValue);
    return !isNum
      ? ' ' + fieldName + ' field contains only numeric values'
      : '';
  };

  return {
    isEmpty,
    minLength,
    maxLength,
    minNumber,
    maxNumber,
    isEmail,
    isNum,
  };
}

const errors = reactive({});

export function useValidation() {
  const {
    isEmpty,
    minLength,
    maxLength,
    minNumber,
    maxNumber,
    isEmail,
    isNum,
  } = validatorTypes();

  const validateEmailField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) || isEmail(fieldName, fieldValue);
  };

  const validateCompanyNameField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) || minLength(fieldName, fieldValue, 4);
  };

  const validateFirstNameField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) || minLength(fieldName, fieldValue, 4);
  };

  const validateLastNameField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) || minLength(fieldName, fieldValue, 4);
  };

  const validateMessageField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) || minLength(fieldName, fieldValue, 5);
  };

  const validatePhoneField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isNum(fieldName, fieldValue);
  };

  return {
    errors,
    validateEmailField,
    validateCompanyNameField,
    validateFirstNameField,
    validateLastNameField,
    validatePhoneField,
    validateMessageField,
  };
}
