module.exports = function () {
    return `
  <html>
     <style>
            #feed {
              height: 100%;
              width: 100%;
            }
          </style>
      <body>
      <div id = "feed">
          <a id ="layout" class="twitter-timeline" href="https://twitter.com/who" data-widget-id="12345" data-cards="hidden" data-width="900" data-height="3000" >@Who Tweeter</a>
   </div>
  <script>
  
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
   
  </script>
      </body>
  </html>
  `;
  };
  