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
                        this.props.results.map(({id, price, mainImage, agency: {logo}}) => 
                        <CardItem id={id} price={price} mainImage={mainImage} logo={logo} />)
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