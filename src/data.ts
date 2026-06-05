import { Treatment, GoogleReview, ExpertSpecialist, BeforeAfterResult, FaqItem } from './types';

export const CLINIC_INFO = {
  name: "A9 Skin & Hair Care",
  location: "CF4G+HVW, Manikonda, Hyderabad, Telangana",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5744883445836!2d78.38883!3d17.4101183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94025ad801c1%3A0xe54d6fae21f42ea8!2sManikonda%20Rd%2C%20Hyderabad%2C%20Telangana%20500089!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  whatsappNumber: "9492641321",
  phoneNumber: "9492641321",
  whatsappLink: "https://wa.me/919492641321?text=Hi%20A9%20Skin%20%26%20Hair%20Care,%20I%20would%20like%20to%20book%20an%20appointment.",
  timings: "Monday - Sunday: 10:00 AM - 8:30 PM",
  seoKeywords: [
    "Best Skin Clinic in Manikonda",
    "Best Hair Clinic in Hyderabad",
    "Laser Hair Removal Hyderabad",
    "HydraFacial Manikonda",
    "Hair Regrowth Treatment Hyderabad",
    "Dermatology Clinic Hyderabad"
  ]
};

export const TREATMENTS: Treatment[] = [
  {
    id: "laser-hair-removal",
    title: "Laser Hair Removal",
    category: "Laser",
    shortDescription: "Say goodbye to unwanted hair forever with USFDA-approved laser technology that ensures pain-free and lasting hair reduction.",
    description: "Laser hair removal at A9 Skin & Hair Care Clinic uses state-of-the-art triple wavelength technology which targets the hair follicles precisely without harming the surrounding skin. Suitable for all Indian skin types, our procedure is virtually painless, quick, and delivers long-lasting smooth skin.",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    recoveryTime: "Pre-celebration zero downtime. Minor redness subsides within 1-2 hours.",
    seoKeywords: ["Laser Hair Removal Hyderabad", "Pain free laser Manikonda", "Smooth skin Hyderabad"],
    benefits: [
      { title: "Longlasting Smoothness", description: "Destroys roots for permanent hair reduction with up to 90% reduction in hair growth." },
      { title: "Safe & USFDA-Approved", description: "State-of-the-art cooling technology prevents any thermal burns or skin damage." },
      { title: "Time & Cost-saving", description: "Eliminates the lifelong expenses of painful waxing, threadwork, and disposable shaving." },
      { title: "Prevents Ingrown Hairs", description: "Clears underlying ingrown hairs and matches your skin's natural tone perfectly." }
    ],
    procedure: [
      "Skin Assessment: Analysis of your skin type, hair thickness, and density.",
      "Preparation: Shaving the target zone gently and application of protective thermal gel.",
      "Laser Application: Calibrated laser beam sweeps targeting the deep follicles.",
      "Soothing Matrix: Gel removal, followed by applying SPF 50 calming cream."
    ],
    faqs: [
      {
        id: "lhr-f1",
        question: "How many sessions are recommended for laser hair removal?",
        answer: "A standard course ranges from 6 to 8 sessions spaced 4-6 weeks apart to match hair growth cycles."
      },
      {
        id: "lhr-f2",
        question: "Is the procedure painful?",
        answer: "No, patients report only a mild warm prickling sensation, shielded entirely by our advanced cooling sapphire tips."
      }
    ]
  },
  {
    id: "chemical-peels",
    title: "Chemical Peels",
    category: "Skin",
    shortDescription: "Revitalize your skin, eliminate dullness, and minimize active acne with carefully formulated clinical organic peels.",
    description: "Our chemical peel treatments involve applying gentle, medical-grade solutions to lift away dead epidermal cells and stimulate deeper cellular regeneration. Ideal for skin brightening, treating active acne, and fading stubborn dark spots.",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=700&q=80",
    recoveryTime: "2 - 5 days. Mild flaking may occur as old skin cells exfoliate.",
    seoKeywords: ["Chemical Peels Manikonda", "Salicylic Peel Hyderabad", "Skin Glow treatments"],
    benefits: [
      { title: "Deep Exfoliation", description: "Dissolves cellular glue to uncover glowing, new, unblemished skin underneath." },
      { title: "Acne Control", description: "Unclogs stubborn sebum plugs and minimizes enlarged pores to prevent breakouts." },
      { title: "Corrects Hyperpigmentation", description: "Controls melanin pathways to lighten dark patches, melasma, and old tan lines." },
      { title: "Refines Texture", description: "Smoothens fine expression lines and creates an even-toned base perfect for light makeup." }
    ],
    procedure: [
      "Cleansing: Double-action deep clean to remove dirt, sebum, and microscopic dust particles.",
      "Prep Matrix: Application of pH balancing solution to prepare the cells.",
      "Peel Application: Formulated clinical peel is applied evenly, monitored closely.",
      "Neutralization: Neutralizer applied to soothe the skin, followed by skin boosters."
    ],
    faqs: [
      {
        id: "peels-f1",
        question: "Will my skin peel off visibly block-by-block?",
        answer: "Only micro-flaking occurs. Modern peels are carefully selected to dissolve cells invisibly without aggressive raw shedding."
      },
      {
        id: "peels-f2",
        question: "How should I care for my skin post-peel?",
        answer: "Strictly avoid direct harsh sunlight, wear broad-spectrum physical sunscreen daily, and avoid chemical exfoliants for 5 days."
      }
    ]
  },
  {
    id: "hydrafacial",
    title: "HydraFacial",
    category: "Skin",
    shortDescription: "The ultimate 3-in-1 skin treatment combining deep cleansing, extraction, and intense hydration with custom serums.",
    description: "A9's Signature HydraFacial is the ultimate non-invasive multi-step revitalization system. It deep cleanses, exfoliates, painlessly extracts blackheads, and infuses active vitamins, peptides, and botanical antioxidants deep into the skin.",
    imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80",
    recoveryTime: "No downtime. Instant, luminous red-carpet glow.",
    seoKeywords: ["HydraFacial Manikonda", "Skin Glow treatment Hyderabad", "Hydrafacial Cost Hyderabad"],
    benefits: [
      { title: "Intense Moisture Infusion", description: "Bathes the skin with nourishing multi-molecular hyaluronic acid." },
      { title: "Instant Glow", description: "Noticeable, immediate clearance of blackheads and surface impurities in just 45 minutes." },
      { title: "Vortex Suction Extract", description: "Clears clogged pores painlessly with our state-of-the-art spiral hydro-peel tip." },
      { title: "Improves Elasticity", description: "Active peptide serums target fine lines, making skin firm and elastic." }
    ],
    procedure: [
      "Cleanse & Exfoliate: Hydra-peel exfoliation sweeps away old dead skin.",
      "Acid Peel: Gentle botanical peel loosens remaining deep pore debris.",
      "Vortex-Extraction: Vacuum suction draws out blackheads and impurities.",
      "Hydration Bath: Powerful delivery of vitamin and hyaluronic acid serums."
    ],
    faqs: [
      {
        id: "hf-f1",
        question: "Is HydraFacial suitable for sensitive skin?",
        answer: "Yes, our HydraFacial is highly customizable. We adjust the suction strength and serum mixtures to suit sensitive skin types."
      },
      {
        id: "hf-f2",
        question: "How long does a HydraFacial glow last?",
        answer: "The immediate glow lasts for 1 to 2 weeks. Monthly maintenance visits yield long-accumulated improvements in skin health."
      }
    ]
  },
  {
    id: "hifu",
    title: "HIFU Treatment",
    category: "Advanced",
    shortDescription: "Non-surgical face lift and skin tightening using High-Intensity Focused Ultrasound for natural, youthful contours.",
    description: "High-Intensity Focused Ultrasound (HIFU) represents the newest non-invasive advancement in skin tightening. It targets deep structural layers—including the SMAS layer—stimulating collagen production directly to lift sagging jowls, tighten neck skin, and diminish wrinkles.",
    imageUrl: "https://images.unsplash.com/photo-1614859324967-bdf461fcf769?auto=format&fit=crop&w=700&q=80",
    recoveryTime: "Zero downtime. Resume standard daily activities immediately.",
    seoKeywords: ["HIFU Treatment Hyderabad", "Anti ageing Manikonda", "Skin tightening Hyderabad"],
    benefits: [
      { title: "Non-Invasive Lift", description: "Tightens the neck, jawline, and brow without incisions, scars, or sutures." },
      { title: "Natural Collagen Boost", description: "Spurs cellular remodeling that continues to improve skin over 3 to 6 months." },
      { title: "Long-Lasting Results", description: "A single clinical session can yield refreshed skin lasting for 1 to 1.5 years." },
      { title: "Highly Targeted", description: "Precisely directs sound energy to exact depths of 1.5mm, 3.0mm, and 4.5mm." }
    ],
    procedure: [
      "Mapping: Section marking on target zones (jaw, chin, neck) to avoid delicate nerves.",
      "Gel Application: Standard ultrasound medium is applied to direct the beams.",
      "Energy Delivery: Calibrated HIFU device pulses are emitted along target zones.",
      "Soothe: Face is treated with nourishing recovery vitamins."
    ],
    faqs: [
      {
        id: "hifu-f1",
        question: "When are the full results of HIFU visible?",
        answer: "While minor tightening is felt instantly, the final optimal lifting results develop over 2 to 3 months as new collagen fibers mature."
      },
      {
        id: "hifu-f2",
        question: "Is HIFU safe?",
        answer: "Yes, HIFU is an established, safe, and FDA-cleared energy source used across global aesthetic dermatology."
      }
    ]
  },
  {
    id: "hair-regrowth",
    title: "Hair Regrowth Treatments",
    category: "Hair",
    shortDescription: "Advanced non-surgical therapies that stimulate hair follicles, stop thinning, and kickstart thick regrowth.",
    description: "A9 Skin & Hair Care provides cutting-edge hair restoration systems. By using concentrated growth factors and localized vitamin micro-injectors, we actively reverse hair thinning, nourish dormant hair roots, and promote significant new hair density for men and women.",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=700&q=80",
    recoveryTime: "Instant. Hair is wash-safe after 12 hours.",
    seoKeywords: ["Hair Regrowth Treatment Hyderabad", "Hair fall clinic Manikonda", "PRP Hair Hyderabad"],
    benefits: [
      { title: "Stops Hair Loss", description: "Deactivates DHT responses and drastically slows active hair fall." },
      { title: "Thickens Existing Strands", description: "Nourishes thin, miniaturized hair shafts back into healthy, dense strands." },
      { title: "Wakes Dormant Follicles", description: "Stimulates quiet roots in thinning zones, promoting active regrowth." },
      { title: "Rich Nutrient Matrix", description: "Optimizes microcirculation across the scalp using vitamins and cell-boosters." }
    ],
    procedure: [
      "Scalp Inspection: Tricho-Analysis to identify patterns of alopecia and hair health status.",
      "Scalp Prep: Disinfecting and preparing thinning areas using soothing techniques.",
      "Nutrient Delivery: Direct pinpoint infusion of growth-factor components into target layers.",
      "Laser Stimulation: Calibrated cold laser therapy to energize cells."
    ],
    faqs: [
      {
        id: "hair-f1",
        question: "How long until I see new hair growth?",
        answer: "Hair fall reduces significantly in 3-4 weeks. Visible new hair growth and improved thickness are noticeable after 3-4 months."
      },
      {
        id: "hair-f2",
        question: "Is the scalp treatment suitable for ladies?",
        answer: "Yes, it is highly successful for treating female pattern thinning, post-pregnancy hair shed, and general stress hair loss."
      }
    ]
  },
  {
    id: "pigmentation-treatment",
    title: "Pigmentation Treatment",
    category: "Skin",
    shortDescription: "Erase stubborn melasma, dark spots, acne scars, and sun damage with expert depigmentation protocols.",
    description: "Our advanced pigmentation treatment targets excess melanin deep within the skin. Utilizing advanced Q-Switched lasers, antioxidant boosters, and targeted cocktails, we fade stubborn blemishes and evening out your complexion.",
    imageUrl: "https://images.unsplash.com/photo-1629194157041-72005570be0e?auto=format&fit=crop&w=700&q=80",
    recoveryTime: "Minimal. Redness resolves in 1-3 hours.",
    seoKeywords: ["Pigmentation Treatment Hyderabad", "Melasma care Manikonda", "Laser skin toning"],
    benefits: [
      { title: "Fades Stubborn Spots", description: "Directly breaks down concentrated melasma deposits and sun-spots." },
      { title: "Even Tone", description: "Homogenous skin glow with uniform melanin distribution across the face." },
      { title: "Brightens Skin", description: "Removes dull, sun-damaged outer layers to reveal a natural glow." },
      { title: "Laser Precision", description: "Targets pigment cells specifically, preserving healthy surrounding tissue." }
    ],
    procedure: [
      "Consultation: Assessing pigment depth using clinical UV skin scopes.",
      "Prep Toning: Mild cleansing and balancing to prepare dark spot areas.",
      "Laser/Serum Treatment: Administering pigment-shattering lasers or advanced peel blends.",
      "Post-Care Shield: Infusion of Vitamin C boosters and soothing mineral sunscreen."
    ],
    faqs: [
      {
        id: "pig-f1",
        question: "Will the pigmentation return after finishing treatment?",
        answer: "By keeping up with proper sun protection and the recommended home-care routine, results remain stable for years."
      },
      {
        id: "pig-f2",
        question: "How many sessions are typically needed?",
        answer: "Most cases show excellent clearance within 4 to 6 sessions, depending on the depth of the pigment."
      }
    ]
  },
  {
    id: "anti-aging",
    title: "Anti-Aging Solutions",
    category: "Advanced",
    shortDescription: "Turn back the clock with custom face-sculpting, collagen induction, and fine-line reduction therapies.",
    description: "Revitalize mature skin with A9's premium, customized anti-aging solutions. Combining skin-tightening micro-needling, growth serums, and volume-boosting technology, we soften wrinkles, plump volume, and redefine facial contours beautifully.",
    imageUrl: "https://images.unsplash.com/photo-1552693673-1bf9582f8943?auto=format&fit=crop&w=700&q=80",
    recoveryTime: "1 - 2 days depending on the intensity of the custom session.",
    seoKeywords: ["Anti ageing Hyderabad", "Wrinkle removal Manikonda", "Collagen induction"],
    benefits: [
      { title: "Plumps Deep Wrinkles", description: "Recharges skin volume and softens prominent expression lines." },
      { title: "Restores Elasticity", description: "Rebuilds structural elastin to return snap and firmness to sagging cheek zones." },
      { title: "Smoothens Crow's Feet", description: "Targets the delicate eye contour area safely to brighten and smooth expression folds." },
      { title: "Refines Pore Structure", description: "Tightens loose skin, which naturally reduces the appearance of large pores." }
    ],
    procedure: [
      "Facial Mapping: Detailed modeling of skin volume and laxity vectors.",
      "Micro-Dermal Stimulus: Direct skin replenishment using advanced medical instruments.",
      "Serum Infusion: High potency hyaluronic acid and growth peptide boosters.",
      "Thermal Bio-Light: Energizing LED light therapy to speed up cellular cell renewal."
    ],
    faqs: [
      {
        id: "age-f1",
        question: "At what age should I start anti-aging treatments?",
        answer: "Prevention is key. Early preventative treatments starting in your late 20s or 30s preserve collagen reserves best."
      },
      {
        id: "age-f2",
        question: "Are results natural looking?",
        answer: "Absolutely. Our methods focus on building your body's own collagen for a naturally lifted look, avoiding over-filled appearances."
      }
    ]
  },
  {
    id: "mole-wart-removal",
    title: "Mole, Wart & Tag Removal",
    category: "Skin",
    shortDescription: "Clean, hygienic, and scarless removal of moles, skin tags, and warts using advanced medical radiofrequency.",
    description: "Get rid of unwanted facial or body growths quickly under highly hygienic medical conditions. Using advanced radiofrequency (RF) and electrocautery, we vaporize skin tags, warts, and moles precisely down to the root, preventing future recurrence.",
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=700&q=80",
    recoveryTime: "3 - 7 days for the micro-scab to clear, leaving flawless skin.",
    seoKeywords: ["Mole Removal Manikonda", "Wart removal Hyderabad", "Skin tag removal Hyderabad"],
    benefits: [
      { title: "Scarless Healing", description: "Precision technology vaporizes cells seamlessly, minimizing risks of visual scarring." },
      { title: "Quick & Single Sessions", description: "Most moles, skin tags, and warts vanish in a single 15-minute quick procedure." },
      { title: "Virtually Painless", description: "Administered comfortably using clean local numbing gel or small micro-injections." },
      { title: "Hygienic and Safe", description: "Conducted under medical-grade sterile parameters to avoid standard salon infections." }
    ],
    procedure: [
      "Clinical Review: Examination of the growth to ensure safe removal.",
      "Anesthesia: Comfort application of local numbing gel to sensitize the area completely.",
      "RF Vaporization: Rapid micro-pulses erase the tissue build-up layer-by-layer.",
      "Anti-septic Shield: Application of medical-grade antibacterial healing film."
    ],
    faqs: [
      {
        id: "mole-f1",
        question: "Does wart removal prevent them from returning?",
        answer: "Removing the infected tissue eradicates the active local virus. However, building healthy systemic immunity prevents new warts elsewhere."
      },
      {
        id: "mole-f2",
        question: "Can I shower and swim immediately after?",
        answer: "Showering is safe, but we recommend keeping the treated spot dry and putting on anti-bacterial gel for 3-5 days."
      }
    ]
  }
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    id: "gen-1",
    question: "Do you offer free consultations?",
    answer: "Yes, we offer free professional consultations on WhatsApp, and comprehensive in-clinic expert skin diagnostic analyses for booking clients."
  },
  {
    id: "gen-2",
    question: "Who will perform my procedures?",
    answer: "All laser, dermal, and hair treatments are supervised and carried out by highly trained medical skin specialists under professional sterile standards."
  },
  {
    id: "gen-3",
    question: "How do I secure an appointment today?",
    answer: "You can book using our interactive online booking system, or click 'Chat on WhatsApp' to directly coordinate with our slot manager at 94926 41321."
  },
  {
    id: "gen-4",
    question: "Is there client parking at the Manikonda clinic?",
    answer: "Yes, we have dedicated four-wheel and two-wheel parking slots right in front of our main clinic entrance to ensure a hassle-free visit."
  },
  {
    id: "gen-5",
    question: "Are your laser machines safe for dark skin tones?",
    answer: "Absolutely. Our advanced laser systems feature customizable wavelengths specifically designed to treat Indian skin types safely and effectively."
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Shreya Reddy",
    rating: 5,
    time: "2 days ago",
    text: "Excellent experience at A9 Skin & Hair clinic. I took the HydraFacial treatment and my skin is glowing like never before. The staff is polite, and the clinic is clean and luxurious. Strongly recommend this place for anyone around Manikonda!",
    treatmentTag: "HydraFacial",
    authorInitials: "SR"
  },
  {
    id: "rev-2",
    author: "Kiran Kumar",
    rating: 5,
    time: "1 week ago",
    text: "I was suffering from severe hair fall. Dr. analyzed my scalp with a digital scope and suggested a 4-month regrowth treatment. I can see fine new baby hair growing on my crown in just 2 months. Truly the best hair clinic in Hyderabad.",
    treatmentTag: "Hair Regrowth Treatments",
    authorInitials: "KK"
  },
  {
    id: "rev-3",
    author: "Pooja Sharma",
    rating: 5,
    time: "3 weeks ago",
    text: "Got my Laser Hair Removal done here. It was completely painless! The cooling tip is amazing, and I am already seeing 80% reduction in hair growth. Very pocket-friendly Packages. Thanks A9 team!",
    treatmentTag: "Laser Hair Removal",
    authorInitials: "PS"
  },
  {
    id: "rev-4",
    author: "Anitha Rao",
    rating: 5,
    time: "1 month ago",
    text: "Highly satisfied with my melasma/pigmentation laser sessions. The dark patches under my eyes have faded significantly. Expert skin doctors who listen with patience. Best dermatology clinic in Manikonda.",
    treatmentTag: "Pigmentation Treatment",
    authorInitials: "AR"
  }
];

