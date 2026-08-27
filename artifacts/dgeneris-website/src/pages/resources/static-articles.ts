export type StaticArticle = {
  slug: string;
  title: string;
  category: 'Care Tendering' | 'Cleaning Tendering' | 'General Procurement';
  excerpt: string;
  author: string;
  content: string[];
};

export const STATIC_ARTICLES: StaticArticle[] = [
  {
    slug: 'how-to-win-domiciliary-care-tenders',
    title: 'How to Win Domiciliary Care Tenders',
    category: 'Care Tendering',
    excerpt:
      'What local authorities typically score in home-care bids — and how to evidence safeguarding, staffing and outcomes.',
    author: 'Dgeneris Bids',
    content: [
      'Domiciliary care tenders usually combine quality, social value and price. Evaluators look for safe, person-centred delivery that can mobilise without disrupting people already receiving support.',
      'Build answers around safeguarding pathways, recruitment and retention, training competency, continuity of carers, electronic call monitoring where required, and clear escalation routes.',
      'Price must be sustainable. Unrealistically low rates raise concerns about staffing quality. Align your commercial model to the specification and local fee expectations.',
      'Use real operational examples — anonymised — rather than generic statements about “excellent care”. Buyers recognise the difference.',
    ],
  },
  {
    slug: 'prepare-for-supported-living-tenders',
    title: 'How to Prepare for Supported Living Tenders',
    category: 'Care Tendering',
    excerpt:
      'Supported living buyers focus on independence, risk enablement and partnership with housing providers.',
    author: 'Dgeneris Bids',
    content: [
      'Supported living specifications often emphasise enabling independence, positive risk-taking and multi-agency working. Your bid should show how support plans are co-produced with the person.',
      'Explain how you work with landlords and housing providers, manage voids and voids risk where relevant, and maintain tenancy sustainability.',
      'Staffing models for 24/7 or visiting support need clear rotas, on-call arrangements and competency for complex needs.',
      'Map evidence early: policies, training matrices, incident learning and outcome measures for people you already support.',
    ],
  },
  {
    slug: 'common-care-tender-mistakes',
    title: 'Common Care Tender Mistakes',
    category: 'Care Tendering',
    excerpt:
      'Frequent pitfalls that cost care providers marks — from recycled answers to weak mobilisation plans.',
    author: 'Dgeneris Bids',
    content: [
      'Copying previous bids without rewriting to the new evaluation criteria is one of the most common mistakes. Each tender has different weightings and emphases.',
      'Overstating CQC status or implying outcomes you cannot evidence damages credibility. Present registration and ratings accurately.',
      'Thin mobilisation plans — especially TUPE of care staff and service continuity — often lose marks even when quality narratives are strong.',
      'Leaving social value until the last minute produces vague pledges. Buyers prefer measurable commitments linked to the local area.',
    ],
  },
  {
    slug: 'cqc-and-tender-readiness',
    title: 'CQC and Tender Readiness',
    category: 'Care Tendering',
    excerpt:
      'How CQC status relates to care tendering — and why preparation support is not the same as registration.',
    author: 'Dgeneris Bids',
    content: [
      'Many care contracts require CQC registration for regulated activities. Buyers will ask for your registration details, locations and any conditions or enforcement history.',
      'Tender readiness means being able to present that status clearly, alongside quality improvement narratives and governance evidence.',
      'Preparing for registration — organising documentation, Statements of Purpose and readiness checks — is professional support work. The Care Quality Commission alone decides registration outcomes.',
      'Dgeneris Bids helps providers prepare documentation and strengthen readiness. We do not claim that Dgeneris Bids itself is CQC-registered, and we do not decide registration applications.',
    ],
  },
  {
    slug: 'what-local-authorities-look-for-in-care-bids',
    title: 'What Local Authorities Look For in Care Bids',
    category: 'Care Tendering',
    excerpt:
      'A practical overview of themes that repeatedly appear in adult social care evaluation criteria.',
    author: 'Dgeneris Bids',
    content: [
      'Local authorities typically score safeguarding, person-centred practice, staffing resilience, quality assurance, risk management, continuity of care, outcomes and partnership working.',
      'They also examine mobilisation, contract management, complaints handling and how you learn from incidents.',
      'Social value is increasingly weighted. Link commitments to the authority’s published priorities where possible.',
      'Write for the evaluator: clear headings, direct answers to each part of the question, and evidence in plain English.',
    ],
  },
  {
    slug: 'how-to-win-school-cleaning-contracts',
    title: 'How to Win School Cleaning Contracts',
    category: 'Cleaning Tendering',
    excerpt:
      'Education cleaning tenders emphasise safeguarding, site methodology, holiday programmes and reliable staffing.',
    author: 'Dgeneris Bids',
    content: [
      'School cleaning contracts demand robust DBS and safeguarding arrangements, clear holiday and term-time programmes, and methods suitable for busy educational environments.',
      'Method statements should cover classrooms, toilets, halls, kitchens (where in scope), infection control peaks and reactive cleans.',
      'TUPE is common when incumbent staff transfer. Explain consultation, training alignment and service continuity from day one.',
      'Demonstrate how you manage term-time peaks, sickness cover and communication with school business managers.',
    ],
  },
  {
    slug: 'how-to-write-a-cleaning-method-statement',
    title: 'How to Write a Cleaning Method Statement',
    category: 'Cleaning Tendering',
    excerpt:
      'Structure a method statement buyers can score — frequencies, standards, equipment, COSHH and quality checks.',
    author: 'Dgeneris Bids',
    content: [
      'A strong method statement is site-aware. Generic “we clean to a high standard” text rarely scores well.',
      'Include scope by area, frequencies, cleaning standards, equipment and materials, COSHH controls, colour-coding and waste handling.',
      'Explain quality inspection routines, how failures are rectified, and how you report performance to the client.',
      'Align the statement to the specification’s KPIs so evaluators can tick requirements against your process.',
    ],
  },
  {
    slug: 'understanding-tupe-in-cleaning-contracts',
    title: 'Understanding TUPE in Cleaning Contracts',
    category: 'Cleaning Tendering',
    excerpt:
      'Why TUPE appears so often in cleaning tenders and what buyers expect to see in your response.',
    author: 'Dgeneris Bids',
    content: [
      'When a cleaning contract changes provider, Transfer of Undertakings (Protection of Employment) regulations often apply to staff assigned to the contract.',
      'Buyers want assurance you understand information and consultation duties, will protect transferring employees’ rights, and can maintain service levels during handover.',
      'Describe your mobilisation timeline, payroll transition, uniform and training induction, and how you resolve employee liability information gaps.',
      'This article is educational only and is not legal advice. Seek specialist employment advice for live transfers.',
    ],
  },
  {
    slug: 'social-value-in-cleaning-tenders',
    title: 'Social Value in Cleaning Tenders',
    category: 'Cleaning Tendering',
    excerpt:
      'Move beyond vague community pledges — make social value measurable for cleaning and FM bids.',
    author: 'Dgeneris Bids',
    content: [
      'Public buyers increasingly score social value alongside price and quality. Cleaning bids should propose commitments you can actually deliver.',
      'Examples include local recruitment, apprenticeships, volunteering hours, surplus kit donations, or environmental improvements such as reduced chemical use.',
      'Tie each commitment to a measure, owner and reporting cycle. Vague promises are easy for evaluators to mark down.',
      'Align where possible with the contracting authority’s published social value priorities.',
    ],
  },
  {
    slug: 'common-cleaning-tender-mistakes',
    title: 'Common Cleaning Tender Mistakes',
    category: 'Cleaning Tendering',
    excerpt:
      'From weak COSHH narratives to under-resourced rotas — mistakes that undermine otherwise capable cleaners.',
    author: 'Dgeneris Bids',
    content: [
      'Underestimating labour hours to win on price often backfires at clarification or mobilisation. Be honest about resourcing.',
      'Method statements that ignore site-specific risks (healthcare, education, high-rise access) lose credibility.',
      'Failing to address TUPE thoroughly is a frequent gap on re-tenders.',
      'Leaving environmental and social value answers generic wastes available marks.',
    ],
  },
  {
    slug: 'what-is-a-dps',
    title: 'What Is a DPS?',
    category: 'General Procurement',
    excerpt:
      'A plain-English introduction to Dynamic Purchasing Systems in UK public procurement.',
    author: 'Dgeneris Bids',
    content: [
      'A Dynamic Purchasing System (DPS) is a completely electronic procedure used by public buyers to appoint suppliers who meet selection criteria, then invite them to compete for specific contracts over time.',
      'Unlike a closed framework with a fixed supplier list from day one, a DPS typically remains open for new suppliers to apply during its life (subject to the published rules).',
      'Getting onto a DPS is often only the first step — you still need to respond to further competitions.',
      'Read the DPS documentation carefully for categories, geography and any ongoing compliance requirements.',
    ],
  },
  {
    slug: 'what-is-a-framework-agreement',
    title: 'What Is a Framework Agreement?',
    category: 'General Procurement',
    excerpt:
      'How frameworks work, how call-offs happen, and why joining one is not the same as winning work.',
    author: 'Dgeneris Bids',
    content: [
      'A framework agreement sets terms under which a buyer (or group of buyers) may award contracts during a set period, usually after an initial competition to appoint framework suppliers.',
      'Work is then awarded via call-offs — which may be direct award where rules allow, or further competition between framework suppliers.',
      'Being appointed to a framework improves access to opportunities; it does not guarantee volume.',
      'Check lot structure, exclusivity, rates and KPIs before investing in a framework application.',
    ],
  },
  {
    slug: 'how-tender-evaluation-works',
    title: 'How Tender Evaluation Works',
    category: 'General Procurement',
    excerpt:
      'Quality, price and social value — how published criteria drive marking in UK tenders.',
    author: 'Dgeneris Bids',
    content: [
      'Most UK public tenders publish evaluation criteria and weightings. Evaluators mark responses against those criteria, not against marketing appeal alone.',
      'Quality questions are often scored on a defined scale. Missing part of a multi-part question usually costs marks.',
      'Price evaluation methods vary — lowest price, price–quality ratio, or other published formulas. Understand the model before pricing.',
      'Always answer the question asked. Extra information that does not address the criteria rarely helps.',
    ],
  },
  {
    slug: 'bid-or-no-bid-how-to-decide',
    title: 'Bid or No-Bid: How to Decide',
    category: 'General Procurement',
    excerpt:
      'A practical checklist for deciding whether a tender is worth the investment of time.',
    author: 'Dgeneris Bids',
    content: [
      'Ask: Are we eligible? Can we deliver? Is the geography workable? Do we have capacity? Is the commercial model viable?',
      'Review evaluation criteria early. If you cannot evidence key scored themes, the bid may consume resource with little prospect of competing.',
      'Consider opportunity cost — pursuing a weak-fit tender can prevent you preparing a better one.',
      'A structured bid/no-bid review with clear ownership reduces last-minute panic submissions.',
    ],
  },
  {
    slug: 'how-to-build-a-tender-evidence-library',
    title: 'How to Build a Tender Evidence Library',
    category: 'General Procurement',
    excerpt:
      'Organise policies, case studies, certificates and KPIs so every bid starts faster and stronger.',
    author: 'Dgeneris Bids',
    content: [
      'An evidence library is a curated store of bid-ready materials: policies, insurance, accreditations, anonymised case studies, training matrices and performance data.',
      'Version-control documents and set review dates so you never attach expired certificates.',
      'Tag materials by theme — safeguarding, TUPE, environmental, social value — so writers can find proof quickly.',
      'Update the library after every bid and every contract debrief so learning compounds.',
    ],
  },
  {
    slug: 'prepare-for-public-sector-procurement',
    title: 'How to Prepare for Public-Sector Procurement',
    category: 'General Procurement',
    excerpt:
      'Foundational steps for SMEs entering Contracts Finder, Find a Tender and framework competitions.',
    author: 'Dgeneris Bids',
    content: [
      'Register on relevant portals, keep company details consistent, and ensure financial and insurance documents are current.',
      'Understand whether you need selection questionnaire responses, DPS applications or full ITT packs for your target buyers.',
      'Invest in core policies and a simple quality management narrative before the first large tender arrives.',
      'Start with opportunities that match your geography and capability — winning trust and references supports later growth.',
    ],
  },
];

export function getArticleBySlug(slug: string): StaticArticle | undefined {
  return STATIC_ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: StaticArticle['category']): StaticArticle[] {
  return STATIC_ARTICLES.filter((a) => a.category === category);
}
