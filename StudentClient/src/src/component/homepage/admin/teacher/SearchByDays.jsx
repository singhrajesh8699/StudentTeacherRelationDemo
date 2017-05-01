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
import Teacher from './Teacher.jsx';

var studentList=[{"name":"Amrit","email":"amrit@1234"},
                    {"name":"Sandeep","email":"sandeep@1234"},
                    {"name":"Bharat","email":"bharat@1234"}];

const SearchByDays=React.createClass({

getInitialState:function()
  {
     return{
        days:'',
        showStudentDetails:false,
        email:''

        };
  },

componentWillMount: function() {
      console.log("TeacherByDays is in will mount");
        },

componentDidMount : function(){
      console.log("TeacherByDays is in DidMount");
 },

handleSearchDay : function(event)
{
   this.setState({days:event.target.value})
},

showStudentData : function(teacherId)
{
   
   this.setState({teacherId:teacherId,showTeacherDetails:true})
},

render :function(){

    return (

    <Grid>

       <Row className="show-grid">
                <Col md={4}><label>Search By Days</label></Col>
                 <Col md={8}>
             <select ref="Tname" value={this.state.days?this.state.days:''} 
                 onChange={this.handleSearchDay}>
                 <option value="Today">Today</option>
                 <option value="thisweek">This week</option>
                 <option value="nextFourWeek">next four week</option>
                 <option value="DueDate">Due Date</option>
              </select>
                 </Col>
            </Row> 
            
             <Row className="show-grid">
                  <Col md={2}></Col>
                  <Col md={3} ><label>Name</label></Col>
                  <Col md={3} ><label>Email</label></Col>
            </Row>

            {
                this.props.admin.map(function(teacherList)
                {
                 return (
                 <Row className="show-grid" key={teacherList.teacherId} 
              onClick={this.showStudentData.bind(this,teacherList.teacherId)} >
                  <Col md={2}></Col>
                  <Col md={3} >{teacherList.name}</Col>
                  <Col md={3} >{teacherList.login[0].email}</Col>
                </Row>
                 ); }.bind(this))
            }

            {this.state.showTeacherDetails ? <Teacher teacherId={this.state.teacherId} /> :null}

    </Grid>
    );
}
})


function mapStatetoProps(store) {
    return {
        registration: store.registration,
        admin:store.admin.teacherList
        }
};

export default connect(mapStatetoProps)(SearchByDays);