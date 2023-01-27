import { Grid, MenuItem, Paper, styled } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { Select } from "formik-mui";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateLocation from "../components/Admin/CreateLocation";
import Location from "../components/Admin/Location";
import PizzaMenu from "../components/Admin/PizzaMenu";
import CwhLoader from "../components/CwhLoader";
import MainLayout from "../components/MainLayout";
import { actionCreators as ac } from "../redux/actions/pizzariaActionReducer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Admin = () => {
  const dispatch = useDispatch();
  const { isFetchingData, locations, pizzaTypes } = useSelector(
    (state) => state.pizzaria
  );

  useEffect(() => {
    dispatch(ac.getLocations());
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(ac.getPizzaMenuByLocation(e.target.value));
  };

  return (
    <>
      <MainLayout>
        <Grid container spacing={2}>
          {isFetchingData ? (
            <CwhLoader />
          ) : (
            <Grid item xs={4}>
              <Item>
                <CreateLocation />
                {locations && <Location locations={locations} />}
              </Item>
            </Grid>
          )}
          <Grid item xs={4}>
            <Item>
              <Formik
                initialValues={{
                  location: "select",
                }}
              >
                {({ values, errors }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <Field
                          name="location"
                          component={Select}
                          variant="outlined"
                          fullWidth
                          sx={{
                            width: "250px",
                          }}
                          onChange={handleChange}
                        >
                          <MenuItem key="select" value="select">
                            -- Select Location --
                          </MenuItem>

                          {locations &&
                            locations.map((opt) => (
                              <MenuItem
                                key={opt.locationId}
                                value={opt.locationId}
                              >
                                {opt.locationName}
                              </MenuItem>
                            ))}
                        </Field>
                      </Grid>
                    </Grid>
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                  </Form>
                )}
              </Formik>
              {pizzaTypes && <PizzaMenu pizzaTypes={pizzaTypes} />}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Admin;
