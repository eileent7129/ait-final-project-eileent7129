import Link from "next/link";
import Navbar from "./Navbar"
export default function RootLayout({children}){
	return (
		<>
		<Navbar />
		{children}
		</>
	)
}