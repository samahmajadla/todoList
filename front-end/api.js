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
          successCallback(currId, updatedTitle)
          if (data.status == 201) {
          }
        })
      })
}}
