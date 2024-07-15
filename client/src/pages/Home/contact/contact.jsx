import './contact.css'
import { useSelector } from 'react-redux';


function Contact() {
    const { portfolioData } = useSelector((state) => state.root);
    const { contact } = portfolioData;

    return (
        <section id='contact'>
            <h4>More Enquiries</h4>
            <h2>Contact</h2>
            <div className="container contact_container">
                <div className="contact_card">
                    <h1>{'{'}</h1>
                    {Object.keys(contact).map((key) => (
                        <h1>
                            <span>{key} : </span>
                            <span>{contact[key]}</span>
                        </h1>
                    ))}
                    <h1>{'}'}</h1>
                </div>
            </div>
        </section>
    )
}

export default Contact