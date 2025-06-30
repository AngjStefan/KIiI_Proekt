import React, {useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import CarsGrid from "../../components/cars/CarsGrid/CarsGrid.jsx";
import useCars from "../../../hooks/useCars.js";
import "./CarsPage.css";
import AddCarDialog from "../../components/cars/AddCarDialog/AddCarDialog.jsx";

const CarsPage = () => {
    const {cars, loading, onAdd, onEdit, onDelete} = useCars();
    const [addCarDialogOpen, setAddCarDialogOpen] = useState(false);

    return (
        <>
            <Box className="cars-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary" onClick={() => setAddCarDialogOpen(true)}>
                                Add Car
                            </Button>
                        </Box>
                        <CarsGrid cars={cars} onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            <AddCarDialog
                open={addCarDialogOpen}
                onClose={() => setAddCarDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default CarsPage;
