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
import SearchByDays from './SearchByDays.jsx'

const StudentDetail=React.createClass({

getInitialState:function()
  {
     return{
        SearchByName:false,
        SearchByDay:false,
        days:''

        };
  },

componentWillMount: function() {
      console.log("StudentDetails is in will mount");
                },
componentDidMount : function(){
  console.log("StudentDetails is in DidMount");

        },
searchByDays : function()
{
        this.setState({SearchByDay:true,SearchByName:false})
},

searchByName : function()
{
          this.setState({SearchByDay:false,SearchByName:true})
},

handleTname : function(event)
{
   this.setState({days:event.target.value})
},
 

render :function(){

    return (

    <Grid>
        <Row md={12} className="show-grid">
        <Col md={3}>
           <button type="button" onClick={this.searchByDays}>Search By Days</button>
        </Col>
        <Col md={3}>
           <button type="button" onClick={this.searchByName}>Search By Name</button>
        </Col>
        </Row>

        {this.state.SearchByDay?

            <SearchByDays />
                
              :null}

                

            {this.state.SearchByName? 
                <Row className="show-grid">
                    <Col md={4}><label>Search By Name</label></Col>
                    <Col md={8}> <input type="text" ref="name"/></Col>
                </Row>
                :null}
        
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

export default connect(mapStatetoProps)(StudentDetail);