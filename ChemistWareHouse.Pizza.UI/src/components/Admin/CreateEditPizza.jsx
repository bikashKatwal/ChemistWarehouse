import { Button, Grid, InputLabel } from "@mui/material";
import { Field, Formik, Form } from "formik";
import { TextField } from "formik-mui";
import { useDispatch } from "react-redux";
import { actionCreators as ac } from "../../redux/actions/pizzariaActionReducer";

const CreateEditPizza = ({ pizza }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        pizzaId: pizza.pizzaId || "",
        pizzaType: pizza.pizzaType || "",
        price: pizza.price || "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(ac.updatePizza({ ...pizza, ...values }));
        setSubmitting(false);
      }}
      enableReinitialize={true}
    >
      {() => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={6} textAlign="left">
              <InputLabel>Pizza Type</InputLabel>
              <Field name="pizzaType" component={TextField} fullWidth />
            </Grid>
            <Grid item xs={6} textAlign="left">
              <InputLabel>Price</InputLabel>
              <Field
                name="price"
                type="number"
                component={TextField}
                fullWidth
              />
            </Grid>
            <Grid item textAlign="right" xs={12}>
              <Button type="submit" variant="contained">
                Update
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default CreateEditPizza;
