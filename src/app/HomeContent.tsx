// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { useUser } from "@clerk/nextjs";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Button } from "@/components/ui/button";
// // import {
// //   FileText,
// //   Send,
// //   Brain,
// //   ClipboardList,
// //   Globe,
// //   MessageCircle,
// //   ChevronLeft,
// //   ChevronRight,
// // } from "lucide-react";
// // import logo from "@/assets/logo.png";
// // import resumePreview from "@/assets/resume-preview.jpg";
// // import amazonLogo from "@/logos/amazon.svg";
// // import appleLogo from "@/logos/apple.svg";
// // import bookingLogo from "@/logos/booking.svg";
// // import googleLogo from "@/logos/google.svg";
// // import metaLogo from "@/logos/meta.svg";
// // import amazonLogoDark from "@/logos/amazon-dark.svg";
// // import appleLogoDark from "@/logos/apple-dark.svg";
// // import bookingLogoDark from "@/logos/booking-dark.svg";
// // import googleLogoDark from "@/logos/google-dark.svg";
// // import metaLogoDark from "@/logos/meta-dark.svg";

// // interface Blog {
// //   id: string;
// //   title: string;
// //   summary: string;
// // }
// // interface Review {
// //   id: string;
// //   description?: string;
// // }
// // interface Story {
// //   id: string;
// //   title: string;
// //   excerpt: string;
// // }

// // export default function HomeContent({
// //   blogs,
// //   reviews,
// //   successStories,
// // }: {
// //   blogs: Blog[];
// //   reviews: Review[];
// //   successStories: Story[];
// // }) {
// //   const { isSignedIn } = useUser();

// //   const [showCookieBanner, setShowCookieBanner] = useState(false);
// //   //   const [chatModalOpen, setChatModalOpen] = useState(false);
// //   const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

// //   useEffect(() => {
// //     if (!localStorage.getItem("cookiesAccepted")) {
// //       setShowCookieBanner(true);
// //     }
// //   }, []);

// //   const acceptCookies = () => {
// //     localStorage.setItem("cookiesAccepted", "yes");
// //     setShowCookieBanner(false);
// //   };

// //   // const featureCards = [
// //   //   {
// //   //     icon: <FileText size={24} className="text-indigo-600" />,
// //   //     title: "AI Resume Builder",
// //   //     desc: "Free for 2 resumes, then $9.99/mo or $19.99/yr.",
// //   //     hoverInfo:
// //   //       "Step-by-step wizard + modern templates: build, style & export PDFs.",
// //   //     href: "/resumes",
// //   //     previewImage:
// //   //       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_editor_resumeId%3Dcma9r2ppd000ssjeur7z6gj7m%26step%3Deducation.png",
// //   //   },
// //   //   {
// //   //     icon: <Send size={24} className="text-green-600" />,
// //   //     title: "Cover Letter Generator",
// //   //     desc: "Unlimited AI letters, always free.",
// //   //     hoverInfo:
// //   //       "Answer a few prompts → receive a tailored cover letter instantly.",
// //   //     href: "/cover-letter",
// //   //     previewImage:
// //   //       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_cover-letter.png",
// //   //   },
// //   //   {
// //   //     icon: <ClipboardList size={24} className="text-yellow-600" />,
// //   //     title: "Resume Audit",
// //   //     desc: "Upload & get an AI score. Free.",
// //   //     hoverInfo:
// //   //       "ATS-score, readability & keyword health: instant PDF feedback.",
// //   //     href: "/audit",
// //   //     previewImage:
// //   //       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_audit.png",
// //   //   },
// //   //   {
// //   //     icon: <Globe size={24} className="text-blue-600" />,
// //   //     title: "Job Tracker",
// //   //     desc: "Track every application. Free.",
// //   //     hoverInfo:
// //   //       "Manage deadlines, links, interview notes & statuses all in one place.",
// //   //     href: "/job-tracker",
// //   //     previewImage:
// //   //       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_job-tracker.png",
// //   //   },
// //   //   {
// //   //     icon: <Brain size={24} className="text-pink-600" />,
// //   //     title: "Resume Lab",
// //   //     desc: "Advanced PDF editor & AI suggestions. Free.",
// //   //     hoverInfo:
// //   //       "Select, rewrite & annotate your resume live with GPT-4 power.",
// //   //     href: "/resume-lab",
// //   //     previewImage:
// //   //       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_resume-lab+(1).png",
// //   //   },
// //   //   {
// //   //     icon: <FileText size={24} className="text-red-600" />,
// //   //     title: "Profile Hub",
// //   //     desc: "Share your profile & blogs. Free.",
// //   //     hoverInfo:
// //   //       "Build a public profile, post success stories & request reviews.",
// //   //     href: "/profile/reviews/create",
// //   //     previewImage:
// //   //       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_profile_user_2wAqP10NByHsUH6Aas6VsjzraH2.png",
// //   //   },
// //   //   {
// //   //     icon: <MessageCircle size={24} className="text-purple-600" />,
// //   //     title: "AI Chat Bot",
// //   //     desc: "Instant AI career coach. Free.",
// //   //     hoverInfo: "Chat 1:1 for resume tips, interview prep, coding Qs & more.",
// //   //     href: "/chat",
// //   //     previewImage:
// //   //       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_chat.png",
// //   //   },
// //   // ];

// //   const featureCards: {
// //     icon: JSX.Element;
// //     title: string;
// //     desc: string;
// //     hoverInfo: string;
// //     href?: string;
// //     previewImage: string;
// //     action?: () => void;
// //   }[] = [
// //     {
// //       icon: <FileText size={24} className="text-indigo-600" />,
// //       title: "AI Resume Builder",
// //       desc: "Free for 2 resumes, then $9.99/mo or $19.99/yr.",
// //       hoverInfo:
// //         "Step-by-step wizard + modern templates: build, style & export PDFs.",
// //       href: "/resumes",
// //       previewImage:
// //         "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_editor_resumeId%3Dcma9r2ppd000ssjeur7z6gj7m%26step%3Deducation.png",
// //     },
// //     {
// //       icon: <Send size={24} className="text-green-600" />,
// //       title: "Cover Letter Generator",
// //       desc: "Unlimited AI letters, always free.",
// //       hoverInfo:
// //         "Answer a few prompts → receive a tailored cover letter instantly.",
// //       href: "/cover-letter",
// //       previewImage:
// //         "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_cover-letter.png",
// //     },
// //     {
// //       icon: <ClipboardList size={24} className="text-yellow-600" />,
// //       title: "Resume Audit",
// //       desc: "Upload & get an AI score. Free.",
// //       hoverInfo:
// //         "ATS-score, readability & keyword health: instant PDF feedback.",
// //       href: "/audit",
// //       previewImage:
// //         "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_audit.png",
// //     },
// //     {
// //       icon: <Globe size={24} className="text-blue-600" />,
// //       title: "Job Tracker",
// //       desc: "Track every application. Free.",
// //       hoverInfo:
// //         "Manage deadlines, links, interview notes & statuses all in one place.",
// //       href: "/job-tracker",
// //       previewImage:
// //         "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_job-tracker.png",
// //     },
// //     {
// //       icon: <Brain size={24} className="text-pink-600" />,
// //       title: "Resume Lab",
// //       desc: "Advanced PDF editor & AI suggestions. Free.",
// //       hoverInfo:
// //         "Select, rewrite & annotate your resume live with GPT-4 power.",
// //       href: "/resume-lab",
// //       previewImage:
// //         "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_resume-lab+(1).png",
// //     },
// //     {
// //       icon: <FileText size={24} className="text-red-600" />,
// //       title: "Profile Hub",
// //       desc: "Share your profile & blogs. Free.",
// //       hoverInfo:
// //         "Build a public profile, post success stories & request reviews.",
// //       href: "/profile/reviews/create",
// //       previewImage:
// //         "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_profile_user_2wAqP10NByHsUH6Aas6VsjzraH2.png",
// //     },
// //     {
// //       icon: <MessageCircle size={24} className="text-purple-600" />,
// //       title: "AI Chat Bot",
// //       desc: "Instant AI career coach. Free.",
// //       hoverInfo: "Chat 1:1 for resume tips, interview prep, coding Qs & more.",
// //       href: "/chat",
// //       previewImage:
// //         "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_chat.png",
// //     },
// //   ];

// //   const handleNextFeature = () => {
// //     setCurrentFeatureIndex((p) => (p + 1) % featureCards.length);
// //   };
// //   const handlePrevFeature = () => {
// //     setCurrentFeatureIndex(
// //       (p) => (p - 1 + featureCards.length) % featureCards.length,
// //     );
// //   };

// //   const typingVariants = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
// //   };
// //   const letterVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0 },
// //   };

// //   return (
// //     <main className="relative flex min-h-screen flex-col">
// //       {/* subtle BG */}
// //       <div className="fixed inset-0 -z-10 overflow-hidden">
// //         <div className="animate-gradient-bg absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-black" />
// //       </div>

