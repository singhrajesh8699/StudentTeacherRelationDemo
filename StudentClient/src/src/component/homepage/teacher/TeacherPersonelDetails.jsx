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
import {updateTeacher} from '../../../action/adminAction.js'

const TeacherPersonelDetails=React.createClass({

      
    getInitialState : function(){
        return{
            name:'',
            ph_nos:'',
            address:'',
            editable:false
        }
        
           },

    componentWillMount: function() {
      console.log("TeacherPersonelDetails is in will mount");
                },
   componentDidMount : function(){
  console.log("TeacherPersonelDetails is in DidMount");

        },

componentWillReceiveProps : function(nextProps)
{
    
    this.setState({
             name:nextProps.teacher.teacherData.name,
             ph_nos:nextProps.teacher.teacherData.ph_nos,
             address:nextProps.teacher.teacherData.address[0].address,
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

    var updateTeacherData={
           "teacher":{"name":name,"ph_nos":ph_nos},
           "address":{"address":address,"AddressId":this.props.teacher.teacherData.address[0].addressId},
           "type":"teacher",
           "teacherId":this.props.teacher.teacherData.teacherId,
    }

    console.log(updateTeacherData)
    this.props.dispatch(updateTeacher(updateTeacherData));

},

render :function(){

                var tchAdd={};
            if(this.props.teacher.teacherData!=undefined && this.props.teacher.teacherData!='' 
            && this.props.teacher.teacherData!=null )
            {
                tchAdd=this.props.teacher.teacherData.address[0];
            }
        

    return (

     <Grid>
        <Row className="show-grid" onClick={this.ShowEditable}>
                <Col md={4}><label>Welcome</label></Col>
                {  !this.state.editable?<Col md={8} >{this.props.teacher.teacherData.name?
                    this.props.teacher.teacherData.name:'N/A'}</Col>:
                    <Col md={8}><input type="text" ref="name" value={this.state.name?this.state.name:this.props.name}
                    onChange={this.updateName} /></Col>

              }
        </Row>
        <Row className="show-grid" onClick={this.ShowEditable}>
                <Col md={4}><label>Contact Details</label></Col>
               {  !this.state.editable? 
                <Col md={8}>{this.props.teacher.teacherData.ph_nos ? this.props.teacher.teacherData.ph_nos:'N/A'}</Col>
                :<Col md={8}><input type="text" ref="ph_nos" value={this.state.ph_nos?this.state.ph_nos:this.props.ph_nos}
                    onChange={this.updatePh_Nos} /></Col>}
                
        </Row>
        <Row className="show-grid" onClick={this.ShowEditable}>
                <Col md={4}><label>Address</label></Col>
                {  !this.state.editable?  <Col md={8}>{tchAdd.address?tchAdd.address:'N/A'}</Col>
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
        teacher: store.teacher,
        }
};

export default connect(mapStatetoProps)(TeacherPersonelDetails);