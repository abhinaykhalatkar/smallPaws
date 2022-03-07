import "./PetCard.css";
export default function PetCard(props){
    return(

        <div className="container">
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

    
