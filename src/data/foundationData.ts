import { WelfarePillar, ActivityStory, StrategicGoal, DonationOption } from '../types';

export const FOUNDATION_META = {
  name: "Al-Ala Education Foundation",
  parentSchool: "Al-Ala International Islamic School",
  establishedYear: 1999,
  yearsOfExcellence: 27,
  academicYear: "2025–2026",
  chairperson: "Ma'am Tayyiba Imtiaz",
  tagline: "27 Years of Serving Communities Through Education & Welfare",
  location: "Lahore, Pakistan",
  contactPhone: "+92 42 3588 1999",
  whatsappNumber: "+92 300 845 1999",
  contactEmail: "info@alala.edu.pk",
  address: "Al-Ala Education Foundation Campus, 1.5 KM Off Multan Road, Chung, Lahore, Pakistan",
};

export const CHAIRPERSON_MESSAGE = {
  quote: "Alhamdulillah, during the academic year 2025–2026, Al-Ala Education Foundation continued its commitment to serving society through education, welfare, community development, and humanitarian initiatives. Guided by Islamic values and a spirit of service, the Foundation worked across multiple sectors to support students, families, women, and communities while promoting education, health, and social responsibility.",
  author: "Ma'am Tayyiba Imtiaz",
  role: "Chairperson, Al-Ala Education Foundation",
  image: "/assets/img_-036.png"
};

