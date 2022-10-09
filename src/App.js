import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutBuilder from './Pages/WorkoutBuilder';
import CustomThemeProvider from './CustomThemeProvider';
import WorkoutDetails from './Components/WorkoutCard/WorkoutDetails';
import WorkoutContextProvider from './Context/WorkoutContext';
import store from './Redux-State/Store';
import { Provider } from 'react-redux';
import SignIn from './Pages/SignIn';
import WorkoutLibrary from './Pages/WorkoutLibrary';
import AthleteLibrary from './Pages/AthleteLibrary';

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <WorkoutContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/workout-builder' element={<WorkoutBuilder />} />
              <Route path='/workout-details' element={<WorkoutDetails />} />
              <Route path='/workout-library' element={<WorkoutLibrary />} />
              <Route path='/athlete-library' element={<AthleteLibrary />} />
            </Routes>
          </BrowserRouter>
        </WorkoutContextProvider>
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;
