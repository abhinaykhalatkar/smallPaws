import React from "react";
import "./AdoptionDetailsForm.css";
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const AdoptionDetailsForm = () => {

    return (
        <div className="page1">
            <h3 data-aos="fade-right" data-aos-delay="400" style={{ color: "white", padding: "2%", marginLeft: "5%" }}>Pet Details</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3} style={{ margin: "0px" }}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '20ch' },
                            }}
                            noValidate
                            autoComplete="off" className="petInput-box"
                        >
                            <Grid container spacing={3} style={{ margin: "0px" }}>

                                <Grid item xs={4}><h1>HELLO
                                </h1></Grid>
                                <Grid item xs={8}>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ margin: "0px" }}>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="standard" id="name"
                                                label="Name"
                                                type="text" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="standard" id="type"
                                                label="Pet Type"
                                                type="text" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="standard" id="size"
                                                label="size"
                                                type="text" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="standard"
                                                id="standard-select-currency"
                                                select
                                                label="Gender">
                                                <MenuItem>
                                                    Male
                                                </MenuItem>
                                                <MenuItem>
                                                    Female
                                                </MenuItem>
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="standard" id="training"
                                                label="Training"
                                                type="text" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="standard" id="color"
                                                label="Color"
                                                type="text" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="standard" id="time"
                                                label="BirthDate"
                                                type="date" InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="standard" id="vaccinatrion"
                                                label="Vaccination"
                                                select>
                                                <MenuItem>
                                                    Yes
                                                </MenuItem>
                                                <MenuItem>
                                                    No
                                                </MenuItem>
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="standard" id="address"
                                                label="Address" />
                                        </Grid>
                                    </Grid>
                                    <div className="dayCareButton">
                                        <button className="btn-daycare"> Submit </button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AdoptionDetailsForm;