export const WELFARE_PILLARS: WelfarePillar[] = [
  {
    id: "social-welfare",
    number: "01",
    title: "Social Welfare",
    shortDescription: "Food packs, cancer patient care, and urban tree drives.",
    fullDescription: "The Foundation actively participated in various welfare initiatives aimed at supporting deserving individuals and families across Lahore and surrounding regions.",
    imageUrl: "/assets/img_-009.png",
    impactMetric: "10+ Welfare Collaborations",
    activities: [
      "Food Distribution Drive across underprivileged neighborhoods",
      "Regular Charity Support for Underprivileged Cancer Patients through Shaukat Khanum Cancer Hospital",
      "Community kitchen operating in Ramadan (Iftar & Suhoor meals)",
      "Visiting Scholars' Circles promoting moral and spiritual reflection",
      "Save the Earth Campaign raises environmental responsibility",
      "Tree Plantation Campaign planting native shade trees in urban areas",
      "Online Tarbiyyah Program for Underprivileged Children",
      "Ration Support for Cancer patients through Hameed Maggo Trust",
      "Charity Support to Kashana Social Welfare",
      "Charity Support and Ration Assistance to Edhi Homes"
    ]
  },
  {
    id: "child-welfare",
    number: "02",
    title: "Child Welfare",
    shortDescription: "100% free tuition, orphan care, and nutrition for children.",
    fullDescription: "Al-Ala Education Foundation remained dedicated to the moral, spiritual, and educational development of children across all strata of society.",
    imageUrl: "/assets/img_-014.png",
    impactMetric: "100% Free Tuition for Orphans",
    highlightTag: "Core Focus",
    activities: [
      "Free Education Program – Every Child Deserves to Learn",
      "Scholarships and Fee Concessions for orphans, deserving students, and teachers' children",
      "Distribution of Free Books, Stationery, and Educational Supplies",
      "After-School Support Classes and Academic Assistance",
      "Digital Learning Access and Reading Clubs",
      "Nutritional Meal Program and Child Health Camps – Healthy Child, Bright Future",
      "Orphan Care and Child Protection Awareness Initiatives",
      "Creative Arts, Storytelling Sessions, Sports, and Play Activities",
      "Life Skills Workshops – Skills for Life, Not Just School",
      "Mothers' Quran Classes to strengthen family-based Islamic learning",
      "Free Tarbiyah Classes for support staff and their children",
      "Clothing Collection and Distribution Drive for Chaman Institute of Special Children"
    ]
  },
  {
    id: "educational-welfare",
    number: "03",
    title: "Educational Welfare",
    shortDescription: "STEM learning, teacher training, and digital classrooms.",
    fullDescription: "Education remained the cornerstone of the Foundation's mission, elevating school standards and expanding access to quality Islamic and modern education.",
    imageUrl: "/assets/img_-018.png",
    impactMetric: "27 Years of Excellence",
    highlightTag: "Flagship Pillar",
    activities: [
      "Scholarship Program – Talent Deserves Opportunity",
      "Teacher Training Initiative – Better Teachers, Brighter Futures",
      "School Improvement Project enhancing classroom infrastructure",
      "Digital Learning Access Program providing computers and internet",
      "Adult Literacy Program for illiterate community members",
      "Library Development Drive adding thousands of curated books",
      "After-School Tutoring Program – Learning Beyond Classroom Walls",
      "Girl Child Education Program – Educate a Girl, Empower a Nation",
      "STEM Learning Workshops – Innovate, Create, Elevate",
      "Career Counseling Sessions – Right Direction, Right Future",
      "Inclusive Education Support – Learning Without Barriers",
      "Student Mentorship Program – Guidance Shapes Greatness"
    ]
  },
  {
    id: "women-welfare",
    number: "04",
    title: "Women Welfare",
    shortDescription: "Vocational skills, adult literacy, and women's Quran circles.",
    fullDescription: "Empowering women through education, Islamic knowledge, and personal development remained a core focus of our community outreach.",
    imageUrl: "/assets/img_-022.png",
    impactMetric: "Free Skill Development",
    activities: [
      "Mothers' Workshops on positive parenting and child psychology",
      "Weekly Quran Classes offering Tajweed and Tafseer",
      "Dawrah-e-Quran Sessions during Ramadan and sacred months",
      "Women's Transitional Welfare Support for widows and single mothers",
      "Free Skill Development Courses for community promoted through social media platforms"
    ]
  },
  {
    id: "elderly-disabled-welfare",
    number: "05",
    title: "Elderly & Disabled Welfare",
    shortDescription: "Mobility aids, elder outreach, and special needs inclusion.",
    fullDescription: "The Foundation extended support to vulnerable members of society through direct assistance and close collaboration with specialized welfare organizations.",
    imageUrl: "/assets/img_-024.png",
    impactMetric: "Care Without Barriers",
    activities: [
      "Elderly Care and Outreach Program visiting seniors in need",
      "Elder Friendship Circles and Quran Reflection & Story-Sharing Sessions",
      "Disability Support and Inclusive Care Services – Care Without Barriers",
      "Mobility Assistance and Accessibility Support for individuals with special needs",
      "Education Ability Beyond Disability Program encouraging equal learning opportunities",
      "Skill Development, Vocational Training, and Life Skills Workshops for persons with disabilities",
      "Mentorship and Empowerment Programs focused on confidence-building, independence, and self-reliance",
      "Free Consultancy and Guidance Services for members of the Al-Ala community"
    ]
  },
  {
    id: "health-welfare",
    number: "06",
    title: "Health Welfare",
    shortDescription: "Free medical screenings, dental camps, and medicine aid.",
    fullDescription: "Several awareness and support initiatives were conducted to promote physical well-being, preventative health, and healthy lifestyles.",
    imageUrl: "/assets/img_-028.png",
    impactMetric: "Free Medical & Dental Camps",
    activities: [
      "Medical Support for Poor and Needy covering essential treatments",
      "Health Awareness Programs in local communities",
      "Dental Health Awareness & On-Site Screening Camps",
      "Women's Health Education and Hygiene Awareness",
      "Student Health Awareness Sessions on nutrition and hygiene",
      "Healthy Eating and Physical Fitness Campaigns"
    ]
  },
  {
    id: "economic-welfare",
    number: "07",
    title: "Economic Welfare",
    shortDescription: "Interest-free Qard-e-Hasana loans and wedding assistance.",
    fullDescription: "The Foundation supported struggling families through dignified economic assistance programs to foster financial stability.",
    imageUrl: "/assets/img_-029.png",
    impactMetric: "Interest-Free Loan Support",
    activities: [
      "Wedding Support Assistance for deserving brides",
      "Interest-Free Loan Support (Qard-e-Hasana) for micro-business or emergencies",
      "Distribution of Clothing for families in need",
      "Community Cloth Drive Campaigns collecting winter items"
    ]
  },
  {
    id: "community-relief",
    number: "08",
    title: "Community Outreach & Humanitarian Relief",
    shortDescription: "Emergency flood response, disaster relief, and Gaza drives.",
    fullDescription: "Al-Ala Education Foundation actively promoted community engagement and humanitarian responsibility through fundraising initiatives and emergency relief efforts.",
    imageUrl: "/assets/img_-032.png",
    impactMetric: "Emergency Emergency Response",
    highlightTag: "Global & Local Relief",
    activities: [
      "Community Bake Sale for charitable causes and fundraising",
      "Donations and support for Gaza Relief Camps",
      "Flood Relief Campaigns supplying emergency food and tents",
      "Earthquake Relief Assistance during natural disasters",
      "Charity drives and welfare support for underprivileged communities"
    ]
  }
];

