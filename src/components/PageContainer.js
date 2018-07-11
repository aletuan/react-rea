import React, {Component} from 'react';
import { Container, Row, Col, CardColumns, Card, CardHeader, CardBody} from 'reactstrap';
import CardItem from './CardItem';

import { connect } from 'react-redux';

class CardContainer extends Component {
   render() {
      return (
         <Container>
            <Row>
               <Col>
                  <div style={{display: "flex", justifyContent: "center"}}>Results</div>
                  <Container style={{borderStyle: "dotted", borderWidth: "1px"}}>
                     {                        
                        this.props.results.map(item => {
                           // destructruct nested object
                           const {id, price, mainImage, agency} = item;
                           const {logo, brandingColors: {primary}} = agency;

                           return <CardItem key={id} id={id} price={price} mainImage={mainImage} logo={logo} primary={primary} />;
                        })
                     }                  
                  </Container>
               </Col>
               <Col>
                  <div style={{display: "flex", justifyContent: "center"}}>Saved Properties</div>
                  <Container style={{borderStyle: "dotted", borderWidth: "1px"}}>
                     {
                        this.props.saved.map(item => {
                           // destructruct nested object
                           const {id, price, mainImage, agency} = item;
                           const {logo, brandingColors: {primary}} = agency;

                           return <CardItem key={id} id={id} price={price} mainImage={mainImage} logo={logo} primary={primary} />;
                        })
                     }                  
                  </Container>                  
               </Col>
            </Row>
         </Container>
      );
   }
}

const mapStateToProps = state => {
   return { 
      results: state.results,
      saved: state.saved
   };
};

export default connect(mapStateToProps)(CardContainer);