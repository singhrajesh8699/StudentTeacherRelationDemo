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
import {updateStudent} from '../../../action/adminAction.js'

const StudentPersonelDetails=React.createClass({

    getInitialState : function(){
        return{
            name:'',
            ph_nos:'',
            address:'',
            editable:false
        }
        
           },

 componentWillMount: function() {
      console.log("StudentPersonelDetails is in will mount");
                },
 componentDidMount : function(){
      console.log("StudentPersonelDetails is in DidMount");

        },

componentWillReceiveProps : function(nextProps)
{
    
    this.setState({
             name:nextProps.student.studentData.name,
             ph_nos:nextProps.student.studentData.ph_nos,
             address:nextProps.student.studentData.address[0].address,
    })
    
},
ShowEditable : function()
{
       this.setState({editable:true})  
},
updateName:function(event)
{
    this.setState({name:event.target.value})
},

updatePh_Nos:function(event)
{
    this.setState({ph_nos:event.target.value})
},

updateAddress:function(event)
{
    this.setState({address:event.target.value})
},

updateData: function()
{
    var name=ReactDOM.findDOMNode(this.refs.name).value;
    var ph_nos=ReactDOM.findDOMNode(this.refs.ph_nos).value;
    var address=ReactDOM.findDOMNode(this.refs.address).value;

    var updateStudentData={
           "student":{"name":name,"ph_nos":ph_nos},
           "address":{"address":address,"AddressId":this.props.student.studentData.address[0].addressId},
           "type":"student",
           "StudentId":this.props.student.studentData.studentId,
    }

    console.log(updateStudentData)
    this.props.dispatch(updateStudent(updateStudentData));

},

render :function(){
            var stdAdd={};
            if(this.props.student.studentData!=undefined && this.props.student.studentData!='' && this.props.student.studentData!=null )
            {
                stdAdd=this.props.student.studentData.address[0];
            }

    return (

    <Grid>
        <Row className="show-grid" onClick={this.ShowEditable}>
                <Col md={4}><label>Welcome </label> </Col>
              {  !this.state.editable?<Col md={8} >{this.props.student.studentData.name?
                    this.props.student.studentData.name:'N/A'}</Col>:
                    <Col md={8}><input type="text" ref="name" value={this.state.name?this.state.name:this.props.name}
                    onChange={this.updateName} /></Col>

              }
        </Row>
        <Row className="show-grid" onClick={this.ShowEditable}>
                <Col md={4}><label>Contact Details</label></Col>
               {  !this.state.editable? 
                <Col md={8}>{this.props.student.studentData.ph_nos ? this.props.student.studentData.ph_nos:'N/A'}</Col>
                :<Col md={8}><input type="text" ref="ph_nos" value={this.state.ph_nos?this.state.ph_nos:this.props.ph_nos}
                    onChange={this.updatePh_Nos} /></Col>}
        </Row>
        <Row className="show-grid" onClick={this.ShowEditable}>
                <Col md={4}><label>Address</label></Col>
                {  !this.state.editable?  <Col md={8}>{stdAdd.address?stdAdd.address:'N/A'}</Col>
                :<Col md={8}><input type="text" ref="address" value={this.state.address?this.state.address:this.props.address}
                    onChange={this.updateAddress} /></Col>}
        </Row>

         {this.state.editable? 
        <Row>
            <Col md={4}></Col><Col md={4}><button type="button" onClick={this.updateData}>Update</button></Col>
        </Row>:null}
      
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