export const RECENT_STORIES: ActivityStory[] = [
  {
    id: "free-education-drive",
    title: "Free Education Program – Every Child Deserves to Learn",
    category: "Child & Educational Welfare",
    pillarId: "child-welfare",
    date: "Academic Year 2025–2026",
    imageUrl: "/assets/img_-013.png",
    summary: "100% free schooling, uniforms, and textbooks for orphan scholars.",
    fullDetails: "At Al-Ala, we believe economic background should never restrict a child's academic and moral development. This past year, over hundreds of students received full scholarships, free textbook sets, and daily nutritious snacks through our free education initiative."
  },
  {
    id: "medical-dental-camp",
    title: "On-Site Dental Check-Up & Community Health Camp",
    category: "Health Welfare",
    pillarId: "health-welfare",
    date: "Annual Report Highlight",
    imageUrl: "/assets/img_-027.png",
    summary: "Free professional oral screenings, preventative kits, and student checkups.",
    fullDetails: "Volunteer doctors and dental surgeons conducted complete oral hygiene screenings for young students, providing preventative care kits, toothbrushes, and specialized referrals for treatments funded directly by the Foundation."
  },
  {
    id: "gaza-flood-relief",
    title: "Community Bake Sale & Emergency Humanitarian Relief",
    category: "Community Relief",
    pillarId: "community-relief",
    date: "Relief Drive 2025–2026",
    imageUrl: "/assets/img_-033.png",
    summary: "Student-led bake sales mobilizing aid for Gaza and flood zones.",
    fullDetails: "In a powerful demonstration of youth civic responsibility, Al-Ala school students prepared homemade treats and crafts, raising substantial relief funds distributed through verified humanitarian partners for Gaza and flood-affected districts in Pakistan."
  },
  {
    id: "ramadan-kitchen-cancer-support",
    title: "Ramadan Community Kitchen & Shaukat Khanum Cancer Aid",
    category: "Social Welfare",
    pillarId: "social-welfare",
    date: "Ramadan & Year-Round",
    imageUrl: "/assets/img_-011.png",
    summary: "Daily hot Ramadan meals and cancer chemotherapy funding.",
    fullDetails: "Through regular charity allocations, the Foundation provided financial assistance to low-income cancer patients undergoing chemotherapy, while serving thousands of warm Iftar meals daily during Ramadan."
  },
  {
    id: "special-children-chaman",
    title: "Clothing Drive for Chaman Institute of Special Children",
    category: "Child & Disabled Welfare",
    pillarId: "elderly-disabled-welfare",
    date: "Winter Outreach 2025–26",
    imageUrl: "/assets/img_-025.png",
    summary: "Tailored winter clothing and mobility aids for special children.",
    fullDetails: "Collaborating with Chaman Institute of Special Children, our student volunteers delivered custom winter clothing sets, mobility aids, and organized an inclusive day of storytelling and creative arts."
  },
  {
    id: "girl-child-stem",
    title: "Girl Child Education & STEM Innovation Workshops",
    category: "Educational Welfare",
    pillarId: "educational-welfare",
    date: "Academic Year 2025–2026",
    imageUrl: "/assets/img_-019.png",
    summary: "Hands-on coding, robotics labs, and STEM mentorship for girls.",
    fullDetails: "Our dedicated STEM workshops provided young female students with hands-on coding modules, robotics kits, and career mentorship sessions from leading female Muslim educators and professionals."
  }
];

