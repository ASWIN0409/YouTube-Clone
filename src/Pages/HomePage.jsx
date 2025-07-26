import MainSidebar from "../Components/Sidebar/MainSidebar";
import Feed from "../Feed/Feed";

function HomePage() {
  return (
    <div className="flex w-full h-full">
      <div className="basis-[2%]">
        <MainSidebar />
      </div>
      <div className="basis-[98%]">
        <Feed />
      </div>

    </div>
  );
}

export default HomePage;