// //       {/* NAV */}
// //       <nav className="fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur dark:bg-black/90">
// //         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
// //           <Link href="/" className="flex items-center gap-2">
// //             <Image src={logo} alt="Logo" width={32} height={32} />
// //             <span className="text-xl font-bold text-indigo-700 dark:text-indigo-300">
// //               AI Career Suite
// //             </span>
// //           </Link>
// //           <div className="space-x-4">
// //             {!isSignedIn ? (
// //               <>
// //                 <Link href="/sign-in">
// //                   <Button
// //                     variant="ghost"
// //                     size="sm"
// //                     className="text-indigo-600 hover:bg-indigo-100 dark:text-indigo-300 dark:hover:bg-indigo-900"
// //                   >
// //                     Sign In
// //                   </Button>
// //                 </Link>
// //                 <Link href="/sign-up">
// //                   <Button
// //                     size="sm"
// //                     className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
// //                   >
// //                     Get Started
// //                   </Button>
// //                 </Link>
// //               </>
// //             ) : (
// //               <Link href="/audit">
// //                 <Button variant="ghost" size="sm">
// //                   My Profile
// //                 </Button>
// //               </Link>
// //             )}
// //           </div>
// //         </div>
// //       </nav>

// //       {/* HERO */}
// //       <section className="relative pb-16 pt-24">
// //         <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 md:flex-row">
// //           <motion.div
// //             initial={{ opacity: 0, x: -40 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-center md:w-1/2 md:text-left"
// //           >
// //             <motion.h1
// //               variants={typingVariants}
// //               initial="hidden"
// //               animate="visible"
// //               className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl"
// //             >
// //               {"Supercharge Your Career Journey".split("").map((c, i) => (
// //                 <motion.span key={i} variants={letterVariants}>
// //                   {c}
// //                 </motion.span>
// //               ))}
// //             </motion.h1>
// //             <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
// //               Craft standout resumes, generate cover letters, track
// //               applications, and get AI-powered insights—all in one place.
// //             </p>
// //             {!isSignedIn ? (
// //               <Link href="/sign-up">
// //                 <Button
// //                   size="lg"
// //                   className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
// //                 >
// //                   Start for Free
// //                 </Button>
// //               </Link>
// //             ) : (
// //               <Link href="/audit">
// //                 <Button
// //                   size="lg"
// //                   className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
// //                 >
// //                   My Profile
// //                 </Button>
// //               </Link>
// //             )}
// //           </motion.div>
// //           <motion.div
// //             initial={{ opacity: 0, x: 40 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className="md:w-1/2"
// //           >
// //             <Image
// //               src={resumePreview}
// //               alt="Preview"
// //               className="rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
// //             />
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* FEATURE SPOTLIGHT */}
// //       <section className="bg-gradient-to-b from-white to-indigo-50 py-12 dark:from-gray-900 dark:to-gray-800">
// //         <div className="mx-auto max-w-7xl px-4">
// //           <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
// //             Spotlight Feature
// //           </h2>
// //           <div className="relative">
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={currentFeatureIndex}
// //                 initial={{ opacity: 0, x: 20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 exit={{ opacity: 0, x: -20 }}
// //                 transition={{ duration: 0.5 }}
// //                 className="flex flex-col items-center gap-8 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800 md:flex-row"
// //               >
// //                 <div className="md:w-1/2">
// //                   <div className="flex items-center gap-3">
// //                     {featureCards[currentFeatureIndex].icon}
// //                     <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
// //                       {featureCards[currentFeatureIndex].title}
// //                     </h3>
// //                   </div>
// //                   <p className="mt-3 text-gray-600 dark:text-gray-300">
// //                     {featureCards[currentFeatureIndex].desc}
// //                   </p>
// //                   <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
// //                     {featureCards[currentFeatureIndex].hoverInfo}
// //                   </p>
// //                   {featureCards[currentFeatureIndex].href ? (
// //                     <Link href={featureCards[currentFeatureIndex].href}>
// //                       <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
// //                         Try Now
// //                       </Button>
// //                     </Link>
// //                   ) : (
// //                     <Button
// //                       onClick={featureCards[currentFeatureIndex].action}
// //                       className="mt-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
// //                     >
// //                       Try Now
// //                     </Button>
// //                   )}
// //                 </div>
// //                 <div className="h-64 overflow-y-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:h-80 md:w-1/2">
// //                   <img
// //                     src={featureCards[currentFeatureIndex].previewImage}
// //                     alt={`${featureCards[currentFeatureIndex].title} Preview`}
// //                     className="h-auto w-full object-cover"
// //                   />
// //                 </div>
// //               </motion.div>
// //             </AnimatePresence>
// //             <button
// //               onClick={handlePrevFeature}
// //               className="absolute -left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-indigo-600 p-2 text-white hover:bg-indigo-700"
// //             >
// //               <ChevronLeft size={20} />
// //             </button>
// //             <button
// //               onClick={handleNextFeature}
// //               className="absolute -right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-indigo-600 p-2 text-white hover:bg-indigo-700"
// //             >
// //               <ChevronRight size={20} />
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ALL FEATURES */}
// //       <section className="bg-white py-16 dark:bg-gray-900">
// //         <div className="mx-auto max-w-7xl px-4">
// //           <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
// //             Explore All Features
// //           </h2>
// //           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
// //             {featureCards.map((f, i) => {
// //               const CardInner = (
// //                 <motion.div
// //                   whileHover={{ rotateX: 3, rotateY: 5, scale: 1.02 }}
// //                   key={i}
// //                   className="group flex cursor-pointer flex-col items-start rounded-xl bg-gradient-to-br from-gray-50 to-indigo-50 p-6 shadow-lg transition-all duration-300 dark:from-gray-800 dark:to-gray-700"
// //                   onClick={f.action}
// //                 >
// //                   {f.icon}
// //                   <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
// //                     {f.title}
// //                   </h3>
// //                   <p className="mt-2 text-gray-600 dark:text-gray-300">
// //                     {f.desc}
// //                   </p>
// //                   <p className="mt-2 text-sm text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-400">
// //                     {f.hoverInfo}
// //                   </p>
// //                 </motion.div>
// //               );
// //               return f.href ? (
// //                 <Link key={i} href={f.href}>
// //                   {CardInner}
// //                 </Link>
// //               ) : (
// //                 CardInner
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA BANNER */}
// //       <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 dark:from-indigo-700 dark:to-purple-700">
// //         <div className="mx-auto max-w-7xl px-4 text-center">
// //           <h2 className="mb-4 text-3xl font-bold text-white">
// //             Ready to Land Your Dream Job?
// //           </h2>
// //           <p className="mb-6 text-lg text-indigo-100">
// //             Join thousands of users leveraging AI to streamline their career
// //             journey.
// //           </p>
// //           {!isSignedIn ? (
// //             <Link href="/signup">
// //               <Button
// //                 size="lg"
// //                 className="bg-white text-indigo-600 hover:bg-indigo-100 dark:bg-gray-200 dark:text-indigo-800 dark:hover:bg-gray-300"
// //               >
// //                 Sign Up Now
// //               </Button>
// //             </Link>
// //           ) : (
// //             <Link href="/resume-lab">
// //               <Button
// //                 size="lg"
// //                 className="bg-white text-indigo-600 hover:bg-indigo-100 dark:bg-gray-200 dark:text-indigo-800 dark:hover:bg-gray-300"
// //               >
// //                 My Account{" "}
// //               </Button>
// //             </Link>
// //           )}
// //         </div>
// //       </section>

// //       {/* LOGOS */}
// //       <section className="bg-indigo-50 py-12 dark:bg-gray-800">
// //         <div className="mx-auto max-w-7xl px-4 text-center">
// //           <p className="mb-6 text-gray-500 dark:text-gray-400">Trusted by:</p>
// //           <div className="flex flex-wrap items-center justify-center gap-8">
// //             {[amazonLogo, metaLogo, appleLogo, googleLogo, bookingLogo].map(
// //               (src, idx) => (
// //                 <motion.div
// //                   key={idx}
// //                   whileHover={{ scale: 1.1 }}
// //                   className="relative h-12 w-32 opacity-70 transition-opacity duration-300 hover:opacity-100"
// //                 >
// //                   <Image
// //                     src={src}
// //                     alt=""
// //                     fill
// //                     className="object-contain dark:hidden"
// //                   />
// //                   <Image
// //                     src={
// //                       [
// //                         amazonLogoDark,
// //                         metaLogoDark,
// //                         appleLogoDark,
// //                         googleLogoDark,
// //                         bookingLogoDark,
// //                       ][idx]
// //                     }
// //                     alt=""
// //                     fill
// //                     className="hidden object-contain dark:block"
// //                   />
// //                 </motion.div>
// //               ),
// //             )}
// //           </div>
// //         </div>
// //       </section>

// //       {/* BLOGS & REVIEWS */}
// //       <section className="bg-white py-16 dark:bg-gray-900">
// //         <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
// //           <div>
// //             <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
// //               Latest Public Blogs
// //             </h2>
// //             <ul className="space-y-4">
// //               {blogs.map((b) => (
// //                 <motion.li
// //                   key={b.id}
// //                   whileHover={{ scale: 1.02 }}
// //                   className="rounded-lg bg-indigo-50 p-4 transition-transform duration-300 dark:bg-gray-800"
// //                 >
// //                   <h3 className="font-semibold text-gray-900 dark:text-white">
// //                     {b.title}
// //                   </h3>
// //                   <p className="mt-1 text-gray-600 dark:text-gray-300">
// //                     {b.summary}
// //                   </p>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </div>
// //           <div>
// //             <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
// //               Resume Review Requests
// //             </h2>
// //             <ul className="space-y-4">
// //               {reviews.map((r) => (
// //                 <motion.li
// //                   key={r.id}
// //                   whileHover={{ scale: 1.02 }}
// //                   className="flex items-center justify-between rounded-lg bg-yellow-50 p-4 transition-transform duration-300 dark:bg-gray-800"
// //                 >
// //                   <span className="truncate text-gray-900 dark:text-white">
// //                     {r.description || "No description"}
// //                   </span>
// //                   <Send size={20} className="text-yellow-600" />
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </section>

