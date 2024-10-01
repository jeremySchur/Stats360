import axios from "axios";
import { useState } from "react";
import leagueBackgroundImage from "@/assets/league-background.jpg";
import { Link } from "react-router-dom";
import backArrowIcon from "@/assets/back-arrow.svg";
import FadeIn from "@/components/custom_ui/FadeIn";

const League = () => {
  const [username, setUsername] = useState<string>();
  const [id, setId] = useState<string>();
  const [championData, setChampionData] = useState<any>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getChampionData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/riot/stats/${username}%23${id}`);
      console.log(response.data);
      setChampionData(response.data);
    } catch (error) {
      console.error(error);
      alert("User doesn't exist!");
    }
  };

  const filteredChampionData = championData?.filter((champion: any) =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <FadeIn>
      <div
        style={{ backgroundImage: `url(${leagueBackgroundImage})`, backgroundSize: "100%" }}
        className="bg-center h-screen max-h-screen max-w-screen flex space-x-10"
      >
        <div className="flex flex-col justify-center items-center space-y-5 w-1/2 p-10">
          <div className="border-4 border-gray-950 w-full p-4 rounded-xl bg-gray-900 opacity-90 flex flex-row space-x-4">
            <Link
              to="/home"
              className="text-gray-300 font-bold text-3xl hover:transform hover:scale-110 transition-transform duration-300 bg-black rounded-xl p-1"
            >
              <img className="h-9 w-9" src={backArrowIcon} />
            </Link>
            <p className="text-gray-300 font-bold text-3xl">League of Legends Player Stats</p>
          </div>

          <div className="border-4 border-gray-950 w-full p-4 rounded-xl bg-gray-900 opacity-90 flex flex-col space-y-4">
            <p className="text-gray-300 font-bold text-3xl">What is your Riot Id?</p>
            <p className="text-gray-300 font-bold text-lg">Example Riot Id: wajigl#4631</p>
            <div className="flex flex-row w-full space-x-2">
              <input
                style={{
                  outline: "none",
                  boxShadow: "0 0 0 2px #000000",
                }}
                className="bg-black text-gray-300 h-10 text-xl w-full rounded-xl p-2 outline-gray-950"
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getChampionData();
                  }
                }}
                placeholder={"wajigl"}
              />
              <input
                style={{
                  outline: "none",
                  boxShadow: "0 0 0 2px #000000",
                }}
                className="bg-black text-gray-300 h-10 text-xl w-full rounded-xl p-2 outline-gray-950"
                onChange={(e) => setId(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getChampionData();
                  }
                }}
                placeholder={"4631"}
                type="number"
                maxLength={4}
              />
              <button
                className="bg-gray-700 text-white h-10 w-48 rounded-xl font-bold p-2"
                onClick={() => getChampionData()}
              >
                Get Stats
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 justify-center items-center p-10">
          {filteredChampionData && (
            <input
              style={{
                outline: "none",
                boxShadow: "0 0 0 2px #000000",
              }}
              className="bg-black text-gray-300 h-10 text-xl w-full rounded-xl p-2 outline-gray-950"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={"Search for a Champion"}
            />
          )}

          <div className="text-gray-300 flex items-center justify-center overflow-auto ">
            <div className="max-h-[70vh] min-h-[70vh] min-w-[50vw] max-w-[50vw]">
              {filteredChampionData && (
                <div className="grid grid-cols-3 gap-4 border-4 border-gray-950 p-4 rounded-xl bg-gray-900 opacity-90">
                  {filteredChampionData.map((champion: any) => (
                    <div
                      key={champion.championId}
                      className="flex flex-col p-6 rounded-xl bg-gray-950 border-4 border-gray-700 text-gray-300 space-y-2"
                    >
                      <p className="text-2xl font-bold text-left underline">{`${champion.name} Game Stats:`}</p>
                      <p className="text-xl semi-bold">{`Level: ${champion.championLevel}`}</p>
                      <p className="text-xl semi-bold">{`Points: ${champion.championPoints}`}</p>
                      <p className="text-xl semi-bold">{`Chest Granted: ${champion.chestGranted ? "Yes" : "No"}`}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default League;
