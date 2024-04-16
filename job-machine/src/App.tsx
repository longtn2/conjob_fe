import { RouterProvider } from 'react-router-dom';
import { router } from './routers/route';

const App = () => {
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       fontFamily: 'Roboto',
    //     },
    //   }}
    // >
    <>
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path='/' element={<NotAuth />}>
          <Route path='/login' element={<AuthPage />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<AdminRoute />}>
          <Route path='/' element={<LayoutApp />}>
            <Route path='category' element={<Category />} />
            <Route path='post' element={<Post />} />
          </Route>
        </Route>
      </Routes> */}
    </>
    // </ConfigProvider>
  );
};

export default App;
