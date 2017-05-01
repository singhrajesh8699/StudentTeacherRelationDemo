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

const Student=React.createClass({

getInitialState:function()
  {
     return{
        Tname:'',
        crName:'',
        days:'',
        timing:''
    };
  },

componentWillMount: function() {
      console.log("Student is in will mount");
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

   handleChangeDays : function(event)
  {
      this.setState({days:event.target.value})
  },  

  handleChangeTiming : function(event)
  {
      this.setState({timing:event.target.value})
  },  


render :function(){

    return (

    <Grid>
            
        <Row className="show-grid">
                 <Col md={4}><label>Name</label></Col>
                <Col md={8}><label>{this.props.registration.registrationData.name}</label></Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Contact Details</label></Col>
                <Col md={8}>{this.props.registration.registrationData.ph_nos}</Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Address</label></Col>
                <Col md={8}>{this.props.registration.registrationData.address}</Col>
        </Row>

         <Row className="show-grid">
                <Col md={4}><label>Course Details</label></Col>
                <Col md={8}>{this.props.registration.registrationData.Scourse?this.props.registration.registrationData.Scourse: 'N/A'}
                </Col>
        </Row>

        <Row className="show-grid">
            <Col md={4}><label>ClassRoom Details</label></Col>
            <Col md={8}>
                <select ref="classroom" value={this.state.crName?this.state.crName:''} 
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

        <Row className="show-grid">
                <Col md={4}><label>Days</label></Col>
                <Col md={8}><input type="text" ref="days" value={this.state.days?this.state.days:''}
                 onChange={this.handleChangeDays}/>
                </Col>
        </Row>

         <Row className="show-grid">
                <Col md={4}><label>Timing</label></Col>
                <Col md={8}><input type="text" ref="timing" value={this.state.timing?this.state.timing:''}
                 onChange={this.handleChangeTiming}/>
                </Col>
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

export default connect(mapStatetoProps)(Student);