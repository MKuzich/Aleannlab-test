import axios from 'axios';

export const getLocation = async (lat, long) => {
  const searchParams = new URLSearchParams({
    key: 'AIzaSyD975WMSA04Q-mjdqQUXdyvcH4cQe4txRg',
    latlng: `${lat},${long}`,
  });

  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?${searchParams}`
  );
  return res.data;
};

export const getData = async () => {
  const res = await axios.get(
    'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
    {
      headers: {
        Authorization: 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
      },
    }
  );
  const coords = res.data.map(({ location: { lat, long } }) =>
    getLocation(lat, long)
  );
  const cities = await Promise.all(coords);
  const data = res.data.map((itm, idx) => (itm.city = cities[idx]));
  return data;
};
