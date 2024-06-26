import SidebarComponent from "@/components/SidebarComponent";
import "./globals.css";
import { Provider } from "@/context/provider";
import NavbarComponent from "@/components/NavbarComponent";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-SFProDisplay">
        <Provider>
	        {children}
        </Provider>
      </body>
    </html>
  );
}
