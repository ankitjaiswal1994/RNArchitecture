/* eslint-disable radix */
import { LocaleString } from "locales/en";
/* eslint-disable no-useless-escape */
import * as yup from "yup";

// const phoneRegExp = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s-]?[\0-9]{3}[\s-]?[0-9]{4}$/;
export const onlyNumber = /^[0-9]*$/;
export const floatNumber = /^((\+|-)?(0|([1-9][0-9]*))(\.[0-9]+)?)$/;
export const cardsExpireMonthRegExp = /^(0[1-9]|1[0-2])\/([0-9]{4})$/;
export const monthExp = /^(0[1-9]|1[012])$/;
export const yearExp = /^\d{4}$/;

export const expiryDateRegExp = /((0{1}[1-9]{1})|(1{1}[0-2]{1}))([2-9]{1}[0-9]{1})/;
export const nameRegExp = /^(?=.{1,60}$)[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/;
export const passwordRegExp = /^(?:(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/;
export const ssnRegex = /^((?!666|000)[0-8][0-9\_]{2}(?!00)[0-9\_]{2}(?!0000)[0-9\_]{4})*$/;
export const noSpaceRegExp = /^\S*$/; // a string consisting only of non-whitespaces
export const twitter = /(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/;
export const insta = /(?:http:\/\/)?(?:www\.)?instagram\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/;
export const fb = /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/;
export const einRegex = /^\d{2}\-?\d{7}$/;
export const usernameRegex = /^[a-zA-Z0-9]+$/;
export const youtubeUrl = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
export const stringToNumberMin = (
  max: number,
  error?: LocaleString,
): [string, string, (...args: any) => any] => {
  const identifier = "is-min";
  const errorMessage = error || "validation.default.min";
  return [
    identifier,
    errorMessage,
    (v: any) => {
      return parseInt(v) > max;
    },
  ];
};
export const stringToNumberMax = (
  max: number,
  error?: LocaleString,
): [string, string, (...args: any) => any] => {
  const identifier = "is-max";
  const errorMessage = error || "validation.default.max";
  return [
    identifier,
    errorMessage,
    (v: any) => {
      return parseInt(v) < max;
    },
  ];
};

yup.addMethod(yup.object, "optional", function (
  isOptional = true,
  defaultValue = undefined,
) {
  return (
    this.transform(function (value) {
      // If false is passed, skip the transform
      if (!isOptional) {
        return value;
      }

      // If any child property has a value, skip the transform
      if (
        value &&
        Object.values(value).some(
          v => !(v === null || v === undefined || v === ""),
        )
      ) {
        return value;
      }

      return defaultValue;
    })
      // Remember, since we're dealing with the `object`
      // type, we have to change the default value
      .default(defaultValue)
  );
});

export const validateRequiredGender = () =>
  yup
    .string()
    .test(
      "gendertest",
      "validation.gender.required",
      value => value !== "UNKOWN",
    )
    .required() as any;

export const validateTwitterURL = () =>
  yup.string().matches(usernameRegex, "validation.twitter.invalid").optional();
export const validateRequiredTwitter = () =>
  validateTwitterURL().required("validation.default.required");

export const validateFbURL = () =>
  yup.string().matches(usernameRegex, "validation.fb.invalid").optional();

export const validateRequiredFb = () =>
  validateFbURL().required("validation.default.required");

export const validateInstaURL = () =>
  yup.string().matches(usernameRegex, "validation.insta.invalid").optional();

export const validateRequiredInsta = () =>
  validateInstaURL().required("validation.default.required");

export const validateRequiredEmail = () =>
  yup
    .string()
    .trim()
    .email("validation.email")
    .required("validation.email.required");

export const validateRequiredPassword = () =>
  yup
    .string()
    .matches(noSpaceRegExp, "validation.password.invalid.space")
    .matches(passwordRegExp, "validation.password.invalid")
    .min(8, "validation.password.min")
    .required("validation.password.required");
export const validateFirstName = () =>
  yup
    .string()
    .matches(nameRegExp, "validation.firstname.invalid")
    .required("validation.firstname.required");

export const validateRequiredFirstName = (messages?: {
  required?: LocaleString;
  max?: LocaleString;
  inValid?: LocaleString;
}) =>
  yup
    .string()
    .matches(nameRegExp, messages?.inValid || "validation.firstname.invalid")
    .max(25, messages?.max || "validation.name.max")
    .required(messages?.required || "validation.firstname.required");

export const validateName = () =>
  yup.string().matches(nameRegExp, "validation.name.invalid");

export const validateRequiredName = () =>
  validateName()
    .required("validation.name.required")
    .max(25, "validation.name.max");

export const validateLastName = () =>
  yup
    .string()
    .matches(nameRegExp, "validation.lastname.invalid")
    .max(25, "validation.name.max");
export const validateRequiredLastName = () =>
  validateLastName().required("validation.lastname.required");

export const validateRequiredMessage = () =>
  yup.string().required("validation.message.required");

export const validateRequireString = (msg?: LocaleString) =>
  yup.string().required(msg ? msg : "validation.message.required");

export const validateAccountFirstName = () =>
  yup
    .string()
    .matches(nameRegExp, "validation.firstname.invalid")
    .required("account.firstname.required")
    .min(1, "minmium 1");

export const validateAccountLastName = () =>
  yup
    .string()
    .matches(nameRegExp, "validation.lastname.invalid")
    .required("account.lastname.required")
    .min(1, "minimum 1");

export const validateEmail = () =>
  yup.string().trim().email("validation.email");

export const validateCurrentPassword = () =>
  yup
    .string()
    .min(6, "validation.password.min")
    .matches(passwordRegExp, "validation.password.invalid.space");

export const validateNewPassword = () =>
  yup
    .string()
    .min(6, "validation.password.min")
    .matches(passwordRegExp, "validation.password.invalid.space");
export const validateRequiredZipcode = () =>
  yup
    .string()
    .matches(onlyNumber, "validation.zipcode.number")
    .required("validation.zipcode.required")
    .max(6, "validation.zipcode.max.digit")
    .min(5, "validation.zipcode.min.digit");

export const validateRequiredSSN = () =>
  yup
    .string()
    .matches(ssnRegex, "validation.ssn.number")
    .required("validation.ssn.required");

export const validateDriverTip = () =>
  yup.string().matches(/^[0-9]*(.[0-9]+)?$/, "validation.drivertip.number");

export const validateRequiredStreet = (msg?: string) =>
  yup.string().required(msg ? msg : "validation.street.required");
export const validateRequiredCity = () =>
  yup
    .string()
    .required("validation.city.required")
    .max(50, "validation.max.character")
    .matches(nameRegExp, "validation.city.invalid");

export const validateRequiredState = () =>
  yup
    .string()
    .required("validation.state.required")
    .max(50, "validation.max.character")
    .matches(nameRegExp, "validation.state.invalid");

export const validatePhone = () =>
  yup
    .string()
    .matches(onlyNumber, "validation.phone.invalid")
    .max(10, "validation.phone.max.digit")
    .min(10, "validation.phone.min.digit");

export const validateRequiredPhone = () =>
  validatePhone().required("validation.phone.required");

export const validateRequiredCardName = () =>
  yup
    .string()
    .matches(/^([^0-9]*)$/, "validation.cardname.invalid")
    .required("validation.cardname.required")
    .max(50, "validation.max.character");
export const validateRequiredCardNumber = () =>
  yup
    .string()
    .matches(onlyNumber, "validation.cardnumber.number")
    .required("validation.cardnumber.required")
    .min(14, "validation.cardnumber.min");

export const validateRequiredCardMonth = () =>
  yup
    .string()
    .required("validation.default.required")
    .matches(monthExp, "validation.card.expiry.month");

export const validateRequiredCardYear = () =>
  yup
    .string()
    .required("validation.default.required")
    .matches(yearExp, "validation.card.expiry.year");

export const validateRequiredCardCvv = () =>
  yup
    .string()
    .matches(onlyNumber, "validation.cvv.number")
    .required("validation.cvv.required")
    .min(3, "validation.cvv.min");

export const validateRequiredString = (messages?: {
  required?: LocaleString;
  max?: LocaleString;
  inValid?: LocaleString;
}) =>
  yup
    .string()
    .matches(nameRegExp, messages?.inValid || "validation.value.invalid")
    .max(25, messages?.max || "validation.field.max")
    .required(messages?.required || "validation.field.required");

export const validateRequiredStringWithRegex = (messages?: {
  required?: LocaleString;
  max?: LocaleString;
  inValid?: LocaleString;
}) =>
  yup
    .string()
    .max(50, messages?.max || "validation.field.max.team")
    .required(messages?.required || "validation.field.required");

export const validateRequiredDescription = (messages?: {
  required?: LocaleString;
  max?: LocaleString;
  inValid?: LocaleString;
}) =>
  yup
    .string()
    .max(500, messages?.max || "validation.field.maximum.description")
    .required(messages?.required || "validation.field.required");
// .matches(nameRegExp, "validation.description.invalid");

export const validateRequiredNumber = (messages?: {
  required?: LocaleString;
  min?: LocaleString;
  inValid?: LocaleString;
}) =>
  yup
    .string()
    .matches(onlyNumber, messages?.inValid || "validation.value.invalid")
    .required(messages?.required || "validation.field.required")
    .min(1, messages?.min || "validation.field.min");

export const validateRequiredCardExpiry = () =>
  yup
    .string()
    .matches(expiryDateRegExp, "validation.cardexpiry.invalid")
    .required("validation.cardexpiry.required");

export const validateDateRequired = () => yup.string().required("dob.required");

export const OptionalStringField = () => yup.string().notRequired();
