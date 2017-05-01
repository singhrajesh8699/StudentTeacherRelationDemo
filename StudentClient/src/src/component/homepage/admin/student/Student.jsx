import React from 'react';
import ReactDOM from 'react-dom';
import {connect, ReactRedux} from 'react-redux';
import {updateStudent} from '../../../../action/adminAction.js'
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

            var studentData={};
           
            var address='';
            var course='';

const Student=React.createClass({

getInitialState:function()
  {
     return{
        Tname:'',
        crName:'',
    };
  },

componentWillMount: function() {
  
      console.log("Student is in will mount");

        var that=this;
        this.props.admin.map(function(studentList)
            {
               
                if(studentList.studentId==that.props.StudentId)
                {
                    studentData=studentList;
                    if(studentData.address.length>0)
                    {
                        address=studentData.address[0].address;
                    }

                    if(studentData.scourse.length>0)
                    {
                        course=studentData.scourse[0].course;
                    }
                }
            })
     },
componentDidMount : function(){
  console.log("Student is in DidMount");

        },

  handleclassroom : function(event)
  {
      this.setState({crName:event.target.value})
  },  

   handleTname : function(event)
  {
      this.setState({Tname:event.target.value})
  },  

 submit : function()
 {
      var StudentId=this.props.StudentId;
      console.log(StudentId,"StudentId")
      var Tname=this.state.Tname;
      var crName=this.state.crName;

      var updateStd={
      "type":"student",
     "CrName":{"CrName":crName},
     "StudentId":StudentId,
     }

      console.log(updateStd)
      this.props.dispatch(updateStudent(updateStd));


 },
   

render :function(){

            

           



    return (

    <Grid>
            

        <Row className="show-grid">
                 <Col md={4}><label>Name</label></Col>
                <Col md={8}><label>{studentData.name}</label></Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Contact Details</label></Col>
                <Col md={8}>{studentData.ph_nos}</Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Address</label></Col>
                <Col md={8}>{address?address:'N/A'}</Col>
        </Row>

         <Row className="show-grid">
                <Col md={4}><label>Course Details</label></Col>
                <Col md={8}>{course?course: 'N/A'}
                </Col>
        </Row>

        <Row className="show-grid">
            <Col md={4}><label>ClassRoom Details</label></Col>
            <Col md={8}>
                <select ref="classroom" value={this.state.crName?this.state.crName:'R101'} 
                 onChange={this.handleclassroom}>
                 <option value="R101">R101</option>
                 <option value="R102">R102</option>
                 <option value="R103">R103</option>
                 <option value="R104">R104</option>
                 </select>
            </Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Teacher Name</label></Col>
                 <Col md={8}>
                 <select ref="Tname" value={this.state.Tname?this.state.Tname:''} 
                 onChange={this.handleTname}>
                 <option value="Ramesh">Ramesh</option>
                 <option value="Tanvir">Tanvir</option>
                 <option value="Akchay">Akchay</option>
                 <option value="Biswa">Biswa</option>
                 </select>
                 </Col>
        </Row>

     <Row>
        <Col md={6}></Col>
        <Col>
        <button type="button" onClick={this.submit}>submit</button>
        </Col>
    </Row>

     </Grid>
    );
}
})


function mapStatetoProps(store) {
    return {
        admin:store.admin.studentList
        }
};

export default connect(mapStatetoProps)(Student);