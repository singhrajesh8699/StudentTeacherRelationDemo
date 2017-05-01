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

const TeacherPersonelDetails=React.createClass({

         componentWillMount: function() {
      console.log("TeacherPersonelDetails is in will mount");
                },
   componentDidMount : function(){
  console.log("TeacherPersonelDetails is in DidMount");

        },

render :function(){

                var tchAdd={};
            if(this.props.teacher.teacherData.length!=0)
            {
                tchAdd=this.props.teacher.teacherData.address[0];
            }
        

    return (

     <Grid>
        <Row className="show-grid">
                <Col ><label>Welcome  {this.props.teacher.teacherData.name?this.props.teacher.teacherData.name:'N/A'}</label></Col>
        </Row>
        <Row className="show-grid">
                <Col md={4}><label>Contact Details</label></Col>
                <Col md={8}>{this.props.teacher.teacherData.ph_nos?this.props.teacher.teacherData.ph_nos:'N/A'}</Col>
        </Row>
        <Row className="show-grid">
                <Col md={4}><label>Address</label></Col>
                <Col md={8}>{tchAdd.address?tchAdd.address:'N/A'}</Col>
        </Row>

        
    </Grid>
    );
}
})


function mapStatetoProps(store) {
    return {
        registration: store.registration,
        teacher: store.teacher,
        }
};

export default connect(mapStatetoProps)(TeacherPersonelDetails);