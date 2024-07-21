const axios = window.axios;
const client = axios.create({
  baseURL: "http://localhost:4200/",
});
const accessToken = localStorage.getItem("access_token");
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
  const data = await fetchAllocations();
  updateTable(data);
});
