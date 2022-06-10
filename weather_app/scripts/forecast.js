const key = "Gx6EdCo9FAtCDDR4U1AfeBCPBHA3hGHr";

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?api=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  console.log(data);
};

getCity("toronto");
