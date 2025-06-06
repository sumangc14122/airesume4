// // import React from "react";
// // import Link from "next/link";
// // import prisma from "@/lib/prisma";
// // import ShareProfileButton from "@/components/ShareProfileButton";
// // import { currentUser } from "@clerk/nextjs/server";

// // type Props = {
// //   params: { id: string };
// // };

// // export default async function ProfilePage({ params }: Props) {
// //   const { id } = await params;
// //   const viewer = await currentUser();
// //   const currentUserId = viewer?.id;

// //   const p = await prisma.profile.findUnique({
// //     where: { userId: id },
// //   });

// //   if (!p || (p.userId !== currentUserId && !p.isPublic)) {
// //     return (
// //       <div className="max-w-md mx-auto py-12 text-center text-gray-600 dark:text-gray-300">
// //         Profile not found or is private.
// //       </div>
// //     );
// //   }

// //   const [stories, blogs] = await Promise.all([
// //     prisma.post.findMany({
// //       where: { profileId: p.id, type: "SUCCESS" },
// //       orderBy: { createdAt: "desc" },
// //     }),
// //     prisma.post.findMany({
// //       where: { profileId: p.id, type: "BLOG" },
// //       orderBy: { createdAt: "desc" },
// //     }),
// //   ]);

// //   const reviewRequests = await prisma.reviewRequest.findMany({
// //     where: { profileId: p.id },
// //     orderBy: { createdAt: "desc" },
// // });

// //   const initials = p.name
// //     .split(" ")
// //     .map((n) => n[0])
// //     .join("")
// //     .substring(0, 2)
// //     .toUpperCase();
// //   const skills = p.skills?.split(",").map((s) => s.trim()) || [];
// //   let projects: { name: string; link: string }[] = [];
// //   try {
// //     projects = p.projects ? JSON.parse(p.projects) : [];
// //   } catch (e) {
// //     console.error("Projects parse error:", e);
// //   }

// //   const formatDateTime = (date: Date) => {
// //     const day = String(date.getDate()).padStart(2, "0");
// //     const month = String(date.getMonth() + 1).padStart(2, "0");
// //     const year = date.getFullYear();
// //     const hours = String(date.getHours()).padStart(2, "0");
// //     const minutes = String(date.getMinutes()).padStart(2, "0");
// //     return `${day}/${month}/${year} ${hours}:${minutes}`;
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-4xl mx-auto">
// //         {/* Hero Section */}
// //         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
// //           <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
// //             <div className="flex items-center gap-6">
// //               {p.profilePicture ? (
// //                 <img
// //                   src={p.profilePicture}
// //                   alt={p.name}
// //                   className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 dark:border-blue-400 shadow-md"
// //                 />
// //               ) : (
// //                 <div className="w-20 h-20 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-md">
// //                   {initials}
// //                 </div>
// //               )}
// //               <div className="text-center sm:text-left">
// //                 <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
// //                   {p.name}
// //                 </h1>
// //                 {p.tagline && (
// //                   <p className="text-lg text-gray-600 dark:text-gray-300 italic mt-1">
// //                     {p.tagline}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>
// //             <div className="flex gap-4">
// //               <ShareProfileButton />
// //               {currentUserId === p.userId && (
// //                 <Link
// //                   href="/profile/create"
// //                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200 shadow-sm"
// //                 >
// //                   Edit Profile
// //                 </Link>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main Content Grid */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           {/* Left Column: About, Skills, Projects */}
// //           <div className="lg:col-span-1 space-y-8">
// //             {/* About Section */}
// //             {p.bio && (
// //               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
// //                 <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
// //                   About
// //                 </h2>
// //                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed break-words">
// //                   {p.bio}
// //                 </p>
// //                 <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
// //                   {p.jobTitle && (
// //                     <li>
// //                       <strong className="font-medium">Title:</strong>{" "}
// //                       {p.jobTitle}
// //                     </li>
// //                   )}
// //                   {p.socialLink && (
// //                     <li>
// //                       <strong className="font-medium">Social:</strong>{" "}
// //                       <a
// //                         href={p.socialLink}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition duration-200 break-all"
// //                       >
// //                         {p.socialLink}
// //                       </a>
// //                     </li>
// //                   )}
// //                   {p.industry && (
// //                     <li>
// //                       <strong className="font-medium">Industry:</strong>{" "}
// //                       {p.industry}
// //                     </li>
// //                   )}
// //                 </ul>
// //               </div>
// //             )}

// //             {/* Skills Section */}
// //             {skills.length > 0 && (
// //               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
// //                 <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
// //                   Skills
// //                 </h2>
// //                 <ul className="flex flex-wrap gap-2">
// //                   {skills.map((skill) => (
// //                     <li
// //                       key={skill}
// //                       className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-200"
// //                     >
// //                       {skill}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}

// //             {/* Projects Section */}
// //             {projects.length > 0 && (
// //               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
// //                 <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
// //                   Projects
// //                 </h2>
// //                 <ul className="space-y-2 text-gray-600 dark:text-gray-300">
// //                   {projects.map((proj, idx) => (
// //                     <li key={idx}>
// //                       <a
// //                         href={proj.link}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition duration-200 break-all"
// //                       >
// //                         {proj.name}
// //                       </a>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //           </div>

