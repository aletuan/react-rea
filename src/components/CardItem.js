import {
   Card,
   CardImg,
   CardBody,
   CardHeader,
   CardFooter
} from 'reactstrap';
import React from "react";
import ReactDOM from "react-dom";
import './CardItem.css';

const CardIem = ({id, price, mainImage, logo}) => {
   return (
      <div  className="cardStyle">
         <Card>
            <CardHeader className="cardHeaderStyle">
               <CardImg className="cardLogoStyle" src={logo} />
            </CardHeader>
            <CardBody>
               <CardImg top width="100%" src={mainImage} alt="Card image cap" />          
            </CardBody>
            <CardFooter className="cardFooterStyle">{price}</CardFooter>
         </Card>
      </div>
   );
};

export default CardIem;