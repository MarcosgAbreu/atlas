import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  let loggedIn = false;

  try {
    const supabase = createServerComponentClient({cookies})
    const { 
      data: { session },
    } = await supabase.auth.getSession

    if (session) redirect("/user-app")

  } catch (error) {
    console.log("Home" + error)
  }

  return (
    <div className="text-lime-700">home</div>
  );
}
