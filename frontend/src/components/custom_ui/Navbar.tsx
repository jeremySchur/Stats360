import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center h-[10vh] space-x-4">
      <Link
        to={`${import.meta.env.BASE_URL}home`}
        className="hover:bg-gray-200 p-2 rounded-lg transition-colors duration-500"
      >
        <p className="text-lg font-bold">Home</p>
      </Link>
    </div>
  );
}
