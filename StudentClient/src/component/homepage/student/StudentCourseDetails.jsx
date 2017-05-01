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

const StudentCourseDetails=React.createClass({

componentWillMount: function() {
      console.log("StudentCourseDetails is in will mount");
                },
componentDidMount : function(){
  console.log("StudentCourseDetails is in DidMount");

        },

render :function(){

        var stdCrs={};
        var stdCls={};
        
        if(this.props.student.studentData.length>0)
            {
                  stdCrs=this.props.student.studentData.scourse[0];
                  if(this.props.student.studentData.classroom.length>0)
                  {
                            stdCls=this.props.student.studentData.classroom[0];
                  }
                

            }

    return (

    <Grid>
      <Row className="show-grid">
                <Col md={4}><label>Course Details</label></Col>
                <Col md={8}>{stdCrs.course ? stdCrs.course : 'N/A'}</Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>ClassRoom Details</label></Col>
                <Col md={8}>{stdCls.classroom ? stdCls.classroom : 'N/A'}</Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Teacher Name</label></Col>
                <Col md={8}>{this.props.teacher.teacherData.name ? this.props.teacher.teacherData.name : 'N/A'}</Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Teacher Contact Nos.</label></Col>
                <Col md={8}>{this.props.teacher.teacherData.ph_nos ? this.props.teacher.teacherData.ph_nos :'N/A'}</Col>
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

export default connect(mapStatetoProps)(StudentCourseDetails);