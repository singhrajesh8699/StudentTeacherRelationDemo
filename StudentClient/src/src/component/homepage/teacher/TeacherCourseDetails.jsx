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

const TeacherCourseDetails=React.createClass({
 
 getInitialState: function(){
        return{
                
                course:'',
                editable:false
        }
},

  componentWillMount: function() {
      console.log("TeacherCourseDetails is in will mount");
                },
 componentDidMount : function(){
  console.log("TeacherCourseDetails is in DidMount");

        },

componentWillReceiveProps : function(nextProps)
{
    
    this.setState({

            course:nextProps.teacher.teacherData.tcourse!=null && nextProps.teacher.teacherData.tcourse!=undefined 
                 && nextProps.teacher.teacherData.tcourse!=''?nextProps.teacher.teacherData.tcourse.course:'' ,
                
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

updateData: function()
{
    var course=ReactDOM.findDOMNode(this.refs.course).value;
  //"CourseId":this.props.teacher.teacherData.tcourse.courseId
    var updateTeacherData={
           "course":{"course":course},
           "type":"teacher",
           "teacherId":this.props.teacher.teacherData.teacherId,
    }

 
    this.props.dispatch(updateTeacher(updateTeacherData));

},

render :function(){

        var tchCrs={};
        var tchCls={};
        var dept={};
        
        if(this.props.teacher.teacherData!=undefined && this.props.teacher.teacherData!='' 
            && this.props.teacher.teacherData!=null )
            {    if(this.props.teacher.teacherData.tcourse!=null)
                    {
                            tchCrs=this.props.teacher.teacherData.tcourse;
                    }
                  
                   if(this.props.teacher.teacherData.clsTchr.length>0)
                  {
                  tchCls=this.props.teacher.teacherData.clsTchr[0];
                  }

            }

    return (

    <Grid>
        
        <Row className="show-grid" onClick={this.ShowEditable}>
                <Col md={4}><label>Course Details</label></Col>
                 {  !this.state.editable?<Col md={8}>{tchCrs.course ? tchCrs.course : 'N/A'}</Col>:
                 <Col  md={8}><select ref="course" value={this.state.course?this.state.course:this.props.course}
                 onChange={this.updateCourseName}>
                 <option value="java">java</option>
                 <option value="Servlet">Servlet</option>
                 <option value="Javascript">Javascript</option>
                 <option value="React Js">React Js</option>
                 </select></Col> }
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>Department</label></Col>
                <Col md={8}>{dept.department?dept.department: 'N/A'}</Col>
        </Row>

        <Row className="show-grid">
                <Col md={4}><label>ClassRoom Details</label></Col>
                <Col md={8}>{tchCls.crName?tchCls.crName: 'N/A'}</Col>
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
      teacher:store.teacher,
        }
};

export default connect(mapStatetoProps)(TeacherCourseDetails);