const TermsAndConditions = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-16">
          Terms And Conditions
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <nav className="mb-8 hidden md:mb-0 md:block md:w-60 lg:w-72 xl:w-80">
          <ol className="sticky z-10 md:top-28 lg:top-24">
            {[
              "Disclaimers and Limitation of Liability",
              "Intellectual Property",
              "Privacy Policy",
              "Use of the Website",
              "Acceptance of Terms"
            ].map((item, index) => (
              <li key={index}>
                <a className="my-3 inline-flex cursor-pointer pl-4 text-sub-heading">
                  {item}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Main Content */}
        <div className="md:w-9/12 md:pb-10 ltr:md:pl-8 rtl:md:pr-8">
          {[
            {
              title: "Disclaimers and Limitation of Liability",
              content:
                'The Website is provided "as is" and "as available" without any warranties, either expressed or implied. [Your Company] shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use the Website.'
            },
            {
              title: "Intellectual Property",
              content:
                "The Website and its original content, features, and functionality are owned by [Your Company] and are protected by international copyright, trademark, and other intellectual property laws."
            },
            {
              title: "Privacy Policy",
              content:
                "Your use of the Website is also governed by our Privacy Policy, which can be found [link to Privacy Policy]. By using the Website, you consent to the practices described in the Privacy Policy."
            },
            {
              title: "Use of the Website",
              content:
                "You must be at least [Age] years old to use this Website. By using the Website, you represent and warrant that you are at least [Age] years old. You agree to use the Website for lawful purposes only and in a manner that does not infringe upon the rights of others."
            },
            {
              title: "Acceptance of Terms",
              content:
                "By using this Website, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use the Website."
            }
          ].map((section, index) => (
            <div key={index} className="mb-7 md:mb-10">
              <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                {section.title}
              </h2>
              <div className="mt-15 leading-loose text-body-dark">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
