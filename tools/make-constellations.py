"""Build the constellation stick-figure icons in ../constellations/.

Each figure is drawn from real star positions (J2000 RA/Dec) projected
around the constellation's centre, with north up and east LEFT, the way
it looks when you face it in the sky. Brighter stars get bigger dots.
Run:  python3 tools/make-constellations.py
"""
import math, os

OUT = os.path.join(os.path.dirname(__file__), "..", "constellations")

def ra(h, m, s=0): return (h + m / 60 + s / 3600) * 15
def dec(d, m, s=0):
    sign = -1 if str(d).startswith("-") else 1
    return sign * (abs(d) + m / 60 + s / 3600)

# name: (ra_deg, dec_deg, magnitude)
FIG = {}

FIG["orion"] = dict(stars={
    "Betelgeuse": (ra(5,55,10), dec(7,24), 0.5), "Rigel": (ra(5,14,32), dec(-8,12), 0.13),
    "Bellatrix": (ra(5,25,8), dec(6,21), 1.64), "Mintaka": (ra(5,32,0), dec(-0,18), 2.23),
    "Alnilam": (ra(5,36,13), dec(-1,12), 1.69), "Alnitak": (ra(5,40,46), dec(-1,57), 1.77),
    "Saiph": (ra(5,47,45), dec(-9,40), 2.06), "Meissa": (ra(5,35,8), dec(9,56), 3.39),
    "pi1": (ra(4,54,54), dec(10,9), 4.6), "pi2": (ra(4,50,36), dec(8,54), 4.35),
    "pi3": (ra(4,49,50), dec(6,58), 3.19), "pi4": (ra(4,51,12), dec(5,36), 3.68),
    "pi5": (ra(4,54,15), dec(2,26), 3.7),
}, lines=[["Meissa","Betelgeuse","Alnitak","Saiph","Rigel","Mintaka","Bellatrix","Meissa"],
          ["Betelgeuse","Bellatrix"], ["Mintaka","Alnilam","Alnitak"],
          ["Bellatrix","pi3"], ["pi1","pi2","pi3","pi4","pi5"]])

FIG["big-dipper"] = dict(stars={
    "Dubhe": (ra(11,3,44), dec(61,45), 1.79), "Merak": (ra(11,1,50), dec(56,23), 2.37),
    "Phecda": (ra(11,53,50), dec(53,42), 2.44), "Megrez": (ra(12,15,26), dec(57,2), 3.31),
    "Alioth": (ra(12,54,2), dec(55,58), 1.77), "Mizar": (ra(13,23,56), dec(54,56), 2.27),
    "Alkaid": (ra(13,47,32), dec(49,19), 1.86),
}, lines=[["Dubhe","Merak","Phecda","Megrez","Dubhe"], ["Megrez","Alioth","Mizar","Alkaid"]])

FIG["polaris"] = dict(stars={
    "Polaris": (ra(2,31,49), dec(89,16), 1.98), "Yildun": (ra(17,32,13), dec(86,35), 4.36),
    "eps": (ra(16,45,58), dec(82,2), 4.21), "zeta": (ra(15,44,4), dec(77,48), 4.32),
    "Kochab": (ra(14,50,42), dec(74,9), 2.08), "Pherkad": (ra(15,20,44), dec(71,50), 3.05),
    "eta": (ra(16,17,30), dec(75,45), 4.95),
}, lines=[["Polaris","Yildun","eps","zeta","Kochab","Pherkad","eta","zeta"]], key="Polaris")

FIG["cassiopeia"] = dict(stars={
    "Caph": (ra(0,9,11), dec(59,9), 2.27), "Schedar": (ra(0,40,30), dec(56,32), 2.24),
    "gamma": (ra(0,56,43), dec(60,43), 2.47), "Ruchbah": (ra(1,25,49), dec(60,14), 2.68),
    "Segin": (ra(1,54,24), dec(63,40), 3.37),
}, lines=[["Caph","Schedar","gamma","Ruchbah","Segin"]])

