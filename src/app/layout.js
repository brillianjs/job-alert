import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";
// app/layout.js
export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