export const STRATEGIC_GOALS_2026_2027: StrategicGoal[] = [
  {
    id: 1,
    title: "Modern Digital Learning",
    description: "Integrating smart digital learning with Islamic ethics.",
    targetCategory: "Education"
  },
  {
    id: 2,
    title: "Expanded Scholarships",
    description: "100% free tuition for orphans and single-parent households.",
    targetCategory: "Inclusion"
  },
  {
    id: 3,
    title: "Food Security Outreach",
    description: "Expanding monthly food banks and family ration drives.",
    targetCategory: "Welfare"
  },
  {
    id: 4,
    title: "Women's Vocational Skills",
    description: "Free digital skills, sewing, and health workshops.",
    targetCategory: "Empowerment"
  },
  {
    id: 5,
    title: "Community Health Camps",
    description: "Bi-monthly dental, eye, and general medical checkups.",
    targetCategory: "Healthcare"
  },
  {
    id: 6,
    title: "Strategic Partnerships",
    description: "Collaborations with leading hospitals and welfare trusts.",
    targetCategory: "Growth"
  },
  {
    id: 7,
    title: "Youth Social Leadership",
    description: "Student-led welfare clubs, tree drives, and civic care.",
    targetCategory: "Youth"
  },
  {
    id: 8,
    title: "Emergency Disaster Relief",
    description: "Rapid-deployment fund for flood, crisis, and Gaza aid.",
    targetCategory: "Relief"
  },
  {
    id: 9,
    title: "Audited Governance",
    description: "Transparent auditing and long-term endowment growth.",
    targetCategory: "Governance"
  }
];

export const DONATION_CAUSES: DonationOption[] = [
  {
    id: "orphan-education",
    title: "Sponsor an Orphan Scholar's Education",
    description: "Covers full tuition, school uniforms, textbooks, digital learning access, and nutritional school lunches for 1 academic year.",
    recommendedAmountPKR: 15000,
    category: "education",
    imageUrl: "/assets/img_-015.png"
  },
  {
    id: "cancer-patient-ration",
    title: "Cancer Patient Ration & Treatment Support",
    description: "Provides monthly food packs and financial medical aid to underprivileged cancer patients via Shaukat Khanum & Hameed Maggo Trust.",
    recommendedAmountPKR: 12000,
    category: "health",
    imageUrl: "/assets/img_-010.png"
  },
  {
    id: "ramadan-food-pack",
    title: "Ramadan Food Drive & Community Kitchen",
    description: "Supplies a comprehensive family ration bag (flour, rice, oil, lentils, tea, sugar) lasting a deserving family for a full month.",
    recommendedAmountPKR: 8500,
    category: "food",
    imageUrl: "/assets/img_-012.png"
  },
  {
    id: "gaza-disaster-relief",
    title: "Emergency Humanitarian & Gaza Relief Fund",
    description: "Direct aid for emergency medical supplies, winter blankets, tents, and food packages in disaster and crisis zones.",
    recommendedAmountPKR: 10000,
    category: "relief",
    imageUrl: "/assets/img_-034.png"
  },
  {
    id: "women-skill-training",
    title: "Women's Vocational & Skill Development Sponsorship",
    description: "Funds sewing machines, digital literacy devices, and course material for low-income women seeking economic self-sufficiency.",
    recommendedAmountPKR: 20000,
    category: "general",
    imageUrl: "/assets/img_-023.png"
  }
];

export const BANK_DETAILS = {
  bankName: "Meezan Bank Limited",
  accountTitle: "Al-Ala Education Foundation",
  accountNumber: "0102-0103982711",
  iban: "PK36MEZN0001020103982711",
  branch: "Chung Branch, Lahore, Pakistan",
  swiftCode: "MEZNPKKA",
  easypaisa: "+92 300 845 1999",
  jazzcash: "+92 300 845 1999"
};