FIG["cygnus"] = dict(stars={
    "Deneb": (ra(20,41,26), dec(45,17), 1.25), "Sadr": (ra(20,22,14), dec(40,15), 2.23),
    "Albireo": (ra(19,30,43), dec(27,58), 3.08), "Gienah": (ra(20,46,13), dec(33,58), 2.48),
    "delta": (ra(19,44,58), dec(45,8), 2.87), "zeta": (ra(21,12,56), dec(30,14), 3.2),
    "kappa": (ra(19,17,6), dec(53,22), 3.8), "eta": (ra(19,56,18), dec(35,5), 3.9),
}, lines=[["Deneb","Sadr","eta","Albireo"], ["kappa","delta","Sadr","Gienah","zeta"]])

FIG["lyra"] = dict(stars={
    "Vega": (ra(18,36,56), dec(38,47), 0.03), "eps": (ra(18,44,20), dec(39,40), 4.7),
    "zeta": (ra(18,44,46), dec(37,36), 4.3), "delta": (ra(18,54,30), dec(36,54), 4.3),
    "Sulafat": (ra(18,58,56), dec(32,41), 3.24), "Sheliak": (ra(18,50,5), dec(33,22), 3.5),
}, lines=[["eps","Vega","zeta"], ["zeta","delta","Sulafat","Sheliak","zeta"]])

FIG["aquila"] = dict(stars={
    "Altair": (ra(19,50,47), dec(8,52), 0.77), "Tarazed": (ra(19,46,16), dec(10,37), 2.72),
    "Alshain": (ra(19,55,19), dec(6,24), 3.71), "zeta": (ra(19,5,25), dec(13,52), 2.99),
    "eps": (ra(18,59,37), dec(15,4), 4.0), "delta": (ra(19,25,30), dec(3,7), 3.36),
    "theta": (ra(20,11,18), dec(-0,49), 3.23), "lambda": (ra(19,6,15), dec(-4,53), 3.43),
}, lines=[["eps","zeta","Tarazed","Altair","Alshain","theta"], ["Altair","delta","lambda"]])

FIG["scorpius"] = dict(stars={
    "Acrab": (ra(16,5,26), dec(-19,48), 2.6), "Dschubba": (ra(16,0,20), dec(-22,37), 2.3),
    "pi": (ra(15,58,51), dec(-26,7), 2.9), "rho": (ra(15,56,53), dec(-29,13), 3.9),
    "sigma": (ra(16,21,11), dec(-25,36), 2.9), "Antares": (ra(16,29,24), dec(-26,26), 1.06),
    "tau": (ra(16,35,53), dec(-28,13), 2.8), "eps": (ra(16,50,10), dec(-34,18), 2.3),
    "mu": (ra(16,51,52), dec(-38,3), 3.0), "zeta": (ra(16,54,35), dec(-42,22), 3.6),
    "eta": (ra(17,12,9), dec(-43,14), 3.3), "Sargas": (ra(17,37,19), dec(-43,0), 1.86),
    "iota": (ra(17,47,35), dec(-40,8), 3.0), "kappa": (ra(17,42,29), dec(-39,2), 2.4),
    "Shaula": (ra(17,33,36), dec(-37,6), 1.63), "Lesath": (ra(17,30,46), dec(-37,18), 2.7),
}, lines=[["Acrab","Dschubba","pi","rho"],
          ["Dschubba","sigma","Antares","tau","eps","mu","zeta","eta","Sargas","iota","kappa","Shaula","Lesath"]])

