//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase();
  console.log(choice);
  const url = `https://api.weatherstack.com/current?access_key=e0bc9bee3187135e2154ace065ba8abf&query=${choice}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        console.log(data.current.astro.sunrise);
        console.log(data.location.name);

        let place = data.current;

        document.querySelector('h2').innerText = data.location.name;
        document.querySelector('.sunrise').innerText = place.astro.sunrise;
        document.querySelector('.sunset').innerText = place.astro.sunset;
        document.querySelector('.moonrise').innerText = place.astro.moonrise;
        document.querySelector('.moonset').innerText = place.astro.moonset;
        document.querySelector('.moon-phase').innerText = place.astro.moon_phase;
        document.querySelector('.moon-ill').innerText = place.astro.moon_illumination;
        
      })
      .catch(err => {
          console.log(`error ${err}`);
      });
}

