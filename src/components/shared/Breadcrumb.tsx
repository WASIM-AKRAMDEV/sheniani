import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

interface BreadcrumbLink {
    href: string;
    title: string;
}
  
interface BreadcrumbWrapperProps {
    links: BreadcrumbLink[];
}

export default function BreadcrumbWrapper({ links }: BreadcrumbWrapperProps) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {links.map((link, index) => (
                    <BreadcrumbItem key={index}>
                        <BreadcrumbLink href={link.href} className="text-2xl text-subheading-200 font-family-base! max-sm:text-base!">{link.title}</BreadcrumbLink>
                        {index < links.length - 1 && <BreadcrumbSeparator />}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
  