// //       {/* SUCCESS STORIES */}
// //       <section className="bg-indigo-50 py-16 dark:bg-gray-800">
// //         <div className="mx-auto max-w-7xl px-4">
// //           <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
// //             Success Stories
// //           </h2>
// //           <ul className="space-y-4">
// //             {successStories.map((s) => (
// //               <motion.li
// //                 key={s.id}
// //                 whileHover={{ scale: 1.02 }}
// //                 className="rounded-lg bg-white p-4 transition-transform duration-300 dark:bg-gray-700"
// //               >
// //                 <h3 className="font-semibold text-gray-900 dark:text-white">
// //                   {s.title}
// //                 </h3>
// //                 <p className="mt-1 text-gray-600 dark:text-gray-300">
// //                   {s.excerpt}
// //                 </p>
// //               </motion.li>
// //             ))}
// //           </ul>
// //         </div>
// //       </section>

// //       {/* AI CHAT MODAL
// //       <AnimatePresence>
// //         {chatModalOpen && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //               className="bg-white dark:bg-gray-800 rounded-xl w-11/12 md:w-2/3 lg:w-1/2 p-6 relative shadow-xl"
// //             >
// //               <button
// //                 onClick={() => setChatModalOpen(false)}
// //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
// //               >
// //                 ✕
// //               </button>
// //               <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
// //                 Try the AI Chat Bot
// //               </h2>
// //               <p className="text-gray-600 dark:text-gray-300 mb-6">
// //                 Preview our in-app AI chat experience without signing in.
// //               </p>
// //               <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
// //                 <span className="text-gray-400">[Live Chat Demo]</span>
// //               </div>
// //               <div className="mt-4 text-center">
// //                 <Link href="/signup">
// //                   <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
// //                     Sign Up to Chat Now
// //                   </Button>
// //                 </Link>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence> */}

// //       {/* FOOTER */}
// //       <footer className="mt-auto bg-gray-800 py-8 text-gray-300">
// //         <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
// //           <div>
// //             <h4 className="mb-2 font-semibold text-gray-100">
// //               AI Career Suite
// //             </h4>
// //             <p>All your career tools in one place.</p>
// //           </div>
// //           <div>
// //             <h4 className="mb-2 font-semibold text-gray-100">Legal</h4>
// //             <ul className="space-y-1">
// //               <li>
// //                 <Link href="/legal/terms-of-use" className="hover:underline">
// //                   Terms of Use
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/legal/privacy-policy" className="hover:underline">
// //                   Privacy Policy
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/legal/data-policy" className="hover:underline">
// //                   Data Policy
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/legal/ai-usage-policy" className="hover:underline">
// //                   AI Usuage Policy
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   href="/legal/user-generated-content"
// //                   className="hover:underline"
// //                 >
// //                   User-Generated Content Terms
// //                 </Link>
// //               </li>
// //               <li>
// //                 <button
// //                   onClick={() => setShowCookieBanner(true)}
// //                   className="hover:underline"
// //                 >
// //                   Cookie Settings
// //                 </button>
// //               </li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="mb-2 font-semibold text-gray-100">Contact</h4>
// //             <p>support@aicareersuite.com</p>
// //           </div>
// //         </div>
// //       </footer>

// //       {/* COOKIE BANNER */}
// //       <AnimatePresence>
// //         {showCookieBanner && (
// //           <motion.div
// //             initial={{ y: 50, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             exit={{ y: 50, opacity: 0 }}
// //             className="fixed bottom-4 left-1/2 z-50 flex w-[90%] max-w-md -translate-x-1/2 items-center justify-between rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800"
// //           >
// //             <p className="text-sm text-gray-700 dark:text-gray-300">
// //               We use cookies to improve your experience. By continuing you
// //               accept our{" "}
// //               <Link href="/legal/privacy-policy" className="underline">
// //                 Privacy Policy
// //               </Link>
// //               . and{" "}
// //               <Link href="/legal/privacy-policy" className="underline">
// //                 {" "}
// //                 Cookie Policy
// //               </Link>
// //               .
// //             </p>
// //             <Button
// //               size="sm"
// //               onClick={acceptCookies}
// //               className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
// //             >
// //               Got it
// //             </Button>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </main>
// //   );
// // }

// "use client";

// import React, { useState, useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   FileText,
//   Send,
//   Brain,
//   ClipboardList,
//   Globe,
//   MessageCircle,
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   Award,
//   Rocket,
//   Mic,
//   Users,
//   Network,
//   TrendingUp,
//   Instagram,
//   Twitter,
//   Mail,
//   Award as TrustBadge,
//   User,
// } from "lucide-react";
// import logo from "@/assets/logo.png";
// import resumePreview from "@/assets/resume-preview.jpg";
// import amazonLogo from "@/logos/amazon.svg";
// import appleLogo from "@/logos/apple.svg";
// import bookingLogo from "@/logos/booking.svg";
// import googleLogo from "@/logos/google.svg";
// import metaLogo from "@/logos/meta.svg";
// import amazonLogoDark from "@/logos/amazon-dark.svg";
// import appleLogoDark from "@/logos/apple-dark.svg";
// import bookingLogoDark from "@/logos/booking-dark.svg";
// import googleLogoDark from "@/logos/google-dark.svg";
// import metaLogoDark from "@/logos/meta-dark.svg";

// interface Blog {
//   id: string;
//   title: string;
//   summary: string;
// }
// interface Review {
//   id: string;
//   description?: string;
// }
// interface Story {
//   id: string;
//   title: string;
//   excerpt: string;
// }

// // Pre-generate particle properties with consistent string values
// const generateParticles = (count: number) => {
//   return Array.from({ length: count }, (_, i) => ({
//     width: `${5 + (i % 10) * 0.5}px`,
//     height: `${5 + (i % 8) * 0.5}px`,
//     top: `${(i * 5) % 100}%`,
//     left: `${(i * 7) % 100}%`,
//   }));
// };

// const particles = generateParticles(20);

// const featureCards = [
//   {
//     icon: <FileText size={20} className="text-indigo-400" />,
//     title: "AI Resume Builder",
//     desc: "Craft ATS-optimized resumes effortlessly—completely free! Use modern templates and export as PDF in minutes.",
//     hoverInfo: "Step-by-step wizard + modern templates: build, style & export PDFs.",
//     href: "/resumes",
//     previewImage:
//       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_editor_resumeId%3Dcma9r2ppd000ssjeur7z6gj7m%26step%3Deducation.png",
//   },
//   {
//     icon: <Send size={20} className="text-green-400" />,
//     title: "Cover Letter Generator",
//     desc: "Generate tailored cover letters in seconds—100% free! Answer a few prompts for a personalized letter.",
//     hoverInfo: "Answer a few prompts → receive a tailored cover letter instantly.",
//     href: "/cover-letter",
//     previewImage:
//       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_cover-letter.png",
//   },
//   {
//     icon: <ClipboardList size={20} className="text-yellow-400" />,
//     title: "Resume Audit",
//     desc: "Get AI-powered resume feedback instantly—for free! Optimize for ATS, readability, and keywords.",
//     hoverInfo: "ATS-score, readability & keyword health: instant PDF feedback.",
//     href: "/audit",
//     previewImage:
//       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_audit.png",
//   },
//   {
//     icon: <Globe size={20} className="text-blue-400" />,
//     title: "Job Tracker",
//     desc: "Track your job applications seamlessly—for free! Organize deadlines, notes, and statuses.",
//     hoverInfo: "Manage deadlines, links, interview notes & statuses all in one place.",
//     href: "/job-tracker",
//     previewImage:
//       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_job-tracker.png",
//   },
//   {
//     icon: <Brain size={20} className="text-pink-400" />,
//     title: "Resume Lab",
//     desc: "Enhance your resume with AI suggestions—no charge! Edit and rewrite live with GPT-4 power.",
//     hoverInfo: "Select, rewrite & annotate your resume live with GPT-4 power.",
//     href: "/resume-lab",
//     previewImage:
//       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_resume-lab+(1).png",
//   },
//   {
//     icon: <FileText size={20} className="text-red-400" />,
//     title: "Profile Hub",
//     desc: "Showcase your professional profile—completely free! Build a public profile and share success stories.",
//     hoverInfo: "Build a public profile, post success stories & request reviews.",
//     href: "/profile/reviews/create",
//     previewImage:
//       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_profile_user_2wAqP10NByHsUH6Aas6VsjzraH2.png",
//   },
//   {
//     icon: <MessageCircle size={20} className="text-purple-400" />,
//     title: "AI Chat Bot",
//     desc: "Get 1:1 career coaching anytime—for free! Ask about resumes, interviews, and more.",
//     hoverInfo: "Chat 1:1 for resume tips, interview prep, coding Qs & more.",
//     href: "/chat",
//     previewImage:
//       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_chat.png",
//   },
//   {
//     icon: <Mic size={20} className="text-teal-400" />,
//     title: "AI Interview Simulator",
//     desc: "Practice with personalized, audio-first interviews—free! Get feedback, EQ scores, and progress tracking.",
//     hoverInfo: "TTS questions, STT answers, STAR feedback, EQ scores & badges.",
//     href: "/interview-simulator",
//     previewImage:
//       "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_interview-simulator.png",
//     isNew: true,
//   },
// ];