FIG["sagittarius"] = dict(stars={
    "KausAustralis": (ra(18,24,10), dec(-34,23), 1.85), "KausMedia": (ra(18,21,0), dec(-29,50), 2.7),
    "KausBorealis": (ra(18,27,58), dec(-25,25), 2.8), "Alnasl": (ra(18,5,48), dec(-30,25), 2.99),
    "Nunki": (ra(18,55,16), dec(-26,18), 2.05), "phi": (ra(18,45,39), dec(-26,59), 3.17),
    "tau": (ra(19,6,56), dec(-27,40), 3.3), "Ascella": (ra(19,2,37), dec(-29,53), 2.6),
}, lines=[["Alnasl","KausMedia","KausAustralis","Alnasl"], ["KausMedia","KausBorealis","phi","KausMedia"],
          ["KausAustralis","Ascella","phi"], ["phi","Nunki","tau","Ascella"]])

FIG["leo"] = dict(stars={
    "Regulus": (ra(10,8,22), dec(11,58), 1.35), "eta": (ra(10,7,20), dec(16,46), 3.5),
    "Algieba": (ra(10,19,58), dec(19,50), 2.0), "Adhafera": (ra(10,16,41), dec(23,25), 3.4),
    "mu": (ra(9,52,46), dec(26,0), 3.9), "eps": (ra(9,45,51), dec(23,46), 3.0),
    "Denebola": (ra(11,49,4), dec(14,34), 2.1), "Zosma": (ra(11,14,6), dec(20,31), 2.6),
    "Chertan": (ra(11,14,14), dec(15,26), 3.3),
}, lines=[["Regulus","eta","Algieba","Adhafera","mu","eps"],
          ["Algieba","Zosma","Denebola","Chertan","Regulus"], ["Zosma","Chertan"]])

FIG["taurus"] = dict(stars={
    "Aldebaran": (ra(4,35,55), dec(16,31), 0.85), "theta2": (ra(4,28,40), dec(15,52), 3.4),
    "gamma": (ra(4,19,48), dec(15,38), 3.65), "delta": (ra(4,22,56), dec(17,33), 3.8),
    "eps": (ra(4,28,37), dec(19,11), 3.5), "Elnath": (ra(5,26,18), dec(28,36), 1.65),
    "zeta": (ra(5,37,39), dec(21,9), 3.0), "lambda": (ra(4,0,41), dec(12,29), 3.4),
    "omicron": (ra(3,24,49), dec(9,2), 3.6),
    "Alcyone": (ra(3,47,29), dec(24,6), 2.87), "Atlas": (ra(3,49,10), dec(24,3), 3.6),
    "Electra": (ra(3,44,53), dec(24,7), 3.7), "Maia": (ra(3,45,50), dec(24,22), 3.9),
    "Merope": (ra(3,46,20), dec(23,57), 4.2), "Taygeta": (ra(3,45,12), dec(24,28), 4.3),
}, lines=[["gamma","delta","eps","Elnath"], ["gamma","theta2","Aldebaran","zeta"],
          ["gamma","lambda","omicron"]], min_r=1.4,
   # the Pleiades are too tight to tell apart at icon size: spread them 2.5x around Alcyone
   cluster=(["Alcyone","Atlas","Electra","Maia","Merope","Taygeta"], "Alcyone", 2.5))

FIG["gemini"] = dict(stars={
    "Castor": (ra(7,34,36), dec(31,53), 1.58), "Pollux": (ra(7,45,19), dec(28,2), 1.14),
    "Alhena": (ra(6,37,43), dec(16,24), 1.9), "Tejat": (ra(6,22,58), dec(22,31), 2.9),
    "Propus": (ra(6,14,53), dec(22,30), 3.3), "Mebsuta": (ra(6,43,56), dec(25,8), 3.0),
    "Wasat": (ra(7,20,7), dec(21,59), 3.5), "xi": (ra(6,45,17), dec(12,54), 3.4),
    "Mekbuda": (ra(7,4,7), dec(20,34), 3.9), "tau": (ra(7,11,8), dec(30,15), 4.4),
    "lambda": (ra(7,18,6), dec(16,32), 3.6), "iota": (ra(7,25,44), dec(27,48), 3.8),
}, lines=[["Castor","tau","Mebsuta","Tejat","Propus"], ["Castor","Pollux"],
          ["Pollux","iota","tau"], ["Pollux","Wasat","Mekbuda","Alhena"], ["Wasat","lambda","xi"]])

