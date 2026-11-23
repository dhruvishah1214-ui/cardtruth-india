export interface ReturnStructure {
  basePercent: number;
  maxPercent: number;
  rewardType: 'Direct Cashback' | 'Flights & Hotels' | 'Air Miles' | 'Milestone Vouchers' | 'Reward Points';
  pointValueTravel?: string;
  pointValueCash?: string;
  multiplierDetail: string;
  monthlyCap: string;
  finePrintTrap: string;
}

export interface CreditCard {
  id: string;
  name: string;
  bank: 'HDFC' | 'SBI' | 'Axis' | 'ICICI' | 'IDFC FIRST' | 'IndusInd' | 'Yes Bank' | 'Amex' | 'HSBC' | 'Federal Bank' | 'AU Bank' | 'Standard Chartered' | 'Kotak' | 'RBL' | 'BOB';
  network: 'Visa' | 'Mastercard' | 'RuPay' | 'Amex' | 'Diners Club';
  tier: 'Beginner' | 'Mid-Tier' | 'Premium' | 'Super-Premium';
  cardType: 'Cashback' | 'Travel' | 'RuPay UPI' | 'Shopping' | 'Milestone & Vouchers' | 'Zero Forex';
  joiningFee: number;
  annualFee: number;
  isLTF: boolean;
  feeWaiverSpend: number | null;
  forexMarkup: number;
  netReturnValueScore: number;
  netReturnRate: string;
  netReturnSummary: string;
  returnStructure?: ReturnStructure;
  // Bank Account & Relationship Requirement
  accountRequirement: {
    isAccountNeeded: boolean;
    tierName: string; // e.g. "No Account Needed (Open to All)" or "Requires Axis Burgundy"
    details: string; // e.g. "₹10L AQB or ₹30L TRV required"
  };
  loungeAccess: {
    domesticQuarterly: number;
    internationalYearly: number;
    spendRequiredPreviousQuarter: number;
    provider: string;
    notes?: string;
  };
  rupayUPI: boolean;
  upiRewardRate?: string;
  salaryRequirementMonthly?: number;
  isFDSecured?: boolean;
  minFDAmount?: number;
  welcomeBonus: string;
  keyMilestones: string[];
  rewardHighlights: {
    baseRate: string;
    accelerated: string;
    caps?: string;
  };
  exclusions: string[];
  validityStatus: {
    status: 'Verified Active' | 'Devalued' | 'Invite Only' | 'FD Secured Only';
    badgeColor: 'emerald' | 'amber' | 'blue' | 'purple';
    lastVerifiedDate: string;
    mitcRef: string;
    devaluationAlert?: string;
  };
  bestFor: string;
  cardArt: {
    bgGradient: string;
    textColor: string;
    accentColor: string;
    pattern: 'brushed-metal' | 'carbon-weave' | 'aurora' | 'velvet-matte' | 'minimal-frost' | 'gold-foil';
    chipColor: 'gold' | 'silver';
  };
}

