import MainSidebar from "../Components/Sidebar/MainSidebar";
import Feed from "../Feed/Feed";

function HomePage() {
  return (
    <div className="flex w-full h-full">
      <MainSidebar />
      <Feed />
    </div>
  );
}

export default HomePage;