const Main = ({ task, setTask, switch1, setswicth1 }) => {
  const HandleSubmit = () => {};
  return (
    <div className="app-main">
      <form onSubmit={HandleSubmit}>
        <input
          placeholder="What is your next task"
          name="task"
          type="text"
          value={task}
          onChange={(event) => {
            const value = event.target.value;
            setTask(value);
          }}
        />
        <input
          type="submit"
          value="Submit"
          onClick={() => {
            {
              task !== ""
                ? setswicth1(true)
                : alert("vous devez remplir au moins un chant");
            }
          }}
        />
      </form>
    </div>
  );
};

export default Main;
