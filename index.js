//API: ytdx5AuA9TtK3H6sSKIbzxiqhnl1Ro8nQfcX3lu6

//https://www.nps.gov/index.htm

function getStateParks(stateCode, limitValue) {
  fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&limit=${limitValue}&api_key=ytdx5AuA9TtK3H6sSKIbzxiqhnl1Ro8nQfcX3lu6`)
    .then(response => response.json())
    .then(responseJson => displayStateParkResults(responseJson))
    .catch(error => console.error(error));
}

function displayStateParkResults(responseJson) {
  console.log(responseJson);
  for (let i = 0; i < responseJson.data.length; i++) { 
    let park = responseJson.data[i];
    $('.results2').append(`<div class="results2"> 
    <h2>${park.fullName}</h2>
    <p>${park.description}</p>
    <a href=${park.url}>Visit the park website</a>
    </div>`);
    $('.results').removeClass('hidden');
  }
//display the results section
$('.results2').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let stateCode = $('#userFillable').val();
    let limitValue = $('#userFillable2').val();
    getStateParks(stateCode, limitValue);
    console.log(stateCode);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
