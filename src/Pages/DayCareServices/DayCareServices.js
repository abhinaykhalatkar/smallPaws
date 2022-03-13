import React from "react";
import "./DayCareServices.css";
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { padding } from "@mui/system";



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
    // <div className="container" style={{marginTop:10}}>
    //   <form>
    //     <div className="form-group">
    //       <label htmlFor="pickupDate">Pick Up</label>
    //       <input
    //         type="date"
    //         className="form-control"
    //         id="pickupDate"
    //         placeholder="pick up date"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="dropDate">Drop</label>
    //       <input
    //         type="date"
    //         className="form-control"
    //         id="dropDate"
    //         placeholder="drop date"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="pickupTime">Pick Up Time</label>
    //       <input
    //         type="time"
    //         className="form-control"
    //         id="pickupTime"
    //         placeholder="pick up time"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="dropTime">Drop Time</label>
    //       <input
    //         type="time"
    //         className="form-control"
    //         id="dropTime"
    //         placeholder="drop time"
    //       />
    //     </div>
    //     <div className="htmlForm-check">
    //       <input type="checkbox" className="htmlForm-check-input" id="Isolation" />
    //       <label className="htmlForm-check-label" htmlFor="feeding">
    //         Isolation
    //       </label>
    //     </div>
    //     <div className="htmlForm-check">
    //       <input type="checkbox" className="htmlForm-check-input" id="Feeding" />
    //       <label className="htmlForm-check-label" htmlFor="feeding">
    //         Feeding
    //       </label>
    //     </div>

    //     <div className="htmlForm-check">
    //       <input type="checkbox" className="htmlForm-check-input" id="isolation" />
    //       <label className="htmlForm-check-label" htmlFor="feeding">
    //         Isolation
    //       </label>
    //     </div>
    //     <div className="htmlForm-check">
    //       <input type="checkbox" className="htmlForm-check-input" id="grooming" />
    //       <label className="htmlForm-check-label" htmlFor="feeding">
    //         Grooming
    //       </label>
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="address">Address</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="address"
    //         placeholder="Your address"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="amount"> Total Amount</label>
    //       <input
    //         type="number"
    //         className="form-control"
    //         id="amount"
    //         placeholder="total amount"
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Pay Now :)
    //     </button>
    //   </form>

