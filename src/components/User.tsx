import { Suspense } from "react";
import { Repo } from "./Repo";
import {cookies,headers} from 'next/headers'

export async function User(){
  
  const userCookies = cookies().getAll();
  const userHeaders = headers().entries();

  return (
    <div>
      <h1>User</h1>
      <pre>
      {JSON.stringify(userCookies,null,2)}
      {JSON.stringify(userHeaders,null,2)}
      </pre>
      <Suspense fallback={<>Carregando Repo</>}>
        <Repo/>
      </Suspense>
      
    </div>
  )
}