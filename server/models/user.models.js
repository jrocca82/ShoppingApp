export default class User {
    /**
     *
     * @param {string} id
     * @param {string} name
     * @param {string} email
     * @param {string} role
     */
    constructor({ _id, name, email, role }) {
      this._id = _id;
      this._name = name;
      this._email = email;
      this._role = role;
    }
  
    /**
     * @return {string}
     */
    getId = () => this._id;
  
    /**
     * @return {string}
     */
    getName = () => this._name;
  
    /**
     * @return {string}
     */
    getEmail = () => this._email;

    /**
     * @return {string}
     */
    getRole = () => this._role;
  
    /**
     * @return {{_id: string, name: string, email: string, role: string}}
     */
    getData = () => ({
      _id: this._id,
      name: this._name,
      email: this._email,
      role: this._role,
    });
  }
  