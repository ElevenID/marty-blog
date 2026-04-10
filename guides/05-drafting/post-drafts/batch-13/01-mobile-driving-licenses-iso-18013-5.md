# Mobile Driving Licenses and ISO 18013-5

*ISO 18013-5 defines how a driving licence can live on a phone without turning a government credential into a glorified screenshot. This post explains mDoc, proximity exchange, holder binding, and the trust model that makes mobile driving licences operationally credible.*

A mobile driving licence is easy to describe badly.

The bad version sounds almost cheerful: take the plastic card, put it in a wallet app, and let the phone do the rest.

The real problem is harder than that. A driving licence is a government credential. It is supposed to carry institutional trust, not just a familiar visual design. Once that credential moves onto a personal device, the verifier still needs three things to remain true at the same time:

- the issuing authority still has to count as authoritative
- the verifier still has to ask for only the data it needs
- the presentation still has to be bound to the holder and the moment of the request

That is what ISO 18013-5 is really trying to solve.

The standard is not the whole mobile-identity market, and it does not eliminate regional policy differences. What it does provide is a shared grammar for how a mobile driving licence is structured, how a verifier asks for it, and how a holder’s device answers without discarding the government trust model that made the licence valuable in the first place.

## A phone-held licence still has to feel like government trust

A physical driving licence gets a lot of help from the medium itself.

The card has familiar issuer branding, visible security features, and an institutional setting people already understand. A verifier may still inspect it badly, but the form factor makes the document feel like a government artifact. A phone-held licence has to recreate that confidence through a very different set of mechanisms.

That is why mDL should not be taught as a wallet-UX novelty first. It should be taught as a trust problem.

The holder’s phone is a consumer device. The licence is a regulated government credential. The verifier may be a police officer, a checkpoint reader, or a retail system under policy constraints of its own. Those parties do not need a prettier card image. They need a standard way to know which issuer signed the credential, which data elements are being requested, and whether the device presenting the credential is the same device to which the credential was bound.

This is also where ISO 18013-5 should be kept in scope correctly. It is not a universal standard for all digital identity. It is a specific mobile-document standard for driving licences and adjacent document-style credentials. Marty’s glossary gives the cleanest description: `mDoc` is the ISO 18013-5 mobile document format, a CBOR-encoded credential used for mDL, DTC, and other standards-based physical-identity credentials.

That scope is important because it keeps readers from mixing several different arguments together. SD-JWT, VC-JWT, and other web-oriented formats are trying to solve adjacent problems in different environments. ISO 18013-5 is the part of the landscape that says: if a government licence has to be carried on a phone and shown to a reader device, this is the document and exchange model we expect.

So the first useful correction is simple. An mDL is not a phone wallpaper version of a state ID. It is a government-signed mobile document that has to survive verifier scrutiny on a personal device.

## mDoc combines issuer-signed data with device-bound proof

Once the scope is clear, the standard becomes much easier to understand.

ISO 18013-5 does two jobs at once. It defines the shape of the mobile document, and it defines the exchange pattern through which a verifier requests data from it.

On the presentation side, the Marty protocol specification captures the proximity sequence in a compact form:

- `DeviceEngagement`
- `SessionEstablishment`
- `DeviceRequest`
- `DeviceResponse`

That sequence matters because it turns the interaction into something more disciplined than “show me your phone.” The reader establishes a session with the holder device, asks for specific namespaces and data elements, and receives a signed response rather than a broad payload dump.

This is where the mDoc model earns its keep. The document is structured in namespaces, and the verifier requests the specific elements it needs from those namespaces. That does not magically solve privacy by itself, but it creates the right request boundary. A verifier no longer has to ingest an entire licence record simply because the holder presented a licence. It can ask for the elements its policy actually requires.

The second important correction is about who signs what.

In practical mDL deployments, one layer of proof belongs to the issuer and another belongs to the holder device. The issuing authority signs the credential content that says, in effect, “these are the official licence claims we stand behind.” The device then participates in the presentation moment so the verifier knows it is not just looking at a copied file or a replayed response from an earlier session.

That is why holder binding is not an optional embellishment in this ecosystem. Marty’s Cedar verification rules make the point bluntly for `AAMVA_MDL`: verification is forbidden unless the credential format is `MDOC`, and it is also forbidden unless `holder_binding_present` is true. The format and the device-bound proof are both part of what makes the result acceptable.

This distinction is one of the easiest places for implementers to get lost. If all the trust lives in the issuer signature, the ecosystem becomes too easy to copy or replay. If all the attention goes to the device, the government issuer disappears from the trust picture. ISO 18013-5 keeps both visible: the issuer signs the document, and the device proves the holder-side presentation event.

