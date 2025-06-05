import { Container } from "@/components/shared/Container"
import { CircleArrowRight } from "lucide-react"

const faqs = [
  {
    question: "How do I find a contractor on Sheniani?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    question: "Do I need to pay to use Sheniani?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    question: "How do I know if a service provider is trustworthy?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    question: "Is there a fee for professionals to list their services?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    question: "How can I join Sheniani as a contractor or service provider?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
  {
    question: "How do payments work on Sheniani?",
    answer:
      "Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.",
  },
]

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="flex items-start gap-3">
    <CircleArrowRight className="size-6.5 text-theme-orange flex-shrink-0 mt-1" />
    <div>
      <h3 className="text-lg md:text-xl font-semibold">{question}</h3>
      <p className="mt-2 text-gray-500 text-lg font-lato">{answer}</p>
    </div>
  </div>
)

export default function QnA() {
  return (
    <section className="w-full py-16 md:py-24">
      <Container>
        <div className="text-center mx-auto max-w-2xl mb-12 md:mb-16">
          <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">Questions & Answers</h2>
          <p className="mt-4 text-gray-500 font-lato">
            Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis. Sagittis a sapien
            pulvinar etiam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </section>
  )
}
