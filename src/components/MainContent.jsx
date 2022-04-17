import { useState } from "react";
import Page from "./Page";
import TopNav from "./TopNav";

function MainContent() {
  const [username, setUsername] = useState("Meraj");
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <TopNav username={username} />
      <Page username={username} setUsername={setUsername} />
    </div>
  );
}
export default MainContent;
