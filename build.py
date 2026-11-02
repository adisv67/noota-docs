#!/usr/bin/env python3
"""Regenerate llms.txt and llms-full.txt from the .md files present (drafts-unverified/ is excluded).
Usage: BASE=https://docs.noota.io/ python3 build.py"""
import os, re
BASE = os.environ.get("BASE", "https://docs.noota.io/").rstrip("/") + "/"
SECTIONS = [("About", "about"), ("Features", "features"), ("Security", "security"), ("Pricing", "pricing"),
            ("Solutions", "solutions"), ("Use cases", "use-cases"), ("Comparisons (sourced, with last-verified dates)", "comparisons")]
def meta(path):
    t = open(path).read()
    fm = t.split("---")[1] if t.startswith("---") else ""
    g = lambda k: (re.search(rf'^{k}:\s*"?(.*?)"?\s*$', fm, re.M) or [None, ""])[1]
    return g("title"), g("meta_description") or g("description")
files = [("FAQ", ["faq.md"])]
for h, d in SECTIONS:
    files.append((h, sorted(f"{d}/{x}" for x in os.listdir(d) if x.endswith(".md"))))
files.insert(1, files.pop(0))
o = """# Noota

> Noota is a European AI assistant for meetings, calls and email, founded in Paris in 2020. It records without a bot joining the call (desktop app, macOS and Windows), summarizes meetings, turns commitments into tasks and drafts email follow-ups. EU hosting (Google Cloud Belgium and Netherlands), optional sovereign environment (Scaleway, Bleu), ISO 27001 certified, SOC 2 Type 2 in progress, never trains AI on customer data.

Primary site: https://www.noota.io (its llms.txt: https://www.noota.io/llms.txt). These Markdown pages are plain-text mirrors with sources and verification dates; where they differ from the live site, the live site wins.

"""
full = "# Noota Documentation (full text)\n\nPrimary site: https://www.noota.io.\n"
for h, fs in files:
    if not fs: continue
    o += f"## {h}\n"
    for p in fs:
        t, d = meta(p)
        o += f"- [{t}]({BASE}{p}): {d}\n"
        full += f"\n\n---\n<!-- source: {BASE}{p} -->\n\n" + open(p).read()
    o += "\n"
o += f"## Full text\n- [All pages]({BASE}llms-full.txt): single-file version.\n"
open("llms.txt", "w").write(o); open("llms-full.txt", "w").write(full)
print(sum(len(f) for _, f in files), "pages")
