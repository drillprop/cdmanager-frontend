export function addReducer(state, action) {
  switch (action.type) {
    case 'SEARCH_ALBUM':
      return {
        ...state,
        searchInput: action.searchInput,
        isListVisible: !!action.searchInput
      };
    case 'CREATE_ALBUM':
      return {
        ...state,
        searchInput: '',
        isListVisible: false
      };
    default:
      return state;
  }
}
