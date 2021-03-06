import React, {Component} from 'react';
import { Container, Row, Col, CardColumns, Card, CardHeader, CardBody} from 'reactstrap';
import CardItem from './CardItem';
import './CardContainer.css';

const CardContainer = ({title, cardItems}) => {
   return (
      <div>
         <div className="cardContainerHeaderStyle">{title}</div>
         <Container className="cardContainerBodyStyle">
         {
            cardItems.sort( (a,b) => (a.id <= b.id) ? -1 : 1)
               .map(item => 
                  <CardItem key={item.id} 
                           cardItem={cardItem(item)} 
                           category={getCategory(title)} />
            )
         }                  
         </Container>
      </div>
   );
};

// get category of properties
// FIXME: should not using string literal
const getCategory = (title) => (title === "Results") ? "results" : "saved";

// destructruct nested object
const cardItem = (item) => {
   const {agency} = item;
   const {logo, brandingColors: {primary}} = agency;

   return {
      cardId: item.id,
      price: item.price,
      mainImage: item.mainImage,
      logo,
      primary
   };
}

module.exports = {
   cardItem,
   CardContainer
};