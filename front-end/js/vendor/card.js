"use strict";
{
    $("#createListButton").on("click", (event) =>{
        $("body").append(todoCard);
    });

    let todoCard = `

    <div class="grid-x grid-padding-x">
    <div class="large-6 large-pull-6 cell">

        <div class="card card-tabs large-6">

            <div class="card-divider">
              <center><h6>Title</h6></center>
              <ul class="tabs menu align-right" data-active-collapse="true" data-tabs id="collapsing-tabs">
                <!-- note: these need to be in reverse order because of the align-right setting in .menu -->
                <li class="tabs-title"><a href="#panel3c">
                  <i class="fa fa-cog" aria-hidden="true"></i> Settings
                </a></li>
                <li class="tabs-title"><a href="#panel2c">
                <i class="fa fa-area-chart" aria-hidden="true"></i>
                  Stats
                </a></li>
                <li class="tabs-title is-active"><a href="#panel1c" aria-selected="true"><i class="fa fa-home" aria-hidden="true"></i>
                 Home</a></li>
               </ul>
             </div>
        
             <div class="tabs-content" data-tabs-content="collapsing-tabs">
        
              <div class="tabs-panel is-active" id="panel1c">
                <img src="http://lorempixel.com/485/248/cats/7/">
                <div class="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
        
              <div class="tabs-panel" id="panel2c">
                <div class="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and has a cat on the bottom.</p>
                </div>
                <img src="http://lorempixel.com/485/248/cats/5/">
              </div>
        
              <div class="tabs-panel" id="panel3c">
                <div class="card-section">
                  <h4>This is a card.</h4>
                  <img src="http://lorempixel.com/485/248/cats/6/">
                  <p>It has an easy to override visual style, it has an image in the card section.</p>
                </div>
              </div>
        
            </div>
        </div>
    </div>`
}
