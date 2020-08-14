module.exports = function () {
    return `
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height:500px;
    width: 96%;
    margin:0 auto;
    padding: 15px;
  }
  .card1 {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height:800px;
    width: 96%;
    margin:0 auto;
    padding: 15px;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .container {
    padding: 2px 16px;
  }
  h4,p{
  color: black;
  }
  .gap{
    height:20px;
    background-color:white
  }
  </style>
  </head>
      <body>
       <h3>COVID-19 Charts Updates</h3>
  <div class="card">
    <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="95%" height="400px"></iframe>
    <div class="container">
      <h4><b>Total Covid-19 cases</b></h4> 
      <p>Press play button for live confirmed cases globally</p> 
    </div>
  </div>
  <div class="gap"></div>
  <div class="card1">
    <iframe src="https://ourworldindata.org/grapher/covid-confirmed-cases-since-100th-case?country=IND" style="width: 95%; height: 700px;"></iframe>
    <div class="container">
      <h4><b>Covid-19 confirmed cases India region</b></h4> 
      <p>Press play button for live confirmed cases globally</p> 
    </div>
  </div>
  <div class="gap"></div>
  <div class="card">
    <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="95%" height="400px"></iframe>
    <div class="container">
      <h4><b>Total Covid-19 cases</b></h4> 
      <p>Press play button for live confirmed cases globally</p> 
    </div>
  </div>
  <div class="gap"></div>
  <div class="card ">
   <iframe src="https://ourworldindata.org/grapher/full-list-cumulative-total-tests-per-thousand" style="width: 95%; height: 400px;"></iframe>
    <div class="container">
      <h4><b>Cumulative total test per 1000</b></h4> 
      <p>Full list of cumulative tests region wise</p> 
    </div>
  </div>
  
      </body>
  </html>
  `;
  };
  