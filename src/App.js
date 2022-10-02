import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutBuilder from './Pages/WorkoutBuilder';
import CustomThemeProvider from './CustomThemeProvider';

function App() {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/workout-builder'
            element={<WorkoutBuilder></WorkoutBuilder>}
          />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
