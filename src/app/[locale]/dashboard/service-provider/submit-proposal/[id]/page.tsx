import SubmitProposalForm from "@/components/dashboard/proposals/submit-proposal-form";
import { notFound } from "next/navigation";

// Sample job data - in a real app, this would come from an API or database
const jobData = {
  id: 1,
  title: "Bathroom Renovation in London",
  description: `Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellen tesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus it amet ligula ullamcorper, pulvinar ante id, tristique erat.`,
  responsibilities: [
    "Quisque semper gravida est et consectetur.",
    "Curabitur blandit lorem velit, vitae pretium leo placerat eget.",
    "Morbi mattis in ipsum ac tempus.",
    "Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.",
    "Vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.",
    "Lobortis vel lectus. Nulla at risus ut diam.",
    "Commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.",
    "Odio metus posuere lorem, id condimentum erat velit nec neque.",
    "Dui sodales ut. Curabitur tempus augue.",
  ],
  skills: ["Ac Repair", "Handyman", "Electrician", "Plumber"],
  profileRate: 4.5,
  clientBudget: {
    min: 10.0,
    max: 25.0,
  },
};

export default function SubmitProposalPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number.parseInt(params.id);

  // In a real app, you would fetch the job data based on the ID
  if (isNaN(id) || id < 1) {
    notFound();
  }

  // For demo purposes, we're using the same job data for all IDs
  return <SubmitProposalForm job={jobData} />;
}
