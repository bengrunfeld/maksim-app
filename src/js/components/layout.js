var React = require('react');

// Flux stuff
var AppActions = require('../actions/actions');
var AppStore = require('../stores/store');

// App Components

// React Class
var Layout = React.createClass({
  render: function(){
    return (
      <section>
        <div id="navbar">
          <nav class="navbar navbar-default">
            <div class="container-fluid" id="navbar-section">
              
            </div>
          </nav>
        </div>
  
        <article id="mainContent"></article>
          <div>
            hourly forcast
          </div>
          <div>
            10 day forecast
          </div>
          <div>
            Pollen and other allergins
          </div>
        <div id="footer">
          <div>FOOTER</div>
        </div>
      </section>
    );
  }
});

module.exports = Layout;

