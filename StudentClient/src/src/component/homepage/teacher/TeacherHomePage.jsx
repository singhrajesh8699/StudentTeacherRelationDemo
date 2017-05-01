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
import { Accordion, AccordionItem } from 'react-sanfona';
import TeacherPersonelDetails from './TeacherPersonelDetails.jsx'
import TeacherCourseDetails from './TeacherCourseDetails.jsx'
import {loginData} from '../../../action/loginAction.js';

const TeacherHomePage=React.createClass({

     componentWillMount: function() {
      console.log("TeacherHomePage is in will mount");
      if(localStorage.getItem("teacher")!='' && localStorage.getItem("teacher")!=null && localStorage.getItem("teacher")!=undefined)
       this.props.dispatch(loginData(localStorage.getItem("teacher")));
                },
   componentDidMount : function(){
  console.log("TeacherHomePage is in DidMount");

        },

render :function(){

    return (

            <div>
      <Accordion activeItems={["TeacherPersonelDetails","TeacherCourseDetails"]} allowMultiple={true} >
                {['TeacherPersonelDetails','TeacherCourseDetails'].map((item) => {

                    if(item === "TeacherPersonelDetails"){
                    return (
                        <AccordionItem title={`${ item }`}  slug={item} key={item} >
                              <div>
                           <TeacherPersonelDetails />
                              </div>
                        </AccordionItem>
                    );
                  }
                  else if(item === "TeacherCourseDetails"){

                    return (
                        <AccordionItem title={`${ item }`}  slug={item} key={item}>

                            <div>
                                 <TeacherCourseDetails />
                           </div>

                        </AccordionItem>
                    );
                  }

                })}
            </Accordion>
          </div>
    );
}
})



function mapSTatetoProps(store)
{
    return{
         teacher:store.teacher,
    }
   
};
export default connect(mapSTatetoProps)(TeacherHomePage);