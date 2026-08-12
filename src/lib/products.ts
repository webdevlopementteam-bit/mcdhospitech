export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  specs: Spec[];
  icon: string;
};

export type Subcategory = {
  slug: string;
  name: string;
  blurb: string;
  product: Product;
};

export type AccentColor =
  | "blue"
  | "green"
  | "orange"
  | "purple"
  | "teal"
  | "pink";

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
  color: AccentColor;
  image: string;
  subcategories: Subcategory[];
};

export const categories: Category[] = [
  {
    slug: "medical-beds",
    name: "Medical Beds",
    shortName: "Beds",
    tagline: "Engineered for patient comfort and caregiver ease",
    description:
      "A complete range of hospital beds built on heavy-gauge steel frames with corrosion-resistant powder coating, precision castors and noise-free adjustment mechanisms — designed for ICUs, general wards and long-term care.",
    icon: "BedDouble",
    color: "blue",
    image: "/category/medicalbed.webp",
    subcategories: [
      {
        slug: "icu-bed",
        name: "ICU Bed",
        blurb: "Multi-function electric & manual critical-care beds",
        product: {
          slug: "icu-bed",
          name: "ICU Bed — 5 Function Electric",
          tagline: "Critical-care positioning at the touch of a button",
          description:
            "A fully electric intensive-care bed offering synchronised backrest, knee-rest, height and Trendelenburg/reverse-Trendelenburg positioning, built for round-the-clock ICU use with rapid CPR release and integrated monitor/IV mounts.",
          features: [
            "5-function electric actuation with hand-held controller",
            "Emergency CPR quick-release lever",
            "Trendelenburg & reverse-Trendelenburg tilt",
            "Central locking castors, 125 mm dia.",
            "X-ray compatible radiolucent backrest panel",
            "Side rails with foldable ABS panels",
          ],
          specs: [
            { label: "Frame", value: "Heavy-gauge MS, epoxy powder coated" },
            { label: "Deck", value: "4-section, high-pressure laminate" },
            { label: "Adjustment", value: "Electric linear actuators (24V)" },
            { label: "Load Capacity", value: "185 kg (SWL)" },
            { label: "Castors", value: "125 mm, central braking" },
            { label: "Height Range", value: "400 – 700 mm" },
          ],
          icon: "BedDouble",
        },
      },
      {
        slug: "fowler-bed",
        name: "Fowler Bed",
        blurb: "Manual & hydraulic general-ward positioning beds",
        product: {
          slug: "fowler-bed",
          name: "Fowler Bed — Hydraulic 3 Function",
          tagline: "Reliable positioning for general wards",
          description:
            "A rugged hydraulic Fowler bed with geared crank height adjustment and independent backrest/knee-rest control, finished in anti-bacterial epoxy powder coat for demanding ward environments.",
          features: [
            "Hydraulic height adjustment via foot pump",
            "Independent backrest & knee-rest cranks",
            "Collapsible ABS head & foot boards",
            "Detachable IV pole socket",
            "Anti-bacterial epoxy powder coating",
          ],
          specs: [
            { label: "Frame", value: "MS tubular, powder coated" },
            { label: "Deck", value: "3-section perforated MS sheet" },
            { label: "Adjustment", value: "Hydraulic foot pump" },
            { label: "Load Capacity", value: "150 kg (SWL)" },
            { label: "Castors", value: "100 mm swivel castors" },
          ],
          icon: "BedDouble",
        },
      },
      {
        slug: "semi-fowler-bed",
        name: "Semi-Fowler Bed",
        blurb: "Economical two-function ward beds",
        product: {
          slug: "semi-fowler-bed",
          name: "Semi-Fowler Bed — Manual",
          tagline: "Dependable comfort for everyday ward care",
          description:
            "A cost-effective manual bed with backrest elevation via a geared crank mechanism — a durable, low-maintenance choice for general wards and step-down units.",
          features: [
            "Manual geared crank backrest adjustment",
            "Fixed-height tubular MS frame",
            "Collapsible head & foot boards",
            "Anti-rust powder coated finish",
          ],
          specs: [
            { label: "Frame", value: "MS tubular, powder coated" },
            { label: "Deck", value: "2-section MS sheet" },
            { label: "Adjustment", value: "Manual geared crank" },
            { label: "Load Capacity", value: "150 kg (SWL)" },
          ],
          icon: "BedDouble",
        },
      },
      {
        slug: "plain-paediatric-bed",
        name: "Plain / Paediatric Bed",
        blurb: "Fixed-height general and child-care beds",
        product: {
          slug: "plain-paediatric-bed",
          name: "Paediatric Bed with Collapsible Railings",
          tagline: "Safety-first design for younger patients",
          description:
            "A compact, fixed-height bed with high collapsible side railings and a smooth-finish deck, sized for paediatric wards and nursing homes.",
          features: [
            "High collapsible safety railings",
            "Compact ward-friendly footprint",
            "Smooth rounded edges for patient safety",
            "Rust-resistant powder coated frame",
          ],
          specs: [
            { label: "Frame", value: "MS tubular, powder coated" },
            { label: "Size", value: "1500 x 700 mm (standard)" },
            { label: "Railings", value: "Collapsible, both sides" },
            { label: "Load Capacity", value: "80 kg (SWL)" },
          ],
          icon: "BedSingle",
        },
      },
      {
        slug: "attendant-bed",
        name: "Attendant Bed",
        blurb: "Space-saving folding beds for caregivers",
        product: {
          slug: "attendant-bed",
          name: "Attendant Bed — Folding",
          tagline: "Compact rest solution for patient attendants",
          description:
            "A lightweight folding bed that tucks away under the patient bed when not in use, giving caregivers a comfortable resting option without consuming ward floor space.",
          features: [
            "Fold-flat mechanism for storage under bed",
            "Lightweight tubular MS construction",
            "Wipeable powder coated finish",
            "Integrated carry handle",
          ],
          specs: [
            { label: "Frame", value: "MS tubular, powder coated" },
            { label: "Folded Size", value: "1950 x 600 x 150 mm" },
            { label: "Load Capacity", value: "100 kg (SWL)" },
          ],
          icon: "BedSingle",
        },
      },
      {
        slug: "bed-accessories",
        name: "Accessories for Hospital Bed",
        blurb: "Mattresses, IV stands, traction & bed-head panels",
        product: {
          slug: "bed-accessories",
          name: "Bed Accessories Range",
          tagline: "Complete the bedside care environment",
          description:
            "A curated range of bed-side accessories — high-density foam mattresses, mobile IV stands, overhead traction frames and bed-head service panels — engineered to match our bed platforms.",
          features: [
            "High-density, fire-retardant foam mattresses",
            "Height-adjustable stainless steel IV stands",
            "Overhead traction & fracture frames",
            "Modular bed-head service panels",
          ],
          specs: [
            {
              label: "Mattress",
              value: "High-density PU foam, washable cover",
            },
            { label: "IV Stand", value: "SS304, 5-leg base with castors" },
            { label: "Traction Frame", value: "MS tubular, powder coated" },
          ],
          icon: "HeartPulse",
        },
      },
    ],
  },
  {
    slug: "medical-furniture",
    name: "Medical Furniture",
    shortName: "Furniture",
    tagline: "Functional stainless-steel & MS furniture for every ward",
    description:
      "From bedside lockers to autoclaves — a comprehensive furniture and equipment catalogue built in stainless steel and mild steel to serve wards, OPDs, labour rooms and sterile processing departments.",
    icon: "Armchair",
    color: "green",
    image: "/category/medicalfurniture.png",
    subcategories: [
      {
        slug: "bed-side-lockers",
        name: "Bed Side Lockers",
        blurb: "Storage units for patient bedside essentials",
        product: {
          slug: "bed-side-lockers",
          name: "Bedside Locker — SS Top",
          tagline: "Tidy, hygienic bedside storage",
          description:
            "A three-tier bedside locker with a stainless-steel top and mounted castors, offering hygienic, easy-to-clean storage for patient belongings.",
          features: [
            "Stainless steel top surface",
            "Three-tier storage with drawer & cupboard",
            "Smooth-rolling castors for mobility",
            "Powder coated MS body",
          ],
          specs: [
            { label: "Top", value: "SS304 matte finish" },
            { label: "Body", value: "MS powder coated" },
            { label: "Size", value: "460 x 460 x 800 mm" },
          ],
          icon: "Archive",
        },
      },
      {
        slug: "over-bed-tables",
        name: "Over Bed Tables",
        blurb: "Adjustable dining & activity tables",
        product: {
          slug: "over-bed-tables",
          name: "Over Bed Table — Height Adjustable",
          tagline: "Dining and activity, right at the bedside",
          description:
            "A height and tilt-adjustable over-bed table on a mobile C-frame base, giving patients a stable surface for meals, reading or activities without leaving bed.",
          features: [
            "Gas-strut / screw height adjustment",
            "Tiltable laminate top",
            "Mobile C-frame base with castors",
            "Scratch-resistant surface",
          ],
          specs: [
            { label: "Top", value: "High-pressure laminate" },
            { label: "Base", value: "MS powder coated, C-frame" },
            { label: "Height Range", value: "700 – 1050 mm" },
          ],
          icon: "Table2",
        },
      },
      {
        slug: "stretcher-trolleys",
        name: "Stretcher Trolleys",
        blurb: "Patient transport & emergency trolleys",
        product: {
          slug: "stretcher-trolleys",
          name: "Hydraulic Stretcher Trolley",
          tagline: "Smooth, safe patient transfer",
          description:
            "A hydraulic-height stretcher trolley with a radiolucent top, foldable side railings and shock-absorbing castors — built for emergency and inter-department transport.",
          features: [
            "Hydraulic height adjustment",
            "Foldable safety side railings",
            "Radiolucent top for X-ray",
            "Central locking, shock-absorbing castors",
          ],
          specs: [
            { label: "Frame", value: "SS304 / MS powder coated" },
            { label: "Top", value: "Radiolucent laminate" },
            { label: "Load Capacity", value: "175 kg (SWL)" },
          ],
          icon: "Truck",
        },
      },
      {
        slug: "labour-delivery-tables",
        name: "Labour / Delivery Tables",
        blurb: "Obstetric tables for labour rooms",
        product: {
          slug: "labour-delivery-tables",
          name: "Labour Table — Hydraulic",
          tagline: "Purpose-built for maternity care",
          description:
            "A hydraulic labour and delivery table with adjustable leg-rests, backrest and lithotomic positioning, finished in seamless, easy-to-sanitise upholstery.",
          features: [
            "Hydraulic backrest & height adjustment",
            "Adjustable leg-support stirrups",
            "Removable, sanitisable cushioning",
            "Drainage basin & instrument tray",
          ],
          specs: [
            { label: "Frame", value: "MS powder coated" },
            { label: "Upholstery", value: "Seamless leatherette" },
            { label: "Adjustment", value: "Hydraulic" },
          ],
          icon: "Table2",
        },
      },
      {
        slug: "examination-tables",
        name: "Examination Tables",
        blurb: "OPD & consultation examination couches",
        product: {
          slug: "examination-tables",
          name: "Examination Table — 2 Step",
          tagline: "Everyday reliability for OPDs",
          description:
            "A general-purpose examination table with an integrated 2-step footrest, cushioned top and under-shelf storage — a workhorse for OPD and consultation rooms.",
          features: [
            "Integrated 2-step footrest",
            "Cushioned, seamless top",
            "Under-shelf for linen storage",
            "Powder coated MS frame",
          ],
          specs: [
            { label: "Frame", value: "MS powder coated" },
            { label: "Top", value: "Cushioned leatherette" },
            { label: "Size", value: "1830 x 610 x 810 mm" },
          ],
          icon: "Stethoscope",
        },
      },
      {
        slug: "dialysis-chairs",
        name: "Dialysis Chairs",
        blurb: "Recliner chairs for dialysis therapy",
        product: {
          slug: "dialysis-chairs",
          name: "Dialysis Recliner Chair",
          tagline: "Long-session comfort for patients",
          description:
            "A fully reclining dialysis chair with adjustable armrests and leg-rest, designed for extended treatment sessions with maximum patient comfort.",
          features: [
            "Multi-position recline mechanism",
            "Height-adjustable armrests",
            "Elevating leg-rest",
            "High-density cushioning",
          ],
          specs: [
            { label: "Frame", value: "MS powder coated" },
            { label: "Upholstery", value: "PU leatherette, seamless" },
            { label: "Recline", value: "Multi-position ratchet" },
          ],
          icon: "Armchair",
        },
      },
      {
        slug: "carts-trolleys",
        name: "Carts / Trolleys",
        blurb: "Medicine, dressing, crash & utility trolleys",
        product: {
          slug: "carts-trolleys",
          name: "Crash Cart / Emergency Trolley",
          tagline: "Ready for critical response",
          description:
            "A multi-drawer emergency crash cart with a defibrillator top shelf, IV pole and lockable drawers — organised for rapid access during resuscitation.",
          features: [
            "Multiple lockable drawers",
            "Defibrillator top shelf",
            "Integrated IV pole & push handle",
            "Heavy-duty swivel castors",
          ],
          specs: [
            { label: "Body", value: "MS powder coated / SS304" },
            { label: "Drawers", value: "4–6, telescopic slides" },
            { label: "Castors", value: "100 mm, 2 with brakes" },
          ],
          icon: "ShoppingCart",
        },
      },
      {
        slug: "suction-apparatus",
        name: "Suction Apparatus",
        blurb: "Electric & manual suction units",
        product: {
          slug: "suction-apparatus",
          name: "Electric Suction Apparatus",
          tagline: "Dependable aspiration for wards & OT",
          description:
            "A portable electric suction unit with dual autoclavable jars, adjustable vacuum control and overflow protection, suited for wards, OT and ambulances.",
          features: [
            "Dual autoclavable collection jars",
            "Adjustable vacuum regulator",
            "Overflow safety shut-off",
            "Trolley-mounted, mobile design",
          ],
          specs: [
            { label: "Vacuum Range", value: "0 – 600 mmHg" },
            { label: "Jar Capacity", value: "2 x 1000 ml" },
            { label: "Power", value: "230V AC" },
          ],
          icon: "Wind",
        },
      },
      {
        slug: "wheelchairs",
        name: "Wheelchairs",
        blurb: "Foldable patient mobility chairs",
        product: {
          slug: "wheelchairs",
          name: "Foldable Wheelchair — Standard",
          tagline: "Everyday mobility, built to last",
          description:
            "A foldable, lightweight wheelchair with cushioned armrests, swing-away footrests and puncture-proof wheels for reliable everyday mobility support.",
          features: [
            "Foldable X-frame for storage",
            "Swing-away, detachable footrests",
            "Puncture-proof rear wheels",
            "Push-to-lock brakes",
          ],
          specs: [
            { label: "Frame", value: "Chrome-plated / powder coated MS" },
            { label: "Seat Width", value: "460 mm" },
            { label: "Load Capacity", value: "100 kg" },
          ],
          icon: "Armchair",
        },
      },
      {
        slug: "ward-equipment",
        name: "Ward Equipment",
        blurb: "Screens, stools, racks & general ward gear",
        product: {
          slug: "ward-equipment",
          name: "Bedside Screen & Ward Essentials",
          tagline: "Everything a ward needs to function",
          description:
            "A range of general ward equipment including mobile privacy screens, instrument stools, linen racks and utility stands built for daily hospital operations.",
          features: [
            "Mobile 3-panel privacy screens",
            "Height-adjustable revolving stools",
            "Stainless steel linen & utility racks",
            "Rust-proof powder coated finish",
          ],
          specs: [
            { label: "Screen", value: "MS frame, washable curtain" },
            { label: "Stool", value: "SS304 top, gas-lift adjustable" },
          ],
          icon: "LayoutGrid",
        },
      },
      {
        slug: "ss-hollowares",
        name: "S.S. Holloware",
        blurb: "Stainless steel trays, bowls & dressing drums",
        product: {
          slug: "ss-hollowares",
          name: "SS304 Holloware Set",
          tagline: "Sterile-processing essentials in surgical steel",
          description:
            "A range of stainless steel trays, kidney bowls, dressing drums and instrument containers, mirror-polished and built to withstand repeated autoclave cycles.",
          features: [
            "SS304 surgical-grade steel",
            "Autoclavable up to 134°C",
            "Seamless, mirror-polished finish",
            "Wide range of trays, bowls & drums",
          ],
          specs: [
            { label: "Material", value: "SS304 (18/8)" },
            { label: "Finish", value: "Mirror polish" },
            { label: "Autoclave Rated", value: "Up to 134°C" },
          ],
          icon: "Layers",
        },
      },
      {
        slug: "bio-medical-waste-bins",
        name: "Bio Medical Waste Bins",
        blurb: "Color-coded segregation bins",
        product: {
          slug: "bio-medical-waste-bins",
          name: "Bio-Medical Waste Bin — Pedal Type",
          tagline: "Compliant waste segregation, ward to disposal",
          description:
            "Colour-coded pedal-operated waste bins built to BMW Rules segregation categories, with foot-pedal lids to minimise contact and cross-contamination.",
          features: [
            "Colour-coded (yellow / red / blue / white)",
            "Foot-pedal operated lid",
            "Rust-proof powder coated / SS body",
            "Compliant with BMW handling norms",
          ],
          specs: [
            { label: "Capacity", value: "10 / 20 / 30 L options" },
            { label: "Body", value: "MS powder coated or SS304" },
            { label: "Operation", value: "Foot pedal" },
          ],
          icon: "Trash2",
        },
      },
      {
        slug: "autoclaves",
        name: "Autoclaves",
        blurb: "Steam sterilisers for CSSD & OT",
        product: {
          slug: "autoclaves",
          name: "Vertical Autoclave Steriliser",
          tagline: "Validated sterility for critical instruments",
          description:
            "A vertical, double-walled steam autoclave with a digital control panel and safety interlocks, sized for CSSD, OT and dressing sterilisation needs.",
          features: [
            "Double-walled SS304 chamber",
            "Digital time/temperature controller",
            "Safety pressure-release interlocks",
            "Available in 12L – 100L capacities",
          ],
          specs: [
            { label: "Chamber", value: "SS304, double-walled" },
            { label: "Max Pressure", value: "15 – 20 psi" },
            { label: "Control", value: "Digital PID controller" },
          ],
          icon: "Container",
        },
      },
    ],
  },
  {
    slug: "operating-lights",
    name: "Operating Lights",
    shortName: "OT Lights",
    tagline: "Shadow-free LED illumination for critical procedures",
    description:
      "LED surgical and examination lights engineered for high colour-rendering, low heat emission and precise focus control — ceiling, wall or mobile-mounted to suit any OT configuration.",
    icon: "Lightbulb",
    color: "orange",
    image: "/category/operatinglights.webp",
    subcategories: [
      {
        slug: "80-series-led",
        name: "80 Series (LED)",
        blurb: "Premium multi-dome major-OT LED lights",
        product: {
          slug: "80-series-led",
          name: "80 Series LED Operating Light",
          tagline: "Flagship illumination for major operation theatres",
          description:
            "A premium multi-dome LED operating light delivering high-intensity, shadow-free illumination with individually adjustable light heads — built for major OTs including cardiac and neuro suites.",
          features: [
            "Up to 160,000 lux central illumination",
            "Individually adjustable LED reflectors",
            "Colour temperature adjustable (3500K–5000K)",
            "Low heat emission, high CRI (>96)",
            "Camera & recording integration ready",
          ],
          specs: [
            { label: "Illumination", value: "Up to 160,000 lux" },
            { label: "Colour Rendering", value: "CRI > 96" },
            { label: "Colour Temp.", value: "3500K – 5000K adjustable" },
            { label: "Mounting", value: "Ceiling, dual/triple dome" },
            { label: "LED Life", value: "50,000+ hours" },
          ],
          icon: "Lightbulb",
        },
      },
      {
        slug: "30-series-led",
        name: "30 Series (LED)",
        blurb: "Mid-range LED lights for general OTs",
        product: {
          slug: "30-series-led",
          name: "30 Series LED Operating Light",
          tagline: "Dependable illumination for general surgery",
          description:
            "A single/dual-dome LED operating light balancing performance and value, suited for general surgical procedures across mid-sized hospitals.",
          features: [
            "Up to 120,000 lux illumination",
            "Sterilisable central handle",
            "Adjustable focus & field diameter",
            "Compact, low-profile dome design",
          ],
          specs: [
            { label: "Illumination", value: "Up to 120,000 lux" },
            { label: "Colour Rendering", value: "CRI > 95" },
            { label: "Mounting", value: "Ceiling, single/dual dome" },
          ],
          icon: "Lightbulb",
        },
      },
      {
        slug: "b4-series-led",
        name: "B4 Series (LED)",
        blurb: "Compact LED lights for minor procedures",
        product: {
          slug: "b4-series-led",
          name: "B4 Series LED Minor OT Light",
          tagline: "Focused light for minor procedure rooms",
          description:
            "A compact ceiling or wall-mounted LED light purpose-built for minor OTs, labour rooms and procedure suites where space and budget are key considerations.",
          features: [
            "Up to 80,000 lux illumination",
            "Wall, ceiling or mobile-stand mount",
            "Compact single-dome housing",
            "Flicker-free, low heat output",
          ],
          specs: [
            { label: "Illumination", value: "Up to 80,000 lux" },
            { label: "Mounting", value: "Ceiling / wall / mobile" },
          ],
          icon: "Lightbulb",
        },
      },
      {
        slug: "28-series-led",
        name: "28 Series (LED)",
        blurb: "Entry-level LED procedure lights",
        product: {
          slug: "28-series-led",
          name: "28 Series LED Procedure Light",
          tagline: "Reliable entry-level surgical illumination",
          description:
            "An economical single-dome LED light designed for procedure rooms, dressing rooms and small OTs requiring dependable, shadow-reduced lighting.",
          features: [
            "Up to 60,000 lux illumination",
            "Single-dome compact design",
            "Manual focus adjustment",
            "Low-maintenance LED engine",
          ],
          specs: [
            { label: "Illumination", value: "Up to 60,000 lux" },
            { label: "Mounting", value: "Ceiling / wall" },
          ],
          icon: "Lightbulb",
        },
      },
      {
        slug: "examination-lights",
        name: "Examination Lights",
        blurb: "Mobile & wall-mounted LED exam lights",
        product: {
          slug: "examination-lights",
          name: "LED Examination Light — Mobile Stand",
          tagline: "Precise, portable illumination for OPDs",
          description:
            "A mobile LED examination light on a weighted castor stand with a flexible gooseneck arm, ideal for OPDs, wards and minor dressing procedures.",
          features: [
            "Flexible gooseneck positioning",
            "Weighted, mobile castor base",
            "Cool LED light source",
            "Wall-mount option available",
          ],
          specs: [
            { label: "Illumination", value: "Up to 30,000 lux" },
            { label: "Mounting", value: "Mobile stand / wall" },
          ],
          icon: "Lamp",
        },
      },
    ],
  },
  {
    slug: "operating-tables",
    name: "Operating Tables",
    shortName: "OT Tables",
    tagline: "Precision positioning for every surgical specialty",
    description:
      "Electric and hydraulic operating tables with multi-section tops, radiolucent surfaces and C-arm compatibility — configurable for general, ortho, cardiac and laparoscopic surgery.",
    icon: "Table2",
    color: "purple",
    image: "/category/operatingrables.webp",
    subcategories: [
      {
        slug: "electro-hydraulic-operating-table",
        name: "Electro Hydraulic Operating Table",
        blurb: "Motorised hydraulic multi-section tables",
        product: {
          slug: "electro-hydraulic-operating-table",
          name: "Electro-Hydraulic Operating Table",
          tagline: "Motor-driven precision for complex procedures",
          description:
            "A multi-section electro-hydraulic operating table combining motorised height, tilt and back-section control with a fully radiolucent carbon-fibre top for intra-operative imaging.",
          features: [
            "Motorised height, Trendelenburg & lateral tilt",
            "Radiolucent carbon-fibre top",
            "C-arm compatible for full-length imaging",
            "Interchangeable accessory rail system",
            "Battery back-up operation",
          ],
          specs: [
            { label: "Top", value: "Radiolucent carbon-fibre, 4/5-section" },
            { label: "Adjustment", value: "Electro-hydraulic motorised" },
            { label: "Height Range", value: "700 – 1020 mm" },
            { label: "Load Capacity", value: "220 kg (SWL)" },
          ],
          icon: "Table2",
        },
      },
      {
        slug: "electric-ot-tables",
        name: "Electric OT Tables",
        blurb: "Fully electric positioning tables",
        product: {
          slug: "electric-ot-tables",
          name: "Electric Operating Table",
          tagline: "Smooth, silent, fully electric control",
          description:
            "A fully electric operating table with hand/foot-switch control for all major positioning functions, suited to general and specialty surgical suites.",
          features: [
            "All-electric height, tilt & section control",
            "Foot-switch & remote control options",
            "Detachable head & leg sections",
            "Radiolucent top with X-ray cassette tray",
          ],
          specs: [
            { label: "Adjustment", value: "Fully electric" },
            { label: "Top", value: "Radiolucent, multi-section" },
            { label: "Load Capacity", value: "200 kg (SWL)" },
          ],
          icon: "Table2",
        },
      },
      {
        slug: "hydraulic-operating-tables",
        name: "Hydraulic Operating Tables",
        blurb: "Manual hydraulic general-purpose tables",
        product: {
          slug: "hydraulic-operating-tables",
          name: "Hydraulic Operating Table — General Purpose",
          tagline: "Proven hydraulic reliability for general surgery",
          description:
            "A manually operated hydraulic operating table offering height, back and leg-section adjustment via foot-pump control — a durable, low-maintenance choice for general surgery.",
          features: [
            "Foot-pump hydraulic height adjustment",
            "Manual back & leg-section control",
            "Detachable leg section for lithotomy",
            "Antistatic top upholstery",
          ],
          specs: [
            { label: "Adjustment", value: "Hydraulic, foot-pump" },
            { label: "Top", value: "Antistatic upholstered, 3-section" },
            { label: "Load Capacity", value: "150 kg (SWL)" },
          ],
          icon: "Table2",
        },
      },
      {
        slug: "operating-table-accessories",
        name: "Accessories for Operating Tables",
        blurb: "Positioning aids, straps, arm boards & rails",
        product: {
          slug: "operating-table-accessories",
          name: "OT Table Accessory Kit",
          tagline: "Configure every table for the procedure at hand",
          description:
            "A comprehensive accessory range — arm boards, shoulder & lateral supports, leg holders and safety straps — compatible with our full operating table range via a universal clamp/rail system.",
          features: [
            "Universal rail-mount compatibility",
            "Padded arm boards & shoulder supports",
            "Adjustable leg & lithotomy holders",
            "Radiolucent positioning aids",
          ],
          specs: [
            { label: "Mounting", value: "Universal side-rail clamp" },
            {
              label: "Material",
              value: "Stainless steel / radiolucent composite",
            },
          ],
          icon: "Wrench",
        },
      },
    ],
  },
  {
    slug: "modular-ots",
    name: "Modular OTs",
    shortName: "Modular OT",
    tagline: "Turnkey sterile operation theatre environments",
    description:
      "End-to-end modular operation theatre solutions — from seamless flooring and wall panelling to laminar air flow, scrub stations and pass boxes — engineered to meet infection-control and workflow standards.",
    icon: "Building2",
    color: "teal",
    image: "/category/modularot.webp",
    subcategories: [
      {
        slug: "flooring",
        name: "Flooring",
        blurb: "Seamless, antistatic OT flooring systems",
        product: {
          slug: "flooring",
          name: "Seamless Antistatic OT Flooring",
          tagline: "A hygienic, conductive base for the sterile core",
          description:
            "Seamless, heat-welded antistatic vinyl flooring engineered to eliminate joints and crevices where contaminants can accumulate, with conductive properties suited to OT environments.",
          features: [
            "Heat-welded, seamless joints",
            "Antistatic / conductive flooring option",
            "Coved skirting for easy cleaning",
            "Chemical & abrasion resistant surface",
          ],
          specs: [
            { label: "Material", value: "Homogeneous conductive vinyl" },
            { label: "Installation", value: "Heat-welded, coved skirting" },
          ],
          icon: "LayoutGrid",
        },
      },
      {
        slug: "control-panels",
        name: "Control Panels / X-Ray View Box / Writing Board",
        blurb: "OT control, imaging & documentation panels",
        product: {
          slug: "control-panels",
          name: "OT Control Panel & X-Ray View Box",
          tagline: "Centralised control at the surgeon's fingertips",
          description:
            "An integrated wall-mounted panel combining OT light/table controls, gas & electrical indicators, an LED X-ray view box and a writing board — consolidating theatre controls in one console.",
          features: [
            "Integrated light & table control switches",
            "LED X-ray film view box",
            "Laminate writing/documentation board",
            "Gas pressure & alarm indicators",
          ],
          specs: [
            { label: "Construction", value: "SS304 / powder coated MS" },
            { label: "View Box", value: "LED backlit, dual film" },
          ],
          icon: "PanelsTopLeft",
        },
      },
      {
        slug: "prd-pass-box",
        name: "PRD / Pass Box / Window",
        blurb: "Interlocked pass boxes for material transfer",
        product: {
          slug: "prd-pass-box",
          name: "Interlocked Pass Box",
          tagline: "Contamination-controlled material transfer",
          description:
            "An electronically or mechanically interlocked stainless steel pass box that prevents simultaneous door opening, maintaining the sterile barrier between OT and peripheral areas.",
          features: [
            "Mechanical or electromagnetic interlocking",
            "SS304 mirror-finish chamber",
            "UV sterilisation option",
            "Static / dynamic pass-box configurations",
          ],
          specs: [
            { label: "Material", value: "SS304, mirror polish" },
            { label: "Interlock", value: "Mechanical / electromagnetic" },
          ],
          icon: "PackageOpen",
        },
      },
      {
        slug: "laminar-ahu",
        name: "Laminar & AHU",
        blurb: "Laminar air flow units & air handling systems",
        product: {
          slug: "laminar-ahu",
          name: "Laminar Air Flow Unit",
          tagline: "Unidirectional clean air over the surgical field",
          description:
            "A HEPA-filtered laminar air flow canopy delivering unidirectional, particulate-free air over the operating table, paired with validated AHU systems for pressure-controlled sterile zones.",
          features: [
            "HEPA H13/H14 filtration",
            "Unidirectional laminar air flow canopy",
            "Integrated with OT AHU pressure cascade",
            "Validated per ISO 14644 cleanroom class",
          ],
          specs: [
            { label: "Filtration", value: "HEPA H13 / H14" },
            {
              label: "Air Flow",
              value: "Unidirectional, validated ISO Class 5–7",
            },
          ],
          icon: "Wind",
        },
      },
      {
        slug: "scrub-station",
        name: "Scrub Station",
        blurb: "Touch-free multi-bay scrubbing units",
        product: {
          slug: "scrub-station",
          name: "Touch-Free Scrub Station",
          tagline: "Hands-free hygiene before every procedure",
          description:
            "A multi-bay SS304 scrub station with sensor-operated, touch-free water and soap dispensing, designed for the pre-OT scrubbing zone.",
          features: [
            "Sensor-operated touch-free taps",
            "Integrated soap/antiseptic dispensers",
            "Deep-drawn SS304 basin",
            "Single, double or triple-bay configurations",
          ],
          specs: [
            { label: "Material", value: "SS304, deep-drawn basin" },
            { label: "Operation", value: "Sensor / touch-free" },
          ],
          icon: "Droplets",
        },
      },
      {
        slug: "wall-panels",
        name: "Wall Panels",
        blurb: "Seamless antibacterial OT wall cladding",
        product: {
          slug: "wall-panels",
          name: "Modular Antibacterial Wall Panels",
          tagline: "A seamless, sterile shell for the theatre",
          description:
            "Pre-fabricated, powder-coated GI or SS wall panels with concealed joints and coved corners, engineered to eliminate dust traps and support easy disinfection.",
          features: [
            "Concealed joints, coved corners",
            "Antibacterial powder-coated / SS finish",
            "Modular, rapid on-site installation",
            "Integrated services routing behind panels",
          ],
          specs: [
            { label: "Material", value: "GI / SS304, powder coated" },
            { label: "Joints", value: "Concealed, seamless" },
          ],
          icon: "PanelsTopLeft",
        },
      },
      {
        slug: "ot-pendant",
        name: "OT Pendant",
        blurb: "Ceiling-mounted service pendants",
        product: {
          slug: "ot-pendant",
          name: "Ceiling OT Pendant System",
          tagline: "Gas, power and equipment overhead — organised",
          description:
            "A rotating ceiling-mounted pendant carrying medical gas outlets, electrical sockets and equipment shelving, keeping cables and hoses off the OT floor for a safer, cleaner workspace.",
          features: [
            "360° rotation with cable-free design",
            "Integrated medical gas outlets",
            "Multiple electrical & data sockets",
            "Single or double-arm configurations",
          ],
          specs: [
            { label: "Rotation", value: "360°, cable-free" },
            { label: "Arms", value: "Single / double-arm options" },
          ],
          icon: "Radio",
        },
      },
      {
        slug: "doors",
        name: "Doors",
        blurb: "Automatic hermetic & sliding OT doors",
        product: {
          slug: "doors",
          name: "Automatic Hermetic Sliding Door",
          tagline: "Airtight access control for the sterile zone",
          description:
            "A sensor-operated hermetic sliding door providing an airtight seal to maintain OT pressure differentials, with interlocking control options for adjoining pass-throughs.",
          features: [
            "Hermetic airtight seal",
            "Sensor / push-button automatic operation",
            "Interlocking control with adjoining doors",
            "Powder coated / SS door leaf options",
          ],
          specs: [
            { label: "Operation", value: "Automatic sliding, sensor" },
            { label: "Seal", value: "Hermetic, pressure-rated" },
          ],
          icon: "DoorOpen",
        },
      },
    ],
  },
  {
    slug: "neonatal-nicu-care",
    name: "Neonatal & NICU Care",
    shortName: "NICU Care",
    tagline: "Specialist equipment for the smallest patients",
    description:
      "Our founding specialty — infant warmers, incubators, phototherapy and respiratory support equipment engineered for neonatology and NICU departments, built to the same reliability standard trusted across our other critical-care ranges.",
    icon: "Baby",
    color: "pink",
    image: "/category/neonatalnicu.webp",
    subcategories: [
      {
        slug: "infant-radiant-warmer",
        name: "Infant Radiant Warmer",
        blurb: "Open-care radiant warming systems for newborns",
        product: {
          slug: "infant-radiant-warmer",
          name: "Infant Radiant Warmer — Microprocessor Controlled",
          tagline: "Precise thermal care from the first minute",
          description:
            "A microprocessor-controlled radiant warmer with servo and manual heating modes, keeping newborns at a stable temperature during resuscitation, observation and routine nursing care.",
          features: [
            "Servo-controlled & manual heating modes",
            "Skin temperature probe with alarm",
            "Height-adjustable trolley with tilt mattress tray",
            "Built-in procedure light & resuscitation shelf",
          ],
          specs: [
            { label: "Control", value: "Microprocessor, servo/manual mode" },
            { label: "Heater", value: "Quartz / ceramic infrared element" },
            {
              label: "Mattress Tray",
              value: "Tilt & Trendelenburg adjustable",
            },
            { label: "Alarms", value: "High/low skin temp, sensor failure" },
          ],
          icon: "ThermometerSun",
        },
      },
      {
        slug: "baby-incubator",
        name: "Baby Incubator",
        blurb: "Closed-care incubators for controlled micro-environments",
        product: {
          slug: "baby-incubator",
          name: "Baby Incubator — Microprocessor Controlled",
          tagline: "A controlled micro-environment for vulnerable newborns",
          description:
            "A closed-care incubator maintaining precise temperature and humidity inside a transparent acrylic hood, with access ports for clinical care without disturbing the thermal environment.",
          features: [
            "Air & skin temperature control modes",
            "Humidity control with digital display",
            "Dual access ports & angled front panel",
            "Double-walled acrylic hood to reduce heat loss",
          ],
          specs: [
            { label: "Control", value: "Microprocessor, air/skin mode" },
            { label: "Temperature Range", value: "Ambient to 37°C" },
            { label: "Humidity", value: "Digitally controlled" },
            { label: "Hood", value: "Double-walled acrylic" },
          ],
          icon: "Baby",
        },
      },
      {
        slug: "nicu-cpap-machine",
        name: "NICU CPAP Machine",
        blurb: "Non-invasive respiratory support for neonates",
        product: {
          slug: "nicu-cpap-machine",
          name: "NICU CPAP Machine",
          tagline: "Gentle respiratory support for tiny lungs",
          description:
            "A bubble/ventilator-driven CPAP system delivering non-invasive respiratory support to neonates with respiratory distress, with precise pressure and oxygen blending control.",
          features: [
            "Adjustable CPAP pressure & FiO2 blending",
            "Heated humidification circuit",
            "Neonatal nasal prong / mask interface",
            "Compact, trolley-mounted design",
          ],
          specs: [
            { label: "Pressure Range", value: "0 – 10 cmH2O (typical)" },
            { label: "Oxygen Blending", value: "21% – 100% FiO2" },
            { label: "Humidification", value: "Heated circuit" },
          ],
          icon: "Wind",
        },
      },
      {
        slug: "phototherapy-unit",
        name: "Phototherapy Unit",
        blurb: "LED phototherapy for neonatal jaundice",
        product: {
          slug: "phototherapy-unit",
          name: "Phototherapy Unit with Baby Bassinet Trolley",
          tagline: "Effective, low-heat jaundice management",
          description:
            "An LED phototherapy unit mounted over a mobile bassinet trolley, delivering effective blue-light irradiance for neonatal jaundice management with minimal heat transfer to the infant.",
          features: [
            "High-irradiance blue LED array",
            "Height-adjustable overhead arm",
            "Mobile bassinet trolley with eye-protection shield",
            "Low heat emission, energy-efficient LEDs",
          ],
          specs: [
            { label: "Light Source", value: "Blue LED array, ~450–470nm" },
            { label: "Mounting", value: "Height-adjustable overhead arm" },
            { label: "Trolley", value: "Mobile bassinet with castors" },
          ],
          icon: "Sun",
        },
      },
      {
        slug: "neonatal-resuscitation",
        name: "Resuscitation & Suction",
        blurb: "Emergency airway & suction equipment for newborns",
        product: {
          slug: "neonatal-resuscitation",
          name: "Neonatal Resuscitation Kit & Suction Machine",
          tagline: "Ready for the critical first moments",
          description:
            "A complete neonatal resuscitation set-up pairing a manual resuscitation kit with an automatic suction machine, organised on a mobile trolley for rapid response in labour rooms and NICUs.",
          features: [
            "Neonatal resuscitation bag & mask set",
            "Automatic electric suction with regulator",
            "Mobile trolley with instrument tray",
            "Autoclavable suction jars & tubing",
          ],
          specs: [
            { label: "Suction Vacuum", value: "0 – 300 mmHg (neonatal range)" },
            {
              label: "Resuscitation Set",
              value: "Bag, mask & airway sizes 0/1",
            },
            { label: "Mounting", value: "Mobile trolley" },
          ],
          icon: "Syringe",
        },
      },
      {
        slug: "baby-weighing-scale",
        name: "Baby Weighing Scale",
        blurb: "Digital weighing scales for newborns & infants",
        product: {
          slug: "baby-weighing-scale",
          name: "Digital Baby Weighing Scale",
          tagline: "Accurate weight tracking from day one",
          description:
            "A digital infant weighing scale with a contoured, easy-to-clean tray and precision load cells, used for routine weight monitoring in nurseries, NICUs and paediatric OPDs.",
          features: [
            "High-precision digital load cell",
            "Contoured, wipeable weighing tray",
            "Tare & hold function for active infants",
            "Battery & mains operation",
          ],
          specs: [
            { label: "Capacity", value: "Up to 20 kg" },
            { label: "Resolution", value: "5–10 g" },
            { label: "Display", value: "Digital LCD with hold/tare" },
          ],
          icon: "Weight",
        },
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug: string, subcategorySlug: string) {
  const category = getCategory(categorySlug);
  const subcategory = category?.subcategories.find(
    (s) => s.slug === subcategorySlug,
  );
  return { category, subcategory };
}

export const allProductCount = categories.reduce(
  (sum, c) => sum + c.subcategories.length,
  0,
);