// //           {/* Right Column: Stories, Blogs, Reviews */}
// //           <div className="lg:col-span-2 space-y-8">
// //             {/* Resume & Cover Letter Buttons */}
// //             {(p.resumeUrl || p.coverLetterUrl) && (
// //               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-wrap gap-4">
// //                 {p.resumeUrl && (
// //                   <a
// //                     href={p.resumeUrl}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200 shadow-sm"
// //                   >
// //                     View Resume
// //                   </a>
// //                 )}
// //                 {p.coverLetterUrl && (
// //                   <a
// //                     href={p.coverLetterUrl}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200 shadow-sm"
// //                   >
// //                     View Cover Letter
// //                   </a>
// //                 )}
// //               </div>
// //             )}

// //             {/* Success Stories Section */}
// //             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
// //               <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
// //                 Success Stories
// //               </h2>
// //               {stories.length === 0 ? (
// //                 <p className="text-gray-500 dark:text-gray-400">
// //                   No stories yet.
// //                 </p>
// //               ) : (
// //                 <ul className="space-y-4">
// //                   {stories.map((s) => (
// //                     <li
// //                       key={s.id}
// //                       className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200 relative"
// //                     >
// //                       <div className="flex justify-between mb-2 text-sm text-gray-600 dark:text-gray-400">
// //                         <span>
// //                           {formatDateTime(new Date(s.createdAt))}
// //                         </span>
// //                         <span>{s.isAnonymous ? "Anonymous" : p.name}</span>
// //                       </div>
// //                       {s.title && (
// //                         <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 break-words">
// //                           {s.title}
// //                         </h3>
// //                       )}
// //                       <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap break-words">
// //                         {s.content}
// //                       </p>
// //                       {currentUserId === p.userId && (
// //                         <Link
// //                           href={`/profile/${id}/posts/${s.id}/edit`}
// //                           className="absolute top-2 right-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-200"
// //                         >
// //                           Edit
// //                         </Link>
// //                       )}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               )}
// //             </div>

// //             {/* Blog Posts Section */}
// //             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
// //               <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
// //                 Blog Posts
// //               </h2>
// //               {blogs.length === 0 ? (
// //                 <p className="text-gray-500 dark:text-gray-400">
// //                   No blog posts yet.
// //                 </p>
// //               ) : (
// //                 <ul className="space-y-4">
// //                   {blogs.map((b) => {
// //                     const snippet =
// //                       b.content.length > 150
// //                         ? b.content.slice(0, 150) + "…"
// //                         : b.content;
// //                     return (
// //                       <li
// //                         key={b.id}
// //                         className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200 relative"
// //                       >
// //                         <div className="flex justify-between mb-1">
// //                           <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 break-words">
// //                             {b.title}
// //                           </h3>
// //                           <span className="text-sm text-gray-600 dark:text-gray-400">
// //                             {formatDateTime(new Date(b.createdAt))}
// //                           </span>
// //                         </div>
// //                         {currentUserId === p.userId && (
// //                           <Link
// //                             href={`/profile/${id}/posts/${b.id}/edit`}
// //                             className="absolute top-2 right-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-200"
// //                           >
// //                             Edit
// //                           </Link>
// //                         )}
// //                         <p className="mb-2 text-gray-600 dark:text-gray-300 whitespace-pre-wrap break-words">
// //                           {snippet}
// //                         </p>
// //                         <Link
// //                           href={`/profile/${id}/posts/${b.id}`}
// //                           className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
// //                         >
// //                           Read more
// //                         </Link>
// //                       </li>
// //                     );
// //                   })}
// //                 </ul>
// //               )}
// //             </div>

// //             {/* Resume Review Requests Section */}
// //             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
// //               <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
// //                 Resume Review Requests
// //               </h2>
// //               {currentUserId === p.userId && (
// //                 <Link
// //                   href="/profile/reviews/create"
// //                   className="inline-block mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200 shadow-sm"
// //                 >
// //                   Ask for Review
// //                 </Link>
// //               )}
// //               {reviewRequests.length === 0 ? (
// //                 <p className="text-gray-500 dark:text-gray-400">
// //                   No review requests yet.
// //                 </p>
// //               ) : (
// //                 <ul className="space-y-4">
// //                   {reviewRequests.map((r) => (
// //                     <li
// //                       key={r.id}
// //                       className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200"
// //                     >
// //                       <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
// //                         <span>
// //                           {formatDateTime(new Date(r.createdAt))}
// //                         </span>
// //                         {r.isPublic ? (
// //                           <span className="text-green-600 dark:text-green-400">
// //                             Public
// //                           </span>
// //                         ) : (
// //                           <span className="text-red-600 dark:text-red-400">
// //                             Private
// //                           </span>
// //                         )}
// //                       </div>
// //                       <p className="mb-2 text-gray-600 dark:text-gray-300 break-words">
// //                         <strong>Resume:</strong>{" "}
// //                         <a
// //                           href={r.resumeUrl}
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                           className="text-blue-600 dark:text-blue-400 hover:underline"
// //                         >
// //                           View
// //                         </a>
// //                       </p>
// //                       {r.description && (
// //                         <p className="mb-2 text-gray-600 dark:text-gray-300 break-words">
// //                           {r.description}
// //                         </p>
// //                       )}
// //                       <Link
// //                         href={`/profile/${id}/reviews/${r.id}`}
// //                         className="text-blue-600 dark:text-blue-400 hover:underline"
// //                       >
// //                         View & Comment
// //                       </Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";
// import Link from "next/link";
// import prisma from "@/lib/prisma";
// import ShareProfileButton from "@/components/ShareProfileButton";
// import { currentUser } from "@clerk/nextjs/server";

