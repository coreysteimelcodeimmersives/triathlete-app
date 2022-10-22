import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutBuilder from './Pages/WorkoutBuilder';
import CustomThemeProvider from './CustomThemeProvider';
import WorkoutDetails from './Pages/WorkoutDetails';
import store from './Redux-State/Store';
import { Provider } from 'react-redux';
import SignIn from './Pages/SignIn';
import WorkoutLibrary from './Pages/WorkoutLibrary';
import AthleteLibrary from './Pages/AthleteLibrary';
import WorkoutLibraryFilter from './Pages/WorkoutLibraryFilter';
import WoTuner from './Pages/WoTuner';
import Settings from './Pages/Settings';
import RegisterUser from './Pages/RegisterUser';
import WeekCalendar from './Pages/WeekCalendar';

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/workout-builder' element={<WorkoutBuilder />} />
            <Route path='/workout-details' element={<WorkoutDetails />} />
            <Route path='/workout-library' element={<WorkoutLibrary />} />
            <Route path='/athlete-library' element={<AthleteLibrary />} />
            <Route path='/edit-workout' element={<WorkoutBuilder />} />
            <Route
              path='/workout-library-filter'
              element={<WorkoutLibraryFilter />}
            />
            <Route path='/wo-tuner' element={<WoTuner />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/register-user' element={<RegisterUser />} />
            <Route path='/calendar-week' element={<WeekCalendar />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;
