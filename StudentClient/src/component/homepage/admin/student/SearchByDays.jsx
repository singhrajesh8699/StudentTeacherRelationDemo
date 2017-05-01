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
import Student from './Student.jsx';

var studentList=[{"name":"rajesh","email":"raj@1234"},
                    {"name":"vimalesh","email":"vimalesh@1234"},
                    {"name":"shalesh","email":"shalesh@1234"}];

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
      console.log("StudentByDays is in will mount");
        },

componentDidMount : function(){
      console.log("StudentByDays is in DidMount");
 },

handleSearchDay : function(event)
{
   this.setState({days:event.target.value})
},

showStudentData : function(email)
{
   
        this.setState({email:email,showStudentDetails:true})
    //     function(){
    //      this.setState({showStudentDetails:true})
    //  })
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
                studentList.map(function(studentList)
                {
                 return (
                 <Row className="show-grid" key={studentList.email} 
              onClick={this.showStudentData.bind(this,studentList.email)} >
                  <Col md={2}></Col>
                  <Col md={3} >{studentList.name}</Col>
                  <Col md={3} >{studentList.email}</Col>
                </Row>
                 ); }.bind(this))
            }

            {this.state.showStudentDetails ? <Student email={this.state.email} /> :null}

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

export default connect(mapStatetoProps)(SearchByDays);