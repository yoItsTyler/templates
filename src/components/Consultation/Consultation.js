import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography, Box } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styles from './styles.module.css';
//import { styles } from "@material-ui/pickers/views/Calendar/Calendar";
import keys from '../../images/darkPianoKeys.jpg';

import { fb } from "../../service/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../Footer/Footer";



export const Consultation = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        availability: [{ date: null, time: null }],
    });

    const [errors, setErrors] = useState({});

    const handleChange = (field, value, index = null) => {
        if (index !== null) {
            const updatedAvailability = [...formData.availability];
            updatedAvailability[index][field] = value;
            setFormData({ ...formData, availability: updatedAvailability });
        } else {
            setFormData({ ...formData, [field]: value });
        }
    };

    const handleAddAvailability = () => {
        setFormData({
            ...formData,
            availability: [...formData.availability, { date: null, time: null }],
        });
    };

    const handleRemoveAvailability = (index) => {
        const updatedAvailability = formData.availability.filter((_, i) => i !== index);
        setFormData({ ...formData, availability: updatedAvailability });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Valid email is required.";
        if (!formData.phone || !/^\d{10}$/.test(formData.phone))
            newErrors.phone = "Valid phone number is required.";
        if (!formData.location) newErrors.location = "Location is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const submissionData = {
                    ...formData,
                    createTime: serverTimestamp(), // Firebase server-generated timestamp
                };
    
                await addDoc(collection(fb.firestore, "consultationForms"), submissionData);
    
                console.log("Form Data Submitted:", submissionData);
                alert("Thank you! Sharie will contact you shortly.");
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    location: "",
                    availability: [{ date: null, time: null }],
                });
                history.push('/'); // Redirect to home page after submission
            } catch (err) {
                console.error("Error submitting form:", err);
                alert("Failed to submit form. Please try again later.");
            }
        }
    };

    return (
        <div className={styles.main} style={{ backgroundImage: 'url(' + keys + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>
            <Container maxWidth="sm" sx={{ mt: 4, p: 2, borderRadius: 2, boxShadow: 2, bgcolor: "background.paper" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Schedule a Free Consultation
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    Fill out the form below, and Sharie will reach out to schedule your consultation.
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        margin="normal"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        fullWidth
                        label="Phone"
                        margin="normal"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />
                    <TextField
                        fullWidth
                        label="Location"
                        margin="normal"
                        value={formData.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                        error={!!errors.location}
                        helperText={errors.location}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Availability
                        </Typography>
                        {formData.availability.map((slot, index) => (
                            <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                                <Grid item xs={6}>
                                    <DatePicker
                                        label="Date"
                                        value={slot.date}
                                        onChange={(newValue) => handleChange("date", newValue, index)}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TimePicker
                                        label="Time"
                                        value={slot.time}
                                        onChange={(newValue) => handleChange("time", newValue, index)}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Grid>
                                {index > 0 && (
                                    <Grid item xs={12}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            color="error"
                                            onClick={() => handleRemoveAvailability(index)}
                                        >
                                            Remove Slot
                                        </Button>
                                    </Grid>
                                )}
                            </Grid>
                        ))}
                        <Button fullWidth variant="outlined" onClick={handleAddAvailability}
                            sx={{
                                borderColor: "black",
                                color: "black",
                                "&:hover": {
                                    borderColor: "black",
                                    backgroundColor: "rgba(0, 0, 0, 0.04)", // Optional hover effect
                                },
                            }} >
                            Add Another Slot
                        </Button>
                    </LocalizationProvider>
                    <Button type="submit" fullWidth variant="contained" color="primary" 
                    sx={{ 
                        mt: 3,
backgroundColor: "black",
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.8)", // Optional hover effect
                        },
                     }}>
                        Submit
                    </Button>
                </form>
            </Container>
           
        </div>
    );
};
