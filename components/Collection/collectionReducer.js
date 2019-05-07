export function collectionReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_QUERY_VARIABLES':
      return {
        ...state,
        queryVariables: {
          last: action.last,
          search: action.search
        }
      };
    default:
      return state;
  }
}
