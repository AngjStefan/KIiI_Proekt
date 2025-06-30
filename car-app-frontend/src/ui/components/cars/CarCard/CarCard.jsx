import React, {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditCarDialog from "../EditCarDialog/EditCarDialog.jsx";
import DeleteCarDialog from "../DeleteCarDialog/DeleteCarDialog.jsx";
import {useNavigate} from "react-router";

const CarCard = ({car, onEdit, onDelete}) => {
    const navigate = useNavigate();
    const [editCarDialogOpen, setEditCarDialogOpen] = useState(false);
    const [deleteCarDialogOpen, setDeleteCarDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{car.make}</Typography>
                    <Typography variant="h6">{car.model}</Typography>
                    <Typography variant="body2" sx={{textAlign: "left"}}>Year manufactured: {car.year_manufactured}</Typography>
                    <Typography variant="body1" fontWeight="bold"
                                sx={{textAlign: "right", fontSize: "1.25rem", marginTop: "10px"}}>Price in euros: {car.price_in_euros}</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={() => setEditCarDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={() => setDeleteCarDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditCarDialog
                open={editCarDialogOpen}
                onClose={() => setEditCarDialogOpen(false)}
                car={car}
                onEdit={onEdit}
            />
            <DeleteCarDialog
                open={deleteCarDialogOpen}
                onClose={() => setDeleteCarDialogOpen(false)}
                car={car}
                onDelete={onDelete}
            />
        </>
    );
};

export default CarCard;