// const jobSeekerJourney = [
//   {
//     hurdle: "Crafting a Standout Resume",
//     solution: "Use our AI Resume Builder to create an ATS-optimized resume in minutes with guided steps and modern templates.",
//     icon: <FileText size={32} className="text-indigo-400" />,
//   },
//   {
//     hurdle: "Writing a Tailored Cover Letter",
//     solution: "Generate a personalized cover letter in seconds with our Cover Letter Generator—just answer a few prompts!",
//     icon: <Send size={32} className="text-green-400" />,
//   },
//   {
//     hurdle: "Preparing for Interviews",
//     solution: "Practice with our new AI Interview Simulator—get personalized questions, audio feedback, and EQ analytics to ace your interview.",
//     icon: <Mic size={32} className="text-teal-400" />,
//   },
//   {
//     hurdle: "Tracking Job Applications",
//     solution: "Stay organized with our Job Tracker—manage deadlines, notes, and statuses all in one place, for free.",
//     icon: <Globe size={32} className="text-blue-400" />,
//   },
//   {
//     hurdle: "Networking & Building a Profile",
//     solution: "Showcase your achievements with Profile Hub—build a public profile and connect with professionals.",
//     icon: <Network size={32} className="text-red-400" />,
//   },
//   {
//     hurdle: "Growing Your Career",
//     solution: "Get ongoing support with our AI Chat Bot—receive career advice and strategies to advance your career.",
//     icon: <TrendingUp size={32} className="text-purple-400" />,
//   },
// ];

// const testimonials = [
//   {
//     quote: "AI Career Suite helped me land my dream job at Google! The resume builder and interview simulator were game-changers.",
//     author: "Sarah M., Software Engineer",
//   },
//   {
//     quote: "I love how easy it is to track my applications and get feedback. This platform is a must-have for any job seeker!",
//     author: "James L., Marketing Manager",
//   },
//   {
//     quote: "The AI Chat Bot gave me personalized advice that boosted my confidence. I got hired within a month!",
//     author: "Priya K., Data Analyst",
//   },
// ];

// const faqs = [
//   {
//     question: "Is AI Career Suite really free?",
//     answer: "Yes, all our core features are completely free with no hidden fees. Sign up to explore!",
//   },
//   {
//     question: "How does the AI work?",
//     answer: "We use advanced GPT-4 technology to provide personalized resume building, interview practice, and career advice.",
//   },
//   {
//     question: "Can I export my resume?",
//     answer: "Yes, you can export your resume as a PDF using our AI Resume Builder at any time.",
//   },
// ];

// export default function HomeContent({
//   blogs,
//   reviews,
//   successStories,
// }: {
//   blogs: Blog[];
//   reviews: Review[];
//   successStories: Story[];
// }) {
//   const { isSignedIn } = useUser();
//   const [showCookieBanner, setShowCookieBanner] = useState(false);
//   const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
//   const { scrollY } = useScroll();
//   const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);
//   const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

//   useEffect(() => {
//     if (!localStorage.getItem("cookiesAccepted")) {
//       setShowCookieBanner(true);
//     }
//   }, []);

//   const acceptCookies = () => {
//     localStorage.setItem("cookiesAccepted", "yes");
//     setShowCookieBanner(false);
//   };

//   const handleNextFeature = () => {
//     setCurrentFeatureIndex((p) => (p + 1) % featureCards.length);
//   };

//   const handlePrevFeature = () => {
//     setCurrentFeatureIndex((p) => (p - 1 + featureCards.length) % featureCards.length);
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
//       {/* Floating Particles */}
//       <div className="fixed inset-0 pointer-events-none">
//         {particles.map((particle, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-indigo-300 rounded-full opacity-20"
//             style={{
//               width: particle.width,
//               height: particle.height,
//               top: particle.top,
//               left: particle.left,
//             }}
//             animate={{
//               y: [0, -100, 0],
//               opacity: [0.2, 0.5, 0.2],
//               transition: { duration: 5 + (parseInt(particle.width) / 10), repeat: Infinity, ease: "easeInOut" },
//             }}
//           />
//         ))}
//       </div>

//       {/* Sticky Try Now Button */}
//       <motion.div
//         className="fixed bottom-6 right-6 z-50"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.5, delay: 1 }}
//       >
//         <Link href={isSignedIn ? "/audit" : "/sign-up"}>
//           <Button className="bg-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300 flex items-center gap-2 border border-indigo-400 shadow-indigo-500/30">
//             <Rocket size={20} />
//             {isSignedIn ? "My Profile" : "Try Now"}
//           </Button>
//         </Link>
//       </motion.div>

