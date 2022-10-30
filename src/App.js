import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "./store";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogPost from "containers/pages/blog/BlogPost";
import Blog from "containers/pages/blog/Blog";
import BlogCategory from "containers/pages/blog/category/BlogCategory";
import Search from "containers/pages/Search";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import AllCategories from "components/blog/AllCategories";
import ErrorInProgress from "containers/errors/ErrorInProgress";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>}/>
          <Route path="/about/" element={<ErrorInProgress/>}/>
          <Route path="/contact/" element={<ErrorInProgress/>}/>

          <Route path="/" element={<Home/>}/>

          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/post/:slug" element={<BlogPost/>}/>
          <Route path="/blog/categories/" element={<FullWidthLayout><AllCategories/></FullWidthLayout>}/>
          <Route path="/blog/categories/:category_id" element={<BlogCategory/>}/>
          
          <Route path="/search/:term" element={<Search/>}/>



        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
