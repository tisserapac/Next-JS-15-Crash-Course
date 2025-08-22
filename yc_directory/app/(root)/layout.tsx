import Navbar from "@/app/component/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sns">
      <Navbar />

      {children}
    </main>
  );
}