//       {/* Nav */}
//       <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <Image src={logo} alt="Logo" width={32} height={32} />
//             <span className="text-xl font-bold text-indigo-400">AI Career Suite</span>
//           </Link>
//           <div className="flex gap-4">
//             {!isSignedIn ? (
//               <>
//                 <Link href="/sign-in">
//                   <Button variant="ghost" className="text-indigo-300 hover:text-indigo-100">
//                     Sign In
//                   </Button>
//                 </Link>
//                 <Link href="/sign-up">
//                   <Button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-all duration-300 border border-indigo-400 shadow-indigo-500/30">
//                     Get Started
//                   </Button>
//                 </Link>
//               </>
//             ) : (
//               <Link href="/audit">
//                 <Button variant="ghost" className="text-indigo-300 hover:text-indigo-100">
//                   My Profile
//                 </Button>
//               </Link>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Hero */}
//       <motion.section
//         style={{ opacity: heroOpacity, scale: heroScale }}
//         className="pt-24 pb-16 relative"
//       >
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 text-center md:text-left"
//           >
//             <motion.h1
//               className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 leading-tight"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, staggerChildren: 0.05 }}
//             >
//               {"Your All-in-One Career Companion".split("").map((c, i) => (
//                 <motion.span key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
//                   {c}
//                 </motion.span>
//               ))}
//             </motion.h1>
//             <p className="text-lg text-gray-300 mb-6 leading-relaxed">
//               From crafting standout resumes to acing interviews and growing your career—AI Career Suite supports you every step of the way, for free.
//             </p>
//             <Link href="/sign-up">
//               <Button className="bg-indigo-500 text-white px-8 py-3 rounded-full hover:bg-indigo-600 transition-all duration-300 border border-indigo-400 shadow-indigo-500/30">
//                 Start for Free
//               </Button>
//             </Link>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="md:w-1/2"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05, rotate: 2 }}
//               className="relative"
//             >
//               <Image
//                 src={resumePreview}
//                 alt="Career Tools Preview"
//                 className="rounded-xl shadow-2xl"
//               />
//               <motion.div
//                 className="absolute inset-0 bg-indigo-500/20 rounded-xl"
//                 animate={{ opacity: [0.2, 0.4, 0.2] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* Quick Preview */}
//       <section className="py-16 bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 leading-tight">
//             Your Career, Supercharged in 3 Steps
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               { step: "1. Build Your Profile", desc: "Create a professional resume and profile with AI-powered tools in minutes." },
//               { step: "2. Prepare with AI", desc: "Practice interviews and get feedback with our AI Interview Simulator." },
//               { step: "3. Grow & Succeed", desc: "Track applications, network, and get career advice—all in one place." },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: i * 0.2 }}
//                 className="p-6 bg-gray-900/50 rounded-xl text-center border border-indigo-500/20 shadow-lg"
//               >
//                 <div className="text-indigo-400 mb-4 text-2xl font-bold">{item.step}</div>
//                 <p className="text-gray-300 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <Link href="/sign-up">
//               <Button className="bg-indigo-500 text-white px-8 py-3 rounded-full hover:bg-indigo-600 transition-all duration-300 border border-indigo-400 shadow-indigo-500/30">
//                 Get Started Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* Job Seeker Journey */}
//       <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-700">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-5xl font-bold text-center mb-12 leading-tight">Your Career Journey, Supported Every Step</h2>
//           <div className="relative">
//             <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-indigo-500/50 hidden md:block"></div>
//             {jobSeekerJourney.map((stage, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: i * 0.2 }}
//                 className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
//               >
//                 <div className="md:w-1/2 text-center md:text-left">
//                   <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
//                     {stage.icon}
//                     <h3 className="text-xl font-semibold text-indigo-300">Challenge: {stage.hurdle}</h3>
//                   </div>
//                   <p className="text-gray-300 leading-relaxed">{stage.solution}</p>
//                 </div>
//                 <div className="md:w-1/2 text-center">
//                   <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">
//                     {i + 1}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//             <div className="mt-8">
//               <div className="w-full bg-gray-700 rounded-full h-4">
//                 <motion.div
//                   className="bg-indigo-500 h-4 rounded-full"
//                   initial={{ width: "0%" }}
//                   whileInView={{ width: "100%" }}
//                   transition={{ duration: 2, ease: "easeInOut" }}
//                 />
//               </div>
//               <p className="text-center text-gray-300 mt-4 leading-relaxed">Complete your journey with AI Career Suite!</p>
//             </div>
//           </div>
//           <div className="text-center mt-8">
//             <Link href="/sign-up">
//               <Button className="bg-indigo-500 text-white px-8 py-3 rounded-full hover:bg-indigo-600 transition-all duration-300 border border-indigo-400 shadow-indigo-500/30">
//                 Start Your Journey
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* Testimonials */}
//       <section className="py-16 bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 leading-tight">
//             What Our Users Say
//           </h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {testimonials.map((testimonial, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: i * 0.2 }}
//                 className="p-6 bg-gray-900/50 rounded-xl text-center border border-indigo-500/20 shadow-lg"
//               >
//                 <div className="flex justify-center mb-4">
//                   <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
//                     <User size={24} className="text-gray-400" />
//                   </div>
//                 </div>
//                 <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
//                 <p className="text-indigo-400 font-semibold">{testimonial.author}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* Why Choose Us */}
//       <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-700">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-5xl font-bold text-center mb-12 leading-tight">Why Choose AI Career Suite?</h2>
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               { icon: <Star size={32} />, title: "Cutting-Edge AI", desc: "Leverage GPT-4 powered tools for unmatched precision and personalization." },
//               { icon: <Award size={32} />, title: "Proven Success", desc: "Trusted by thousands to land jobs at top companies worldwide." },
//               { icon: <Rocket size={32} />, title: "All-in-One Platform", desc: "Support for every career stage—from applications to growth." },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: i * 0.2 }}
//                 className="p-6 bg-gray-800/50 rounded-xl text-center border border-indigo-500/20 shadow-lg"
//               >
//                 <div className="text-indigo-400 mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-300 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* Feature Spotlight */}
//       <section className="py-16 bg-gray-900 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-20" />
//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 leading-tight">
//             Explore Our Cutting-Edge Features
//           </h2>
//           <div className="relative">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentFeatureIndex}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex flex-col md:flex-row items-center gap-8 bg-gray-800/50 p-8 rounded-xl border border-indigo-500/30 shadow-xl"
//               >
//                 <div className="md:w-1/2">
//                   <div className="flex items-center gap-4 mb-4">
//                     {featureCards[currentFeatureIndex].icon}
//                     <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
//                       {featureCards[currentFeatureIndex].title}
//                       {featureCards[currentFeatureIndex].isNew && (
//                         <span className="ml-2 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//                           New!
//                         </span>
//                       )}
//                     </h3>
//                   </div>
//                   <p className="text-gray-300 mb-4 leading-relaxed">{featureCards[currentFeatureIndex].desc}</p>
//                   <p className="text-sm text-gray-400 mb-4 leading-relaxed">{featureCards[currentFeatureIndex].hoverInfo}</p>
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                       Everything is Free!
//                     </span>
//                     <span className="text-sm text-indigo-300">No hidden fees, ever.</span>
//                   </div>
//                   <Link href={isSignedIn ? "/audit" : featureCards[currentFeatureIndex].href}>
//                     <Button className="bg-indigo-500 hover:bg-indigo-600 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 border border-indigo-400">
//                       {isSignedIn ? "My Profile" : "Try Now"}
//                     </Button>
//                   </Link>
//                 </div>
//                 <motion.div
//                   className="md:w-1/2 max-h-96 overflow-y-auto rounded-lg shadow-lg relative"
//                   whileHover={{ scale: 1.02 }}
//                   style={{ scrollbarWidth: "thin", scrollbarColor: "#6366f1 #1f2937" }}
//                 >
//                   <img
//                     src={featureCards[currentFeatureIndex].previewImage}
//                     alt={`${featureCards[currentFeatureIndex].title} Preview`}
//                     className="w-full h-auto rounded-lg"
//                   />
//                   <motion.div
//                     className="absolute inset-0 bg-indigo-500/10 rounded-lg"
//                     animate={{ opacity: [0.1, 0.3, 0.1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   />
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//             <button
//               onClick={handlePrevFeature}
//               className="absolute -left-4 top-1/2 -translate-y-1/2 bg-indigo-500 p-2 rounded-full hover:bg-indigo-600 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               onClick={handleNextFeature}
//               className="absolute -right-4 top-1/2 -translate-y-1/2 bg-indigo-500 p-2 rounded-full hover:bg-indigo-600 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* All Features */}
//       <section className="py-16 bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-5xl font-bold text-center mb-12 leading-tight">Discover All Features</h2>
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {featureCards.map((f, i) => (
//               <Link key={i} href={isSignedIn ? "/audit" : f.href}>
//                 <motion.div
//                   whileHover={{ scale: 1.05, rotate: 1 }}
//                   className="p-6 bg-gray-900/50 rounded-xl transition-all duration-300 border border-indigo-500/20 shadow-lg hover:shadow-indigo-500/30"
//                 >
//                   <div className="mb-4">{f.icon}</div>
//                   <h3 className="text-xl font-semibold mb-2">
//                     {f.title}
//                     {f.isNew && (
//                       <span className="ml-2 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//                         New!
//                       </span>
//                     )}
//                   </h3>
//                   <p className="text-gray-300 mb-4 leading-relaxed">{f.desc}</p>
//                   <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity leading-relaxed">{f.hoverInfo}</p>
//                 </motion.div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* CTA Banner */}
//       <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-5xl font-bold mb-4 leading-tight"
//           >
//             Ready to Transform Your Career?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-lg text-indigo-100 mb-6 leading-relaxed"
//           >
//             Join thousands of professionals using AI to land their dream jobs and grow their careers—all for free!
//           </motion.p>
//           <Link href={isSignedIn ? "/audit" : "/sign-up"}>
//             <Button className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-100 transition-all duration-300 border border-indigo-400 shadow-indigo-500/30">
//               {isSignedIn ? "My Profile" : "Sign Up Now"}
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* Trusted By */}
//       <section className="py-12 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <p className="text-gray-400 mb-2">Trusted by Top Companies</p>
//           <p className="text-sm text-gray-500 mb-6">Empowering professionals worldwide since 2023</p>
//           <div className="flex flex-wrap justify-center gap-8">
//             {[amazonLogo, metaLogo, appleLogo, googleLogo, bookingLogo].map((src, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.1 }}
//                 className="relative h-12 w-32 opacity-70 hover:opacity-100"
//               >
//                 <Image src={src} alt="" fill className="object-contain dark:hidden" />
//                 <Image
//                   src={[amazonLogoDark, metaLogoDark, appleLogoDark, googleLogoDark, bookingLogoDark][idx]}
//                   alt=""
//                   fill
//                   className="object-contain hidden dark:block"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* Featured Statistic */}
//       <section className="py-12 bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900/50 p-8 rounded-xl border border-indigo-500/20 shadow-lg"
//           >
//             <h3 className="text-4xl font-bold text-indigo-400 mb-4">10,000+</h3>
//             <p className="text-lg text-gray-300 leading-relaxed">Users Helped to Land Their Dream Jobs</p>
//           </motion.div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* Blogs & Reviews */}
//       <section className="py-16 bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-2">
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Latest Public Blogs</h2>
//             {blogs.length > 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="p-6 bg-gray-900/50 rounded-lg mb-4"
//               >
//                 <h3 className="font-semibold text-indigo-400 text-xl mb-2">Featured: {blogs[0].title}</h3>
//                 <p className="text-gray-300 leading-relaxed">{blogs[0].summary}</p>
//               </motion.div>
//             )}
//             <ul className="space-y-4">
//               {blogs.slice(1).map((b) => (
//                 <motion.li
//                   key={b.id}
//                   whileHover={{ scale: 1.02 }}
//                   className="p-4 bg-gray-900/50 rounded-lg"
//                 >
//                   <h3 className="font-semibold">{b.title}</h3>
//                   <p className="text-gray-300 leading-relaxed">{b.summary}</p>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold">Resume Review Requests</h2>
//               <Link href="/profile/reviews/create">
//                 <Button className="bg-indigo-500 hover:bg-indigo-600 text-sm">Request a Review</Button>
//               </Link>
//             </div>
//             <ul className="space-y-4">
//               {reviews.map((r) => (
//                 <motion.li
//                   key={r.id}
//                   whileHover={{ scale: 1.02 }}
//                   className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg"
//                 >
//                   <span className="truncate">{r.description || "No description"}</span>
//                   <Send size={20} className="text-yellow-400" />
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* Success Stories */}
//       <section className="py-16 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-bold">Success Stories</h2>
//             <Link href="/profile/reviews/create">
//               <Button className="bg-indigo-500 hover:bg-indigo-600 text-sm">Share Your Story</Button>
//             </Link>
//           </div>
//           <ul className="space-y-4">
//             {successStories.map((s) => (
//               <motion.li
//                 key={s.id}
//                 whileHover={{ scale: 1.02 }}
//                 className="p-4 bg-gray-800/50 rounded-lg"
//               >
//                 <h3 className="font-semibold text-indigo-400">{s.title}</h3>
//                 <p className="text-gray-300 mt-2 leading-relaxed">{s.excerpt}</p>
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* FAQ Section */}
//       <section className="py-16 bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-5xl font-bold text-center mb-12 leading-tight">Frequently Asked Questions</h2>
//           <div className="grid gap-6 md:grid-cols-2">
//             {faqs.map((faq, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="p-6 bg-gray-900/50 rounded-xl border border-indigo-500/20 shadow-lg"
//               >
//                 <h3 className="text-xl font-semibold text-indigo-400 mb-2">{faq.question}</h3>
//                 <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-700" /></div>

