import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { useState } from 'react';
import ThemeContext from './components/theme_context';
import LeftColumn from './components/left_column';
import MiddleColumn from './components/middle_column';

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <main className={theme}>
        <LeftColumn />
        <MiddleColumn isChannel={false} />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
