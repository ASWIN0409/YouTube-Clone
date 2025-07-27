import Sidebar from "../Components/Sidebar/Sidebar";
import Feed from "../Feed/Feed";

function HomePage() {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default HomePage;