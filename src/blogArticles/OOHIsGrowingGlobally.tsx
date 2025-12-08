import doohContent1 from "@/assets/dooh-content-1.jpg";
import doohContent2 from "@/assets/dooh-content-2.jpg";

const OOHIsGrowingGlobally = () => {
  return (
    <article className="px-4 py-12">
      <p className="font-semibold text-lg mb-6">
        Why Every Campaign Should Include Outdoor and Digital OOH Advertising
      </p>

      <blockquote className="article-quote">
        <p>
          As digital advertising faces growing challenges—banner blindness,
          rising cost-per-click, cookie restrictions, and general online
          fatigue—more and more brands are returning to the streets. Literally.
          Out-of-home (OOH) advertising, once seen as a supplementary channel,
          is now experiencing a strong global comeback. And at the forefront of
          that revival is Digital Out-of-Home (DOOH).
        </p>
      </blockquote>

      <h2 className="article-h2">What do the latest numbers say?</h2>
      <p className="mb-4">Recent data confirms a major shift:</p>

      <blockquote className="article-quote">
        <p className="mb-4">
          In some countries, the share of digital formats is even higher:
        </p>
        <p className="mb-2">
          <strong>UK</strong>: 63% of all OOH ad spend goes into DOOH
        </p>
        <p className="mb-2">
          <strong>Netherlands</strong>: DOOH accounts for over 55% of the OOH
          mix
        </p>
        <p>
          <strong>Singapore</strong>: nearly 70% of all OOH is now digital
        </p>
      </blockquote>

      <figure className="my-8">
        <img
          src={doohContent1}
          alt="Digital billboard displaying advertising content in an urban environment"
          className="w-full rounded-lg"
        />
      </figure>

      <p className="mb-6">
        <strong>
          The CEE region (Slovakia, Czech Republic, Hungary, etc.) is quickly
          following this trend. In fact, Slovakia has real potential to become
          an innovation hub for DOOH, thanks to platforms like Lurity.
        </strong>
      </p>

      <h2 className="article-h2">Why are brands turning to OOH?</h2>
      <p className="mb-4">OOH today offers what digital often lacks:</p>

      <ul className="article-list">
        <li>
          <span>
            <strong>Guaranteed visibility</strong> – no skipping, no ad blockers
          </span>
        </li>
        <li>
          <span>
            <strong>Large emotional formats</strong> – part of the physical
            world
          </span>
        </li>
        <li>
          <span>
            <strong>Safe and ethical environment</strong> – no cookies needed
          </span>
        </li>
        <li>
          <span>
            <strong>Flexibility and real-time planning</strong> – thanks to
            smart digital tools
          </span>
        </li>
      </ul>

      <p className="my-6">
        DOOH is approaching the measurability of online advertising—without its
        downsides. Platforms like <strong>Place Exchange</strong> or{" "}
        <strong>Vistar Media</strong> already offer DOOH integration with
        digital analytics, attribution, and frequency capping.
      </p>

      <h2 className="article-h2">DOOH = The Medium of the Digital Future</h2>
      <p className="mb-4">
        Digital OOH is no longer just a "supporting channel." In more and more
        campaigns, it plays an equal—or even leading—role. Here's why:
      </p>

      <ul className="article-list">
        <li>
          <span>
            <strong>It's visible</strong>: Screens in public places, malls,
            gyms, and transit zones simply can't be ignored
          </span>
        </li>
        <li>
          <span>
            <strong>It's engaging and contextual</strong>: Content can adapt to
            weather, time, location, and even real-time retail data
          </span>
        </li>
        <li>
          <span>
            <strong>It's effective</strong>: According to{" "}
            <strong>Nielsen ROI 2024</strong>, OOH delivers an average return of{" "}
            <strong>6:1</strong>—and often higher
          </span>
        </li>
        <li>
          <span>
            <strong>It's measurable</strong>: Platforms like{" "}
            <strong>Lurity</strong> provide real-time data on impressions,
            locations, timing, and performance
          </span>
        </li>
      </ul>

      <figure className="my-8">
        <img
          src={doohContent2}
          alt="DOOH digital screen in a shopping mall environment"
          className="w-full rounded-lg"
        />
      </figure>

      <h2 className="article-h2">A Campaign That Truly Hits</h2>
      <p className="mb-6">
        Even brands that were originally "online-only" are increasingly
        including DOOH in their media mix. Why? Because when combined with
        mobile, online, or social media, DOOH becomes a powerful{" "}
        <strong>interest trigger</strong>. Campaigns can use QR codes,
        geofencing, retargeting, or be part of event and promo strategies.
      </p>

      <p className="mb-6">
        Example? The <strong>Nulo</strong> pet food brand (USA) launched a DOOH
        campaign targeting an <strong>8 km radius</strong> around their stores.
        The result? <strong>+40% brand awareness</strong> and a significant
        increase in store traffic.
      </p>

      <h2 className="article-h2">Final Takeaway?</h2>
      <p className="mb-6">
        OOH—and especially DOOH—is the future. It's the most{" "}
        <strong>visible physical presence</strong> of a brand at a time when the
        online world is increasingly cluttered and distrusted. For brands
        looking to build visibility <strong>without overwhelming</strong>, trust{" "}
        <strong>without cookies</strong>, and creativity{" "}
        <strong>without skip buttons</strong>, DOOH is becoming an increasingly
        attractive choice.
      </p>
    </article>
  );
};

export default OOHIsGrowingGlobally;