FIG["canis-major"] = dict(stars={
    "Sirius": (ra(6,45,9), dec(-16,43), -1.46), "Mirzam": (ra(6,22,42), dec(-17,57), 1.98),
    "Adhara": (ra(6,58,38), dec(-28,58), 1.5), "Wezen": (ra(7,8,23), dec(-26,24), 1.84),
    "Aludra": (ra(7,24,6), dec(-29,18), 2.45), "omicron2": (ra(7,3,1), dec(-23,50), 3.0),
    "Furud": (ra(6,20,19), dec(-30,4), 3.0), "gamma": (ra(7,3,45), dec(-15,38), 4.1),
    "iota": (ra(6,56,8), dec(-17,3), 4.4),
}, lines=[["Mirzam","Sirius","iota","gamma"], ["Sirius","omicron2","Wezen","Aludra"],
          ["Wezen","Adhara","Furud"]])

FIG["auriga"] = dict(stars={
    "Capella": (ra(5,16,41), dec(45,60), 0.08), "Menkalinan": (ra(5,59,32), dec(44,57), 1.9),
    "theta": (ra(5,59,43), dec(37,13), 2.6), "Elnath": (ra(5,26,18), dec(28,36), 1.65),
    "Hassaleh": (ra(4,57,0), dec(33,10), 2.7), "Almaaz": (ra(5,1,58), dec(43,49), 3.0),
    "zeta": (ra(5,2,29), dec(41,5), 3.75), "Haedus": (ra(5,6,31), dec(41,14), 3.2),
}, lines=[["Capella","Menkalinan","theta","Elnath","Hassaleh","Capella"], ["Capella","Almaaz","zeta","Haedus","Capella"]])

FIG["bootes"] = dict(stars={
    "Arcturus": (ra(14,15,40), dec(19,11), -0.05), "Izar": (ra(14,44,59), dec(27,4), 2.4),
    "delta": (ra(15,15,30), dec(33,19), 3.5), "Nekkar": (ra(15,1,57), dec(40,23), 3.5),
    "Seginus": (ra(14,32,5), dec(38,18), 3.0), "rho": (ra(14,31,50), dec(30,22), 3.6),
    "Muphrid": (ra(13,54,41), dec(18,24), 2.7), "zeta": (ra(14,41,9), dec(13,44), 3.8),
}, lines=[["Arcturus","Izar","delta","Nekkar","Seginus","rho","Arcturus"], ["Arcturus","Muphrid"], ["Arcturus","zeta"]])

FIG["virgo"] = dict(stars={
    "Spica": (ra(13,25,12), dec(-11,10), 0.98), "Porrima": (ra(12,41,40), dec(-1,27), 2.7),
    "Minelauva": (ra(12,55,36), dec(3,24), 3.4), "Vindemiatrix": (ra(13,2,11), dec(10,58), 2.8),
    "Zavijava": (ra(11,50,42), dec(1,46), 3.6), "Zaniah": (ra(12,19,54), dec(-0,40), 3.9),
    "Heze": (ra(13,34,42), dec(-0,36), 3.4), "theta": (ra(13,9,57), dec(-5,32), 4.4),
    "iota": (ra(14,16,1), dec(-6,0), 4.1), "mu": (ra(14,43,4), dec(-5,39), 3.9),
}, lines=[["Zavijava","Zaniah","Porrima","Minelauva","Vindemiatrix"], ["Porrima","theta","Spica"],
          ["Minelauva","Heze","iota","mu"]])

SQUARE = {"Markab": (ra(23,4,46), dec(15,12), 2.5), "Scheat": (ra(23,3,46), dec(28,5), 2.4),
          "Algenib": (ra(0,13,14), dec(15,11), 2.8), "Alpheratz": (ra(0,8,23), dec(29,5), 2.06)}
