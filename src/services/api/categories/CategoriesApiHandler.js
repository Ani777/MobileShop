import MobileShopApiHandler from '../MobileShopApiHandler';

const END_POINTS = {
  prefix: 'Categories',
  products: 'Products'
}

class CategoriesApiHandler extends MobileShopApiHandler {
  constructor(prefix){
    super(prefix)
  }

  getCategories(){
    return this.get()
  }

  getCategory(id){
    return this.get(`${id}/${END_POINTS.products}`)

  }

}

const categoriesApiHandler = new CategoriesApiHandler(END_POINTS.prefix);
export default categoriesApiHandler;
