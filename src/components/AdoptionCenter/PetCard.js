import "./PetCard.css";
export default function PetCard(props){
    return(

        <div className="container">
        <h1 className="heading">Adoption Center</h1>
        <div className="gallery">
            {


                props.petTemplateData.map((el)=>(
            <div className="gallery-item" key={el.id}>
                <img className="gallery-image" src={el.url} alt={el.title}/>
                <p>{el.id%2===0?"DOG":"CAT"}</p>
            </div>

            
                ))
            }
        </div>
    </div>
    )

}

    // <div className="gallery-item" key={el.id}>
//                             <div className="modal">
//             <label className="modal__label" htmlFor="modal__checkbox">
//             <img className="gallery-image" src={el.id%2===0?"src/Image/catImage.jpg":"../../Image/catImage.jpg"} alt={el.title}/>
//             </label>
//             <input className="modal__checkbox" id="modal__checkbox" type="checkbox"/>
//             <div className="modal__window">
//               <div className="modal__content">
//                 <label className="modal__close-icon" htmlFor="modal__checkbox"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
//                     <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
//                   </svg></label>
//                 <input className="modal__checkbox" id="modal__checkbox" type="checkbox"/>
//                 <img src={el.id%2===0?"../../Image/dogImage.jpg":"../../Image/catImage.jpg"} alt="" />
//                 <p>{el.id%2===0?"DOG":"CAT"}</p>
//                 <button>Contact Us</button>
//               <button>Contact Owner</button>
//               </div>
//             </div>
//           </div>
//             </div>

    
