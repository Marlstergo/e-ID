import React, { useContext, useEffect } from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "./ContactForm";
import { AppContext } from "../contexts/appContext";
function ContactContent() {
  const { contactData, getContactInfo }: any = useContext(AppContext);

  useEffect(() => {
    getContactInfo();
  }, []);

  return (
    <div className="contact-inner">
      <ContactInfo data={contactData} />
      <ContactForm />
    </div>
  );
}

export default ContactContent;
