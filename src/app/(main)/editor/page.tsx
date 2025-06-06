// import prisma from "@/lib/prisma";
// import { resumeDataInclude } from "@/lib/types";
// import { auth } from "@clerk/nextjs/server";
// import { Metadata } from "next";
// import ResumeEditor from "./ResumeEditor";

// // interface PageProps {
// //   searchParams: Promise<{ resumeId?: string }>;
// // }

// interface PageProps {
//   searchParams: {
//     resumeId?: string;
//   };
// }

// export const metadata: Metadata = {
//   title: "Design your resume",
// };

// export default async function Page({ searchParams }: PageProps) {
//   const { resumeId } = searchParams;

//   const { userId } = await auth();

//   if (!userId) {
//     return null;
//   }

//   const resumeToEdit = resumeId
//     ? await prisma.resume.findUnique({
//         where: { id: resumeId, userId },
//         include: resumeDataInclude,
//       })
//     : null;

//   return <ResumeEditor resumeToEdit={resumeToEdit} />;
// }

import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

interface PageProps {
  searchParams: Promise<{ resumeId?: string }>;
}

export const metadata: Metadata = {
  title: "Design your resume",
};

export default async function Page({ searchParams }: PageProps) {
  const { resumeId } = await searchParams; // Resolve the Promise

  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const resumeToEdit = resumeId
    ? await prisma.resume.findUnique({
        where: { id: resumeId, userId },
        include: resumeDataInclude,
      })
    : null;

  return <ResumeEditor resumeToEdit={resumeToEdit} />;
}
