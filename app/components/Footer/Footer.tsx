import styles from './Footer.module.css';


const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p>YOU CAN CONTACT US ON LINKEDIN</p>
        <a  style = {{color : 'white'}}href = "https://www.linkedin.com/in/hafsa-waqar-3a0063272/"> Click Here</a>
        
      </footer>
    );
  };
  
  export default Footer;
  