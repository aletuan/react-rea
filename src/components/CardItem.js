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

import { connect } from 'react-redux';
import { addItemSaved, removeItemSaved } from '../actions'

const CardItem = (props) => {
   const {id, cardItem, category} = props;
   const { cardId, primary, logo, mainImage, price } = cardItem;

   const handleOnClick = () => {
      console.log('--> cat ' + category);
      if (category === "results") {
         props.onClickAddProperty(cardId);  
      } else {
         props.onClickRemoveProperty(cardId);
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
                  <Button className="cardButtonStyle" 
                     onClick={handleOnClick}>
                     {buttonContent(category)}
                  </Button>
               </div>
            </CardBody>
            <CardFooter className="cardFooterStyle">{price}</CardFooter>
         </Card>
      </div>
   );   
};

// helper function
const buttonContent = (category) => category === "results" ? "Add property" : "Remove property";

const mapDispatchToProps = {
   onClickAddProperty: addItemSaved,
   onClickRemoveProperty: removeItemSaved
};

export default connect(null, mapDispatchToProps)(CardItem) ;