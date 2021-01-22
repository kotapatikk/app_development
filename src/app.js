import React from 'react';
import { Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { HOME_CONNECT } from './utilities/constants';
import NoMatch from './components/common/404';
import Movies from './components/movies/moviesList';

const App = ()=>{
return(
    <div style={{ background: '#f7f8f9', height: ' 100%', overflowY: 'auto' }}>
            <Router>
                <Suspense fallback={<></>}>
                    <Switch>
                        <Route path={HOME_CONNECT} exact component={Movies} />
                        <Route component={NoMatch} />
                    </Switch>
                </Suspense>
            </Router>
        </div>
)
}

export default App;