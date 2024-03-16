import {Inter} from 'next/font/google'
import AppHomePage from "@/pages/home";
const inter = Inter({subsets: ['latin']})
export default function Home() {
    return (
        <>
            <AppHomePage/>
        </>
    )
}
