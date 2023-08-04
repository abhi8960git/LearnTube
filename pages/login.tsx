import { createClient } from "@supabase/supabase-js";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const supabase = createClient(
  "https://srxsligqrqrcoarorkxb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyeHNsaWdxcnFyY29hcm9ya3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMzQxODEsImV4cCI6MjAwNjcxMDE4MX0.KeE2l-278UVosmYiCjGXocpD1-pWfJ-Hsb6XPDmv0hE"
)

import React from 'react'

const login = () => {
  const router = useRouter()
  supabase.auth.onAuthStateChange(async (event: any, session: any) => {
    if (event === "SIGNED_IN") {
      Cookies.set("loggedin", "true");
      router.push('/');

    } else if (event === "SIGNED_OUT") {
      Cookies.remove("loggedin");
      router.push('/');
    }
  });

  return (
    <div className="mt-[60px]">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    </div>
  );
};

export default login;
