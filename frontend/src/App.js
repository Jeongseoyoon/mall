import root from "./router/root";
const { RouterProvider } = require("react-router-dom");


function App() {
  return (
  <RouterProvider router={root}/>
  );
}

export default App;
