import type { ReactNode } from "react";
export const metadata = { title: "CIRCE", description: "Your daily nutrition and movement tracker." };
export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
