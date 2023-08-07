import { useState } from 'react';

interface LoginProps {
  onSubmit: ({
    username,
    password
  }: {
    username: string;
    password: string;
  }) => void;
}

export default function Login ({ onSubmit }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} data-testid="loginForm">
      <h3>Login</h3>
      <label>
        Username
        <input
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          data-testid="loginForm-username"
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          data-testid="loginForm-password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
