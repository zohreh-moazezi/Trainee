const axios = window.axios;
const client = axios.create({
  baseURL: "http://localhost:4200/",
});
const accessToken = localStorage.getItem("access_token");

const S_MAP = '<a href="https://snappfood.ir">SMapp </a> ';
const S_MAP_URL =
  "https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png";

const map = L.map("map").setView([35.702502, 51.389623], 9);
L.tileLayer(S_MAP_URL, {}).addTo(map);

const fetchbikers = async () => {
  try {
    const bikersResponse = await client.get(
      `${client.defaults.baseURL}bikers/free?cityCode=tehran&clientType=SNAPPFOOD`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return bikersResponse.data.freeBikers;
  } catch (error) {
    console.error(error);
  }
};

const updateMap = (data) => {
  data.forEach((item) => {
    const myIcon = L.icon({
      iconUrl: "./logo/biker.png",
      iconSize: [20, 20],
    });
    L.marker([item.lat, item.long], { icon: myIcon }).addTo(map);
  });
};

const fetchAllocations = async () => {
  try {
    const allocationResponse = await client.get(
      `${client.defaults.baseURL}allocations`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return allocationResponse.data.allocations;
  } catch (error) {
    console.error(error);
  }
};
const updateTable = (data) => {
  const tableBody = document.getElementById("table-body");
  data.forEach((item) => {
    const row = document.createElement("tr");
    const allocationCell = document.createElement("td");
    const radiusnCell = document.createElement("td");

    allocationCell.innerHTML = item.name;
    radiusnCell.innerHTML = item.radius;

    row.appendChild(allocationCell);
    row.appendChild(radiusnCell);
    tableBody.appendChild(row);
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  const allocationData = await fetchAllocations();
  const bikersData = await fetchbikers();
  updateMap(bikersData);
  updateTable(allocationData);
});
