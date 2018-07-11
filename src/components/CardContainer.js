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
            cardItems.map(item => <CardItem key={item.id} cardItem={cardItem(item)} />)
         }                  
         </Container>
      </div>
   );
};

// destructruct nested object
const cardItem = (item) => {
   const {agency} = item;
   const {logo, brandingColors: {primary}} = agency;

   return {
      id: item.id,
      price: item.price,
      mainImage: item.mainImage,
      logo,
      primary
   };
}

export default CardContainer;