// type Props = {
//   params: { id: string };
// };

// export default async function ProfilePage({ params }: Props) {
//   const { id } = await params;
//   const viewer = await currentUser();
//   const currentUserId = viewer?.id;

//   const p = await prisma.profile.findUnique({
//     where: { userId: id },
//   });

//   if (!p || (p.userId !== currentUserId && !p.isPublic)) {
//     return (
//       <div className="max-w-md mx-auto py-12 text-center text-gray-600 dark:text-gray-300">
//         Profile not found or is private.
//       </div>
//     );
//   }

//   const [stories, blogs] = await Promise.all([
//     prisma.post.findMany({
//       where: { profileId: p.id, type: "SUCCESS" },
//       orderBy: { createdAt: "desc" },
//     }),
//     prisma.post.findMany({
//       where: { profileId: p.id, type: "BLOG" },
//       orderBy: { createdAt: "desc" },
//     }),
//   ]);

//   const reviewRequests = await prisma.reviewRequest.findMany({
//     where: { profileId: p.id },
//     orderBy: { createdAt: "desc" },
//   });

//   const initials = p.name
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .substring(0, 2)
//     .toUpperCase();
//   const skills = p.skills?.split(",").map((s) => s.trim()) || [];
//   let projects: { name: string; link: string }[] = [];
//   try {
//     projects = p.projects ? JSON.parse(p.projects) : [];
//   } catch (e) {
//     console.error("Projects parse error:", e);
//   }

//   const formatDateTime = (date: Date) => {
//     const day = String(date.getDate()).padStart(2, "0");
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const year = date.getFullYear();
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     return `${day}/${month}/${year} ${hours}:${minutes}`;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Hero Section */}
//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
//           <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
//             <div className="flex items-center gap-6">
//               {p.profilePicture ? (
//                 <img
//                   src={p.profilePicture}
//                   alt={p.name}
//                   className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 dark:border-blue-400 shadow-md"
//                 />
//               ) : (
//                 <div className="w-20 h-20 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-md">
//                   {initials}
//                 </div>
//               )}
//               <div className="text-center sm:text-left">
//                 <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
//                   {p.name}
//                 </h1>
//                 {p.tagline && (
//                   <p className="text-lg text-gray-600 dark:text-gray-300 italic mt-1">
//                     {p.tagline}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <ShareProfileButton />
//               {currentUserId === p.userId && (
//                 <Link
//                   href="/profile/create"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200 shadow-sm"
//                 >
//                   Edit Profile
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column: About, Skills, Projects */}
//           <div className="lg:col-span-1 space-y-8">
//             {/* About Section */}
//             {p.bio && (
//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
//                   About
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed break-words">
//                   {p.bio}
//                 </p>
//                 <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
//                   {p.jobTitle && (
//                     <li>
//                       <strong className="font-medium">Title:</strong>{" "}
//                       {p.jobTitle}
//                     </li>
//                   )}
//                   {p.socialLink && (
//                     <li>
//                       <strong className="font-medium">Social:</strong>{" "}
//                       <a
//                         href={p.socialLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition duration-200 break-all"
//                       >
//                         {p.socialLink}
//                       </a>
//                     </li>
//                   )}
//                   {p.industry && (
//                     <li>
//                       <strong className="font-medium">Industry:</strong>{" "}
//                       {p.industry}
//                     </li>
//                   )}
//                 </ul>
//               </div>
//             )}

//             {/* Skills Section */}
//             {skills.length > 0 && (
//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
//                   Skills
//                 </h2>
//                 <ul className="flex flex-wrap gap-2">
//                   {skills.map((skill) => (
//                     <li
//                       key={skill}
//                       className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-200"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Projects Section */}
//             {projects.length > 0 && (
//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
//                   Projects
//                 </h2>
//                 <ul className="space-y-2 text-gray-600 dark:text-gray-300">
//                   {projects.map((proj, idx) => (
//                     <li key={idx}>
//                       <a
//                         href={proj.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition duration-200 break-all"
//                       >
//                         {proj.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Right Column: Stories, Blogs, Reviews */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Resume & Cover Letter Buttons */}
//             {(p.resumeUrl || p.coverLetterUrl) && (
//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-wrap gap-4">
//                 {p.resumeUrl && (
//                   <a
//                     href={p.resumeUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200 shadow-sm"
//                   >
//                     View Resume
//                   </a>
//                 )}
//                 {p.coverLetterUrl && (
//                   <a
//                     href={p.coverLetterUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200 shadow-sm"
//                   >
//                     View Cover Letter
//                   </a>
//                 )}
//               </div>
//             )}