//       {/* Footer */}
//       <footer className="py-8 bg-gray-900 text-gray-300">
//         <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-4">
//           <div>
//             <h4 className="mb-2 font-semibold text-gray-100">AI Career Suite</h4>
//             <p className="leading-relaxed">Your all-in-one career companion.</p>
//             <div className="flex items-center gap-2 mt-4">
//               <TrustBadge size={20} className="text-indigo-400" />
//               <p className="text-sm">Trusted by 10,000+ Users</p>
//             </div>
//           </div>
//           <div>
//             <h4 className="mb-2 font-semibold text-gray-100">Legal</h4>
//             <ul className="space-y-1">
//               <li><Link href="/legal/terms-of-use" className="hover:underline">Terms of Use</Link></li>
//               <li><Link href="/legal/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
//               <li><Link href="/legal/data-policy" className="hover:underline">Data Policy</Link></li>
//               <li><Link href="/legal/ai-usage-policy" className="hover:underline">AI Usage Policy</Link></li>
//               <li><Link href="/legal/user-generated-content" className="hover:underline">User-Generated Content Terms</Link></li>
//               <li><button onClick={() => setShowCookieBanner(true)} className="hover:underline">Cookie Settings</button></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="mb-2 font-semibold text-gray-100">Follow Us</h4>
//             <div className="flex gap-4">
//               <a href="https://www.tiktok.com/@suman.gc79?_t=ZS-8wEqcco3w1Q&_r=1" target="_blank" rel="noopener noreferrer">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-indigo-400">
//                   <path d="M12.5 2C10.567 2 9 3.567 9 5.5V15.5C9 17.433 10.567 19 12.5 19C14.433 19 16 17.433 16 15.5V10H13V13.5C13 13.776 12.776 14 12.5 14C12.224 14 12 13.776 12 13.5V5.5C12 5.224 12.224 5 12.5 5C12.776 5 13 5.224 13 5.5V9H16V5.5C16 3.567 14.433 2 12.5 2Z" />
//                 </svg>
//               </a>
//               <a href="https://www.linkedin.com/in/ai-career-suite-741282364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-indigo-400">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.012-3.05-1.864-3.05-1.865 0-2.134 1.454-2.134 2.962v5.692h-3v-11h2.879v1.548h.041c.398-.753 1.369-1.547 2.816-1.547 3.015 0 3.574 1.984 3.574 4.565v6.434z"/>
//                 </svg>
//               </a>
//               <a href="https://x.com/aicareersuite?s=21&t=wQUX5cEWdSj5KmBQyxYmKw" target="_blank" rel="noopener noreferrer">
//                 <Twitter size={20} className="hover:text-indigo-400" />
//               </a>
//             </div>
//           </div>
//           <div>
//             <h4 className="mb-2 font-semibold text-gray-100">Stay Updated</h4>
//             <p className="mb-2 leading-relaxed">Subscribe to our newsletter:</p>
//             <div className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300 border border-gray-700 focus:outline-none focus:border-indigo-500"
//               />
//               <Button className="bg-indigo-500 hover:bg-indigo-600">
//                 <Mail size={16} />
//               </Button>
//             </div>
//             <Link href="/contact" className="block mt-4 text-sm hover:underline">Contact Us</Link>
//           </div>
//         </div>
//         <p className="text-center text-xs text-gray-500 mt-8">Last Updated: May 10, 2025</p>
//       </footer>

//       {/* Cookie Banner */}
//       <AnimatePresence>
//         {showCookieBanner && (
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 bg-gray-800 p-4 rounded-lg shadow-lg"
//           >
//             <p className="text-sm text-gray-300 leading-relaxed">
//               We use cookies to improve your experience. By continuing you accept our{" "}
//               <Link href="/legal/privacy-policy" className="underline">Privacy Policy</Link> and{" "}
//               <Link href="/legal/privacy-policy" className="underline">Cookie Policy</Link>.
//             </p>
//             <Button
//               size="sm"
//               onClick={acceptCookies}
//               className="mt-4 bg-indigo-500 hover:bg-indigo-600"
//             >
//               Got it
//             </Button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Send,
  Brain,
  ClipboardList,
  Globe,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Rocket,
  Mic,
  // Users,
  Network,
  TrendingUp,
  // Instagram,
  Twitter,
  Mail,
  Award as TrustBadge,
  User,
} from "lucide-react";
import logo from "@/assets/logo.png";
import resumePreview from "@/assets/resume-preview.jpg";
import amazonLogo from "@/logos/amazon.svg";
import appleLogo from "@/logos/apple.svg";
import bookingLogo from "@/logos/booking.svg";
import googleLogo from "@/logos/google.svg";
import metaLogo from "@/logos/meta.svg";
// import amazonLogoDark from "@/logos/amazon-dark.svg";
// import appleLogoDark from "@/logos/apple-dark.svg";
// import bookingLogoDark from "@/logos/booking-dark.svg";
// import googleLogoDark from "@/logos/google-dark.svg";
// import metaLogoDark from "@/logos/meta-dark.svg";

interface Blog {
  id: string;
  title: string;
  summary: string;
}
interface Review {
  id: string;
  description?: string;
}
interface Story {
  id: string;
  title: string;
  excerpt: string;
}

// Pre-generate particle properties with consistent string values
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    width: `${5 + (i % 10) * 0.5}px`,
    height: `${5 + (i % 8) * 0.5}px`,
    top: `${(i * 5) % 100}%`,
    left: `${(i * 7) % 100}%`,
  }));
};

const particles = generateParticles(20);

const featureCards = [
  {
    icon: <FileText size={20} className="text-blue-400" />,
    title: "AI Resume Builder",
    desc: "Craft ATS-optimized resumes effortlessly—completely free! Use modern templates and export as PDF in minutes.",
    hoverInfo:
      "Step-by-step wizard + modern templates: build, style & export PDFs.",
    href: "/resumes",
    previewImage:
      "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_editor_resumeId%3Dcma9r2ppd000ssjeur7z6gj7m%26step%3Deducation.png",
  },
  {
    icon: <Send size={20} className="text-teal-400" />,
    title: "Cover Letter Generator",
    desc: "Generate tailored cover letters in seconds—100% free! Answer a few prompts for a personalized letter.",
    hoverInfo:
      "Answer a few prompts → receive a tailored cover letter instantly.",
    href: "/cover-letter",
    previewImage:
      "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_cover-letter.png",
  },
  {
    icon: <ClipboardList size={20} className="text-peach-400" />,
    title: "Resume Audit",
    desc: "Get AI-powered resume feedback instantly—for free! Optimize for ATS, readability, and keywords.",
    hoverInfo: "ATS-score, readability & keyword health: instant PDF feedback.",
    href: "/audit",
    previewImage:
      "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_audit.png",
  },
  {
    icon: <Globe size={20} className="text-blue-400" />,
    title: "Job Tracker",
    desc: "Track your job applications seamlessly—for free! Organize deadlines, notes, and statuses.",
    hoverInfo:
      "Manage deadlines, links, interview notes & statuses all in one place.",
    href: "/job-tracker",
    previewImage:
      "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_job-tracker.png",
  },
  {
    icon: <Brain size={20} className="text-teal-400" />,
    title: "Resume Lab",
    desc: "Enhance your resume with AI suggestions—no charge! Edit and rewrite live with GPT-4 power.",
    hoverInfo: "Select, rewrite & annotate your resume live with GPT-4 power.",
    href: "/resume-lab",
    previewImage:
      "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_resume-lab+(1).png",
  },
  {
    icon: <FileText size={20} className="text-peach-400" />,
    title: "Profile Hub",
    desc: "Showcase your professional profile—completely free! Build a public profile and share success stories.",
    hoverInfo:
      "Build a public profile, post success stories & request reviews.",
    href: "/profile/reviews/create",
    previewImage:
      "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_profile_user_2wAqP10NByHsUH6Aas6VsjzraH2.png",
  },
  {
    icon: <MessageCircle size={20} className="text-blue-400" />,
    title: "AI Chat Bot",
    desc: "Get 1:1 career coaching anytime—for free! Ask about resumes, interviews, and more.",
    hoverInfo: "Chat 1:1 for resume tips, interview prep, coding Qs & more.",
    href: "/chat",
    previewImage:
      "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_chat.png",
  },
  {
    icon: <Mic size={20} className="text-teal-400" />,
    title: "AI Interview Simulator",
    desc: "Practice with personalized, audio-first interviews—free! Get feedback, EQ scores, and progress tracking.",
    hoverInfo: "TTS questions, STT answers, STAR feedback, EQ scores & badges.",
    href: "/interview-simulator",
    previewImage:
      "https://airesumeimages.s3.us-east-1.amazonaws.com/localhost_3001_interview-simulator.png",
    isNew: true,
  },
];