Modern issuance ecosystems then add another layer around that. In Marty’s wallet-compatibility model, the common issuance bundle for mDL is `MDOC` plus `OID4VCI_PRE_AUTH`, narrowed further by a compliance code such as `AAMVA_MDL` or `EUDI_MDL`. That is a useful reminder that the standard does not live alone. The document format, the issuance path, and the compliance framework travel as a bundle.

## Trust lists and runtime policy decide whether mDL works in production

A standard can define the document and the session shape. Production still asks harder questions.

Which issuer roots does the verifier trust? Which wallets can actually receive and hold the credential? How fresh must trust and status material be before the verifier should stop accepting presentations? What happens when a checkpoint or reader is operating with limited connectivity?

These are the conditions under which mDL either becomes infrastructure or stays a demo.

The Marty wallet-profile specification makes the compatibility surface explicit. `MDOC` plus `OID4VCI_PRE_AUTH` plus `AAMVA_MDL` maps to Apple Wallet (mDL), Google Wallet (mDL), and ISO mDL wallets. `MDOC` plus `OID4VCI_PRE_AUTH` plus `EUDI_MDL` maps to EUDI and eIDAS wallet families. That table is useful not because it gives the market a winner. It is useful because it tells the truth: mobile-document compatibility is bundle-based. A wallet has to support the right format, the right issuance path, and the right compliance environment together.

Trust works the same way.

For North American mDL deployments, trust usually centers on issuing-authority roots rather than on ad hoc verifier pinning. The practical pattern described across the Marty materials is a trust-list model: the verifier loads trusted `IACA` roots through an authoritative source such as the AAMVA Digital Trust Service, then validates presented mDocs against that governed root set. In other words, the verifier is not trusting “whatever looks like an mDL.” It is trusting a specific issuing-authority ecosystem.

That is the government-trust half of the runtime story.

The other half is operational. Local verification is one of the advantages of document-style credentials, but it should never be described as effortless offline freedom. A verifier can validate signatures and holder-bound proof locally only as long as its trust material, revocation data, and freshness rules remain inside the approved window. Once those artifacts age out, the verifier is no longer simply “offline.” It is operating with stale assurance.

This is where Marty’s abstractions help keep the explanation honest. A `Trust Profile` says which trust sources, algorithms, and formats count. A `Deployment Profile` says how that trust package reaches the runtime, how long it can remain current enough to use, and what the verifier should do when freshness expires. The mDL format does not eliminate those questions. It simply gives them a shared document grammar.

That is the right place to land the argument. ISO 18013-5 makes a mobile driving licence possible because it keeps four things aligned:

- a government-signed mobile document format
- a device-oriented presentation exchange
- bounded disclosure of requested data elements
- a trust model that still depends on real issuing-authority roots and runtime policy

Once readers see that, the mDL story stops looking like a wallet feature race and starts looking like what it actually is: a government credential adapted for a phone without pretending the government-trust problem disappeared.

If you want the broader trust infrastructure behind that result, continue to `how-governments-build-identity-pki`. If you want the holder-side runtime story, go next to `mobile-wallet-architectures`. If you want the verifier-side request boundary that sits above the exchange, continue to `presentation-protocols`.

## Related reading

- `how-governments-build-identity-pki` — the broader trust-list and root-distribution model behind mDL and other government credentials
- `mobile-wallet-architectures` — how wallets store, transport, and present document-style credentials on user devices
- `presentation-protocols` — how verifiers ask bounded questions before the device returns any proof
- `interoperability-between-credential-formats` — where mDoc fits in the wider credential-format landscape

## Draft metadata

- **Slug:** `mobile-driving-licenses-iso-18013-5`
- **Date:** `2025-10-23`
- **Updated date:** `2026-04-09`
- **Category:** `Technical`
- **Topic:** `mDoc Standards`
- **Topic cluster:** `mDoc Standards`
- **Layer:** `Deploy`
- **Difficulty:** `Intermediate`
- **Section:** `implementation`
- **Related:** `how-governments-build-identity-pki`, `mobile-wallet-architectures`, `presentation-protocols`
- **Concept tags:** `wallets`, `mdoc`, `travel`
- **Standards tags:** `ISO 18013-5`, `mDoc`
- **Lead narrator:** Aiko Tanaka
- **Primary reader:** standards-minded architect, implementer, product owner
- **Likely CTA:** `how-governments-build-identity-pki`
- **Status:** `live`
- **Batch:** `batch-13`
