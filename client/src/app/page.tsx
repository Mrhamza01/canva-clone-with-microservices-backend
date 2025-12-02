import Banner from "@/components/home/Banner";
import Header from "@/components/home/Header";
import Sidebar from "@/components/home/AppSidebar";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <SessionProvider>
        <Header />
      </SessionProvider>
      <main className="overflow-y-auto pt-20  ">
        <Banner />
      </main>
    </div>
  );
}