//             {/* Success Stories Section */}
//             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
//               <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
//                 Success Stories
//               </h2>
//               {stories.length === 0 ? (
//                 <p className="text-gray-500 dark:text-gray-400">
//                   No stories yet.
//                 </p>
//               ) : (
//                 <ul className="space-y-4">
//                   {stories.map((s) => (
//                     <li
//                       key={s.id}
//                       className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200"
//                     >
//                       <div className="flex justify-between mb-2 text-sm text-gray-600 dark:text-gray-400">
//                         <span>
//                           {formatDateTime(new Date(s.createdAt))}
//                         </span>
//                         <span>{s.isAnonymous ? "Anonymous" : p.name}</span>
//                       </div>
//                       {s.title && (
//                         <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 break-words">
//                           {s.title}
//                         </h3>
//                       )}
//                       <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap break-words mb-2">
//                         {s.content}
//                       </p>
//                       {currentUserId === p.userId && (
//                         <div className="flex justify-end">
//                           <Link
//                             href={`/profile/${id}/posts/${s.id}/edit`}
//                             className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-200"
//                           >
//                             Edit
//                           </Link>
//                         </div>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* Blog Posts Section */}
//             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
//               <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
//                 Blog Posts
//               </h2>
//               {blogs.length === 0 ? (
//                 <p className="text-gray-500 dark:text-gray-400">
//                   No blog posts yet.
//                 </p>
//               ) : (
//                 <ul className="space-y-4">
//                   {stories.map((b) => {
//                     const snippet =
//                       b.content.length > 150
//                         ? b.content.slice(0, 150) + "…"
//                         : b.content;
//                     return (
//                       <li
//                         key={b.id}
//                         className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200"
//                       >
//                         <div className="flex justify-between mb-1">
//                           <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 break-words">
//                             {b.title}
//                           </h3>
//                           <span className="text-sm text-gray-600 dark:text-gray-400">
//                             {formatDateTime(new Date(b.createdAt))}
//                           </span>
//                         </div>
//                         <p className="mb-2 text-gray-600 dark:text-gray-300 whitespace-pre-wrap break-words">
//                           {snippet}
//                         </p>
//                         <div className="flex justify-between items-center">
//                           <Link
//                             href={`/profile/${id}/posts/${b.id}`}
//                             className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
//                           >
//                             Read more
//                           </Link>
//                           {currentUserId === p.userId && (
//                             <Link
//                               href={`/profile/${id}/posts/${b.id}/edit`}
//                               className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-200"
//                             >
//                               Edit
//                             </Link>
//                           )}
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               )}
//             </div>

//             {/* Resume Review Requests Section */}
//             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
//               <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
//                 Resume Review Requests
//               </h2>
//               {currentUserId === p.userId && (
//                 <Link
//                   href="/profile/reviews/create"
//                   className="inline-block mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200 shadow-sm"
//                 >
//                   Ask for Review
//                 </Link>
//               )}
//               {reviewRequests.length === 0 ? (
//                 <p className="text-gray-500 dark:text-gray-400">
//                   No review requests yet.
//                 </p>
//               ) : (
//                 <ul className="space-y-4">
//                   {reviewRequests.map((r) => (
//                     <li
//                       key={r.id}
//                       className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200"
//                     >
//                       <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
//                         <span>
//                           {formatDateTime(new Date(r.createdAt))}
//                         </span>
//                         {r.isPublic ? (
//                           <span className="text-green-600 dark:text-green-400">
//                             Public
//                           </span>
//                         ) : (
//                           <span className="text-red-600 dark:text-red-400">
//                             Private
//                           </span>
//                         )}
//                       </div>
//                       <p className="mb-2 text-gray-600 dark:text-gray-300 break-words">
//                         <strong>Resume:</strong>{" "}
//                         <a
//                           href={r.resumeUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-600 dark:text-blue-400 hover:underline"
//                         >
//                           View
//                         </a>
//                       </p>
//                       {r.description && (
//                         <p className="mb-2 text-gray-600 dark:text-gray-300 break-words">
//                           {r.description}
//                         </p>
//                       )}
//                       <Link
//                         href={`/profile/${id}/reviews/${r.id}`}
//                         className="text-blue-600 dark:text-blue-400 hover:underline"
//                       >
//                         View & Comment
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import Link from "next/link";
// import prisma from "@/lib/prisma";
// import ShareProfileButton from "@/components/ShareProfileButton";
// import { currentUser } from "@clerk/nextjs/server";

// // type Props = {
// //   params: { id: string };
// // };

// // export default async function ProfilePage({ params }: Props) {
//   interface PageProps {
//     params: {
//       id: string;
//     };
//   }

//   export default async function ProfilePage({ params }: PageProps) {
//   const { id } = params; // ✅ FIXED HERE

// import React from "react";
// import Link from "next/link";
// import prisma from "@/lib/prisma";
// import ShareProfileButton from "@/components/ShareProfileButton";
// import { currentUser } from "@clerk/nextjs/server";

// export default async function ProfilePage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const { id } = params;

