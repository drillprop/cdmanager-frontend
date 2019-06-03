const initialState = {
  queryVariables: {
    skip: 8,
    search: '',
    limit: 10
  }
};

export function collectionReducer(state = initialState, action) {
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
