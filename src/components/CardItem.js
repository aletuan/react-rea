import {
   Button,
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle,
   CardSubtitle,
   CardHeader,
   CardFooter
} from 'reactstrap';
import React from "react";
import ReactDOM from "react-dom";

const CardIem = () => {
   return (
      <div  style={styles.cardStyle}>
         <Card>
            <CardHeader style={styles.cardHeaderStyle}>
               <CardImg style={styles.cardLogoStyle} src="http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif&w=2&h=2" /> Properties
            </CardHeader>
            <CardBody>
               <CardImg top width="100%" src="http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg" alt="Card image cap" />          
            </CardBody>
            <CardFooter styele={styles.cardFooterStyle}>$100,000</CardFooter>
         </Card>
      </div>
   );
};

const styles = {
   cardStyle: {
      margin: "10px"
   },
   cardHeaderStyle: {
      background: "#cdc", // TODO: need change color
      display: "flex d-flex"
   },
   cardLogoStyle: {
      width: "100px",
   }
};

export default CardIem;