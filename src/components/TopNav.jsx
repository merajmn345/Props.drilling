function TopNav(props) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      {props.username}
    </div>
  );
}
export default TopNav;
