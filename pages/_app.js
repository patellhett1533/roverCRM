import React, { usRouter, useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import "@/styles/globals.css";
import "boxicons/css/boxicons.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Header from "@/components/header";

export default function App({ Component, pageProps }) {
  const [isAlter, setIsAlter] = useState(false);
  return (
    <ChakraProvider>
      <div className="md:flex overflow-hidden h-full fixed w-full">
        <Sidebar value={isAlter} change={setIsAlter} />
        <div className="flex flex-col overflow-y-scroll h-full">
          <Header value={isAlter} change={setIsAlter} />
          <Component {...pageProps} />
        </div>
      </div>
    </ChakraProvider>
  );
}
