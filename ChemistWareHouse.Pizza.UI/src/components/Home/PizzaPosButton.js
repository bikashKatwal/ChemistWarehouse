import { Card, CardContent, Typography } from '@mui/material';

export default function PizzaPosButton({ pizza, order, setOrder, setTempOrder, isActive, setIsActive }) {

    const addOrders = () => {
        const isExist = order.some(o => o.pizzaId === pizza.pizzaId);
        const filtered = order.filter(o => o.pizzaId !== pizza.pizzaId);
        if (isExist) {
            setOrder([...filtered]);
            pizza.Toppings = null
        } else {
            setOrder([...filtered, pizza]);
            setTempOrder(pizza);
        }
        setIsActive(pizza.pizzaId);
    }

    return (
        <Card sx={{ minWidth: 275, cursor: "pointer", backgroundColor: isActive === pizza.pizzaId ? "turquoise" : "transparent", }}
            onClick={addOrders}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {pizza.pizzaType}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5">
                    ${pizza.price}
                </Typography>
                {pizza?.ingredients?.map((i, index) => (
                    <Typography key={i.ingredientId} variant="span">
                        {i.ingredientName}
                        {index < (pizza.ingredients.length - 1) && <span>,&nbsp;</span>}
                    </Typography>
                ))}
            </CardContent>
        </ Card>
    );
}