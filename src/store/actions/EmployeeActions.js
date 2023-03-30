// Action Dispatcher 
export function getData(data) {
  return async dispatch => {
    dispatch({ type: 'SET_DATA', data })
  }
}

export function setSelected(data) {
  return async dispatch => {
    dispatch({ type: 'SET_SELECTED', data })
  }
}

export function deleteItem(id) {
  return async dispatch => {
    dispatch({ type: 'DELETE_ITEM', id })
  }
}

export function editItem(item) {
  return async dispatch => {
    dispatch({ type: 'EDIT_ITEM', item })
  }
}

export function saveItem(item) {
  return async dispatch => {
    dispatch({ type: 'SAVE_ITEM', item })
  }
}
