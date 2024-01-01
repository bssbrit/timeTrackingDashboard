const Stuff = (data) => {
  const dataArr = data.data;
  return (
    <div>
      <button
        onClick={() => {
          console.log(dataArr[0].timeframes.daily.current);
        }}
      >
        Test
      </button>
      <ul>
        {dataArr.map((item) => (
          <div>
            <p key={item.id}>{item.title}</p>
            <p>{dataArr[0].timeframes.daily.current}</p>

            <p>{dataArr[0].timeframes.daily.previous}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Stuff;
