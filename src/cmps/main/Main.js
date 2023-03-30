import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import data from '../../data/employees.json'
import List from '../List/List';
import View from '../View/View';

import { getData } from '../../store/actions/EmployeeActions'

export default function Main() {
    const dispach = useDispatch()
    const Employees = useSelector(state => state.EmployeeReducer.Employees)

    useEffect(() => {
        dispach(getData(data))
    }, [])

    return <div className={'main-container'}>
        <h1>Hello world App </h1>
        <div className={'content-container'}>
            <div className={'side-container'}>
                {Employees && <List data={Employees} />}
            </div>
            <div className={'view-container'}>
            {<View />}
            </div>
        </div>
    </div>;

}