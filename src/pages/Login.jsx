import React, { Component, useState } from "react";
import { useNavigate } from "react-router";
import Api from "../api/api";
import { useAuth } from "../auth/auth";
import Cookies from 'universal-cookie';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [cookies, setCookie] = useCookies();

  const navigate = useNavigate();
  const auth = useAuth()
  const cookies = new Cookies();

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {email, password}

    try {
      const res = await Api.user.login(payload);
      const cookieValue = cookies.get('userId');
      console.log('res--', cookieValue, cookies);
      navigate('/')
      // toast.success('user added');
    } catch (e) {
      console.log('error---', e);
      // toast.error('User creation error');
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label className="px-3 pr-10">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder=" Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="px-3">Password:</label>
            <input
              type="password"
              className="form-control border-blue-500"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid bg-blue-400 w-20 rounded text-center">
            <button type="submit" className="btn btn-primary py-2 px-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}