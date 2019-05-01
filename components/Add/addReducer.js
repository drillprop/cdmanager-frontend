export function addReducer(state, action) {
  switch (action.type) {
    case 'SEARCH_ALBUM':
      return {
        ...state
      };
    default:
      return state;
  }
}
