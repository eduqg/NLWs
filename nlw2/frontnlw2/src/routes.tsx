import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing}/>
      <Route path="/give-classes" component={TeacherForm}/>
      <Route path="/study" component={TeacherList}/>
    </BrowserRouter>
  )
};

export default Routes;