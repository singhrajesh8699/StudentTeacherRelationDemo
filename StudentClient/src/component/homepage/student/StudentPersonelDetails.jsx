import React from 'react';
import ReactDOM from 'react-dom';
import {connect, ReactRedux} from 'react-redux';
import {
Grid,
Row,
Col,
DropdownButton,
    Nav,
    NavItem,
    Navbar,
    NavbarHeader,
    NavbarBrand,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';

const StudentPersonelDetails=React.createClass({

          componentWillMount: function() {
      console.log("StudentPersonelDetails is in will mount");
                },
   componentDidMount : function(){
  console.log("StudentPersonelDetails is in DidMount");

        },

render :function(){
            var stdAdd={};
            if(this.props.student.studentData.length!=0)
            {
                stdAdd=this.props.student.studentData.address[0];
            }

    return (

    <Grid>
        <Row className="show-grid">
                <Col ><label>Welcome  {this.props.student.studentData.name?
                    this.props.student.studentData.name:'N/A'}</label></Col>
        </Row>
        <Row className="show-grid">
                <Col md={4}><label>Contact Details</label></Col>
                <Col md={8}>{this.props.student.studentData.ph_nos ? this.props.student.studentData.ph_nos:'N/A'}</Col>
        </Row>
        <Row className="show-grid">
                <Col md={4}><label>Address</label></Col>
                <Col md={8}>{stdAdd.address?
                    stdAdd.address:''}</Col>
        </Row>

      
    </Grid>
    );
}
})


function mapStatetoProps(store) {
    return {
        registration: store.registration,
        student:store.student,
        teacher:store.teacher
        }
};

export default connect(mapStatetoProps)(StudentPersonelDetails);