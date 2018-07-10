import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardItem from './CardItem';
import { CardColumns } from 'reactstrap';

export default class CardContainer extends Component {
   render() {
      return (
         <Container>
            <Row>
               <Col>
                  <Container>
                     <Row style={{justifyContent: "center"}}>
                        Results
                     </Row>
                     <Row>
                        <Col>{this.props.children}</Col>
                     </Row>
                     <Row mb="2">
                        <Col>{this.props.children}</Col>
                     </Row>
                     <Row>
                        <Col>{this.props.children}</Col>
                     </Row>                         
                  </Container>
               </Col>
               <Col>
                  <Container>
                     <Row style={{justifyContent: "center"}}>
                        Saved Properties
                     </Row>
                     <Row>
                        <Col>{this.props.children}</Col>
                     </Row>                         
                  </Container>
               </Col>
            </Row>
         </Container>
      );
   }
}