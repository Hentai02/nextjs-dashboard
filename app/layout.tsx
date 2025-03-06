import "@/app/ui/global.css";
import { lusitana } from "@/app/ui/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
