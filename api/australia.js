import swIcon1 from "/public/images/icon/sv_01.svg";
import swIcon2 from "/public/images/icon/sv_02.svg";
import swIcon3 from "/public/images/icon/sv_03.svg";
import swIcon4 from "/public/images/icon/sv_04.svg";

const Australia = [
  {
    Id: "1",
    sIcon: swIcon1,
    // title: "Residence Visa through Express Entry",
    // slug: "Express-Entry",
    // description:
    //   "Visit new places to discover with a Tourist Visa. We deliver your documents ...",
    // title: "Skilled Migration Through Subclass 189/190",
    title: "Skilled Independent 189",
    // slug: "Skilled-Migration",
    slug: "Skilled-Independent-189",
    description:
      // "Australia’s General Skilled Migration (GSM) visas allow qualified professionals to live and work permanently in Australia.",
      "Permanent visa for skilled workers with no employer or state sponsorship required.",
    data1: `
<h2>Skilled Independent Visa (Subclass 189)</h2>
<p>The Subclass 189 visa offers a pathway to permanent residency for skilled workers who are not sponsored by an employer, state, or family member. This points-tested visa assesses eligibility based on factors like age, English proficiency, work experience, and education.</p>
<ul>
  <li>Must score at least 65 points in SkillSelect.</li>
  <li>Occupation must be on the relevant skilled occupation list.</li>
  <li>Applicants must submit an Expression of Interest (EOI) and receive an invitation to apply.</li>
</ul>
<p>This visa grants unrestricted work and study rights, access to Medicare, and a path to Australian citizenship. It is ideal for independent professionals aiming for long-term settlement.</p>
<p>Holders can include family members in their application and enjoy the flexibility of living and working anywhere in Australia.</p>
`
  },
  {
    Id: "2",
    sIcon: swIcon2,
    iconColor: "color2",
    // title: "Pilot Program",
    // slug: "Pilot Program",
    // description:
    //   "Developing your trade, setting up new sales channels Your visa is ready...",
    // title: "Regional & State Nomination Programs",
    // slug: "Regional-State-Nomination",
    title: "Skilled Nominated 190",
    slug: "Skilled-Nominated-190",
    description:
      "Permanent visa for skilled workers nominated by an Australian state or territory.",
    data1: `
<h2>Skilled Nominated Visa (Subclass 190)</h2>
<p>The Subclass 190 visa is designed for skilled workers nominated by an Australian state or territory. Applicants must have an occupation on the relevant list, meet eligibility criteria, and commit to living and working in the nominating state.</p>
<ul>
  <li>Receive nomination from an Australian state or territory government.</li>
  <li>Submit an Expression of Interest (EOI) and meet minimum points requirements.</li>
  <li>Demonstrate relevant skills and qualifications for the nominated occupation.</li>
</ul>
<p>This visa provides permanent residency with full work and study rights, access to public healthcare, and a pathway to citizenship.</p>
<p>It encourages regional growth by attracting skilled workers to areas with labor shortages, benefiting both the individual and the Australian economy.</p>
`
  },
  {
    Id: "3",
    sIcon: swIcon2,
    iconColor: "color2",
    title: "Skilled Worked Regional Provisional 491",
    slug: "Worked-Regional-Provisional-491",
    description:
      "Provisional visa for skilled workers nominated by a state or family in designated regional areas.",
    data1: `
<h2>Skilled Work Regional (Provisional) Visa (Subclass 491)</h2>
<p>This provisional visa allows skilled workers to live and work in regional Australia for up to five years. It requires either state/territory nomination or sponsorship by an eligible family member residing in a designated area.</p>
<ul>
  <li>Occupation must be on the regional skilled occupation list.</li>
  <li>Minimum points required and successful EOI submission.</li>
  <li>Applicants must commit to living and working in regional Australia.</li>
</ul>
<p>Subclass 491 offers a pathway to permanent residency (Subclass 191) after meeting specific residence and income requirements.</p>
<p>It supports regional communities by addressing skill shortages while providing migrants with access to regional incentives, lower competition, and better lifestyle opportunities.</p>
`
  },
  {
    Id: "4",
    sIcon: swIcon2,
    iconColor: "color2",
    // title: "Provincial Nominee Program",
    // slug: "PNP",
    // description:
    //   "Developing your trade, setting up new sales channels Your visa is ready...",
    title: "Global Talent Visa 858",
    slug: "Global-Talent-Visa",
    description:
      "Permanent visa for highly skilled professionals in target sectors like tech and health.",
    data1: `
<h2>Global Talent Visa (Subclass 858)</h2>
<p>The Global Talent Visa targets exceptional talent in fields such as technology, health, academia, and engineering. It offers a streamlined pathway to permanent residency for those with international recognition in their field.</p>
<ul>
  <li>Applicants must secure a nomination from an eligible Australian organization or individual.</li>
  <li>Demonstrate exceptional achievements and potential to contribute to Australia’s innovation ecosystem.</li>
  <li>No age limit, but applicants under 18 or over 55 must show outstanding benefit to Australia.</li>
</ul>
<p>Successful applicants receive priority processing and immediate permanent residency. The program fosters innovation, strengthens Australia’s global standing, and supports economic growth through talent attraction.</p>
<p>This visa enhances Australia’s competitiveness in key sectors while providing a stable future for high-achieving professionals and their families.</p>
`
  },
  {
    Id: "5",
    sIcon: swIcon2,
    iconColor: "color2",
    // title: "Provincial Nominee Program",
    // slug: "PNP",
    // description:
    //   "Developing your trade, setting up new sales channels Your visa is ready...",
    title: "Spouse Dependent Visa",
    slug: "Spouse-Dependent-Visa",
    description:
      "Visa option for spouses and dependents of Australian citizens, residents, or eligible visa holders.",
    data1: `
<h2>Spouse and Dependent Visa Options</h2>
<p>This visa stream enables Australian citizens, permanent residents, or eligible visa holders to sponsor their spouse, partner, or dependent family members to live in Australia.</p>
<ul>
  <li>Includes options like Subclass 820/801 (Onshore Partner) and Subclass 309/100 (Offshore Partner) visas.</li>
  <li>Demonstrate genuine and ongoing relationship with the sponsor.</li>
  <li>Applicants must meet health and character requirements and provide supporting evidence of relationship.</li>
</ul>
<p>These visas allow work and study rights, Medicare access, and the possibility to include dependent children. They support family unity and contribute to Australia’s multicultural fabric.</p>
<p>The visa facilitates family settlement and integration into Australian society, while offering a pathway to permanent residency and citizenship for partners and dependents.</p>
`
  },
  {
    Id: "6",
    sIcon: swIcon3,
    iconColor: "color3",
    // title: "Student Visa",
    // slug: "Student-Visa",
    // offset: "offset-lg-4",
    // description:
    //   "Embarking on a journey of higher education in a foreign country opens doors to...",
    title: "Student Visa (Subclass 500)",
    slug: "Student-Visa",
    offset: "offset-lg-4",
    description:
      "Study full-time at a registered Australian institution with work rights and post-study opportunities.",
    data1: `
<h2>Student Visa (Subclass 500)</h2>
<p>This visa enables international students to pursue full-time education at recognized Australian institutions while enjoying work rights and a pathway to post-study opportunities.</p>
<ul>
  <li>Requires enrolment in a CRICOS-registered course and evidence of financial capacity.</li>
  <li>Includes work rights of up to 48 hours per fortnight during term and unlimited during breaks.</li>
  <li>Eligibility for post-graduation work visas (Subclass 485).</li>
</ul>
<p>Australia offers a world-class education system, diverse cultural experiences, and strong support for international students. The Student Visa serves as a gateway to global career opportunities and potential permanent residency pathways.</p>
<p>Graduates can contribute to Australia’s skilled workforce while enjoying high-quality living standards and a vibrant multicultural environment.</p>
`
  },
  {
    Id: "7",
    sIcon: swIcon4,
    iconColor: "color4",
    // title: "Visit Visa",
    // slug: "Visit Visa",
    // description:
    //   "Expert Guidance for a Seamless Immigration Journey Expert Guidance...",
    title: "Visitor Visa (Subclass 600)",
    slug: "Visit-Visa",
    description:
      "Explore Australia for tourism, family visits, or business meetings with this short-term visa.",
    data1: `
<h2>Visitor Visa (Subclass 600)</h2>
<p>This visa allows individuals to visit Australia temporarily for tourism, visiting family, or short-term business activities. It is valid for 3, 6, or 12 months, depending on circumstances.</p>
<ul>
  <li>Simple application with basic documentation and evidence of ties to home country.</li>
  <li>Available from outside or inside Australia.</li>
  <li>No work rights included but allows participation in conferences and cultural activities.</li>
</ul>
<p>Australia’s diverse landscapes, vibrant cities, and rich culture make it a top destination for travelers. This visa promotes tourism and business exchanges, contributing to Australia’s economy.</p>
<p>Whether visiting iconic landmarks, reconnecting with loved ones, or attending events, the Visitor Visa ensures a memorable Australian experience.</p>
`
  },
];

export default Australia;
