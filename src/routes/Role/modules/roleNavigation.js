import { TypeformAction, TypeformAttribute } from 'extensions/typeformUtils'

export const UPDATE_ACTIVE_INDEX = 'UPDATE_ACTIVE_INDEX'
export const UPDATE_ACTIVE_STATUS = 'UPDATE_ACTIVE_STATUS'
export const UPDATE_TYPEFORM_ATTRIBUTE = 'UPDATE_TYPEFORM_ATTRIBUTE'
export const UPDATE_SELECTED_PERSON = 'UPDATE_SELECTED_PERSON'

export const DisplayType = {
  DETAIL: 'detail',
  TYPEFORM: 'typeform'
}

export function updateActiveIndex (index, type) {
  return {
    type: UPDATE_ACTIVE_INDEX,
    payload: {
      index: index,
      type: type
    }
  }
}

export function updateActiveStatus (status, type) {
  return {
    type: UPDATE_ACTIVE_STATUS,
    payload: {
      status: status,
      type: type
    }
  }
}

export function updateTypeformAttribute (value, attribute) {
  return {
    type: UPDATE_TYPEFORM_ATTRIBUTE,
    payload: {
      value: value,
      attribute: attribute
    }
  }
}

export function updateSelectedPerson (person) {
  return {
    type: UPDATE_SELECTED_PERSON,
    payload: person
  }
}

export const typeformBackAction = () => {
  return (dispatch, getState) => {
    if (getState().roleNavigation.typeformActiveIndex === -1) {
      dispatch(updateActiveStatus(false, DisplayType.TYPEFORM))
      dispatch(updateActiveStatus(true, DisplayType.DETAIL))
    }
    dispatch(updateActiveIndex(-1, DisplayType.TYPEFORM))
  }
}

export const editPersonAction = (roleFilter, firstName, email) => {
  return (dispatch, getState) => {
    dispatch(updateTypeformAttribute(TypeformAction.UPDATE, TypeformAttribute.ACTION_FILTER))
    dispatch(updateTypeformAttribute(roleFilter, TypeformAttribute.ROLE_FILTER))
    dispatch(updateTypeformAttribute(email, TypeformAttribute.EMAIL))
    dispatch(updateActiveStatus(true, DisplayType.TYPEFORM))
    dispatch(updateActiveStatus(false, DisplayType.DETAIL))
    dispatch(updateActiveIndex(-1, DisplayType.TYPEFORM))
  }
}

export const addPersonAction = (menuTitle) => {
  return (dispatch, getState) => {
    dispatch(updateTypeformAttribute('', TypeformAttribute.EMAIL))
    dispatch(updateTypeformAttribute(menuTitle, TypeformAttribute.TITLE))
    dispatch(updateTypeformAttribute(TypeformAction.RECEIVE, TypeformAttribute.ACTION_FILTER))
    dispatch(updateTypeformAttribute('', TypeformAttribute.ROLE_FILTER))
    dispatch(updateActiveIndex(-1, DisplayType.DETAIL))
    dispatch(updateActiveIndex(-1, DisplayType.TYPEFORM))
    dispatch(updateActiveStatus(false, DisplayType.DETAIL))
    dispatch(updateActiveStatus(true, DisplayType.TYPEFORM))
  }
}

export const seePersonAction = (detailIndex) => {
  return (dispatch, getState) => {
    dispatch(updateActiveIndex(detailIndex, DisplayType.DETAIL))
    dispatch(updateActiveStatus(true, DisplayType.DETAIL))
    dispatch(updateActiveStatus(false, DisplayType.TYPEFORM))
  }
}

export const actions = {
  updateActiveIndex,
  updateActiveStatus,
  updateTypeformAttribute,
  typeformBackAction,
  editPersonAction,
  addPersonAction,
  updateSelectedPerson
}

const ROLE_NAVIGATION_ACTION_HANDLERS = {
  [UPDATE_ACTIVE_INDEX]: (state, action) => {
    switch (action.payload.type) {
      case DisplayType.TYPEFORM:
        return ({...state, typeformActiveIndex: action.payload.index})
      case DisplayType.DETAIL:
        if (action.payload.index === -1) {
          return ({...state, detailActiveIndex: action.payload.index, selected: {}})
        } else {
          return ({...state, detailActiveIndex: action.payload.index})
        }
    }
  },
  [UPDATE_ACTIVE_STATUS]: (state, action) => {
    switch (action.payload.type) {
      case DisplayType.TYPEFORM:
        return ({...state, typeformActiveStatus: action.payload.status})
      case DisplayType.DETAIL:
        return ({...state, detailActiveStatus: action.payload.status})
    }
  },
  [UPDATE_TYPEFORM_ATTRIBUTE]: (state, action) => {
    switch (action.payload.attribute) {
      case TypeformAttribute.ROLE_FILTER:
        return ({...state, typeformMenuRoleFilter: action.payload.value})
      case TypeformAttribute.ACTION_FILTER:
        return ({...state, typeformMenuActionFilter: action.payload.value})
      case TypeformAttribute.EMAIL:
        return ({...state, email: action.payload.value})
      case TypeformAttribute.TITLE:
        return ({...state, typeformMenuTitle: action.payload.value})
    }
  },
  [UPDATE_SELECTED_PERSON]: (state, action) => {
    return ({...state, selected: action.payload})
  }
}

const initialState = {typeformActiveIndex: -1, detailActiveIndex: -1, typeformActiveStatus: true,
  detailActiveStatus: false, typeformMenuActionFilter: TypeformAction.RECEIVE,
  typeformMenuRoleFilter: '', typeformMenuTitle: 'Add New Role', email: '', selected: {}}

export default function roleNavigationReducer (state = initialState, action) {
  const handler = ROLE_NAVIGATION_ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
