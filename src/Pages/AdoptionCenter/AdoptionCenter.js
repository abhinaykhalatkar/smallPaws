import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "./PetCard";
import "./AdoptionCenter.css";

export default function AdoptionCenter() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPetsData, setLoadedPetData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res;
      })
      .then((res) => {
        setIsLoading(false);
        setLoadedPetData(res.data.splice(0, 20));
      })
      .catch((error) => {
        return <div>Not loaded...</div>;
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div className="container__AdCen">
      <div className="d-lg-flex">
        <div className="card__AdCen border-0 me-lg-4 mb-lg-0 mb-4">
          <div className="backgroundEffect__AdCen"></div>
          <div className="pic__AdCen">
            {" "}
            <img
              className=""
              src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"              alt=""
            />
            <div className="date">
              {" "}
              <span className="day">26</span>{" "}
              <span className="month">June</span>{" "}
              <span className="year">2019</span>{" "}
            </div>
          </div>
          <div className="content__AdCen">
            <p className="h-1 mt-4">
              Finance And Legal Working Streams Occur Throughout
            </p>
            <p className="text-muted mt-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
              <div className="btn__AdCen btn__AdCen-primary">
                Read More<span className="fas__AdCen fa-arrow-right"></span>
              </div>
              <div className="d-flex align-items-center justify-content-center foot__AdCen">
                <p className="admin__AdCen">Admin</p>
                <p className="ps-3 icon text-muted">
                  <span className="fas__AdCen fa-comment-alt pe-1"></span>3
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card__AdCen border-0 me-lg-4 mb-lg-0 mb-4">
          <div className="backgroundEffect__AdCen"></div>
          <div className="pic__AdCen">
            {" "}
            <img
              className=""
              src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"              alt=""
            />
            <div className="date">
              {" "}
              <span className="day">26</span>{" "}
              <span className="month">June</span>{" "}
              <span className="year">2019</span>{" "}
            </div>
          </div>
          <div className="content__AdCen">
            <p className="h-1 mt-4">
              Finance And Legal Working Streams Occur Throughout
            </p>
            <p className="text-muted mt-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
              <div className="btn__AdCen btn__AdCen-primary">
                Read More<span className="fas__AdCen fa-arrow-right"></span>
              </div>
              <div className="d-flex align-items-center justify-content-center foot__AdCen">
                <p className="admin__AdCen">Admin</p>
                <p className="ps-3 icon text-muted">
                  <span className="fas__AdCen fa-comment-alt pe-1"></span>3
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card__AdCen border-0 me-lg-4 mb-lg-0 mb-4">
          <div className="backgroundEffect__AdCen"></div>
          <div className="pic__AdCen">
            {" "}
            <img
              className=""
              src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"              alt=""
            />
            
            <div className="date">
              {" "}
              <span className="day">26</span>{" "}
              <span className="month">June</span>{" "}
              <span className="year">2019</span>{" "}
            </div>
          </div>
          <div className="content__AdCen">
            <p className="h-1 mt-4">
              Finance And Legal Working Streams Occur Throughout
            </p>
            <p className="text-muted mt-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
              <div className="btn__AdCen btn__AdCen-primary">
                Read More<span className="fas__AdCen fa-arrow-right"></span>
              </div>
              <div className="d-flex align-items-center justify-content-center foot__AdCen">
                <p className="admin__AdCen">Admin</p>
                <p className="ps-3 icon text-muted">
                  <span className="fas__AdCen fa-comment-alt pe-1"></span>3
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

//    {/* <div classNameName="div1">
// <NavLink to="/adoptionDetailsForm">Need to put pet for adoption?</NavLink>
// </div>

// <div classNameName="petDisplayModule">
// <h1 classNameName="heading">Adoption Center</h1>
// <div classNameName="locationPicker">
//     <div>
//     <label htmlFor="locationInput">Select City</label>
//   <select name="locationInput" id="city">
//     <option value="Heidelbirg">Heidelbirg</option>
//     <option value="Mannheim">Mannheim</option>
//   </select>
//     </div>
// </div>
//   <PetCard petTemplateData={loadedPetsData} />
// </div> */}