export const EXPERT_SPECIALISTS: ExpertSpecialist[] = [
  {
    name: "Dr. Sandeep Kumar, MBBS, MD (Dermatology)",
    role: "Chief Consultant Dermatologist & Trichologist",
    education: "MBBS — Osmania Medical College, MD — Hyderabad",
    experience: "12+ Years of Clinical Expertise",
    specialties: ["Advanced Aesthetic Laser Procedures", "Non-Surgical Hair Regrowth Protocols", "Scar Reconstruction & Chemical Exfoliants"],
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. Priya Ananya, MBBS, DDVL",
    role: "Aesthetic Medicine Specialist",
    education: "DDVL — Sri Ramachandra Medical University",
    experience: "9+ Years in Cosmetology & Anti-Aging",
    specialties: ["Anti-Aging therapies", "HydraFacial Vortex Infusions", "HIFU Structural Facial Resculpting"],
    imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=500&q=80"
  }
];

export const BEFORE_AFTER_RESULTS: BeforeAfterResult[] = [
  {
    id: "ba-1",
    title: "Enlarged Pores & Active Acne Clearing",
    treatment: "HydraFacial & Salicylic Peels",
    beforeImg: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=480&q=80", // close-up face pattern skin
    afterImg: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=480&q=80", // clean clear skin
    duration: "4 Sessions (8 Weeks)",
    clinicalNote: "Sebum secretion normalized, dark spots reduced significantly, leaving smooth skin."
  },
  {
    id: "ba-2",
    title: "Hair Thinning and Balding Spot Rejuvenation",
    treatment: "Advanced Hair Regrowth Cell Therapy",
    beforeImg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=480&q=80", // scalp / hair pattern
    afterImg: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=480&q=80", // gorgeous dense hair crown
    duration: "6 Sessions (12 Weeks)",
    clinicalNote: "Follicle count increased, crown bald spots safely covered with dense new strands."
  },
  {
    id: "ba-3",
    title: "Deep Pigmentation & melasma Clearance",
    treatment: "Q-Switch Laser Toning & Depigmentation Peel",
    beforeImg: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&w=480&q=80", // dark uneven facial skin tone close up
    afterImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=480&q=80", // clean luminous bright photo-toned skincare face
    duration: "5 Sessions (10 Weeks)",
    clinicalNote: "Stubborn sunspots and structural dark melasma patches lightened by over 85%."
  }
];

export const ADVANCED_TECHNOLOGIES = [
  {
    name: "Triple-Wavelength Laser System",
    description: "Combined 755nm + 808nm + 1064nm USFDA-cleared wavelengths for premium, custom safety and efficiency on all Indian skin hair types.",
    benefit: "Virtually painless hair removal with dual cooling tips."
  },
  {
    name: "Original Vortex Hydrafacial MD Tower",
    description: "Premium medical-grade suction device with customized spiral tip technology to deliver clean, active dermal infusions.",
    benefit: "Dramatically clears blackheads and stimulates cellular water-retention."
  },
  {
    name: "Advanced HIFU Ultra-Tightening System",
    description: "High Intensity Focused Sound waves reaching the profound deep muscular aponeurotic system (SMAS) layer without surgery.",
    benefit: "Natural instant jaw sculpting and sag reduction."
  },
  {
    name: "Advanced Q-Switched Nd:YAG Laser",
    description: "Nano-pulse pigment shattering technology targets localized excess melanin and removes dark spots.",
    benefit: "Clears deep freckles and promotes overall skin evening."
  }
];
