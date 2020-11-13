import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {buttonSection} from '../../redux/buttonDucks'
import './buttonStyles.scss';


const Button = (params) => {
    const dispatch = useDispatch();
    const data = useSelector(store => store)
    

    return (
        <button onClick={() => dispatch(buttonSection(params))} className={params.className}>{params.name}</button>
    )
}

export default Button;

