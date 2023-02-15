function MainContent() {
  return <h1>I'm learning React !!</h1>;
}

function List() {
  return (
    <ul>
      <li>One</li>
      <li>Two</li>
    </ul>
  );
}

ReactDOM.render(
  <div>
    <MainContent />
    <List />
  </div>,
  document.getElementById("root")
);
