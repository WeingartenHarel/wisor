const INITIAL_STATE = {
  Employees: [],
  SelectedEmployee: null,
  SelectedEmployeeEdit: null,
}

export function EmployeeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_DATA':
      const EmployeesWithSubEmployees = action.data.map(item => {
        let EmployeesToFilter = [...action.data]
        const subEmployees = EmployeesToFilter.filter(subItem => subItem.manager_id === item.id)
        return {...item,subEmployees }
      })
      return {
        ...state,
        Employees: EmployeesWithSubEmployees,
      }
    case 'SET_SELECTED':
      return {
        ...state,
        SelectedEmployee: action.data,
        SelectedEmployeeEdit: null,
      }
    case 'EDIT_ITEM':
      return {
        ...state,
        SelectedEmployee: null,
        SelectedEmployeeEdit: action.item,
      }
    case 'DELETE_ITEM':
      const EmployeesCopy = [...state.Employees];
      const result = EmployeesCopy.filter(item => item.id !== action.id);
      return {
        ...state,
        Employees: [...result],
      }
    case 'SAVE_ITEM':
      const EmployeesEdit = [...state.Employees];
      const itemIndex = state.Employees.findIndex(item => item.id === action.item.id)
      EmployeesEdit[itemIndex] = action.item
      return {
        ...state,
        Employees: [...EmployeesEdit],
      }
    default:
      return state
  }
}