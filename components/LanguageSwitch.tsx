'use client'

import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import en from "@/public/england.png";
import sp from "@/public/spain.png";
import fr from "@/public/france.png";
import ger from "@/public/german.png";
import Image from "next/image";
interface LanguageDescriptor {
  name: string;
  title: string;
}
const COOKIE_NAME = "googtrans";
declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}
import { parseCookies, setCookie } from "nookies";

const LanguageSwitch = () => {
  let handleChangeLang = (e: any) => {
    setCurrentLanguage(e);
    setCookie(null, COOKIE_NAME, "/auto/" + e);
    window.location.reload();
  };
  let iconLanguageForDropDownTrigger = () => {
    if (currentLanguage === "en") {
      return (
        <Image
          src={en}
          alt="en"
          className="max-w-[26px] cursor-pointer"
          loading="lazy"
        />
      );
    } else if (currentLanguage === "es") {
      return (
        <Image
          src={sp}
          alt="en"
          className="max-w-[26px] cursor-pointer"
          loading="lazy"
        />
      );
    } else if (currentLanguage === "fr") {
      return (
        <Image
          src={fr}
          alt="en"
          className="max-w-[26px] cursor-pointer"
          loading="lazy"
        />
      );
    } else if (currentLanguage === "de") {
      return (
        <Image
          src={ger}
          alt="en"
          className="max-w-[26px] cursor-pointer"
          loading="lazy"
        />
      );
    } else {
      return null;
    }
  };
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  useEffect(() => {
    // 1. Read the cookie
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      // 2. If the cookie is defined, extract a language nickname from there.
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue, let's take a current language from the predefined defaultLanguage below.
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      // 4. Set the current language if we have a related decision.
      setCurrentLanguage(languageValue);
    }
  }, []);

  // Don't display anything if current language information is unavailable.
  if (!currentLanguage) {
    return null;
  }

  return (
    <>
      <Dropdown backdrop="blur">
        <DropdownTrigger>{iconLanguageForDropDownTrigger()}</DropdownTrigger>
        <DropdownMenu
          onAction={(e: any) => handleChangeLang(e)}
          variant="faded"
          aria-label="Static Actions"
        >
          <DropdownItem key="en">
            <div className="flex items-center gap-2">
              <Image
                src={en}
                alt="en"
                className="max-w-[26px] cursor-pointer"
                loading="lazy"
              />
              <h1 className="text-primary">English</h1>
            </div>
          </DropdownItem>
          <DropdownItem key="es">
            <div className="flex items-center gap-2">
              <Image
                src={sp}
                alt="en"
                className="max-w-[26px] cursor-pointer"
                loading="lazy"
              />
              <h1 className="text-primary">Español</h1>
            </div>
          </DropdownItem>
          <DropdownItem key="fr">
            <div className="flex items-center gap-2">
              <Image
                src={fr}
                alt="en"
                className="max-w-[26px] cursor-pointer"
                loading="lazy"
              />
              <h1 className="text-primary">Français</h1>
            </div>
          </DropdownItem>
          <DropdownItem key="de">
            <div className="flex items-center gap-2">
              <Image
                src={ger}
                alt="en"
                className="max-w-[26px] cursor-pointer"
                loading="lazy"
              />
              <h1 className="text-primary">Deutsch</h1>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export { LanguageSwitch, COOKIE_NAME };
