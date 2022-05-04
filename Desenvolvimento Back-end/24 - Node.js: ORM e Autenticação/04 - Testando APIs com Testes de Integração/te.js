import React, { useState } from 'react'

function Login() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   return (
      <div className="login">
         <div className="login-right">
            <h1>Acessar App</h1>

            <div className="login-loginInputEmail">
               <input
                  type="email"
                  placeholder="Digite um email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </div>

            <div className="login-loginInputPassword">
               <input
                  placeholder="Digite sua senha"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
            </div>

            <button type="submit">
               Entrar
            </button>

            <h4>Não tenho conta!</h4>

            <button type="submit">
               Cadastrar
            </button>
         </div>
      </div>
   )
}

export default Login
