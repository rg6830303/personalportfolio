export const profile = {
  name: 'Dr. Raka Ghosh',
  firstName: 'Raka',
  lastName: 'Ghosh',
  role: 'Research Ethics, Compliance & Academic Governance',
  disciplines: ['Research Ethics & Compliance', 'Academic Governance', 'Research Integrity'],
  location: 'India',
  email: 'ghoshraka3@gmail.com',
  phone: '+91 98363 93311',
  phoneDial: '+919836393311',
  whatsapp: '919836393311',
  whatsappMessage:
    "Hello Dr. Ghosh, I found your portfolio and would like to connect regarding a research-ethics / governance opportunity.",
  linkedin: 'https://www.linkedin.com/in/dr-raka-ghosh-8a2134213',
  linkedinLabel: 'in/dr-raka-ghosh',
  photo: '/img/raka-ghosh.jpg',
  yearsExperience: '17+',
  tagline:
    'A synthetic chemist turned governance leader — building the systems, policies and culture that keep research honest.',
  summary:
    'Accomplished researcher and academic leader with a Ph.D. in Synthetic Organic Chemistry from IIT Bombay and 17+ years spanning pharmaceutical R&D, institutional governance, and large-scale digital education. I pair hands-on research experience — including regulatory-compliant laboratory operations at Cipla under CDSCO and GMP frameworks — with senior governance at the National Digital Library of India, a Ministry of Education (NMEICT) initiative serving learners nationwide. My work sits across the full research lifecycle: responsible conduct of research, data privacy, IP, and publication ethics, informed by doctoral training, pharmaceutical compliance, an active scholarly-communication publication record, and continued study in responsible AI, bibliometrics, and systematic review.',
};

export type Stat = { value: string; label: string; tone: 'yellow' | 'green' | 'red'; note?: string };
export const stats: Stat[] = [
  { value: '17+', label: 'Years across research, academia & governance', tone: 'green' },
  { value: 'Ph.D.', label: 'Synthetic Organic Chemistry · IIT Bombay', tone: 'red' },
  { value: '5+', label: 'Peer-reviewed papers & conference proceedings', tone: 'yellow' },
  { value: '7 yrs', label: 'University lecturing & student mentoring', tone: 'green' },
  {
    value: '2',
    label: 'Nations — academic-integrity programmes delivered',
    tone: 'red',
    note: 'India & Nigeria, via EdTech higher-education platforms (Aurus Tech).',
  },
];

export type Competency = { title: string; note: string; tone: 'yellow' | 'green' | 'red' };
export const competencies: Competency[] = [
  { title: 'Research Ethics Governance', note: 'Frameworks that hold up under scrutiny', tone: 'green' },
  { title: 'Regulatory Compliance', note: 'CDSCO / ICMR / GLP / GMP', tone: 'red' },
  { title: 'Ethics Committee Management', note: 'IRB & IBSC operations end to end', tone: 'yellow' },
  { title: 'SOP & Policy Development', note: 'From draft to institutional adoption', tone: 'green' },
  { title: 'IRB / IBSC Operations', note: 'Review cycles, quorum, documentation', tone: 'red' },
  { title: 'Research Integrity & QA', note: 'Monitoring, deviations, corrective action', tone: 'red' },
  { title: 'Training Design & Delivery', note: 'Responsible conduct of research', tone: 'yellow' },
  { title: 'Accreditation Documentation', note: 'Audit-ready records at scale', tone: 'green' },
  { title: 'Stakeholder Engagement', note: 'MoE, UGC & NDLI cross-functional bodies', tone: 'red' },
  { title: 'Responsible AI in Research', note: 'Ethical deployment & usage guidelines', tone: 'yellow' },
  { title: 'Data Privacy & Confidentiality', note: 'High-stakes institutional records', tone: 'green' },
  { title: 'Project & Records Management', note: 'Audit trails that survive review', tone: 'yellow' },
];

