import React from "react";
import "./DayCareServices.css";
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const DayCareServices = () => {
  return (
    <div className="page1">
                <h3 data-aos="fade-right" data-aos-delay="400" style={{ color: "white", padding: "2%", marginLeft: "5%" }}>Day Care Service</h3>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} style={{ margin: "0px" }}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off" className="input-box"
            >
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ margin: "0px" }}>
                <Grid item xs={6}>
                  <TextField
                    variant="standard" id="date"
                    label="Pick up date"
                    type="date" InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="standard" id="date"
                    label="Drop date"
                    type="date" InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="standard" id="time"
                    label="Pick up time"
                    type="time" InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="standard" id="time"
                    label="Drop time"
                    type="time" InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  Value added services
                  <div>
                    <Checkbox {...label} defaultChecked />
                    <lable>Isolation</lable>
                    <Checkbox {...label} defaultChecked />
                    <lable>Feeding</lable>
                    <Checkbox {...label} defaultChecked />
                    <lable>Grooming</lable>
                    <Checkbox {...label} defaultChecked />
                    <lable>Training</lable>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="standard" id="address"
                    label="Address" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Total Pay"
                    defaultValue="20"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="standard" />
                </Grid>
                <Grid item xs={6}>
                  <h5 style={{ marginLeft: "20px" }}>Charge: 6.99 euro/hr.</h5>
                </Grid>
              </Grid>
              <div className="dayCareButton">
                  <button className="btn-daycare"> Book </button>
                </div>
            </Box>
            
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DayCareServices;

