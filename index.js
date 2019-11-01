//API: ytdx5AuA9TtK3H6sSKIbzxiqhnl1Ro8nQfcX3lu6

//https://www.nps.gov/index.htm

function getStateParks(stateCode, limitValue) {
  fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&limit=${limitValue}&api_key=ytdx5AuA9TtK3H6sSKIbzxiqhnl1Ro8nQfcX3lu6`)
    .then(response => response.json())
    .then(responseJson => displayStateParkResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}



function displayStateParkResults(responseJson) {
  console.log(responseJson);
  for (let i = 0; i < responseJson.message.length; i++) { 
    $('.results').append(`<div ${responseJson.message[i]}" class="results"></div>`); 
    $('.results').removeClass('hidden');
  }
console.log(responseJson.message);
//display the results section
$('.results').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let stateCode = $('#userFillable').val()
    let limitValue = $('#userFillable2').val()
    getStateParks(stateCode, limitValue);
    console.log(stateCode);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
