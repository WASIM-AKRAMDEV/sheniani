import ServiceDetail from "@/components/dashboard/services/service-detail";
import { notFound } from "next/navigation";

// Sample job data - in a real app, this would come from an API or database
const jobData = {
  id: 1,
  title: "Bathroom Renovation in London",
  phone: "(406) 555-0120",
  email: "career@instagram.com",
  featured: true,
  expireDate: "June 30, 2021",
  description: [
    `Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellen tesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus it amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.`,
    "Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in ne ue sit amet orci interdum tincidunt.",
  ],
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
  jobDetails: [
    {
      label: "Job Posted",
      value: "14 March, 2025",
    },
    {
      label: "Start Date",
      value: "5 April, 2025",
    },
    {
      label: "Budget",
      value: "£2,500 - £3,000",
    },
    {
      label: "Location",
      value: "London, UK",
    },
  ],
  images: [
    {
      src: "/images/image-site1.jpg",
      large: true,
    },
    {
      src: "/images/image-site2.jpg",
    },
    {
      src: "/images/image-site3.jpg",
    },
    {
      src: "/images/image-site4.jpg",
      overlay: "+12 More",
    },
  ],
  profileImage: "/images/service-profile.jpg",
};

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number.parseInt(params.id);

  // In a real app, you would fetch the job data based on the ID
  // For now, we'll just check if the ID is valid
  if (isNaN(id) || id < 1) {
    notFound();
  }

  // For demo purposes, we're using the same job data for all IDs
  // In a real app, you would fetch different data based on the ID
  return <ServiceDetail job={jobData} />;
}