//   const viewer = await currentUser();
//   const currentUserId = viewer?.id;

//   const p = await prisma.profile.findUnique({
//     where: { userId: id },
//   });

//   if (!p || (p.userId !== currentUserId && !p.isPublic)) {
//     return (
//       <div className="mx-auto max-w-md py-12 text-center text-gray-600 dark:text-gray-300">
//         Profile not found or is private.
//       </div>
//     );
//   }

//   const [stories, blogs] = await Promise.all([
//     prisma.post.findMany({
//       where: { profileId: p.id, type: "SUCCESS" },
//       orderBy: { createdAt: "desc" },
//     }),
//     prisma.post.findMany({
//       where: { profileId: p.id, type: "BLOG" },
//       orderBy: { createdAt: "desc" },
//     }),
//   ]);

//   // const reviewRequests = await prisma.reviewRequest.findMany({
//   //   where: { profileId: p.id },
//   //   orderBy: { createdAt: "desc" },
//   // });

//   const reviewRequests = await prisma.reviewRequest.findMany({
//     where: { profileId: p.id },
//     orderBy: { createdAt: "desc" },
//   });

//   const initials = p.name
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .substring(0, 2)
//     .toUpperCase();
//   const skills = p.skills?.split(",").map((s) => s.trim()) || [];
//   let projects: { name: string; link: string }[] = [];
//   try {
//     projects = p.projects ? JSON.parse(p.projects) : [];
//   } catch (e) {
//     console.error("Projects parse error:", e);
//   }

//   const formatDateTime = (date: Date) => {
//     const day = String(date.getDate()).padStart(2, "0");
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const year = date.getFullYear();
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     return `${day}/${month}/${year} ${hours}:${minutes}`;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 px-4 py-12 dark:from-gray-800 dark:to-gray-900 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-4xl">
//         {/* Hero Section */}
//         <div className="mb-8 rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-700">
//           <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
//             <div className="flex items-center gap-6">
//               {p.profilePicture ? (
//                 <img
//                   src={p.profilePicture}
//                   alt={p.name}
//                   className="h-20 w-20 rounded-full border-4 border-teal-500 object-cover shadow-md dark:border-teal-400"
//                 />
//               ) : (
//                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-600 text-2xl font-bold text-white shadow-md dark:bg-teal-500">
//                   {initials}
//                 </div>
//               )}
//               <div className="text-center sm:text-left">
//                 <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
//                   {p.name}
//                 </h1>
//                 {p.tagline && (
//                   <p className="mt-1 text-lg italic text-gray-500 dark:text-gray-400">
//                     {p.tagline}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <ShareProfileButton />
//               {currentUserId === p.userId && (
//                 <Link
//                   href="/profile/create"
//                   className="rounded-lg bg-teal-600 px-4 py-2 text-white shadow-sm transition duration-200 hover:bg-teal-700 dark:hover:bg-teal-500"
//                 >
//                   Edit Profile
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           {/* Left Column: About, Skills, Projects */}
//           <div className="space-y-8 lg:col-span-1">
//             {/* About Section */}
//             {p.bio && (
//               <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
//                 <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
//                   About
//                 </h2>
//                 <p className="break-words leading-relaxed text-gray-600 dark:text-gray-300">
//                   {p.bio}
//                 </p>
//                 <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
//                   {p.jobTitle && (
//                     <li>
//                       <strong className="font-medium">Title:</strong>{" "}
//                       {p.jobTitle}
//                     </li>
//                   )}
//                   {p.socialLink && (
//                     <li>
//                       <strong className="font-medium">Social:</strong>{" "}
//                       <a
//                         href={p.socialLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="break-all text-teal-600 underline transition duration-200 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
//                       >
//                         {p.socialLink}
//                       </a>
//                     </li>
//                   )}
//                   {p.industry && (
//                     <li>
//                       <strong className="font-medium">Industry:</strong>{" "}
//                       {p.industry}
//                     </li>
//                   )}
//                 </ul>
//               </div>
//             )}

//             {/* Skills Section */}
//             {skills.length > 0 && (
//               <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
//                 <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
//                   Skills
//                 </h2>
//                 <ul className="flex flex-wrap gap-2">
//                   {skills.map((skill) => (
//                     <li
//                       key={skill}
//                       className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 transition duration-200 hover:bg-teal-200 dark:bg-teal-800 dark:text-teal-200 dark:hover:bg-teal-700"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Projects Section */}
//             {projects.length > 0 && (
//               <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
//                 <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
//                   Projects
//                 </h2>
//                 <ul className="space-y-2 text-gray-600 dark:text-gray-300">
//                   {projects.map((proj, idx) => (
//                     <li key={idx}>
//                       <a
//                         href={proj.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="break-all text-teal-600 underline transition duration-200 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
//                       >
//                         {proj.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Right Column: Stories, Blogs, Reviews */}
//           <div className="space-y-8 lg:col-span-2">
//             {/* Resume & Cover Letter Buttons */}
//             {(p.resumeUrl || p.coverLetterUrl) && (
//               <div className="flex flex-wrap gap-4 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
//                 {p.resumeUrl && (
//                   <a
//                     href={p.resumeUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="rounded-lg bg-teal-600 px-6 py-2 text-white shadow-sm transition duration-200 hover:bg-teal-700 dark:hover:bg-teal-500"
//                   >
//                     View Resume
//                   </a>
//                 )}
//                 {p.coverLetterUrl && (
//                   <a
//                     href={p.coverLetterUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="rounded-lg bg-teal-600 px-6 py-2 text-white shadow-sm transition duration-200 hover:bg-teal-700 dark:hover:bg-teal-500"
//                   >
//                     View Cover Letter
//                   </a>
//                 )}
//               </div>
//             )}

