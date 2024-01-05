import ellipsisIcon from "../../assets/images/icon-ellipsis.svg";
const Stuff = (data) => {
  const dataArr = data.data;

  if (dataArr != null) {
    return (
      <div id="info">
        {dataArr.map((item) => (
          <div
            key={item.id}
            className="bigActivity"
            id={item.title.split(" ").join("_")}
          >
            <div key={item.id} className="activities">
              <p key={item.id}>
                {item.title}
                <p>
                  <img src={ellipsisIcon} alt="" />
                </p>
              </p>
              <p key={item.id}>{item.timeframes.current}hrs</p>

              <p key={item.id}>
                Last{" "}
                {item.choosenTime.charAt(0).toUpperCase() +
                  item.choosenTime.slice(1)}{" "}
                - {item.timeframes.previous}hrs
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  } else return <div>No Tasks done</div>;
};

export default Stuff;
