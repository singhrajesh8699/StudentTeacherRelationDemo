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

const TeacherCourseDetails=React.createClass({

          componentWillMount: function() {
      console.log("TeacherCourseDetails is in will mount");
                },
   componentDidMount : function(){
  console.log("TeacherCourseDetails is in DidMount");

        },

render :function(){

        var tchCrs={};
        var tchCls={};
        var dept={};
        
        if(this.props.teacher.teacherData.length>0)
            {
                  tchCrs=this.props.teacher.teacherData.tcourse[0];
                   if(this.props.teacher.teacherData.classroom.length>0)
                  {
                  tchCls=this.props.teacher.teacherData.classroom[0];
                  }

                  if(this.props.teacher.teacherData.department.length>0)
                  {
                  dept=this.props.teacher.teacherData.department[0]
                  }

            }

    return (

    <Grid>
         <Row className="show-grid">
                <Col md={4}><label>Course Details</label></Col>
                <Col md={8}>{tchCrs.course?tchCrs.course: 'N/A'}</Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Department</label></Col>
                <Col md={8}>{dept.department?dept.department: 'N/A'}</Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>ClassRoom Details</label></Col>
                <Col md={8}>{tchCls.classroom?tchCls.classroom: 'N/A'}</Col>
        </Row>

         </Grid>
    );
}
})


function mapStatetoProps(store) {
    return {
        registration: store.registration,
        teacher:store.registration,
        }
};

export default connect(mapStatetoProps)(TeacherCourseDetails);