//             {/* Success Stories Section */}
//             <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
//               <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
//                 Success Stories
//               </h2>
//               {stories.length === 0 ? (
//                 <p className="text-gray-500 dark:text-gray-400">
//                   No stories yet.
//                 </p>
//               ) : (
//                 <ul className="space-y-4">
//                   {stories.map((s) => (
//                     <li
//                       key={s.id}
//                       className="rounded-lg border border-gray-200 p-4 transition duration-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-600"
//                     >
//                       <div className="mb-2 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
//                         <span>{formatDateTime(new Date(s.createdAt))}</span>
//                         <span>{s.isAnonymous ? "Anonymous" : p.name}</span>
//                       </div>
//                       {s.title && (
//                         <h3 className="mb-1 break-words font-semibold text-gray-900 dark:text-gray-100">
//                           {s.title}
//                         </h3>
//                       )}
//                       <div className="flex items-end justify-between">
//                         <p className="whitespace-pre-wrap break-words text-gray-600 dark:text-gray-300">
//                           {s.content}
//                         </p>
//                         {currentUserId === p.userId && (
//                           <Link
//                             href={`/profile/${id}/posts/${s.id}/edit`}
//                             className="ml-4 whitespace-nowrap rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 transition duration-200 hover:bg-teal-200 dark:bg-teal-800 dark:text-teal-200 dark:hover:bg-teal-700"
//                           >
//                             Edit
//                           </Link>
//                         )}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* Blog Posts Section */}
//             <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
//               <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
//                 Blog Posts
//               </h2>
//               {blogs.length === 0 ? (
//                 <p className="text-gray-500 dark:text-gray-400">
//                   No blog posts yet.
//                 </p>
//               ) : (
//                 <ul className="space-y-4">
//                   {blogs.map((b) => {
//                     const snippet =
//                       b.content.length > 150
//                         ? b.content.slice(0, 150) + "…"
//                         : b.content;
//                     return (
//                       <li
//                         key={b.id}
//                         className="rounded-lg border border-gray-200 p-4 transition duration-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-600"
//                       >
//                         <div className="mb-1 flex justify-between">
//                           <h3 className="break-words text-lg font-semibold text-gray-900 dark:text-gray-100">
//                             {b.title}
//                           </h3>
//                           <span className="text-sm text-gray-600 dark:text-gray-400">
//                             {formatDateTime(new Date(b.createdAt))}
//                           </span>
//                         </div>
//                         <p className="mb-2 whitespace-pre-wrap break-words text-gray-600 dark:text-gray-300">
//                           {snippet}
//                         </p>
//                         <div className="flex items-center justify-between">
//                           <Link
//                             href={`/profile/${id}/posts/${b.id}`}
//                             className="text-sm text-teal-600 hover:underline dark:text-teal-400"
//                           >
//                             Read more
//                           </Link>
//                           {currentUserId === p.userId && (
//                             <Link
//                               href={`/profile/${id}/posts/${b.id}/edit`}
//                               className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 transition duration-200 hover:bg-teal-200 dark:bg-teal-800 dark:text-teal-200 dark:hover:bg-teal-700"
//                             >
//                               Edit
//                             </Link>
//                           )}
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               )}
//             </div>

