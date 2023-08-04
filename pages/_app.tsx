// pages/_app.js

import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { createClient } from "@supabase/supabase-js";
import Cookies from 'js-cookie';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const supabase = createClient(
    "https://srxsligqrqrcoarorkxb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyeHNsaWdxcnFyY29hcm9ya3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMzQxODEsImV4cCI6MjAwNjcxMDE4MX0.KeE2l-278UVosmYiCjGXocpD1-pWfJ-Hsb6XPDmv0hE"
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = () => {
    const loggedIn = Cookies.get('loggedin') === 'true';
    setIsLoggedIn(loggedIn);
  };

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    Cookies.set('loggedin','false');
    window.location.href = '/'; // Redirect the user to the homepage after sign-out
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} signOutUser={signOutUser} />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
