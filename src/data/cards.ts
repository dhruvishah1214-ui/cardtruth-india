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
      basePercent: 3.33,
      maxPercent: 33.33,
      rewardType: 'Flights & Hotels',
      pointValueTravel: '₹1.00 (1 RP = ₹1 on SmartBuy flights/hotels)',
      pointValueCash: '₹0.30 (1 RP = ₹0.30 statement cash — 70% loss!)',
      multiplierDetail: '10X on Hotels (33.3%), 5X on Flights (16.6%), 3X-5X Gyftr Vouchers (10%-16.6%) via SmartBuy',
      monthlyCap: '10,000 accelerated bonus points/calendar month (and 2,500/day)',
      finePrintTrap: 'Max 70% of flight/hotel ticket price can be settled via points. Cash statement conversion devalues points to ₹0.30 (dropping return to 1.0% base).'
    },
    accountRequirement: {
      isAccountNeeded: true,
      tierName: 'HDFC Imperia / Preferred',
      details: 'Strict invite-only: requires ₹2.75L/mo net salary or HDFC Imperia Banking with ₹30L+ TRV'
    },
    loungeAccess: {
      domesticQuarterly: 99,
      internationalYearly: 99,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass (Guest Access included)',
      notes: 'Unlimited domestic and international airport lounges with complimentary guest visits'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 275000,
    welcomeBonus: '12,500 Reward Points (worth ₹12,500 for flights/hotels) upon fee payment',
    keyMilestones: [
      '₹10,00,000 spend in a year waives the ₹12,500 renewal fee',
      'Optimal utilization for spends up to ₹18 Lakhs annually for luxury flight & 5-star hotel redemptions'
    ],
    rewardHighlights: {
      baseRate: '3.3% base reward rate (5 points per ₹150, 1 point = ₹1)',
      accelerated: 'Up to 33.3% return (10X) via SmartBuy portal for hotels, 16.6% on flights',
      caps: 'SmartBuy accelerated points capped at 10,000 points per calendar month'
    },
    exclusions: ['Rent payments incur 1% fee and earn no points; utility points capped at 5k/month'],
    validityStatus: {
      status: 'Invite Only',
      badgeColor: 'purple',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HDFC Infinia Member Agreement (Latest Rev)',
      devaluationAlert: 'Monthly SmartBuy bonus points cap revised to 10k/month; ₹50k spend required on lower tier cards, but Infinia retains unlimited lounge.'
    },
    bestFor: 'Ultimate Luxury Travel (1:1 Flight & 5-Star Hotel Redemptions)',
    cardArt: {
      bgGradient: 'from-zinc-950 via-zinc-900 to-black',
      textColor: 'text-amber-100',
      accentColor: '#d4af37',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },

  // 2. Axis Magnus for Burgundy (Rank 2)
  {
    id: 'axis-magnus-burgundy',
    name: 'Magnus for Burgundy',
    bank: 'Axis',
    network: 'Mastercard',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 30000,
    annualFee: 30000,
    isLTF: false,
    feeWaiverSpend: 2500000,
    forexMarkup: 2.0,
    netReturnValueScore: 97,
    netReturnRate: '4.8% – 24.0%',
    netReturnSummary: '25,000 bonus Edge pts on ₹1.5L/mo spend (4:5 air miles ratio)',
    returnStructure: {
      basePercent: 4.8,
      maxPercent: 24.0,
      rewardType: 'Air Miles',
      pointValueTravel: '4:5 ratio (1 Edge Point = 0.8 Air Mile / Accor Point worth ~₹1.40)',
      pointValueCash: '₹0.20 (1 Edge Point = ₹0.20 cash)',
      multiplierDetail: '35 Edge pts / ₹200 on Travel EDGE portal (~24% airline mile value)',
      monthlyCap: 'Milestone bonus: 25,000 points upon spending ₹1.5 Lakhs in a calendar month',
      finePrintTrap: 'Requires active Burgundy Banking. Milestone bonus excludes rent, wallet, fuel, govt spends.'
    },
    accountRequirement: {
      isAccountNeeded: true,
      tierName: 'Requires Axis Burgundy A/C',
      details: 'Mandatory Axis Burgundy account: ₹10 Lakhs AQB or ₹30 Lakhs TRV or ₹3L/mo net salary credit'
    },
    loungeAccess: {
      domesticQuarterly: 99,
      internationalYearly: 99,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass (Unlimited + 8 Guest visits/yr)',
      notes: 'Unconditional unlimited domestic & international lounge access'
    },
    rupayUPI: false,
    welcomeBonus: 'Choice of domestic flight voucher or 12,500 Edge points',
    keyMilestones: [
      '₹150,000 (₹1.5 Lakhs) single-month spend threshold: Unlocks 25,000 bonus Edge Reward points in that statement cycle (4:5 transfer to air miles!)',
      'Strategic deployment: Swiped in high-spend months (tax, school fees, luxury jewelry) to hit ₹1.5L threshold'
    ],
    rewardHighlights: {
      baseRate: '12 Edge points per ₹200 (4:5 airline miles ratio for Burgundy = 4.8% return)',
      accelerated: '60 Edge points per ₹200 on Travel EDGE portal'
    },
    exclusions: ['Requires Burgundy Private Banking status; standard Magnus heavily devalued'],
    validityStatus: {
      status: 'Invite Only',
      badgeColor: 'purple',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Axis Bank Burgundy Terms & Conditions'
    },
    bestFor: 'High Spenders (₹1.5L/mo) Converting Spends to Singapore/Qatar/Air India Miles',
    cardArt: {
      bgGradient: 'from-[#3b0a1a] via-[#240610] to-[#120207]',
      textColor: 'text-rose-100',
      accentColor: '#f43f5e',
      pattern: 'velvet-matte',
      chipColor: 'gold'
    }
  },

  // 3. Axis Atlas (Rank 3)
  {
    id: 'axis-atlas',
    name: 'Axis Atlas',
    bank: 'Axis',
    network: 'Visa',
    tier: 'Premium',
    cardType: 'Travel',
    joiningFee: 5000,
    annualFee: 5000,
    isLTF: false,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 94,
    netReturnRate: '4.0% – 10.0%',
    netReturnSummary: '1:2 air miles transfer ratio; tiered milestone bonus up to 10k miles',
    returnStructure: {
      basePercent: 4.0,
      maxPercent: 10.0,
      rewardType: 'Air Miles',
      pointValueTravel: '1:2 ratio (1 EDGE Mile = 2 Partner Airline Miles/Hotel Points worth ~₹2)',
      pointValueCash: '₹0.50 (1 EDGE Mile = ₹0.50 statement cash — avoid!)',
      multiplierDetail: '5 EDGE Miles / ₹100 on direct airline/hotel spends (10% Air Miles)',
      monthlyCap: 'Accelerated travel spends capped at ₹2 Lakhs per month',
      finePrintTrap: 'Wallet, rent, govt tax, and jewellery excluded. Miles transfer has annual tier caps (Silver 30k, Gold 60k, Plat 1.5L).'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: can be applied by anyone meeting salary criteria (₹1L/mo salary)'
    },
    loungeAccess: {
      domesticQuarterly: 3,
      internationalYearly: 4,
      spendRequiredPreviousQuarter: 0,
      provider: 'Visa Lounge & Priority Pass'
    },
    rupayUPI: false,
    welcomeBonus: '5,000 EDGE Miles (worth 10,000 airline miles / partner points)',
    keyMilestones: [
      'Gold Tier: ₹3 Lakhs spend unlocks 2,500 bonus EDGE Miles',
      'Platinum Tier: ₹7.5 Lakhs spend unlocks 5,000 bonus EDGE Miles',
      '₹15 Lakhs spend unlocks additional 10,000 bonus EDGE Miles'
    ],
    rewardHighlights: {
      baseRate: '2 EDGE Miles per ₹100 spent on general categories (4% air miles value)',
      accelerated: '5 EDGE Miles per ₹100 on direct airline and hotel bookings (10% value)'
    },
    exclusions: ['Fuel, wallet, rent, insurance and utility payments excluded from miles'],
    validityStatus: {
      status: 'Devalued',
      badgeColor: 'amber',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Axis Bank Atlas Program Revision',
      devaluationAlert: 'Annual partner miles transfer caps introduced (Tier 1 vs Tier 2 partners).'
    },
    bestFor: 'Direct Airline & Hotel Bookings Converted to Accor/KrisFlyer Miles',
    cardArt: {
      bgGradient: 'from-amber-950 via-slate-900 to-stone-950',
      textColor: 'text-amber-100',
      accentColor: '#d97706',
      pattern: 'gold-foil',
      chipColor: 'silver'
    }
  },

  // 4. Amex Platinum Travel (Rank 4)
  {
    id: 'amex-plat-travel',
    name: 'Amex Platinum Travel',
    bank: 'Amex',
    network: 'Amex',
    tier: 'Premium',
    cardType: 'Milestone & Vouchers',
    joiningFee: 3500,
    annualFee: 5000,
    isLTF: false,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 92,
    netReturnRate: '8.0% – 11.5%',
    netReturnSummary: '48,000 points + ₹10,000 Taj voucher on hitting ₹4 Lakhs spend (~₹32k net)',
    returnStructure: {
      basePercent: 1.0,
      maxPercent: 11.5,
      rewardType: 'Milestone Vouchers',
      pointValueTravel: '1 MR point = 1 Marriott Bonvoy Point (up to ₹0.80 - ₹1.00) or ₹0.35 Flipkart',
      pointValueCash: '₹0.25 (1 MR point = ₹0.25 cash credit)',
      multiplierDetail: 'Hits ~11.5% net return ONLY at exact ₹4L spend: yields 48k MR points + ₹10,000 Taj Voucher',
      monthlyCap: 'No monthly cap; strictly milestone-driven at ₹1.9L and ₹4.0L annual thresholds',
      finePrintTrap: 'Terrible everyday swipe card (<1%) if you spend < ₹4 Lakhs or > ₹5 Lakhs. Put exactly ₹4 Lakhs and park the card.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Amex operates standalone in India; no bank account required'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'Domestic Amex Lounge Network'
    },
    rupayUPI: false,
    welcomeBonus: '10,000 Membership Rewards points on spending ₹15,000 in 90 days',
    keyMilestones: [
      '₹1.90 Lakhs annual spend: 15,000 bonus points + ₹4,000 Cleartrip voucher',
      '₹4.00 Lakhs annual spend: 25,000 bonus points + ₹10,000 Taj Hotels stay voucher'
    ],
    rewardHighlights: {
      baseRate: '1 MR point per ₹50 spent',
      accelerated: 'Milestone bonuses yield ~11.5% net return if card is retired after ₹4 Lakhs'
    },
    exclusions: ['Should strictly be paused or retired once ₹4 Lakhs milestone is crossed'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'American Express Platinum Travel T&C'
    },
    bestFor: 'Targeted ₹4 Lakhs Annual Spend yielding Taj Stays & Flights',
    cardArt: {
      bgGradient: 'from-slate-800 via-slate-700 to-zinc-900',
      textColor: 'text-slate-100',
      accentColor: '#cbd5e1',
      pattern: 'brushed-metal',
      chipColor: 'silver'
    }
  },

  // 5. Amex Gold Charge Card (Rank 5)
  {
    id: 'amex-gold-charge',
    name: 'American Express Gold Charge',
    bank: 'Amex',
    network: 'Amex',
    tier: 'Premium',
    cardType: 'Milestone & Vouchers',
    joiningFee: 1000,
    annualFee: 4500,
    isLTF: false,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 90,
    netReturnRate: '10.0% – 12.0%',
    netReturnSummary: '3,000 pts/mo on ₹20k vouchers (~₹15k/yr value on Taj stays)',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Standalone Amex card; requires minimum ₹6L annual ITR/income'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: false,
    welcomeBonus: '4,000 Membership Rewards points on spending ₹10,000 in first 90 days',
    keyMilestones: [
      '₹20,000 Monthly Spend Milestone: Purchasing ₹20k in Amazon Pay / Flipkart / Myntra vouchers via Reward Multiplier gives 2,000 base points + 1,000 bonus points (3,000 points/month = ~12% value when redeemed for Taj/Marriott stays)',
      '6 transactions of ₹1,000 each month yields 1,000 bonus points every month'
    ],
    rewardHighlights: {
      baseRate: '1 MR point per ₹50 spent',
      accelerated: '5X points on Reward Multiplier vouchers (Amazon Pay, Flipkart, Uber, Swiggy)'
    },
    exclusions: ['Charge card without pre-set credit limit; full balance due monthly'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'American Express India MITC'
    },
    bestFor: 'Monthly Amazon Pay Vouchers (₹20k/mo spend) Delivering >10% Value',
    cardArt: {
      bgGradient: 'from-[#b45309] via-[#78350f] to-[#451a03]',
      textColor: 'text-amber-50',
      accentColor: '#fbbf24',
      pattern: 'gold-foil',
      chipColor: 'gold'
    }
  },

  // 6. SBI Cashback Card (Rank 6)
  {
    id: 'sbi-cashback',
    name: 'SBI Cashback Card',
    bank: 'SBI',
    network: 'Visa',
    tier: 'Mid-Tier',
    cardType: 'Cashback',
    joiningFee: 999,
    annualFee: 999,
    isLTF: false,
    feeWaiverSpend: 200000,
    forexMarkup: 3.5,
    netReturnValueScore: 89,
    netReturnRate: '5.0% Direct',
    netReturnSummary: 'Up to ₹60,000 / yr net cashback (₹5,000 monthly cap)',
    returnStructure: {
      basePercent: 1.0,
      maxPercent: 5.0,
      rewardType: 'Direct Cashback',
      pointValueTravel: '1:1 Direct statement cash credit (₹1 Cashback = ₹1 INR)',
      pointValueCash: '₹1.00 (Zero conversion loss, automatic statement credit)',
      multiplierDetail: '5% direct cashback on nearly all online merchant spends (Amazon, Flipkart, Swiggy, Zomato, Uber, Myntra, etc.)',
      monthlyCap: '₹5,000 max cashback per statement cycle (i.e. up to ₹1,00,000 monthly online spend)',
      finePrintTrap: '1% only on offline merchant swipes. Excludes rent, fuel, utilities, jewellery, school fees, gift cards, and wallet loads.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Applied through SBI Card Sprint; you do NOT need an SBI bank savings account'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None (Domestic lounge removed in devaluation)'
    },
    rupayUPI: false,
    welcomeBonus: 'Fee offset by 5% cashback on initial spends',
    keyMilestones: [
      '₹200,000 annual spend waives the ₹999 annual renewal fee',
      'Max ₹5,000 cashback per monthly statement cycle (optimal online spend of ₹1,00,000/month)'
    ],
    rewardHighlights: {
      baseRate: '1% unlimited cashback on offline retail transactions',
      accelerated: '5% direct cashback on nearly ALL online merchant spends (Amazon, Flipkart, Myntra, Swiggy, Uber, etc.)'
    },
    exclusions: ['Rent, utility, school fees, wallet reloads, fuel, and jewelry transactions earn 0% cashback'],
    validityStatus: {
      status: 'Devalued',
      badgeColor: 'amber',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'SBI Card Terms & Exclusion Revisions',
      devaluationAlert: 'Lounge access removed; utility bill payments now strictly excluded from 5% cashback.'
    },
    bestFor: 'Flat 5% Direct Online Cashback on Any E-Commerce Merchant',
    cardArt: {
      bgGradient: 'from-[#0b2545] via-[#13315c] to-[#04152d]',
      textColor: 'text-blue-100',
      accentColor: '#38bdf8',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },

  // 7. HDFC Marriott Bonvoy (Rank 7)
  {
    id: 'hdfc-marriott-bonvoy',
    name: 'HDFC Marriott Bonvoy',
    bank: 'HDFC',
    network: 'Diners Club',
    tier: 'Premium',
    cardType: 'Travel',
    joiningFee: 3000,
    annualFee: 3000,
    isLTF: false,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 88,
    netReturnRate: '6.0% – 12.0%',
    netReturnSummary: 'Free 15,000 pts Night Award + 30,000 Bonvoy points on ₹2.5L spend',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Open to both HDFC and non-HDFC account holders with valid Marriott Bonvoy ID'
    },
    loungeAccess: {
      domesticQuarterly: 3,
      internationalYearly: 12,
      spendRequiredPreviousQuarter: 0,
      provider: 'Diners Club Lounge Network',
      notes: '12 domestic and 12 international lounge visits without spend criteria'
    },
    rupayUPI: false,
    welcomeBonus: '1 Free Night Award (up to 15,000 Marriott Bonvoy points) + Silver Elite status',
    keyMilestones: [
      '₹250,000 spend milestone: Yields 30,000 Marriott Bonvoy points + Free Night Award (over 10% net return)',
      '₹600,000 spend milestone: Unlocks an additional Free Night Award certificate'
    ],
    rewardHighlights: {
      baseRate: '2 Marriott Bonvoy points per ₹150 on eligible retail spends',
      accelerated: '8 points per ₹150 spent directly at participating Marriott properties worldwide'
    },
    exclusions: ['Diners Club network acceptance offline can occasionally be lower than Visa/Mastercard'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HDFC Marriott Co-brand Program Rules'
    },
    bestFor: 'Hotel Stays at St. Regis, Ritz-Carlton, JW Marriott, and Westin',
    cardArt: {
      bgGradient: 'from-amber-950 via-slate-900 to-stone-950',
      textColor: 'text-amber-100',
      accentColor: '#f59e0b',
      pattern: 'gold-foil',
      chipColor: 'silver'
    }
  },

  // 8. HDFC Tata Neu Infinity (Rank 8)
  {
    id: 'hdfc-tata-neu-infinity',
    name: 'Tata Neu Infinity',
    bank: 'HDFC',
    network: 'RuPay',
    tier: 'Mid-Tier',
    cardType: 'RuPay UPI',
    joiningFee: 1499,
    annualFee: 1499,
    isLTF: false,
    feeWaiverSpend: 300000,
    forexMarkup: 2.0,
    netReturnValueScore: 87,
    netReturnRate: '1.5% – 10.0%',
    netReturnSummary: '1.5% on UPI + 5% on BigBasket, Air India, Croma & Bills',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Applied directly inside the Tata Neu App; no HDFC account required'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 4,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass & Visa/RuPay Domestic',
      notes: '8 domestic + 4 international lounge visits per year'
    },
    rupayUPI: true,
    upiRewardRate: '1.5% NeuCoins on all UPI spends',
    welcomeBonus: '1,499 NeuCoins (worth ₹1,499 on Tata Neu) upon card activation',
    keyMilestones: [
      '₹300,000 annual spend waives the ₹1,499 annual fee',
      '₹40,000 monthly spend cap for 5% back on insurance, electricity/water bills, BigBasket, and Tanishq jewelry'
    ],
    rewardHighlights: {
      baseRate: '1.5% NeuCoins on all retail and RuPay UPI merchant spends (1 NeuCoin = ₹1)',
      accelerated: 'Up to 10% (5% card + 5% NeuPass) across Tata Neu, Air India, Taj Hotels, Croma, 1mg'
    },
    exclusions: ['Fuel surcharge waiver up to ₹500/month; UPI cashback requires linking to Tata Neu app or BHIM'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HDFC Bank Tata Neu Agreement'
    },
    bestFor: 'High Value RuPay UPI Transactions + Tata Ecosystem (Croma, Air India, BigBasket)',
    cardArt: {
      bgGradient: 'from-purple-950 via-slate-950 to-indigo-950',
      textColor: 'text-purple-100',
      accentColor: '#a855f7',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 9. Airtel Axis Bank (Rank 9)
  {
    id: 'airtel-axis',
    name: 'Airtel Axis Bank',
    bank: 'Axis',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Cashback',
    joiningFee: 500,
    annualFee: 500,
    isLTF: false,
    feeWaiverSpend: 200000,
    forexMarkup: 3.5,
    netReturnValueScore: 86,
    netReturnRate: '10.0% – 25.0%',
    netReturnSummary: '25% on Airtel + 10% on Swiggy/Zomato/BigBasket & utility bills (~₹12k/yr)',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Applied inside the Airtel Thanks App; no Axis Bank savings account needed'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 50000,
      provider: 'Domestic (Subject to ₹50k spend criteria)'
    },
    rupayUPI: false,
    welcomeBonus: '₹500 Amazon voucher on first card transaction within 30 days',
    keyMilestones: [
      '₹200,000 spend waives annual fee of ₹500',
      'Ideal monthly spend of ₹4,000 to max out high cashback caps'
    ],
    rewardHighlights: {
      baseRate: '1% unlimited cashback on other retail transactions',
      accelerated: '25% cashback on Airtel mobile, broadband, DTH (max ₹250/mo); 10% on Swiggy, Zomato, BigBasket (max ₹500/mo); 10% on electricity/gas/water bills via Airtel Thanks App (max ₹250/mo)'
    },
    exclusions: ['Direct utility portal spends do not earn 10%; must pay through Airtel Thanks App to qualify'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Axis Bank Co-brand Card Schedule'
    },
    bestFor: 'Huge 25% Cashback on Telecom + 10% on Food Delivery and Utility Bills',
    cardArt: {
      bgGradient: 'from-[#7f1d1d] via-[#450a0a] to-[#1c0404]',
      textColor: 'text-red-100',
      accentColor: '#ef4444',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 10. HDFC Swiggy Co-branded (Rank 10)
  {
    id: 'hdfc-swiggy',
    name: 'HDFC Swiggy Card',
    bank: 'HDFC',
    network: 'Mastercard',
    tier: 'Beginner',
    cardType: 'Cashback',
    joiningFee: 500,
    annualFee: 500,
    isLTF: false,
    feeWaiverSpend: 200000,
    forexMarkup: 3.5,
    netReturnValueScore: 85,
    netReturnRate: '5.0% – 10.0%',
    netReturnSummary: '10% on Swiggy & Instamart + 5% on top 100+ shopping apps (up to ₹36k/yr)',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Applied directly inside Swiggy app; no HDFC account required'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 25000,
    welcomeBonus: 'Free 3 to 12 Months Swiggy One Membership upon card activation',
    keyMilestones: [
      '₹200,000 annual spend waives the ₹500 renewal fee'
    ],
    rewardHighlights: {
      baseRate: '1% cashback on other retail spends',
      accelerated: '10% cashback on Swiggy (Food, Instamart, Dineout, Genie) capped at ₹1,500/mo; 5% on top 100+ online apps capped at ₹1,500/mo'
    },
    exclusions: ['Cashback directly credited to Swiggy Money balance every statement cycle'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HDFC Swiggy MITC'
    },
    bestFor: 'Food Delivery, Instamart Groceries, and 5% Online Cashback',
    cardArt: {
      bgGradient: 'from-[#ea580c] via-[#c2410c] to-[#7c2d12]',
      textColor: 'text-orange-100',
      accentColor: '#fb923c',
      pattern: 'velvet-matte',
      chipColor: 'silver'
    }
  },

  // 11. Ace RuPay by Kredit.Pe (Rank 11)
  {
    id: 'ace-rupay-kreditpe',
    name: 'Ace RuPay (Kredit.Pe)',
    bank: 'Yes Bank',
    network: 'RuPay',
    tier: 'Beginner',
    cardType: 'RuPay UPI',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 84,
    netReturnRate: '3.0% – 5.0%',
    netReturnSummary: 'Flat 3% (5% on >₹10k/mo) direct cashback on UPI merchant scans',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Instant virtual card: No Yes Bank savings account needed'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: true,
    upiRewardRate: '3% - 5% Cashback on UPI',
    welcomeBonus: 'Instant virtual card issuance with ₹0 fees',
    keyMilestones: [
      '₹10 minimum spend threshold to activate 3% UPI merchant cashback',
      '₹10,000 monthly UPI spend unlocks accelerated 5% cashback tier'
    ],
    rewardHighlights: {
      baseRate: '3% direct cashback on scanned UPI merchant QR payments',
      accelerated: '5% cashback when monthly UPI volume crosses ₹10,000'
    },
    exclusions: ['P2P (peer-to-peer friend transfers) excluded; only P2M merchant QRs eligible'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Yes Bank RuPay UPI Co-brand Guidelines'
    },
    bestFor: 'Daily Scan & Pay UPI Cashback (3% to 5% return)',
    cardArt: {
      bgGradient: 'from-blue-950 via-slate-900 to-cyan-950',
      textColor: 'text-cyan-100',
      accentColor: '#06b6d4',
      pattern: 'aurora',
      chipColor: 'silver'
    }
  },

  // 12. IndusInd Tiger (Rank 12)
  {
    id: 'indusind-tiger',
    name: 'IndusInd Tiger',
    bank: 'IndusInd',
    network: 'Mastercard',
    tier: 'Beginner',
    cardType: 'Travel',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 83,
    netReturnRate: '1.2% – 6.0%',
    netReturnSummary: '+ ₹1,000 Movie Vouchers / yr + Unconditional ₹0 Spend Lounge',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: No IndusInd bank account required'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 2,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass / Domestic',
      notes: 'ZERO spend criteria required for lounge access!'
    },
    rupayUPI: false,
    welcomeBonus: 'Complimentary BookMyShow vouchers on card activation',
    keyMilestones: [
      '₹500 movie ticket voucher every 6 months (₹1,000/year via BookMyShow)',
      'Tiered milestone vouchers on annual spends exceeding ₹2.5 Lakhs'
    ],
    rewardHighlights: {
      baseRate: '1.2% accelerated reward points',
      accelerated: 'Up to 6% points on accelerated online partners'
    },
    exclusions: ['Fuel surcharge waiver up to ₹400/month', 'Wallet loads excluded'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'IndusInd Bank MITC / Card Schedule'
    },
    bestFor: 'Free Airport Lounge Access with ₹0 Spend Criteria + Movie Perks',
    cardArt: {
      bgGradient: 'from-[#422006] via-[#291303] to-[#0f0701]',
      textColor: 'text-amber-100',
      accentColor: '#f59e0b',
      pattern: 'gold-foil',
      chipColor: 'gold'
    }
  },

  // 13. Scapia Federal Card (Rank 13)
  {
    id: 'scapia-federal',
    name: 'Scapia Federal Bank',
    bank: 'Federal Bank',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Zero Forex',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 0.0,
    netReturnValueScore: 82,
    netReturnRate: '2.0% – 4.0%',
    netReturnSummary: '0% Forex Markup (Saves ~₹4,130 on every ₹1 Lakh spent abroad)',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Applied directly inside the Scapia app; no Federal Bank account required'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 5000,
      provider: 'Scapia In-App QR Pass',
      notes: 'Unlocked dynamically via spending ₹5,000/mo or booking flights'
    },
    rupayUPI: false,
    welcomeBonus: 'Instant virtual card generation and zero setup fee',
    keyMilestones: [
      'Spend ₹5,000 in previous billing cycle to unlock complimentary domestic airport lounge pass'
    ],
    rewardHighlights: {
      baseRate: '10% Scapia coins on all eligible online and offline spends',
      accelerated: '20% Scapia coins on travel bookings inside the Scapia App (5 coins = ₹1)'
    },
    exclusions: ['Forex transactions have zero currency conversion markups', 'Rent & wallet loads excluded'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Federal Bank & Scapia MITC'
    },
    bestFor: '0% Forex Markup + Instant Dynamic Lounge Pass via Travel',
    cardArt: {
      bgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
      textColor: 'text-emerald-100',
      accentColor: '#10b981',
      pattern: 'aurora',
      chipColor: 'silver'
    }
  },

  // 14. Amazon Pay ICICI (Rank 14)
  {
    id: 'amazon-pay-icici',
    name: 'Amazon Pay ICICI',
    bank: 'ICICI',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Cashback',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 81,
    netReturnRate: '5.0% Uncapped',
    netReturnSummary: '5% uncapped Amazon cashback credited straight to Amazon wallet',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Applied via Amazon India app; zero ICICI account needed'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: false,
    welcomeBonus: 'Instant cashback and welcome coupons up to ₹2,000 inside Amazon Pay balance',
    keyMilestones: [
      'Uncapped, lifetime free cashback credited automatically into Amazon Pay wallet on statement date'
    ],
    rewardHighlights: {
      baseRate: '1% unlimited cashback on all offline and non-partner online spends',
      accelerated: '5% unlimited cashback on Amazon for Prime members (3% for non-Prime), 2% on 100+ Amazon Pay partner merchants'
    },
    exclusions: ['Fuel surcharge waived (1% up to ₹500/month); zero earnings on wallet loads and gold'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'ICICI Bank Co-brand Terms'
    },
    bestFor: 'Uncapped No-Nonsense 5% Cashback on Amazon (Lifetime Free)',
    cardArt: {
      bgGradient: 'from-amber-950 via-slate-900 to-neutral-950',
      textColor: 'text-amber-100',
      accentColor: '#f59e0b',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 15. HDFC Millennia (Rank 15)
  {
    id: 'hdfc-millennia',
    name: 'HDFC Millennia',
    bank: 'HDFC',
    network: 'Visa',
    tier: 'Mid-Tier',
    cardType: 'Cashback',
    joiningFee: 1000,
    annualFee: 1000,
    isLTF: false,
    feeWaiverSpend: 100000,
    forexMarkup: 3.5,
    netReturnValueScore: 80,
    netReturnRate: '5.0% CashPoints',
    netReturnSummary: '5% on Amazon, Flipkart, Swiggy, Zomato (capped at ₹1,000/mo)',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open to all salaried/self-employed with ₹35,000/mo salary proof'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 50000,
      provider: 'Domestic (Requires ₹50k spend in previous quarter)'
    },
    rupayUPI: false,
    welcomeBonus: '1,000 CashPoints upon payment of joining fee',
    keyMilestones: [
      '₹100,000 annual spend waives ₹1,000 renewal fee',
      '₹1,000 gift voucher on spending ₹1 Lakh each calendar quarter'
    ],
    rewardHighlights: {
      baseRate: '1% CashPoints on other spends (1 CashPoint = ₹1 for statement credit)',
      accelerated: '5% CashPoints on top partner brands (Amazon, BookMyShow, Cult.fit, Flipkart, Myntra, Sony LIV, Swiggy, Tata CLiQ, Uber, Zomato)'
    },
    exclusions: ['Fuel, wallet, rent, and government transactions earn zero cashpoints'],
    validityStatus: {
      status: 'Devalued',
      badgeColor: 'amber',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HDFC Millennia Terms Revision',
      devaluationAlert: '₹50,000 previous quarter spend now mandatory for 1 domestic lounge visit.'
    },
    bestFor: '5% Direct Statement Cashback on 10 Top Online Brands',
    cardArt: {
      bgGradient: 'from-[#082f49] via-[#0c4a6e] to-[#021d30]',
      textColor: 'text-cyan-100',
      accentColor: '#38bdf8',
      pattern: 'aurora',
      chipColor: 'gold'
    }
  },

  // 16. HDFC Regalia Gold (Rank 16)
  {
    id: 'hdfc-regalia-gold',
    name: 'HDFC Regalia Gold',
    bank: 'HDFC',
    network: 'Visa',
    tier: 'Premium',
    cardType: 'Travel',
    joiningFee: 2500,
    annualFee: 2500,
    isLTF: false,
    feeWaiverSpend: 400000,
    forexMarkup: 2.0,
    netReturnValueScore: 79,
    netReturnRate: '2.6% – 13.3%',
    netReturnSummary: '4 pts per ₹150 (₹0.50/pt) + 5X on Marks & Spencer, Myntra, Nykaa, Reliance Digital',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Requires minimum ₹1 Lakh/month net salary proof'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 6,
      spendRequiredPreviousQuarter: 50000,
      provider: 'Priority Pass / Domestic'
    },
    rupayUPI: false,
    welcomeBonus: 'Complimentary Club Vistara Silver Tier + MMT Black Elite + ₹2,500 flight voucher',
    keyMilestones: [
      '₹400,000 annual spend waives ₹2,500 renewal fee',
      '₹1,500 voucher on ₹1.5L quarterly spend; ₹5,000 flight voucher on ₹5L annual spend'
    ],
    rewardHighlights: {
      baseRate: '4 reward points per ₹150 (1 point = ₹0.50 on SmartBuy flights)',
      accelerated: '5X points at retail partners; 2.0% low forex markup'
    },
    exclusions: ['Requires ₹50,000 spend in preceding quarter to unlock lounge visits'],
    validityStatus: {
      status: 'Devalued',
      badgeColor: 'amber',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HDFC Bank Notice Board',
      devaluationAlert: 'Mandatory ₹50,000 previous quarter spend introduced for lounge access.'
    },
    bestFor: 'Lifestyle Shoppers + Flight Bookings via SmartBuy',
    cardArt: {
      bgGradient: 'from-[#78350f] via-[#451a03] to-[#1c0700]',
      textColor: 'text-amber-100',
      accentColor: '#d97706',
      pattern: 'gold-foil',
      chipColor: 'gold'
    }
  },

  // 17. Kiwi Axis Bank (Rank 17)
  {
    id: 'kiwi-axis',
    name: 'Kiwi Axis RuPay',
    bank: 'Axis',
    network: 'RuPay',
    tier: 'Beginner',
    cardType: 'RuPay UPI',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 78,
    netReturnRate: '2.0% – 5.0%',
    netReturnSummary: 'Flat 2% (up to 5% with Neon membership) on all merchant UPI scan & pays',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Instant virtual card on Kiwi app; zero Axis Bank account needed'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: true,
    upiRewardRate: '2% - 5% on UPI Scan & Pay',
    welcomeBonus: 'Virtual instant issuance with zero joining fee',
    keyMilestones: [
      'Rewarded in Kiwis (4 Kiwis = ₹1 directly credited to bank account)'
    ],
    rewardHighlights: {
      baseRate: '2% cashback on all merchant UPI scan-and-pay transactions',
      accelerated: 'Up to 5% cashback on partner merchants inside the Kiwi App'
    },
    exclusions: ['Only QR merchant scans qualify; peer-to-peer transfers earn 0%'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Axis Bank & Kiwi Co-brand Rules'
    },
    bestFor: '100% Free Virtual RuPay Card for GPay / PhonePe Micro-Spends',
    cardArt: {
      bgGradient: 'from-emerald-900 via-zinc-900 to-black',
      textColor: 'text-emerald-100',
      accentColor: '#22c55e',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 18. Flipkart Axis Bank (Rank 18)
  {
    id: 'flipkart-axis',
    name: 'Flipkart Axis Bank',
    bank: 'Axis',
    network: 'Mastercard',
    tier: 'Beginner',
    cardType: 'Cashback',
    joiningFee: 500,
    annualFee: 500,
    isLTF: false,
    feeWaiverSpend: 350000,
    forexMarkup: 3.5,
    netReturnValueScore: 77,
    netReturnRate: '5.0% on Flipkart',
    netReturnSummary: '5% on Flipkart (capped at ₹4k/quarter) + 4% on Swiggy, Uber, PVR',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Applied through Flipkart app; zero Axis account required'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 50000,
      provider: 'Domestic (Devalued)'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 15000,
    welcomeBonus: '₹500 Flipkart voucher on first transaction within 30 days',
    keyMilestones: [
      'Optimal spend: ₹80,000/quarter on Flipkart (max ₹4,000 cashback/quarter)',
      'Optimal spend: ₹53,333/quarter on Myntra (max ₹4,000 cashback/quarter)'
    ],
    rewardHighlights: {
      baseRate: '1% unlimited cashback on other online/offline retail spends',
      accelerated: '5% on Flipkart, 4% on preferred partners (Swiggy, Uber, PVR, Cult.fit)'
    },
    exclusions: ['Govt, insurance, fuel, utilities and wallet reloads excluded from cashback'],
    validityStatus: {
      status: 'Devalued',
      badgeColor: 'amber',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Axis Bank Credit Card Schedule of Charges',
      devaluationAlert: 'Quarterly caps placed on Flipkart/Myntra cashback; lounge access revoked.'
    },
    bestFor: 'Dedicated Flipkart & Myntra Shoppers',
    cardArt: {
      bgGradient: 'from-blue-900 via-slate-900 to-yellow-950',
      textColor: 'text-yellow-100',
      accentColor: '#eab308',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 19. IDFC FIRST Millennia (Rank 19)
  {
    id: 'idfc-first-millennia',
    name: 'IDFC FIRST Millennia',
    bank: 'IDFC FIRST',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Cashback',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 76,
    netReturnRate: '0.75% – 2.5%',
    netReturnSummary: '10X points (2.5% return) on spends >₹20k/month; points never expire',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Can be applied with no prior CIBIL score or relationship'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 20000,
      provider: 'Dreamfolks'
    },
    rupayUPI: true,
    welcomeBonus: '₹500 gift voucher on spending ₹5,000 in first 30 days',
    keyMilestones: [
      '₹20,000 monthly spend threshold: Spends up to ₹20k earn 3X points; spends ABOVE ₹20k earn 10X points uncapped'
    ],
    rewardHighlights: {
      baseRate: '3X points on offline spends (0.75% value, points never expire)',
      accelerated: '10X points (2.5%) on spends above ₹20k/month and on your Birthday'
    },
    exclusions: ['Points never expire; interest-free ATM withdrawals for up to 48 days (₹199 fee)'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'IDFC FIRST Consumer Credit Card Agreement'
    },
    bestFor: 'Zero Lifetime Fee + 10X Points on Monthly Spends > ₹20k',
    cardArt: {
      bgGradient: 'from-[#881337] via-[#4c0519] to-[#1f020a]',
      textColor: 'text-rose-100',
      accentColor: '#f43f5e',
      pattern: 'minimal-frost',
      chipColor: 'gold'
    }
  },

  // 20. IDFC FIRST WOW (Rank 20)
  {
    id: 'idfc-first-wow',
    name: 'IDFC FIRST WOW',
    bank: 'IDFC FIRST',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Zero Forex',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 0.0,
    netReturnValueScore: 75,
    netReturnRate: '0.75% + 0% Forex',
    netReturnSummary: '0% Forex markup + 100% of FD limit + 7.25% FD interest p.a.',
    accountRequirement: {
      isAccountNeeded: true,
      tierName: 'Requires Fixed Deposit (FD)',
      details: 'Issued against an IDFC FIRST Bank Fixed Deposit (Min ₹10,000 FD); no income proof needed'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: true,
    isFDSecured: true,
    minFDAmount: 10000,
    welcomeBonus: '₹500 voucher on first spend + interest earning on FD (up to 7.25% p.a.)',
    keyMilestones: [
      'Interest-free ATM cash withdrawals abroad up to 45 days (₹199 fee)',
      '100% of Fixed Deposit allocated as credit limit'
    ],
    rewardHighlights: {
      baseRate: '1X Reward points (never expire)',
      accelerated: '3X points on merchant spends, 0% Forex conversion markup'
    },
    exclusions: ['Fuel and utility bills give base points'],
    validityStatus: {
      status: 'FD Secured Only',
      badgeColor: 'blue',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'IDFC FIRST Secured Card Policy'
    },
    bestFor: 'International Travel with 0% Forex Markup (No Income Proof Needed)',
    cardArt: {
      bgGradient: 'from-slate-900 via-neutral-900 to-zinc-950',
      textColor: 'text-rose-100',
      accentColor: '#e11d48',
      pattern: 'minimal-frost',
      chipColor: 'gold'
    }
  },

  // 21. SBI SimplyClick (Rank 21)
  {
    id: 'sbi-simplyclick',
    name: 'SBI SimplyClick',
    bank: 'SBI',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Shopping',
    joiningFee: 499,
    annualFee: 499,
    isLTF: false,
    feeWaiverSpend: 100000,
    forexMarkup: 3.5,
    netReturnValueScore: 74,
    netReturnRate: '2.5% on Partners',
    netReturnSummary: '10X points (2.5%) on Amazon, BMS, Myntra + ₹4,000 flight vouchers',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Applied through SBI Card Sprint; no SBI bank account needed'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: false,
    welcomeBonus: '₹500 Amazon Gift Voucher upon payment of ₹499 joining fee',
    keyMilestones: [
      '₹100,000 annual spend: Complete waiver of ₹499 annual fee',
      '₹100,000 annual spend: ₹2,000 Cleartrip / Yatra flight voucher',
      '₹200,000 annual spend: Additional ₹2,000 Cleartrip / Yatra voucher'
    ],
    rewardHighlights: {
      baseRate: '1 reward point per ₹100 spent (0.25% value)',
      accelerated: '10X points (2.5%) on Amazon, BookMyShow, Cleartrip, Domino’s, Myntra, Yatra'
    },
    exclusions: ['Utility bill points capped', '1% fuel surcharge waiver for spends between ₹500 - ₹3,000'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'SBI Card MITC Schedule'
    },
    bestFor: 'Beginner Online Shoppers + Clear Milestones (Up to ₹4,000 Flight Vouchers)',
    cardArt: {
      bgGradient: 'from-[#0369a1] via-[#075985] to-[#082f49]',
      textColor: 'text-sky-100',
      accentColor: '#38bdf8',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 22. SBI SimplySave (Rank 22)
  {
    id: 'sbi-simplysave',
    name: 'SBI SimplySave',
    bank: 'SBI',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Shopping',
    joiningFee: 499,
    annualFee: 499,
    isLTF: false,
    feeWaiverSpend: 100000,
    forexMarkup: 3.5,
    netReturnValueScore: 73,
    netReturnRate: '2.5% Offline',
    netReturnSummary: '10X points on Dining, Movies, Groceries and Departmental stores',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Applied through SBI Card Sprint; no SBI savings account required'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: true,
    welcomeBonus: '2,000 bonus reward points (value ₹500) on spending ₹2,000 within first 60 days',
    keyMilestones: [
      '₹100,000 spend in year waives next year renewal fee of ₹499'
    ],
    rewardHighlights: {
      baseRate: '1 point per ₹150 spent on regular categories',
      accelerated: '10X points (10 points per ₹150) on Dining, Movies, Departmental stores, and Groceries'
    },
    exclusions: ['Fuel surcharge waiver capped at ₹100/statement cycle'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'SBI Card MITC'
    },
    bestFor: 'Offline Departmental Stores & Supermarket Spends',
    cardArt: {
      bgGradient: 'from-[#155e75] via-[#0e7490] to-[#164e63]',
      textColor: 'text-teal-100',
      accentColor: '#2dd4bf',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 23. IndusInd Legend (Rank 23)
  {
    id: 'indusind-legend',
    name: 'IndusInd Legend',
    bank: 'IndusInd',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Milestone & Vouchers',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 1.8,
    netReturnValueScore: 72,
    netReturnRate: '0.75% – 1.5%',
    netReturnSummary: '1.8% Low Forex fee + Monthly Buy-1-Get-1 Free Movie Ticket',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: No IndusInd savings account needed'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'Domestic'
    },
    rupayUPI: false,
    welcomeBonus: 'Lifetime Free card with complimentary concierge access',
    keyMilestones: [
      'Buy 1 Get 1 free movie ticket on BookMyShow up to ₹200 once a month',
      '4,000 bonus reward points on annual spends of ₹6 Lakhs'
    ],
    rewardHighlights: {
      baseRate: '1 point per ₹100 on weekdays (0.75%)',
      accelerated: '2 points per ₹100 on weekends (1.5%) + Low 1.8% Forex markup'
    },
    exclusions: ['Fuel and utility bills excluded from weekend acceleration'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'IndusInd Legend Product T&C'
    },
    bestFor: 'Low Forex Fee (1.8%) + Monthly Movie BOGO Ticket',
    cardArt: {
      bgGradient: 'from-stone-900 via-neutral-900 to-black',
      textColor: 'text-amber-100',
      accentColor: '#f59e0b',
      pattern: 'gold-foil',
      chipColor: 'gold'
    }
  },

  // 24. HDFC MoneyBack+ (Rank 24)
  {
    id: 'hdfc-moneyback-plus',
    name: 'HDFC MoneyBack+',
    bank: 'HDFC',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Cashback',
    joiningFee: 500,
    annualFee: 500,
    isLTF: false,
    feeWaiverSpend: 50000,
    forexMarkup: 3.5,
    netReturnValueScore: 71,
    netReturnRate: '1.0% – 3.3%',
    netReturnSummary: '10X CashPoints on Amazon, Flipkart, Swiggy, Reliance Smart',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open to salaried individuals earning ₹20,000+/mo across any bank'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: true,
    salaryRequirementMonthly: 20000,
    welcomeBonus: '500 CashPoints on payment of joining fee',
    keyMilestones: [
      '₹50,000 annual spend waives ₹500 renewal fee',
      '₹500 gift voucher on spending ₹50,000 per calendar quarter'
    ],
    rewardHighlights: {
      baseRate: '2 CashPoints per ₹150 spent on regular categories',
      accelerated: '10X CashPoints (20 points per ₹150 = ~3.3%) on top partner merchants'
    },
    exclusions: ['CashPoints valid for 2 years; 1 CashPoint = ₹0.25 statement cash'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HDFC MoneyBack Agreement'
    },
    bestFor: 'Salaried Beginners (₹20k/mo salary) with Low ₹50k Fee Waiver',
    cardArt: {
      bgGradient: 'from-blue-950 via-slate-900 to-sky-950',
      textColor: 'text-sky-100',
      accentColor: '#0ea5e9',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 25. HDFC Business Black (Rank 25)
  {
    id: 'hdfc-business-black',
    name: 'HDFC Business Black Metal',
    bank: 'HDFC',
    network: 'Visa',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 10000,
    annualFee: 10000,
    isLTF: false,
    feeWaiverSpend: 1000000,
    forexMarkup: 2.0,
    netReturnValueScore: 96,
    netReturnRate: '3.3% – 33.3%',
    netReturnSummary: 'Large corporate, GST tax payments & vendor spends milestones',
    accountRequirement: {
      isAccountNeeded: true,
      tierName: 'Requires HDFC Current A/C or FD',
      details: 'Issued to business owners holding an HDFC Current Account or against a ₹5.55L Fixed Deposit'
    },
    loungeAccess: {
      domesticQuarterly: 99,
      internationalYearly: 99,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass'
    },
    rupayUPI: false,
    isFDSecured: true,
    minFDAmount: 555000,
    welcomeBonus: '10,000 Reward points upon fee payment',
    keyMilestones: [
      'Can be issued against ₹5.55 Lakhs Fixed Deposit',
      'Exclusive rewards on income tax & advance tax payments via government portals'
    ],
    rewardHighlights: {
      baseRate: '5 points per ₹150 on retail & business spends',
      accelerated: '10X points via SmartBuy for corporate business travel'
    },
    exclusions: ['Strictly designed for business owners, proprietors, and corporate tax spends'],
    validityStatus: {
      status: 'Invite Only',
      badgeColor: 'purple',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HDFC Business Banking Division'
    },
    bestFor: 'Business Owners Paying Advance Tax & Corporate GST Bills',
    cardArt: {
      bgGradient: 'from-black via-zinc-950 to-neutral-900',
      textColor: 'text-amber-100',
      accentColor: '#f59e0b',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },

  // 26. HSBC Premier (Rank 26)
  {
    id: 'hsbc-premier',
    name: 'HSBC Premier Mastercard',
    bank: 'HSBC',
    network: 'Mastercard',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 0.99,
    netReturnValueScore: 93,
    netReturnRate: '3.0% – 6.0%',
    netReturnSummary: 'Super low 0.99% Forex markup + Unlimited Airport Lounge',
    accountRequirement: {
      isAccountNeeded: true,
      tierName: 'Requires HSBC Premier A/C',
      details: 'Mandatory HSBC Premier relationship: Requires ₹40 Lakhs Total Relationship Value (TRV) in India'
    },
    loungeAccess: {
      domesticQuarterly: 99,
      internationalYearly: 99,
      spendRequiredPreviousQuarter: 0,
      provider: 'LoungeKey Unlimited'
    },
    rupayUPI: false,
    welcomeBonus: 'Taj voucher worth ₹10,000 on card activation',
    keyMilestones: [
      'Complimentary for HSBC Premier relationship holders (₹40L TRV)',
      '18,000 monthly travel booking cap on Hopper travel portal'
    ],
    rewardHighlights: {
      baseRate: '3 reward points per ₹100 spent',
      accelerated: 'Super low 0.99% foreign currency markup; ₹1 Lakh tax payment cap'
    },
    exclusions: ['Requires HSBC Premier banking relationship tier'],
    validityStatus: {
      status: 'Invite Only',
      badgeColor: 'purple',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HSBC Premier Schedule'
    },
    bestFor: 'Global Travel with Ultra-Low 0.99% Forex & Unlimited LoungeKey',
    cardArt: {
      bgGradient: 'from-red-950 via-zinc-950 to-black',
      textColor: 'text-red-100',
      accentColor: '#ef4444',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },

  // 27. AU Zenith+ Metal (Rank 27)
  {
    id: 'au-zenith-plus',
    name: 'AU Zenith+ Metal',
    bank: 'AU Bank',
    network: 'Visa',
    tier: 'Premium',
    cardType: 'Travel',
    joiningFee: 4999,
    annualFee: 4999,
    isLTF: false,
    feeWaiverSpend: 800000,
    forexMarkup: 0.99,
    netReturnValueScore: 88,
    netReturnRate: '2.5% – 7.5%',
    netReturnSummary: 'Low 0.99% Forex markup + 16 Domestic & 16 Int\'l lounge visits/yr',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: Available to salaried individuals with ₹2.5L/mo salary proof'
    },
    loungeAccess: {
      domesticQuarterly: 4,
      internationalYearly: 16,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass'
    },
    rupayUPI: false,
    welcomeBonus: '5,000 Reward points (value ₹1,250) + ₹5,000 luxury dining voucher',
    keyMilestones: [
      '₹8 Lakhs annual spend waives ₹4,999 renewal fee',
      '1,000 bonus points on completing ₹75,000 monthly retail spend'
    ],
    rewardHighlights: {
      baseRate: '1 reward point per ₹100 spent',
      accelerated: '2X on dining & international; 0.99% forex markup'
    },
    exclusions: ['Utility and fuel surcharge points capped at ₹250/mo'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'AU Small Finance Bank MITC'
    },
    bestFor: 'Generous 16 International Lounges + Low 0.99% Forex Fee',
    cardArt: {
      bgGradient: 'from-purple-950 via-slate-900 to-black',
      textColor: 'text-purple-100',
      accentColor: '#c084fc',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 28. Standard Chartered Ultimate (Rank 28)
  {
    id: 'sc-ultimate',
    name: 'Standard Chartered Ultimate',
    bank: 'Standard Chartered',
    network: 'Visa',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 5000,
    annualFee: 5000,
    isLTF: false,
    feeWaiverSpend: null,
    forexMarkup: 2.0,
    netReturnValueScore: 86,
    netReturnRate: '3.33% Flat',
    netReturnSummary: '5 points per ₹150 on almost EVERYTHING (1 point = ₹1)',
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market: Requires minimum ₹2L/month salary or ITR; no SCB bank account needed'
    },
    loungeAccess: {
      domesticQuarterly: 4,
      internationalYearly: 4,
      spendRequiredPreviousQuarter: 20000,
      provider: 'Priority Pass'
    },
    rupayUPI: false,
    welcomeBonus: '6,000 Reward points (value ₹6,000 on 360 Rewards portal)',
    keyMilestones: [
      'Annual 5,000 reward points on renewal fee payment (offsets fee)',
      '1 complimentary golf round every month'
    ],
    rewardHighlights: {
      baseRate: '5 reward points per ₹150 (flat 3.33% across all offline & online spends)',
      accelerated: '2.0% reduced foreign currency markup'
    },
    exclusions: ['Fuel & utility points capped; Duty Free spends excluded'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Standard Chartered Schedule of Charges'
    },
    bestFor: 'Flat 3.33% Reward Rate on Offline Swipes with No Complicated Rules',
    cardArt: {
      bgGradient: 'from-blue-950 via-teal-950 to-black',
      textColor: 'text-teal-100',
      accentColor: '#14b8a6',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },

  // 28. Kotak White Reserve Metal Edition
  {
    id: 'kotak-white-reserve',
    name: 'Kotak White Reserve Metal',
    bank: 'Kotak',
    network: 'Visa',
    tier: 'Super-Premium',
    cardType: 'Milestone & Vouchers',
    joiningFee: 12500,
    annualFee: 12500,
    isLTF: false,
    feeWaiverSpend: 1000000,
    forexMarkup: 2.0,
    netReturnValueScore: 91,
    netReturnRate: '2.5% – 3.5%',
    netReturnSummary: '₹25,000 White Pass vouchers on ₹12L spend; up to ₹2.5L on ₹1 Cr spend',
    returnStructure: {
      basePercent: 1.5,
      maxPercent: 3.5,
      rewardType: 'Milestone Vouchers',
      pointValueTravel: '1 White Pass = ₹1 (Luxury brands: Taj, Oberoi, Apple, Tumi)',
      pointValueCash: '₹0.70 cash statement redemption',
      multiplierDetail: 'Tiered White Pass value: ₹25,000 vouchers at ₹12L spend, scaling up to ₹2.5 Lakhs at ₹1 Crore spend',
      monthlyCap: 'No monthly cap; strictly annual spend milestone driven',
      finePrintTrap: 'White Pass vouchers expire in 12 months. Rent, fuel, wallet reloads excluded from milestone calculation.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed (Open Market)',
      details: 'Open market card: requires ₹2.5L/mo salary or Kotak Privy League relationship'
    },
    loungeAccess: {
      domesticQuarterly: 99,
      internationalYearly: 99,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass (Unlimited visits + 2 Guest visits/quarter)',
      notes: 'Unlimited domestic and international lounge access with complimentary guest visits'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 250000,
    welcomeBonus: '10,000 White Pass points worth ₹10,000 upon annual fee payment',
    keyMilestones: [
      '₹10,00,000 annual spend waives the ₹12,500 renewal fee',
      '₹25,000 White Pass vouchers on ₹12 Lakhs annual spend',
      'Up to ₹2,50,000 White Pass vouchers on ₹1 Crore annual spend'
    ],
    rewardHighlights: {
      baseRate: '1.5% base value in White Pass points on regular spends',
      accelerated: 'Scales to 2.5% – 3.5% through annual spend milestones on curated luxury brands',
      caps: 'Milestones credited at ₹6L, ₹12L, ₹25L, ₹50L, and ₹1 Crore spend intervals'
    },
    exclusions: ['Rent, fuel, and wallet loads earn zero points and do not count toward fee waiver'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Kotak Mahindra Bank White Reserve Card Agreement'
    },
    bestFor: 'High-Spenders Preferring Curated Luxury Vouchers (Taj, Oberoi, Apple, Tumi)',
    cardArt: {
      bgGradient: 'from-slate-100 via-slate-200 to-zinc-300',
      textColor: 'text-slate-900',
      accentColor: '#0284c7',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },

  // 29. Kotak White
  {
    id: 'kotak-white',
    name: 'Kotak White Card',
    bank: 'Kotak',
    network: 'Visa',
    tier: 'Premium',
    cardType: 'Milestone & Vouchers',
    joiningFee: 3000,
    annualFee: 3000,
    isLTF: false,
    feeWaiverSpend: 500000,
    forexMarkup: 3.5,
    netReturnValueScore: 82,
    netReturnRate: '1.5% – 2.25%',
    netReturnSummary: '₹7,000 White Pass on ₹6L spend; up to ₹27,000 on ₹12L spend',
    returnStructure: {
      basePercent: 1.0,
      maxPercent: 2.25,
      rewardType: 'Milestone Vouchers',
      pointValueTravel: '1 White Pass = ₹1 on Premium brand vouchers',
      pointValueCash: '₹0.50 statement credit',
      multiplierDetail: '₹27,000 worth White Pass vouchers upon spending ₹12 Lakhs annually',
      monthlyCap: 'Milestone tranches at ₹2L, ₹4L, ₹6L, ₹9L, ₹12L',
      finePrintTrap: 'Low everyday return (<1%) if spend stays below ₹4 Lakhs. Rent/fuel excluded.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open to all applicants meeting ₹75k/mo salary criteria'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'DreamFolks / Visa Lounge',
      notes: '1 complimentary domestic lounge visit per quarter with ₹0 spend requirement'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 75000,
    welcomeBonus: '1,500 White Pass points worth ₹1,500 on spending ₹30,000 in first 60 days',
    keyMilestones: [
      '₹5,00,000 annual spend waives the ₹3,000 renewal fee',
      'Spend ₹6 Lakhs: Get ₹7,000 White Pass vouchers',
      'Spend ₹12 Lakhs: Get ₹27,000 White Pass vouchers'
    ],
    rewardHighlights: {
      baseRate: '1.0% effective return on everyday shopping',
      accelerated: 'Up to 2.25% net return on hitting ₹12 Lakhs annual milestone',
      caps: 'Voucher redemption at curated brands via Kotak White portal'
    },
    exclusions: ['Cash advances, wallet loads, fuel, and rental payments excluded from milestones'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Kotak White Credit Card MITC'
    },
    bestFor: 'Curated Milestone Vouchers across Apparel, Dining & Weekend Stays',
    cardArt: {
      bgGradient: 'from-zinc-100 via-slate-100 to-zinc-200',
      textColor: 'text-slate-800',
      accentColor: '#3b82f6',
      pattern: 'minimal-frost',
      chipColor: 'silver'
    }
  },

  // 30. Kotak Zen Signature
  {
    id: 'kotak-zen-signature',
    name: 'Kotak Zen Signature',
    bank: 'Kotak',
    network: 'Visa',
    tier: 'Mid-Tier',
    cardType: 'Shopping',
    joiningFee: 1500,
    annualFee: 1500,
    isLTF: false,
    feeWaiverSpend: 150000,
    forexMarkup: 3.5,
    netReturnValueScore: 80,
    netReturnRate: '1.6% – 3.3%',
    netReturnSummary: '10 Zen points / ₹150 on apparel & lifestyle; 7,500 bonus points on ₹3L spend',
    returnStructure: {
      basePercent: 1.0,
      maxPercent: 3.3,
      rewardType: 'Reward Points',
      pointValueTravel: '1 Zen Pt = ₹0.25 vouchers/travel',
      pointValueCash: '₹0.20 cash credit',
      multiplierDetail: '10 Zen points per ₹150 on departmental stores, apparel, and lifestyle shopping (~1.66% - 3.3%)',
      monthlyCap: 'Standard category capping on merchant codes',
      finePrintTrap: '1 Zen point = ₹0.25 (not ₹1). Rent, fuel, wallet reloads excluded.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹50k/mo salary'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'Visa Lounge Program',
      notes: '2 complimentary domestic lounge visits per quarter with ₹0 spend threshold'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 50000,
    welcomeBonus: '1,500 Zen points on fee payment and card activation',
    keyMilestones: [
      '₹1,50,000 annual spend waives the ₹1,500 renewal fee',
      '7,500 bonus Zen points upon spending ₹3 Lakhs annually',
      'Additional 7,500 bonus Zen points upon spending ₹6 Lakhs annually'
    ],
    rewardHighlights: {
      baseRate: '5 Zen points per ₹150 on other retail spends (0.83% value)',
      accelerated: '10 Zen points per ₹150 on apparel, lifestyle & departmental stores (1.66% base + milestones)',
      caps: 'Bonus milestones capped at 15,000 points annually'
    },
    exclusions: ['Fuel surcharge waiver on ₹500–₹3000 transactions; fuel spends earn no points'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Kotak Zen Signature Card Guidelines'
    },
    bestFor: 'Mall Shopping, Apparel, Departmental Stores & ₹0-Spend Lounge Access',
    cardArt: {
      bgGradient: 'from-amber-950 via-zinc-900 to-black',
      textColor: 'text-amber-100',
      accentColor: '#f59e0b',
      pattern: 'aurora',
      chipColor: 'gold'
    }
  },

  // 31. Kotak Mojo Platinum
  {
    id: 'kotak-mojo-platinum',
    name: 'Kotak Mojo Platinum',
    bank: 'Kotak',
    network: 'Visa',
    tier: 'Mid-Tier',
    cardType: 'Travel',
    joiningFee: 1000,
    annualFee: 1000,
    isLTF: false,
    feeWaiverSpend: 100000,
    forexMarkup: 3.5,
    netReturnValueScore: 81,
    netReturnRate: '1.0% – 2.5%',
    netReturnSummary: '2.5 Mojo points / ₹100 on all online shopping; 8 domestic lounge visits/yr with ₹0 spend',
    returnStructure: {
      basePercent: 1.0,
      maxPercent: 2.5,
      rewardType: 'Reward Points',
      pointValueTravel: '1 Mojo Point = ₹0.40 flight/hotel bookings',
      pointValueCash: '₹0.25 cash statement credit',
      multiplierDetail: '2.5 Mojo points per ₹100 on any online shopping website (1.0% net value for travel)',
      monthlyCap: 'No merchant capping on online shopping',
      finePrintTrap: 'Cash redemption devalues Mojo points to ₹0.25. Fuel, wallet loads, rent excluded.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹40k/mo net salary'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'DreamFolks / Visa Lounge',
      notes: '2 complimentary domestic lounge visits per calendar quarter (8/yr) with ₹0 spend criteria'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 40000,
    welcomeBonus: '1,000 Mojo points worth ₹400 on spending ₹15,000 in first 60 days',
    keyMilestones: [
      '₹1,00,000 annual spend waives the ₹1,000 renewal fee',
      '2,500 bonus Mojo points on spending ₹1 Lakh in a quarter'
    ],
    rewardHighlights: {
      baseRate: '1 Mojo point per ₹100 on offline POS spends (0.40% value)',
      accelerated: '2.5 Mojo points per ₹100 on all online ecommerce websites (1.0% value for flights)',
      caps: 'Quarterly milestone bonus capped at 2,500 Mojo points'
    },
    exclusions: ['Fuel, insurance, railway, rent, utilities, and wallet reloads earn zero Mojo points'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Kotak Mojo Platinum Schedule of Charges'
    },
    bestFor: 'Guaranteed ₹0-Spend Airport Lounge Access (8/yr) & General Online Swipes',
    cardArt: {
      bgGradient: 'from-blue-900 via-indigo-950 to-black',
      textColor: 'text-blue-100',
      accentColor: '#60a5fa',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 32. Kotak League Platinum RuPay
  {
    id: 'kotak-league-rupay',
    name: 'Kotak League Platinum RuPay',
    bank: 'Kotak',
    network: 'RuPay',
    tier: 'Beginner',
    cardType: 'RuPay UPI',
    joiningFee: 0,
    annualFee: 499,
    isLTF: false,
    feeWaiverSpend: 50000,
    forexMarkup: 3.5,
    netReturnValueScore: 78,
    netReturnRate: '1.0% – 2.0%',
    netReturnSummary: 'RuPay UPI merchant scan & pay; 4 reward points / ₹150; fuel surcharge waiver',
    returnStructure: {
      basePercent: 0.67,
      maxPercent: 2.0,
      rewardType: 'Reward Points',
      pointValueTravel: '1 Reward Point = ₹0.25',
      pointValueCash: '₹0.20',
      multiplierDetail: '8X reward points on special merchant categories; UPI payments earn base reward rate',
      monthlyCap: 'No restrictive cap on UPI points',
      finePrintTrap: 'P2P UPI transfers earn 0%; only merchant QR code scan & pay earns points.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹25k/mo salary'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: true,
    upiRewardRate: '1.0% - 2.0% on merchant QR scans',
    salaryRequirementMonthly: 25000,
    welcomeBonus: '500 reward points on card setup and first UPI transaction',
    keyMilestones: [
      '₹50,000 annual spend waives the ₹499 renewal fee'
    ],
    rewardHighlights: {
      baseRate: '4 reward points per ₹150 on retail & RuPay UPI spends',
      accelerated: '8 reward points per ₹150 on travel agencies, package tour operators & airlines',
      caps: 'No hard cap on UPI points'
    },
    exclusions: ['1% fuel surcharge waiver for transactions between ₹500 and ₹3,000; peer-to-peer UPI excluded'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Kotak League Platinum Card Rules'
    },
    bestFor: 'Everyday RuPay UPI Scan & Pay with Low Annual Fee Waiver Barrier',
    cardArt: {
      bgGradient: 'from-red-950 via-zinc-900 to-black',
      textColor: 'text-red-100',
      accentColor: '#ef4444',
      pattern: 'velvet-matte',
      chipColor: 'gold'
    }
  },

  // 33. Kotak 811 #DreamDifferent (FD-Secured)
  {
    id: 'kotak-811-dream-different',
    name: 'Kotak 811 #DreamDifferent',
    bank: 'Kotak',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Cashback',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 75,
    netReturnRate: '1.0% – 2.0%',
    netReturnSummary: '100% Guaranteed approval against ₹10k Kotak FD; 90% credit limit; 100% Lifetime Free',
    returnStructure: {
      basePercent: 1.0,
      maxPercent: 2.0,
      rewardType: 'Reward Points',
      pointValueTravel: '1 Pt = ₹0.25',
      pointValueCash: '₹0.20',
      multiplierDetail: '2 reward points per ₹100 on online shopping; 1 point on offline POS',
      monthlyCap: 'No cap on points',
      finePrintTrap: 'Requires minimum ₹10,000 Fixed Deposit with Kotak Bank. No credit score required.'
    },
    accountRequirement: {
      isAccountNeeded: true,
      tierName: 'Requires Kotak 811 FD',
      details: 'Secured against minimum ₹10,000 FD; zero income proof or CIBIL score required'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: false,
    isFDSecured: true,
    minFDAmount: 10000,
    welcomeBonus: '500 bonus reward points on activating the virtual card in Kotak app',
    keyMilestones: [
      'Lifetime Free forever with ₹0 annual fee'
    ],
    rewardHighlights: {
      baseRate: '1 reward point per ₹100 on offline POS spends',
      accelerated: '2 reward points per ₹100 on all online ecommerce shopping',
      caps: 'No expiry as long as card remains active'
    },
    exclusions: ['Fuel surcharge waiver up to ₹3,500/year; cash withdrawals earn no points'],
    validityStatus: {
      status: 'FD Secured Only',
      badgeColor: 'blue',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Kotak 811 Credit Card Program Document'
    },
    bestFor: 'Students, First-Jobbers & Building CIBIL from Scratch with Zero Credit History',
    cardArt: {
      bgGradient: 'from-rose-950 via-slate-900 to-black',
      textColor: 'text-rose-100',
      accentColor: '#f43f5e',
      pattern: 'minimal-frost',
      chipColor: 'silver'
    }
  },

  // 34. RBL World Safari
  {
    id: 'rbl-world-safari',
    name: 'RBL World Safari',
    bank: 'RBL',
    network: 'Mastercard',
    tier: 'Premium',
    cardType: 'Zero Forex',
    joiningFee: 3000,
    annualFee: 3000,
    isLTF: false,
    feeWaiverSpend: null,
    forexMarkup: 0,
    netReturnValueScore: 88,
    netReturnRate: '2.0% – 4.0%',
    netReturnSummary: 'True 0% Forex Markup on all currencies + 2 domestic & 2 international lounge visits/yr',
    returnStructure: {
      basePercent: 2.0,
      maxPercent: 4.0,
      rewardType: 'Reward Points',
      pointValueTravel: '1 Travel Point = ₹0.25 on flight/hotel bookings',
      pointValueCash: '₹0.20 cash credit',
      multiplierDetail: '5 Travel Points per ₹100 on travel spends + 0% Forex saves 3.5% + 18% GST instantly on international spends',
      monthlyCap: 'Unlimited 0% forex markup savings',
      finePrintTrap: 'Annual fee of ₹3,000 has no spend waiver. Make sure international spend justifies the fee.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹60k/mo salary'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 2,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass & Mastercard Lounge',
      notes: '2 domestic lounge visits per quarter + 2 international visits per year with ₹0 spend requirement'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 60000,
    welcomeBonus: 'MakeMyTrip gift voucher worth ₹3,000 on paying joining fee',
    keyMilestones: [
      'Spend ₹2.5 Lakhs: Get 10,000 bonus Travel Points',
      'Spend ₹5 Lakhs: Get additional 15,000 bonus Travel Points',
      'Spend ₹7.5 Lakhs: Get gift voucher worth ₹10,000'
    ],
    rewardHighlights: {
      baseRate: '2 Travel Points per ₹100 on regular domestic retail spends',
      accelerated: '5 Travel Points per ₹100 on travel bookings + 0% Forex fee abroad',
      caps: 'No cap on zero forex markup benefits'
    },
    exclusions: ['Rent payments, fuel, utilities, and wallet loads earn zero points'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'RBL Bank World Safari MITC Schedule'
    },
    bestFor: 'Frequent International Travellers Wanting Unconditional 0% Forex & Airport Lounges',
    cardArt: {
      bgGradient: 'from-emerald-950 via-teal-950 to-black',
      textColor: 'text-emerald-100',
      accentColor: '#10b981',
      pattern: 'aurora',
      chipColor: 'gold'
    }
  },

  // 35. Yes Marquee Metal
  {
    id: 'yes-marquee-metal',
    name: 'Yes Marquee Metal',
    bank: 'Yes Bank',
    network: 'Mastercard',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 9999,
    annualFee: 4999,
    isLTF: false,
    feeWaiverSpend: 1000000,
    forexMarkup: 1.0,
    netReturnValueScore: 93,
    netReturnRate: '2.5% – 4.5%',
    netReturnSummary: '36 reward points / ₹200 online (4.5% flat return); 24 domestic + unlimited international lounge with 8 guests',
    returnStructure: {
      basePercent: 2.25,
      maxPercent: 4.5,
      rewardType: 'Reward Points',
      pointValueTravel: '1 Reward Point = ₹0.25 statement credit or flight/hotel booking',
      pointValueCash: '₹0.25 (1:1 with travel value)',
      multiplierDetail: '36 points per ₹200 on all online shopping (4.5% flat return without portal lock)',
      monthlyCap: 'Online reward points capped at 12,000 points per statement cycle',
      finePrintTrap: 'Rental, fuel, wallet loads and utilities excluded from 4.5% accelerated tier.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹3L/mo net salary or Yes First relationship'
    },
    loungeAccess: {
      domesticQuarterly: 6,
      internationalYearly: 99,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass (Unlimited + 8 Guest visits/year)',
      notes: '6 domestic lounge visits per quarter (24/yr) + Unlimited international with 8 complimentary guest visits'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 300000,
    welcomeBonus: '60,000 reward points worth ₹15,000 upon paying joining fee of ₹9,999',
    keyMilestones: [
      '₹10,00,000 annual spend waives the ₹4,999 renewal fee',
      '20,000 bonus reward points on annual retail spends of ₹10 Lakhs'
    ],
    rewardHighlights: {
      baseRate: '18 reward points per ₹200 on offline POS spends (2.25% value)',
      accelerated: '36 reward points per ₹200 on online ecommerce purchases (4.5% net value)',
      caps: 'Accelerated online points capped at 12,000 points per billing cycle'
    },
    exclusions: ['Government payments, rent, wallet loads, fuel, and education excluded from rewards'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Yes Bank Marquee Credit Card Cardholder Agreement'
    },
    bestFor: 'Heavy Online Shoppers & Airport Lounge Guests (8 Free Guest Passes/yr)',
    cardArt: {
      bgGradient: 'from-amber-950 via-zinc-900 to-black',
      textColor: 'text-amber-100',
      accentColor: '#d4af37',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },

  // 36. BOB Eterna (Bank of Baroda)
  {
    id: 'bob-eterna',
    name: 'BOB Eterna Card',
    bank: 'BOB',
    network: 'Visa',
    tier: 'Premium',
    cardType: 'Travel',
    joiningFee: 2499,
    annualFee: 2499,
    isLTF: false,
    feeWaiverSpend: 250000,
    forexMarkup: 2.0,
    netReturnValueScore: 86,
    netReturnRate: '2.5% – 3.75%',
    netReturnSummary: '15 reward points per ₹100 on travel, dining & international (3.75% return); Unlimited domestic lounge',
    returnStructure: {
      basePercent: 0.75,
      maxPercent: 3.75,
      rewardType: 'Reward Points',
      pointValueTravel: '1 Pt = ₹0.25',
      pointValueCash: '₹0.25 cash credit',
      multiplierDetail: '15 reward points per ₹100 on online shopping, travel, dining and international transactions',
      monthlyCap: 'Accelerated points capped at 5,000 points per month',
      finePrintTrap: 'Base rate on other offline spends is only 0.75%. Fuel and government payments excluded.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹1L/mo salary or ₹12L ITR'
    },
    loungeAccess: {
      domesticQuarterly: 99,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'Visa Infinite / BOB Lounge Access',
      notes: 'Unlimited complimentary domestic airport lounge visits across India with ₹0 spend requirement'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 100000,
    welcomeBonus: '10,000 reward points worth ₹2,500 on spending ₹50,000 in first 60 days',
    keyMilestones: [
      '₹2,50,000 annual spend waives the ₹2,499 renewal fee',
      '20,000 bonus reward points on spending ₹5 Lakhs annually'
    ],
    rewardHighlights: {
      baseRate: '3 reward points per ₹100 on generic offline retail spends (0.75% value)',
      accelerated: '15 reward points per ₹100 on travel, dining, and international transactions (3.75% value)',
      caps: 'Accelerated category capped at 5,000 points per billing cycle'
    },
    exclusions: ['Fuel surcharge waiver 1% for transactions between ₹400 and ₹5,000'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'BOB Financial Solutions Eterna Tariff'
    },
    bestFor: 'Unlimited Domestic Airport Lounge Access & 3.75% Dining/Travel Rewards',
    cardArt: {
      bgGradient: 'from-orange-950 via-zinc-900 to-black',
      textColor: 'text-orange-100',
      accentColor: '#f97316',
      pattern: 'carbon-weave',
      chipColor: 'gold'
    }
  },

  // 37. AU Ixigo RuPay
  {
    id: 'au-ixigo-rupay',
    name: 'AU Ixigo RuPay',
    bank: 'AU Bank',
    network: 'RuPay',
    tier: 'Mid-Tier',
    cardType: 'Zero Forex',
    joiningFee: 999,
    annualFee: 999,
    isLTF: false,
    feeWaiverSpend: 100000,
    forexMarkup: 0,
    netReturnValueScore: 87,
    netReturnRate: '2.0% – 5.0%',
    netReturnSummary: '0% Forex Markup + 16 Railway Lounge visits + 8 Airport Lounge visits per year; RuPay UPI enabled',
    returnStructure: {
      basePercent: 1.25,
      maxPercent: 5.0,
      rewardType: 'Reward Points',
      pointValueTravel: '1 Reward Point = ₹0.25 on Ixigo flight/train/hotel bookings',
      pointValueCash: '₹0.20',
      multiplierDetail: '20 reward points / ₹100 on train bookings + 0% Forex + 10% instant discounts on Ixigo',
      monthlyCap: 'No cap on zero forex savings',
      finePrintTrap: 'Railway lounge access requires valid train ticket. RuPay UPI earns base rewards.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹35k/mo salary'
    },
    loungeAccess: {
      domesticQuarterly: 2,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'RuPay Airport & Railway Lounge Access',
      notes: '2 domestic airport lounges/quarter + 4 executive railway lounges/quarter with ₹0 spend criteria'
    },
    rupayUPI: true,
    upiRewardRate: '1.25% on merchant scans',
    salaryRequirementMonthly: 35000,
    welcomeBonus: '1,000 reward points + ₹1,000 Ixigo voucher upon card activation',
    keyMilestones: [
      '₹1,00,000 annual spend waives the ₹999 renewal fee'
    ],
    rewardHighlights: {
      baseRate: '5 reward points per ₹100 on general retail spends (1.25% value)',
      accelerated: '20 reward points per ₹100 on train ticket bookings via Ixigo (5% value) + 0% Forex Markup',
      caps: 'No cap on 0% forex fee savings'
    },
    exclusions: ['Wallet reloads and rent payments incur zero points'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'AU Small Finance Bank Ixigo Co-branded Rules'
    },
    bestFor: 'Zero Forex Abroad + Frequent Indian Railways & Airport Travellers',
    cardArt: {
      bgGradient: 'from-blue-900 via-sky-950 to-black',
      textColor: 'text-sky-100',
      accentColor: '#0284c7',
      pattern: 'aurora',
      chipColor: 'gold'
    }
  },

  // 38. HSBC Live+ (The 10% Dining & Grocery Beast)
  {
    id: 'hsbc-live-plus',
    name: 'HSBC Live+ Card',
    bank: 'HSBC',
    network: 'Visa',
    tier: 'Mid-Tier',
    cardType: 'Cashback',
    joiningFee: 999,
    annualFee: 999,
    isLTF: false,
    feeWaiverSpend: 200000,
    forexMarkup: 3.5,
    netReturnValueScore: 90,
    netReturnRate: '1.5% – 10.0%',
    netReturnSummary: '10% direct statement cashback on Dining, Food Delivery & Groceries (up to ₹1,000/mo)',
    returnStructure: {
      basePercent: 1.5,
      maxPercent: 10.0,
      rewardType: 'Direct Cashback',
      pointValueTravel: '1:1 Cash statement credit',
      pointValueCash: '₹1.00 (Direct statement credit)',
      multiplierDetail: '10% cashback on Swiggy, Zomato, Blinkit, Zepto, offline restaurants, and supermarkets',
      monthlyCap: '₹1,000 maximum cashback per billing cycle on the 10% category',
      finePrintTrap: 'Fuel, rent, and wallet reloads excluded. Requires minimum ₹4L/yr salary for open-market approval.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹40k/mo salary'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'Visa Domestic Lounge',
      notes: '1 domestic airport lounge visit per quarter (4/year) with ₹0 spend criteria'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 40000,
    welcomeBonus: '₹1,000 cashback upon spending ₹20,000 within first 30 days',
    keyMilestones: [
      '₹2,00,000 annual spend waives the ₹999 renewal fee'
    ],
    rewardHighlights: {
      baseRate: '1.5% unlimited cashback on other retail offline and online spends',
      accelerated: '10% cashback on dining, food delivery (Swiggy/Zomato), and grocery (Blinkit/Zepto/Supermarkets)',
      caps: '10% category cashback capped at ₹1,000 per statement cycle'
    },
    exclusions: ['Fuel, wallet loading, rent, government services, and jewellery excluded from cashback'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HSBC India Live+ Credit Card Most Important Terms'
    },
    bestFor: '10% Direct Statement Cashback on Food, Dining & Supermarket Groceries',
    cardArt: {
      bgGradient: 'from-rose-950 via-red-950 to-black',
      textColor: 'text-rose-100',
      accentColor: '#e11d48',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 40. HDFC Diners Club Black Metal Edition (DCB Metal)
  {
    id: 'hdfc-diners-black',
    name: 'Diners Club Black Metal',
    bank: 'HDFC',
    network: 'Diners Club',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 10000,
    annualFee: 10000,
    isLTF: false,
    feeWaiverSpend: 800000,
    forexMarkup: 2.0,
    netReturnValueScore: 98,
    netReturnRate: '3.3% – 33.3%',
    netReturnSummary: '1:1 flight & hotel redemption on SmartBuy; ₹8L fee waiver; unlimited lounge for primary & add-on',
    returnStructure: {
      basePercent: 3.33,
      maxPercent: 33.33,
      rewardType: 'Flights & Hotels',
      pointValueTravel: '₹1.00 (1 RP = ₹1 on SmartBuy flights/hotels)',
      pointValueCash: '₹0.30 (Avoid statement cash conversion)',
      multiplierDetail: '10X on SmartBuy Hotels (33.3%), 5X on Flights (16.6%), 3X-5X on Gyftr Brand Vouchers',
      monthlyCap: 'SmartBuy accelerated bonus points capped at 10,000 points per month',
      finePrintTrap: 'Diners Club POS offline acceptance is lower than Visa/Mastercard in smaller Indian towns (online acceptance is 100%).'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed (Salary ₹1.75L/mo)',
      details: 'Open market card: requires ₹1.75L/mo net salary or ₹21L ITR (much easier to get than Infinia)'
    },
    loungeAccess: {
      domesticQuarterly: 99,
      internationalYearly: 99,
      spendRequiredPreviousQuarter: 0,
      provider: 'Diners Club International Lounge Network',
      notes: 'Unlimited domestic and international airport lounges worldwide for both Primary and Add-on cardholders'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 175000,
    welcomeBonus: '10,000 reward points + complimentary annual memberships to Club Marriott, Swiggy One & Amazon Prime on spending ₹1.5L in 90 days',
    keyMilestones: [
      '₹8,00,000 annual spend waives the ₹10,000 renewal fee',
      '₹80,000 monthly spend earns 2X points or bonus vouchers'
    ],
    rewardHighlights: {
      baseRate: '3.3% base reward rate (5 points per ₹150, 1 point = ₹1)',
      accelerated: 'Up to 33.3% (10X) via SmartBuy portal for hotels, 16.6% on flights',
      caps: 'SmartBuy accelerated points capped at 10,000 points per calendar month'
    },
    exclusions: ['Rent payments incur 1% fee and earn zero points; utility points capped at 2,000/month'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'HDFC Bank Diners Club Black Metal Cardholder Agreement'
    },
    bestFor: 'The Realistic Infinia Alternative (Identical 33% Return with Lower ₹1.75L Salary Requirement)',
    cardArt: {
      bgGradient: 'from-zinc-950 via-neutral-900 to-black',
      textColor: 'text-zinc-100',
      accentColor: '#94a3b8',
      pattern: 'brushed-metal',
      chipColor: 'silver'
    }
  },

  // 41. Axis Olympus
  {
    id: 'axis-olympus',
    name: 'Axis Olympus Metal',
    bank: 'Axis',
    network: 'Mastercard',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 20000,
    annualFee: 20000,
    isLTF: false,
    feeWaiverSpend: 1500000,
    forexMarkup: 1.5,
    netReturnValueScore: 95,
    netReturnRate: '4.0% – 20.0%',
    netReturnSummary: '8 EDGE Miles / ₹100 on travel; 4:5 air miles ratio; unlimited domestic & int\'l lounges + 8 guests',
    returnStructure: {
      basePercent: 4.0,
      maxPercent: 20.0,
      rewardType: 'Air Miles',
      pointValueTravel: '4:5 ratio (1 EDGE Mile = 0.8 Partner Airline Mile / Accor Point worth ~₹1.50)',
      pointValueCash: '₹0.30',
      multiplierDetail: '8 EDGE Miles per ₹100 on flights and hotel bookings via Axis Travel EDGE portal',
      monthlyCap: 'Accelerated travel bookings capped at ₹3 Lakhs/month',
      finePrintTrap: 'Wallet loads, rent, fuel, and government payments excluded from mile accumulation.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹3L/mo net salary or ₹36L annual ITR'
    },
    loungeAccess: {
      domesticQuarterly: 99,
      internationalYearly: 99,
      spendRequiredPreviousQuarter: 0,
      provider: 'Priority Pass (Unlimited + 8 Guest visits/year)',
      notes: 'Unlimited domestic and international airport lounges with 8 complimentary guest visits every year'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 300000,
    welcomeBonus: '25,000 EDGE Miles worth ₹20,000+ upon payment of joining fee',
    keyMilestones: [
      '₹15,00,000 annual spend waives the ₹20,000 renewal fee',
      'Bonus 10,000 EDGE Miles upon achieving ₹15 Lakhs spend'
    ],
    rewardHighlights: {
      baseRate: '2 EDGE Miles per ₹100 on retail spends (4% value in airline miles)',
      accelerated: '8 EDGE Miles per ₹100 on direct travel bookings (up to 20% value)',
      caps: 'Group A airline transfers capped at 1,50,000 miles/year'
    },
    exclusions: ['Rental payments, fuel, utilities, and tax payments earn 0 points'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Axis Bank Olympus Schedule of Charges'
    },
    bestFor: 'High-Net-Worth International Travellers Seeking Free Guest Passes & Air Miles Arbitrage',
    cardArt: {
      bgGradient: 'from-amber-950 via-zinc-900 to-black',
      textColor: 'text-amber-100',
      accentColor: '#d97706',
      pattern: 'gold-foil',
      chipColor: 'gold'
    }
  },

  // 42. BPCL SBI Card Octane (Fuel King)
  {
    id: 'bpcl-sbi-octane',
    name: 'BPCL SBI Card Octane',
    bank: 'SBI',
    network: 'Visa',
    tier: 'Mid-Tier',
    cardType: 'Shopping',
    joiningFee: 1499,
    annualFee: 1499,
    isLTF: false,
    feeWaiverSpend: 200000,
    forexMarkup: 3.5,
    netReturnValueScore: 89,
    netReturnRate: '7.25% on Fuel',
    netReturnSummary: '7.25% value back on BPCL Petrol & Bharatgas LPG (25 reward points / ₹100 + 1% surcharge waiver)',
    returnStructure: {
      basePercent: 0.25,
      maxPercent: 7.25,
      rewardType: 'Reward Points',
      pointValueTravel: '1 Reward Point = ₹0.25 (Redeemable instantly for free fuel at BPCL petrol pumps)',
      pointValueCash: '₹0.25 fuel redemption credit',
      multiplierDetail: '25 reward points per ₹100 (6.25%) + 1% fuel surcharge waiver = 7.25% savings at BPCL pumps',
      monthlyCap: '7.25% benefit capped at ₹10,000 fuel spend per calendar month (max 2,500 points/month)',
      finePrintTrap: '7.25% applies ONLY at BPCL petrol bunks; filling at IndianOil or HPCL earns zero surcharge waiver.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹30k/mo salary'
    },
    loungeAccess: {
      domesticQuarterly: 1,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'Visa Domestic Airport Lounge',
      notes: '1 complimentary domestic airport lounge visit per calendar quarter (4/year) with ₹0 spend hurdle'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 300000,
    welcomeBonus: '6,000 reward points worth ₹1,500 instant free fuel on payment of joining fee',
    keyMilestones: [
      '₹2,00,000 annual spend waives the ₹1,499 renewal fee',
      '₹2,000 gift voucher from Aditya Birla Fashion/Yatra on spending ₹3 Lakhs'
    ],
    rewardHighlights: {
      baseRate: '1 reward point per ₹100 on other retail spends (0.25% value)',
      accelerated: '25 reward points per ₹100 (7.25% value back) on BPCL fuel, Bharatgas LPG, dining, and departmental stores',
      caps: 'Monthly fuel points capped at 2,500 points'
    },
    exclusions: ['Cash advances and non-BPCL fuel bunks excluded from surcharge waiver'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'SBI Cards BPCL Octane Terms & Conditions'
    },
    bestFor: 'Undisputed #1 Fuel Card in India (7.25% Value Back on Petrol, Diesel & Bharatgas LPG)',
    cardArt: {
      bgGradient: 'from-blue-950 via-cyan-950 to-black',
      textColor: 'text-cyan-100',
      accentColor: '#06b6d4',
      pattern: 'carbon-weave',
      chipColor: 'gold'
    }
  },

  // 43. ICICI Sapphiro (Dual Card: Visa + Amex)
  {
    id: 'icici-sapphiro',
    name: 'ICICI Sapphiro Dual Card',
    bank: 'ICICI',
    network: 'Visa',
    tier: 'Premium',
    cardType: 'Shopping',
    joiningFee: 6500,
    annualFee: 3500,
    isLTF: false,
    feeWaiverSpend: 600000,
    forexMarkup: 3.5,
    netReturnValueScore: 88,
    netReturnRate: '1.5% – 3.0%',
    netReturnSummary: 'BookMyShow BOGO tickets up to ₹500 twice a month (save ₹12k/yr); 100% LTF under Alumni program',
    returnStructure: {
      basePercent: 1.0,
      maxPercent: 3.0,
      rewardType: 'Reward Points',
      pointValueTravel: '1 ICICI Reward Point = ₹0.25',
      pointValueCash: '₹0.20 cash credit',
      multiplierDetail: 'Buy 1 Get 1 Free on BookMyShow up to ₹500 per ticket twice a month (₹1,000/mo movie savings)',
      monthlyCap: 'Movie tickets: maximum 2 complimentary tickets per month',
      finePrintTrap: 'Regular reward rate is mediocre (1-2%). The card is worth it primarily for Movie BOGO & Alumni LTF status.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'Alumni LTF Offer Available',
      details: 'Offered 100% Lifetime Free (₹0 forever) for graduates of top Tier-1 Indian institutes (IIT/IIM/NIT/BITS/XLRI)'
    },
    loungeAccess: {
      domesticQuarterly: 4,
      internationalYearly: 2,
      spendRequiredPreviousQuarter: 50000,
      provider: 'DreamFolks International & Visa Lounge',
      notes: '4 domestic lounge visits/quarter (subject to ₹50k previous quarter spend) + 2 international visits/year with DreamFolks'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 125000,
    welcomeBonus: 'Welcome vouchers worth ₹9,000+ from Tata CLiQ, EaseMyTrip, and Croma upon fee payment',
    keyMilestones: [
      '₹6,00,000 annual spend waives renewal fee (or zero fee if held under Alumni program)'
    ],
    rewardHighlights: {
      baseRate: '4 reward points per ₹100 on international spends; 2 points on domestic',
      accelerated: 'Buy 1 Get 1 free movie ticket up to ₹500 on BookMyShow twice per month',
      caps: 'Fuel, rent, and utility exclusions apply'
    },
    exclusions: ['Domestic lounge access requires ₹50,000 spend in previous calendar quarter'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'ICICI Bank Sapphiro Credit Card Agreement'
    },
    bestFor: 'BookMyShow BOGO Movie Tickets (Save up to ₹12k/yr) & Tier-1 College Alumni LTF Program',
    cardArt: {
      bgGradient: 'from-slate-900 via-blue-950 to-black',
      textColor: 'text-blue-100',
      accentColor: '#3b82f6',
      pattern: 'brushed-metal',
      chipColor: 'gold'
    }
  },

  // 44. American Express Platinum Charge Card (The Centurion Metal)
  {
    id: 'amex-platinum-charge',
    name: 'Amex Platinum Charge Card',
    bank: 'Amex',
    network: 'Amex',
    tier: 'Super-Premium',
    cardType: 'Travel',
    joiningFee: 60000,
    annualFee: 60000,
    isLTF: false,
    feeWaiverSpend: null,
    forexMarkup: 3.5,
    netReturnValueScore: 94,
    netReturnRate: '2.5% – 12.5%',
    netReturnSummary: 'Global Centurion Lounges with guests; Instant Marriott & Hilton Gold status; Taj Epicure & ₹45k hotel vouchers',
    returnStructure: {
      basePercent: 2.5,
      maxPercent: 12.5,
      rewardType: 'Reward Points',
      pointValueTravel: '1 MR Point = ₹0.50 to ₹1.00+ (Marriott Bonvoy 1:1, Singapore KrisFlyer, Qatar Avios)',
      pointValueCash: '₹0.25 (Never redeem for statement credit)',
      multiplierDetail: '3X on all international spends; 5X points on Reward Multiplier vouchers (Amazon/Flipkart/Apple)',
      monthlyCap: 'Reward Multiplier capped at 25,000 bonus points per month',
      finePrintTrap: '₹60,000 + 18% GST (₹70,800) annual fee is strictly non-waivable. Pure status & luxury travel card.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹25L+ annual taxable income (ITR) or high net worth verification'
    },
    loungeAccess: {
      domesticQuarterly: 99,
      internationalYearly: 99,
      spendRequiredPreviousQuarter: 0,
      provider: 'American Express Global Lounge Collection',
      notes: 'Unlimited access to American Express Centurion Lounges, Priority Pass, and Delta Sky Clubs with 2 complimentary guests'
    },
    rupayUPI: false,
    salaryRequirementMonthly: 210000,
    welcomeBonus: 'Taj & Postcard Hotel vouchers worth ₹45,000 or 1,35,000 Membership Rewards points upon fee payment',
    keyMilestones: [
      'No spend waiver; annual fee renewed with premium luxury lifestyle vouchers'
    ],
    rewardHighlights: {
      baseRate: '1 MR point per ₹40 spent (2.5% value on travel)',
      accelerated: '3X points on international transactions; 5X points on Amex Reward Multiplier',
      caps: 'Points never expire'
    },
    exclusions: ['Charge card without pre-set credit limit; full balance due every statement cycle'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'American Express India Platinum Card Agreement'
    },
    bestFor: 'Ultra-High-Net-Worth Luxury Travellers Wanting Global Hotel Elite Status & Centurion Lounges',
    cardArt: {
      bgGradient: 'from-zinc-200 via-slate-300 to-zinc-400',
      textColor: 'text-slate-900',
      accentColor: '#475569',
      pattern: 'brushed-metal',
      chipColor: 'silver'
    }
  },

  // 45. OneCard Metal Edition
  {
    id: 'onecard-metal',
    name: 'OneCard Metal Edition',
    bank: 'Federal Bank',
    network: 'Visa',
    tier: 'Beginner',
    cardType: 'Cashback',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 1.0,
    netReturnValueScore: 83,
    netReturnRate: '1.0% – 2.5%',
    netReturnSummary: '100% Lifetime Free metal card; 5X rewards on top 2 categories of the month; 1% low forex markup',
    returnStructure: {
      basePercent: 0.2,
      maxPercent: 2.5,
      rewardType: 'Reward Points',
      pointValueTravel: '10 OneCard Points = ₹1 (₹0.10 per point direct statement credit)',
      pointValueCash: '₹0.10 instant cash credit in app',
      multiplierDetail: '5X points on your top 2 spending categories every month (dining, grocery, fuel, shopping)',
      monthlyCap: 'No cap on 5X bonus points',
      finePrintTrap: 'Base swipe rate outside top 2 categories is low (0.2%). Physical metal card issued only if limit > ₹50,000.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market app-first card: approved via CIBIL or backed by ₹5,000 FD'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: false,
    welcomeBonus: 'Instant metal card issuance upon hitting eligibility criteria',
    keyMilestones: [
      'Lifetime Free forever with ₹0 annual fee'
    ],
    rewardHighlights: {
      baseRate: '1 point per ₹50 spent (0.2% value)',
      accelerated: '5X points (1.0% - 2.5% return) automatically calculated on your top 2 spend categories every month',
      caps: 'Points never expire and can be knocked off your bill with one swipe in the app'
    },
    exclusions: ['Transfers to bank account and wallet reloads excluded'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'FPL Technologies / OneCard Schedule of Charges'
    },
    bestFor: 'Zero Annual Fee App-First Metal Card with 1% Low Forex & 5X Category Multipliers',
    cardArt: {
      bgGradient: 'from-zinc-950 via-zinc-900 to-black',
      textColor: 'text-zinc-100',
      accentColor: '#38bdf8',
      pattern: 'carbon-weave',
      chipColor: 'silver'
    }
  },

  // 46. IndianOil Axis Bank RuPay
  {
    id: 'axis-indianoil-rupay',
    name: 'IndianOil Axis RuPay',
    bank: 'Axis',
    network: 'RuPay',
    tier: 'Beginner',
    cardType: 'RuPay UPI',
    joiningFee: 500,
    annualFee: 500,
    isLTF: false,
    feeWaiverSpend: 50000,
    forexMarkup: 3.5,
    netReturnValueScore: 82,
    netReturnRate: '1.0% – 4.0%',
    netReturnSummary: '4% value back on IndianOil fuel + 1% fuel surcharge waiver + RuPay UPI QR scan & pay',
    returnStructure: {
      basePercent: 1.0,
      maxPercent: 4.0,
      rewardType: 'Reward Points',
      pointValueTravel: '1 EDGE Reward Point = ₹0.20',
      pointValueCash: '₹0.20 fuel credit',
      multiplierDetail: '20 EDGE points per ₹100 on IndianOil fuel (4.0% value back) + 1% fuel surcharge refund',
      monthlyCap: 'Fuel rewards capped on spends up to ₹4,000 per month',
      finePrintTrap: 'Fuel points valid ONLY at authorized IndianOil petrol pumps through Axis POS terminal.'
    },
    accountRequirement: {
      isAccountNeeded: false,
      tierName: 'No Account Needed',
      details: 'Open market card: requires ₹25k/mo salary'
    },
    loungeAccess: {
      domesticQuarterly: 0,
      internationalYearly: 0,
      spendRequiredPreviousQuarter: 0,
      provider: 'None'
    },
    rupayUPI: true,
    upiRewardRate: '1.0% on merchant QR scans',
    salaryRequirementMonthly: 25000,
    welcomeBonus: '100% cashback up to ₹250 on first fuel transaction within 30 days',
    keyMilestones: [
      '₹50,000 annual spend waives the ₹500 renewal fee'
    ],
    rewardHighlights: {
      baseRate: '1 EDGE point per ₹100 on general retail & RuPay UPI spends (0.2% value)',
      accelerated: '20 EDGE points per ₹100 (4.0% value back) on IndianOil fuel purchases',
      caps: 'Maximum fuel reward points: 1,000 points per month'
    },
    exclusions: ['Non-IOCL petrol bunks earn no bonus points or surcharge waiver'],
    validityStatus: {
      status: 'Verified Active',
      badgeColor: 'emerald',
      lastVerifiedDate: 'Nov 2026',
      mitcRef: 'Axis Bank IndianOil Co-branded Card Rules'
    },
    bestFor: 'Daily Commuters Wanting 4% Return on Petrol + RuPay UPI Merchant Payments',
    cardArt: {
      bgGradient: 'from-orange-950 via-red-950 to-black',
      textColor: 'text-orange-100',
      accentColor: '#ea580c',
      pattern: 'aurora',
      chipColor: 'gold'
    }
  }
,
  {
    id: 'idfc-wealth',
    name: 'IDFC FIRST Wealth Credit Card',
    bank: 'IDFC FIRST',
    network: 'Visa',
    tier: 'Premium',
    cardType: 'Travel',
    joiningFee: 0,
    annualFee: 0,
    isLTF: true,
    feeWaiverSpend: null,
    forexMarkup: 1.5,
    netReturnValueScore: 78,
    netReturnRate: '1.67% – 2.5%',
    netReturnSummary: "Lifetime Free premium card offering 4 complimentary domestic & international lounge + airport spa visits per calendar quarter (on ₹20k spend), free golf rounds, and low 1.5% forex markup.",
    returnStructure: {
      basePercent: 0.83,
      maxPercent: 2.5,
      rewardType: 'Reward Points',
      multiplierDetail: "3X points offline (0.83%), 6X online up to ₹30k (1.67%), 10X points above ₹30k/month (2.5% return). Points never expire.",
      monthlyCap: "No cap on point accumulation",
      finePrintTrap: "Wallet loads, rent, and government transactions earn 1X point only"
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
      monthlyCap: "Max discount ₹1,000 per transaction on PayEazy",
      finePrintTrap: "Discount only applies when paying via EazyDiner PayEazy app"
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
      monthlyCap: "2 free movie tickets per month on BookMyShow",
      finePrintTrap: "Lounge requires ₹50k spend in previous calendar quarter"
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
      monthlyCap: "Unlimited reward points",
      finePrintTrap: "Invitation only for high-net-worth individuals"
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
      monthlyCap: "Max 2 Swiggy discounts per calendar month",
      finePrintTrap: "Coupon AXIS24 must be manually entered on Swiggy"
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
      monthlyCap: "Points redeemable 1:1 against train bookings",
      finePrintTrap: "Only bookings on irctc.co.in qualify for 10% rate"
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
      monthlyCap: "Max 2 BookMyShow discounts per month",
      finePrintTrap: "Lounge access requires ₹50k spend in previous quarter"
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
      monthlyCap: "Max 2 free movie tickets per month",
      finePrintTrap: "Annual fee waiver requires high ₹10,00,000 annual spend"
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
      monthlyCap: "Points redeemable on SBI Shop & Smile portal",
      finePrintTrap: "Excluded MCCs (rent, fuel) do not earn accelerated points"
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
      monthlyCap: "Points never expire",
      finePrintTrap: "Lounge requires ₹20k spend in previous calendar month"
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
      monthlyCap: "Points redeemable on Federal Rewards portal",
      finePrintTrap: "BOGO cinema capped at 1 redemption per month"
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
      monthlyCap: "Points redeemable 1:1 against statement credit",
      finePrintTrap: "High one-time joining fee of ₹12,999"
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
      monthlyCap: "Category monthly discount caps apply",
      finePrintTrap: "Discounts require specific merchant promo codes"
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
  }
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
