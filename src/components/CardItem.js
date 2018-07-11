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

const CardItem = ({id, cardItem}) => {
   const { cardId, primary, logo, mainImage, price } = cardItem;

   const addCard = () => {
      console.log("addCard");
      // sending action ADD
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
                  <Button className="cardButtonStyle" onClick={addCard}>Select</Button>
               </div>
            </CardBody>
            <CardFooter className="cardFooterStyle">{price}</CardFooter>
         </Card>
      </div>
   );   
};

export default CardItem;