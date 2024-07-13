const apiKey = "903cf1a1b54231853a35bde5590c845b";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");   //to enter the place need to be search
        const searchBtn = document.querySelector(".search button");   //to be click for searching
        const weatherIcon = document.querySelector(".weather-icon");  //to fetch the icons

        async function checkWeather(city){
            document.querySelector(".error").style.display = "none";
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404)  //if enterd wrong name
            {
              document.querySelector(".error").style.display = "block";
              document.querySelector(".weather").style.display = "none";  
              document.querySelector(".date").style.display = "none";   
            }
            else
            {
             var data = await response.json();
             //fetch the input the current date and time
             const currentDate = new Date();
             const dayOfWeek = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][currentDate.getDay()];
             const month = ["January","February","March","April","May","June","July","August","September","October","November","December"][currentDate.getMonth()];
             const day = currentDate.getDate();
             const year = currentDate.getFullYear();
             const time = currentDate.toLocaleTimeString();



              document.querySelector(".city").innerHTML = data.name;   //displaying the data in the web page
              document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";    //help yo convert degree in round figure 
              document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
              document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
              document.querySelector(".date").innerHTML = `${dayOfWeek}, ${month}, ${day}, ${year}, ${time}`;

          if(data.weather[0].main =="Clouds")    //change the image according to the temperature
    {
    weatherIcon.src = "clouds.png";
    }
      else if(data.weather[0].main =="Clear")
      {
          weatherIcon.src = "clear.png";
      }
       else if(data.weather[0].main =="Rain")
      {
          weatherIcon.src = "rain.png";
      }
       else if(data.weather[0].main =="Dizzle")
      {
         weatherIcon.src = "dizzle.png";
      }
       else if(data.weather[0].main =="Mist")
      {
         weatherIcon.src = "mist.png";
      }
      else if(data.weather[0].main =="Snow")
      {
         weatherIcon.src = "snow.png";
      }
         
          document.querySelector(".weather").style.display = "block";
         // document.querySelector(".error"),style.display = "none";
          document.querySelector(".date").style.display = "block";
}
    }
            searchBtn.addEventListener("click",()=>{    //function call when the seach button entered the show the value of the place entered in the searchBox
            checkWeather(searchBox.value);
        })
        