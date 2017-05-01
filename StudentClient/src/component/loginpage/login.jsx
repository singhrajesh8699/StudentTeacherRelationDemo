import React from 'react';
import ReactDOM from 'react-dom';
import {loginData} from '../../action/loginAction.js';
import {connect, ReactRedux} from 'react-redux';

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
                },
   componentDidMount : function(){
  console.log("login is in DidMount");

        },

contextTypes:{

router:React.PropTypes.object,
},

login: function()
{
    var username=ReactDOM.findDOMNode(this.refs.username).value;
    var password=ReactDOM.findDOMNode(this.refs.password).value;
    if(username=="admin" && password=="admin1234")
    {
            this.context.router.push("AdminHomePage")
    }else{
    
     var that=this;
     var stdType={};
     var tchType={};
    
    
   that.props.dispatch(loginData(username)).then(function(resolve)
    {
   

             if(that.props.student.studentData.length!=0)
            {
                stdType=that.props.student.studentData.login[0];
            }

             if(that.props.teacher.teacherData.length!=0)
            {
                tchType=that.props.teacher.teacherData.login[0];
            }

      if(stdType.type=="student")
      {
           that.context.router.push("StudentHomePage");
      }
     if(tchType.type=="teacher")
      {
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