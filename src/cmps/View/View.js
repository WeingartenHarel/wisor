import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { saveItem } from '../../store/actions/EmployeeActions'

export default function View({ }) {
    const dispach = useDispatch()
    const SelectedEmployee = useSelector(state => state.EmployeeReducer.SelectedEmployee)
    const SelectedEmployeeEdit = useSelector(state => state.EmployeeReducer.SelectedEmployeeEdit)
    const [itemToEdit, setItemToEdit] = useState(null)

    useEffect(() => {
        if (!SelectedEmployeeEdit) {
            setItemToEdit(null)
            return
        } else {
            setItemToEdit({ ...SelectedEmployeeEdit })
        }
    }, [SelectedEmployeeEdit])

    const handleChangeInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setItemToEdit(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSave = (e) => {
        dispach(saveItem(itemToEdit))
    }

    const showElectedItem = () => {
        return <div className='view' key={SelectedEmployee.id}>
            <div className='employee-selected-main-container'>
                <div>
                    <img className='employee-img-selected' src={SelectedEmployee.profile_pic} />
                </div>
                <div className='employee-details-selected'>
                    <span>Name: {SelectedEmployee.first_name} {SelectedEmployee.last_name}</span>
                    <span>Email: {SelectedEmployee.email}</span>
                    <span>User Name:{SelectedEmployee.username}</span>
                    <span>Gender: {SelectedEmployee.gender}</span>
                    <span>Street: {SelectedEmployee.street}</span>
                    <span>City: {SelectedEmployee.city}</span>
                    <span>Bio: {SelectedEmployee.bio}</span>
                </div>
            </div>
        </div>
    }

    const editElectedItem = () => {
        return <div className='view' >
            <div className='employee-selected-main-container'>
                <div>
                    <img className='employee-img-selected' src={itemToEdit.profile_pic} />
                </div>
                <div className='employee-details-selected'>
                    name:<input name="first_name" onChange={handleChangeInput} value={itemToEdit.first_name} />
                    last name:<input name="last_name" onChange={handleChangeInput} value={itemToEdit.last_name} />
                    email:<input name="email" onChange={handleChangeInput} value={itemToEdit.email} />
                    username:<input name="username" onChange={handleChangeInput} value={itemToEdit.username} />
                    gender:<input name="gender" onChange={handleChangeInput} value={itemToEdit.gender} />
                    street:<input name="street" onChange={handleChangeInput} value={itemToEdit.street} />
                    city:<input name="city" onChange={handleChangeInput} value={itemToEdit.city} />
                    bio:<input name="bio" onChange={handleChangeInput} value={itemToEdit.bio} />
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    }

    return <>
        {SelectedEmployee && showElectedItem()}
        {itemToEdit && editElectedItem()}
    </>;
}