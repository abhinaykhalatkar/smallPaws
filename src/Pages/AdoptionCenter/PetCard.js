//  // import "./PetCard.css";
//  // export default function PetCard(props){
//  //     return(

//     //     <div className="container">
//     //     <div className="gallery">
//     //         {
//     //             props.petTemplateData.map((el)=>(
//     //         <div className="gallery-item" key={el.id}>
//     //             <img className="gallery-image" src={el.url} alt={el.title}/>
//     //             <p>{el.id%2===0?"DOG":"CAT"}</p>
//     //         </div>
//     //             ))
//     //         }
//     //     </div>
        
//     // </div>
//  //)

//  //}
import "./PetCard.css";
export default function PetCard(props){
    let {name,img,condition}=[...props.petTemplateData]
    return(

        <div key={Math.random()} className="card border-0 me-lg-4 mb-lg-0 mb-4">
        <div className="backgroundEffect"></div>
        <div className="pic">
          {" "}
          <img
            className=""
            src={img}
            alt=""
          />
          <div className="date">
            {" "}
            <span className="day">26</span>{" "}
            <span className="month">June</span>{" "}
            <span className="year">2019</span>{" "}
          </div>
        </div>
        <div className="content">
          <p className="h-1 mt-4">
            {name}
          </p>
          <p className="text-muted mt-3">
            {condition}
          </p>
          <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
            <div className="btn btn-primary">
              Details<span className="fas fa-arrow-right"></span>
            </div>
            <div className="d-flex align-items-center justify-content-center foot">
            </div>
          </div>
        </div>
      </div>


    )

}

    



    
