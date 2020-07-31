import React, { useState, useEffect } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';


export default function FeedbackForm(props) {

    const [personGreeting, setPersonGreeting] = useState('');
    const [waitTime, setWaitTime] = useState('');
    const [serverRating, setServerRating] = useState('');
    const [easeOfCompletion, setEaseOfCompletion] = useState('')
    const [overallExperience, setOverallExperience] = useState('')
    const [writtenFeedback, setWrittenFeedback] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [followUpStatus] = useState('open')

    function sendAddFeedbackRequest(e) {
        e.preventDefault();
        let u = {
            rating: {
                personGreeting,
                waitTime,
                serverRating,
                easeOfCompletion,
                overallExperience
            },
            writtenFeedback,
            contact: {
                name,
                email,
                contactNumber
            },
            followUpStatus
        }

        fetch('http://localhost:4000/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(u),
        })
            .then((response) => response.json())
            .then(json => {
                if (json.status == 200) {
                    props.FeedbackForm(json.data)
                    setPersonGreeting('')
                    setWaitTime('')
                    setServerRating('')
                    setEaseOfCompletion('')
                    setOverallExperience('')
                    setWrittenFeedback('')
                    setName('')
                    setEmail('')
                    setContactNumber('')
                }
                else {
                    alert("error")
                }
            });
    }





    return (
        <div style={{ border: '1px solid blue', padding: '5px', margin: '5px' }}>
            <form>
                {/* <div>
                    <input placeholder="First name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div>
                    <input placeholder="Surname" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div>
                    <input placeholder="Company name" onChange={(e) => setCompanyName(e.target.value)} value={companyName} />
                </div> */}

                <p>How satisfied are you with:</p>
                <div>
                    <fieldset onChange={(e) => setPersonGreeting(e.target.value)}>
                        <legend>The person who greeted you today?</legend>
                        <input type="radio" name="greeting-rating" value="5" /><label for="Greeting5" title="Rocks!"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/VerySatisfied.png' /></label>
                        <input type="radio" name="greeting-rating" value="4" /><label for="Greeting4" title="Pretty good"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Satisfied.png' /></label>
                        <input type="radio" name="greeting-rating" value="3" /><label for="Greeting3" title="Meh"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Neutral.png' /></label>
                        <input type="radio" name="greeting-rating" value="2" /><label for="Greeting2" title="Kinda bad"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Dissatisfied.png' /></label>
                        <input type="radio" name="greeting-rating" value="1" /><label for="Greeting1" title="Sucks big time"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/VeryDissatisfied.png' /></label>
                    </fieldset>

                    <fieldset onChange={(e) => setWaitTime(e.target.value)}>
                        <legend>The amount of time you waited?</legend>
                        <input type="radio" name="wait-rating" value="5" /><label for="Wait5" title="Rocks!"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/VerySatisfied.png' /></label>
                        <input type="radio" name="wait-rating" value="4" /><label for="Wait4" title="Pretty good"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Satisfied.png' /></label>
                        <input type="radio" name="wait-rating" value="3" /><label for="Wait3" title="Meh"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Neutral.png' /></label>
                        <input type="radio" name="wait-rating" value="2" /><label for="Wait2" title="Kinda bad"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Dissatisfied.png' /></label>
                        <input type="radio" name="wait-rating" value="1" /><label for="Wait1" title="Sucks big time"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/VeryDissatisfied.png' /></label>
                    </fieldset>

                    <fieldset onChange={(e) => setServerRating(e.target.value)}>
                        <legend>The person who served you today?</legend>
                        <input type="radio" name="server-rating" value="5" /><label for="Server5" title="Rocks!"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/VerySatisfied.png' /></label>
                        <input type="radio" name="server-rating" value="4" /><label for="Server4" title="Pretty good"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Satisfied.png' /></label>
                        <input type="radio" name="server-rating" value="3" /><label for="Server3" title="Meh"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Neutral.png' /></label>
                        <input type="radio" name="server-rating" value="2" /><label for="Server2" title="Kinda bad"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Dissatisfied.png' /></label>
                        <input type="radio" name="server-rating" value="1" /><label for="Server1" title="Sucks big time"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/VeryDissatisfied.png' /></label>
                    </fieldset>

                    <fieldset onChange={(e) => setEaseOfCompletion(e.target.value)}>
                        <legend>The ease of completing your transaction?</legend>
                        <input type="radio" name="ease-rating" value="5" /><label for="Ease5" title="Rocks!"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/VerySatisfied.png' /></label>
                        <input type="radio" name="ease-rating" value="4" /><label for="Ease4" title="Pretty good"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Satisfied.png' /></label>
                        <input type="radio" name="ease-rating" value="3" /><label for="Ease3" title="Meh"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Neutral.png' /></label>
                        <input type="radio" name="ease-rating" value="2" /><label for="Ease2" title="Kinda bad"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Dissatisfied.png' /></label>
                        <input type="radio" name="ease-rating" value="1" /><label for="Ease1" title="Sucks big time"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/VeryDissatisfied.png' /></label>
                    </fieldset>

                    <fieldset onChange={(e) => setOverallExperience(e.target.value)}>
                        <legend>Your overall experience today?</legend>
                        <input type="radio" name="rating" value="5" /><label for="experience5" title="Rocks!"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/VerySatisfied.png' /></label>
                        <input type="radio" name="rating" value="4" /><label for="experience4" title="Pretty good"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Satisfied.png' /></label>
                        <input type="radio" name="rating" value="3" /><label for="experience3" title="Meh"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Neutral.png' /></label>
                        <input type="radio" name="rating" value="2" /><label for="experience2" title="Kinda bad"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/Dissatisfied.png' /></label>
                        <input type="radio" name="rating" value="1" /><label for="experience1" title="Sucks big time"><img src='http://cfm1.service.nsw.gov.au/Tablet//Content/Images/FeedbackFaces/VeryDissatisfied.png' /></label>
                    </fieldset>
                </div>
                <div>
                    <textarea placeholder='Additonal comments' id="w3review" name="w3review" rows="4" cols="50">
                        
                    </textarea>
                </div>
                <div>Contact Details<br />
                    <input placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} /><br />
                    <input placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                    <input placeholder="Contact Number" onChange={(e) => setContactNumber(e.target.value)} value={contactNumber} /><br /><br />
                </div>
                <button className='btn btn-primary' onClick={sendAddFeedbackRequest}>Submit Feedback</button>
            </form>
        </div>
    )
}
