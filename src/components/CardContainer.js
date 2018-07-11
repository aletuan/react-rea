import React, {Component} from 'react';
import { Container, Row, Col, CardColumns } from 'reactstrap';
import CardItem from './CardItem';

import { connect } from 'react-redux';

class CardContainer extends Component {
   render() {
      return (
         <Container>
            <Row>
               <Col>
                  <Container>
                     <Row style={{justifyContent: "center"}}>
                        Results
                     </Row>
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
                  <Container>
                     <Row style={{justifyContent: "center"}}>
                        Saved Properties
                     </Row>
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