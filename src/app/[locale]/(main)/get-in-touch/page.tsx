import HeroSection from "@/components/shared/HeroSection";
import { Button } from "@/components/ui/button";
import GetInTouchForm from "@/components/get-in-touch/GetInTouchForm";
import QnA from "@/components/get-in-touch/Qna";
import CallToAction from "@/components/home/CallToAction";

export default function GetInTouch() {
  return (
    <main className="flex flex-col items-center bg-white">
      <HeroSection
        heading="We're Here to Help!"
        backgroundImage="/images/contact-bg.png"
        className="max-w-[981px]"
      >
        <>
          <p className="font-lato text-2xl max-sm:text-base! font-medium text-primary-foreground mt-3">
            At Sheniani, we value your feedback and are committed to providing
            the best experience possible. Whether you have a question, need
            support, or want to learn more about how we can help with your
            construction and renovation projects, our team is here for you!
          </p>
          <Button size="xl" className="bg-theme-orange mt-7.5">
            Get a Free Quotes
          </Button>
        </>
      </HeroSection>
      <GetInTouchForm />
      <QnA />
      <CallToAction />
    </main>
  );
}
