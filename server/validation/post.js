const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validatePostInput = data => {
    let errors = {};

    let { city, country } = data;
    // Converting empty fields to empty string as validator function works only with strings
    city = !isEmpty(city) ? city : "";
    country = !isEmpty(country) ? country : "";

    if (Validator.isEmpty(city)) {
        errors.city = "City is required";
    }

    if (Validator.isEmpty(country)) {
        errors.country = "Country is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};