const jobSeekerJourney = [
  {
    hurdle: "Crafting a Standout Resume",
    solution:
      "Use our AI Resume Builder to create an ATS-optimized resume in minutes with guided steps and modern templates.",
    icon: <FileText size={32} className="text-blue-400" />,
  },
  {
    hurdle: "Writing a Tailored Cover Letter",
    solution:
      "Generate a personalized cover letter in seconds with our Cover Letter Generator—just answer a few prompts!",
    icon: <Send size={32} className="text-teal-400" />,
  },
  {
    hurdle: "Preparing for Interviews",
    solution:
      "Practice with our new AI Interview Simulator—get personalized questions, audio feedback, and EQ analytics to ace your interview.",
    icon: <Mic size={32} className="text-peach-400" />,
  },
  {
    hurdle: "Tracking Job Applications",
    solution:
      "Stay organized with our Job Tracker—manage deadlines, notes, and statuses all in one place, for free.",
    icon: <Globe size={32} className="text-blue-400" />,
  },
  {
    hurdle: "Networking & Building a Profile",
    solution:
      "Showcase your achievements with Profile Hub—build a public profile and connect with professionals.",
    icon: <Network size={32} className="text-teal-400" />,
  },
  {
    hurdle: "Growing Your Career",
    solution:
      "Get ongoing support with our AI Chat Bot—receive career advice and strategies to advance your career.",
    icon: <TrendingUp size={32} className="text-peach-400" />,
  },
];

const testimonials = [
  {
    quote:
      "AI Career Suite helped me land my dream job at Google! The resume builder and interview simulator were game-changers.",
    author: "Sarah M., Software Engineer",
  },
  {
    quote:
      "I love how easy it is to track my applications and get feedback. This platform is a must-have for any job seeker!",
    author: "James L., Marketing Manager",
  },
  {
    quote:
      "The AI Chat Bot gave me personalized advice that boosted my confidence. I got hired within a month!",
    author: "Priya K., Data Analyst",
  },
];

const faqs = [
  {
    question: "Is AI Career Suite really free?",
    answer:
      "Yes, all our core features are completely free with no hidden fees. Sign up to explore!",
  },
  {
    question: "How does the AI work?",
    answer:
      "We use advanced GPT-4 technology to provide personalized resume building, interview practice, and career advice.",
  },
  {
    question: "Can I export my resume?",
    answer:
      "Yes, you can export your resume as a PDF using our AI Resume Builder at any time.",
  },
];

