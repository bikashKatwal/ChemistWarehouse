import { Grid, MenuItem, Paper, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "@mui/material/Select";
import CreateLocation from "../components/Admin/CreateLocation";
import Location from "../components/Admin/Location";
import PizzaMenu from "../components/Admin/PizzaMenu";
import CwhLoader from "../components/CwhLoader";
import MainLayout from "../components/MainLayout";
import { actionCreators as ac } from "../redux/actions/pizzariaActionReducer";
import CreateEditPizza from "../components/Admin/CreateEditPizza";
import SelectMenu from "../components/Admin/SelectMenu";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Admin = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [editPizza, setEditPizza] = useState(null);

  const { isFetchingData, locations, pizzaTypes } = useSelector(
    (state) => state.pizzaria
  );

  useEffect(() => {
    dispatch(ac.getLocations());
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
    dispatch(ac.getPizzaMenuByLocation(e.target.value));
  };

  return (
    <>
      <MainLayout>
        <Grid container spacing={2}>
          {isFetchingData ? (
            <CwhLoader />
          ) : (
            <Grid item xs={6}>
              <Item>
                <CreateLocation />
                {locations && <Location locations={locations} />}
              </Item>
            </Grid>
          )}
          <Grid item xs={6}>
            <Item sx={{ textAlign: "left" }}>
              <SelectMenu
                locations={locations}
                location={
                  location || (locations && locations[0].locationId) || ""
                }
                handleChange={handleChange}
              />

              {pizzaTypes && (
                <PizzaMenu
                  pizzaTypes={pizzaTypes}
                  setEditPizza={setEditPizza}
                />
              )}
            </Item>
          </Grid>
          {editPizza && (
            <Grid item xs={6}>
              <Item>
                <CreateEditPizza pizza={editPizza} />
              </Item>
            </Grid>
          )}
        </Grid>
      </MainLayout>
    </>
  );
};

export default Admin;
