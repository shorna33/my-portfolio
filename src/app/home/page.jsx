"use client";

import Image from "next/image";
import "@/styles/home.css";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaDownload,
  FaPlus,
  FaArrowUpRightFromSquare,
  FaCloudArrowDown,
  FaLocationDot,
} from "react-icons/fa6";
import Link from "next/link";
import { Tooltip, Button } from "antd";
import { MdDateRange, MdEmail, MdCall } from "react-icons/md";
import { useState, useEffect } from "react";
import { Image as AntdImg } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const SkillsCard = ({ img = "", alt = "", title = "" }) => {
    return (
      <div className="flex flex-row gap-8 p-4 hover:shadow-even slo-mo items-center rounded-lg justify-items-center">
        <Image
          src={img}
          alt={alt}
          width={60}
          height={60}
          className="w-12 h-12 sm:w-auto sm:h-auto md:w-12 md:h-12 lg:w-auto lg:h-auto"
        />
        <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold">
          {title}
        </p>
      </div>
    );
  };

  const ProjectCard = ({ img, alt, title, content, previewLink, techs }) => {
    return (
      <div className="rounded-lg w-full" data-aos="zoom-in">
        <div className="relative w-full overflow-hidden group rounded-lg">
          <Image
            src={img}
            alt={alt}
            width={500}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg font-semibold flex items-center gap-2 transform translate-y-5 group-hover:translate-y-0 transition duration-300"
            >
              <p className="flex flex-row gap-3 items-center hover:underline slo-mo">
                Show Preview <FaArrowRight />
              </p>
            </a>
          </div>
        </div>
        <h2 className="font-bold text-xl mb-3 mt-6 text-center">{title}</h2>
        <p className="text-gray-600">{content}</p>
        <p className="my-3 text-gray-600">
          Language and Technologies used: {techs}
        </p>
      </div>
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="w-full">
        <div
          className="w-full h-[calc(100vh-20px)] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner-bg.jpg')" }}
          id="home"
        >
          <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-8 w-full items-center">
              {/* Left Column */}
              <div
                className="flex flex-col mx-auto justify-end space-y-4 text-center lg:text-left -translate-y-4 sm:-translate-y-8 md:-translate-y-10 !mt-28 lg:mt-0"
                data-aos="fade-up-right"
              >
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
                  Samia Sharnami
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold flex flex-wrap justify-center lg:justify-start gap-2">
                  I’m a
                  <span className="text-[#36507d] pl-2">
                    <Typewriter
                      words={["Programmer", "Full-stack Developer"]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={70}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>

                {/* Social Icons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                  <Tooltip title="Github" color="#171515" placement="bottom">
                    <Link
                      className="rounded-full p-2 sm:p-3 bg-[#171515] group hover:bg-white slo-mo"
                      href="https://github.com/shorna33"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-white group-hover:text-[#171515] w-6 h-6 sm:w-7 sm:h-7" />
                    </Link>
                  </Tooltip>
                  <Tooltip title="LinkedIn" color="#0e76a8" placement="bottom">
                    <Link
                      className="rounded-full p-2 sm:p-3 bg-[#0e76a8] group hover:bg-white slo-mo"
                      href="https://www.linkedin.com/in/samia-sharnami-cse1833/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-white group-hover:text-[#0e76a8] w-6 h-6 sm:w-7 sm:h-7" />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Instagram" color="#d62976" placement="bottom">
                    <Link
                      className="group rounded-full p-2 sm:p-3 bg-gradient-to-bl from-[#962fbf] via-[#d62976] to-[#fa7e1e] hover-bg-white slo-mo"
                      href="https://www.instagram.com/shorna.1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-white group-hover:text-[#d62976] w-6 h-6 sm:w-7 sm:h-7" />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Facebook" color="#3b5998" placement="bottom">
                    <Link
                      className="rounded-full p-2 sm:p-3 bg-[#3b5998] group hover:bg-white slo-mo"
                      href="https://www.facebook.com/shorna225"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="text-white group-hover:text-[#3b5998] w-6 h-6 sm:w-7 sm:h-7" />
                    </Link>
                  </Tooltip>
                  <Tooltip title="X" color="#15202b" placement="bottom">
                    <Link
                      className="rounded-full p-2 sm:p-3 bg-[#15202b] group hover:bg-white slo-mo"
                      href="https://x.com/SamiaShorna1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter className="text-white group-hover:text-[#15202b] w-6 h-6 sm:w-7 sm:h-7" />
                    </Link>
                  </Tooltip>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative w-fit mx-auto" data-aos="fade-up-left">
                <Image
                  src="/images/banner-animate-human.png"
                  alt="Animated Banner"
                  width={300}
                  height={200}
                  className="w-60 sm:w-72 md:w-80"
                />
                <Image
                  src="/images/banner-animate-tag.png"
                  alt="Tag"
                  width={40}
                  height={40}
                  className="absolute top-5 left-20 animate-float-up w-10 sm:w-12"
                />
                <Image
                  src="/images/banner-animate-js.png"
                  alt="JavaScript Tag"
                  width={50}
                  height={50}
                  className="absolute top-8 right-0 animate-float-down w-12 sm:w-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-2 mb-8" />

      <div className="w-full scroll-mt-24" id="aboutMe" data-aos="fade-up">
        <div className="px-6 sm:px-16 md:px-32 mx-auto my-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
            <div className="col-span-1">
              <Image
                src="/images/me.jpg"
                alt="Samia Sharnami"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
            </div>
            <div className="col-span-2 lg:col-span-5">
              <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-3">
                Samia Sharnami
              </h2>
              <p className="">
                I aspire to be a Full-stack Software Engineer. I'm enthusiastic
                about web development and problem-solving. I have a strong
                command of web technologies including Laravel, Next.js,
                React.js, PHP, and JavaScript. I aim to build responsive and
                interactive applications that deliver seamless experiences
                across devices and platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full scroll-mt-24">
        <div
          className="px-6 sm:px-16 md:px-32 mx-auto my-10"
          id="experience"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold">Experience</h1>
          <hr className="border-gray-300 my-2.5 sm:my-4" />
          <div className="px-3 py-4 sm:py-6 hover:shadow-even flex flex-col sm:flex-row gap-8 slo-mo mt-1 rounded-lg">
            <Image
              src="/images/sol.svg"
              alt="Silicon Orchard LTD logo"
              width={110}
              height={110}
              className="w-16 h-16 sm:w-auto sm:h-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold mb-3">
                Silicon Orchard LTD.
              </h1>
              <p className="font-bold mb-3">
                Jr. Software Engineer
                <span className="!font-normal text-gray-400">
                  {" "}
                  (Full Stack)
                </span>
              </p>
              <p>
                <span className="font-bold">Languages and Technologies: </span>
                Laravel, ReactJS, NextJS, Redux, Bootstrap, Tailwind, Ajax,
                JavaScript, MySQL.
              </p>
              <p>
                <span className="font-bold">Address: </span>House 01, Avenue 01,
                Block D, Section 11, Mirpur, Dhaka 1216, Bangladesh
              </p>
              <div className="mt-3 flex flex-row items-center gap-3">
                <MdDateRange size={20} />
                <p className="text-gray-900">March 2024 - Present</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="px-6 sm:px-16 md:px-32 mx-auto my-10 scroll-mt-24"
          id="education"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold">Education</h1>
          <hr className="border-gray-300 my-2.5 sm:my-4" />
          <div className="px-3 py-4 sm:py-6 hover:shadow-even flex flex-col sm:flex-row gap-8 slo-mo mt-1 rounded-lg">
            <Image
              src="/images/uni.png"
              alt="Khulna University logo"
              width={100}
              height={200}
              className="w-16 h-16 sm:w-auto sm:h-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold mb-3">
                B.Sc. Engineering in Computer Science and Engineering Discipline
              </h1>
              <p className="font-bold">CGPA 3.59 out of 4.00</p>
              <p className="font-bold">Khulna University</p>
              <div className="mt-3 flex flex-row items-center gap-3">
                <MdDateRange size={20} />
                <p className="text-gray-900">January 2018 - January 2023</p>
              </div>
            </div>
          </div>

          <div className="px-3 py-4 sm:py-6 hover:shadow-even flex flex-col sm:flex-row gap-8 slo-mo mt-6 rounded-lg">
            <Image
              src="/images/kgc.png"
              alt="KGC logo"
              width={100}
              height={200}
              className="w-16 h-16 sm:w-auto sm:h-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold mb-3">
                Higher Secondary Certificate
              </h1>
              <p className="font-bold">GPA 4.67 out of 5.00</p>
              <p className="font-bold">Kushtia Government College</p>
              <div className="mt-3 flex flex-row items-center gap-3">
                <MdDateRange size={20} />
                <p className="text-gray-900">July 2015 - March 2017</p>
              </div>
            </div>
          </div>

          <div className="px-3 py-4 sm:py-6 hover:shadow-even flex flex-col sm:flex-row gap-8 slo-mo mt-6 rounded-lg">
            <Image
              src="/images/bgpsc.png"
              alt="BGPSC logo"
              width={100}
              height={150}
              className="w-16 h-16 sm:w-auto sm:h-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold mb-3">
                Secondary School Certificate
              </h1>
              <p className="font-bold">GPA 5.00 out of 5.00</p>
              <p className="font-bold">
                Border Guard Public School and College
              </p>
              <p className="font-bold">Mirpur, Kushtia</p>
              <div className="mt-3 flex flex-row items-center gap-3">
                <MdDateRange size={20} />
                <p className="text-gray-900">January 2013 - January 2015</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="px-6 sm:px-16 md:px-32 mx-auto my-10 scroll-mt-24"
          id="skills"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold">Skills</h1>
          <hr className="border-gray-300 my-2.5 sm:my-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-4 sm:py-6">
            <SkillsCard
              img="/images/laravel.png"
              alt="Laravel logo"
              title="Laravel"
            />
            <SkillsCard
              img="/images/nextjs.png"
              alt="NextJS logo"
              title="Next.js"
            />
            <SkillsCard
              img="/images/react.png"
              alt="ReactJS logo"
              title="React JS"
            />
            <SkillsCard
              img="/images/vuejs.png"
              alt="VueJS logo"
              title="Vue JS"
            />
            <SkillsCard img="/images/msql.png" alt="MySQL logo" title="MySQL" />
            <SkillsCard
              img="/images/js.png"
              alt="JavaScript logo"
              title="JavaScript"
            />
            <SkillsCard img="/images/ajax.png" alt="Ajax logo" title="Ajax" />
            <SkillsCard
              img="/images/tailwind.png"
              alt="TailwindCSS logo"
              title="Tailwind CSS"
            />
            <SkillsCard
              img="/images/bootstrap.png"
              alt="Bootstrap logo"
              title="Bootstrap"
            />
            <SkillsCard
              img="/images/python.png"
              alt="Python logo"
              title="Python"
            />
            <SkillsCard
              img="/images/c.png"
              alt="C Programming logo"
              title="C"
            />
            <SkillsCard img="/images/c++.png" alt="C++ logo" title="C++" />
            <SkillsCard img="/images/php.png" alt="PHP logo" title="PHP" />
            <SkillsCard
              img="/images/program.png"
              alt="Laptop logo"
              title="Problem Solving"
            />
          </div>
          <div className="mx-auto w-fit mt-6">
            <a
              href="/files/samia-sharnami-cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="text"
                className="!bg-[#36507d] hover:shadow-lg hover:opacity-80 slo-mo flex flex-row gap-3 items-center !rounded-full !p-5"
              >
                <FaDownload
                  size={20}
                  className="text-white hover:text-[#36507d] slo-mo"
                />
                <p className="font-semibold text-white text-base sm:text-xl">
                  Download CV
                </p>
              </Button>
            </a>
          </div>
        </div>

        <div
          className="px-6 sm:px-16 md:px-32 mx-auto my-10 scroll-mt-24"
          id="projects"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold">Projects</h1>
          <hr className="border-gray-300 my-2.5 sm:my-4" />
          {visible && (
            <div
              role="alert"
              className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 px-6 py-4 rounded shadow-md m-4 flex justify-between items-start gap-4"
            >
              <p>
                <strong>Click</strong> on the images to show preview.
              </p>
              <button
                onClick={() => setVisible(false)}
                className="text-yellow-700 hover:text-yellow-900 text-xl leading-none cursor-pointer"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
            <ProjectCard
              img="/images/library.png"
              alt="Library"
              title="CSE Seminar Library"
              techs="Laravel, Bootstrap, PHP, MySQL."
              previewLink="https://cseseminarlibrary.000webhostapp.com/"
              content={
                <>
                  CSE Seminar Library is a Library Management System which can
                  be used to search, view, and issue books, check which book is
                  issued and by whom. Get code from{" "}
                  <a
                    href="https://github.com/shorna33/library.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline slo-mo"
                  >
                    here
                  </a>
                  .
                </>
              }
            />

            <ProjectCard
              img="/images/tourism.png"
              alt="Tourville"
              title="Tourville"
              techs="PHP, Bootstrap, JavaScript, MySQL."
              previewLink="http://tourville.infinityfreeapp.com/"
              content={
                <>
                  Tourville is Tourism Management System which can be used to
                  view and search tour agencies and packages. Packages can also
                  be booked from this application. Get code from{" "}
                  <a
                    href="https://github.com/shorna33/tourville.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline slo-mo"
                  >
                    here
                  </a>
                  .
                </>
              }
            />

            <ProjectCard
              img="/images/crud.png"
              alt="Personal Blog Application"
              title="Personal Blog Application"
              techs="Laravel, Bootstrap, PHP, MySQL."
              previewLink="http://personalblogposts.000webhostapp.com/"
              content={
                <>
                  A personal blog post application which can be used to post,
                  edit, and delete simple blogs. Get code from{" "}
                  <a
                    href="https://github.com/shorna33/Laravel-CRUD-Application.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline slo-mo"
                  >
                    here
                  </a>
                  .
                </>
              }
            />

            <ProjectCard
              img="/images/portfolio.png"
              alt="Portfolio"
              title="Portfolio"
              techs="Next.js, Tailwind CSS"
              previewLink="#"
              content={
                <>
                  Get code from{" "}
                  <a
                    href="https://github.com/shorna33/my-portfolio.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline slo-mo"
                  >
                    here
                  </a>
                  .
                </>
              }
            />

            <ProjectCard
              img="/images/todo.png"
              alt="Todo App"
              title="To-do List"
              techs="React JS, JavaScript, Bootstrap, JSON Server."
              previewLink="https://tododemoapplication.netlify.app/"
              content={
                <>
                  A to-do list application can be used to create, edit, and
                  delete tasks, and set the task state to completed or
                  incomplete. Get code from{" "}
                  <a
                    href="https://github.com/shorna33/to-doApp.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline slo-mo"
                  >
                    here
                  </a>
                  .
                </>
              }
            />

            <ProjectCard
              img="/images/contactapp.png"
              alt="Contact Manager Application"
              title="Contact Manager Application"
              techs="React JS, JavaScript, JSON Server."
              previewLink="#"
              content={
                <>
                  A contact manager application can be used to save, edit, and
                  delete contacts. Get code from{" "}
                  <a
                    href="https://github.com/shorna33/contactApp.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline slo-mo"
                  >
                    here
                  </a>
                  .
                </>
              }
            />
          </div>
        </div>

        <div
          className="px-6 sm:px-16 md:px-32 mx-auto my-10 scroll-mt-24"
          id="publications"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold">Publication</h1>
          <hr className="border-gray-300 my-2.5 sm:my-4" />

          <div
            className="px-3 py-4 sm:py-6 hover:shadow-even slo-mo mt-1 rounded-lg cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h5 className="text-lg font-semibold">
              A CNN Based Approach to Classify Skin Cancers using Transfer
              Learning
            </h5>
            <p className="mt-4">
              AH. Jui, <span className="font-bold">S. Sharnami</span>, A. Islam.
            </p>
            <p className="">
              25<sup>th</sup> International Conference on Computer and
              Information Technology (ICCIT), Cox’s Bazar, Bangladesh, December,
              2022.
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-row items-center gap-3 mt-3 justify-end"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Download link */}
            <a
              title="Download"
              href="/files/403.pdf"
              download
              className="text-[#36507d] hover:bg-[#36507d] hover:text-white transition-colors p-2 rounded shadow"
            >
              <FaCloudArrowDown size={20} />
            </a>

            {/* External link */}
            <a
              title="External Link"
              href="https://ieeexplore.ieee.org/abstract/document/10055838"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#36507d] hover:bg-[#36507d] hover:text-white transition-colors p-2 rounded shadow"
            >
              <FaArrowUpRightFromSquare />
            </a>

            {/* Expand button */}
            <button
              title="Expand"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#36507d] text-white hover:bg-white hover:text-[#36507d] transition-colors p-2 rounded shadow cursor-pointer"
            >
              <FaPlus />
            </button>
          </div>

          {/* Collapsible content */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden rounded-lg mt-2 
              ${
                isOpen
                  ? "max-h-[1000px] opacity-100 p-4"
                  : "max-h-0 opacity-0 p-0"
              }`}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <AntdImg
                src="/images/model.png"
                alt="Model"
                className="w-32 h-auto rounded-md object-fill"
              />
              <div>
                <p className="font-bold">Abstract</p>
                <p className="text-gray-700 text-justify text-sm mt-1">
                  Skin cancer is one of the most frequent types of cancer in the
                  world. Malignant skin cancers can become life-threatening if
                  not treated in an early stage. Some skin cancers like Squamous
                  Cell Carcinoma (SCC), Melanoma (MEL), and Basal Cell Carcinoma
                  (BCC) are always malignant and can cause fatal damage to the
                  skin. Therefore, early identification is essential for
                  minimizing the harm. This study uses transfer learning and
                  explores the famous pre-trained model, Xception, with
                  necessary fine tuning to classify eight types of skin cancers.
                  During the training of the proposed model, data augmentation
                  techniques are used to introduce diversity in the training
                  phase. The proposed method is tested on the International Skin
                  Imaging Collaboration (ISIC) 2019 dataset. It exhibits better
                  results than similar studies which can help early detection of
                  malignant skin cancers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-[#36507d] text-white py-8 px-6 sm:px-16 md:px-32 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-36"
          id="contactMe"
        >
          <div>
            <h2 className="text-lg sm:text-3xl font-semibold">Contact Me</h2>
            <hr className="border-gray-200 my-2.5 sm:my-4" />
            <p className="flex flex-row gap-3 items-center">
              <MdEmail /> samiasharnami225@gmail.com
            </p>
            <p className="flex flex-row gap-3 items-center">
              <MdCall /> +8801763-873861
            </p>
            <p className="flex flex-row gap-3 items-center">
              <FaLocationDot /> 13/11 Babar road, Mohammadpur, Dhaka
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-3xl font-semibold">Follow Me on</h2>
            <div className="flex flex-row gap-4 mt-4">
              <div className="rounded-full border border-white hover:border-none p-2 bg-transparent hover:bg-[#171515] slo-mo transform hover:scale-125 cursor-pointer">
                <FaGithub size={20} className="text-white slo-mo" />
              </div>
              <div className="rounded-full border border-white hover:border-none p-2 bg-transparent hover:bg-[#0e76a8] slo-mo transform hover:scale-125 cursor-pointer">
                <FaLinkedin size={20} className="text-white slo-mo" />
              </div>
              <div className="rounded-full border border-white hover:border-none p-2 bg-transparent hover:bg-gradient-to-bl hover:from-[#962fbf] hover:via-[#d62976] hover:to-[#fa7e1e] slo-mo transform hover:scale-125 cursor-pointer">
                <FaInstagram size={20} className="text-white slo-mo" />
              </div>
              <div className="rounded-full border border-white hover:border-none p-2 bg-transparent hover:bg-[#3b5998] slo-mo transform hover:scale-125 cursor-pointer">
                <FaFacebookF size={20} className="text-white slo-mo" />
              </div>
              <div className="rounded-full border border-white hover:border-none p-2 bg-transparent hover:bg-[#15202b] slo-mo transform hover:scale-125 cursor-pointer">
                <FaXTwitter size={20} className="text-white slo-mo" />
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center py-5 text-sm text-gray-300 bg-[#142a52]">
          &copy; {new Date().getFullYear()} Samia Sharnami. All rights reserved.
        </footer>
      </div>
    </>
  );
}