export default function HomeContent({
  blogs,
  reviews,
  successStories,
}: {
  blogs: Blog[];
  reviews: Review[];
  successStories: Story[];
}) {
  const { isSignedIn } = useUser();
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    if (!localStorage.getItem("cookiesAccepted")) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "yes");
    setShowCookieBanner(false);
  };

  const handleNextFeature = () => {
    setCurrentFeatureIndex((p) => (p + 1) % featureCards.length);
  };

  const handlePrevFeature = () => {
    setCurrentFeatureIndex(
      (p) => (p - 1 + featureCards.length) % featureCards.length,
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-50 text-gray-800">
      {/* Floating Particles */}
      <div className="pointer-events-none fixed inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-40 ${i % 2 === 0 ? "bg-blue-300" : "bg-teal-300"}`}
            style={{
              width: particle.width,
              height: particle.height,
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.4, 0.7, 0.4],
              transition: {
                duration: 5 + parseInt(particle.width) / 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      {/* Sticky Try Now Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link href={isSignedIn ? "/audit" : "/sign-up"}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button className="flex items-center gap-2 rounded-full border border-blue-400 bg-blue-300 px-6 py-3 text-gray-800 shadow-md shadow-blue-300/30 transition-all duration-300 hover:bg-blue-400">
              <Rocket size={20} />
              {isSignedIn ? "My Profile" : "Try Now"}
            </Button>
          </motion.div>
        </Link>
      </motion.div>

      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={32} height={32} />
            <span className="text-xl font-bold text-blue-400">
              AI Career Suite
            </span>
          </Link>
          <div className="flex gap-4">
            {!isSignedIn ? (
              <>
                <Link href="/sign-in">
                  <Button
                    variant="ghost"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button className="rounded-full border border-blue-400 bg-blue-300 px-4 py-2 text-gray-800 shadow-blue-300/30 transition-all duration-300 hover:bg-blue-400">
                      Get Started
                    </Button>
                  </motion.div>
                </Link>
              </>
            ) : (
              <Link href="/audit">
                <Button
                  variant="ghost"
                  className="text-blue-500 hover:text-blue-600"
                >
                  My Profile
                </Button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative bg-gradient-to-b from-blue-50 to-teal-50 pb-20 pt-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:w-1/2 md:text-left"
          >
            <motion.h1
              className="mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, staggerChildren: 0.05 }}
            >
              {"Your All-in-One Career Companion".split("").map((c, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {c}
                </motion.span>
              ))}
            </motion.h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              From crafting standout resumes to acing interviews and growing
              your career—AI Career Suite supports you every step of the way,
              for free.
            </p>

            {!isSignedIn ? (
              <Link href="/sign-up">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button className="rounded-full border border-blue-400 bg-blue-300 px-8 py-3 text-gray-800 shadow-blue-300/30 transition-all duration-300 hover:bg-blue-400">
                    Start for Free
                  </Button>
                </motion.div>
              </Link>
            ) : (
              <Link href="/audit">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button className="rounded-full border border-blue-400 bg-blue-300 px-8 py-3 text-gray-800 shadow-blue-300/30 transition-all duration-300 hover:bg-blue-400">
                    My Profile
                  </Button>
                </motion.div>
              </Link>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative"
            >
              <Image
                src={resumePreview}
                alt="Career Tools Preview"
                className="rounded-xl border border-blue-100 shadow-md"
              />
              <motion.div
                className="absolute inset-0 rounded-xl bg-blue-200/20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* Quick Preview */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-center text-5xl font-bold leading-tight text-transparent"
          >
            Your Career, Supercharged in 3 Steps
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "1. Build Your Profile",
                desc: "Create a professional resume and profile with AI-powered tools in minutes.",
              },
              {
                step: "2. Prepare with AI",
                desc: "Practice interviews and get feedback with our AI Interview Simulator.",
              },
              {
                step: "3. Grow & Succeed",
                desc: "Track applications, network, and get career advice—all in one place.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="rounded-xl border border-blue-100 bg-white p-6 text-center shadow-md hover:shadow-blue-300/30"
              >
                <div className="mb-4 text-2xl font-bold text-blue-400">
                  {item.step}
                </div>
                <p className="leading-relaxed text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            {!isSignedIn ? (
              <Link href="/sign-up">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button className="rounded-full border border-blue-400 bg-blue-300 px-8 py-3 text-gray-800 shadow-blue-300/30 transition-all duration-300 hover:bg-blue-400">
                    Get Started Now
                  </Button>
                </motion.div>
              </Link>
            ) : (
              <Link href="/audit">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button className="rounded-full border border-blue-400 bg-blue-300 px-8 py-3 text-gray-800 shadow-blue-300/30 transition-all duration-300 hover:bg-blue-400">
                    My Profile
                  </Button>
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* Job Seeker Journey */}
      <section className="bg-gradient-to-r from-blue-100 to-teal-100 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-5xl font-bold leading-tight text-gray-800"
          >
            Your Career Journey, Supported Every Step
          </motion.h2>
          <div className="relative">
            {/* Adjust the vertical line to stop at the content */}
            <div
              className="absolute left-1/2 hidden w-1 -translate-x-1/2 bg-blue-300 md:block"
              style={{ height: `${jobSeekerJourney.length * 150}px` }} // Adjust height based on content
            ></div>
            {jobSeekerJourney.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`mb-12 flex flex-col items-center gap-8 md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="text-center md:w-1/2 md:text-left">
                  <div className="mb-4 flex items-center justify-center gap-4 md:justify-start">
                    {stage.icon}
                    <h3 className="text-xl font-semibold text-blue-500">
                      Challenge: {stage.hurdle}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    {stage.solution}
                  </p>
                </div>
                <div className="text-center md:w-1/2">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-300 font-bold text-gray-800">
                    {i + 1}
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 h-4 w-full rounded-full bg-gray-200">
                <motion.div
                  className="h-4 rounded-full bg-blue-400"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
              <p className="mb-4 text-lg text-blue-500">
                Complete your journey with AI Career Suite!
              </p>
              {!isSignedIn ? (
                <Link href="/sign-up">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button className="rounded-full border border-blue-400 bg-blue-300 px-8 py-3 text-gray-800 shadow-blue-300/30 transition-all duration-300 hover:bg-blue-400">
                      Start Your Journey
                    </Button>
                  </motion.div>
                </Link>
              ) : (
                <Link href="/resume-lab">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button className="rounded-full border border-blue-400 bg-blue-300 px-8 py-3 text-gray-800 shadow-blue-300/30 transition-all duration-300 hover:bg-blue-400">
                      My Profile
                    </Button>
                  </motion.div>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-center text-5xl font-bold leading-tight text-transparent"
          >
            What Our Users Say
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="rounded-xl border border-blue-100 bg-blue-50 p-6 text-center shadow-md hover:shadow-blue-300/30"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <User size={24} className="text-gray-500" />
                  </div>
                </div>
                <p className="mb-4 italic leading-relaxed text-gray-600">{`"${testimonial.quote}"`}</p>
                <p className="font-semibold text-blue-500">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-teal-100 to-blue-100 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-5xl font-bold leading-tight text-gray-800"
          >
            Why Choose AI Career Suite?
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <Star size={32} className="text-blue-400" />,
                title: "Cutting-Edge AI",
                desc: "Leverage GPT-4 powered tools for unmatched precision and personalization.",
              },
              {
                icon: <Award size={32} className="text-teal-400" />,
                title: "Proven Success",
                desc: "Trusted by thousands to land jobs at top companies worldwide.",
              },
              {
                icon: <Rocket size={32} className="text-peach-400" />,
                title: "All-in-One Platform",
                desc: "Support for every career stage—from applications to growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="rounded-xl border border-teal-100 bg-white p-6 text-center shadow-md hover:shadow-teal-300/30"
              >
                <div className="mb-4 text-blue-400">{item.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* Feature Spotlight */}
      <section className="relative bg-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-100 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-center text-5xl font-bold leading-tight text-transparent"
          >
            Explore Our Cutting-Edge Features
          </motion.h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatureIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-8 rounded-xl border border-blue-100 bg-white p-8 shadow-md md:flex-row"
              >
                <div className="md:w-1/2">
                  <div className="mb-4 flex items-center gap-4">
                    {featureCards[currentFeatureIndex].icon}
                    <h3 className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-2xl font-semibold text-transparent">
                      {featureCards[currentFeatureIndex].title}
                      {featureCards[currentFeatureIndex].isNew && (
                        <span className="ml-2 rounded-full bg-teal-300 px-2 py-1 text-xs font-semibold text-gray-800">
                          New!
                        </span>
                      )}
                    </h3>
                  </div>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    {featureCards[currentFeatureIndex].desc}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500">
                    {featureCards[currentFeatureIndex].hoverInfo}
                  </p>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-teal-300 px-3 py-1 text-xs font-semibold text-gray-800">
                      Everything is Free!
                    </span>
                    <span className="text-sm text-blue-500">
                      No hidden fees, ever.
                    </span>
                  </div>
                  <Link href={featureCards[currentFeatureIndex].href}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button className="border border-blue-400 bg-blue-300 text-gray-800 shadow-md transition-all duration-300 hover:bg-blue-400 hover:shadow-blue-300/50">
                        Try Now
                      </Button>
                    </motion.div>
                  </Link>
                </div>
                <motion.div
                  className="relative overflow-y-auto rounded-lg shadow-md md:w-1/2"
                  style={{
                    maxHeight: "400px",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#93c5fd #f3f4f6",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={featureCards[currentFeatureIndex].previewImage}
                    alt={`${featureCards[currentFeatureIndex].title} Preview`}
                    className="w-full rounded-lg object-contain"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-blue-200/10"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            {/* Navigation Buttons */}
            <motion.div
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={handlePrevFeature}
                className="rounded-full bg-blue-300 p-2 text-gray-800 shadow-md transition-all duration-300 hover:bg-blue-400 hover:shadow-blue-300/50"
              >
                <ChevronLeft size={20} />
              </Button>
            </motion.div>
            <motion.div
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={handleNextFeature}
                className="rounded-full bg-blue-300 p-2 text-gray-800 shadow-md transition-all duration-300 hover:bg-blue-400 hover:shadow-blue-300/50"
              >
                <ChevronRight size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* All Features */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-5xl font-bold leading-tight text-gray-800"
          >
            Discover All Features
          </motion.h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((f, i) => (
              <Link key={i} href={f.href}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-blue-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-blue-300/30"
                >
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {f.title}
                    {f.isNew && (
                      <span className="ml-2 rounded-full bg-teal-300 px-2 py-1 text-xs font-semibold text-gray-800">
                        New!
                      </span>
                    )}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600">{f.desc}</p>
                  <p className="text-sm leading-relaxed text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">
                    {f.hoverInfo}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-200 to-teal-200 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-5xl font-bold leading-tight text-gray-800"
          >
            Ready to Transform Your Career?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-lg leading-relaxed text-gray-600"
          >
            Join thousands of professionals using AI to land their dream jobs
            and grow their careers—all for free!
          </motion.p>
          <Link href={isSignedIn ? "/audit" : "/sign-up"}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button className="rounded-full border border-blue-400 bg-white px-8 py-3 text-blue-600 shadow-blue-300/30 transition-all duration-300 hover:bg-blue-50">
                {isSignedIn ? "My Profile" : "Sign Up Now"}
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* Trusted By */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="mb-2 text-gray-600">Trusted by Top Companies</p>
          <p className="mb-6 text-sm text-gray-500">
            Empowering professionals worldwide since 2023
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[amazonLogo, metaLogo, appleLogo, googleLogo, bookingLogo].map(
              (src, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="relative h-12 w-32 opacity-70 hover:opacity-100"
                >
                  <Image src={src} alt="" fill className="object-contain" />
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* Featured Statistic */}
      <section className="bg-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl border border-blue-100 bg-white p-8 shadow-md"
          >
            <h3 className="mb-4 text-4xl font-bold text-blue-400">10,000+</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              Users Helped to Land Their Dream Jobs
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* Blogs & Reviews */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Latest Public Blogs
            </h2>
            {blogs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 rounded-lg bg-blue-50 p-6"
              >
                <h3 className="mb-2 text-xl font-semibold text-blue-500">
                  Featured: {blogs[0].title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {blogs[0].summary}
                </p>
              </motion.div>
            )}
            <ul className="space-y-4">
              {blogs.slice(1).map((b) => (
                <motion.li
                  key={b.id}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-lg bg-blue-50 p-4"
                >
                  <h3 className="font-semibold text-gray-800">{b.title}</h3>
                  <p className="leading-relaxed text-gray-600">{b.summary}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Resume Review Requests
              </h2>
              <Link href="/profile/reviews/create">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button className="bg-blue-300 text-sm text-gray-800 hover:bg-blue-400">
                    Request a Review
                  </Button>
                </motion.div>
              </Link>
            </div>
            <ul className="space-y-4">
              {reviews.map((r) => (
                <motion.li
                  key={r.id}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between rounded-lg bg-blue-50 p-4"
                >
                  <span className="truncate text-gray-600">
                    {r.description || "No description"}
                  </span>
                  <Send size={20} className="text-peach-400" />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* Success Stories */}
      <section className="bg-teal-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Success Stories
            </h2>
            <Link href="/profile/reviews/create">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button className="bg-blue-300 text-sm text-gray-800 hover:bg-blue-400">
                  Share Your Story
                </Button>
              </motion.div>
            </Link>
          </div>
          <ul className="space-y-4">
            {successStories.map((s) => (
              <motion.li
                key={s.id}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg bg-white p-4"
              >
                <h3 className="font-semibold text-blue-500">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {s.excerpt}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-5xl font-bold leading-tight text-gray-800"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-blue-100 bg-blue-50 p-6 shadow-md hover:shadow-blue-300/30"
              >
                <h3 className="mb-2 text-xl font-semibold text-blue-500">
                  {faq.question}
                </h3>
                <p className="leading-relaxed text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-t border-dashed border-blue-200" />
      </div>

      {/* Footer */}
      <footer className="bg-blue-50 py-8 text-gray-600">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4">
          <div>
            <h4 className="mb-2 font-semibold text-gray-800">
              AI Career Suite
            </h4>
            <p className="leading-relaxed">Your all-in-one career companion.</p>
            <div className="mt-4 flex items-center gap-2">
              <TrustBadge size={20} className="text-blue-400" />
              <p className="text-sm">Trusted by 10,000+ Users</p>
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-800">Legal</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/legal/terms-of-use" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/data-policy" className="hover:underline">
                  Data Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/ai-usage-policy" className="hover:underline">
                  AI Usage Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/user-generated-content"
                  className="hover:underline"
                >
                  User-Generated Content Terms
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowCookieBanner(true)}
                  className="hover:underline"
                >
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-800">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@suman.gc79?_t=ZS-8wEqcco3w1Q&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hover:text-blue-500"
                >
                  <path d="M12.5 2C10.567 2 9 3.567 9 5.5V15.5C9 17.433 10.567 19 12.5 19C14.433 19 16 17.433 16 15.5V10H13V13.5C13 13.776 12.776 14 12.5 14C12.224 14 12 13.776 12 13.5V5.5C12 5.224 12.224 5 12.5 5C12.776 5 13 5.224 13 5.5V9H16V5.5C16 3.567 14.433 2 12.5 2Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ai-career-suite-741282364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hover:text-blue-500"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.012-3.05-1.864-3.05-1.865 0-2.134 1.454-2.134 2.962v5.692h-3v-11h2.879v1.548h.041c.398-.753 1.369-1.547 2.816-1.547 3.015 0 3.574 1.984 3.574 4.565v6.434z" />
                </svg>
              </a>
              <a
                href="https://x.com/aicareersuite?s=21&t=wQUX5cEWdSj5KmBQyxYmKw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} className="hover:text-blue-500" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-800">Stay Updated</h4>
            <p className="mb-2 leading-relaxed">Subscribe to our newsletter:</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-600 focus:border-blue-300 focus:outline-none"
              />
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button className="bg-blue-300 text-gray-800 hover:bg-blue-400">
                  <Mail size={16} />
                </Button>
              </motion.div>
            </div>
            <Link
              href="/contact"
              className="mt-4 block text-sm hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          Last Updated: May 10, 2025
        </p>
      </footer>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-lg bg-white p-4 shadow-md"
          >
            <p className="text-sm leading-relaxed text-gray-600">
              We use cookies to improve your experience. By continuing you
              accept our{" "}
              <Link href="/legal/privacy-policy" className="underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/legal/privacy-policy" className="underline">
                Cookie Policy
              </Link>
              .
            </p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="sm"
                onClick={acceptCookies}
                className="mt-4 bg-blue-300 text-gray-800 hover:bg-blue-400"
              >
                Got it
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
