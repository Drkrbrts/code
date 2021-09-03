import React from "react";
import { Formik, Form } from "formik";
import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Min 2 char").max(50).required("Required"),
});
class FormikMaterialUI extends React.Component {
  state = {
    sports: [
      { id: 1, name: "Soccer" },
      { id: 2, name: "Basketball" },
      { id: 3, name: "Football" },
      { id: 4, name: "Cricket" },
      { id: 5, name: "Hockey" },
    ],
    formData: {
      fullName: "",
      checkedB: false,
      gender: "",
      sportId: "",
    },
  };
  handleSubmit = (values) => {
    console.log(values);
  };

  mapSport = (sport) => (
    <MenuItem key={`sport_${sport.id}`} value={sport.id}>
      {sport.name}
    </MenuItem>
  );
  render() {
    return (
      <Formik
        enableReinitialize={true}
        initialValues={this.state.formData}
        onSubmit={this.handleSubmit}
        validationSchema={formValidationSchema}
      >
        {({ values, handleChange, touched, errors }) => (
          <Form>
            <Box m={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Primary"
              />
            </Box>
            <Box m={1}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="(Disabled option)"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <FormControl fullWidth>
              <InputLabel>Sports</InputLabel>
              <Select
                name="sportId"
                value={values.sportId}
                onChange={handleChange}
              >
                {this.state.sports.map(this.mapSport)}
              </Select>
            </FormControl>
            <TextField
              name="fullName"
              label="Full Name"
              values={values.fullName}
              onChange={handleChange}
              error={touched.fullName && Boolean(errors.fullName)}
              helperText={touched.fullName && errors.fullName}
            />
            <Button varient="contained" color="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default FormikMaterialUI;
