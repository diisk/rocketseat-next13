import Link from "next/link";

export const metadata = {
    title: 'App',
    template: '%s | Setado na app'
  }

export default function App(){
    return (
        <div>
            <h1>Dashboard</h1>
            <Link href='/'>Home</Link>
        </div>
    )
}