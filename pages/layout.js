import React from "react";
import Menu from "@/components/Menu";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";


export default function RootLayout({ children }){
  return(<>
      <Menu/>
      <Banner/>
      <div>{children}</div>
      <Footer/>
    </>
  );
}
