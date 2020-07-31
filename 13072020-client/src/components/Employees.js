import React, { useState, useEffect } from 'react';
import DisplayStaff from './DisplayStaff';

export default function Employees() {

    const [staff, setStaff] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/staff-members', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(response => response.json())
            .then(data => setStaff(data));
    }, []);



    return (
        <div>
            <h1>Current Staff</h1>
            <br />
            {staff.map((s) => <DisplayStaff staff={s} key={s.staffId} />)}
        </div>
    )
}

