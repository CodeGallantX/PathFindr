
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Does PathhFinder work without internet?",
      answer:
        "Yes, PathhFinder has offline capabilities! You can download key areas of campus to navigate without data. When you're back online, your activity will sync automatically."
    },
    {
      question: "How accurate are the estimated arrival times?",
      answer:
        "Our ETAs are highly accurate as they account for walking speed, campus traffic patterns, time of day, and even account for busy periods between classes. We continuously improve these estimates based on actual user data."
    },
    {
      question: "Can I use PathhFinder if I'm a visitor, not a student?",
      answer:
        "Absolutely! PathhFinder is designed for anyone navigating the LASUSTECH campus, including visitors, new students, staff, and guests. No student account is required to use the basic navigation features."
    },
    {
      question: "How does the voice navigation work?",
      answer:
        "Our voice navigation provides turn-by-turn directions through your device speakers or headphones. It announces upcoming turns, landmarks, and destination arrival. You can choose between different voice options and adjust volume in the settings."
    },
    {
      question: "Is my location data kept private?",
      answer:
        "Yes, we take privacy seriously. Your location data is only used to provide navigation services and is never shared with third parties. You can also use the app in privacy mode where no location history is stored."
    }
  ];

  return (
    <div id="faq" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-mapaccent1 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="font-inter text-gray-600">
            Everything you need to know about PathhFinder and how it helps you navigate campus.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
                <AccordionTrigger className="font-poppins font-medium text-lg py-4 px-6 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-gray-600 px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
