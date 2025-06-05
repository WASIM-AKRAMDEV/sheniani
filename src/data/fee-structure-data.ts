export const plans = [
    {
      id: "marketplace",
      name: "Marketplace",
      description: "For starting out",
      price: "5% Service fee",
      buttonText: "Sign up for free",
      features: [
        "Upwork's global freelance marketplace",
        "Access to AI-powered features",
        "Collaboration and project tracking tools",
        "Standard reporting",
        "Flexible payment options",
      ],
    },
    {
      id: "business-plus",
      name: "Business Plus",
      description: "For growing",
      price: "10% Service fee",
      buttonText: "Sign up for free",
      features: [
        "Access to pre-screened top 1% of talent",
        "Expertly matched talent shortlisted within 2 business days",
        "On-demand coaching for hiring and managing contracts",
        "Premium customer support 24/7",
        "Monthly invoicing with Net 30 terms¹",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For scaling",
      price: "Contact Sales for pricing estimates",
      buttonText: "Contact Sales",
      features: [
        "Dedicated account and program management",
        "SSO and integrations including VMS, ATS, and HRIS",
        "Hiring pre-approvals and talent onboarding workflows",
        "Customized reporting and invoicing",
        "Compliance services subscription",
      ],
    },
  ]
  
  // All features flattened with category headers
  export const allFeatures = [
    // Talent category
    { type: "category", name: "Talent" },
    {
      type: "feature",
      name: "Access to Upwork's global work marketplace",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Talent ID verified",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Verified freelancer work history and reviews on Upwork",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Top Rated and Rising Talent search filter",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Expert-Vetted talent",
      marketplace: false,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Diversity-certified talent",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
  
    // Support category
    { type: "category", name: "Support and on-demand services" },
    {
      type: "feature",
      name: "Customer support",
      marketplace: true,
      businessPlus: "Premium 24/7",
      enterprise: "Premium 24/7",
    },
    {
      type: "feature",
      name: "Talent shortlisting services",
      marketplace: false,
      businessPlus: "Limited",
      enterprise: true,
    },
    {
      type: "feature",
      name: "On-demand coaching for hiring and managing contracts",
      marketplace: false,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Program management",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Dedicated account manager",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
  
    // Collaboration category
    { type: "category", name: "Collaboration and project tracking" },
    {
      type: "feature",
      name: "Chat, share files, and make voice and video calls",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Teams and member permissions settings",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Timesheets, time tracker, work diary",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Standard reporting",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Activity codes",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Advanced reporting",
      marketplace: false,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Custom reporting",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
  
    // AI-powered features
    { type: "category", name: "AI-powered features" },
    {
      type: "feature",
      name: "Job post generator (Beta)",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Best Match insights (Beta by waitlist)",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
  
    // APIs and integrations
    { type: "category", name: "APIs and integrations" },
    {
      type: "feature",
      name: "API access",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Single sign on (SAML SSO)",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Vendor Management Systems",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Applicant Tracking Systems",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Spend Management Systems",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Human Resources Information Systems",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
  
    // Governance
    { type: "category", name: "Governance" },
    {
      type: "feature",
      name: "Payment protection and disputes",
      marketplace: true,
      businessPlus: true,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Purchase orders",
      marketplace: "1 per team",
      businessPlus: "1 per team",
      enterprise: true,
    },
    {
      type: "feature",
      name: "Net 30 payment terms",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Custom talent onboarding plans",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Hiring pre-approvals workflow",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
    {
      type: "feature",
      name: "Compliance Worker Protection Program (WPP)",
      marketplace: false,
      businessPlus: false,
      enterprise: "Subscription required",
    },
    {
      type: "feature",
      name: "Automated payroll services",
      marketplace: false,
      businessPlus: false,
      enterprise: true,
    },
  
    // Other fees
    { type: "category", name: "Other fees" },
    {
      type: "feature",
      name: "Contract initiation fees",
      marketplace: true,
      businessPlus: true,
      enterprise: false,
    },
  ]
  
  export type Plan = (typeof plans)[0]
  export type Feature = (typeof allFeatures)[0]
  