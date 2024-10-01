import axios from "axios";
import { useState } from "react";
import battlefieldBackgroundImage from "@/assets/battlefield2-background.jpg";
import { Link } from "react-router-dom";
import backArrowIcon from "@/assets/back-arrow.svg";
import FadeIn from "@/components/custom_ui/FadeIn";

const Battlefield = () => {
  const [username, setUsername] = useState<string>();
  const [id, setId] = useState<string>();
  const [playerData, setPlayerData] = useState<any>();

  const getUserData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/BF2/stats/${username}/${id}`);
      console.log(response.data);
      setPlayerData(response.data);
    } catch (error) {
      console.error(error);
      alert("User doesn't exist!");
    }
  };

  return (
    <FadeIn>
      <div
        style={{ backgroundImage: `url(${battlefieldBackgroundImage})`, backgroundSize: "100%" }}
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
            <p className="text-gray-300 font-bold text-3xl">Battlefield 2 Player Stats</p>
          </div>

          <div className="border-4 border-gray-950 w-full p-4 rounded-xl bg-gray-900 opacity-90 flex flex-col space-y-4">
            <p className="text-gray-300 font-bold text-3xl">What is your battlefield username and player id?</p>
            <p className="text-gray-300 font-bold text-lg">Example Username and Player ID: zimzimzallabim#500076608</p>
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
                    getUserData();
                  }
                }}
                placeholder={"zimzimzallabim"}
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
                    getUserData();
                  }
                }}
                placeholder={"500076608"}
                type="number"
                maxLength={4}
              />
              <button
                className="bg-gray-700 text-white h-10 w-48 rounded-xl font-bold p-2"
                onClick={() => getUserData()}
              >
                Get Stats
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 justify-center items-center p-10">
          <div className="text-gray-300 flex items-center justify-center overflow-auto ">
            <div className="max-h-[70vh] min-h-[70vh] min-w-[50vw] max-w-[50vw]">
              {playerData && (
                <div className="border-4 border-gray-950 p-4 rounded-xl bg-gray-900 opacity-90">
                  <div className="flex flex-col p-6 rounded-xl bg-gray-950 border-4 border-gray-700 text-gray-300 space-y-2">
                    <p className="text-2xl font-bold text-left underline">{`Game Stats:`}</p>
                    <p className="text-xl semi-bold">{`Rank: ${playerData.Rank}`}</p>
                    <p className="text-xl semi-bold">{`Win Percentage: ${playerData.Win}`}</p>
                    <p className="text-xl semi-bold">{`Wins: ${playerData.Wins}`}</p>
                    <p className="text-xl semi-bold">{`Losses: ${playerData.Loses}`}</p>
                    <p className="text-xl semi-bold">{`Best Class: ${playerData["Best Class"]}`}</p>
                    <p className="text-xl semi-bold">{`Gun Accuracy: ${playerData.Accuracy}`}</p>
                    <p className="text-xl semi-bold">{`Time Played: ${playerData["Time played"]}`}</p>
                    <p className="text-xl semi-bold">{`K/D: ${playerData["K/D"]}`}</p>
                    <p className="text-xl semi-bold">{`Kills: ${playerData.Kills}`}</p>
                    <p className="text-xl semi-bold">{`Deaths: ${playerData.Deaths}`}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Battlefield;
