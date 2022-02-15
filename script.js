var API_KEY = "KqdVGuCHZwD7dkp5jrX-1RU7RqY8NabJrPpuUptOqt0";
var apiUrl = "https://api.unsplash.com/photos/random?client_id=" + API_KEY;

const loadImage = async () => {
  document.getElementById("image").innerHTML =
    '<div style="width:100vw; height:60vh; display: flex; justify-content: center; align-items:center; "><div class="spinner-border text-primary" role="status"> <span class="sr-only">Loading...</span></div></div>';
  const resp = await fetch(apiUrl).catch(
    (err = () => {
      document.getElementById("image").innerHTML =
        "<h3 class='text-danger'>Limit for the number of request has reached its maximum</h3>";
    })
  );
  const myson = await resp.json();
  var img = document.createElement("img");
  img.src = myson.urls.regular;
  img.className = "img-fluid text-center main-content";
  document.getElementById("image").innerHTML = null;
  document.getElementById("image").append(img);
};
