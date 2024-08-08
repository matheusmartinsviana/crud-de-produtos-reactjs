export const validateCpnjCpf = new RegExp("(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)");
export const validateEmail = new RegExp("/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i");
export const validatePhone = new RegExp("^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$");