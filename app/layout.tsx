import "@/app/ui/global.css";
import { inter, zcool_xiaowei } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${zcool_xiaowei.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