FIG["pegasus"] = dict(stars={**SQUARE,
    "Enif": (ra(21,44,11), dec(9,52), 2.4), "theta": (ra(22,10,12), dec(6,12), 3.5),
    "zeta": (ra(22,41,28), dec(10,50), 3.4), "eta": (ra(22,43,0), dec(30,13), 2.9),
    "mu": (ra(22,50,0), dec(24,36), 3.5), "lambda": (ra(22,46,32), dec(23,34), 3.95),
    "iota": (ra(22,7,0), dec(25,21), 3.8), "kappa": (ra(21,44,39), dec(25,39), 4.1),
}, lines=[["Markab","Scheat","Alpheratz","Algenib","Markab"], ["Markab","zeta","theta","Enif"],
          ["Scheat","eta"], ["Scheat","mu","lambda","iota","kappa"]])

FIG["andromeda"] = dict(stars={**SQUARE,
    "delta": (ra(0,39,20), dec(30,52), 3.3), "Mirach": (ra(1,9,44), dec(35,37), 2.05),
    "Almach": (ra(2,3,54), dec(42,20), 2.1), "mu": (ra(0,56,45), dec(38,30), 3.9),
    "nu": (ra(0,49,49), dec(41,5), 4.5),
}, lines=[["Alpheratz","delta","Mirach","Almach"], ["Mirach","mu","nu"]],
   faint=[["Alpheratz","Scheat","Markab","Algenib","Alpheratz"]],
   dim={"Scheat","Markab","Algenib"},
   galaxy=(ra(0,42,44), dec(41,16)))

CRUX = {"Acrux": (ra(12,26,36), dec(-63,6), 0.77), "Mimosa": (ra(12,47,43), dec(-59,41), 1.25),
        "Gacrux": (ra(12,31,10), dec(-57,7), 1.6), "Imai": (ra(12,15,9), dec(-58,45), 2.8),
        "eps": (ra(12,21,22), dec(-60,24), 3.6)}
FIG["crux"] = dict(stars=CRUX, lines=[["Acrux","Gacrux"], ["Mimosa","Imai"]])

FIG["centaurus"] = dict(stars={**{k: v for k, v in CRUX.items() if k != "eps"},
    "AlphaCen": (ra(14,39,36), dec(-60,50), -0.27), "Hadar": (ra(14,3,49), dec(-60,22), 0.61),
    "eps": (ra(13,39,53), dec(-53,28), 2.3), "zeta": (ra(13,55,32), dec(-47,17), 2.55),
    "eta": (ra(14,35,30), dec(-42,9), 2.3), "Menkent": (ra(14,6,41), dec(-36,22), 2.06),
    "iota": (ra(13,20,36), dec(-36,43), 2.75), "gamma": (ra(12,41,31), dec(-48,58), 2.2),
    "delta": (ra(12,8,22), dec(-50,43), 2.6), "epsCru": (ra(12,21,22), dec(-60,24), 3.6),
}, lines=[["AlphaCen","Hadar","eps","zeta","eta"], ["zeta","Menkent"], ["eps","gamma","delta"], ["gamma","iota"]],
   faint=[["Acrux","Gacrux"], ["Mimosa","Imai"]], dim={"Acrux","Mimosa","Gacrux","Imai","epsCru"})

FIG["carina"] = dict(stars={
    "Canopus": (ra(6,23,57), dec(-52,42), -0.74), "Miaplacidus": (ra(9,13,12), dec(-69,43), 1.7),
    "Avior": (ra(8,22,31), dec(-59,31), 1.86), "Aspidiske": (ra(9,17,5), dec(-59,17), 2.2),
    "theta": (ra(10,42,57), dec(-64,24), 2.7), "upsilon": (ra(9,47,6), dec(-65,4), 3.0),
    "omega": (ra(10,13,44), dec(-70,2), 3.3), "chi": (ra(7,56,47), dec(-52,59), 3.5),
}, lines=[["Canopus","chi","Avior","Miaplacidus","omega","theta","upsilon","Aspidiske","Avior"]])

