import { useFetch } from "./Hooks/useFetch";

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <h1>App</h1>
      {data && data.map((item) => <p key={item.id}>{item.title}</p>)}
    </>
  );
};

export default App;
