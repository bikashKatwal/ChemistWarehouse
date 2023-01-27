import { Button, Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useDispatch } from "react-redux";
import { actionCreators as ac } from "../../redux/actions/pizzariaActionReducer";
import * as Yup from "yup";

const LocationSchema = Yup.object().shape({
  locationName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const CreateLocation = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        locationName: "",
      }}
      validationSchema={LocationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(ac.createLocation(values));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={8}>
              <Field
                name="locationName"
                component={TextField}
                fullWidth
                label="Location Name"
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                sx={{
                  height: "53px",
                }}
                variant="contained"
                fullWidth
                disabled={isSubmitting}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
};

export default CreateLocation;
