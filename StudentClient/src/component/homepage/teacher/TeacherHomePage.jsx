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


const TeacherHomePage=React.createClass({

     componentWillMount: function() {
      console.log("TeacherHomePage is in will mount");
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
                                 <TeacherPersonelDetails />
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




export default TeacherHomePage;