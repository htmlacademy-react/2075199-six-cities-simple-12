import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from 'const';
import { MainPage, LoginPage, OfferPage, NotFoundPage } from 'pages';
import { LoadingScreen, ScrollTop } from 'components';
import { useAppSlector } from 'hooks/state';
import { getLoadingStatus } from 'store/offers/selectors';
import { getAuthorithationStatus } from 'store/user/selectors';

function App(): JSX.Element {
  const isOffersLoading = useAppSlector(getLoadingStatus);
  const authorizationStatus = useAppSlector(getAuthorithationStatus);

  if (isOffersLoading && authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />}/>
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path ={AppRoute.Room}>
          <Route path=':id' element={<OfferPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
