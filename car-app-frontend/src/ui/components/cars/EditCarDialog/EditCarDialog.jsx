import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";

const EditCarDialog = ({open, onClose, car, onEdit}) => {
    const [formData, setFormData] = useState({
        "make": car.make,
        "model": car.model,
        "year_manufactured": car.year_manufactured,
        "price_in_euros": car.price_in_euros
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        onEdit(car.id, formData);
        setFormData(formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Car</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Make"
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Year manufactured"
                    name="year_manufactured"
                    type="number"
                    value={formData.year_manufactured}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Price in euros"
                    name="price_in_euros"
                    type="number"
                    value={formData.price_in_euros}
                    onChange={handleChange}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="warning">Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditCarDialog;
