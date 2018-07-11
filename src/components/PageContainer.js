import React, {Component} from 'react';
import { Container, Row, Col} from 'reactstrap';
import CardContainer from './CardContainer';

import { connect } from 'react-redux';

class PageContainer extends Component {
   render() {
      return (
         <Container>
            <Row>
               <Col>
                  <CardContainer title="Results" cardItems={this.props.results} />
               </Col>
               <Col>
                  <CardContainer title="Saved Properties" cardItems={this.props.saved} />
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

export default connect(mapStateToProps)(PageContainer);