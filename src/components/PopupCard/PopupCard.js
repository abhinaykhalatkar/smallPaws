import "./PopupCard.css"
export default function PopupCard(props){
    return (
      <div >
          {console.log(props.petDetails[0])}
        <input
          className="modal-btn__popCard"
          type="checkbox"
          defaultChecked={true}
          id="modal-btn__popCard"
          name="modal-btn__popCard"
        />
        <label htmlFor="modal-btn__popCard" onClick={()=>{props.onChange(false)}}></label>
        <div className="modal__popCard">
          <div className="modal-wrap__popCard">
            <img src={props.petDetails[0].thumbnailUrl} alt="" />
            <p className="modalText__popCard">
              {props.petDetails[0].title}
            </p>
          </div>
        </div>
      </div>
    );
}