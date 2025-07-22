import { useState } from 'react';
import { submitContactForm } from '../services/contactService';

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData) => {
    setIsLoading(true);
    setErrors([]);
    setSuccess(false);

    try {
      const result = await submitContactForm(formData);
      setSuccess(true);
      return result;
    } catch (error) {
      if (error.cause && Array.isArray(error.cause)) {
        setErrors(error.cause);
      } else {
        setErrors([{ field: 'general', message: error.message }]);
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const clearErrors = () => setErrors([]);
  const clearSuccess = () => setSuccess(false);

  const getFieldError = (fieldName) => {
    return errors.find(error => error.field === fieldName)?.message;
  };

  const hasFieldError = (fieldName) => {
    return errors.some(error => error.field === fieldName);
  };

  return {
    submitForm,
    isLoading,
    errors,
    success,
    clearErrors,
    clearSuccess,
    getFieldError,
    hasFieldError
  };
};