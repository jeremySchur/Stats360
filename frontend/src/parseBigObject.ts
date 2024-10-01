import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json`);
    const data = response.data.data; // The champions data is under the 'data' property
    let result = "";
    for (let key in data) {
      if (result !== "") result += ";";
      result += `${data[key].key},${data[key].id}`;
    }
    return result;
  } catch (error) {
    console.error(error);
    alert("User doesn't exist!");
  }
};
