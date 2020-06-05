const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validatePostInput = data => {
    let errors = {};

    let { city, body } = data;
    // Converting empty fields to empty string as validator function works only with strings
    city = !isEmpty(city) ? city : "";
    body = !isEmpty(body) ? body : "";

    if (Validator.isEmpty(city)) {
        errors.city = "City is required";
    }
    if (Validator.isEmpty(body)) {
        errors.body = "Description is required";
    }
    if (Validator.isEmpty(body)) {
        errors.body = "Country is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};