import React from 'react'
import test from './style.module.css';

export default function ListItem({ name }) {
    const color = {
        background: "red",
        color: "cyan",
    }
    return (
        <li className={test.header}>{name}</li>
    )
}

