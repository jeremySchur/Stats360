import { Link } from "react-router-dom";

interface Props {
  name: string;
  image: string;
}

const GameCard = ({ name, image }: Props) => {
  return (
    <Link
      to={`${import.meta.env.BASE_URL}${name}`}
      className="h-[35vh] overflow-hidden flex justify-center items-center hover:transform hover:scale-105 transition-transform duration-300 rounded-3xl"
    >
      <img className="w-[80vh] rounded-3xl" src={image} />
    </Link>
  );
};

export default GameCard;
