
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden - Philip Ghering',
  description: 'Bekijk de algemene voorwaarden voor mijn diensten als freelance full-stack Node.js ontwikkelaar. Transparantie over aansprakelijkheid, betaling, intellectueel eigendom en meer.',
  robots: 'noindex, nofollow',
}

export default function GeneralTermsAndConditions() {
  return (
    <div className="font-sans text-gray-400 pb-20">
      <header className="max-w-4xl mx-auto p-6 mb-12 mt-6">
        <h1 className="text-3xl font-bold animate-bg-image bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Philip Ghering
        </h1>
      </header>

      <main
        lang="nl-NL"
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Algemene Voorwaarden
        </h2>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            1. Toepasselijkheid
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en werkzaamheden van opdrachtnemer, tenzij schriftelijk anders is overeengekomen.
            </li>
            <li>
              Afwijkingen van deze voorwaarden zijn alleen geldig als deze schriftelijk door beide partijen zijn bevestigd.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Uitvoering van de opdracht</h3>
          <ol className="list-decimal list-inside space-y-2" start={1}>
            <li>
              Opdrachtnemer voert de werkzaamheden uit naar beste inzicht en vermogen, op basis van de afgesproken scope.
            </li>
            <li>
              Indien tijdens de uitvoering blijkt dat wijzigingen noodzakelijk zijn, worden deze alleen uitgevoerd na overleg en schriftelijk akkoord van opdrachtgever.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Levering en oplevering</h3>
          <ol className="list-decimal list-inside space-y-2" start={1}>
            <li>
              Deadlines zijn indicatief en nooit fataal, tenzij uitdrukkelijk schriftelijk anders overeengekomen.
            </li>
            <li>
              Na oplevering is de opdrachtgever verantwoordelijk voor het gebruik en beheer van de opgeleverde systemen en data.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. Aansprakelijkheid</h3>
          <ol className="list-decimal list-inside space-y-2" start={1}>
            <li>
              Opdrachtnemer is slechts aansprakelijk voor directe schade die aantoonbaar het gevolg is van een toerekenbare tekortkoming.
            </li>
            <li>
              Iedere aansprakelijkheid is beperkt tot het bedrag van de factuurwaarde van de betreffende opdracht.
            </li>
            <li>
              Opdrachtnemer is nooit aansprakelijk voor indirecte schade zoals gevolgschade, gederfde winst of verlies van data.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">5. Betaling</h3>
          <ol className="list-decimal list-inside space-y-2" start={1}>
            <li>
              Betaling verloopt via Tentoo Payroll Services.
            </li>
            <li>
              Facturen dienen te worden betaald binnen 14 dagen na factuurdatum, tenzij schriftelijk anders overeengekomen.
            </li>
            <li>
              Bij overschrijding van de betalingstermijn kan opdrachtnemer de werkzaamheden opschorten totdat betaling heeft plaatsgevonden.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">6. Intellectueel eigendom</h3>
          <ol className="list-decimal list-inside space-y-2" start={1}>
            <li>
              Alle door opdrachtnemer ontwikkelde of geleverde configuraties, scripts en documenten blijven eigendom van opdrachtnemer totdat de volledige betaling is voldaan.
            </li>
            <li>
              Na volledige betaling verkrijgt opdrachtgever een niet-exclusief gebruiksrecht voor onbepaalde tijd.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">7. Hosting en externe diensten</h3>
          <ol className="list-decimal list-inside space-y-2" start={1}>
            <li>
              Indien opdrachtgever gebruikmaakt van externe diensten zoals DigitalOcean of S3 storage, zijn de algemene voorwaarden van die providers van toepassing.
            </li>
            <li>
              Opdrachtnemer is niet aansprakelijk voor storingen, downtime of prijswijzigingen bij externe providers.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">8. Overmacht</h3>
          <ol className="list-decimal list-inside space-y-2" start={1}>
            <li>
              Opdrachtnemer is niet gehouden tot nakoming van enige verplichting indien hij daartoe verhinderd wordt door overmacht.
            </li>
            <li>
              Onder overmacht wordt mede verstaan: storingen bij hostingproviders, uitval van internetverbindingen, en omstandigheden die buiten de macht van opdrachtnemer liggen.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">9. Beëindiging</h3>
          <ol className="list-decimal list-inside space-y-2" start={1}>
            <li>
              Beide partijen kunnen de overeenkomst tussentijds beëindigen met een opzegtermijn van 14 dagen, tenzij anders overeengekomen.
            </li>
            <li>
              Bij tussentijdse beëindiging worden reeds uitgevoerde werkzaamheden naar rato gefactureerd.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">10. Toepasselijk recht</h3>
          <ol className="list-decimal list-inside space-y-2" start={1}>
            <li>
              Op deze overeenkomst is Nederlands recht van toepassing.
            </li>
            <li>
              Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar opdrachtnemer gevestigd is.
            </li>
          </ol>
        </section>

        <p className="text-sm text-gray-500 mt-12">
          Laatst bijgewerkt: 26 augustus 2025
        </p>
      </main>
    </div>
  );
}