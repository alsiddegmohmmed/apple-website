// app/layout.tsx
import "../styles/style.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Apple Mockup</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
