import React from "react";
import "./VetService.css";


const SingleVet = () => {
  return (
    <div className="container mt-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-7">
            <div className="card p-3 py-4">
                <div className="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle"/> </div>
                <div className="text-center mt-3"> 
               <span>
               
               <ul className="mb-0 list-unstyled d-flex flex-row" style={{color: "#1B7B2C"}}>
                  
                  <li>
                    <i className="fa fa-star fa-xs"></i>
                  </li>
                  <li>
                    <i className="fa fa-star fa-xs"></i>
                  </li>
                  <li>
                    <i className="fa fa-star fa-xs"></i>
                  </li>
                  <li>
                    <i className="fa fa-star fa-xs"></i>
                  </li>
                  <li>
                    <i className="fa fa-star fa-xs"></i>
                  </li>
                </ul>
               </span>
                
                    <h5 className="mt-2 mb-0">Dr.Alexender Schidmt</h5> <span>MD Pediatrics</span>
                    <div className="px-4 mt-1">
                        <p className="fonts">I have 15 years of experience with furry beings and have done my masters from Ukraine. </p>
                    </div>
                    <ul className="social-list">
                        <li>8 years of experience</li><br></br>
                        <li>Home Service</li>
                        <li>5 Awards</li>
                    </ul>
                    <div className="buttons">
                    {/* <button className="btn btn-outline-primary px-4">Message</button>  */}
                    <button className="btn btn-outline-primary px-4 ms-3">Contact</button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  );
};

export default SingleVet;
