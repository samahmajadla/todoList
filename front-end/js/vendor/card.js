"use strict";
{
    $("#createListButton").on("click", (event) =>{
       // $("body").append("div");
        $("body").append(todoCard);
        console.log("CLICKED");
    });

    let todoCard = `
    <div class="grid-container">
    <center><div data-closable="fade-out" class="todo-list-card card">
    <div class="card-divider">
        <h3>To Do List</h3>
        <button class="close-button" data-close>x</button>
    </div>
    <div class="card-section">
        <ul>
        <li><input id="item1" type="checkbox"></input><label for="item1"></label>Item 1</li>
        <li><input id="item2" type="checkbox"></input><label for="item2"></label>Item 2</li>
        <li><input id="item3" type="checkbox"></input><label for="item3"></label>Item 3</li>
        <li><input id="item4" type="checkbox"></input><label for="item4"></label>Item 4</li>
        <li><input id="item5" type="checkbox"></input><label for="item5"></label>Item 5</li>
        <li><input id="item6" type="checkbox"></input><label for="item6"></label>Item 6</li>
        </ul>

    </div>

    </div>
    </div>`
}
