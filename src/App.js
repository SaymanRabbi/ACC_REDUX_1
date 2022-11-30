import { RouterProvider } from "react-router-dom";
import ProductProvider from "./Context/productProvider";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <ProductProvider>
      <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;