//             {/* Resume Review Requests Section
//             <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-6">
//               <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
//                 Resume Review Requests
//               </h2>
//               {currentUserId === p.userId && (
//                 <Link
//                   href="/profile/reviews/create"
//                   className="inline-block mb-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-teal-500 transition duration-200 shadow-sm"
//                 >
//                   Ask for Review
//                 </Link>
//               )}
//               {reviewRequests.length === 0 ? (
//                 <p className="text-gray-500 dark:text-gray-400">
//                   No review requests yet.
//                 </p>
//               ) : (
//                 <ul className="space-y-4">
//                   {reviewRequests.map((r) => (
//                     <li
//                       key={r.id}
//                       className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-200"
//                     >
//                       <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
//                         <span>
//                           {formatDateTime(new Date(r.createdAt))}
//                         </span>
//                         {r.isPublic ? (
//                           <span className="text-green-600 dark:text-green-400">
//                             Public
//                           </span>
//                         ) : (
//                           <span className="text-red-600 dark:text-red-400">
//                             Private
//                           </span>
//                         )}
//                       </div>
//                       <p className="mb-2 text-gray-600 dark:text-gray-300 break-words">
//                         <strong>Resume:</strong>{" "}
//                         <a
//                           href={r.resumeUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-teal-600 dark:text-teal-400 hover:underline"
//                         >
//                           View
//                         </a>
//                       </p>
//                       {r.description && (
//                         <p className="mb-2 text-gray-600 dark:text-gray-300 break-words">
//                           {r.description}
//                         </p>
//                       )}
//                       <Link
//                         href={`/profile/${id}/reviews/${r.id}`}
//                         className="text-teal-600 dark:text-teal-400 hover:underline"
//                       >
//                         View & Comment
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div> */}
//             <div className="rounded-lg bg-white p-6 shadow">
//               <h2 className="mb-4 text-xl font-semibold">
//                 Resume Review Requests
//               </h2>
//               {currentUserId === p.userId && (
//                 <Link
//                   href={`/profile/${id}/reviews/create`}
//                   className="mb-4 inline-block rounded bg-teal-600 px-4 py-2 text-white"
//                 >
//                   Ask for Review
//                 </Link>
//               )}
//               {reviewRequests.length === 0 ? (
//                 <p className="text-gray-500">No review requests yet.</p>
//               ) : (
//                 <ul className="space-y-4">
//                   {reviewRequests.map((r) => (
//                     <li key={r.id} className="rounded border p-4">
//                       <div className="mb-2 flex justify-between text-sm text-gray-600">
//                         <span>{new Date(r.createdAt).toLocaleString()}</span>
//                         <span
//                           className={
//                             r.isPublic ? "text-green-600" : "text-red-600"
//                           }
//                         >
//                           {r.isPublic ? "Public" : "Private"}
//                         </span>
//                       </div>
//                       <p className="mb-2">
//                         <strong>Resume:</strong>{" "}
//                         <a
//                           href={r.resumeUrl}
//                           target="_blank"
//                           className="text-teal-600 hover:underline"
//                         >
//                           View
//                         </a>
//                       </p>
//                       {r.description && <p className="mb-2">{r.description}</p>}
//                       <Link
//                         href={`/profile/${id}/reviews/${r.id}`}
//                         className="text-teal-600 hover:underline"
//                       >
//                         View & Comment
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import ShareProfileButton from "@/components/ShareProfileButton";
import { currentUser } from "@clerk/nextjs/server";

interface ProfilePageProps {
  params: Promise<{ id: string }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = await params; // Resolve the Promise

  const viewer = await currentUser();
  const currentUserId = viewer?.id;

  const p = await prisma.profile.findUnique({
    where: { userId: id },
  });

  if (!p || (p.userId !== currentUserId && !p.isPublic)) {
    return (
      <div className="mx-auto max-w-md py-12 text-center text-gray-600 dark:text-gray-300">
        Profile not found or is private.
      </div>
    );
  }

