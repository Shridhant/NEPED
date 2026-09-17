import sys
import os
import zlib
import re
import datetime

# PDF Builder Engine (Native Python 3.14 - PDF 1.4 Compliant)

class PDFBuilder:
    def __init__(self, filename="NEPED_Master_Website_Proofreading_Dossier.pdf"):
        self.filename = filename
        self.pages = []
        self.current_page_commands = []
        self.current_page_annots = []
        self.page_width = 595.28   # A4 Width
        self.page_height = 841.89  # A4 Height
        self.margin_left = 42.0
        self.margin_right = 42.0
        self.margin_top = 54.0
        self.margin_bottom = 54.0
        self.content_width = self.page_width - self.margin_left - self.margin_right
        
        self.y = self.page_height - self.margin_top
        self.current_chapter = "NEPED Master Proofreading Dossier"
        self.current_route = "https://neped.vercel.app/"
        
        # Typography settings
        self.font_name = "F1" # Default Helvetica
        self.font_size = 10
        self.line_height = 14
        
    def start_new_page(self, chapter=None, route=None):
        if self.current_page_commands:
            self.pages.append({
                "commands": self.current_page_commands,
                "annots": self.current_page_annots,
                "chapter": self.current_chapter,
                "route": self.current_route
            })
            self.current_page_commands = []
            self.current_page_annots = []
            
        if chapter:
            self.current_chapter = chapter
        if route:
            self.current_route = route
            
        self.y = self.page_height - self.margin_top
        
    def check_space(self, needed_height):
        if self.y - needed_height < self.margin_bottom:
            self.start_new_page(self.current_chapter, self.current_route)
            
    def sanitize(self, text):
        if not text:
            return ""
        # Convert unicode symbols to safe ASCII representations
        replacements = {
            "—": " -- ",
            "–": "-",
            "“": "\"",
            "”": "\"",
            "‘": "'",
            "’": "'",
            "•": "*",
            "₹": "INR ",
            "€": "EUR ",
            "→": " -> ",
            "←": " <- ",
            "↓": " v ",
            "↑": " ^ ",
            "↗": " -> ",
            "↘": " -> ",
            "✓": "[OK] ",
            "✔": "[OK] ",
            "…": "...",
            "°": " deg ",
            "±": "+/-",
            "·": "*",
            "\u200b": "",
            "\xa0": " "
        }
        for k, v in replacements.items():
            text = text.replace(k, v)
        # Fallback to replace any other non-ascii character
        text = text.encode('ascii', 'replace').decode('ascii')
        # Escape PDF string chars
        text = text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
        return text

    def add_rect(self, x, y, w, h, fill_rgb=None, stroke_rgb=None, line_width=1):
        cmds = []
        cmds.append("q")
        if fill_rgb:
            cmds.append(f"{fill_rgb[0]:.3f} {fill_rgb[1]:.3f} {fill_rgb[2]:.3f} rg")
        if stroke_rgb:
            cmds.append(f"{stroke_rgb[0]:.3f} {stroke_rgb[1]:.3f} {stroke_rgb[2]:.3f} RG")
            cmds.append(f"{line_width} w")
        
        cmds.append(f"{x:.2f} {y:.2f} {w:.2f} {h:.2f} re")
        if fill_rgb and stroke_rgb:
            cmds.append("B")
        elif fill_rgb:
            cmds.append("f")
        elif stroke_rgb:
            cmds.append("S")
        cmds.append("Q")
        self.current_page_commands.append("\n".join(cmds))

    def add_link(self, x, y, w, h, url):
        # Add a PDF hyperlink annotation
        safe_url = self.sanitize(url)
        annot = f"<< /Type /Annot /Subtype /Link /Rect [{x:.2f} {y:.2f} {x+w:.2f} {y+h:.2f}] /Border [0 0 0] /A << /S /URI /URI ({safe_url}) >> >>"
        self.current_page_annots.append(annot)

    def draw_text(self, text, x, y, font="F1", size=10, color_rgb=(0, 0, 0)):
        safe_text = self.sanitize(text)
        cmd = f"""q
{color_rgb[0]:.3f} {color_rgb[1]:.3f} {color_rgb[2]:.3f} rg
BT
/{font} {size} Tf
{x:.2f} {y:.2f} Td
({safe_text}) Tj
ET
Q"""
        self.current_page_commands.append(cmd)

    def measure_text_width(self, text, font="F1", size=10):
        # Average character width estimation for Type 1 fonts
        if "Bold" in font or font == "F2" or font == "F4":
            factor = 0.55
        elif font == "F5" or font == "F6": # Courier
            factor = 0.60
        else:
            factor = 0.50
        return len(text) * size * factor

    def wrap_text(self, text, max_width, font="F1", size=10):
        words = text.split(" ")
        lines = []
        current_line = []
        for word in words:
            test_line = " ".join(current_line + [word])
            if self.measure_text_width(test_line, font, size) <= max_width:
                current_line.append(word)
            else:
                if current_line:
                    lines.append(" ".join(current_line))
                    current_line = [word]
                else:
                    lines.append(word)
                    current_line = []
        if current_line:
            lines.append(" ".join(current_line))
        return lines

    # High Level Document Structure Elements

    def add_cover_page(self, title, subtitle, organization, live_domain, registration, date_str):
        # Dark modern cover page
        self.add_rect(0, 0, self.page_width, self.page_height, fill_rgb=(0.05, 0.05, 0.05))
        
        # Accent top bar (Rust #B75928)
        self.add_rect(0, self.page_height - 12, self.page_width, 12, fill_rgb=(0.72, 0.35, 0.16))
        
        # Main Title Box
        y_pos = self.page_height - 140
        self.draw_text("AUTONOMOUS REGISTERED SOCIETY  *  GOVT. OF NAGALAND", 50, y_pos, font="F6", size=9, color_rgb=(0.72, 0.35, 0.16))
        
        y_pos -= 50
        self.draw_text("NEPED & NEPeD", 50, y_pos, font="F2", size=36, color_rgb=(1.0, 1.0, 1.0))
        
        y_pos -= 28
        self.draw_text("Master Website Documentation & Complete Proofreading Dossier", 50, y_pos, font="F1", size=15, color_rgb=(0.9, 0.9, 0.9))
        
        y_pos -= 35
        self.add_rect(50, y_pos, self.page_width - 100, 1, fill_rgb=(0.3, 0.3, 0.3))
        
        # Meta Card
        y_pos -= 130
        self.add_rect(50, y_pos, self.page_width - 100, 115, fill_rgb=(0.11, 0.11, 0.11), stroke_rgb=(0.25, 0.25, 0.25))
        
        self.draw_text("DOCUMENT PURPOSE & SCOPE", 65, y_pos + 92, font="F2", size=9, color_rgb=(0.72, 0.35, 0.16))
        self.draw_text("Complete textual, technical, historical, and archival proofreading dossier for the official website.", 65, y_pos + 72, font="F1", size=9.5, color_rgb=(0.9, 0.9, 0.9))
        self.draw_text("Every data point, narrative section, turbine specification, project record, photo caption, and field report", 65, y_pos + 56, font="F1", size=9.5, color_rgb=(0.75, 0.75, 0.75))
        self.draw_text("is cataloged along with its exact live URL route at the production domain neped.vercel.app.", 65, y_pos + 40, font="F1", size=9.5, color_rgb=(0.75, 0.75, 0.75))
        self.draw_text("Live Master Production Domain: https://neped.vercel.app/", 65, y_pos + 18, font="F2", size=10, color_rgb=(0.72, 0.35, 0.16))
        self.add_link(65, y_pos + 12, 380, 18, "https://neped.vercel.app/")

        # Key Information Table
        y_pos -= 190
        info_items = [
            ("Master Umbrella Body:", "NEPED (Nagaland Empowerment of People through Economic Development)"),
            ("Clean Energy Wing:", "NEPeD (Clean Energy Development Division)"),
            ("Legal Registration:", "NO. H/RS-4238 (19-04-2005) & NO. HOME/SRC-6751 (07-07-2014)"),
            ("Secretariat Address:", "Old Secretariat Complex, Kohima -- 797001, Nagaland"),
            ("Official Email Contact:", "nepednagaland@gmail.com"),
            ("Compilation Date:", date_str),
            ("Verified Route Count:", "10 Core Routes + 13 Project Dossiers + 6 Blog Articles + 8 Gallery Exhibits"),
        ]
        
        for label, val in info_items:
            self.draw_text(label, 50, y_pos, font="F2", size=9.5, color_rgb=(0.72, 0.35, 0.16))
            self.draw_text(val, 200, y_pos, font="F1", size=9.5, color_rgb=(0.85, 0.85, 0.85))
            y_pos -= 22

        # Bottom Call to Action
        y_pos = 65
        self.add_rect(50, y_pos, self.page_width - 100, 36, fill_rgb=(0.15, 0.25, 0.20), stroke_rgb=(0.20, 0.40, 0.30))
        self.draw_text("CLICK ANY ROUTE BADGE THROUGHOUT THIS PDF TO OPEN THE LIVE WEB PAGE", 65, y_pos + 14, font="F2", size=9, color_rgb=(0.9, 1.0, 0.9))
        self.add_link(50, y_pos, self.page_width - 100, 36, "https://neped.vercel.app/")

        self.start_new_page()

    def add_page_header(self, route_url, page_title, component_file=None):
        self.check_space(75)
        # Header banner box
        box_h = 44 if not component_file else 56
        self.add_rect(self.margin_left, self.y - box_h, self.content_width, box_h, fill_rgb=(0.96, 0.96, 0.97), stroke_rgb=(0.85, 0.85, 0.88))
        
        # Orange left marker
        self.add_rect(self.margin_left, self.y - box_h, 4, box_h, fill_rgb=(0.72, 0.35, 0.16))
        
        self.draw_text(f"LIVE ROUTE: {route_url}", self.margin_left + 12, self.y - 15, font="F6", size=8.5, color_rgb=(0.72, 0.35, 0.16))
        self.add_link(self.margin_left + 12, self.y - 18, self.content_width - 24, 14, route_url)
        
        self.draw_text(page_title, self.margin_left + 12, self.y - 32, font="F2", size=13, color_rgb=(0.05, 0.05, 0.05))
        
        if component_file:
            self.draw_text(f"Source Component: {component_file}", self.margin_left + 12, self.y - 48, font="F5", size=8, color_rgb=(0.45, 0.45, 0.45))
            
        self.y -= (box_h + 16)

    def add_section_h1(self, title):
        self.check_space(38)
        self.y -= 8
        self.draw_text(title, self.margin_left, self.y, font="F2", size=13, color_rgb=(0.05, 0.05, 0.05))
        self.add_rect(self.margin_left, self.y - 4, self.content_width, 1, fill_rgb=(0.72, 0.35, 0.16))
        self.y -= 16

    def add_section_h2(self, title):
        self.check_space(28)
        self.y -= 4
        self.draw_text(title, self.margin_left, self.y, font="F2", size=10.5, color_rgb=(0.15, 0.15, 0.15))
        self.y -= 14

    def add_paragraph(self, text, font="F1", size=9.5, line_height=13.5, color_rgb=(0.15, 0.15, 0.15), max_width=None):
        if max_width is None:
            max_width = self.content_width
            
        lines = self.wrap_text(text, max_width, font, size)
        for line in lines:
            self.check_space(line_height + 2)
            self.draw_text(line, self.margin_left, self.y, font=font, size=size, color_rgb=color_rgb)
            self.y -= line_height
        self.y -= 4

    def add_callout_box(self, text, title=None, bg_rgb=(0.95, 0.95, 0.95), border_rgb=(0.72, 0.35, 0.16), text_rgb=(0.1, 0.1, 0.1)):
        max_w = self.content_width - 24
        lines = self.wrap_text(text, max_w, "F3", 9.5)
        title_lines = 1 if title else 0
        box_h = 16 + (title_lines * 16) + (len(lines) * 13.5)
        
        self.check_space(box_h + 8)
        self.add_rect(self.margin_left, self.y - box_h, self.content_width, box_h, fill_rgb=bg_rgb, stroke_rgb=(0.85, 0.85, 0.85))
        self.add_rect(self.margin_left, self.y - box_h, 3.5, box_h, fill_rgb=border_rgb)
        
        curr_y = self.y - 14
        if title:
            self.draw_text(title, self.margin_left + 12, curr_y, font="F2", size=9.5, color_rgb=border_rgb)
            curr_y -= 14
            
        for line in lines:
            self.draw_text(line, self.margin_left + 12, curr_y, font="F3", size=9.5, color_rgb=text_rgb)
            curr_y -= 13.5
            
        self.y -= (box_h + 10)

    def add_dark_card(self, title, items, badge=None):
        card_h = 24 + 18 + (len(items) * 16) + 12
        self.check_space(card_h + 8)
        
        self.add_rect(self.margin_left, self.y - card_h, self.content_width, card_h, fill_rgb=(0.11, 0.11, 0.11), stroke_rgb=(0.20, 0.20, 0.20))
        curr_y = self.y - 18
        
        self.draw_text(title, self.margin_left + 14, curr_y, font="F2", size=11, color_rgb=(1.0, 1.0, 1.0))
        if badge:
            badge_w = len(badge) * 6 + 12
            self.add_rect(self.margin_left + self.content_width - badge_w - 14, curr_y - 2, badge_w, 14, fill_rgb=(0.72, 0.35, 0.16))
            self.draw_text(badge, self.margin_left + self.content_width - badge_w - 8, curr_y + 1, font="F6", size=7.5, color_rgb=(1.0, 1.0, 1.0))
            
        curr_y -= 18
        for k, v in items:
            self.draw_text(f"*  {k}:", self.margin_left + 14, curr_y, font="F2", size=8.5, color_rgb=(0.72, 0.35, 0.16))
            self.draw_text(v, self.margin_left + 140, curr_y, font="F1", size=8.5, color_rgb=(0.85, 0.85, 0.85))
            curr_y -= 15
            
        self.y -= (card_h + 10)

    def add_bullet(self, title, desc=None):
        prefix = f"*  {title}"
        if desc:
            lines = self.wrap_text(f"{prefix}: {desc}", self.content_width - 12, "F1", 9.0)
        else:
            lines = self.wrap_text(prefix, self.content_width - 12, "F1", 9.0)
            
        for i, line in enumerate(lines):
            self.check_space(13)
            self.draw_text(line, self.margin_left + 8, self.y, font="F1", size=9.0, color_rgb=(0.15, 0.15, 0.15))
            self.y -= 13
        self.y -= 2

    def add_table(self, headers, rows, col_widths=None):
        if not col_widths:
            w = self.content_width / len(headers)
            col_widths = [w] * len(headers)
            
        row_height = 18
        table_height = (len(rows) + 1) * row_height
        
        self.check_space(table_height + 10)
        
        # Header Row
        self.add_rect(self.margin_left, self.y - row_height, self.content_width, row_height, fill_rgb=(0.15, 0.15, 0.15))
        curr_x = self.margin_left + 6
        for i, h in enumerate(headers):
            self.draw_text(h, curr_x, self.y - 13, font="F2", size=8.5, color_rgb=(1.0, 1.0, 1.0))
            curr_x += col_widths[i]
        self.y -= row_height
        
        # Data Rows
        for r_idx, row in enumerate(rows):
            self.check_space(row_height + 2)
            bg = (0.96, 0.96, 0.96) if r_idx % 2 == 0 else (1.0, 1.0, 1.0)
            self.add_rect(self.margin_left, self.y - row_height, self.content_width, row_height, fill_rgb=bg, stroke_rgb=(0.88, 0.88, 0.88), line_width=0.5)
            curr_x = self.margin_left + 6
            for i, cell in enumerate(row):
                cell_str = str(cell)
                # truncate if too long
                max_chars = int(col_widths[i] / 5.5)
                if len(cell_str) > max_chars:
                    cell_str = cell_str[:max_chars-3] + "..."
                self.draw_text(cell_str, curr_x, self.y - 13, font="F1", size=8.0, color_rgb=(0.1, 0.1, 0.1))
                curr_x += col_widths[i]
            self.y -= row_height
            
        self.y -= 8

    def build_pdf(self):
        # Save last page
        if self.current_page_commands:
            self.pages.append({
                "commands": self.current_page_commands,
                "annots": self.current_page_annots,
                "chapter": self.current_chapter,
                "route": self.current_route
            })
            
        total_pages = len(self.pages)
        print(f"Total pages generated: {total_pages}")
        
        # Apply Running Headers and Footers to all pages except Cover (Page 1)
        for idx, page in enumerate(self.pages):
            if idx == 0:
                continue # Skip Cover Page
            page_num = idx + 1
            header_cmds = []
            footer_cmds = []
            
            # Header
            header_cmds.append(f"""q
0.72 0.35 0.16 rg
{self.margin_left:.2f} {self.page_height - 24:.2f} {self.content_width:.2f} 1.5 re
f
Q""")
            header_text = self.sanitize(f"NEPED & NEPeD Master Proofreading Dossier  |  {page['chapter']}")
            header_cmds.append(f"""q
0.40 0.40 0.40 rg
BT
/F1 7.5 Tf
{self.margin_left:.2f} {self.page_height - 18:.2f} Td
({header_text}) Tj
ET
Q""")
            
            # Footer
            footer_cmds.append(f"""q
0.85 0.85 0.85 rg
{self.margin_left:.2f} 36.00 {self.content_width:.2f} 0.5 re
f
Q""")
            footer_left = self.sanitize("Live Domain: https://neped.vercel.app/  (Govt. of Nagaland)")
            footer_right = self.sanitize(f"Page {page_num} of {total_pages}")
            
            footer_cmds.append(f"""q
0.45 0.45 0.45 rg
BT
/F1 7.5 Tf
{self.margin_left:.2f} 24.00 Td
({footer_left}) Tj
ET
BT
/F2 7.5 Tf
{self.page_width - self.margin_right - 60:.2f} 24.00 Td
({footer_right}) Tj
ET
Q""")
            # Combine
            page["commands"] = header_cmds + page["commands"] + footer_cmds
            
            # Add footer link
            footer_annot = f"<< /Type /Annot /Subtype /Link /Rect [{self.margin_left:.2f} 20.00 {self.margin_left+220:.2f} 32.00] /Border [0 0 0] /A << /S /URI /URI (https://neped.vercel.app/) >> >>"
            page["annots"].append(footer_annot)

        # Assemble PDF Objects
        pdf_bytes = bytearray()
        pdf_bytes.extend(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        
        font_count = 8
        base_obj_count = 2 + font_count
        
        curr_obj_id = base_obj_count + 1
        page_obj_ids = []
        page_stream_ids = []
        page_annot_map = {}
        
        for idx in range(total_pages):
            p_id = curr_obj_id
            curr_obj_id += 1
            s_id = curr_obj_id
            curr_obj_id += 1
            
            page_obj_ids.append(p_id)
            page_stream_ids.append(s_id)
            
            ann_ids = []
            for _ in self.pages[idx]["annots"]:
                ann_ids.append(curr_obj_id)
                curr_obj_id += 1
            page_annot_map[idx] = ann_ids
            
        total_objects = curr_obj_id - 1
        offsets = [0] * (total_objects + 1)
        
        def write_obj(obj_id, content_bytes):
            offsets[obj_id] = len(pdf_bytes)
            pdf_bytes.extend(f"{obj_id} 0 obj\n".encode('latin1'))
            pdf_bytes.extend(content_bytes)
            pdf_bytes.extend(b"\nendobj\n")
            
        # 1: Catalog
        write_obj(1, b"<< /Type /Catalog /Pages 2 0 R >>")
        
        # 2: Pages
        kids_str = " ".join([f"{p_id} 0 R" for p_id in page_obj_ids])
        write_obj(2, f"<< /Type /Pages /Kids [{kids_str}] /Count {total_pages} >>".encode('latin1'))
        
        # 3..10: Fonts
        write_obj(3, b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
        write_obj(4, b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
        write_obj(5, b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>")
        write_obj(6, b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-BoldOblique >>")
        write_obj(7, b"<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>")
        write_obj(8, b"<< /Type /Font /Subtype /Type1 /BaseFont /Courier-Bold >>")
        write_obj(9, b"<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>")
        write_obj(10, b"<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold >>")
        
        # Write Pages and Contents
        for idx in range(total_pages):
            p_id = page_obj_ids[idx]
            s_id = page_stream_ids[idx]
            ann_ids = page_annot_map[idx]
            
            ann_ref_str = ""
            if ann_ids:
                ann_ref_str = f" /Annots [{' '.join([f'{a} 0 R' for a in ann_ids])}]"
                
            page_obj_str = f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {self.page_width:.2f} {self.page_height:.2f}] /Contents {s_id} 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R /F4 6 0 R /F5 7 0 R /F6 8 0 R /F7 9 0 R /F8 10 0 R >> >>{ann_ref_str} >>"
            write_obj(p_id, page_obj_str.encode('latin1'))
            
            # Content stream
            raw_stream = "\n".join(self.pages[idx]["commands"]).encode('latin1')
            comp_stream = zlib.compress(raw_stream)
            stream_obj_str = f"<< /Length {len(comp_stream)} /Filter /FlateDecode >>\nstream\n".encode('latin1') + comp_stream + b"\nendstream"
            write_obj(s_id, stream_obj_str)
            
            # Annotations
            for a_idx, annot_str in enumerate(self.pages[idx]["annots"]):
                a_id = ann_ids[a_idx]
                write_obj(a_id, annot_str.encode('latin1'))
                
        # XREF Table
        xref_offset = len(pdf_bytes)
        pdf_bytes.extend(f"xref\n0 {total_objects + 1}\n0000000000 65535 f \n".encode('latin1'))
        for obj_id in range(1, total_objects + 1):
            pdf_bytes.extend(f"{offsets[obj_id]:010d} 00000 n \n".encode('latin1'))
            
        # Trailer
        pdf_bytes.extend(f"trailer\n<< /Size {total_objects + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n".encode('latin1'))
        
        with open(self.filename, "wb") as f:
            f.write(pdf_bytes)
            
        print(f"Successfully generated PDF '{self.filename}' ({len(pdf_bytes)} bytes)")

print("PDF Engine updated.")
