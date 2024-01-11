"use client";
import WithSubnavigation from "./components/navbar/NavBar";
import Button from "./components/inputs/Button";
import { ChevronRightIcon, Icon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useAuthContext } from "./context/AuthContext";

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

  return (
    <>
      <WithSubnavigation />
      <div className="flex flex-col h-[calc(100vh-4rem)] min-w-screen">
        <div className="flex flex-col min-w-full bg-ftnal-grey px-8 md:px-36 py-14 md:pt-28 md:pb-20">
          <p className="text-h2-l md:text-h1-l text-brand-yellow tracking-wide">
            About NFS and MEDUSA
          </p>
          <p className="text-body-s mb-5 md:mb-10 md:text-body-l text-ftnal-black tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <Button colour="brand-yellow">Read More</Button>
        </div>
        <div className="flex flex-col grow min-w-full">
          <div className="flex min-h-[3rem] bg-brand-blue justify-center items-center">
            <p className="text-ftnal-white text-h3-s tracking-wide">
              Our Projects
            </p>
          </div>

          <div className="flex flex-col grow min-w-full md:flex-row">
            <div className="flex flex-col grow md:min-h-full px-8 py-20 bg-ftnal-black md:w-1/2">
              <p className="text-right relative bottom-[3.50rem] text-ftnal-white text-body-s transition-colors hover:cursor-pointer hover:text-ftnal-lightgrey md:text-body-l">
                User Guides
              </p>
              <p className="group text-ftnal-white text-h3-s md:text-h3-l hover:cursor-pointer hover:text-ftnal-lightgrey transition-colors">
                Crypto Fraud Detection{" "}
                <a href="/projects/crypto-fraud-detection">
                  <Icon
                    className="relative w-5 h-5 group-hover:translate-x-1 transition-transform"
                    as={ChevronRightIcon}
                  />
                </a>
              </p>
              <p className="text-ftnal-white text-body-s md:text-body-l">
                Brief Description
              </p>
            </div>
            <div className="flex flex-col grow md:min-h-full px-8 py-20 bg-ftnal-darkgrey md:w-1/2 transition-colors">
              <p className="text-right relative bottom-[3.50rem] text-ftnal-white text-body-s hover:cursor-pointer hover:text-ftnal-lightgrey transition-colors md:text-body-l">
                User Guides
              </p>
              <p className="group text-ftnal-white text-h3-s md:text-h3-l hover:cursor-pointer hover:text-ftnal-lightgrey transition-colors">
                News Headline Sentiment{" "}
                <a href="/projects/news-sentiment-analysis">
                  <Icon
                    className="relative w-5 h-5 group-hover:translate-x-1 transition-transform"
                    as={ChevronRightIcon}
                  />
                </a>
              </p>
              <p className="text-ftnal-white text-body-s md:text-body-l">
                Brief Description
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
