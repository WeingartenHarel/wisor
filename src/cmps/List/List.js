import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Preview from '../Preview/Preview'

export default function List({ data }) {
    return <>
        <div>
            <ul className={'ul-list'}>
                {data && data.map(item => {
                        return <Preview key={item.id} item={item} />
                })}                  
            </ul>
        </div>
    </>;
}