const Stuff = (data) => {
  const dataArr = data.data;
  return (
    <div>
      <ul>
        {dataArr.map((item) => (
          <div key={item.id}>
            <p key={item.id}>{item.title}</p>
            <p key={item.id}>{item.timeframes.daily.current}hrs</p>

            <p key={item.id}>Last Week - {item.timeframes.daily.previous}hrs</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Stuff;
