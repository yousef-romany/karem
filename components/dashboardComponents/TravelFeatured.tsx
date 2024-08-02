"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { memo, useRef, useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { addDoc, collection } from "firebase/firestore";
import db from "@/utils/firestore";
import { Card, CardBody } from "@nextui-org/card";
import ListTravel from "./ListTravel";

import AddTravelCard from "./AddTravelCard";

const TravelFeatured = () => {
  
  return (
    <Accordion className="w-full">
      <AccordionItem key="1" aria-label="Add Travel" title="Add Travel">
        <AddTravelCard />
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Edite Or Delete Travel"
        title="Edite Or Delete Travel"
      >
        <ListTravel />
      </AccordionItem>
    </Accordion>
  );
};
export default memo(TravelFeatured);