export const CREDIT_CARDS: CreditCard[] = [
  // 1. HDFC Infinia Metal (Rank 1)
  {
    id: 'hdfc-infinia',
    name: 'Infinia Metal Edition',
    bank: 'HDFC',
    network: 'Visa',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 12500,
    annualFee: 12500,
    isLTF: false,
    feeWaiverSpend: 1000000,
    forexMarkup: 2.0,
    netReturnValueScore: 99,
    netReturnRate: '3.3% – 33.3%',
    netReturnSummary: '₹60,000+ to ₹1.5L/yr (1:1 flight & 5-star hotel redemptions)',
    returnStructure: {
      basePercent: 0.83,
      maxPercent: 2.5,
      rewardType: 'Reward Points',
      multiplierDetail: "3X points on offline spends (0.83%), 6X online up to ₹30k (1.67%), 10X points on spends above ₹30k/month (2.5% return with points that never expire).",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All / Existing IDFC Customers',
      details: 'Eligibility requires ₹36L/yr income or upgrade from Select card.'
    },
    loungeAccess: {
      domesticQuarterly: 4,
      internationalYearly: 16,
      spendRequiredPreviousQuarter: 20000,
      provider: 'DreamFolks / Priority Pass',
      notes: "Includes airport SPA access! Validated upon ₹20k spend in previous calendar month."
    },
    rupayUPI: false,
    
    salaryRequirementMonthly: 300000,
    welcomeBonus: "₹500 gift voucher on ₹15k spend in first 90 days + 5% cashback on first EMI transaction.",
    keyMilestones: ["10X points (2.5% value) on all incremental spends beyond ₹30,000 every billing cycle.","Points never expire; redeem for cash credit or brand vouchers at 1 pt = ₹0.25."],
    rewardHighlights: {
      baseRate: '0.83% (3 Reward Points per ₹150)',
      accelerated: '2.5% (10 Reward Points per ₹150 above ₹30k/mo)',
      caps: 'No expiry on points; 1 reward point = ₹0.25'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Government payments earn 1X point only"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'IDFC/MITC/WLTH-2026/V4'
    },
    bestFor: "Lifetime Free luxury travel, international lounges & airport spa access without annual fee burden.",
    cardArt: {
      bgGradient: 'from-amber-900 via-stone-900 to-black',
      textColor: 'text-amber-200',
      accentColor: '#d97706',
      pattern: 'carbon-weave',
      chipColor: 'gold'
    }
  },
  {
    id: 'indusind-eazydiner',
    name: 'IndusInd EazyDiner Credit Card',
    bank: 'IndusInd',
    network: 'Visa',
    tier: 'Mid-Tier',
    cardType: 'Shopping',
    joiningFee: 1999,
    annualFee: 1999,
    isLTF: false,
    feeWaiverSpend: 300000,
    forexMarkup: 3.5,
    netReturnValueScore: 84,
    netReturnRate: '3.0% – 25.0%',
    netReturnSummary: "The undisputed king of restaurant dining discounts. Instant extra 25% off up to ₹1,000 via PayEazy (stacks with restaurant discounts up to 50%), free Prime membership, and 2 free movie tickets monthly.",
    returnStructure: {
      basePercent: 0.8,
      maxPercent: 25,
      rewardType: 'Reward Points',
      multiplierDetail: "10 Reward Points per ₹100 on dining/shopping. Extra 25% discount (up to ₹1,000) on dining bills via EazyDiner PayEazy.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'No IndusInd bank account required.'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'DreamFolks',
      notes: "2 complimentary domestic lounge visits per calendar quarter with no spend hurdle."
    },
    rupayUPI: false,
    
    salaryRequirementMonthly: 50000,
    welcomeBonus: "1-Year EazyDiner Prime Membership (worth ₹2,950) + 2,000 EazyPoints + ₹1,000 The Postcard Hotel voucher.",
    keyMilestones: ["Free 1-Year EazyDiner Prime membership renewed every year upon paying annual fee.","2 free movie tickets every month on BookMyShow (up to ₹200 per ticket)."],
    rewardHighlights: {
      baseRate: '0.8% (4 points per ₹100)',
      accelerated: '25% extra discount on dining + 10 points/₹100',
      caps: 'Max discount ₹1,000 per transaction on PayEazy'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Jewelry transactions"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'INDUS/MITC/EZD-2026'
    },
    bestFor: "Frequent foodies and weekend restaurant diners wanting instant 25%–50% bill slashes.",
    cardArt: {
      bgGradient: 'from-orange-800 via-stone-900 to-black',
      textColor: 'text-orange-200',
      accentColor: '#ea580c',
      pattern: 'brushed-metal',
      chipColor: 'silver'
    }
  },
  {
    id: 'icici-rubyx',
    name: 'ICICI Bank Rubyx Dual Card',
    bank: 'ICICI',
    network: 'Mastercard',
    tier: 'Mid-Tier',
    cardType: 'Shopping',
    joiningFee: 3000,
    annualFee: 2000,
    isLTF: false,
    feeWaiverSpend: 300000,
    forexMarkup: 3.5,
    netReturnValueScore: 71,
    netReturnRate: '1.0% – 4.0%',
    netReturnSummary: "Popular dual card setup (Mastercard + Amex on single credit limit). Offers 2 free BookMyShow movie tickets per month (save ₹6,000/yr), 2 domestic airport lounges/quarter, and LTF access via Alumni scheme.",
    returnStructure: {
      basePercent: 1,
      maxPercent: 4,
      rewardType: 'Reward Points',
      multiplierDetail: "4 PAYBACK/ICICI points per ₹100 on international/travel, 2 points per ₹100 domestic. 1 point = ₹0.25.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All / LTF on Alumni Program',
      details: 'Offered 100% Lifetime Free to alumni of Tier-2 and Tier-1 engineering/MBA colleges.'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 50000,
      provider: 'DreamFolks',
      notes: "2 complimentary domestic lounges per calendar quarter upon spending ₹50,000 in previous calendar quarter."
    },
    rupayUPI: false,
    
    salaryRequirementMonthly: 50000,
    welcomeBonus: "Shopping & travel vouchers worth ₹5,000+ within 45 days of joining fee payment.",
    keyMilestones: ["Buy 1 Get 1 free movie ticket up to ₹250 on BookMyShow (twice a month).","Fee waived on spending ₹3,00,000 in previous year."],
    rewardHighlights: {
      baseRate: '1.0% on Amex variant (4 points/₹100)',
      accelerated: '4.0% on milestone slabs and BOGO movies',
      caps: '2 free movie tickets per month'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Government tax payments"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'ICICI/MITC/RBX-2026'
    },
    bestFor: "Movie enthusiasts and alumni seeking free BOGO cinema tickets and secondary lounge backups.",
    cardArt: {
      bgGradient: 'from-rose-900 via-stone-900 to-black',
      textColor: 'text-rose-200',
      accentColor: '#e11d48',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },
  {
    id: 'sbi-aurum',
    name: 'SBI Card AURUM Metal',
    bank: 'SBI',
    network: 'Mastercard',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 9999,
    annualFee: 9999,
    isLTF: false,
    feeWaiverSpend: 1200000,
    forexMarkup: 1.99,
    netReturnValueScore: 89,
    netReturnRate: '2.0% – 8.5%',
    netReturnSummary: "SBI’s invitation-only matte black metal flagship. Unlimited international and domestic airport lounge access with 4 complimentary guest visits/year, 4 free movie tickets monthly on BookMyShow (₹1,000/mo), and low 1.99% forex markup.",
    returnStructure: {
      basePercent: 2,
      maxPercent: 8.5,
      rewardType: 'Reward Points',
      multiplierDetail: "4 Reward Points per ₹100 on all spends (1 pt = ₹0.25 = 1% base return), 4X on flights/hotels (4% return). Milestone vouchers add up to ₹25,000 annually.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Invite Only',
      details: 'Strictly invitation-based for high-net-worth individuals or SBI Wealth customers.'
    },
    loungeAccess: {
      domesticQuarterly: 999,
      internationalYearly: 999,
      spendRequiredPreviousQuarter: 0,
      provider: 'DreamFolks / Priority Pass',
      notes: "Unlimited domestic and international lounge visits with 4 complimentary guest visits included per year."
    },
    rupayUPI: false,
    
    salaryRequirementMonthly: 350000,
    welcomeBonus: "40,000 Reward Points (worth ₹10,000) credited immediately upon annual fee payment.",
    keyMilestones: ["4 free movie tickets on BookMyShow every month (up to ₹250 per ticket = ₹12,000/yr).","Tata CLiQ Luxury voucher worth ₹10,000 on spending ₹10,00,000 in a year."],
    rewardHighlights: {
      baseRate: '1.0% – 2.0% (4 Reward Points per ₹100)',
      accelerated: '8.5% with milestone vouchers and BOGO cinema',
      caps: 'Unlimited reward point earnings'
    },
    exclusions: ["Fuel surcharge waiver up to ₹250/mo; rent and wallet transactions excluded from rewards"],
    validityStatus: {
      status: 'Invite Only',
      badgeColor: 'purple',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'SBI/MITC/AURUM-2026'
    },
    bestFor: "HNIs and ultra-frequent luxury fliers seeking unlimited global lounges with guest allowances.",
    cardArt: {
      bgGradient: 'from-stone-900 via-neutral-900 to-black',
      textColor: 'text-amber-300',
      accentColor: '#f59e0b',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },
  {
    id: 'axis-myzone',
    name: 'Axis Bank My Zone Credit Card',
    bank: 'Axis',
    network: 'RuPay',
    tier: 'Beginner',
    cardType: 'RuPay UPI',
    joiningFee: 500,
    annualFee: 500,
    isLTF: false,
    feeWaiverSpend: 200000,
    forexMarkup: 3.5,
    netReturnValueScore: 73,
    netReturnRate: '0.8% – 12.0%',
    netReturnSummary: "Widely issued entry-level card featuring flat ₹120 off on Swiggy food delivery (twice/month on ₹500 spend), free 1-year SonyLIV Premium subscription, Buy 1 Get 1 on Paytm Movies, and RuPay UPI QR payments.",
    returnStructure: {
      basePercent: 0.8,
      maxPercent: 12,
      rewardType: 'Reward Points',
      multiplierDetail: "4 EDGE points per ₹200 spent (0.4% base return). Flat ₹120 discount on Swiggy on ₹500 order = 24% effective discount on dining.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All / Often LTF',
      details: 'Frequently issued Lifetime Free during digital promotional campaigns.'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 50000,
      provider: 'DreamFolks',
      notes: "1 complimentary domestic lounge visit per calendar quarter upon spending ₹50,000 in previous 3 months."
    },
    rupayUPI: true,
    upiRewardRate: '0.4% base in EDGE points',
    salaryRequirementMonthly: 25000,
    welcomeBonus: "Annual SonyLIV Premium subscription voucher (worth ₹999) on first spend within 30 days.",
    keyMilestones: ["Flat ₹120 off on Swiggy food delivery twice a month (coupon: AXIS24).","Buy 1 Get 1 Free on Paytm Movies up to ₹200 discount per ticket."],
    rewardHighlights: {
      baseRate: '0.4% – 0.8%',
      accelerated: 'Flat ₹120 discount on Swiggy twice monthly',
      caps: 'Max 2 Swiggy discounts per calendar month'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Insurance and educational fees"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'AXIS/MITC/MYZ-2026'
    },
    bestFor: "College graduates and young professionals wanting Swiggy savings, SonyLIV, and RuPay UPI.",
    cardArt: {
      bgGradient: 'from-fuchsia-900 via-stone-900 to-black',
      textColor: 'text-fuchsia-200',
      accentColor: '#d946ef',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },
  {
    id: 'sbi-irctc-rupay',
    name: 'IRCTC SBI Card Premier RuPay',
    bank: 'SBI',
    network: 'RuPay',
    tier: 'Mid-Tier',
    cardType: 'RuPay UPI',
    joiningFee: 1499,
    annualFee: 1499,
    isLTF: false,
    feeWaiverSpend: 200000,
    forexMarkup: 3.5,
    netReturnValueScore: 76,
    netReturnRate: '1.0% – 10.0%',
    netReturnSummary: "The #1 rail travel card in India. Earn up to 10% value back in reward points on AC train ticket bookings on irctc.co.in, 8 complimentary IRCTC Executive Railway Lounge visits per year, and zero 1% transaction surcharge.",
    returnStructure: {
      basePercent: 1,
      maxPercent: 10,
      rewardType: 'Reward Points',
      multiplierDetail: "Up to 10% value back (as reward points) on AC1, AC2, AC3, and Executive Chair Car tickets on IRCTC website and app. 1 reward point = ₹1 for train tickets.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'No SBI bank account required.'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'IRCTC Railway Lounges',
      notes: "8 complimentary railway lounge visits per year (max 2 per quarter) at New Delhi, Agra, Ahmedabad, Madurai, etc."
    },
    rupayUPI: true,
    upiRewardRate: '1.0% back on retail UPI QR spends',
    salaryRequirementMonthly: 30000,
    welcomeBonus: "1,500 Reward Points (worth ₹1,500 for train ticket redemption) on payment of joining fee.",
    keyMilestones: ["1% transaction fee waiver on IRCTC ticket booking.","2,500 reward points milestone on annual spends of ₹1,00,000."],
    rewardHighlights: {
      baseRate: '1.0% on non-fuel retail spends',
      accelerated: '10.0% back in points on IRCTC train tickets',
      caps: 'Points redeemable 1:1 against train bookings'
    },
    exclusions: ["Fuel surcharge waiver up to ₹100/mo; rent and utility exclusions apply"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'SBI/MITC/IRCTC-2026'
    },
    bestFor: "Frequent railway travelers, government commuters, and RuPay UPI rail ticket bookers.",
    cardArt: {
      bgGradient: 'from-blue-900 via-stone-900 to-black',
      textColor: 'text-sky-200',
      accentColor: '#0284c7',
      pattern: 'brushed-metal',
      chipColor: 'silver'
    }
  },
  {
    id: 'icici-coral-rupay',
    name: 'ICICI Coral RuPay Credit Card',
    bank: 'ICICI',
    network: 'RuPay',
    tier: 'Beginner',
    cardType: 'RuPay UPI',
    joiningFee: 500,
    annualFee: 500,
    isLTF: false,
    feeWaiverSpend: 150000,
    forexMarkup: 3.5,
    netReturnValueScore: 70,
    netReturnRate: '0.5% – 2.0%',
    netReturnSummary: "ICICI’s primary UPI-linked credit card. Seamlessly link to Google Pay, PhonePe, and Paytm for merchant QR payments with 2 reward points per ₹100 and 1 domestic airport lounge + 1 railway lounge per quarter.",
    returnStructure: {
      basePercent: 0.5,
      maxPercent: 2,
      rewardType: 'Reward Points',
      multiplierDetail: "2 ICICI Reward Points per ₹100 on retail and UPI spends (0.5% base return). 25% off up to ₹100 on BookMyShow.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All / Pre-approved to ICICI holders',
      details: 'Offered Lifetime Free instantly in iMobile app for existing ICICI cardholders.'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 50000,
      provider: 'DreamFolks',
      notes: "1 complimentary domestic airport lounge + 1 railway lounge visit per quarter upon ₹50k previous quarter spend."
    },
    rupayUPI: true,
    upiRewardRate: '0.5% return (2 reward points per ₹100)',
    salaryRequirementMonthly: 25000,
    welcomeBonus: "Bonus reward points on first transaction within 30 days.",
    keyMilestones: ["25% discount up to ₹100 on BookMyShow (twice a month).","Fee waived on spending ₹1,50,000 in previous year."],
    rewardHighlights: {
      baseRate: '0.5% (2 points per ₹100)',
      accelerated: '25% discount on BookMyShow tickets',
      caps: 'Max 2 BookMyShow discounts per month'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Government payments"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'ICICI/MITC/CORAL-2026'
    },
    bestFor: "Everyday RuPay UPI barcode scanning and cheap BookMyShow weekend cinema discounts.",
    cardArt: {
      bgGradient: 'from-amber-800 via-stone-900 to-black',
      textColor: 'text-amber-100',
      accentColor: '#f59e0b',
      pattern: 'carbon-weave',
      chipColor: 'gold'
    }
  },
  {
    id: 'sbi-air-india-signature',
    name: 'Air India SBI Signature Card',
    bank: 'SBI',
    network: 'Visa',
    tier: 'Premium',
    cardType: 'Travel',
    joiningFee: 4999,
    annualFee: 4999,
    isLTF: false,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 82,
    netReturnRate: '2.0% – 30.0%',
    netReturnSummary: "The legacy airline co-branded card offering massive value back on Air India flights: up to 30 Flying Returns reward points per ₹100 spent, 20,000 welcome bonus points, and 8 domestic airport lounges per year.",
    returnStructure: {
      basePercent: 2,
      maxPercent: 30,
      rewardType: 'Reward Points',
      multiplierDetail: "Earn 4 Reward Points per ₹100 on normal spends, up to 30 points per ₹100 on Air India ticket bookings on website/app. 1 point = 1 Air India Flying Returns point.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'Air India Flying Returns member ID required for point linkage.'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'Visa Lounge Program',
      notes: "8 complimentary domestic airport lounge visits per year (max 2 per calendar quarter)."
    },
    rupayUPI: false,
    
    salaryRequirementMonthly: 100000,
    welcomeBonus: "20,000 Flying Returns Reward Points upon payment of joining fee within 15 days.",
    keyMilestones: ["Up to 1,00,000 bonus Flying Returns points on hitting annual spend milestones of ₹5L, ₹10L, and ₹20L.","Complimentary Air India Flying Returns Silver Tier status."],
    rewardHighlights: {
      baseRate: '2.0% (4 points per ₹100)',
      accelerated: 'Up to 30 points per ₹100 on Air India bookings',
      caps: 'Points convert directly to Air India award flights'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Cash advance"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'SBI/MITC/AI-2026'
    },
    bestFor: "Frequent Air India and Star Alliance business fliers booking corporate and personal air tickets.",
    cardArt: {
      bgGradient: 'from-red-950 via-stone-900 to-black',
      textColor: 'text-amber-200',
      accentColor: '#dc2626',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },
  {
    id: 'hdfc-tata-neu-plus',
    name: 'Tata Neu Plus HDFC Bank RuPay',
    bank: 'HDFC',
    network: 'RuPay',
    tier: 'Beginner',
    cardType: 'RuPay UPI',
    joiningFee: 499,
    annualFee: 499,
    isLTF: false,
    feeWaiverSpend: 100000,
    forexMarkup: 3.5,
    netReturnValueScore: 75,
    netReturnRate: '1.0% – 7.0%',
    netReturnSummary: "Entry-level RuPay co-brand giving 4.99% NeuCoins on Tata Neu (BigBasket, 1mg, Croma, Air India, Westside) + 1% NeuCoins on non-Tata spends and merchant RuPay UPI QR scans.",
    returnStructure: {
      basePercent: 1,
      maxPercent: 7,
      rewardType: 'Reward Points',
      multiplierDetail: "2% NeuCoins on Tata brands + 5% extra on Tata Neu app with NeuPass. 1% on other merchant spends & UPI.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'No HDFC bank account required.'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'Visa/RuPay Lounge Access',
      notes: "4 complimentary domestic airport lounge visits per calendar year (1 per quarter)."
    },
    rupayUPI: true,
    upiRewardRate: '1.0% NeuCoins on UPI merchant transactions',
    salaryRequirementMonthly: 25000,
    welcomeBonus: "499 NeuCoins on first transaction within 30 days of issuance.",
    keyMilestones: ["Fee waived on spending ₹1,00,000 in a membership year.","1 NeuCoin = ₹1 at BigBasket, 1mg, Croma, and Westside."],
    rewardHighlights: {
      baseRate: '1.0% NeuCoins on retail & UPI',
      accelerated: '4.99% – 7.0% on Tata Neu ecosystem',
      caps: 'NeuCoins valid for 365 days from date of credit'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Government payments"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'HDFC/MITC/TNP-2026'
    },
    bestFor: "Daily BigBasket grocery buyers and Croma electronics shoppers using RuPay UPI.",
    cardArt: {
      bgGradient: 'from-purple-900 via-indigo-950 to-black',
      textColor: 'text-purple-200',
      accentColor: '#9333ea',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },
  {
    id: 'sc-smart',
    name: 'Standard Chartered Smart Credit Card',
    bank: 'Standard Chartered',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Cashback',
    joiningFee: 499,
    annualFee: 499,
    isLTF: false,
    feeWaiverSpend: 120000,
    forexMarkup: 3.5,
    netReturnValueScore: 74,
    netReturnRate: '1.0% – 2.0%',
    netReturnSummary: "Clean, no-nonsense online cashback card. Earn flat 2% cashback on all online spends (capped at ₹1,000 per month) and 1% on all offline spends without complex category restrictions.",
    returnStructure: {
      basePercent: 1,
      maxPercent: 2,
      rewardType: 'Reward Points',
      multiplierDetail: "2% cashback on all online ecommerce transactions (max ₹1,000/mo). 1% cashback on offline retail transactions.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'No Standard Chartered account required.'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None',
      notes: "No airport lounge access included (pure cashback focus)."
    },
    rupayUPI: false,
    
    salaryRequirementMonthly: 30000,
    welcomeBonus: "₹500 BookMyShow voucher or statement credit on spending ₹1,000 within 30 days.",
    keyMilestones: ["Fee waived on annual spends exceeding ₹1,20,000.","Extended interest-free period of up to 90 days for new cardholders."],
    rewardHighlights: {
      baseRate: '1.0% offline cashback',
      accelerated: '2.0% on all online spends',
      caps: 'Max ₹1,000 cashback per monthly statement'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Jewelry and crypto"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'SCB/MITC/SMRT-2026'
    },
    bestFor: "Straightforward 2% cashback on everyday online orders without coupon hunting.",
    cardArt: {
      bgGradient: 'from-emerald-900 via-teal-950 to-black',
      textColor: 'text-emerald-200',
      accentColor: '#10b981',
      pattern: 'brushed-metal',
      chipColor: 'silver'
    }
  },
  {
    id: 'bob-premier',
    name: 'BOB Premier Credit Card',
    bank: 'BOB',
    network: 'Visa',
    tier: 'Mid-Tier',
    cardType: 'Shopping',
    joiningFee: 1000,
    annualFee: 1000,
    isLTF: false,
    feeWaiverSpend: 120000,
    forexMarkup: 3.5,
    netReturnValueScore: 72,
    netReturnRate: '1.0% – 5.0%',
    netReturnSummary: "Bank of Baroda’s popular mid-tier card offering 5X reward points (equivalent to 2.5% return) on dining, travel, and international spends, with 1 complimentary domestic airport lounge visit per quarter.",
    returnStructure: {
      basePercent: 0.5,
      maxPercent: 2.5,
      rewardType: 'Reward Points',
      multiplierDetail: "10 Reward Points per ₹100 on dining, travel, and international transactions (1 pt = ₹0.25). 2 points per ₹100 on standard spends.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'No BOB bank account required.'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'DreamFolks',
      notes: "1 complimentary domestic airport lounge visit per calendar quarter with no spend hurdle."
    },
    rupayUPI: false,
    
    salaryRequirementMonthly: 40000,
    welcomeBonus: "1,000 bonus reward points on spending ₹5,000 within 60 days of issuance.",
    keyMilestones: ["Annual fee waived on spending ₹1,20,000 in previous year.","Zero fuel surcharge across all petrol pumps in India."],
    rewardHighlights: {
      baseRate: '0.5% (2 points per ₹100)',
      accelerated: '2.5% (10 points per ₹100 on travel & dining)',
      caps: 'Max 1,025 points per month under 5X category'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Education payments"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'BOB/MITC/PRM-2026'
    },
    bestFor: "PSU banking customers wanting affordable dining rewards and domestic lounge access.",
    cardArt: {
      bgGradient: 'from-amber-950 via-stone-900 to-black',
      textColor: 'text-amber-200',
      accentColor: '#f59e0b',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },
  {
    id: 'rbl-play',
    name: 'RBL Play Credit Card',
    bank: 'RBL',
    network: 'Mastercard',
    tier: 'Beginner',
    cardType: 'Shopping',
    joiningFee: 500,
    annualFee: 500,
    isLTF: false,
    feeWaiverSpend: 150000,
    forexMarkup: 3.5,
    netReturnValueScore: 73,
    netReturnRate: '1.0% – 10.0%',
    netReturnSummary: "Created in official partnership with BookMyShow. Gives 2 free movie tickets (worth ₹250 each = ₹500/mo) every month upon spending just ₹5,000 in that billing cycle, plus ₹100 off on food & beverage at cinemas.",
    returnStructure: {
      basePercent: 0.5,
      maxPercent: 10,
      rewardType: 'Reward Points',
      multiplierDetail: "2 free BookMyShow movie tickets (up to ₹250 each) on monthly spend of ₹5,000 = 10% effective return on cinema tickets.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'BookMyShow account required for voucher redemption.'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None',
      notes: "No airport lounge access (entertainment focused card)."
    },
    rupayUPI: false,
    
    salaryRequirementMonthly: 25000,
    welcomeBonus: "2 free movie tickets worth ₹500 on first transaction on BookMyShow within 30 days.",
    keyMilestones: ["2 free movie tickets worth ₹500 every single month on spending ₹5,000 in billing cycle.","₹100 discount on cinema Food & Beverage snacks."],
    rewardHighlights: {
      baseRate: '1 point per ₹100',
      accelerated: '2 free movie tickets (worth ₹6,000/yr) on ₹5k spend',
      caps: '2 free tickets per billing cycle'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Cash advance"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'RBL/MITC/PLAY-2026'
    },
    bestFor: "Moviegoers wanting guaranteed ₹500 monthly BookMyShow savings with minimal ₹5,000 spend.",
    cardArt: {
      bgGradient: 'from-rose-950 via-stone-900 to-black',
      textColor: 'text-rose-200',
      accentColor: '#f43f5e',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },
  {
    id: 'au-altura-plus',
    name: 'AU Small Finance Bank Altura Plus',
    bank: 'AU Bank',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Cashback',
    joiningFee: 499,
    annualFee: 499,
    isLTF: false,
    feeWaiverSpend: 80000,
    forexMarkup: 3.5,
    netReturnValueScore: 72,
    netReturnRate: '1.0% – 3.0%',
    netReturnSummary: "Accessible entry card from AU Small Finance Bank offering 2X reward points on all online retail shopping, 500 bonus reward points on monthly spend of ₹20,000, and 2 complimentary domestic airport lounges per quarter.",
    returnStructure: {
      basePercent: 0.75,
      maxPercent: 3,
      rewardType: 'Reward Points',
      multiplierDetail: "1.5 Reward Points per ₹100 on retail, 2X on online shopping. 500 bonus points on ₹20,000 monthly spend.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'No AU Bank account required.'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'Visa Lounge Program',
      notes: "2 complimentary domestic airport lounge visits per calendar quarter with no spend requirement."
    },
    rupayUPI: false,
    
    salaryRequirementMonthly: 25000,
    welcomeBonus: "500 bonus reward points on spending ₹10,000 within 60 days of issuance.",
    keyMilestones: ["Fee waived on spending ₹80,000 in a year.","500 bonus reward points every month on spending ₹20,000."],
    rewardHighlights: {
      baseRate: '0.75% – 1.5%',
      accelerated: '3.0% with milestone bonus points',
      caps: 'Max 1,000 bonus points per month'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Insurance"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'AU/MITC/ALTP-2026'
    },
    bestFor: "Tier-2 and Tier-3 city residents looking for an affordable card with 2 free lounges per quarter.",
    cardArt: {
      bgGradient: 'from-orange-950 via-stone-900 to-black',
      textColor: 'text-amber-200',
      accentColor: '#f97316',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },
  {
    id: 'yes-reserv',
    name: 'YES Reserv Credit Card',
    bank: 'Yes Bank',
    network: 'Mastercard',
    tier: 'Premium',
    cardType: 'Travel',
    joiningFee: 1999,
    annualFee: 1999,
    isLTF: false,
    feeWaiverSpend: 300000,
    forexMarkup: 1.75,
    netReturnValueScore: 80,
    netReturnRate: '1.5% – 6.0%',
    netReturnSummary: "Yes Bank’s premium travel and lifestyle card offering 3X reward points on travel bookings and dining, low 1.75% forex markup, 3 domestic airport lounge visits per quarter, and 6 complimentary international lounge visits annually.",
    returnStructure: {
      basePercent: 1.5,
      maxPercent: 6,
      rewardType: 'Reward Points',
      multiplierDetail: "6 Reward Points per ₹200 on standard spends (0.75%), 24 points per ₹200 on travel & dining (3.0% return). Points redeemable against flights & hotels.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'Yes Bank relationship preferred but open to all.'
    },
    loungeAccess: {
      domesticQuarterly: 3,
      internationalYearly: 6,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass / Mastercard Lounge',
      notes: "3 complimentary domestic lounges per quarter and 6 international lounge visits per year via Priority Pass."
    },
    rupayUPI: false,
    
    salaryRequirementMonthly: 120000,
    welcomeBonus: "12,000 Reward Points (worth ₹3,000) on spending ₹30,000 within 90 days.",
    keyMilestones: ["Fee waived on spending ₹3,00,000 in previous year.","4 complimentary golf rounds or golf lessons per calendar year."],
    rewardHighlights: {
      baseRate: '0.75% – 1.5%',
      accelerated: '3.0% – 6.0% on travel & dining portals',
      caps: 'Points never expire'
    },
    exclusions: ["Fuel surcharge waiver up to ₹250/mo; rent and wallet exclusions apply"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'YES/MITC/RSV-2026'
    },
    bestFor: "Frequent corporate travelers seeking international lounges, golf access, and low forex.",
    cardArt: {
      bgGradient: 'from-blue-950 via-slate-900 to-black',
      textColor: 'text-blue-200',
      accentColor: '#3b82f6',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },
  {
    id: 'sbi-elite',
    name: 'SBI Card ELITE',
    bank: 'SBI',
    network: 'Visa',
    tier: 'Premium',
    cardType: 'Shopping',
    joiningFee: 4999,
    annualFee: 4999,
    isLTF: false,
    feeWaiverSpend: 1000000,
    forexMarkup: 1.99,
    netReturnValueScore: 81,
    netReturnRate: '2.0% – 6.0%',
    netReturnSummary: "SBI’s legacy premium card giving 2 free movie tickets per month on BookMyShow (up to ₹250 each = ₹6,000/yr), 2 domestic airport lounges/quarter, 6 international Priority Pass visits/year, and low 1.99% forex markup.",
    returnStructure: {
      basePercent: 1,
      maxPercent: 6,
      rewardType: 'Reward Points',
      multiplierDetail: "5X points (2.5% return) on dining, departmental stores, and groceries. 2 free movie tickets monthly on BookMyShow.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'No SBI account required.'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 6,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass / Visa Lounge',
      notes: "2 complimentary domestic lounges per quarter + 6 complimentary international lounge visits per year via Priority Pass."
    },
    rupayUPI: false,
    salaryRequirementMonthly: 60000,
    welcomeBonus: "Welcome e-gift voucher worth ₹5,000 from brands like Yatra, Hush Puppies, Pantaloons, or Shoppers Stop.",
    keyMilestones: ["2 free movie tickets on BookMyShow every month (up to ₹250 per ticket).","Up to 10,000 bonus points on annual spends of ₹3L and ₹4L."],
    rewardHighlights: {
      baseRate: '1.0% (2 points per ₹100)',
      accelerated: '2.5% (5X on dining & departmental stores)',
      caps: 'Max 2 free movie tickets per month'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Cash advance"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'SBI/MITC/ELT-2026'
    },
    bestFor: "Departmental store shoppers and cinema fans seeking low forex markup.",
    cardArt: {
      bgGradient: 'from-blue-950 via-slate-900 to-black',
      textColor: 'text-sky-200',
      accentColor: '#38bdf8',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },
  {
    id: 'sbi-prime',
    name: 'SBI Card PRIME',
    bank: 'SBI',
    network: 'Mastercard',
    tier: 'Mid-Tier',
    cardType: 'Shopping',
    joiningFee: 2999,
    annualFee: 2999,
    isLTF: false,
    feeWaiverSpend: 300000,
    forexMarkup: 3.5,
    netReturnValueScore: 75,
    netReturnRate: '1.5% – 5.0%',
    netReturnSummary: "Mid-tier staple card offering 10 reward points per ₹100 (2.5% return) on dining, groceries, and movies, 2 domestic airport lounges/quarter, 4 international Priority Pass visits/year, and ₹1,000 Pizza Hut milestone voucher.",
    returnStructure: {
      basePercent: 0.5,
      maxPercent: 5,
      rewardType: 'Reward Points',
      multiplierDetail: "10 Reward Points per ₹100 on dining, groceries, and cinema. 2 points per ₹100 standard. 1 point = ₹0.25.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'No SBI account required.'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 4,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass / Mastercard Lounge',
      notes: "2 complimentary domestic lounges per quarter and 4 international visits per year via Priority Pass."
    },
    rupayUPI: false,
    salaryRequirementMonthly: 40000,
    welcomeBonus: "E-gift voucher worth ₹3,000 from Bata, Pantaloons, Shoppers Stop, or Yatra.",
    keyMilestones: ["₹1,000 Pizza Hut e-voucher on quarterly spend of ₹50,000.","Fee waived on spending ₹3,00,000 in previous year."],
    rewardHighlights: {
      baseRate: '0.5% (2 points per ₹100)',
      accelerated: '2.5% (10 points per ₹100 on groceries/dining)',
      caps: 'Points redeemable on SBI Shop & Smile portal'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Government payments"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'SBI/MITC/PRM-2026'
    },
    bestFor: "Balanced grocery and dining spenders wanting both domestic and international airport lounges.",
    cardArt: {
      bgGradient: 'from-cyan-950 via-slate-900 to-black',
      textColor: 'text-cyan-200',
      accentColor: '#06b6d4',
      pattern: 'brushed-metal',
      chipColor: 'silver'
    }
  },
  {
    id: 'idfc-mayura',
    name: 'IDFC FIRST Mayura Metal Credit Card',
    bank: 'IDFC FIRST',
    network: 'Visa',
    tier: 'Super-Premium',
    cardType: 'Zero Forex',
    joiningFee: 5999,
    annualFee: 5999,
    isLTF: false,
    feeWaiverSpend: null,
    forexMarkup: 0,
    netReturnValueScore: 88,
    netReturnRate: '2.5% – 7.5%',
    netReturnSummary: "Flagship handcrafted metal card engineered for international travelers. Features ZERO (0%) forex markup fee, 4 complimentary domestic & international lounge + airport spa visits per quarter, and 10X reward points.",
    returnStructure: {
      basePercent: 0.83,
      maxPercent: 7.5,
      rewardType: 'Reward Points',
      multiplierDetail: "Zero forex markup on all overseas transactions. 5 Reward Points per ₹150 base (0.83%), 10X points above ₹20k/mo spend. Points never expire.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All',
      details: 'Eligibility requires ₹1.5L/mo salary or high credit score.'
    },
    loungeAccess: {
      domesticQuarterly: 4,
      internationalYearly: 16,
      spendRequiredPreviousQuarter: 20000,
      provider: 'DreamFolks / Priority Pass',
      notes: "4 domestic + 4 international lounge/spa visits per calendar quarter upon spending ₹20k in previous calendar month."
    },
    rupayUPI: false,
    salaryRequirementMonthly: 150000,
    welcomeBonus: "Welcome gift vouchers worth ₹6,000 across premium luxury and travel partners.",
    keyMilestones: ["0% Forex markup saves 3.5%–4.13% on every international transaction.","Complimentary airport meet-and-greet services and golf privileges."],
    rewardHighlights: {
      baseRate: '0.83% – 1.67%',
      accelerated: 'Zero forex markup + 10X points on milestone spend',
      caps: 'Points never expire'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Government tax transactions earn 1X point"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'IDFC/MITC/MYR-2026'
    },
    bestFor: "Frequent foreign tourists and international business travelers seeking 0% forex markup on a heavy metal card.",
    cardArt: {
      bgGradient: 'from-emerald-950 via-stone-900 to-black',
      textColor: 'text-amber-200',
      accentColor: '#10b981',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },
  {
    id: 'federal-celesta',
    name: 'Federal Bank Celesta Visa Infinite',
    bank: 'Federal Bank',
    network: 'Visa',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 3000,
    annualFee: 3000,
    isLTF: false,
    feeWaiverSpend: 300000,
    forexMarkup: 2,
    netReturnValueScore: 82,
    netReturnRate: '1.5% – 5.0%',
    netReturnSummary: "Federal Bank’s top-tier Visa Infinite card offering 3X points on international spends, 2 domestic airport lounges/quarter, 1 international lounge/year, Buy 1 Get 1 on BookMyShow (up to ₹300), and complimentary golf rounds.",
    returnStructure: {
      basePercent: 0.5,
      maxPercent: 5,
      rewardType: 'Reward Points',
      multiplierDetail: "2 points per ₹100 standard (0.5%), 3X on dining and international (1.5%). BOGO movie tickets on BookMyShow save ₹3,600/yr.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Federal Bank Relationship Preferred',
      details: 'Offered to Celesta salary accounts or high-AQB savings holders.'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 4,
      spendRequiredPreviousQuarter: 0,
      provider: 'Visa Infinite Lounge Program',
      notes: "2 complimentary domestic lounges per quarter and 4 international lounges per year."
    },
    rupayUPI: false,
    salaryRequirementMonthly: 150000,
    welcomeBonus: "Amazon Pay gift card worth ₹3,000 on spending ₹10,000 within 30 days.",
    keyMilestones: ["Buy 1 Get 1 free BookMyShow ticket up to ₹300 (once a month).","Fee waived on spending ₹3,00,000 in a year."],
    rewardHighlights: {
      baseRate: '0.5% – 1.0%',
      accelerated: '3X on dining, travel, and international',
      caps: 'Points redeemable on Federal Rewards portal'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Cash withdrawal"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'FED/MITC/CEL-2026'
    },
    bestFor: "Federal Bank high-relationship customers wanting Visa Infinite privileges, golf, and cinema BOGO.",
    cardArt: {
      bgGradient: 'from-amber-950 via-stone-900 to-black',
      textColor: 'text-amber-300',
      accentColor: '#d97706',
      pattern: 'carbon-weave',
      chipColor: 'gold'
    }
  },
  {
    id: 'indusind-pinnacle',
    name: 'IndusInd Pinnacle World Mastercard',
    bank: 'IndusInd',
    network: 'Mastercard',
    tier: 'Super-Premium',
    cardType: 'Shopping',
    joiningFee: 12999,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 83,
    netReturnRate: '1.0% – 2.5%',
    netReturnSummary: "Lifetime Free metal card (after one-time joining fee) tailored for ecommerce and entertainment: 2.5 Reward Points per ₹100 on ecommerce shopping, 3 free movie tickets per month on BookMyShow (up to ₹200 each), and golf access.",
    returnStructure: {
      basePercent: 0.7,
      maxPercent: 2.5,
      rewardType: 'Reward Points',
      multiplierDetail: "2.5 points per ₹100 on online ecommerce purchases (1 pt = ₹1 cash value = 2.5% direct return). 1 point per ₹100 offline.",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All / Pioneer Relationship',
      details: 'One-time joining fee of ₹12,999 + GST; zero renewal fee thereafter (LTF).'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass / Mastercard Lounge',
      notes: "2 complimentary domestic lounges per calendar quarter with no spend hurdle."
    },
    rupayUPI: false,
    salaryRequirementMonthly: 200000,
    welcomeBonus: "Welcome luxury hotel stay voucher or luxury gift vouchers worth ₹12,000+.",
    keyMilestones: ["3 free BookMyShow movie tickets every month (up to ₹200 each = ₹7,200/yr savings).","Zero annual renewal fee for life."],
    rewardHighlights: {
      baseRate: '1.0% (1 point per ₹100 = ₹1 cash)',
      accelerated: '2.5% (2.5 points per ₹100 on ecommerce = ₹2.5 cash)',
      caps: 'Points redeemable 1:1 against statement credit'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Insurance and tax payments"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'INDUS/MITC/PIN-2026'
    },
    bestFor: "High ecommerce spenders wanting a one-time fee card with 1:1 cash reward points and 3 monthly free movies.",
    cardArt: {
      bgGradient: 'from-zinc-900 via-stone-900 to-black',
      textColor: 'text-amber-200',
      accentColor: '#ca8a04',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },
  {
    id: 'axis-neo',
    name: 'Axis Bank Neo Credit Card',
    bank: 'Axis',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Shopping',
    joiningFee: 250,
    annualFee: 250,
    isLTF: false,
    feeWaiverSpend: 100000,
    forexMarkup: 3.5,
    netReturnValueScore: 71,
    netReturnRate: '0.5% – 10.0%',
    netReturnSummary: "Low-cost student and starter card offering 10% off on Blinkit grocery delivery, 10% off on Myntra fashion, and 40% off on Zomato food delivery (up to ₹120 per order).",
    returnStructure: {
      basePercent: 0.5,
      maxPercent: 10,
      rewardType: 'Reward Points',
      multiplierDetail: "1 EDGE point per ₹200 standard. 10% instant discount on Blinkit (up to ₹250/mo) and Myntra (up to ₹500/mo).",
      monthlyCap: 'No cap or standard category limit',
      finePrintTrap: 'Wallet loads, rent, and government transactions excluded from rewards'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Open to All / Often LTF',
      details: 'Widely issued Lifetime Free for first-time credit card applicants.'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None',
      notes: "No airport lounge access (starter shopping card)."
    },
    rupayUPI: false,
    salaryRequirementMonthly: 20000,
    welcomeBonus: "Amazon gift voucher worth ₹250 on first transaction within 30 days.",
    keyMilestones: ["10% off on Blinkit groceries (coupon: AXISNEO).","Fee waived on spending ₹1,00,000 in a year."],
    rewardHighlights: {
      baseRate: '0.2% – 0.5%',
      accelerated: '10% on Blinkit and Myntra; 40% on Zomato',
      caps: 'Category monthly discount caps apply'
    },
    exclusions: ["Fuel","Rent","Wallet loads","Education"],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'November 2026',
      mitcRef: 'AXIS/MITC/NEO-2026'
    },
    bestFor: "College students and first-time earners ordering from Blinkit, Zomato, and Myntra.",
    cardArt: {
      bgGradient: 'from-blue-900 via-indigo-950 to-black',
      textColor: 'text-indigo-200',
      accentColor: '#6366f1',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },
];

export const DEVALUATION_NEWS = [
  {
    id: 'dev-1',
    bank: 'HDFC Bank',
    title: 'Spend Criteria of ₹50,000 introduced for Domestic Lounge Visits',
    date: 'Recent Update',
    impact: 'Moderate',
    summary: 'Cardholders of Regalia Gold and Millennia now must spend ₹50,000 in the previous calendar quarter to unlock 2 lounge passes. Infinia remains exempt.',
    affectedCards: ['HDFC Regalia Gold', 'HDFC Millennia']
  },
  {
    id: 'dev-2',
    bank: 'ICICI Bank',
    title: 'Quarterly Lounge Spend Increased to ₹35,000',
    date: 'Recent Update',
    impact: 'High',
    summary: 'ICICI Coral and Rubyx cardholders require ₹35,000 spend in the previous quarter to unlock 1 lounge visit in the following quarter.',
    affectedCards: ['ICICI Coral', 'ICICI Rubyx']
  },
  {
    id: 'dev-3',
    bank: 'SBI Card',
    title: 'Cashback Card Lounge Discontinuation & Utility Exclusion',
    date: 'Recent Update',
    impact: 'High',
    summary: 'SBI Cashback card completely phased out complimentary domestic lounge visits and removed cashback on telecom & electricity bill payments.',
    affectedCards: ['SBI Cashback Card']
  },
  {
    id: 'dev-4',
    bank: 'Axis Bank',
    title: 'Axis Atlas Partner Miles Transfer Caps Introduced',
    date: 'Recent Update',
    impact: 'High',
    summary: 'Axis Bank split airline & hotel partners into Group A and Group B, capping annual miles conversion at 30,000 to 1,50,000 miles per calendar year.',
    affectedCards: ['Axis Atlas']
  },
  {
    id: 'dev-5',
    bank: 'IndusInd Bank',
    title: 'Tiger Card Holds Unconditional Lounge Access',
    date: 'Verified Nov 2026',
    impact: 'Positive',
    summary: 'Unlike rivals, IndusInd Tiger continues to offer 8 domestic + 2 international airport lounge visits per year with strictly ₹0 spend condition.',
    affectedCards: ['IndusInd Tiger']
  }
];
