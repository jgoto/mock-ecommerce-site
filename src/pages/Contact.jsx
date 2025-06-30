import Newsletter from '../components/Newsletter';
import styles from './Contact.module.css';

export default function Contact(){
    return (
        <>
            <div className={styles.contactSection}>
                <h2>Contact Us</h2>
                <ul>
                    <li>Email: support@wallyswidgets.fake</li>
                    <li>Phone: 1-800-555-FAKE (1-800-555-3253)</li>
                    <li>Address: 1234 Widget Lane, Techville, AZ 85201, USA </li>
                </ul>
            </div>
            <div className={styles.contactSection}>
                <h2>Do you like this site?</h2>
                <p>Check out my <a href="https://github.com/jgoto" target="_blank" rel = "noopener noreferrer">GitHub</a></p>
            </div>
            <Newsletter />
        </>
        
        
    )
}