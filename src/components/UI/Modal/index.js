import Card from "../Card";
import classes from "./Modal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import CartProps from "../../Cart/CartProps";
function Modal(props) {
  return (
    <div className={classes.modal_container}>
      <div className={classes.card_container}>
        <Card maxWidth={'50%'}>
          <div className={classes.close_button_container}>
            <AiFillCloseCircle
              size={20}
              color={"#f00"}
              className={classes.close_button}
              onClick={props.onCloseModal}
            />
          </div>

          <div>
            <CartProps onClick={props.onCloseModal}/>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Modal;