def project(stars, extra=()):
    pts = [(a, d) for a, d, *_ in stars.values()] + list(extra)
    # centre: mean unit vector
    vx = sum(math.cos(math.radians(d)) * math.cos(math.radians(a)) for a, d in pts)
    vy = sum(math.cos(math.radians(d)) * math.sin(math.radians(a)) for a, d in pts)
    vz = sum(math.sin(math.radians(d)) for a, d in pts)
    a0 = math.atan2(vy, vx); d0 = math.atan2(vz, math.hypot(vx, vy))
    def f(a, d):
        a, d = math.radians(a), math.radians(d)
        c = math.sin(d0) * math.sin(d) + math.cos(d0) * math.cos(d) * math.cos(a - a0)
        x = math.cos(d) * math.sin(a - a0) / c
        y = (math.cos(d0) * math.sin(d) - math.sin(d0) * math.cos(d) * math.cos(a - a0)) / c
        return -x, -y   # east left, north up (SVG y grows downward)
    return f

def build(slug, spec, size=96, pad=11):
    stars, lines = spec["stars"], spec["lines"]
    extra = [spec["galaxy"]] if "galaxy" in spec else []
    f = project(stars, extra)
    xy = {k: f(a, d) for k, (a, d, m) in stars.items()}
    allp = list(xy.values()) + [f(*g) for g in extra]
    xs, ys = [p[0] for p in allp], [p[1] for p in allp]
    span = max(max(xs) - min(xs), max(ys) - min(ys))
    s = (size - 2 * pad) / span
    cx, cy = (max(xs) + min(xs)) / 2, (max(ys) + min(ys)) / 2
    P = lambda p: (size / 2 + (p[0] - cx) * s, size / 2 + (p[1] - cy) * s)
    pt = {k: P(v) for k, v in xy.items()}
    if "cluster" in spec:
        names, hub, k = spec["cluster"]
        hx, hy = pt[hub]
        for n in names:
            pt[n] = (hx + (pt[n][0] - hx) * k, hy + (pt[n][1] - hy) * k)
    dim = spec.get("dim", set())
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="{size}" height="{size}">',
         f'<rect width="{size}" height="{size}" rx="12" fill="#11163a"/>']
    def poly(chain, attrs):
        d = " ".join(f"{pt[k][0]:.1f},{pt[k][1]:.1f}" for k in chain)
        o.append(f'<polyline points="{d}" fill="none" {attrs}/>')
    for ch in spec.get("faint", []):
        poly(ch, 'stroke="#c7d2fe" stroke-opacity=".28" stroke-width="1.4" stroke-dasharray="3 3"')
    for ch in lines:
        poly(ch, 'stroke="#a5b4fc" stroke-opacity=".85" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"')
    if extra:
        gx, gy = P(f(*extra[0]))
        o.append(f'<ellipse cx="{gx:.1f}" cy="{gy:.1f}" rx="5" ry="2" transform="rotate(-35 {gx:.1f} {gy:.1f})" fill="#fde68a" opacity=".45"/>')
    min_r = spec.get("min_r", 1.7)
    for k, (a, d, m) in sorted(stars.items(), key=lambda kv: -kv[1][2]):  # faint first, bright on top
        x, y = pt[k]
        r = max(min_r, 4.2 - 0.75 * m)
        if "cluster" in spec and k in spec["cluster"][0]: r = 1.3
        if k in dim:
            o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r * 0.8:.2f}" fill="#e0e7ff" opacity=".45"/>')
            continue
        if m < 1.6:
            o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r + 3:.2f}" fill="#fde68a" opacity=".18"/>')
        o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.2f}" fill="#fef3c7"/>')
    o.append("</svg>")
    with open(os.path.join(OUT, slug + ".svg"), "w") as fh:
        fh.write("\n".join(o) + "\n")

if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for slug, spec in FIG.items():
        build(slug, spec)
    print("wrote", len(FIG), "icons to", os.path.abspath(OUT))