  const [stories, blogs, reviewRequests] = await Promise.all([
    prisma.post.findMany({
      where: { profileId: p.id, type: "SUCCESS" },
      orderBy: { createdAt: "desc" },
    }),
    prisma.post.findMany({
      where: { profileId: p.id, type: "BLOG" },
      orderBy: { createdAt: "desc" },
    }),
    prisma.reviewRequest.findMany({
      where: { profileId: p.id },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const initials = p.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
  const skills = p.skills?.split(",").map((s) => s.trim()) || [];
  let projects: { name: string; link: string }[] = [];
  try {
    projects = p.projects ? JSON.parse(p.projects) : [];
  } catch (e) {
    console.error("Projects parse error:", e);
  }

  const formatDateTime = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 px-4 py-12 dark:from-gray-800 dark:to-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-700">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
            <div className="flex items-center gap-6">
              {p.profilePicture ? (
                <img
                  src={p.profilePicture}
                  alt={p.name}
                  className="h-20 w-20 rounded-full border-4 border-teal-500 object-cover shadow-md dark:border-teal-400"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-600 text-2xl font-bold text-white shadow-md dark:bg-teal-500">
                  {initials}
                </div>
              )}
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {p.name}
                </h1>
                {p.tagline && (
                  <p className="mt-1 text-lg italic text-gray-500 dark:text-gray-400">
                    {p.tagline}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <ShareProfileButton />
              {currentUserId === p.userId && (
                <Link
                  href="/profile/create"
                  className="rounded-lg bg-teal-600 px-4 py-2 text-white shadow-sm transition duration-200 hover:bg-teal-700 dark:hover:bg-teal-500"
                >
                  Edit Profile
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column: About, Skills, Projects */}
          <div className="space-y-8 lg:col-span-1">
            {/* About Section */}
            {p.bio && (
              <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  About
                </h2>
                <p className="break-words leading-relaxed text-gray-600 dark:text-gray-300">
                  {p.bio}
                </p>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  {p.jobTitle && (
                    <li>
                      <strong className="font-medium">Title:</strong>{" "}
                      {p.jobTitle}
                    </li>
                  )}
                  {p.socialLink && (
                    <li>
                      <strong className="font-medium">Social:</strong>{" "}
                      <a
                        href={p.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-teal-600 underline transition duration-200 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
                      >
                        {p.socialLink}
                      </a>
                    </li>
                  )}
                  {p.industry && (
                    <li>
                      <strong className="font-medium">Industry:</strong>{" "}
                      {p.industry}
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Skills Section */}
            {skills.length > 0 && (
              <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Skills
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 transition duration-200 hover:bg-teal-200 dark:bg-teal-800 dark:text-teal-200 dark:hover:bg-teal-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Projects Section */}
            {projects.length > 0 && (
              <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Projects
                </h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {projects.map((proj, idx) => (
                    <li key={idx}>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-teal-600 underline transition duration-200 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
                      >
                        {proj.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Stories, Blogs, Reviews */}
          <div className="space-y-8 lg:col-span-2">
            {/* Resume & Cover Letter Buttons */}
            {(p.resumeUrl || p.coverLetterUrl) && (
              <div className="flex flex-wrap gap-4 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
                {p.resumeUrl && (
                  <a
                    href={p.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-teal-600 px-6 py-2 text-white shadow-sm transition duration-200 hover:bg-teal-700 dark:hover:bg-teal-500"
                  >
                    View Resume
                  </a>
                )}
                {p.coverLetterUrl && (
                  <a
                    href={p.coverLetterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-teal-600 px-6 py-2 text-white shadow-sm transition duration-200 hover:bg-teal-700 dark:hover:bg-teal-500"
                  >
                    View Cover Letter
                  </a>
                )}
              </div>
            )}

            {/* Success Stories Section */}
            <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                Success Stories
              </h2>
              {stories.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">
                  No stories yet.
                </p>
              ) : (
                <ul className="space-y-4">
                  {stories.map((s) => (
                    <li
                      key={s.id}
                      className="rounded-lg border border-gray-200 p-4 transition duration-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="mb-2 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>{formatDateTime(new Date(s.createdAt))}</span>
                        <span>{s.isAnonymous ? "Anonymous" : p.name}</span>
                      </div>
                      {s.title && (
                        <h3 className="mb-1 break-words font-semibold text-gray-900 dark:text-gray-100">
                          {s.title}
                        </h3>
                      )}
                      <div className="flex items-end justify-between">
                        <p className="whitespace-pre-wrap break-words text-gray-600 dark:text-gray-300">
                          {s.content}
                        </p>
                        {currentUserId === p.userId && (
                          <Link
                            href={`/profile/${id}/posts/${s.id}/edit`}
                            className="ml-4 whitespace-nowrap rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 transition duration-200 hover:bg-teal-200 dark:bg-teal-800 dark:text-teal-200 dark:hover:bg-teal-700"
                          >
                            Edit
                          </Link>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Blog Posts Section */}
            <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700">
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                Blog Posts
              </h2>
              {blogs.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">
                  No blog posts yet.
                </p>
              ) : (
                <ul className="space-y-4">
                  {blogs.map((b) => {
                    const snippet =
                      b.content.length > 150
                        ? b.content.slice(0, 150) + "…"
                        : b.content;
                    return (
                      <li
                        key={b.id}
                        className="rounded-lg border border-gray-200 p-4 transition duration-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <div className="mb-1 flex justify-between">
                          <h3 className="break-words text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {b.title}
                          </h3>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {formatDateTime(new Date(b.createdAt))}
                          </span>
                        </div>
                        <p className="mb-2 whitespace-pre-wrap break-words text-gray-600 dark:text-gray-300">
                          {snippet}
                        </p>
                        <div className="flex items-center justify-between">
                          <Link
                            href={`/profile/${id}/posts/${b.id}`}
                            className="text-sm text-teal-600 hover:underline dark:text-teal-400"
                          >
                            Read more
                          </Link>
                          {currentUserId === p.userId && (
                            <Link
                              href={`/profile/${id}/posts/${b.id}/edit`}
                              className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 transition duration-200 hover:bg-teal-200 dark:bg-teal-800 dark:text-teal-200 dark:hover:bg-teal-700"
                            >
                              Edit
                            </Link>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Resume Review Requests Section */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-xl font-semibold">
                Resume Review Requests
              </h2>
              {currentUserId === p.userId && (
                <Link
                  href={`/profile/${id}/reviews/create`}
                  className="mb-4 inline-block rounded bg-teal-600 px-4 py-2 text-white"
                >
                  Ask for Review
                </Link>
              )}
              {reviewRequests.length === 0 ? (
                <p className="text-gray-500">No review requests yet.</p>
              ) : (
                <ul className="space-y-4">
                  {reviewRequests.map((r) => (
                    <li key={r.id} className="rounded border p-4">
                      <div className="mb-2 flex justify-between text-sm text-gray-600">
                        <span>{new Date(r.createdAt).toLocaleString()}</span>
                        <span
                          className={
                            r.isPublic ? "text-green-600" : "text-red-600"
                          }
                        >
                          {r.isPublic ? "Public" : "Private"}
                        </span>
                      </div>
                      <p className="mb-2">
                        <strong>Resume:</strong>{" "}
                        <a
                          href={r.resumeUrl}
                          target="_blank"
                          className="text-teal-600 hover:underline"
                        >
                          View
                        </a>
                      </p>
                      {r.description && <p className="mb-2">{r.description}</p>}
                      <Link
                        href={`/profile/${id}/reviews/${r.id}`}
                        className="text-teal-600 hover:underline"
                      >
                        View & Comment
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
