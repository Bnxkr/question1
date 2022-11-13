import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button href="/onboarding1">Skip</button>
    </div>
  )
}
