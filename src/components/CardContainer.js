import React, {Component} from 'react';
import { Container, Row, Col, CardColumns, Card, CardHeader, CardBody} from 'reactstrap';
import CardItem from './CardItem';

const CardContainer = ({title, cardItems}) => {
   return (
      <div>
      <div style={{display: "flex", justifyContent: "center"}}>{title}</div>
      <Container style={{borderStyle: "dotted", borderWidth: "1px"}}>
      {                        
         cardItems.map(item => {
            // destructruct nested object
            const {id, price, mainImage, agency} = item;
            const {logo, brandingColors: {primary}} = agency;

            return <CardItem key={id} id={id} price={price} mainImage={mainImage} logo={logo} primary={primary} />;
         })
      }                  
      </Container>
      </div>
   );
};

export default CardContainer;