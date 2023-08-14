import { FaCircle } from "react-icons/fa";

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <FaCircle size={10} className="text-gray-700 animate-bounced" />
    </div>
  );
};

export default loading;
