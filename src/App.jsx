import { useMediaQuery } from "react-responsive";
import DesktopLayout from "./layouts/desktop/DesktopLayout";
import TabletLayout from "./layouts/tablet/TabletLayout";
import MobileLayout from "./layouts/mobile/MobileLayout";
import "./App.css";

const App = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  return (
    <div>
      {isDesktop ? (
        <DesktopLayout />
      ) : isTablet ? (
        <TabletLayout />
      ) : (
        <MobileLayout />
      )}
    </div>
  );
};

export default App;
