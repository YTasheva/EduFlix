import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../Assets/Home/Images";
import Container from "./Container";

// Sets the "active" class on the appropriate navigation link item
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-2 z-40">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-4 items-center">
            <img className="h-[40px] w-[120px]" src={logo} alt="Workflow" />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/"
                >
                  Home
                </Link>
               
export default Navbar;
