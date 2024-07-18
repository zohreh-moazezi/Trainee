const axios = window.axios;
const client = axios.create({
  baseURL: "http://localhost:4200/",
});

const fetchAllocations = async () => {
  try {
    const accessToken = localStorage.getItem("access_token");
    console.log("Access Token from localStorage:", accessToken);
    const allocationResponse = await client.get(
      `${client.defaults.baseURL}allocations`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = allocationResponse.data.allocations;
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
  } catch (error) {
    console.error(error);
  }
};
document.addEventListener("DOMContentLoaded", fetchAllocations);
