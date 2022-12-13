export const getLocation = async (setFx) => {

  var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;
    setFx(crd)
  }

  function errors(err) {
    // alert an error has occured
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  if (navigator.geolocation) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition((success));
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
          //If denied then show instructions to enable location
          console.log(' location services must be enabled')
        }
        result.onchange = function () {
          console.log(result.state);
        };
      });
  } else {
    alert("Sorry Not available!");
  }
}