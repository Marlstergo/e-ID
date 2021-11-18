import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FormGroup, FormControl } from "@mui/material";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
const Input = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
const ContactForm = () => {
  return (
    <div className="form-wrapper">
      <div className="form-heading">
        <h4>Mail Us</h4>
      </div>
      <form>
        <div className="form-group">
          <div className="input-group">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input type="number" />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label>Subject</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label>Text</label>
            <textarea></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <input type="submit" value="Send" className="contact-btn" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
