import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to collaborate? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:pradip.gadal.369@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:pradip.gadal.369@gmail.com">pradip.gadal.369@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+977) 9817391756</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}