// Action Types
enum ActionTypes {
  LOGIN = 'auth/LOGIN',
}

interface ILoginAction {
  type: ActionTypes.LOGIN;
  payload: { session_token: string };
}

type ShopBagActionTypes = ILoginAction;

interface IAuthState {
  session_token: string | null;
}

// Reducer
const initialState = {
  session_token: null,
};

export default function reducer(
  state: IAuthState = initialState,
  action: ShopBagActionTypes,
): IAuthState {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return { ...state, session_token: action.payload.session_token };
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export function setSessionToken(session_token: string) {
  return {
    type: ActionTypes.LOGIN,
    payload: { session_token },
  };
}
