"""
Generates: NEPED_Source_PDF_Data_Usage_Map.pdf

Maps every fact/stat/quote found in the two source PDFs supplied by the
client ("NEPED PDF.pdf" and "NEPED - its history PDF.pdf") to the exact
file, line number, and live route where that data appears on the website.
"""
from generate_proofreading_pdf import PDFBuilder

LIVE = "https://neped.vercel.app"

STATUS_COLORS = {
    "ALREADY LIVE": (0.10, 0.45, 0.20),
    "ADDED THIS UPDATE": (0.72, 0.35, 0.16),
    "STILL MISSING": (0.70, 0.10, 0.10),
}


def entry(pdf: PDFBuilder, num, title, source, location, route, status, note=None, detail=None):
    pdf.check_space(70)
    pdf.add_section_h2(f"{num}. {title}")
    if detail:
        pdf.add_paragraph(detail, font="F1", size=9, color_rgb=(0.2, 0.2, 0.2))
    pdf.add_paragraph(f"Source: {source}", font="F3", size=8.5, color_rgb=(0.45, 0.45, 0.45))
    pdf.add_paragraph(f"Site Location: {location}", font="F1", size=9, color_rgb=(0.12, 0.12, 0.12))
    if route:
        pdf.draw_text(f"Live Route: {route}", pdf.margin_left, pdf.y, font="F5", size=8.5, color_rgb=(0.72, 0.35, 0.16))
        pdf.add_link(pdf.margin_left, pdf.y - 3, pdf.measure_text_width(f"Live Route: {route}", "F5", 8.5), 12, f"{LIVE}{route}")
        pdf.y -= 15
    color = STATUS_COLORS.get(status, (0.2, 0.2, 0.2))
    pdf.draw_text(f"STATUS: {status}", pdf.margin_left, pdf.y, font="F2", size=8.5, color_rgb=color)
    pdf.y -= 14
    if note:
        pdf.add_paragraph(note, font="F3", size=8.5, color_rgb=(0.35, 0.35, 0.35))
    pdf.y -= 6