export type Role = {
  title: string;
  org: string;
  meta?: string;
  period: string;
  tone: 'yellow' | 'green' | 'red';
  award?: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: 'Senior Project Manager — Content Creation & Research Governance',
    org: 'National Digital Library of India, IIT Kharagpur',
    meta: 'Ministry of Education, Govt. of India · NMEICT Mandate',
    period: 'Dec 2023 — Present',
    tone: 'green',
    points: [
      'Oversee governance of large-scale academic content operations within a nationally mandated digital repository — applying compliance standards analogous to institutional research ethics requirements.',
      'Develop institutional SOPs and workflow protocols for content quality assurance, coordinating multi-disciplinary academic and technology teams across distributed verticals.',
      'Engage with regulatory and accreditation bodies (MoE, UGC) to ensure alignment with national education and research policy frameworks.',
      'Design performance-monitoring systems to track protocol adherence, flag deviations and implement corrective action — directly transferable to research ethics compliance monitoring.',
      'Champion responsible AI integration in educational content production, developing usage guidelines and ethics frameworks for AI-assisted knowledge systems.',
    ],
  },
  {
    title: 'Deputy Manager — Institutional Governance & Communications',
    org: 'BDG',
    period: 'May 2023 — Dec 2023',
    tone: 'red',
    points: [
      'Stewarded institutional policy communications and compliance documentation for a ₹300-crore enterprise, ensuring regulatory alignment and audit-readiness across functions.',
      'Drafted and operationalised governance frameworks, stakeholder communication SOPs and cross-functional coordination protocols.',
      'Managed confidential organisational records and structured compliance reporting for senior leadership — demonstrating discretion and accuracy in high-stakes environments.',
    ],
  },
  {
    title: 'Product Analyst & Research Ethics Trainer (Academic)',
    org: 'Aurus Tech Pvt. Ltd.',
    period: 'Dec 2021 — Nov 2022',
    tone: 'yellow',
    points: [
      'Designed and delivered academic integrity and responsible research conduct modules for higher-education platforms across India and Nigeria.',
      'Advised faculty on research protocol design, ethical content standards and informed-consent requirements in digital education research.',
      'Coordinated cross-continental academic review panels — managing review cycles, timelines and documentation, mirroring IRB and ethics committee operations.',
    ],
  },
  {
    title: 'Coordinator & Lecturer — Chemistry, Environmental Science & Curriculum',
    org: 'CPS (Higher Secondary Section)',
    period: 'Jun 2014 — Dec 2021',
    tone: 'green',
    award: 'Pathbreaker of the Year 2021',
    points: [
      'Lectured in chemistry, organic chemistry, biochemistry and environmental science across seven years, coordinating curriculum and the university science club.',
      'Ran and supervised laboratory sessions on GC, NMR, centrifuge and Rotovap instruments — embedding lab-safety, health and data-integrity discipline in every practical.',
      'Coordinated interdisciplinary academic committees — managing member schedules, agendas, minutes and attendance records.',
      'Mentored students and research scholars on academic honesty, laboratory ethics and responsible study practices.',
    ],
  },
  {
    title: 'Scientific Researcher — Pharmaceutical R&D & Regulatory Compliance',
    org: 'Cipla Ltd.',
    period: 'Mar 2004 — Dec 2009',
    tone: 'red',
    points: [
      'Operated within CDSCO, GLP and GMP regulatory frameworks — managing compliance documentation, protocol design, deviation reporting and audit-ready records across R&D pipelines.',
      'Drafted and followed SOPs for synthetic route design, technology transfer and plant-scale API production.',
      'Conducted literature and patent analysis to ensure IP compliance and inform regulatory submissions.',
      'Coordinated multi-functional review of protocol amendments, adverse observations and corrective action plans; liaised with regulatory officers.',
    ],
  },
  {
    title: 'Research Associate',
    org: 'Ciba Speciality Chemicals',
    period: 'Feb 2003 — Feb 2004',
    tone: 'yellow',
    points: [
      'Contributed to speciality chemical R&D within an internationally regulated industrial research environment, maintaining GLP-compliant documentation and safety protocols.',
    ],
  },
  {
    title: 'Research Scholar & Teaching Assistant',
    org: 'IIT Bombay',
    meta: 'GATE-qualified · competitive MoE Teaching Assistantship',
    period: 'Jul 1998 — Aug 2003',
    tone: 'green',
    points: [
      'Conducted doctoral research in Synthetic Organic Chemistry — molecular identification, rational drug design and the synthesis of pharmaceutically relevant compounds — under institutional research-ethics, lab-safety and academic-integrity protocols.',
      'Taught undergraduate Chemistry to B.Tech students under a competitive, MoE-funded Teaching Assistantship secured through GATE.',
    ],
  },
];

export type Education = { degree: string; institution: string; note: string; tone: 'yellow' | 'green' | 'red' };
export const education: Education[] = [
  {
    degree: 'Ph.D. in Synthetic Organic Chemistry',
    institution: 'Indian Institute of Technology Bombay',
    note: 'Doctoral research in molecular identification, rational drug design and the synthesis of pharmaceutically relevant compounds — grounding responsible conduct of research, laboratory ethics, IP, data integrity and peer review. GATE-qualified; held a competitive MoE Teaching Assistantship.',
    tone: 'red',
  },
  {
    degree: 'Postgraduate Diploma in Project Management',
    institution: 'Emeritus School of Management / University of California',
    note: 'SOP design, stakeholder coordination, workflow management, compliance reporting and risk governance.',
    tone: 'green',
  },
  {
    degree: 'Industry Programme in Drug Design & Patenting',
    institution: 'Bioinformatics Institute of India, Noida',
    note: 'Intellectual property rights, patent ethics and regulatory frameworks in biomedical research.',
    tone: 'yellow',
  },
  {
    degree: 'Certification — AI Tools & Emerging Digital Technologies',
    institution: 'BE10X',
    note: 'Foundations of responsible AI, ethical deployment and digital governance in academic settings.',
    tone: 'green',
  },
];

