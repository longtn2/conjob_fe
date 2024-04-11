import Category from "pages/Admin/Category/Category";
import LayoutApp from "layout/Layout";
import { Route, Routes } from "react-router-dom";
import Post from "../src/pages/Admin/PostManage/Post";
import "layout/main.css";
import { GlobalStyle } from "style/RootStyle.styled";
import "layout/main.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route path="category" element={<Category />} />
          <Route path="post" element={<Post />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
