import { useState } from "react";

function Profile(props) {
  const [updatedUsername, setUpdatetdUsername] = useState("");

  return (
    <div style={{ marginTop: "30" }}>
      <input
        type="text"
        placeholder="username"
        value={updatedUsername}
        onChange={(e) => {
          setUpdatetdUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setUsername(updatedUsername);
        }}
      >
        Update Username
      </button>
    </div>
  );
}
export default Profile;
