import React, { useState } from "react";
import Header from "./components/Header/Header";
import MapComponent from "./components/MapComponent/MapComponent";
import { MagnifyingGlass } from "react-loader-spinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="font-rubik h-screen">
      <Header setIsLoading={setIsLoading} isLoading={isLoading} />
      {isLoading && (
        <div className="w-full h-screen relative">
          <MagnifyingGlass
            visible={true}
            height={80}
            width={80}
            ariaLabel="magnifying-glass-loading"
            wrapperClass="magnifying-glass-wrapper absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3"
            wrapperStyle={{}}
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      )}
      <MapComponent />
    </div>
  );
}

export default App;
