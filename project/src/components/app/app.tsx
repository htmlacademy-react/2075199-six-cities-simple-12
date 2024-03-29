import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'const';
import { MainPage, LoginPage, OfferPage, NotFoundPage } from 'pages';
import { LoadingScreen, ScrollTop } from 'components';
import { useAppSlector } from 'hooks/state';
import { getLoadingStatus } from 'store/offers/selectors';

function App(): JSX.Element {
  const isOffersLoading = useAppSlector(getLoadingStatus);

  if (isOffersLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />}/>
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path ={AppRoute.Room}>
          <Route path=':id' element={<OfferPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
