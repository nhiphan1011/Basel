import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/layouts';
import { PublicRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            {PublicRoutes.map((route, index) => {
              const Element = route.element
              return <Route key={index} path={route.path} element={<Element />} ></Route>
            })}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
