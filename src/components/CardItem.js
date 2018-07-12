import {
   Card,
   CardImg,
   CardBody,
   CardHeader,
   CardFooter,
   Button
} from 'reactstrap';
import React from "react";
import ReactDOM from "react-dom";
import './CardItem.css';

const CardItem = ({id, cardItem, category}) => {
   const { cardId, primary, logo, mainImage, price } = cardItem;

   const addItem = () => {
      if (category === "result") {
         console.log("addItem");  
      } else {
         console.log("removeItem");
      }    
   }

   return (
      <div className="cardStyle">
         <Card>
            <CardHeader className="cardHeaderStyle" style={{background:primary}}>
               <CardImg className="cardLogoStyle" src={logo} />
            </CardHeader>
            <CardBody>
               <div className="cardImageStyle">
                  <CardImg top width="100%" src={mainImage} alt="Card image cap" />
                  <Button className="cardButtonStyle" onClick={addItem}>{buttonContent(category)}</Button>
               </div>
            </CardBody>
            <CardFooter className="cardFooterStyle">{price}</CardFooter>
         </Card>
      </div>
   );   
};

// helper function
const buttonContent = (category) => category === "result" ? "Add property" : "Remove property";

export default CardItem;