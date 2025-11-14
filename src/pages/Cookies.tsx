const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-10 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-black text-black">Cookies</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-28 px-10">
        <div className=" mx-auto max-w-7xl">
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className=" animate-in fade-in duration-500">
              <p className="text-base leading-relaxed text-foreground/90 mb-4">
                Táto webstránka používa súbory cookies. Na prispôsobenie obsahu
                a reklám, poskytovanie funkcií sociálnych médií a analýzu
                návštevnosti používame súbory cookie. Informácie o tom, ako
                používate naše webové stránky, poskytujeme aj našim partnerom v
                oblasti sociálnych médií, inzercie a analýzy. Títo partneri môžu
                príslušné informácie skombinovať s ďalšími údajmi, ktoré ste im
                poskytli alebo ktoré od vás získali, keď ste používali ich
                služby. Pokračovaním v používaní našich webových stránok
                vyjadrujete svoj súhlas s cookies na webovej stránke.
              </p>
            </section>

            {/* What are Cookies */}

            <p className="text-base leading-relaxed text-foreground/90 mb-2">
              Cookies sú malé textové súbory, ktoré môžu byť použité webovými
              stránkami, aby zefektívnili užívateľovu skúsenosť.
            </p>

            {/* Legal Information */}

            <p className="text-base leading-relaxed text-foreground/90 mb-2">
              Zákon hovorí, že môžeme ukladať súbory cookie na vašom zariadení,
              ak sú nevyhnutné pre prevádzku týchto stránok. Pri všetkých
              ostatných typoch súborov cookie potrebujeme váš súhlas.
            </p>
            <p className="text-base leading-relaxed text-foreground/90 mb-2">
              Táto stránka používa rôzne typy cookies. Niektoré cookies sú tu
              umiestnené službami tretích strán, ktoré sa objavujú na našich
              stránkach.
            </p>

            {/* Your Rights */}

            <p className="text-base leading-relaxed text-foreground/90 mb-2">
              Svoj súhlas so Zásadami cookies môžete kedykoľvek zmeniť alebo
              odvolať na našej webovej stránke.
            </p>
            <p className="text-base leading-relaxed text-foreground/90 mb-2">
              Získajte viac informácií o tom, kto sme, ako nás môžete
              kontaktovať a ako spracovávame osobné údaje v našich Zásadách
              ochrany osobných údajov.
            </p>

            {/* Scope */}

            <p className="text-base leading-relaxed text-foreground/90 mb-2">
              Váš súhlas sa vzťahuje na nasledovné oblasti:{" "}
              <strong className="text-cyan">www.lurity.com</strong>
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Cookies;
