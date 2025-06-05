import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "../shared/Container";

const qnas = [
  {
    question: "What services do you offer?",
    answer:
      "Detail the range of services provided, such as general repairs, plumbing, electrical work, carpentry, and painting.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    question: "Can you provide references or examples of previous work?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    question: "What is your service area?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    question: "How can I schedule a service?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
];

function QnA() {
  return (
    <section className="w-full">
      <Container>
        <div className="py-16 max-sm:pt-0">
          <div className="text-center m-auto mb-12.5">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
              Got Questions? We’ve Got Answers!
            </h1>
          </div>
          <Accordion type="single" collapsible>
            {qnas.map((qna, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-zinc-200 py-0"
              >
                <AccordionTrigger className="xl:text-2xl md:text-xl text-lg font-semibold py-5">
                  {qna.question}
                </AccordionTrigger>
                <AccordionContent className="xl:text-lg sm:text-base text-sm text-para pb-5">
                  {qna.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

export default QnA;
