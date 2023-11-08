import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/product";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="products">
                        <Route index element={<ProductList />} />
                        <Route path="add"  />
                        <Route path="edit/:id"  />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;