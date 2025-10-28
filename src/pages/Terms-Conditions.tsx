import Footer from "@/components/Footer";
import Topbar from "../components/Topbar";
import Navigation from "../components/Navigation";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 pt-16 px-6">
        <div className=" mx-auto max-w-7xl">
          <article className="">
            {/* Regulation Section */}
            <section className="">
              <h2 className="text-base font-bold text-foreground mb-1  ">
                Under Which Regulation Is This Information Obligation?
              </h2>
              <p className="text-base  text-foreground/90 mb-6 leading-tight">
                Pursuant to Articles 13 and 14 of Regulation 2016/679 of the
                European Parliament and of the Council on the protection of
                individuals with regard to the processing of personal data and
                on the free movement of such data, repealing Directive 95/46 /
                EC ("GDPR") ("Information obligation").
              </p>
            </section>

            {/* Carrier Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Who Is The Carrier Of My Personal Data?
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                The operator of your personal data is:
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6 ml-4">
                <strong>LURITY, s.r.o.</strong>
                <br />
                Registered office: Bajzova 12, 82108 Bratislava
                <br />
                ID number: 50 641 905
                <br />
                Entered in the Commercial Register of the District Court
                Bratislava I, Section: Sro, file number 116480 / B<br />
                <br />
                <strong>CONTACT:</strong> hello@lurity.com | +421 800 232 710
              </p>
            </section>

            {/* Contact Person Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Who Can I Turn To In Case Of Questions?
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                We care about protecting your privacy. In case of questions or
                questions about the protection of your personal data, you can
                contact the responsible person of the Operator at any time:
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 ml-4">
                <strong>Name and surname:</strong> Adriana Tiefenbachová
                <br />
                <strong>Contact details:</strong>{" "}
                adriana.tiefenbachova@lurity.com | +421 800 232 710
              </p>
            </section>

            {/* Target Audience Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Who Is This Information Obligation For?
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                This information obligation is intended for:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-foreground/90 mb-6 ml-4">
                <li>
                  Visitors to public spaces where the Operator performs
                  monitoring via a camera system (the "Visitor of public
                  spaces")
                </li>
                <li>
                  Natural persons - advertisers registering their advertising
                  campaign in the LURITY system (the "Advertiser")
                </li>
                <li>
                  Natural persons authorized by the advertiser to register an
                  advertising campaign in the LURITY system (the "Authorized
                  Authorizer")
                </li>
                <li>
                  Natural persons - suppliers or customers who enter into or
                  have entered into a legal relationship with the Operator
                  ("Suppliers / Customers")
                </li>
                <li>
                  Natural persons whom the Supplier has authorized to enter into
                  a contractual relationship on behalf of the Supplier (the
                  "Person authorized by the Supplier / Customer")
                </li>
                <li>
                  Visitors to websites where the Operator uses cookies necessary
                  to provide the functionality of the website and improve the
                  user experience (the "Website Visitor")
                </li>
                <li>
                  Other affected persons whose personal data the Operator
                  processes on the basis of a special legal regulation or the
                  legitimate interest of the Operator
                </li>
              </ul>
            </section>

            {/* Processing Situations Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                In Which Situations Do You Process My Personal Data?
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                We process your personal data without your consent only in cases
                where applicable law allows us to do so. You must provide us
                with the personal data that you provide to us on the basis of a
                contract, special regulation or on the basis of a legitimate
                interest, otherwise we will not be able to fulfill your or our
                obligations intended for that purpose.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                We process your personal data without your consent only in the
                following cases and on the basis of the following legal bases:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-foreground/90 mb-6 ml-4">
                <li>
                  If you are a visitor to public spaces in which we perform
                  monitoring through a camera system, we process your personal
                  data exclusively for the purpose of applied research in the
                  field of marketing
                </li>
                <li>
                  If you are a Website Visitor, your personal data will be
                  processed on the basis of a legitimate interest in monitoring
                  traffic to the Operator's website
                </li>
                <li>
                  If you are an Advertiser, when registering your advertising
                  campaign in the LURITY system, the processing of your personal
                  data is necessary for the purposes of fulfilling the contract
                </li>
                <li>
                  If you are a Supplier / Customer, the processing of your
                  personal data is necessary for the purpose of fulfilling the
                  contract between you and the Operator
                </li>
                <li>
                  If you are a job seeker with the Operator, we process your
                  personal data on the basis of special legal regulations
                </li>
              </ul>
            </section>

            {/* What Data Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Personal Data Do You Process About Me?
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                We process your personal data in the following cases and to the
                following extent:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-foreground/90 mb-6 ml-4">
                <li>
                  <strong>Visitors of public spaces:</strong> Estimation of age
                  and sex based on facial features; interaction time data;
                  distance from device (stored for maximum 180 days)
                </li>
                <li>
                  <strong>Advertisers and Authorized Persons:</strong> Contact
                  details such as name, surname, telephone number and e-mail
                  address
                </li>
                <li>
                  <strong>Suppliers / Customers:</strong> All personal data
                  necessary for concluding contractual relations (ordinary
                  personal data - contact and identification data)
                </li>
                <li>
                  <strong>Website Visitors:</strong> IP address and cookies
                </li>
                <li>
                  <strong>Job seekers:</strong> Contact details and personal
                  data stated in CV and/or motivation letter
                </li>
              </ul>
            </section>

            {/* Storage Duration Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                For Which Time Do You Process My Personal Data?
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                We store your personal data for as long as necessary to fulfill
                the stated purposes. When storing personal data, we follow
                special regulations that set us the deadlines for storage and/or
                the basic principles of the GDPR regarding the storage and
                disposal of personal data.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                If you are a visitor to public areas where we perform monitoring
                via a camera system, this data is stored on the server of our
                server provider, which meets international security standards,
                for a maximum of 180 days.
              </p>
            </section>

            {/* Data Sources Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Sources Do My Personal Data Come From?
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                If you are a Visitor of public spaces, the source of your
                personal data is smart advertising screens.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                In other cases, we process information that you have provided to
                us in connection with the conclusion of the contract or that you
                have communicated to us in the course of our cooperation or
                provided to us by another person of the Advertiser.
              </p>
            </section>

            {/* Data Recipients Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Who Receives My Personal Data?
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                We note that we do not provide personal data about Visitors to
                public spaces to entities other than our intermediaries (server
                provider and programmers). This personal information is used to
                generate anonymous statistics on the appearance of advertising
                campaigns.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                We provide your personal data only in justified cases and only
                to the extent necessary to the following categories of
                recipients:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-foreground/90 mb-6 ml-4">
                <li>
                  To the server provider - DigitalOcean EU B.V. - branch office
                  Germany
                </li>
                <li>
                  Programmers who develop and maintain software source code
                </li>
                <li>
                  Our contractual partners necessary for normal functioning
                  (external accounting firm, etc.)
                </li>
                <li>
                  Other entities in cases where the obligation to provide your
                  personal data is imposed on us by law
                </li>
              </ul>
            </section>

            {/* Third Countries Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Do You Transfer My Personal Data To Third Countries?
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                We do not provide your personal data to third countries outside
                the EU.
              </p>
            </section>

            {/* Rights Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Are My Rights With Regard To The Protection Of My Personal
                Data?
              </h2>
              <ul className="list-disc list-inside space-y-4 text-lg text-foreground/90 mb-6 ml-4">
                <li>
                  <strong>Right of access</strong> - you can ask us for access
                  to the personal data we process about you
                </li>
                <li>
                  <strong>Right to rectification</strong> - you can ask us to
                  correct inaccurate or incomplete personal data
                </li>
                <li>
                  <strong>Right to delete</strong> - you can ask us to delete
                  your personal data in specific situations outlined by GDPR
                </li>
                <li>
                  <strong>Right to restrict processing</strong> - you can ask
                  the Operator to restrict the processing of your personal data
                </li>
                <li>
                  <strong>Right to data transfer</strong> - if we process your
                  personal data on the basis of your consent or contract
                  performance
                </li>
                <li>
                  <strong>Right to object</strong> - you can object to the
                  processing of your personal data at any time for direct
                  marketing purposes
                </li>
                <li>
                  <strong>Right to lodge a complaint</strong> - you have the
                  right to lodge a complaint with the Office for Personal Data
                  Protection of the Slovak Republic
                </li>
              </ul>
              <p className="text-lg leading-relaxed text-foreground/90 ml-4 mt-6">
                <strong>Supervisory Body:</strong>
                <br />
                Office for Personal Data Protection of the Slovak Republic
                <br />
                Hraničná 12, 820 07 Bratislava 27
                <br />
                www.uoou.sk
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
