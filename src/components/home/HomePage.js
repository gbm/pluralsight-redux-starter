import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
      return(
        <div className={"jumbotron"}>
          <h1>Admin page</h1>
          <p>blah blah blah</p>
          <Link to "about" className="btn btn-primary btn-lg">Learn more></Link>
        </div>
      );
    }
}

export default HomePage;
