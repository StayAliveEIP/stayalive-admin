import Image from "next/image";

export default function dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {process.env.API_URL}
    </main>
  );
}