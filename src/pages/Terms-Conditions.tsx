import Footer from "@/components/Footer";
import Topbar from "../components/Topbar";
import Navigation from "../components/Navigation";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Navigation />

      {/* Main Content */}
      <main className=" pt-20 max-w-6xl mx-auto ">
        {/* <div className=" max-w-7xl mx-auto flex flex-col items-center justify-center"> */}
        <div className="max-w-7xl mx-auto flex flex-col items-start justify-center text-left min-h-[600px] px-6">
          {/* Regulation Section */}
          <section className="mb-6">
            <h2 className="text-base font-extrabold  uppercase text-foreground mb-1">
              Under Which Regulation Is This Information Obligation?
            </h2>
            <p className="text-base  text-foreground/90 leading-tight">
              Pursuant to Articles 13 and 14 of Regulation 2016/679 of the
              European Parliament and of the Council on the protection of
              individuals with regard to the processing of personal data and on
              the free movement of such data, repealing Directive 95/46 / EC
              ("GDPR") ("Information obligation").
            </p>
          </section>

          {/* Carrier Section */}
          <section className="mb-6">
            <h2 className="text-base uppercase font-normal text-foreground mb-0 p-0 leading-relaxed">
              Who Is The Carrier Of My Personal Data?
            </h2>
            <p className="text-base  text-foreground/90">
              The operator of your personal data is:
            </p>
            <p className="text-base  text-foreground/90">
              LURITY, s.r.o., registered office: Bajzova 12, 82108 Bratislava,
              ID number: 50 641 905, entered in the Commercial Register of the
              District Court Bratislava I, Section: Sro, file number 116480 / B
              (hereinafter referred to as the "Operator")
            </p>
            <p className="text-base  text-foreground/90">
              CONTACT: hello@lurity.com | +421 800 232 710
            </p>
          </section>

          {/* Contact Person Section */}
          <section className="mb-6">
            <h2 className="text-base uppercase font-extrabold text-foreground leading-relaxed mb-1">
              WHO CAN I TURN TO IN CASE OF QUESTIONS?
            </h2>
            <p className="text-base  text-foreground/90 mb-6">
              We care about protecting your privacy. In case of questions or
              questions about the protection of your personal data, you can
              contact the responsible person of the Operator at any time:
            </p>
            <p className="text-base  text-foreground/90 mb-6">
              Name and surname: Adriana Tiefenbachová
            </p>
            <p className="text-base  text-foreground/90">
              Contact details: adriana.tiefenbachova@lurity.com | +421 800 232
              710
            </p>
          </section>

          {/* Target Audience Section */}
          <section className="mb-6">
            <h2 className="text-base font-extrabold uppercase text-foreground mb-1">
              WHO IS THIS INFORMATION OBLIGATION FOR?
            </h2>

            <p className="text-base text-foreground/90 mb-1">
              This information obligation is intended for:
            </p>

            <ul className="list-disc pl-6 marker:mr-1 text-base text-foreground/90 leading-4 space-y-2">
              <li>
                visitors to public spaces where the Operator performs monitoring
                via a camera system (hereinafter referred to as the “Visitor of
                public spaces”),
              </li>
              <li>
                natural persons – advertisers registering their advertising
                campaign in the LURITY system (hereinafter referred to as the
                “Advertiser”), or
              </li>
              <li>
                natural persons authorized by the advertiser to register an
                advertising campaign in the LURITY system (hereinafter referred
                to as the “Authorized Authorizer”),
              </li>
              <li>
                natural persons – suppliers or customers who enter into or have
                entered into a legal relationship with the Operator (hereinafter
                referred to as “Suppliers / Customers”),
              </li>
              <li>
                natural persons whom the Supplier has authorized to enter into a
                contractual relationship on behalf of the Supplier (hereinafter
                referred to as the “Person authorized by the Supplier /
                Customer”),
              </li>
              <li>
                visitors to websites where the Operator uses cookies necessary
                to provide the functionality of the website and improve the user
                experience (hereinafter referred to as the “Website Visitor”),
              </li>
              <li>
                other affected persons whose personal data the Operator
                processes on the basis of a special legal regulation or the
                legitimate interest of the Operator (senders and recipients of
                the Operator’s correspondence; job seekers; affected persons
                exercising their rights under the GDPR).
              </li>
            </ul>
          </section>

          {/* Processing Situations Section */}
          <section className="mb-6">
            <h2 className="text-base font-extrabold uppercase text-foreground mb-1">
              IN WHICH SITUATIONS DO YOU PROCESS MY PERSONAL DATA?
            </h2>

            <p className="text-base text-foreground/90 mb-1 leading-5">
              We process your personal data without your consent only in cases
              where applicable law allows us to do so. You must provide us with
              the personal data that you provide to us on the basis of a
              contract, special regulation or on the basis of a legitimate
              interest, otherwise we will not be able to fulfill your or our
              obligations intended for that purpose.
            </p>

            <p className="text-base text-foreground/90  leading-6">
              We process your personal data without your consent only in the
              following cases and on the basis of the following legal bases:
            </p>

            <ul className="list-disc pl-4 marker:mr-1 text-base text-foreground/90 leading-4 space-y-2 mb-6">
              <li>
                If you are a visitor to public spaces in which we perform
                monitoring through a camera system, we process your personal
                data exclusively for the purpose of applied research in the
                field of marketing, the so-called creation of aggregated
                anonymous statistics on the performance of off-line advertising
                campaigns.
              </li>
              <li>
                If you are a Website Visitor, your personal data will be
                processed on the basis of a legitimate interest in monitoring
                traffic to the Operator's website.
              </li>
              <li>
                If you are the sender and recipient of the Operator's
                correspondence, we process your personal data on the basis of a
                special legal regulation.
              </li>
              <li>
                If you are an affected person exercising your rights under the
                GDPR, we process your personal data on the basis of the
                Operator's legitimate interest in complying with the GDPR.
              </li>
              <li>
                If you are an Advertiser, when registering your advertising
                campaign in the LURITY system, the processing of your personal
                data is necessary for the purposes of fulfilling the contract
                between you (the affected person) and the Operator. We use this
                personal information exclusively for the purpose of fulfilling
                contractual obligations, which includes the provision of
                customer support.
              </li>
              <li>
                If you are a Person Authorized by the Advertiser, when
                registering the Advertiser's advertising campaign in the LURITY
                system, the processing of your personal data is necessary for
                the purposes of the Operator's legitimate interest, which is the
                fulfillment of the contract between the Advertiser and the
                Operator. We use this personal data exclusively for the purpose
                of fulfilling contractual obligations, including the provision
                of customer support.
              </li>
              <li>
                If you are a Supplier / Customer, the processing of your
                personal data is necessary for the purpose of fulfilling the
                contract between you (the affected person) and the Operator when
                concluding a contractual relationship and after concluding a
                contractual relationship. We use this personal data exclusively
                for the purpose of fulfilling contractual obligations, including
                the provision of customer support.
              </li>
              <li>
                If you are a Person authorized by the Supplier / Customer, the
                processing of your personal data is necessary for the purposes
                of the legitimate interest of the Operator, which is the
                performance of the contract between the Supplier / Customer and
                the Operator.
              </li>
              <li>
                If you are the recipient or sender of the Operator's
                correspondence, we process your personal data on the basis of a
                special legal regulation.
              </li>
              <li>
                If you are a Visitor of the Operator's website, your personal
                data is processed on the basis of a legitimate interest in
                monitoring traffic to the Operator's website.
              </li>
              <li>
                If you are a job seeker with the Operator, we process your
                personal data on the basis of special legal regulations.
              </li>
              <li>
                If you are an affected person exercising your rights under the
                GDPR, we process your personal data on the basis of the
                Operator's legitimate interest in complying with the GDPR.
              </li>
            </ul>
            <p className="text-base text-foreground/90">
              2 Act no. 395/2002 Coll. on archives and registries and on the
              amendment of certain laws as amended
            </p>
            <p className="text-base text-foreground/90">
              3 Act no. 311/2001 Coll. Labor Code as amended; Act no. 55/2017
              Coll.
            </p>
          </section>

          {/* What Data Section */}
          <section className="mb-6">
            <h2 className="text-base font-extrabold uppercase text-foreground mb-1">
              WHAT PERSONAL DATA DO YOU PROCESS ABOUT ME?
            </h2>

            <p className="text-base text-foreground/90 mb-2 leading-5">
              We process your personal data in the following cases and to the
              following extent:
            </p>

            <ul className="list-disc pl-5 marker:mr-1 text-base text-foreground/90 leading-5 space-y-1">
              <li>
                <span className="font-semibold">
                  If you are a Visitor of public spaces
                </span>
                , we process the following personal data about you:
                <ul className="list-decimal mt-1 ">
                  <li>Estimation of age and sex based on facial features;</li>
                  <li>
                    The start time of the interaction and the end time of your
                    interaction with the advertising screen;
                  </li>
                  <li>The distance of your face from the device;</li>
                </ul>
                <p className="mt-1">
                  We do not identify you when we process this personal data. We
                  use the data exclusively for statistical purposes. This data
                  is stored on the server of our provider, which meets
                  international security standards, for a maximum of 180 days.
                </p>
              </li>

              <li>
                <span className="font-semibold">
                  If you are an Advertiser or a Person authorized by the
                  Advertiser
                </span>
                , common personal data, especially contact details such as name,
                surname, telephone number, and e-mail address, when registering
                in the LURITY system.
              </li>

              <li>
                <span className="font-semibold">
                  If you are a Supplier / Customer or a Person authorized by the
                  Supplier / Customer
                </span>
                , when concluding contractual relations and after concluding
                contractual relations with the Operator, we process all your
                personal data necessary for concluding contractual relations
                (ordinary personal data — contact and identification data) and
                other data necessary to achieve the purpose of contractual
                relations.
              </li>

              <li>
                <span className="font-semibold">
                  If you are the recipient and / or sender of correspondence of
                  the Operator
                </span>
                , we process your current personal data such as title, name,
                surname, address, e-mail address, and other data necessary for
                fulfilling our obligations under special legal regulations.
                <sup>2</sup>
              </li>

              <li>
                <span className="font-semibold">
                  If you are a Website Visitor
                </span>
                , we process your IP address and cookies.
              </li>

              <li>
                <span className="font-semibold">
                  If you are a job seeker with the Operator
                </span>
                , we process common personal data about you, especially contact
                details and personal data stated in the CV and/or motivation
                letter.
              </li>

              <li>
                <span className="font-semibold">
                  If you are an affected person exercising your rights under the
                  GDPR
                </span>
                , we process personal data necessary to keep records and fulfill
                obligations under the GDPR (current personal data —
                identification data, contact information, etc.) and other data
                that you have provided to us as part of your application.
              </li>
            </ul>

            <p className="text-base text-foreground/90 mt-6">
              2 Act no. 395/2002 Coll. on archives and registries and on the
              amendment of certain laws as amended
            </p>
          </section>

          {/* Storage Duration Section */}
          <section className="mb-6">
            <h2 className="text-base font-extrabold uppercase text-foreground mb-1">
              FOR WHICH TIME DO YOU PROCESS MY PERSONAL DATA?
            </h2>

            <p className="text-base text-foreground/90 leading-5 mb-1">
              We store your personal data for as long as necessary to fulfill
              the stated purposes. When storing personal data, we follow special
              regulations that set us the deadlines for storage and/or the basic
              principles of the GDPR regarding the storage and disposal of
              personal data.
            </p>

            <p className="text-base text-foreground/90 leading-5">
              If you are a visitor to public areas where we perform monitoring
              via a camera system, this data is stored on the server of our
              server provider, which meets international security standards, for
              a maximum of <span className="font-semibold">180 days</span>.
            </p>
          </section>

          {/* Data Sources Section */}
          <section className="mb-6">
            <h2 className="text-base font-extrabold uppercase text-foreground mb-1">
              WHAT SOURCES DO MY PERSONAL DATA COME FROM?
            </h2>

            <p className="text-base text-foreground/90 leading-5 mb-1">
              If you are a Visitor of public spaces, the source of your personal
              data is{" "}
              <span className="font-semibold">smart advertising screens</span>.
            </p>

            <p className="text-base text-foreground/90 leading-5">
              In other cases, we process information that you have provided to
              us in connection with the conclusion of the contract, during our
              cooperation, or data provided to us by another person of the
              Advertiser.
            </p>
          </section>

          {/* Data Recipients Section */}
          <section className="mb-6">
            <h2 className="text-base font-extrabold uppercase text-foreground mb-1">
              WHO RECEIVES MY PERSONAL DATA?
            </h2>

            <p className="text-base text-foreground/90 leading-tight mb-2">
              We note that we do not provide personal data about Visitors to
              public spaces to entities other than our intermediaries (server
              provider and programmers). This personal information is used to
              generate anonymous statistics on the appearance of advertising
              campaigns. We provide anonymous statistics on the appearance of
              advertising campaigns to our clients (advertisers). Anonymous
              statistics do not contain any of your personal data, only
              aggregated and anonymized statistical data from which you cannot
              be identified in any way.
            </p>

            <p className="text-base text-foreground/90 leading-4 mb-1">
              We provide your personal data only in justified cases and only to
              the extent necessary to the following categories of recipients:
            </p>

            <ul className="list-disc pl-4 marker:mr-1 text-base text-foreground/90 leading-5">
              <li>
                To the server provider –{" "}
                <span className="font-semibold">DigitalOcean EU B.V.</span> –
                branch office Germany;
              </li>
              <li>
                Programmers who develop and maintain software source code;
              </li>
              <li>
                To the extent necessary, to other entities in cases where the
                obligation to provide your personal data is imposed on us by
                law, or if it is necessary to protect our legitimate interests.
              </li>
            </ul>

            <p className="text-base text-foreground/90 leading-tight mb-1">
              In other cases (unless they are visitors to public spaces), we
              provide your personal data only in justified cases and only to the
              extent necessary to the following categories of recipients:
            </p>

            <ul className="list-disc pl-4 marker:mr-1 text-base text-foreground/90 leading-5">
              <li>
                Our contractual partners, whom we need for our normal
                functioning and implementation of contractual relations (server
                provider, external accounting firm, programmer, etc.);
              </li>
              <li>
                To other entities in cases where the obligation to provide your
                personal data is imposed on us by law, or if it is necessary to
                protect our legitimate interests.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-base font-extrabold uppercase text-foreground mb-1">
              WHAT SOURCES DO MY PERSONAL DATA COME FROM?
            </h2>

            <p className="text-base text-foreground/90 leading-5 mb-1">
              If you are a Visitor of public spaces, the source of your personal
              data is{" "}
              <span className="font-semibold">smart advertising screens</span>.
            </p>

            <p className="text-base text-foreground/90 leading-5">
              In other cases, we process information that you have provided to
              us in connection with the conclusion of the contract, during our
              cooperation, or data provided to us by another person of the
              Advertiser.
            </p>
          </section>

          {/* Third Countries Section */}
          <section className="mb-6 ">
            <h2 className="text-base font-extrabold uppercase text-foreground">
              DO YOU TRANSFER MY PERSONAL DATA TO THIRD COUNTRIES?
            </h2>

            <p className="text-[15px] font-extrabold text-foreground">
              We do not provide your personal data to third countries outside
              the EU.
            </p>
          </section>

          {/* Rights Section */}
          <section className="mb-6">
            <h2 className="text-base font-extrabold uppercase text-foreground mb-1">
              WHAT ARE MY RIGHTS WITH REGARD TO THE PROTECTION OF MY PERSONAL
              DATA?
            </h2>

            <ul className="list-disc pl-5 marker:mr-1 text-base text-foreground/90 leading-5 ">
              <li>
                <span className="font-semibold">Right of access</span> – you can
                ask us for access to the personal data we process about you.
              </li>

              <li>
                <span className="font-semibold">Right to rectification</span> –
                you can ask us to correct inaccurate or incomplete personal data
                that we process about you.
              </li>

              <li>
                <span className="font-semibold">Right to delete</span> – you can
                ask us to delete your personal data if any of the following
                situations occur:
                <ul className="list-decimal  mt-1 space-y-1">
                  <li>
                    Personal data are no longer required for the purposes for
                    which they were obtained or otherwise processed;
                  </li>
                  <li>
                    In the past, you have given us consent to the processing,
                    which you revoke, and we are not entitled to process the
                    personal data in question without your consent;
                  </li>
                  <li>
                    You object to processing carried out in specific situations
                    under the GDPR (task carried out in the public interest,
                    legitimate interest of the Operator or profiling) and no
                    legitimate reasons for processing prevail over your
                    interests, rights, and freedoms; or
                  </li>
                  <li>Object to processing for direct marketing purposes;</li>
                  <li>Personal data have been processed illegally;</li>
                  <li>
                    Personal data must be deleted in order to comply with a
                    legal obligation under EU law or the law of the Member State
                    to which the Operator is subject;
                  </li>
                  <li>
                    Personal data were obtained in connection with the offer of
                    information society services according to the GDPR.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Right to restrict processing
                </span>{" "}
                – you can ask the Operator to restrict the processing of your
                personal data if any of the following situations occur:
                <ul className="list-decimal mt-1 space-y-1">
                  <li>
                    You have denied the accuracy of the personal data for the
                    time necessary for the Operator to verify the accuracy of
                    the personal data;
                  </li>
                  <li>
                    The processing of your personal data is illegal, but you
                    refuse to delete this data and instead request a restriction
                    on its use;
                  </li>
                  <li>
                    The controller no longer needs personal data for processing
                    purposes, but you request them to determine, enforce, or
                    defend legal claims;
                  </li>
                  <li>
                    You have objected to the processing of your personal data in
                    specific situations according to the GDPR (task performed in
                    the public interest, legitimate interest of the Operator, or
                    profiling), until it is verified that the legitimate reasons
                    of the Operator outweigh your legitimate reasons.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">Right to data transfer</span> –
                if we process your personal data on the basis of:
                <ul className="list-decimal mt-1 space-y-1">
                  <li>Your consent; or</li>
                  <li>
                    It is necessary for the performance of the contract to which
                    you are a party,
                  </li>
                </ul>
                and at the same time it is a process by automated means of
                processing, you have the right to request the transfer of
                personal data to another operator. This applies if you have
                provided personal data to the Operator in a structured, commonly
                used, and machine-readable format and this right does not
                adversely affect the rights and freedoms of others.
              </li>

              <li>
                <span className="font-semibold">Right to object</span> – you can
                object to the processing of your personal data at any time by
                the Operator for the purposes of direct marketing carried out on
                the basis of the Operator's legitimate interest and whenever we
                process your personal data on the basis of a legitimate interest
                or public interest, including profiling.
              </li>

              <li>
                <span className="font-semibold">
                  Right to lodge a complaint
                </span>{" "}
                – you have the right to lodge a complaint with the supervisory
                body, which is the Office for Personal Data Protection of the
                Slovak Republic, Hraničná 12, 820 07 Bratislava 27,{" "}
                <a
                  href="https://www.uoou.sk"
                  className="text-yellow-600 underline hover:text-yellow-700"
                >
                  www.uoou.sk
                </a>
                .
              </li>
            </ul>

            <p className="text-base text-foreground/90 leading-5">
              Your rights may be limited by relevant EU or Member State law.
            </p>
            <p className="text-base text-foreground/90 leading-5">
              The person concerned may exercise his rights orally, in writing,
              or electronically, through the above contact details. If the
              person concerned requests the exercise of the right, he is obliged
              to prove his identity to the Operator.
            </p>

            <div className="mt-4 space-y-4 text-base text-foreground/90">
              <p>
                1 Act no. 172/2005 Coll. on the organization of state support
                for research and development, as amended .; Directive of the
                Ministry of Education of the Slovak Republic no. 27/2006-R of 21
                December 2006 on the system of science and technology
                departments and the code list of science and technology
                departments; Annex no. 1 to the Directive of the Ministry of
                Education of the Slovak Republic no. 27/2006-R of 21 December
                2006 on the system of science and technology departments and the
                code list of science and technology departments.
              </p>
              <p>
                2 Act no. 395/2002 Coll. on archives and registries and on the
                amendment of certain laws as amended.
              </p>
              <p>
                3 Act no. 311/2001 Coll. Labor Code as amended; Act no. 55/2017
                Coll.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