def build():
    pdf = PDFBuilder("NEPED_Source_PDF_Data_Usage_Map.pdf")

    pdf.add_cover_page(
        title="NEPED Source-Data Usage Map",
        subtitle="Mapping every fact in the client-supplied NEPED PDFs to its live location on the website",
        organization="Nagaland Empowerment of People through Economic Development",
        live_domain=f"{LIVE}/",
        registration="NO. H/RS-4238 & NO. HOME/SRC-6751",
        date_str="August 2026",
    )

    # Override cover title block manually since add_cover_page has fixed strings -> just proceed with content pages
    pdf.current_chapter = "Summary of This Update"
    pdf.current_route = "/neped-economic"

    pdf.add_section_h1("Summary of This Update")
    pdf.add_paragraph(
        "This report cross-references two source documents against the live site: 'NEPED PDF.pdf' "
        "(official Home/About Us copy, Aims & Objectives, Organisational Structure, Team Leaders, POU roster, "
        "and the Projects tables) and 'NEPED - its history PDF.pdf' (30-year phase-by-phase narrative, "
        "NEPED-SCEN objectives, success stories, and the livestock/Foddorizer programme).",
        size=9.5,
    )
    pdf.add_callout_box(
        "1) Left navbar 'NEPED' dropdown was trimmed to NEPED-only links (removed the duplicate NEPeD Energy "
        "Division / Impact links, which already live in the right NEPeD dropdown).  "
        "2) Added a new 'About the NEPED Society' section to the /neped-economic page carrying the Society's "
        "origin, its founding-charter Purpose statement, and its governance culture (POU/Team Leader/Project "
        "Steering Committee/Chief Secretary) verbatim from the source PDFs -- none of this narrative existed on "
        "the site before.  3) Expanded the NEPED-SCEN project's official objectives from 3 to the full 6-point "
        "list specified in the history PDF.",
        title="WHAT CHANGED IN THIS PASS",
        bg_rgb=(0.95, 0.97, 0.95),
        border_rgb=(0.10, 0.45, 0.20),
    )
    pdf.add_paragraph(
        "Everything else below was already present on the site prior to this update; it is listed for "
        "completeness so this document is a full source-to-site map, not just a changelog.",
        size=9, color_rgb=(0.4, 0.4, 0.4),
    )

    # ---------------------------------------------------------------
    pdf.start_new_page("NEPED PDF.pdf -- Facts", "/neped-economic")
    pdf.add_section_h1("Source 1: \"NEPED PDF.pdf\"")

    entry(pdf, "1.1", "Home blurb -- formed 1994, autonomous registered society, climate-change resilience aim",
          "NEPED PDF.pdf, p.1 (\"Home:\")",
          "src/pages/NepedEconomicPage.tsx, new \"About the NEPED Society\" section (intro paragraph)",
          "/neped-economic", "ADDED THIS UPDATE")

    entry(pdf, "1.2", "\"About Us\" -- 1995 setup, first foreign-funded ICEF project, Phase-I renaming to NEPED",
          "NEPED PDF.pdf, p.1 (\"About Us:\")",
          "src/pages/NepedEconomicPage.tsx line 111 (hero bar) + new About section intro paragraph",
          "/neped-economic", "ADDED THIS UPDATE",
          note="The Phase-I renaming line was already on the hero bar; the 'first foreign-aided project' framing is new.")

    entry(pdf, "1.3", "Registration numbers with exact dates (H/RS-4238; HOME/SRC-6751)",
          "NEPED PDF.pdf, p.1",
          "src/pages/NepedEconomicPage.tsx line 105",
          "/neped-economic", "ALREADY LIVE")

    entry(pdf, "1.4", "7-Point Aims & Objectives of NEPED",
          "NEPED PDF.pdf, p.2",
          "src/pages/NepedEconomicPage.tsx lines 352-386 (Section 5, \"Core Aims & Objectives of NEPED\")",
          "/neped-economic#aims", "ALREADY LIVE",
          detail="Financial incomes / self-employment / entrepreneur capacity / market linkages / thrift savings "
                 "/ mindset shift / biodiversity conservation.")

    entry(pdf, "1.5", "Organisational Structure Chart",
          "NEPED PDF.pdf, p.2 (diagram)",
          "src/pages/NepedEconomicPage.tsx lines 392-462 (Section 6, \"NEPED Organizational Structure\")",
          "/neped-economic#structure", "ALREADY LIVE",
          detail="Chief Minister -> Chief Secretary -> APC/Mission Director + Project Steering Committee -> "
                 "Team Leader -> POU -> Village Councils/VDBs/Farmers/NGOs/Women Groups/SHGs/Youth/Entrepreneurs.")

    entry(pdf, "1.6", "11 Team Leaders honour roll (Gokhale through Kovi Meyase, 1995-Present)",
          "NEPED PDF.pdf, p.3",
          "src/pages/NepedEconomicPage.tsx lines 15-27 and src/pages/AboutPage.tsx lines 73-85",
          "/neped-economic#team", "ALREADY LIVE")

    entry(pdf, "1.7", "6 Present POU Members (Metha, Krocha, Tep, Humtsoe, Ezung, Imchen)",
          "NEPED PDF.pdf, p.4",
          "src/pages/NepedEconomicPage.tsx lines 29-36 and src/pages/AboutPage.tsx lines 22-59",
          "/neped-economic#team", "ALREADY LIVE")

    entry(pdf, "1.8", "\"Projects Implemented under NEPED\" Table (12 Rows)",
          "NEPED PDF.pdf, p.5-6",
          "src/data/nepedProjectsData.ts, project ids 1,2,3,4,5,6,7,8,9,10,12",
          "/neped-economic#projects", "ALREADY LIVE",
          detail="NEPED I, II, III, SCEN, Community Piggery, 4x Handicraft/Textiles projects, NTFP Value "
                 "Addition, and NEPED-IV FBMP (KfW).")

    entry(pdf, "1.9", "NAFCC -- National Adaptation Fund for Climate Change",
          "NEPED PDF.pdf, p.6 (row of the same table)",
          "content/_archived/project-11-naffc-climate-change-adaptation.md -- moved OUT of content/projects/, "
          "so it no longer renders on the live Projects Archive",
          "/neped-economic#projects", "STILL MISSING",
          detail="Project period 2018-26, funded by the Ministry of Agriculture, Govt. of India.",
          note="This project is explicitly listed under NEPED (not NEPeD) in the source table. It currently sits "
               "in _archived rather than content/projects/, so it will not appear on the site until it is "
               "restored or a deliberate decision is confirmed to keep it out.")

    entry(pdf, "1.10", "\"Projects Implemented under NEPeD\" Table (Confirmed Out of NEPED Scope)",
          "NEPED PDF.pdf, p.7",
          "Not applicable to NEPED pages -- eco-tourism workshop correctly lives in content/_archived/"
          "project-13-state-level-workshop-ecotourism-development.md, matching the PDF's NEPeD classification",
          None, "ALREADY LIVE",
          detail="Hydrogers, hydrogen development, and the eco-tourism workshop.",
          note="Listed here only to confirm it was correctly excluded from the NEPED-only left nav dropdown fixed in this session.")

    # ---------------------------------------------------------------
    pdf.start_new_page("NEPED - its history PDF.pdf -- Facts", "/neped-economic")
    pdf.add_section_h1("Source 2: \"NEPED - its history PDF.pdf\"")

    entry(pdf, "2.1", "NEPED Society Formation & Governance Culture",
          "History PDF, p.1 (\"NEPED Society\")",
          "src/pages/NepedEconomicPage.tsx, new \"About the NEPED Society\" section, "
          "\"Governance Culture & Reach\" card",
          "/neped-economic", "ADDED THIS UPDATE",
          detail="CIDA/ICEF origin, POU as the Society's hub, Project Steering Committee headed by the Chief "
                 "Secretary, and its informal, innovation-friendly work culture.")

    entry(pdf, "2.2", "Purpose of the Society statement (verbatim charter language)",
          "History PDF, p.1",
          "src/pages/NepedEconomicPage.tsx, new About section, LoraEditorialBlock quote "
          "(\"NEPED Society Charter -- Purpose of the Society\")",
          "/neped-economic", "ADDED THIS UPDATE")

    entry(pdf, "2.3", "NEPED-I Statistics",
          "History PDF, p.1",
          "src/pages/NepedEconomicPage.tsx line 213 (Phase I card) + "
          "src/data/nepedProjectsData.ts project id 1",
          "/neped-economic/project/neped-1-agroforestry-shifting-cultivation", "ALREADY LIVE",
          detail="1,794 test plots, 854 villages, 8 districts, 16 tribes, 7.8M trees, 5,500 ha, 1:6 replication, "
                 "7,000 farmers + 2,000 officials trained.")

    entry(pdf, "2.4", "NEPED-II stats: 7,888 farmers, Rs 825 crores cash crops, women purchased 30 land plots",
          "History PDF, p.1",
          "src/pages/NepedEconomicPage.tsx lines 235 & 238 + src/data/nepedProjectsData.ts project id 2",
          "/neped-economic/project/neped-2-cash-crops-microfinance", "ALREADY LIVE")

    entry(pdf, "2.5", "NEPED-III Statistics",
          "History PDF, p.1-2",
          "src/pages/NepedEconomicPage.tsx lines 257 & 260 + src/data/nepedProjectsData.ts project id 3",
          "/neped-economic/project/neped-3-watershed-development-shifting-cultivation", "ALREADY LIVE",
          detail="17,930 ha treated, 6,600 jhumias assisted, 12-trade livelihood menu (piggery/poultry/goatery/"
                 "rabbitry/apiculture/blacksmith/carpentry/weaving/rice mills/fishery/basketry/carving).")

    entry(pdf, "2.6", "Community conservation advocacy -- village council resolutions restricting hunting/"
                       "fishing/logging",
          "History PDF, p.2",
          "src/pages/NepedEconomicPage.tsx line 311 + src/data/nepedProjectsData.ts project id 4, "
          "keyObjectives[0]",
          "/neped-economic/project/neped-scen-biodiversity-traditional-knowledge", "ALREADY LIVE")

    entry(pdf, "2.7", "NEPED-SCEN Full 6-Point Official Objectives",
          "History PDF, p.2",
          "src/data/nepedProjectsData.ts project id 4, keyObjectives array -- expanded from 3 paraphrased "
          "items to the full official 6-point list",
          "/neped-economic/project/neped-scen-biodiversity-traditional-knowledge", "ADDED THIS UPDATE",
          detail="Biodiversity registers + legal protection, advocate new CCAs, document IEK, identify "
                 "technical/financial CCA needs, provide technical support & market linkages, and Blyth's "
                 "Tragopan as flagship species.",
          note="Objectives 2 (advocacy for new CCAs), 4 (identifying technical/financial requirements) and 5 "
               "(providing technical support & market linkages) were missing before this update.")

    entry(pdf, "2.8", "Success-Stories Paragraph",
          "History PDF, p.2",
          "src/pages/NepedEconomicPage.tsx lines 623 & 632 (108 hydrogers, birth of NEPeD) + new About "
          "section \"knowledge bank\" sentence",
          "/neped-economic", "ADDED THIS UPDATE",
          detail="25 years of credibility, birth of the NEPeD energy team, 108 hydrogers installed statewide, "
                 "and the \"knowledge bank\" framing for researchers, government departments, and NGOs.",
          note="The 3KW generator-capacity spec quoted alongside the 108-hydroger figure in the source PDF is "
               "still not stated anywhere on the site (it belongs on the /technology page, which documents "
               "hydroger hardware specs -- out of scope for the NEPED-only pages covered in this update).")

    entry(pdf, "2.9", "Shukla Commission Report quote (Government of India, March 1997) -- verbatim",
          "History PDF, p.3",
          "src/pages/NepedEconomicPage.tsx line 197 (LoraEditorialBlock)",
          "/neped-economic#history", "ALREADY LIVE")

    entry(pdf, "2.10", "1,794 \"test plots\" set up 1995-2000, \"Search & Find\" method, Traditional Knowledge "
                        "System (TKS) revival",
          "History PDF, p.3",
          "src/pages/NepedEconomicPage.tsx line 216 (\"Key Method\" callout, Phase I card)",
          "/neped-economic#history", "ALREADY LIVE")

    entry(pdf, "2.11", "Livestock Programme (Piggery, LSP, CSF Prevention)",
          "History PDF, p.3",
          "src/pages/NepedEconomicPage.tsx lines 283-292 + src/data/nepedProjectsData.ts project id 5",
          "/neped-economic/project/community-piggery-foddorizer-project", "ALREADY LIVE",
          detail="4,200 resource-poor families assisted (till 2013), WDPSCA + NRTT + State Plan funding, pig "
                 "breeding/fattening stock, low-cost sties, and the Livestock Service Provider (LSP) model "
                 "containing Classical Swine Fever.")

    entry(pdf, "2.12", "'Foddorizer' innovation -- reduces firewood consumption by 1.5 lac trees per year",
          "History PDF, p.3",
          "src/pages/NepedEconomicPage.tsx lines 165-171 & 288 + src/data/nepedProjectsData.ts project id 5",
          "/neped-economic/project/community-piggery-foddorizer-project", "ALREADY LIVE")

    # ---------------------------------------------------------------
    pdf.start_new_page("Open Items", "/neped-economic")
    pdf.add_section_h1("Open Items For Your Decision")
    pdf.add_bullet("NAFCC project archived", "Currently sits in content/_archived/ rather than content/projects/, "
                                              "so it does not render on the live Projects Archive even though the "
                                              "source PDF lists it as an active NEPED project. Restore it, or confirm "
                                              "it should stay excluded (e.g. if it's considered folded into NEPED-IV FBMP).")
    pdf.add_bullet("3KW hydroger capacity spec", "Quoted in the history PDF alongside the '108 hydrogers' figure, "
                                                  "but not stated anywhere on the site. It's a NEPeD/Technology-page "
                                                  "fact rather than NEPED, so it was left out of this NEPED-focused pass.")
    pdf.add_bullet("AboutPage.tsx naming", "The page titled \"About NEPED — History, Vision & Leadership\" (route "
                                           "/about) is actually written entirely about NEPeD (formed 2007, energy "
                                           "team, hydro engineers memoriam). Its content doesn't overlap with either "
                                           "source PDF, which are both NEPED-Society documents -- flagging in case "
                                           "the page name/scope needs correcting separately.")
    pdf.add_bullet("Unsourced statistics on existing project cards", "Several NEPED project detail entries already "
                                                                      "on the site (e.g. handicraft exhibition sales "
                                                                      "figures, artisan counts, spring counts on the "
                                                                      "archived NAFCC page) include specific numbers "
                                                                      "that do not appear in either source PDF. Not "
                                                                      "part of this update's scope, but worth a "
                                                                      "verification pass given this is a government-"
                                                                      "linked proofreading document.")

    pdf.build_pdf()


if __name__ == "__main__":
    build()
