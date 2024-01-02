const Stuff = (data) => {
  const dataArr = data.data;

  if (dataArr != null) {
    return (
      <div>
        <ul>
          {dataArr.map((item) => (
            <div key={item.id}>
              <p key={item.id}>{item.title}</p>
              <p key={item.id}>{item.timeframes.current}hrs</p>

              <p key={item.id}>
                Last{" "}
                {item.choosenTime.charAt(0).toUpperCase() +
                  item.choosenTime.slice(1)}{" "}
                - {item.timeframes.previous}hrs
              </p>
            </div>
          ))}
        </ul>
      </div>
    );
  } else return <div>No Tasks done</div>;
};

export default Stuff;
