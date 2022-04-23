const LeftDrawer = ({ titles = [], onSelectedIndexChanged }) => {
  const onChangeIndex = (index) => () => {
    onSelectedIndexChanged(index);
  };

  return (
    <div className="column is-one-quarter menu-container">
      <aside className="menu">
        <p className="menu-label">Titles</p>
        <ul className="menu-list">
          {titles.map((item, index) => (
            <li onClick={onChangeIndex(index)} key={index}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default LeftDrawer;
