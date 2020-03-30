export function collectionReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_QUERY_VARIABLES':
      return {
        ...state,
        queryVariables: {
          skip: action.skip,
          search: action.search,
          limit: action.limit
        }
      };
    default:
      return state;
  }
}
