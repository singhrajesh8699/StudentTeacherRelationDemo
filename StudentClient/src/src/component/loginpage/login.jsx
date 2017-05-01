import React from 'react';
import ReactDOM from 'react-dom';
import {connect, ReactRedux} from 'react-redux';
import {loginData} from '../../action/loginAction.js';
import {fetchAllData} from '../../action/adminAction.js';
import {existingTableData} from '../../action/registrationActionPage';

const login=React.createClass(
{

    getInitialState:function()
    {
        return {
                username:'',
                password:''
        }
    },

  componentWillMount: function() {
      console.log("login is in will mount");

//"course":[{"1":"java"},{"2":"Servlet"},{"3":"Javascript"},{"4":"React Js"}],
   },
   componentDidMount : function(){
  console.log("login is in DidMount");

        },

contextTypes:{

router:React.PropTypes.object,
},

login: function()
{

     console.log("AdminHomePage is in will mount");
      var existinTable={
   "department":[{"1":"ServerLab"},{"2":"ClientLab"}],
   "classroom":[{"1":"R101"},{"2":"R102"},{"3":"R103"},{"4":"R104"}]
 }
     this.props.dispatch(existingTableData(existinTable));
   
    var username=ReactDOM.findDOMNode(this.refs.username).value;
    var password=ReactDOM.findDOMNode(this.refs.password).value;
    if(username=="admin" && password=="admin1234")
    {
            var that=this;
            that.props.dispatch(fetchAllData()).then(function(resolve)
            {
               that.context.router.push("AdminHomePage");
            }).catch(function(reject){
                console.log('error',reject)
            })

            
    }else{
    
     var that=this;
     var stdType={};
     var tchType={};
    
    that.props.dispatch(loginData(username)).then(function(resolve)
    {
   

             if(that.props.student.studentData!=undefined && that.props.student.studentData!='' 
             && that.props.student.studentData!=null )
            {
                stdType=that.props.student.studentData.login[0];
            }

            
           if(that.props.teacher.teacherData!=undefined && that.props.teacher.teacherData!='' 
            && that.props.teacher.teacherData!=null )
            {
                tchType=that.props.teacher.teacherData.login[0];
            }

      if(stdType.type=="student")
      {
           localStorage.setItem("student",username);
           that.context.router.push("StudentHomePage");
      }
     if(tchType.type=="teacher")
      {
           localStorage.setItem("teacher",username);
           that.context.router.push("TeacherHomePage");
      }

    }).catch(function(reject){
        console.log('error',reject)
    });
 
   }
      
     },


registrationPage:function()
{
    this.context.router.push("registrationPage")
},

 render: function(){


    return(

        <div>
         <label>username</label><input type="text" ref="username" />
        
         <label>password</label><input type="password" ref="password" />
        
         <button type="button" onClick={this.login}>login</button>
         <label onClick={this.registrationPage} >new user sighup</label>
        
        </div>
    )}

})

function mapStatetoProps(store) {
    return {  
        student:store.student,
        teacher:store.teacher
        }
};

export default connect(mapStatetoProps)(login);