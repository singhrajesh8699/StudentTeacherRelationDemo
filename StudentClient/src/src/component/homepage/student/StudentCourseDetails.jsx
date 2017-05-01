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
const StudentCourseDetails=React.createClass({

getInitialState: function(){
        return{
                
                course:'',
                editable:false
        }
},
componentWillMount: function() {
      console.log("StudentCourseDetails is in will mount");
                },
componentDidMount : function(){
  console.log("StudentCourseDetails is in DidMount");

        },

componentWillReceiveProps : function(nextProps)
{
    
    this.setState({

            course:nextProps.student.studentData.scourse!=null && nextProps.student.studentData.scourse!=undefined 
                 && nextProps.student.studentData.scourse!=''?nextProps.student.studentData.scourse[0].course:'' ,
                
     })
    
},
ShowEditable : function()
{
       this.setState({editable:true})  
},
updateCourseName:function(event)
{
    this.setState({course:event.target.value})
},

updateClassRoomName:function(event)
{
    this.setState({classroom:event.target.value})
},

updateData: function()
{
    var course=ReactDOM.findDOMNode(this.refs.course).value;
  
    var updateStudentData={
           "course":{"Scourse":course,"CourseId":this.props.student.studentData.scourse[0].courseId},
           "type":"student",
           "StudentId":this.props.student.studentData.studentId,
    }

    console.log(updateStudentData)
    this.props.dispatch(updateStudent(updateStudentData));

},


render :function(){

        var courseName={};
        var clroomName={};
        
        if(this.props.student.studentData!=undefined && this.props.student.studentData!='' && this.props.student.studentData!=null)
            {
                 
                 if(this.props.student.studentData.scourse!=null && this.props.student.studentData.scourse!=undefined 
                 && this.props.student.studentData.scourse!='')
                  {
                       courseName=this.props.student.studentData.scourse[0];
                       
                  }
                  if(this.props.student.studentData.classroom!=null && this.props.student.studentData.classroom!=undefined 
                  && this.props.student.studentData.classroom!='')
                  {
                       clroomName=this.props.student.studentData.classroom[0];
                  }
                

            }

    return (

    <Grid>
      <Row className="show-grid" onClick={this.ShowEditable}>
                <Col md={4}><label>Course Details</label></Col>
                 {  !this.state.editable?<Col md={8}>{courseName.course ? courseName.course : 'N/A'}</Col>:
                 <Col  md={8}><select ref="course" value={this.state.course?this.state.course:this.props.course}
                 onChange={this.updateCourseName}>
                 <option value="java">java</option>
                 <option value="Servlet">Servlet</option>
                 <option value="Javascript">Javascript</option>
                 <option value="React Js">React Js</option>
                 </select></Col> }
        </Row>

        <Row className="show-grid" onClick={this.ShowEditable}>
                <Col md={4}><label>ClassRoom Details</label></Col>
               
              <Col md={8}>{clroomName.classroom ? clroomName.classroom : 'N/A'}</Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Teacher Name</label></Col>
                <Col md={8}>{this.props.teacher.teacherData.name ? this.props.teacher.teacherData.name : 'N/A'}</Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Teacher Contact Nos.</label></Col>
                <Col md={8}>{this.props.teacher.teacherData.ph_nos ? this.props.teacher.teacherData.ph_nos :'N/A'}</Col>
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

export default connect(mapStatetoProps)(StudentCourseDetails);