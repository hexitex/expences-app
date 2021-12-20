import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ExpenceDashBoardPage from '../components/ExpenseDashBoardPage';
import HelpPage from '../components/HelpPage';

const AppRouter = () => (    
<BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenceDashBoardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>

    </div>

</BrowserRouter>
);
export default AppRouter;