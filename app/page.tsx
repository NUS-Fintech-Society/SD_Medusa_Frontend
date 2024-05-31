"use client";
import WithSubnavigation from "./components/navbar/NavBar";
import Button from "./components/inputs/Button";
import { ChevronRightIcon, Icon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useAuthContext } from "./context/AuthContext"; 
import Image from "next/image";

export default function Home() {
  const [idToken, setIdToken] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [cookie, setCookie] = useCookies(["id_token", "access_token"]);
  const { setUserInfo, setIsLoggedIn, isLoggedIn } = useAuthContext();

  useEffect(() => {
    const arr = window.location.href.split("#");
    if (arr.length > 1) {
      const tokens = arr[1].split("&");
      const id_token = tokens[0].split("=")[1];
      const access_token = tokens[1].split("=")[1];
      setIdToken(id_token);
      setAccessToken(access_token);
    }
  }, []);

  useEffect(() => {
    const sendRequest = async () => {
      const res = await axios.get(
        "https://medusa.auth.ap-southeast-1.amazoncognito.com/oauth2/userInfo",
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      //   console.log(res.data);
      const { username, email, name } = res.data;
      setUserInfo({ username: name, email, userId: username });
      setIsLoggedIn(true);
    };

    if (!isLoggedIn && idToken && accessToken) {
      setCookie("id_token", idToken, { path: "/" });
      setCookie("access_token", accessToken, { path: "/" });
      sendRequest();
    }
  }, [idToken, accessToken]);

  // go to read more page
  const handleReadMore = () => {
    window.location.href = "/read-more";
  };

  return (
    <>
      <WithSubnavigation />
      <div className="flex flex-col h-[calc(100vh-4rem)] min-w-screen">

        <div className="flex sm:flex-row flex-col">
          <div className="flex flex-1">
            <div className="flex flex-col min-w-full bg-ftnal-grey px-4 md:px-12 py-12 md:pt-24 md:pb-16">
              <p className="text-h2-l md:text-h1-l text-brand-yellow tracking-wide text-left">
                About NFS and MEDUSA
              </p>
              <p className="text-body-s mb-5 md:mb-10 md:text-body-l text-ftnal-black tracking-wide text-left">
              Medusa was developed to address a fundamental challenge: making NUS Fintech Society’s 
              diverse range of projects, particularly in machine learning and blockchain, available to any interested party in an integrated platform.{" "}
              </p>
              <Button colour="brand-yellow" onClick={handleReadMore}>Read More</Button>
            </div>
          </div>
          <div className="flex-1 flex items-center ">
            <Image
                alt="About Us Image"
                height="200"
                width="900"
                src="/images/about-nfs.png"
                className="md:w-[800px] md:h-[390px]"
            />
          </div>

        </div>

        <div className="flex flex-col grow min-w-full">
          <div className="flex min-h-[3rem] bg-brand-blue justify-center items-center">
            <p className="text-ftnal-white text-h3-s tracking-wide">
              Our Projects
            </p>
          </div>

          <div className="flex flex-col grow min-w-full md:flex-row">
            <div className="flex flex-col grow md:min-h-full px-8 py-20 bg-ftnal-black md:w-1/2 bg-[url('/images/crypto-fraud-detection.png')] bg-cover">
              <p className="text-right relative bottom-[3.50rem] text-ftnal-white text-body-s transition-colors hover:cursor-pointer hover:text-ftnal-lightgrey md:text-body-l">
                User Guides
              </p>
              <p className="group text-ftnal-white text-h3-s md:text-h3-l hover:cursor-pointer hover:text-ftnal-lightgrey transition-colors">
                <a href="/projects/crypto-fraud-detection">
                Crypto Fraud Detection{" "}
                  <Icon
                    className="relative w-5 h-5 group-hover:translate-x-1 transition-transform"
                    as={ChevronRightIcon}
                  />
                </a>
              </p>
              <p className="text-ftnal-white text-body-s md:text-body-l">

                An application whereby users can check whether an address is a potential fraudulent one before making the irreversible decision of sending crypto over to that address.

              </p>

            </div>
  
            <div className="flex flex-col grow md:min-h-full px-8 py-20 bg-ftnal-darkgrey md:w-1/2 transition-colors bg-[url('/images/news-headline-sentiment.png')] bg-cover bg-no-repeat">
              <p className="text-right relative bottom-[3.50rem] text-black text-body-s hover:cursor-pointer hover:text-ftnal-lightgrey transition-colors md:text-body-l">
                User Guides
              </p>

              <p className="group text-black text-h3-s md:text-h3-l hover:cursor-pointer hover:text-ftnal-lightgrey transition-colors">
                News Headline Sentiment{" "}

                <a href="/projects/news-sentiment-analysis">
                News Headline Sentiment{" "}
                  <Icon
                    className="relative w-5 h-5 group-hover:translate-x-1 transition-transform"
                    as={ChevronRightIcon}
                  />
                </a>
              </p>

              <p className="text-black text-body-s md:text-body-l">
                An application to explore how the sentiment of news articles on certain stocks can impact their performance across different time horizons.

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
