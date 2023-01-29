import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectMenu from "../components/Admin/SelectMenu";
import MainLayout from "../components/MainLayout";
import { actionCreators as ac } from "../redux/actions/pizzariaActionReducer";
import { styled } from "@mui/material/styles";
import PizzaPosButton from "../components/Home/PizzaPosButton";
import Ingredients from "../components/Home/Ingredients";
import ConfirmDialog from "../components/ConfirmDialog";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [open, setOpen] = useState(false); //use for confirm dialog

  const [isActive, setIsActive] = useState("");
  const [tempOrder, setTempOrder] = useState(null); // List the ingredients of selected Pizza in Extra Topping
  const [order, setOrder] = useState([]);
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const { locations, pizzaTypes } = useSelector((state) => state.pizzaria);

  useEffect(() => {
    dispatch(ac.getLocations());
  }, [locations === null]);

  const handleChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
    dispatch(ac.getPizzaMenuByLocation(e.target.value));
  };

  const calculatePrice = () => {
    let toppingSum = 0;
    const totalPrice = order.reduce((acc, curr) => {
      acc += curr.price;
      return acc;
    }, 0);

    order.forEach((e) => {
      if (e.Toppings && e.Toppings.length > 0) {
        toppingSum = e.Toppings.reduce((acc, curr) => {
          acc += curr.price;
          return acc;
        }, 0);
      }
    });

    return totalPrice + toppingSum;
  };

  const handleReset = () => {
    order.forEach((o) => {
      o.Toppings = null;
    });
    setOrder([]);
    setIsActive("");
  };

  return (
    <>
      {locations && (
        <MainLayout>
          <SelectMenu
            locations={locations}
            location={location || (locations && locations[0].locationId) || ""}
            handleChange={handleChange}
          />
        </MainLayout>
      )}

      <ConfirmDialog open={open} setOpen={setOpen} handleReset={handleReset} />

      <MainLayout>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 128,
                },
              }}
            >
              {pizzaTypes?.pizzas &&
                pizzaTypes.pizzas.map((p) => (
                  <PizzaPosButton
                    key={p.pizzaId}
                    pizza={p}
                    order={order}
                    setOrder={setOrder}
                    tempOrder={tempOrder}
                    setTempOrder={setTempOrder}
                    isActive={isActive}
                    setIsActive={setIsActive}
                  />
                ))}
            </Box>

            <Grid item xs={12}>
              <Item
                sx={{
                  textAlign: "left",
                }}
              >
                <Typography component="div" variant="h5">
                  Extra Topping
                </Typography>
              </Item>

              {tempOrder && tempOrder.ingredients && (
                <Item
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <Box sx={{ flexGrow: 1, cursor: "pointer" }}>
                    <Grid container spacing={2} rowSpacing={1}>
                      {tempOrder.ingredients.map((item) => (
                        <Ingredients
                          key={item.ingredientId}
                          ingredient={item}
                          order={order}
                          setOrder={setOrder}
                        />
                      ))}
                    </Grid>
                  </Box>
                </Item>
              )}
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Item>
              <Typography variant="h5" component="div">
                ORDER LIST
              </Typography>
            </Item>

            {order.length > 0 && (
              <>
                <Item
                  sx={{
                    textAlign: "left",
                  }}
                >
                  {/* <Grid container rowSpacing={1}> */}
                  {order.length > 0 &&
                    order.map((o) => (
                      <Fragment key={o.pizzaId}>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography component="div">{o.pizzaType}</Typography>
                          <Typography component="div">{o.price}</Typography>
                        </Grid>
                        {o.Toppings &&
                          o.Toppings.map((t, index) => (
                            <Typography
                              key={index}
                              component="div"
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                paddingLeft: "20px",
                              }}
                            >
                              <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                sx={{ fontStyle: "italic" }}
                              >
                                {t.ingredientName}
                              </Typography>
                              <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                              >
                                + {t.price}
                              </Typography>
                            </Typography>
                          ))}
                      </Fragment>
                    ))}
                  {/* </Grid> */}
                </Item>
                <Item>
                  <Grid container rowSpacing={1}>
                    <Grid item xs={6} textAlign="right">
                      <Typography variant="h5" component="div">
                        TOTAL
                      </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                      <Typography variant="h5" component="div">
                        ${calculatePrice()}
                      </Typography>
                    </Grid>
                  </Grid>
                </Item>
              </>
            )}
            <Item>
              <Button
                variant="contained"
                fullWidth
                disabled={order.length === 0}
                onClick={() => setOpen(true)}
              >
                Complete Order
              </Button>
            </Item>
            <Item>
              <Button
                variant="contained"
                fullWidth
                color="error"
                disabled={order.length === 0}
                onClick={handleReset}
              >
                Clear
              </Button>
            </Item>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Home;
