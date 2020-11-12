// Action Types
enum ActionTypes {
  ADD_PRODUCT = 'shopBag/ADD_PRODUCT',
  SELECT_ADDRESS = 'shopBag/SELECT_ADDRESS',
  SELECT_CREDIT_CARD = 'shopBag/SELECT_CREDIT_CARD',
}

interface IAddProductAction {
  type: ActionTypes.ADD_PRODUCT;
  payload: { product: IProduct };
}

interface ISelectAddressAction {
  type: ActionTypes.SELECT_ADDRESS;
  payload: { address: IAddress };
}

interface ISelectCreditCardAction {
  type: ActionTypes.SELECT_CREDIT_CARD;
  payload: { creditCard: ICreditCard };
}

type ShopBagActionTypes =
  | IAddProductAction
  | ISelectAddressAction
  | ISelectCreditCardAction;

interface IShopBagState {
  products: IProduct[];
  address: IAddress | null;
  creditCard: ICreditCard | null;
}

// Reducer
const initialState = {
  products: [],
  address: null,
  creditCard: null,
};

export default function reducer(
  state: IShopBagState = initialState,
  action: ShopBagActionTypes,
): IShopBagState {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const products = [...state.products];
      products.push(action.payload.product);
      return { ...state, products };
    }
    case ActionTypes.SELECT_ADDRESS: {
      return { ...state, address: action.payload.address };
    }
    case ActionTypes.SELECT_CREDIT_CARD: {
      return { ...state, creditCard: action.payload.creditCard };
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export function addProductToShopBag(product: IProduct) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: { product },
  };
}

export function selectShopBagAddress(address: IAddress) {
  return {
    type: ActionTypes.SELECT_ADDRESS,
    payload: { address },
  };
}

export function selectShopBagCreditCard(creditCard: ICreditCard) {
  return {
    type: ActionTypes.SELECT_CREDIT_CARD,
    payload: { creditCard },
  };
}
