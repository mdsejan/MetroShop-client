"use client";
import { Element, scroller } from "react-scroll";

const TermsPage = () => {
  const scrollToSection = (id: string) => {
    scroller.scrollTo(id, { smooth: true, offset: -100, duration: 500 });
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-16">
          Terms And Conditions
        </h1>
      </div>
      <div className="flex flex-col md:flex-row p-4">
        <nav className="mb-8 hidden md:block md:w-60 lg:w-72 xl:w-80">
          <ol className="sticky top-28 z-10">
            {[
              "disclaimers",
              "intellectual-property",
              "privacy-policy",
              "use-of-website",
              "acceptance-of-terms"
            ].map((section) => (
              <li key={section} className="my-3">
                <a
                  onClick={() => scrollToSection(section)}
                  className="cursor-pointer pl-4 text-sub-heading"
                >
                  {section
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="md:w-9/12 md:pb-10 md:pl-8">
          <Element name="disclaimers" className="mb-7">
            <h2 className="text-lg font-bold mb-4">
              Disclaimers and Limitation of Liability
            </h2>
            <p>{`The Website is provided "as is" and "as available" without any warranties, either expressed or implied. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. [Your Company] does not guarantee that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. By using this Website, you agree that [Your Company] shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or the inability to use it, even if [Your Company] has been advised of the possibility of such damages. This limitation of liability applies to all claims, including, without limitation, claims based on warranties, contract, tort, or any other legal theory.`}</p>
          </Element>

          <Element name="intellectual-property" className="mb-7">
            <h2 className="text-lg font-bold mb-4">Intellectual Property</h2>
            <p>{`The Website and all of its original content, features, design elements, and functionality are the exclusive property of [Your Company] and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not copy, modify, distribute, sell, or lease any part of our Website or its content without [Your Company]'s express written permission. Any unauthorized use may violate copyright, trademark, and other laws and could result in criminal or civil penalties.`}</p>
          </Element>

          <Element name="privacy-policy" className="mb-7">
            <h2 className="text-lg font-bold mb-4">Privacy Policy</h2>
            <p>{`Your use of the Website is also governed by our Privacy Policy, which is incorporated into these terms by reference. The Privacy Policy explains our policies on the collection, use, and disclosure of your personal information. By accessing or using the Website, you consent to the data practices described in the Privacy Policy. If you do not agree to our Privacy Policy, please discontinue your use of the Website. You can review our Privacy Policy in more detail by clicking [here].`}</p>
          </Element>

          <Element name="use-of-website" className="mb-7">
            <h2 className="text-lg font-bold mb-4">Use of the Website</h2>
            <p>{`The Website is intended for users who are at least [Age] years old. By using the Website, you represent and warrant that you are at least [Age] years old and that you have the right, authority, and capacity to enter into this agreement and abide by all of its terms and conditions. You agree to use the Website only for lawful purposes and in a way that does not infringe upon the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. This includes conduct that is unlawful, or which may harass or cause distress or inconvenience to any person, or transmit obscene or offensive content or disrupt the normal flow of dialogue within the Website.`}</p>
          </Element>

          <Element name="acceptance-of-terms" className="mb-7">
            <h2 className="text-lg font-bold mb-4">Acceptance of Terms</h2>
            <p>{`By using this Website, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them. If you do not agree with these terms, you are not permitted to use the Website, and you must immediately discontinue any and all use. Your continued use of the Website signifies your acceptance of any changes to these Terms and Conditions. [Your Company] reserves the right to modify, update, or otherwise change these Terms at any time without prior notice. It is your responsibility to review the Terms and Conditions periodically to ensure that you are aware of any modifications.`}</p>
          </Element>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
