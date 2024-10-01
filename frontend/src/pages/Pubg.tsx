import axios from "axios";
import { useEffect, useState } from "react";
import pubgBackgroundImage from "@/assets/pubg-background.jpg";
import { Link } from "react-router-dom";
import backArrowIcon from "@/assets/back-arrow.svg";
import FadeIn from "@/components/custom_ui/FadeIn";

const Pubg = () => {
  const [username, setUsername] = useState<string>();
  const [platform, setPlatform] = useState<string>("xbox"); // ["xbox", "playstation", "steam"
  const [userData, setUserData] = useState<any>();

  const [exampleUsername, setExampleUsername] = useState<string>("Feyd101");

  useEffect(() => {
    switch (platform) {
      case "xbox":
        setExampleUsername("Feyd101");
        break;
      case "psn":
        setExampleUsername("BigPrrpTwitch");
        break;
      case "steam":
        setExampleUsername("TGLTN");
        break;
    }
  }, [platform]);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/PUBG/${platform}/player/${username}/stats/lifetime`
      );
      console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
      alert("User doesn't exist!");
    }
  };

  const gameModes = ["solo", "duo", "squad", "solo-fpp", "duo-fpp", "squad-fpp"];

  return (
    <FadeIn>
      <div
        style={{ backgroundImage: `url(${pubgBackgroundImage})`, backgroundSize: "150%" }}
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
            <p className="text-gray-300 font-bold text-3xl">PUBG Player Stats</p>
          </div>
          <div className="border-4 border-gray-950 w-full p-4 rounded-xl bg-gray-900 opacity-90 flex flex-col space-y-4">
            <p className="text-gray-300 font-bold text-3xl">What platform are you on?</p>
            <div className="flex flex-row w-full space-x-2">
              {platform === "xbox" ? (
                <button
                  onClick={() => setPlatform("xbox")}
                  className="bg-blue-500 text-white h-10 w-32 rounded-xl font-bold p-2"
                >
                  Xbox
                </button>
              ) : (
                <button
                  onClick={() => setPlatform("xbox")}
                  className="bg-gray-700 text-white h-10 w-32 rounded-xl font-bold p-2"
                >
                  Xbox
                </button>
              )}

              {platform === "psn" ? (
                <button
                  onClick={() => setPlatform("psn")}
                  className="bg-blue-500 text-white h-10 w-32 rounded-xl font-bold p-2"
                >
                  Playstation
                </button>
              ) : (
                <button
                  onClick={() => setPlatform("psn")}
                  className="bg-gray-700 text-white h-10 w-32 rounded-xl font-bold p-2"
                >
                  Playstation
                </button>
              )}

              {platform === "steam" ? (
                <button
                  onClick={() => setPlatform("steam")}
                  className="bg-blue-500 text-white h-10 w-32 rounded-xl font-bold p-2"
                >
                  Steam
                </button>
              ) : (
                <button
                  onClick={() => setPlatform("steam")}
                  className="bg-gray-700 text-white h-10 w-32 rounded-xl font-bold p-2"
                >
                  Steam
                </button>
              )}
            </div>
          </div>

          <div className="border-4 border-gray-950 w-full p-4 rounded-xl bg-gray-900 opacity-90 flex flex-col space-y-4">
            <p className="text-gray-300 font-bold text-3xl">What is your username?</p>
            <p className="text-gray-300 font-bold text-lg">Example Username: {exampleUsername}</p>
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
                placeholder={exampleUsername}
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

        <div className="w-1/2 p-10 text-gray-300 flex items-center justify-center">
          {userData && (
            <div className="max-h-[90vh] overflow-auto">
              <div className="grid grid-cols-3 gap-4 border-4 border-gray-950 p-4 rounded-xl bg-gray-900 opacity-90">
                {gameModes.map((mode) => (
                  <div
                    key={mode}
                    className="flex flex-col p-6 rounded-xl bg-gray-950 border-4 border-gray-700 text-gray-300 space-y-2"
                  >
                    <p className="text-2xl font-bold text-left underline">{`${
                      mode.charAt(0).toUpperCase() + mode.slice(1)
                    } Game Stats:`}</p>
                    <p>{`Wins: ${userData[mode].wins}`}</p>
                    <p>{`Losses: ${userData[mode].losses}`}</p>
                    <p>{`Win/Loss Ratio: ${(userData[mode].wins / userData[mode].losses).toFixed(2)}`}</p>
                    <p>{`Kills: ${userData[mode].kills}`}</p>
                    <p>{`Deaths: ${userData[mode].roundsPlayed - userData[mode].wins}`}</p>
                    <p>{`K/D Ratio: ${(
                      userData[mode].kills /
                      (userData[mode].roundsPlayed - userData[mode].wins)
                    ).toFixed(2)}`}</p>
                    <p>{`Average Survival Time: ${(
                      userData[mode].timeSurvived /
                      userData[mode].roundsPlayed /
                      60
                    ).toFixed(2)} minutes`}</p>
                    <p>{`Distance Covered: ${(
                      (userData[mode].walkDistance + userData[mode].rideDistance + userData[mode].swimDistance) /
                      1000
                    ).toFixed(2)} km`}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default Pubg;
