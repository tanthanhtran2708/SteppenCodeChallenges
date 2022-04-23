import { useState } from "react";
import EmptyView from "./components/EmptyView";
import LeftDrawer from "./components/LeftDrawer";
import ContentView from "./components/ContentView";

export const TwoPaneList = ({ data = [] }) => {
  const [selectedTitleIndex, setselectedTitleIndex] = useState(null);

  return (
    <div className="container">
      <div className="columns">
        <LeftDrawer
          titles={data.map((d) => d.title)}
          onSelectedIndexChanged={setselectedTitleIndex}
        />
        {selectedTitleIndex !== null ? (
          <ContentView contents={data[selectedTitleIndex].content} />
        ) : (
          <EmptyView />
        )}
      </div>
    </div>
  );
};
