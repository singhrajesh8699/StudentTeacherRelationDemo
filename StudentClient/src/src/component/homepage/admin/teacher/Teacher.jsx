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
import {updateTeacher} from '../../../../action/adminAction.js'

const Teacher=React.createClass({

getInitialState:function()
  {
     return{
        Tname:'',
        crName:'',
        Dpart:'',
        editable:false
    };
  },

componentWillMount: function() {
      console.log("TeacherAdmin is in will mount");
                },
componentDidMount : function(){
      console.log("TeacherAdmin is in DidMount");
  },

  componentWillReceiveProps : function(nextProps)
{
    var teacherObject=this.props.admin.filter(function(teacherList)
            {
               return teacherList.teacherId==that.props.teacherId;
                
            })
    this.setState({

            crName:teacherObject.clsTchr[0].crName,
            Dpart:teacherObject.department.departName
                
     })
    
},

ShowEditable : function()
{
       this.setState({editable:true})  
},

  handleclassroom : function(event)
  {
      this.setState({crName:event.target.value})
  },  

  
   handleDepartment : function(event)
  {
      this.setState({Dpart:event.target.value})
  },  

submit : function(teacherData)
 {
      var teacherId=this.props.teacherId;
   
      var crName=ReactDOM.findDOMNode(this.refs.classroom).value;

       var Dpart=ReactDOM.findDOMNode(this.refs.department).value;
      
      var updateStd={
     "type":"teacher",
     "CrName":crName,
     "departName":Dpart,
     "teacherId":teacherId,
     }

      console.log(updateStd)
      this.props.dispatch(updateTeacher(updateStd));
 },


render :function(){

        var teacherData={};
        var that=this;
        this.props.admin.map(function(teacherList)
            {
                if(teacherList.teacherId==that.props.teacherId)
                {
                    teacherData=teacherList;
                }
            })

    return (

    <Grid>

        <Row className="show-grid">
                 <Col md={4}><label>Name</label></Col>
                <Col md={8}><label>{teacherData.name}</label></Col>
        </Row>
        <Row className="show-grid">
                <Col md={4}><label>Contact Details</label></Col>
                <Col md={8}>{teacherData.ph_nos}</Col>
        </Row>
        <Row className="show-grid">
                <Col md={4}><label>Address</label></Col>
                <Col md={8}>{teacherData.address[0].address}</Col>
        </Row>

         <Row className="show-grid">
                <Col md={4}><label>Course Details</label></Col>
                <Col md={8}>{teacherData.tcourse.course?teacherData.tcourse.course: 'N/A'}</Col>
        </Row>

        <Row className="show-grid" onClick={this.ShowEditable}>
            <Col md={4}><label>ClassRoom Details</label></Col>
             {  !this.state.editable?<Col md={8}>{teacherData.clsTchr[0].crName? teacherData.clsTchr[0].crName : this.props.crName}</Col>:
            <Col md={8}>
                <select ref="classroom" value={this.state.crName?this.state.crName:'R101'} 
                 onChange={this.handleclassroom}>
                 <option value="R101">R101</option>
                 <option value="R102">R102</option>
                 <option value="R103">R103</option>
                 <option value="R104">R104</option>
                 </select>
            </Col>}
        </Row>

         <Row className="show-grid" onClick={this.ShowEditable}>
            <Col md={4}><label>Department</label></Col>
            {  !this.state.editable?<Col md={8}>{teacherData.department.departName ? teacherData.department.departName : 'N/A'}</Col>:
            <Col md={8}>
                <select ref="department" value={this.state.Dpart?this.state.Dpart:'ServerLab'} 
                 onChange={this.handleDepartment}>
                 <option value="ServerLab">ServerLab</option>
                 <option value="ClientLab">ClientLab</option>
                </select>
            </Col>}
        </Row>

    <Row>
        <Col md={6}></Col>
        <Col>
        <button type="button" onClick={this.submit.bind(this,teacherData)}>submit</button>
        </Col>
    </Row>
      
    </Grid>
    );
}
})


function mapStatetoProps(store) {
    return {
        admin:store.admin.teacherList
        }
};

export default connect(mapStatetoProps)(Teacher);