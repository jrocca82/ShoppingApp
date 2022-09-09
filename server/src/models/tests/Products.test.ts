import Product from "../product.model";

test("It makes a new product", () => {
    const raw = {
        name: 'foo',
        price: "12.99",
        images: ['1'],
      };
      const product = new Product(raw);
      expect(product.name).toEqual(raw.name);
      expect(product.price).toEqual(raw.price);
      expect(product.images).toEqual(raw.images);
      expect(product).toEqual(raw)
});