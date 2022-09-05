export default class Product {
    /**
     *
     * @param {string} id
     * @param {string} name
     * @param {number} price
     * @param {Array<string>} images
     */
    constructor({ _id, name, price, images }) {
      this._id = _id;
      this._name = name;
      this._price = price;
      this._images = images;
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
     * @return {number}
     */
    getPrice = () => this._price;

    /**
     * @return {Array<string>}
     */
    getImages = () => this._images;
  
    /**
     * @return {{_id: string, name: string, price: number, formattedPrice: string, images: Array<string>}}
     */
    getData = () => ({
      _id: this._id,
      name: this._name,
      price: this._price,
      images: this._images,
    });
  }
  