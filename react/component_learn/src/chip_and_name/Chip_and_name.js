import React from 'react';
import Chip from './Chip';
import './chip_and_name.css'

const Chip_and_name = (props) => {
    return (
        <div className="chip_and_name">
            <div> {props.name}</div>
            <Chip text={props.text} color={props.color}></Chip>
        </div>
    );
}

export default Chip_and_name;