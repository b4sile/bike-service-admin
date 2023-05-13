import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import './loginPage.css';
import { Button, TextField } from '@mui/material';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();
  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login({ email, password }).catch(() => notify('Invalid email or password'));
  };

  return (
      <div className="wrapper">
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '300px',
            height: '200px',
          }}
          onSubmit={submit}
        >
          <TextField
            variant="filled"
            name="email"
            label="Почта"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="filled"
            label="Пароль"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button color="primary" variant="contained" type="submit">
            Войти
          </Button>
        </form>
				<Notification />
      </div>
  );
};