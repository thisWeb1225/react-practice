import { createContext, useContext, useState } from 'react';
import './DarkmodeLogin.css';
import ToggleThemeBtn from '../components/ToggleThemeBtn';

import { ThemeContext } from '../contexts/theme-context';

const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState({ name: '' });

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
          <ToggleThemeBtn onClick={handleClick} theme={theme} />
          <div className="login" id={theme}>
            <h1 className="login__title">{theme}</h1>
            {currentUser.name !== '' ? <Greeting /> : <LoginForm />}
          </div>
        </CurrentUserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

function Greeting() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const logOut = () => {
    setCurrentUser({
      name: '',
    });
  };
  return (
    <>
      <p>Hello</p>
      <h2>{currentUser.name}</h2>
      <Button onClick={logOut}>Log out</Button>
    </>
  );
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName !== '' && lastName !== '';

  const LogIn = () => {
    if (!canLogin) return;
    setCurrentUser({
      name: firstName + ' ' + lastName,
    });
  };

  return (
    <>
      <section title="Welcome" className="login__form">
        <label>
          First name
          <input
            className="login__input"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last name{': '}
          <input
            className="login__input"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <Button onClick={LogIn}>Log in</Button>
      </section>
    </>
  );
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={`${className} login__formBtn`} onClick={onClick}>
      {children}
    </button>
  );
}
