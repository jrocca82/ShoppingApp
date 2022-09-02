import Product from "../product.model";

test("It makes a new product", () => {
    const raw = {
        _id: '1234',
        name: 'foo',
        price: 123,
        images: ['1'],
      };
      const product = new Product(raw);
      expect(product.getId()).toEqual(raw._id);
      expect(product.getName()).toEqual(raw.name);
      expect(product.getPrice()).toEqual(raw.price);
      expect(product.getImages()).toEqual(raw.images);
      expect(product.getData()).toEqual(raw)
});