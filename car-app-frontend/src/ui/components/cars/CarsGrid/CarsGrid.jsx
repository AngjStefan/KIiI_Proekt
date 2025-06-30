import React from 'react';
import CarCard from "../CarCard/CarCard.jsx";
import {Grid} from "@mui/material";

const CarsGrid = ({cars, onEdit, onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {cars.map((car) => (
                <Grid key={car.id} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
                    <CarCard car={car} onEdit={onEdit} onDelete={onDelete}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default CarsGrid;
