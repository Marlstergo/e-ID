import CustomizedAccordion from "../../components/CustomizedAccordions";
import { List, ListItem } from "@mui/material";
import theme from "../../helpers/store/theme";
import Typography from "@mui/material/Typography";

const Lists = (
  <List>
    <ListItem sx={{ "&:hover": { color: theme.palette.primary.main } }}>
      <Typography variant="body1">Schools and Curriculum</Typography>
    </ListItem>
    <ListItem sx={{ "&:hover": { color: theme.palette.primary.main } }}>
      <Typography variant="body1">Students Finance</Typography>
    </ListItem>
    <ListItem sx={{ "&:hover": { color: theme.palette.primary.main } }}>
      <Typography variant="body1">University and higher education</Typography>
    </ListItem>
  </List>
);

export default (
  <div className="accordians o-section__item">
    {[
      {
        Title: "Education And Learning",
        Content: [
          "Schools and Curriculm",
          "Studens Finance",
          "University and higher education",
        ],
      },
      {
        Title: "Working Jobs And Pensions",
        Content: [
          "Schools and Curriculm",
          "Studens Finance",
          "University and higher education",
        ],
      },
      {
        Title: "Citizenship and living in the UK",
        Content: [
          "Schools and Curriculm",
          "Studens Finance",
          "University and higher education",
        ],
      },
      {
        Title: "Childcare and parenting",
        Content: [
          "Schools and Curriculm",
          "Studens Finance",
          "University and higher education",
        ],
      },
    ].map((value, index) => (
      <CustomizedAccordion key={index} title={value.Title}>
        <List>
          {value.Content.map((value, index) => (
            <ListItem
              key={index}
              sx={{ "&:hover": { color: theme.palette.primary.main } }}
            >
              <Typography variant="body1">{value}</Typography>
            </ListItem>
          ))}
        </List>
      </CustomizedAccordion>
    ))}
  </div>
);
