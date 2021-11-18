import { Typography } from "@mui/material";
import AboutContent from "../../layouts/Content/AboutContent";
import ServicesSection from "../../layouts/Content/ServicesSection";
import Section from "../../layouts/Section";

const Services = () => {
  const ServicesContent = (
    <>
      {ServicesSection}
      <Typography sx={{ padding: "32px 0px" }} variant="body1">
        Magna invidunt sed lorem accusam dolores ea tempor dolor. Dolores
        accusam kasd dolores duo. Tempor amet et ipsum no. Takimata justo ut eos
        amet labore, eirmod amet at invidunt magna ut, ut consetetur accusam ut
        eos clita sed et ipsum, takimata aliquyam eirmod clita voluptua dolor,
        erat clita aliquyam gubergren sed tempor sea sit. Duo et stet tempor
        eirmod. Tempor ipsum duo ipsum accusam voluptua magna. Magna gubergren
        clita sit dolore sea sea et magna, takimata dolore rebum gubergren ut
        diam, vero elitr labore nonumy no ipsum nonumy. No lorem at eos tempor
        no ut, invidunt justo ea ut et ea, et ut diam eos et ipsum et dolor, sea
        ipsum aliquyam erat et eos accusam. Justo accusam sanctus et ut justo
        amet stet tempor sea. Magna justo et est no elitr, lorem eos et et ut
        dolor dolores aliquyam at lorem, consetetur consetetur invidunt magna
        kasd, clita et at sanctus magna. Dolores sadipscing clita voluptua eos
        ipsum. Gubergren erat voluptua no amet duo et voluptua aliquyam. Vero
        est gubergren dolores dolore dolores accusam justo magna, at amet tempor
        tempor clita dolor voluptua ipsum. Sanctus labore sadipscing et elitr
        clita, sit sed dolor vero nonumy gubergren. Diam dolor gubergren sea ut
        dolor sed dolores sanctus, invidunt elitr et sed ipsum sadipscing, eos
        clita sed dolores diam amet ipsum magna magna, et sed dolore et ipsum
        voluptua clita lorem no. Aliquyam diam eirmod aliquyam gubergren dolores
        labore, et elitr duo et lorem diam lorem amet rebum. Et voluptua est
        erat nonumy eirmod eirmod et. Est ipsum no elitr diam sea sea dolor
        sanctus lorem, kasd takimata voluptua et et at labore diam, sanctus
        ipsum stet sed sit takimata kasd gubergren voluptua. Lorem accusam
        dolores ipsum lorem magna, no erat kasd erat et voluptua gubergren at
        sit dolore, sit nonumy diam amet elitr, consetetur sit dolor et et ipsum
        sanctus. Amet gubergren tempor duo dolores clita ea sanctus takimata.
        Diam eos at et duo sit ea. Ipsum sed clita ipsum diam. Diam sea erat
        tempor ut et et ipsum, sit erat nonumy accusam rebum, dolores vero sed
        et ut amet dolores. Dolor magna gubergren ut sanctus tempor sed dolore
        takimata amet, consetetur dolore sit at sit dolores lorem clita. Dolores
        duo et sea invidunt, ipsum at et sadipscing accusam no accusam sanctus
        diam, sit dolores lorem ut amet lorem labore dolor. Accusam lorem amet
        erat invidunt invidunt, amet ea erat sed dolor.
      </Typography>
    </>
  );
  return (
    <main>
      <Section
        className="services"
        sectionHeading="Our Services"
        sectionContent={ServicesContent}
      />
    </main>
  );
};

export default Services;
