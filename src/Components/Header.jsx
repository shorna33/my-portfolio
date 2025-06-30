"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Popover } from "antd";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "@/styles/home.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const sectionIds = [
    "home",
    "aboutMe",
    "experience",
    "education",
    "skills",
    "projects",
    "publications",
    "contactMe",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      let current = "home";

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        !scrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 py-4 flex justify-start md:justify-center items-center">
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link
            href="#home"
            className={`py-2 slo-mo hover:text-[#36507d] hover:border-b-3 hover:border-[#36507d] ${
              activeSection === "home"
                ? "text-[#36507d] border-b-3 border-[#36507d]"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="#aboutMe"
            className={`py-2 slo-mo hover:text-[#36507d] hover:border-b-3 hover:border-[#36507d] ${
              activeSection === "aboutMe"
                ? "text-[#36507d] border-b-3 border-[#36507d]"
                : ""
            }`}
          >
            About Me
          </Link>
          <Link
            href="#experience"
            className={`py-2 slo-mo hover:text-[#36507d] hover:border-b-3 hover:border-[#36507d] ${
              activeSection === "experience"
                ? "text-[#36507d] border-b-3 border-[#36507d]"
                : ""
            }`}
          >
            Experience
          </Link>
          <Link
            href="#education"
            className={`py-2 slo-mo hover:text-[#36507d] hover:border-b-3 hover:border-[#36507d] ${
              activeSection === "education"
                ? "text-[#36507d] border-b-3 border-[#36507d]"
                : ""
            }`}
          >
            Education
          </Link>
          <Link
            href="#skills"
            className={`py-2 slo-mo hover:text-[#36507d] hover:border-b-3 hover:border-[#36507d] ${
              activeSection === "skills"
                ? "text-[#36507d] border-b-3 border-[#36507d]"
                : ""
            }`}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`py-2 slo-mo hover:text-[#36507d] hover:border-b-3 hover:border-[#36507d] ${
              activeSection === "projects"
                ? "text-[#36507d] border-b-3 border-[#36507d]"
                : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="#publications"
            className={`py-2 slo-mo hover:text-[#36507d] hover:border-b-3 hover:border-[#36507d] ${
              activeSection === "publications"
                ? "text-[#36507d] border-b-3 border-[#36507d]"
                : ""
            }`}
          >
            Publication
          </Link>
          <Link
            href="#contactMe"
            className={`py-2 slo-mo hover:text-[#36507d] hover:border-b-3 hover:border-[#36507d] ${
              activeSection === "contactMe"
                ? "text-[#36507d] border-b-3 border-[#36507d]"
                : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Popover
          placement="bottomLeft"
          open={menuOpen}
          onOpenChange={(open) => setMenuOpen(open)}
          popupStyle={{ position: "fixed", zIndex: 1001 }}
          content={
            <div className="w-40 px-4 py-2">
              <Link
                href="#home"
                className={`block py-2 !text-gray-900 font-semibold hover:font-bold hover:!text-[#36507d] hover:border-b-3 hover:border-[#36507d] !transition-all !duration-200 !ease-in-out ${
                  activeSection === "home"
                    ? "text-[#36507d] border-b-3 border-[#36507d]"
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="#aboutMe"
                className={`block py-2 !text-gray-900 font-semibold hover:font-bold hover:!text-[#36507d] hover:border-b-3 hover:border-[#36507d] !transition-all !duration-200 !ease-in-out ${
                  activeSection === "aboutMe"
                    ? "text-[#36507d] border-b-3 border-[#36507d]"
                    : ""
                }`}
              >
                About Me
              </Link>
              <Link
                href="#experience"
                className={`block py-2 !text-gray-900 font-semibold hover:font-bold hover:!text-[#36507d] hover:border-b-3 hover:border-[#36507d] !transition-all !duration-200 !ease-in-out ${
                  activeSection === "experience"
                    ? "text-[#36507d] border-b-3 border-[#36507d]"
                    : ""
                }`}
              >
                Experience
              </Link>
              <Link
                href="#education"
                className={`block py-2 !text-gray-900 font-semibold hover:font-bold hover:!text-[#36507d] hover:border-b-3 hover:border-[#36507d] !transition-all !duration-200 !ease-in-out ${
                  activeSection === "education"
                    ? "text-[#36507d] border-b-3 border-[#36507d]"
                    : ""
                }`}
              >
                Education
              </Link>
              <Link
                href="#skills"
                className={`block py-2 !text-gray-900 font-semibold hover:font-bold hover:!text-[#36507d] hover:border-b-3 hover:border-[#36507d] !transition-all !duration-200 !ease-in-out ${
                  activeSection === "skills"
                    ? "text-[#36507d] border-b-3 border-[#36507d]"
                    : ""
                }`}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className={`block py-2 !text-gray-900 font-semibold hover:font-bold hover:!text-[#36507d] hover:border-b-3 hover:border-[#36507d] !transition-all !duration-200 !ease-in-out ${
                  activeSection === "projects"
                    ? "text-[#36507d] border-b-3 border-[#36507d]"
                    : ""
                }`}
              >
                Projects
              </Link>
              <Link
                href="#publications"
                className={`block py-2 !text-gray-900 font-semibold hover:font-bold hover:!text-[#36507d] hover:border-b-3 hover:border-[#36507d] !transition-all !duration-200 !ease-in-out ${
                  activeSection === "publications"
                    ? "text-[#36507d] border-b-3 border-[#36507d]"
                    : ""
                }`}
              >
                Publication
              </Link>
              <Link
                href="#contactMe"
                className={`block py-2 !text-gray-900 font-semibold hover:font-bold hover:!text-[#36507d] hover:border-b-3 hover:border-[#36507d] !transition-all !duration-200 !ease-in-out ${
                  activeSection === "contactMe"
                    ? "text-[#36507d] border-b-3 border-[#36507d]"
                    : ""
                }`}
              >
                Contact
              </Link>
            </div>
          }
          trigger="click"
        >
          <div className="flex md:hidden p-0.5">
            <Button
              type="text"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-800 !border !border-gray-300 hover:bg=gray-300 slo-mo rounded-md !p-1.5"
            >
              {menuOpen ? (
                <HiOutlineX size={24} />
              ) : (
                <HiOutlineMenu size={24} />
              )}
            </Button>
          </div>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
