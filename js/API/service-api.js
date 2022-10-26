Promise.all([
    fetch("https://retoolapi.dev/Myh01p/standoutmedia", { /* <----- jeg kalder på min egen REST API ved hjælp af fetch og promise all */
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (serviceData) {
              
  
        let serviceApi = "";
        for (let i = 0; i < serviceData.length; i++) { /* <----- her bruger jeg et dynamisk for loop vha. "serviceData.length" i stedet for at skrive "0; i < 4;" */
          serviceApi += 
          `<div class='services-box'>
          <img class='service-image' src='${serviceData[i].thumbnail}'>
          <h3 class='service-name'>${serviceData[i].service}</h3>
          </div>`;                               /* ^^ thumbnail og service er id'et på billederne og teksterne i JSON :-) */
        }
  
        document.querySelector(".services-wrapper").innerHTML = serviceApi; /* <----- alt indholdet fra REST API'en ryger direkte ind i "services-wrapper" containeren i HTML Dommen */
      }
),
  ]);