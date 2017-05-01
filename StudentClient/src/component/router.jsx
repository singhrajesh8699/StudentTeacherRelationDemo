import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Link,
    browserHistory,
    hashHistory,
    IndexRoute
} from 'react-router'

import {Provider} from 'react-redux'
import store from '../js/store.js'
import login from './loginpage/login.jsx';
import home from './homepage/home.jsx';
import AdminHomePage from './homepage/admin/AdminHomePage.jsx'
import TeacherHomePage from './homepage/teacher/TeacherHomePage.jsx';
import StudentHomepage from './homepage/student/StudentHomepage.jsx';
import RegistrationPage from './loginpage/RegistrationPage.jsx';


const CustomRouter = React.createClass({

    render() {
        
        return (
             <Provider store={store}>
                <Router history={hashHistory}>
                   <Route path="/" component={login}></Route>
                   <Route path="login" component={login}/>
                   <Route path="home" component={home}/>
                   <Route path="AdminHomePage" component={AdminHomePage}/>
                   <Route path="TeacherHomePage" component={TeacherHomePage}/>
                   <Route path="StudentHomepage" component={StudentHomepage}/>
                   <Route path="RegistrationPage" component={RegistrationPage}/>
               </Router>
             </Provider>
           
        );
    }

});
export default CustomRouter;