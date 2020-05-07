export function addReducer(state, action) {
  switch (action.type) {
    case 'SEARCH_ALBUM':
      return {
        ...state,
        searchInput: action.searchInput,
        isListVisible: !!action.searchInput,
        isRecentAlbumsVisible: !action.searchInput,
      };
    case 'CREATE_ALBUM':
      return {
        ...state,
        searchInput: '',
        isListVisible: false,
        isRecentAlbumsVisible: true,
        clearInput: true,
      };
    case 'CLEAR_INPUT':
      return {
        ...state,
        clearInput: action.clearInput,
      };
    default:
      return state;
  }
}
