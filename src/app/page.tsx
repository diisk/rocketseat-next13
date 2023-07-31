import { User } from "@/components/User";
import Link from "next/link";
import { useRouter,usePathname,/*tem varias diferente pra usar*/ } from "next/navigation";

export const metadata = {
  title: 'Home'
}

export default function Home() {
  //const {} = useRouter();//usado para roteamento por ação do usuário
  return (
    <div>
      <h1>Home</h1>
      <Link href='/app'>Dashboard</Link>
      <User/>
    </div>
  )
}
