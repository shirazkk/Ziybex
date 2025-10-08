"use client";

import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

const GoogleReviewButton = () => {
  const reviewUrl =
    "https://www.google.com/search?sca_esv=7a9ba4e907545bf1&hl=en-PK&cs=1&sxsrf=AE3TifM27XhhqPXsJzjYpGyp2XzAEE5SHg:1759945142602&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E164DzCp1eMxM5gh7wu9tYkqiY_NskxC6U6tV2NEgZW880DG9ZEWg61uLTe4ZmBxx5qmmaq65aMpIwePW8ny1hMzOW4Q&q=Ziybex+Reviews&sa=X&ved=2ahUKEwj5-LHIkpWQAxW61gIHHSo0HqYQ0bkNegQIHxAD&biw=1280&bih=593&dpr=1.5#lrd=0xa638ae8e26d75047:0xdc2b6d19d43cc01f,3,,,,";

  return (
    <a href={reviewUrl} target="_blank">
      <Button className="bg-accent hover:bg-accent/90 p-2 text-white transition-transform hover:scale-105 shadow-md">
        Review Us on <FaGoogle className="w-5 h-5 " />
      </Button>
    </a>
  );
};

export default GoogleReviewButton;
