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
import TeacherDetail from './teacher/TeacherDetail.jsx'
import StudentDetail from './student/StudentDetail.jsx'
import {fetchAllData} from '../../../action/adminAction.js'

const AdminHomePage=React.createClass({

    componentWillMount: function() {
     
       this.props.dispatch(fetchAllData());

    },
   componentDidMount : function(){
   console.log("AdminHomePage is in DidMount");

        },

render :function(){

    return (

            <div>
      <Accordion activeItems={["TeacherDetail","StudentDetail"]} allowMultiple={true} >
                {['TeacherDetail','StudentDetail'].map((item) => {

                    if(item === "TeacherDetail"){
                    return (
                        <AccordionItem title={`${ item }`}  slug={item} key={item} >
                              <div>
                           <TeacherDetail />
                              </div>
                        </AccordionItem>
                    );
                  }
                  else if(item === "StudentDetail"){

                    return (
                        <AccordionItem title={`${ item }`}  slug={item} key={item}>

                            <div>
                                 <StudentDetail />
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

function mapStatetoProps(store)
{
    return{
        student:store.student,
        teacher:store.teacher
    }
}
export default connect(mapStatetoProps)(AdminHomePage);