import React, { useState, useEffect } from 'react';
import DisplayFeedback from './DisplayFeedback';

export default function feedbacks() {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/feedback/view', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(response => response.json())
            .then(data => setFeedback(data));
    }, []);



    return (
        <div>
            <h1>Feedback List</h1>
            <br />
            {feedback.map((f) => <DisplayFeedback feedback={f} key={f.feedbackId} />)}
        </div>
    )
}