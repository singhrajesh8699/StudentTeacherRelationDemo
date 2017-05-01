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
import StudentPersonelDetails from './StudentPersonelDetails.jsx';
import StudentCourseDetails from './StudentCourseDetails.jsx'
import { Accordion, AccordionItem } from 'react-sanfona';
import {fetchStudentDetails} from '../../../action/studentActionHomepage';
import {loginData} from '../../../action/loginAction.js';

const StudentHomePage=React.createClass({

  componentWillMount: function() {
            console.log("StudentHomePage is in will mount");
            if(localStorage.getItem("student")!='' && localStorage.getItem("student")!=null && localStorage.getItem("student")!=undefined)
          this.props.dispatch(loginData(localStorage.getItem("student")));
                },
                
   componentDidMount : function(){
  console.log("StudentHomePage is in DidMount");

        },

render :function(){

  

    return (
              <div>
      <Accordion activeItems={["StudentPersonelDetails","StudentCourseDetails"]} allowMultiple={true} >
                {['StudentPersonelDetails','StudentCourseDetails'].map((item) => {

                    if(item === "StudentPersonelDetails"){
                    return (
                        <AccordionItem title={`${ item }`}  slug={item} key={item} >
                              <div>
                           <StudentPersonelDetails />
                              </div>
                        </AccordionItem>
                    );
                  }
                  else if(item === "StudentCourseDetails"){

                    return (
                        <AccordionItem title={`${ item }`}  slug={item} key={item}>

                            <div>
                                 <StudentCourseDetails />
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


function mapStatetoProps(store) {
    return {
        registration: store.registration,
        }
};

export default connect(mapStatetoProps)(StudentHomePage);