const initialState = {
  activeRoute: '',
  locale: window.navigator.language || 'en-US',
};

const app = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_ROUTE': {
      const { activeRoute } = action;

      return {
        ...state,
        activeRoute,
      };
    }

    default:
      return state;
  }
};

export default app;