export const training: string[] = [
  'Responsible AI in Research & Education — Faculty Development Programme, ISI & Presidency University',
  'Systematic Review Methodology & Research Integrity — Institute for Development of Science & Knowledge (IDSK)',
  'Bibliometrics, Scholarly Communication & Publication Ethics — LIBRARIAN Colloquium',
  'AI Competency Frameworks for Education — HKLA / The Education University of Hong Kong',
  'CII Education East Summits — National dialogues on research governance & industry–academia collaboration',
];

export type Engagement = { name: string; role: string; note: string; tone: 'yellow' | 'green' | 'red' };
export const engagements: Engagement[] = [
  {
    name: 'Iron Lady Warrior',
    role: 'Mentor & advocate',
    note: 'Championing women’s leadership in STEM — modelling the mentorship ethics and equitable-conduct norms that underpin research integrity.',
    tone: 'red',
  },
  {
    name: 'Mentor to Go',
    role: 'Mentor',
    note: 'Guiding economically disadvantaged youth toward research and industry careers, with an emphasis on responsible, honest scholarship.',
    tone: 'yellow',
  },
  {
    name: 'SK & Associates',
    role: 'Strategic alliance associate',
    note: 'Fostering student entrepreneurship and innovation while embedding an ethical, integrity-first research culture.',
    tone: 'green',
  },
  {
    name: 'Writebox',
    role: 'R&D mentorship lead',
    note: 'Academic-development leadership for an EdTech research community — advising on responsible-AI use and sound authorship practice.',
    tone: 'red',
  },
];

export const languages = ['English', 'Hindi', 'Bengali'];

export type Principle = { no: string; title: string; body: string; tone: 'yellow' | 'green' | 'red' };
export const principles: Principle[] = [
  {
    no: '01',
    title: 'Protocol before outcome',
    body: 'A result is only as trustworthy as the process that produced it. I build the documentation, review gates and audit trails that let findings stand up to scrutiny.',
    tone: 'green',
  },
  {
    no: '02',
    title: 'Governance people will actually use',
    body: 'The best SOP is the one researchers follow. I design policy and training that translate abstract standards into daily practice — clear, proportionate, humane.',
    tone: 'yellow',
  },
  {
    no: '03',
    title: 'Integrity is a culture, not a checklist',
    body: 'Compliance keeps you legal; culture keeps you honest. I work across committees, mentoring and advocacy to make ethical conduct the default, not the exception.',
    tone: 'red',
  },
];

export type Signal = { tone: 'yellow' | 'green' | 'red'; label: string; meaning: string };
export const signalSystem: Signal[] = [
  { tone: 'green', label: 'Green', meaning: 'Approved & compliant — evidence in place, process sound, cleared to proceed.' },
  { tone: 'yellow', label: 'Yellow', meaning: 'Attention — a gap to close, a document to complete, a decision that needs a human.' },
  { tone: 'red', label: 'Red', meaning: 'Flag — a breach, conflict or risk that stops the line until it is resolved.' },
];

export const services: string[] = [
  'Research-ethics committee (IRB / IBSC) setup & leadership',
  'SOP, policy & governance-framework design',
  'Responsible conduct of research training & curriculum',
  'Regulatory compliance & accreditation documentation',
  'Responsible-AI usage frameworks for research & education',
  'Publication ethics, IP & data-integrity advisory',
];

export type Publication = {
  venue: string;
  year: string;
  kind: string;
  focus: string;
  status: 'Presented' | 'Accepted' | 'In progress';
  tone: 'yellow' | 'green' | 'red';
};
export const publications: Publication[] = [
  {
    venue: 'ICKOLIS 2026',
    year: '2026',
    kind: 'Conference paper',
    focus: 'Knowledge organisation & information systems in academic libraries',
    status: 'Presented',
    tone: 'red',
  },
  {
    venue: 'COLLNET 2026',
    year: '2026',
    kind: 'Conference paper',
    focus: 'Scientometrics, informetrics & scholarly-collaboration networks',
    status: 'Presented',
    tone: 'green',
  },
  {
    venue: 'LISACON 2026',
    year: '2026',
    kind: 'Abstract',
    focus: 'Library & information science — research-data practice',
    status: 'Accepted',
    tone: 'yellow',
  },
  {
    venue: '“Data-Driven Research Ecosystems in Academic Libraries”',
    year: '2026',
    kind: 'Systematic review · co-authored (5 authors)',
    focus: 'Evidence synthesis on data-driven research ecosystems',
    status: 'In progress',
    tone: 'green',
  },
];

export type Honour = { title: string; year: string; org: string };
export const honours: Honour[] = [
  { title: 'Pathbreaker of the Year', year: '2021', org: 'For pedagogy, mentoring & academic leadership' },
  { title: 'GATE-qualified (Chemistry)', year: '1997', org: 'Graduate Aptitude Test in Engineering' },
  { title: 'MoE Teaching Assistantship', year: '1998–2003', org: 'Competitive doctoral fellowship, IIT Bombay' },
];
