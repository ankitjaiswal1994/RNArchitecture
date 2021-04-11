import React, { useState, useCallback } from 'react';

import { useField } from 'formik';
import { InputField, InputFieldProps } from 'molecules/InputField';
import { Merge } from 'typings/utils';
import { TextInput } from 'react-native';

type InternalFormInputFieldProps = {
  name: string;
  placeholder?: string;
  label: string;
  nextInputRef?: React.MutableRefObject<TextInput> | null;
};

type FormPasswordFieldProps = Merge<
  Partial<InputFieldProps>,
  InternalFormInputFieldProps
>;

export const FormPasswordField = React.forwardRef<
  TextInput,
  FormPasswordFieldProps
>(
  (
    { name, placeholder, label, nextInputRef, onSubmitEditing, ...props },
    ref,
  ) => {
    const [field, meta, helpers] = useField(name);
    const [isVisible, setIsVisible] = useState(false);
    const error = meta.touched && meta.error;

    const handleBlur = useCallback(() => {
      helpers.setTouched(true);
    }, [helpers]);

    const handleSubmitEditing = useCallback(
      e => {
        if (typeof onSubmitEditing === 'function') {
          onSubmitEditing(e);
        }
        nextInputRef?.current?.focus();
      },
      [nextInputRef, onSubmitEditing],
    );
    const toggleVisibility = useCallback(
      () => setIsVisible(prevState => !prevState),
      [setIsVisible],
    );
    return (
      <InputField
        ref={ref}
        placeholder={placeholder}
        onRightIconPress={toggleVisibility}
        label={label}
        rightIcon={isVisible ? 'eye' : 'eye-off'}
        secureTextEntry={!isVisible}
        error={error}
        value={field.value}
        onChangeText={field.onChange(name) as any}
        onBlur={handleBlur}
        onSubmitEditing={handleSubmitEditing}
        {...props}
      />
    );
  },
);
