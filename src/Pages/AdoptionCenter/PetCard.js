import "./PetCard.css";
export default function PetCard(props){
    let [url,title,animal,breed,age]=[...props.petCardDetails]
    return(

        <div className="card__AdCen border-0 me-lg-4 mb-lg-0 mb-4">
          <div className="backgroundEffect__AdCen"></div>
          <div className="pic__AdCen">
            {" "}
          
            {!(url==="")?<img src={url} alt="https://via.placeholder.com/150/771796" />:
            <img src={"https://via.placeholder.com/150/771796"} alt="https://via.placeholder.com/150/771796" />}
            <div className="date">
              {" "}
              <span className="day">{age}</span>{" "}
              <span className="month">years</span>{" "}
              <span className="year"></span>{" "}
            </div>
          </div>
          <div className="content__AdCen">
            <h6>{animal}</h6>
            <p className="animalBreed">{breed}</p>
            <p>{title}</p>
              <div className="btn__AdCen btn-primary">Details</div>
          </div>
        </div>


    )

}

    

