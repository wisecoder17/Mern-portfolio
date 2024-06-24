import React from 'react'
import './contact.css'
import IMG from '../../assets/demo3.jpeg'
import { user } from './data';
function contact() {
    return (
        <section id='contact'>
            <h4>More Enquiries</h4>
            <h2>Contact</h2>
            <div className="container contact_container">
                <div className="contact_card">
                    <h1>{'{'}</h1>
                    {Object.keys(user).map((key) => (
                        <h1>
                            <span>{key} : </span>
                            <span>{user[key]}</span>
                        </h1>
                    ))}
                    <h1>{'}'}</h1>
                </div>
            </div>
        </section>
    )
}

export default contact