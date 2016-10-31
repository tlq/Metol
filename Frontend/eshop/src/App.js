import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
      		<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="index.html">Start Bootstrap</a>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Services</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
							<li>
								<a href="#">Other Pages</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
      	</div>
    );
  }
}

export default App;
