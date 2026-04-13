export interface CleanupEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  attendanceNote: string;
  workPerformed: string[];
  status: "completed" | "upcoming";
}

export const cleanups: CleanupEvent[] = [
  {
    id: "june-2025-river-cleanup",
    title: "Lower Withlacoochee River Cleanup",
    date: "June 4, 2025",
    location: "Lower Withlacoochee River, Citrus County, FL",
    description:
      "Organized river cleanup targeting accumulated debris along a 2-mile stretch of the Lower Withlacoochee. Volunteers worked from kayaks and along the bank to remove marsh debris, discarded fishing line, and assorted refuse.",
    attendanceNote:
      "Attendance documented via physical sign-in sheet at staging area.",
    workPerformed: [
      "Marsh debris removal along riverbank",
      "Bagged debris collected and hauled for disposal",
      "Photo documentation of conditions before and after",
      "Volunteer sign-in and participation records maintained",
    ],
    status: "completed",
  },
  {
    id: "sept-2025-estuary-sweep",
    title: "Estuary Shoreline Sweep",
    date: "May 2, 2026",
    location: "Withlacoochee River Estuary, Gulf Coast, FL",
    description:
      "Targeted cleanup of tidal debris deposits along the estuary shoreline where the Lower Withlacoochee meets the Gulf. Focus on removing plastic, derelict crab traps, and storm-deposited refuse from sensitive marsh habitat.",
    attendanceNote:
      "Attendance documented via physical sign-in sheet at staging area.",
    workPerformed: [
      "Tidal debris removal from marsh edge",
      "Derelict trap identification and removal",
      "Bagged refuse collected for proper disposal",
      "Photo evidence of debris types and volumes recorded",
      "Volunteer hours and participation logged",
    ],
    status: "upcoming",
  },
];
