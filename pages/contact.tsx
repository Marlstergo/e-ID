import React from "react";
import ContactContent from "../layouts/ContactContent";
import Section from "../layouts/Section";

interface Props {}

const Contact = (props: Props) => {
  return (
    <main>
      <div className="contact-wrapper">
        <Section
          className="contact"
          sectionHeading="Contact Us"
          sectionContent={<ContactContent />}
        />
      </div>
    </main>
  );
};

export default Contact;
