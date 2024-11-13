const mfData = [
  {
    schemeCode: 100027,
    schemeName: "Grindlays Super Saver Income Fund-GSSIF-Half Yearly Dividend",
  },
  {
    schemeCode: 100028,
    schemeName: "Grindlays Super Saver Income Fund-GSSIF-Quaterly Dividend",
  },
  {
    schemeCode: 100029,
    schemeName: "Grindlays Super Saver Income Fund-GSSIF-Growth",
  },
  {
    schemeCode: 100030,
    schemeName: "Grindlays Super Saver Income Fund-GSSIF-Annual Dividend",
  },
  {
    schemeCode: 100031,
    schemeName: "Grindlays Super Saver Income Fund-GSSIF - ST-Dividend",
  },
  {
    schemeCode: 100032,
    schemeName: "Grindlays Super Saver Income Fund-GSSIF - ST-Growth",
  },
  {
    schemeCode: 100033,
    schemeName: "Aditya Birla Sun Life Equity Advantage Fund - Regular Growth",
  },
  {
    schemeCode: 100034,
    schemeName: "Aditya Birla Sun Life Equity Advantage Fund -Regular Dividend",
  },
  {
    schemeCode: 100034,
    schemeName: "Aditya Birla Sun Life Equity Advantage Fund -Regular - IDCW",
  },
  {
    schemeCode: 100035,
    schemeName: "Birla Sun Life Freedom Fund-Plan A (Dividend)",
  },
  {
    schemeCode: 100036,
    schemeName: "Birla Sun Life Freedom Fund-Plan B (Growth)",
  },
  {
    schemeCode: 100037,
    schemeName: "Aditya Birla Sun Life Income Fund - Regular - Quarterly IDCW",
  },
  {
    schemeCode: 100037,
    schemeName:
      "Aditya Birla Sun Life Income Fund - Quarterly Dividend - Regular Plan",
  },
  {
    schemeCode: 100038,
    schemeName: "Aditya Birla Sun Life Income Fund - Growth - Regular Plan",
  },
  {
    schemeCode: 100041,
    schemeName: "Aditya Birla Sun Life Liquid Fund -Institutional - IDCW",
  },
  {
    schemeCode: 100041,
    schemeName: "Aditya Birla Sun Life Liquid Fund - Institutional Dividend",
  },
  {
    schemeCode: 100042,
    schemeName: "Aditya Birla Sun Life Liquid Fund-Retail (Growth)",
  },
  {
    schemeCode: 100043,
    schemeName: "Aditya Birla Sun Life Liquid Fund-Institutional (Growth)",
  },
  {
    schemeCode: 100044,
    schemeName: "Aditya Birla Sun Life Liquid Fund-Retail (Dividend)",
  },
  {
    schemeCode: 100044,
    schemeName: "Aditya Birla Sun Life Liquid Fund -Retail - IDCW",
  },
  {
    schemeCode: 100046,
    schemeName: "Aditya Birla Sun Life Liquid Fund -Daily IDCW",
  },
  {
    schemeCode: 100046,
    schemeName: "Aditya Birla Sun Life Liquid Fund - Daily Dividend",
  },
  {
    schemeCode: 100047,
    schemeName: "Aditya Birla Sun Life Liquid Fund - Growth",
  },
  {
    schemeCode: 100048,
    schemeName:
      "Aditya Birla Sun Life Liquid Fund -Institutional - weekly  IDCW",
  },
  {
    schemeCode: 100048,
    schemeName:
      "Aditya Birla Sun Life Liquid Fund-Institutional -  Weekly Dividend",
  },
  {
    schemeCode: 100049,
    schemeName:
      "Aditya Birla Sun Life Cash Plus-Institutional - Fortnightly Dividend",
  },
  {
    schemeCode: 100051,
    schemeName: "Aditya Birla Sun Life Liquid Fund - Weekly Dividend",
  },
  {
    schemeCode: 100051,
    schemeName: "Aditya Birla Sun Life Liquid Fund -weekly IDCW",
  },
  {
    schemeCode: 100052,
    schemeName:
      "Aditya Birla Sun Life Cash Plus-Institutional Premium - Fortnightly Dividend",
  },
  {
    schemeCode: 100053,
    schemeName:
      "Aditya Birla Sun Life Cash Plus-Institutional Premium Plan-Monthly Dividend",
  },
  {
    schemeCode: 100054,
    schemeName:
      "Aditya Birla Sun Life Gilt Plus - Liquid Plan - Quarterly Dividend - Regular Plan",
  },
  {
    schemeCode: 100055,
    schemeName:
      "Aditya Birla Sun Life Gilt Plus - Liquid Plan - Growth - Regular Plan",
  },
  {
    schemeCode: 100056,
    schemeName:
      "Aditya Birla Sun Life Gilt Plus - Liquid Plan - Annual Dividend - Regular Plan",
  },
  {
    schemeCode: 100057,
    schemeName:
      "Aditya Birla Sun Life Government Securities Fund - Quarterly Dividend - Regular Plan",
  },
  {
    schemeCode: 100057,
    schemeName:
      "Aditya Birla Sun Life Govenment Securities Fund -Regular - Quarterly IDCW",
  },
  {
    schemeCode: 100058,
    schemeName:
      "Aditya Birla Sun Life Government Securities Fund  - Growth - Regular Plan",
  },
  {
    schemeCode: 100059,
    schemeName: "Aditya Birla Sun Life Gilt Plus-PF Plan (Annual Dividend)",
  },
  {
    schemeCode: 100060,
    schemeName:
      "Aditya Birla Sun Life Constant Maturity 10 Year Gilt Fund - Quarterly Dividend - Regular Plan",
  },
  {
    schemeCode: 100061,
    schemeName:
      "Aditya Birla Sun Life Constant Maturity 10 Year Gilt Fund - Growth - Regular Plan",
  },
  {
    schemeCode: 100062,
    schemeName:
      "Aditya Birla Sun Life Gilt Plus-Regular Plan (Annual Dividend)",
  },
  {
    schemeCode: 100063,
    schemeName: "Aditya Birla Sun Life MNC Fund - Regular - IDCW",
  },
  {
    schemeCode: 100063,
    schemeName: "Aditya Birla Sun Life MNC Fund - Dividend - Regular Plan",
  },
  {
    schemeCode: 100064,
    schemeName: "Aditya Birla Sun Life MNC Fund - Growth - Regular Plan",
  },
  {
    schemeCode: 100065,
    schemeName:
      "Aditya Birla Sun Life India Opportunities Fund - Dividend - Regular Plan",
  },
  {
    schemeCode: 100066,
    schemeName:
      "Aditya Birla Sun Life India Opportunities Fund - Growth - Regular Plan",
  },
  {
    schemeCode: 100067,
    schemeName:
      "Aditya Birla Sun Life Tax Plan - Regular Plan - Dividend Option",
  },
  {
    schemeCode: 100067,
    schemeName: "Aditya Birla Sun Life Tax Plan -Regular - IDCW",
  },
  {
    schemeCode: 100068,
    schemeName: "BARODA ELSS 96 - Plan A - Dividend",
  },
  {
    schemeCode: 100068,
    schemeName: "BARODA ELSS 96 - Plan A - IDCW",
  },
  {
    schemeCode: 100068,
    schemeName: "BARODA PIONEER ELSS 96 - Plan A - Dividend",
  },
  {
    schemeCode: 100069,
    schemeName: "BARODA PIONEER DIVERSIFIED FUND",
  },
  {
    schemeCode: 100077,
    schemeName: "DSP  Bond Fund - Dividend",
  },
  {
    schemeCode: 100077,
    schemeName: "DSP Bond Fund - Dividend",
  },
  {
    schemeCode: 100077,
    schemeName: "DSP Bond Fund - IDCW",
  },
  {
    schemeCode: 100078,
    schemeName: "DSP Bond Fund - Growth",
  },
  {
    schemeCode: 100078,
    schemeName: "DSP  Bond Fund - Growth",
  },
  {
    schemeCode: 100079,
    schemeName: "DSP Bond Fund - Monthly Dividend",
  },
  {
    schemeCode: 100079,
    schemeName: "DSP  Bond Fund - Monthly Dividend",
  },
  {
    schemeCode: 100079,
    schemeName: "DSP Bond Fund - IDCW - Monthly",
  },
  {
    schemeCode: 100080,
    schemeName: "DSP Flexi Cap Fund - Regular Plan - IDCW",
  },
  {
    schemeCode: 100080,
    schemeName: "DSP  Equity Fund - Regular Plan - Dividend",
  },
  {
    schemeCode: 100080,
    schemeName: "DSP Equity Fund - Regular Plan - Dividend",
  },
  {
    schemeCode: 100080,
    schemeName: "DSP Flexi Cap Fund - Regular Plan - Dividend",
  },
];

export default mfData;
