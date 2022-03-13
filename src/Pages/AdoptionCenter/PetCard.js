import "./PetCard.css";
export default function PetCard(props){
    let [index,id,url,title]=[...props.petCardDetails]
    return(

        <div className="card__AdCen border-0 me-lg-4 mb-lg-0 mb-4">
          <div className="backgroundEffect__AdCen"></div>
          <div className="pic__AdCen">
            {" "}
            <img className="" src={url} alt="" />
            <div className="date">
              {" "}
              <span className="day">26</span>{" "}
              <span className="month">June</span>{" "}
              <span className="year">2019</span>{" "}
            </div>
          </div>
          <div className="content__AdCen">
            <h6>{id % 2 === 0 ? "DOG" : "CAT"}</h6>
            <p>{title}</p>
              <div className="btn__AdCen btn-primary">Details</div>
          </div>
        </div>


    )

}

    

