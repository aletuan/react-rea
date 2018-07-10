import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardItem from './CardItem';

export default class CardContainer extends Component {
   render() {
      return (
         <Container>
            <Row>
               <Col>{this.props.children}</Col>
            </Row> 
         </Container>
      );
   }
}