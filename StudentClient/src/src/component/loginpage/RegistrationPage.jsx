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

import {registrationData,existingTableData} from '../../action/registrationActionPage';


const RegistrationPage=React.createClass({

  getInitialState:function()
  {
     return{
          teacher:false,student:false,
          name:'',
          ph_nos:'',
          address:'',
          email:'',
          Tcourse:'',
          Scourse:'',
          type:''
    };
  },


   componentWillMount: function() {
      console.log("RegistrationPage is in will mount");

   /*   var existinTable={
   "course":[{"1":"java"},{"2":"Servlet"},{"3":"Javascript"},{"4":"React Js"}],
   "department":[{"1":"ServerLab"},{"2":"ClientLab"}],
   "classroom":[{"1":"R101"},{"2":"R102"},{"3":"R103"},{"4":"R104"}]
 } 

      this.props.dispatch(existingTableData(existinTable));*/

                },
   componentDidMount : function(){
  console.log("RegistrationPage is in DidMount");

        },

 contextTypes:{

 router:React.PropTypes.object,
  },

handleChangeName :function(event)
{
    this.setState({name:event.target.value});
},
handleChangePh_Nos :function(event)
{
    this.setState({ph_nos:event.target.value})
},
handleChangeAddress :function(event)
{
    this.setState({address:event.target.value})
},
handleChangeEmail :function(event)
{
    this.setState({email:event.target.value})
},
handleChangeTcourse :function(event)
{
    this.setState({Tcourse:event.target.value})
},
handleChangeScourse :function(event)
{
  this.setState({Scourse:event.target.value})
},


  homPage : function()
  {
    var that=this;

     this.registrationData().then(function(resolve)
    {
   
      if(that.state.teacher)
      {
           that.context.router.push("teacherHomePage")
      }
     else if(that.state.student)
      {
           that.context.router.push("studentHomePage")
      }else{
          alert('please select type first')
      }
    }).catch(function(reject){
        console.log('error',reject)
    })
  },
  
  registrationData : function()
  {

    var that=this;
    return new Promise(function(resolve,reject)
   {
             var name=ReactDOM.findDOMNode(that.refs.name).value;
             var ph_nos=parseInt(ReactDOM.findDOMNode(that.refs.ph_nos).value);
             var address=ReactDOM.findDOMNode(that.refs.address).value;
             var email=ReactDOM.findDOMNode(that.refs.email).value;

             var regObj;
            
    if(that.state.teacher)
      {
         var course=ReactDOM.findDOMNode(that.refs.Tcourse).value;
          var type=ReactDOM.findDOMNode(that.refs.teacher).value;


           regObj={
      "teacher":{"name":name,"ph_nos":ph_nos},
       "address":{"address":address},
       "login":{"email":email,"type":type},
       "course":{"course":course},
       "type":type}
 
      
       }  
      if(that.state.student)
      {
         var course=ReactDOM.findDOMNode(that.refs.Scourse).value;
         var type=ReactDOM.findDOMNode(that.refs.student).value;


       regObj={
      "student":{"name":name,"ph_nos":ph_nos},
       "address":{"address":address},
       "login":{"email":email,"type":type},
       "course":{"course":course},
       "type":type}
 
      }

     that.props.dispatch(registrationData(regObj));
      resolve('success');
    })
  
 },

 showTeacher : function() {
    if(document.getElementById("teacher").checked = true)
    {
        this.setState({teacher:true,student:false})
    }
},

 showStudent : function() {
     if(document.getElementById("student").checked = true)
    {
            this.setState({student:true,teacher:false})
    }
},
render :function(){

       

    return (
             <Grid fluid={true}>
               <Row className="show-grid">
                 <Col  md={4}><label>Name</label></Col>
                 <Col  md={8}><input type="text" ref="name" value={this.state.name?this.state.name:''}
                   onChange={this.handleChangeName}/></Col>
               </Row>

               
               <Row className="show-grid">
                 <Col  md={4}><label>Phone No.</label></Col>
                 <Col  md={8}><input type="text" ref="ph_nos" value={this.state.ph_nos?this.state.ph_nos:''}
                 onChange={this.handleChangePh_Nos}/></Col>
               </Row>

               <Row className="show-grid">
                 <Col  md={4}><label>Address</label></Col>
                 <Col  md={8}><input type="text" ref="address" value={this.state.address?this.state.address:''}
                 onChange={this.handleChangeAddress}/></Col>
               </Row>

               <Row className="show-grid">
                 <Col  md={4}><label>Email</label></Col>
                 <Col  md={8}><input type="email" ref="email" value={this.state.email?this.state.email:''}
                 onChange={this.handleChangeEmail}/></Col>
               </Row>

                <Row className="show-grid">
                 <Col  md={2}><input type="radio" name="type" value="teacher" id="teacher" ref="teacher" onClick={this.showTeacher}/></Col>
                 <Col  md={2}><label>Teacher</label></Col>
                 <Col  md={2}><input type="radio" name="type" value="student" id="student" ref="student" onClick={this.showStudent}/></Col>
                 <Col  md={2}><label>Student</label></Col>
               </Row>


                {this.state.teacher ? 
               <Row className="show-grid">
                 <Col  md={4}><label>Teach Course</label></Col>
                 <Col  md={8}>
                 <select ref="Tcourse" value={this.state.Tcourse?this.state.Tcourse:''} 
                 onChange={this.handleChangeTcourse}>
                 <option value="java">java</option>
                 <option value="Servlet">Servlet</option>
                 <option value="Javascript">Javascript</option>
                 <option value="React Js">React Js</option>
                 </select></Col>
               </Row> :''}

               {this.state.student ? 
               <Row className="show-grid">
                 <Col  md={4}><label>Course</label></Col>
                 <Col  md={8}><select ref="Scourse" value={this.state.Scourse?this.state.Scourse:''}
                 onChange={this.handleChangeScourse}>
                 <option value="java">java</option>
                 <option value="Servlet">Servlet</option>
                 <option value="Javascript">Javascript</option>
                 <option value="React Js">React Js</option>
                 </select></Col>
               </Row> :''}

                <button type="button" onClick={this.homPage}>submit</button>

             </Grid>
 );
}
})


function mapStatetoProps(store) {
    return {
        registrationData: store.registration,
        }
};

export default connect(mapStatetoProps)(RegistrationPage);