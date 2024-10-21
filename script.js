const getWeather = async (city) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?q=${city}`,
      {
        headers: {
          key: "a69c52522c5a4fdb96280856242209",
        },
      }
    );

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const icon_img = document.querySelector("#icon");
const city_input = document.querySelector("#city_input");
const city_name = document.querySelector("#city_name");
const temp_c = document.querySelector("#temp_c");
const temp_f = document.querySelector("#temp_f");
const wind_speed = document.querySelector("#wind_speed");
const wind_dir = document.querySelector("#wind_dir");
const wind_degree = document.querySelector("#wind_degree");
const wSpeed = document.querySelector("#wSpeed");
const condition = document.querySelector("#condition");

const fetchWeather = async () => {
  const city_value = city_input.value;

  if (city_value.lenght <= 3) {
    alert("Invalid city");
  }

  const result = await getWeather(city_value);

  icon_img.src = result.current.condition.icon;
  city_name.innerText = result.location.name;
  temp_c.innerText = result.current.temp_c;
  wind_dir.innerText = result.current.wind_dir;
  temp_f.innerText = result.current.temp_f;
  wind_speed.innerHTML = result.current.wind_kph;
  wind_degree.innerText = result.current.wind_degree;
  city_input.value = "";
};
