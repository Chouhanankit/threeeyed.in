const capabilities = [
  {
    title: "Custom Web Development Tailored to Your Business",
    slug: "custom-web-development",
    shortPitch:
      "We build websites from scratch—100% customized to your business needs, brand, and functionality. No templates, no shortcuts.",
    detailedDescription:
      "At Three-Eyed Limited, we specialize in creating bespoke websites that align perfectly with your business goals. Our team handles everything—from research and design to scalable frontend and backend development—ensuring top-notch performance, SEO, and long-term growth.",
    processTitle: "Our Development Process",
    processSteps: [
      "Discovery & Strategy – We understand your business, goals, and users.",
      "Custom UI/UX Design – Unique, branded, and responsive designs.",
      "Frontend Development – Using React, Next.js, Tailwind for smooth UI.",
      "Backend Development – Robust logic with Node.js, Laravel, or .NET.",
      "Testing & Optimization – QA, speed, SEO, and security testing.",
      "Deployment & Support – Hosting, launch, and ongoing maintenance.",
    ],
    whyChooseUsTitle: "Why Choose Three-Eyed?",
    whyChooseUs: [
      "No templates—fully custom design & development.",
      "Built for performance, SEO, and security.",
      "Scalable architecture for future growth.",
      "You get 100% ownership of the code.",
    ],
    examplePitch:
      "Imagine a website that reflects your exact workflow, brand tone, and goals—designed and coded just for you. That’s what we deliver.",
    ctaText: "Start a Custom Web Project",
    ctaLink: "/getcontact",
  },
  {
    title: "E-Commerce Development Solutions to Elevate Your Online Store",
    slug: "e-commerce-development",
    shortPitch:
      "We build custom e-commerce stores that look stunning, perform flawlessly, and convert better.",
    detailedDescription:
      "Our expert team delivers scalable e-commerce websites tailored to your brand and audience. We focus on performance, mobile experience, security, and smooth user journeys—from product discovery to checkout.",
    processTitle: "Our E-Commerce Process",
    processSteps: [
      "Market & UX Analysis",
      "Custom Store Design & Development",
      "Payment & Inventory Integration",
      "SEO & Speed Optimization",
      "Testing & Launch",
    ],
    whyChooseUsTitle: "Why Work With Us?",
    whyChooseUs: [
      "Custom designs that match your brand.",
      "Integrated payments and inventory systems.",
      "Mobile-first experience.",
      "SEO-focused development.",
    ],
    examplePitch:
      "We don’t just build online stores—we create high-converting shopping experiences built for scale and sales.",
    ctaText: "Start Your E-Commerce Project",
    ctaLink: "/getcontact",
  },
  {
    title: "Content Management Systems (CMS) for Easy Website Control",
    slug: "content-management-systems",
    shortPitch:
      "Manage your website content without writing code—secure, scalable, and easy to use.",
    detailedDescription:
      "We implement and customize top CMS platforms like WordPress, Sanity, and Strapi so you can manage your content efficiently. Get full control over pages, posts, media, and more—tailored for your business.",
    processTitle: "Our CMS Approach",
    processSteps: [
      "CMS Selection Based on Your Needs",
      "Custom Theme Development",
      "Admin Panel & Content Types Setup",
      "User Roles & Access Control",
      "Training & Documentation",
    ],
    whyChooseUsTitle: "Why Our CMS Solutions?",
    whyChooseUs: [
      "Visual editing with zero code.",
      "Multilingual and SEO ready.",
      "Safe and secure admin panels.",
      "Custom themes and plugins.",
    ],
    examplePitch:
      "From WordPress to Headless CMS, we help you take full control of your content without technical hassles.",
    ctaText: "Talk to a CMS Expert",
    ctaLink: "/getcontact",
  },
  {
    title: "UI/UX Design That Inspires Engagement and Conversion",
    slug: "ui-ux-design",
    shortPitch:
      "We craft beautiful, intuitive interfaces based on real user behavior and brand psychology.",
    detailedDescription:
      "From user research and wireframes to micro-interactions and prototypes, we build digital experiences that delight users and convert visitors into customers.",
    processTitle: "Our UI/UX Process",
    processSteps: [
      "User Research & Competitive Audit",
      "Wireframes & User Flows",
      "High-Fidelity Designs",
      "Interactive Prototypes",
      "Developer Handoff",
    ],
    whyChooseUsTitle: "Why Good UX/UI Matters?",
    whyChooseUs: [
      "Boosts conversion & engagement.",
      "Reduces bounce and drop-offs.",
      "Builds trust with your audience.",
      "Improves retention and loyalty.",
    ],
    examplePitch:
      "Good design is invisible—it guides users naturally. That’s what we aim for in every project.",
    ctaText: "Start Your UX/UI Design Project",
    ctaLink: "/getcontact",
  },
  {
    title: "Frontend Development that’s Fast, Fluid, and Future-Ready",
    slug: "frontend-development",
    shortPitch:
      "We create high-performance interfaces using React, Vue, and Next.js, optimized for every device.",
    detailedDescription:
      "Our frontend developers deliver responsive, fast, and accessible UIs using component-driven architectures. Whether you need a website, web app, or dashboard—we’ve got it covered.",
    processTitle: "Frontend Workflow",
    processSteps: [
      "Design-to-Code Conversion",
      "Component-Based Development",
      "Mobile & Cross-Browser Testing",
      "SEO & Accessibility Optimization",
      "Performance Tuning",
    ],
    whyChooseUsTitle: "Why Our Frontend Team?",
    whyChooseUs: [
      "Pixel-perfect UI from Figma/Sketch.",
      "Responsive, mobile-first builds.",
      "Code built to scale & maintain.",
      "Animations that enhance UX.",
    ],
    examplePitch:
      "We turn your vision into code that works beautifully across screens and browsers.",
    ctaText: "Hire Frontend Developers",
    ctaLink: "/getcontact",
  },
  {
    title: "Backend Development & APIs for Powerful Business Logic",
    slug: "backend-development",
    shortPitch:
      "We build the logic and infrastructure behind your app—secure, scalable, and fully tailored.",
    detailedDescription:
      "Our backend developers handle everything behind the scenes—APIs, databases, authentication, microservices, and integrations—so your app runs smoothly and securely.",
    processTitle: "Backend Workflow",
    processSteps: [
      "Database Schema Design",
      "API Development (REST/GraphQL)",
      "Authentication & Authorization",
      "Third-party Integrations",
      "DevOps & Deployment Setup",
    ],
    whyChooseUsTitle: "Why Choose Our Backend Team?",
    whyChooseUs: [
      "Custom API design for your app.",
      "Secure and scalable server logic.",
      "Real-time updates & integrations.",
      "Cloud-ready deployment (AWS, Firebase, Docker).",
    ],
    examplePitch:
      "A solid backend is the engine of any great app—we build them to be bulletproof.",
    ctaText: "Build Your Backend Infrastructure",
    ctaLink: "/getcontact",
  },
  {
    title: "Website Optimization & SEO for Speed and Visibility",
    slug: "website-optimization",
    shortPitch:
      "We make your website faster and more discoverable by search engines through smart technical and content optimization.",
    detailedDescription:
      "From improving Core Web Vitals and image optimization to SEO audits and structured data—we optimize your site for performance, rankings, and conversions.",
    processTitle: "Optimization Strategy",
    processSteps: [
      "Performance Audit & PageSpeed Fixes",
      "SEO Audit & Keyword Mapping",
      "Code & Image Compression",
      "Schema Integration & Rich Snippets",
      "Mobile & Accessibility Improvements",
    ],
    whyChooseUsTitle: "Why Optimization Matters?",
    whyChooseUs: [
      "Better rankings & visibility.",
      "Faster load times = lower bounce rate.",
      "Improved mobile experience.",
      "Higher conversions & retention.",
    ],
    examplePitch:
      "A slow site costs you traffic and sales—let us help you fix that.",
    ctaText: "Get an SEO Audit",
    ctaLink: "/getcontact",
  },
  {
    title: "Website Maintenance & Support for Continuous Performance",
    slug: "website-maintenance",
    shortPitch:
      "We keep your website secure, up-to-date, and running smoothly—so you can focus on your business.",
    detailedDescription:
      "Our maintenance plans include everything from CMS/plugin updates, backups, and uptime monitoring to security patches, bug fixes, and new feature support.",
    processTitle: "Maintenance Coverage",
    processSteps: [
      "Plugin & CMS Updates",
      "24/7 Uptime Monitoring",
      "Security Patching & Firewall Setup",
      "Bug Fixing & Performance Tuning",
      "Content & UI Updates",
    ],
    whyChooseUsTitle: "Why You Need Maintenance?",
    whyChooseUs: [
      "Prevents downtime and issues.",
      "Keeps security up to date.",
      "Supports long-term SEO and speed.",
      "Gives you peace of mind.",
    ],
    examplePitch:
      "We don’t just build websites—we make sure they stay fast, safe, and functional.",
    ctaText: "Request Ongoing Support",
    ctaLink: "/getcontact",
  },
  {
    title: "Smart Inventory Management",
    slug: "inventory-setup",
    shortPitch:
      "Track, manage, and optimize your stock in real time with a centralized system.",
    detailedDescription:
      "Our inventory solutions give you full control over stock levels, movements, and valuations. With automation, you save time, reduce errors, and never miss a sale due to stock-outs.",
    processTitle: "Inventory Process Coverage",
    processSteps: [
      "Real-Time Stock Updates",
      "Barcode/QR Code Scanning",
      "Purchase & Sales Linking",
      "Stock Valuation & Audit",
      "Multi-Warehouse Support",
    ],
    whyChooseUsTitle: "Why Use Our Inventory System?",
    whyChooseUs: [
      "Avoid overstocking or stockouts.",
      "Save time with automated tracking.",
      "Get instant reports & analytics.",
      "Scale easily for growing businesses.",
    ],
    examplePitch:
      "We help businesses stop guessing and start managing their stock with confidence.",
    ctaText: "Request a Demo",
    ctaLink: "/getcontact",
  },
  {
    title: "Billing & Invoicing Automation",
    slug: "billing-invoicing",
    shortPitch:
      "Simplify billing, invoicing, and payments—seamlessly connected with inventory.",
    detailedDescription:
      "Our system automates billing and invoicing, directly linked with stock management. Generate GST-ready invoices, manage returns, and track customer payments effortlessly.",
    processTitle: "Billing & Invoicing Workflow",
    processSteps: [
      "Auto-Generate Invoices",
      "GST & Tax Calculations",
      "Payment Tracking",
      "Credit/Debit Notes",
      "Customer History Management",
    ],
    whyChooseUsTitle: "Why Choose Our Billing System?",
    whyChooseUs: [
      "Save time with automated invoices.",
      "Ensure 100% accuracy in billing.",
      "Easily integrate with accounting.",
      "Improve customer satisfaction.",
    ],
    examplePitch:
      "Turn your billing process into a hassle-free, automated system linked with your inventory.",
    ctaText: "Automate Billing Now",
    ctaLink: "/getcontact",
  },
];
export default capabilities;
