import React from 'react'

export default function DisplayFeedback(props) {
    return (
        <div>
            <h2>Title: {props.feedback.title}</h2>
            <p>Name: {props.feedback.name}</p>
            <p>Staff ID: {props.feedback.feedbackId}</p>
        </div>
    )
}