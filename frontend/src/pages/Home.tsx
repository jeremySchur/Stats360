// import Navbar from "@/components/custom_ui/Navbar";
import FadeIn from "@/components/custom_ui/FadeIn";
import GameCard from "@/components/custom_ui/GameCard";
import pubgImage from "@/assets/pubg.jpg";
import leagueImage from "@/assets/league.jpg";
import battlefieldImage from "@/assets/battlefield2.jpg";
import dotaImage from "@/assets/dota2.jpg";

const gameData = [
  { name: "pubg", image: pubgImage },
  { name: "league", image: leagueImage },
  { name: "battlefield-2", image: battlefieldImage },
  { name: "dota-2", image: dotaImage },
];

const Home = () => {
  return (
    <FadeIn>
      <div className="grid grid-cols-2 gap-x-10 p-8 bg-gray-700 h-screen w-screen">
        {gameData.map((game, index) => (
          <div key={index} className="flex justify-center items-center">
            <GameCard name={game.name} image={game.image} />
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default Home;
