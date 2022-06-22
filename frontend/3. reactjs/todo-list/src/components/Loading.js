import { AiOutlineLoading } from "react-icons/ai";

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-container">
      <AiOutlineLoading size={24} color="dodgerblue" />
    </div>
  );
};

export default Loading;
