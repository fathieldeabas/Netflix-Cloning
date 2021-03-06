import { Route, Redirect, Switch } from "react-router-dom";
import { HomeIn } from "./pages/Hani/Home";
import { HomeOut } from "./pages/Manar/HomeOut";
import{Login} from "./pages/Fathi/Login/index.jsx"
import{Logout}from "./pages/Fathi/Logout/index"
import{SignUp} from "./pages/Fathi/signup/index"
import { Movies } from './pages/Hani/Movies/index';
import { TvShows } from './pages/Hani/TvShows/index';
import { TermsOfUse } from "./pages/Hani/TermsOfUse";
import { ProtectedRoute } from "./components/Fathi/protectedroute/index";
import { Profile } from './pages/Hani/Profile/index';
import { MovieDetails } from './pages/Mohamed/MovieDetails/index';
import { Preview } from './pages/Hani/Preview/index';
import { About } from './pages/Hani/About/index';
import { MyList } from "./pages/Hani/MyList";
import { Search105 } from "./pages/Hani/Search105";

export const App = () => {
  return (
    <>
        <Switch>

        <Route path="/login">
          <Login/>
        </Route> 

        <Route path="/logout">
          <Logout/>
        </Route>

        <Route path="/signup">
          <SignUp/>
        </Route>

        <ProtectedRoute path="/details">
          <MovieDetails />
        </ProtectedRoute>
        
        <ProtectedRoute path="/about">
          <About />
        </ProtectedRoute>

        <ProtectedRoute path="/homein">
          <HomeIn />
        </ProtectedRoute>

        <ProtectedRoute path="/movies">
          <Movies />
        </ProtectedRoute>

        <ProtectedRoute path="/tvshows">
          <TvShows />
        </ProtectedRoute>

        <ProtectedRoute path="/terms">
          <TermsOfUse />
        </ProtectedRoute>

        <ProtectedRoute path="/mylist">
          <MyList />
        </ProtectedRoute>

        <ProtectedRoute path="/preview">
          <Preview/>
        </ProtectedRoute>   

        <ProtectedRoute path="/profile">
          <Profile/>
        </ProtectedRoute>
        
        <Route path="/">
          <HomeOut />
        </Route>

        <ProtectedRoute path="/">
          <Redirect to="/homein" />
        </ProtectedRoute>

        </Switch>
    </>
  );
};
