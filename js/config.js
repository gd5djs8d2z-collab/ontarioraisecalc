/**
 * config.js — Ontario Raise Calculator
 * Single source of truth for all rates, constants, and jurisdiction metadata.
 * Canadian jurisdiction only. CRA / ESDC sourced, 2026 tax year.
 * DO NOT MODIFY calculation logic — PASS-locked.
 */

const TAX_YEAR = 2026;
const LAST_UPDATED = "2026-01-01";

const SITE = {
  name: "Ontario Raise Calculator",
  domain: "https://ontarioraisecalc.ca",
  description: "Find out how much of your raise you actually keep after Ontario income tax, federal tax, CPP, and EI deductions. 2026 CRA rates.",
  contactEmail: "partnerships@calc-hq.ca",
  jurisdiction: "Canada",
  province: "Ontario",
  taxAuthority: "CRA",
  payrollAuthority: "ESDC",
};

const FEDERAL_BRACKETS = [
  { min: 0,       max: 58523,   rate: 0.14  },
  { min: 58523,   max: 117045,  rate: 0.205 },
  { min: 117045,  max: 181440,  rate: 0.26  },
  { min: 181440,  max: 258482,  rate: 0.29  },
  { min: 258482,  max: null,    rate: 0.33  },
];

const FEDERAL_BPA     = 16452;
const FEDERAL_BPA_MIN = 14829;

const CPP_RATE             = 0.0595;
const CPP_MAX_PENSIONABLE  = 74600;
const CPP_EXEMPTION        = 3500;
const CPP_MAX_CONTRIBUTION = 4230.45;

const CPP2_RATE            = 0.04;
const CPP2_YMPE2           = 85000;
const CPP2_MAX_CONTRIBUTION = 416.00;

const EI_RATE            = 0.0163;
const EI_MAX_INSURABLE   = 68900;
const EI_MAX_PREMIUM     = 1123.07;
const EI_EMPLOYER_FACTOR = 1.4;

const ONTARIO_BRACKETS = [
  { min: 0,        max: 53891,   rate: 0.0505 },
  { min: 53891,    max: 107785,  rate: 0.0915 },
  { min: 107785,   max: 150000,  rate: 0.1116 },
  { min: 150000,   max: 220000,  rate: 0.1216 },
  { min: 220000,   max: null,    rate: 0.1316 },
];

const ONTARIO_BPA                = 12989;
const ONTARIO_SURTAX_THRESHOLD_1 = 5818;
const ONTARIO_SURTAX_THRESHOLD_2 = 7446;
const ONTARIO_SURTAX_RATE_1      = 0.20;
const ONTARIO_SURTAX_RATE_2      = 0.36;

const CONFIG = {
  TAX_YEAR, LAST_UPDATED, SITE,
  FEDERAL_BRACKETS, FEDERAL_BPA, FEDERAL_BPA_MIN,
  CPP_RATE, CPP_MAX_PENSIONABLE, CPP_EXEMPTION, CPP_MAX_CONTRIBUTION,
  CPP2_RATE, CPP2_YMPE2, CPP2_MAX_CONTRIBUTION,
  EI_RATE, EI_MAX_INSURABLE, EI_MAX_PREMIUM, EI_EMPLOYER_FACTOR,
  ONTARIO_BRACKETS, ONTARIO_BPA,
  ONTARIO_SURTAX_THRESHOLD_1, ONTARIO_SURTAX_THRESHOLD_2,
  ONTARIO_SURTAX_RATE_1, ONTARIO_SURTAX_RATE_2,
};
