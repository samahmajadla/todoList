var firstId = 0;
var currId = firstId;
// var httpStatus;
// var getHttpStatus(){
//   return request.body.;
// }
var request = { post: function (data, url, successCallback, failureCallback){
  
  return fetch(
    url,
    {
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data),
      method: 'POST', })
      .then(data => {
        // if (data.status == 201) {
          
        //   } else {
        //   failureCallback("sorry")
        // }
        //var listInfo = {"httpStatus": requestStatus, "updatedTitle": updatedTitle }
        // var requestStatus = data.status;
        data.json()
        .then(jsonData => {
          var updatedTitle = jsonData.title
          if (data.status == 201) {
            successCallback(currId, updatedTitle)
          }
        })
      })
}}

var userrequest = { post: function (data, url){

  fetch(
  url,
  {
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data),
    method: 'POST', })
<<<<<<< HEAD
    .then(data => {
        var requestStatus = data.status;
      
        data.json().then(jsonData => {
          var updatedTitle = jsonData.title
          var listInfo = {"httpStatus": requestStatus, "updatedTitle": updatedTitle }
          console.log(listInfo)          
          return listInfo
=======
    .then(response => {
          console.log(response)          
          return response;
>>>>>>> 403bae41b8cb961b1ae96f8512693e6d8c14725b
        })
}}
