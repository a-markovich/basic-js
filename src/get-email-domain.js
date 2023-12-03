const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let position = email.lastIndexOf('@')
  let str = '';
  for(i = position + 1; i < email.length; i++) {
    str = str + email[i];
  }
 return str;
}

module.exports = {
  getEmailDomain
};
