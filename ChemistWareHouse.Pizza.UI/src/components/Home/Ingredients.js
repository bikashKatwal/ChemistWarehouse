import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Ingredients({ ingredient, order, setOrder }) {
    return (
        <Grid item xs={4} sm={4} md={4} onClick={() => {
            const extraTopping = { ...ingredient, price: 1 };
            const extOrder = [...order];
            extOrder.forEach((e) => {
                if (e.pizzaId === extraTopping.pizzaId) {
                    e.Toppings = e.Toppings && e.Toppings.length > 0
                        ? [...e.Toppings, extraTopping]
                        : [extraTopping];
                }
            });
            setOrder(extOrder);
        }}>
            <Item>
                {ingredient.ingredientName}</Item>
        </Grid>
    );
}