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

const CardIem = () => {
   return (
      <div  className="cardStyle">
         <Card>
            <CardHeader className="cardHeaderStyle">
               <CardImg className="cardLogoStyle" src="http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif&w=2&h=2" /> Properties
            </CardHeader>
            <CardBody>
               <CardImg top width="100%" src="http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg" alt="Card image cap" />          
            </CardBody>
            <CardFooter className="cardFooterStyle">$100,000</CardFooter>
         </Card>
      </div>
   );
};

export default CardIem;