import React, {useState} from 'react'
import {User, Lock, Mail} from 'lucide-react'

function Login() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Remember Me:", rememberMe);
    };

  return (
    <div>
      <div>
        <img 
        src="" 
        alt="" />
        <h2>Inicio de sesión</h2>
      </div>
      <form onSubmit={ handleSubmit}>
        <div>
            <label htmlFor="email-address">Correo electronico</label>
            <div>
                <User/>
                <input 
                 id="email-address"
                 name="email"
                 type="email"
                 autoComplete="email"
                 required
                 placeholder="Correo electrónico"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 />
    </div>
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <div>
            <Lock />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div>
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">
              Recuérdame
            </label>
          </div>

          <div>
            <a href="#">
              ¿Has olvidado la contraseña?
            </a>
          </div>
        </div>

        <div>
          <button type="submit">
            Ingresar
          </button>
        </div>

        <div>
          <div>
            <span>O</span>
          </div>

          <div>
            <button type="button">
              <Mail />
              Iniciar sesión con Google
            </button>
          </div>
        </div>
      </form>

      <p>
        ¿No tienes cuenta?{' '}
        <a href="#">
          Regístrate
        </a>
      </p>
    </div>
  );
}

export default Login
