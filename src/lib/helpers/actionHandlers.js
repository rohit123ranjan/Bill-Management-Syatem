export const handleLoading = (actionType) => ({
  type: actionType,
  payload: { loading: true },
});

export const handleData = (actionType, data) => ({
  type: actionType,
  payload: { data },
});

export const handleError = (actionType, error = "something went wrong!") => ({
  type: actionType,
  payload: { data: error },
});

export const handleClear = (actionType) => ({
  type: actionType,
});
