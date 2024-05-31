// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ThemeContext } from './components/theme_context';
import MiddleColumn from './components/middle_column';

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <main className={theme}>
        <MiddleColumn isChannel={false} />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
