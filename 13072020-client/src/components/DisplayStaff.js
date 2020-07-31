import React from 'react'

export default function DisplayStaff(props) {
    return (
        <div>
            <h2>Title: {props.staff.title}</h2>
            <p>Name: {props.staff.name}</p>
            <p>Staff ID: {props.staff.staffId}</p>
        </div>
    )
}


