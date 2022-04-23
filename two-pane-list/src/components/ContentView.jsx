const ContentView = ({ contents }) => {
  return (
    <div className="column title-content">
      {contents.map((item, index) => (
        <div className="block" key={index}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentView;
