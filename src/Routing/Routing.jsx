import { Routes, Route } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import HomePage from "../Pages/HomePage";
import VideoPage from "../Pages/VideoPage";

function Routing() {
    return (
        <Routes>
            <Route path="/" element= {<MainLayout />}>
                <Route index element= {<HomePage />}/>
                <Route path="/video/:categoryId/:videoId" element= {<VideoPage />}/>
            </Route>
        </Routes>
    );
}

export default Routing;