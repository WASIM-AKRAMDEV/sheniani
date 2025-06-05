import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const PriorityCardData = [
    {
        image: "/icons/dollar-sign.svg",
        title: "Cheap",
        description: "Lower cost, but may take longer or have standard quality",
    },
    {
        image: "/icons/lightning.svg",
        title: "Fast",
        description: "Quick turnaround, but may affect price or quality",
    },
    {
        image: "/icons/trophy.svg",
        title: "High Quality",
        description: "Premium work with top-notch quality, but may take more time or cost more",
    },
];

interface PriorityCardProps {
    image: string;
    title: string;
    description: string;
}

const PriorityCard = ({ image, title, description }: PriorityCardProps) => {
    return (
        <div className="group transition duration-700 flex flex-col items-center flex-1 max-w-[400px] p-7 gap-4 rounded-xl items-center border-1 border-white hover:bg-secondary-foreground">
            <div className="flex justify-center w-17 h-17 bg-secondary-foreground rounded-full m-auto group-hover:bg-secondary">
                <Image src={image} alt="$" width={24} height={24} />
            </div>
            <p className="text-2xl font-bold text-white group-hover:text-secondary">{title}</p>
            <p className="text-lg font-lato text-center text-secondary-light group-hover:text-secondary">{description}</p>
            <Link className="underline font-bold text-white group-hover:text-secondary" href="/more-info">Learn More</Link>
        </div>
    );
};

const PickYourPriority = () => {
    return (
        <section className="w-full bg-secondary py-18">
            <div className="container m-auto">
                <p className="text-center text-5xl font-bold text-secondary-foreground">Pick your Priority</p>
                <p className="text-center text-2xl font-lato mt-4 text-secondary-light">Don’t be greedy! You can only choose 2.</p>
                <div className="flex flex-col items-center justify-center gap-5 my-8 md:flex-row">
                    {
                        PriorityCardData.map(({ image, title, description }, index) => <PriorityCard key={index} image={image} title={title} description={description} />)
                    }
                </div>
                <div className="flex justify-center">
                    <Button className="text-xl" size="2xl">Browse All Service</Button>
                </div>
            </div>
        </section>
    );
};

export default PickYourPriority;