import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const outputPng = path.join(publicDir, "og-portfolio-jorge.png");
const outputWebp = path.join(publicDir, "og-portfolio-jorge.webp");
const width = 1200;
const height = 630;

function assetPath(...segments) {
    return path.join(publicDir, ...segments);
}

function escapeXml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

function text(value, x, y, options = {}) {
    const {
        size = 32,
        weight = 600,
        fill = "#F8FAFC",
        opacity = 1,
        spacing = 0,
        family = "Arial, Helvetica, sans-serif",
    } = options;

    return `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}" opacity="${opacity}" letter-spacing="${spacing}">${escapeXml(value)}</text>`;
}

function roundedMask(w, h, radius = 28) {
    return Buffer.from(`
        <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
            <rect width="${w}" height="${h}" rx="${radius}" ry="${radius}" fill="#fff"/>
        </svg>
    `);
}

async function roundedImage(input, w, h, radius = 28, options = {}) {
    const image = await sharp(input)
        .resize(w, h, { fit: "cover", position: options.position ?? "attention" })
        .png()
        .toBuffer();

    return sharp(image)
        .composite([{ input: roundedMask(w, h, radius), blend: "dest-in" }])
        .png()
        .toBuffer();
}

async function circleImage(input, size) {
    const image = await sharp(input)
        .resize(size, size, { fit: "cover", position: "north" })
        .png()
        .toBuffer();

    const mask = Buffer.from(`
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
            <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/>
        </svg>
    `);

    return sharp(image)
        .composite([{ input: mask, blend: "dest-in" }])
        .png()
        .toBuffer();
}

const background = Buffer.from(`
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#07111A"/>
            <stop offset="48%" stop-color="#0C151D"/>
            <stop offset="100%" stop-color="#102A2D"/>
        </linearGradient>
        <radialGradient id="glowA" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1030 96) rotate(136) scale(420 280)">
            <stop stop-color="#FFE86B" stop-opacity=".38"/>
            <stop offset="1" stop-color="#FFE86B" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="glowB" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(480 610) rotate(-45) scale(500 220)">
            <stop stop-color="#51E0C2" stop-opacity=".22"/>
            <stop offset="1" stop-color="#51E0C2" stop-opacity="0"/>
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#000000" flood-opacity=".34"/>
        </filter>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#bg)"/>
    <rect width="${width}" height="${height}" fill="url(#glowA)"/>
    <rect width="${width}" height="${height}" fill="url(#glowB)"/>
    <path d="M-80 505 C210 420 260 640 544 514 C772 412 930 456 1280 370" fill="none" stroke="#51E0C2" stroke-opacity=".14" stroke-width="2"/>
    <path d="M-70 120 C180 204 328 54 530 164 C694 252 803 195 1040 128" fill="none" stroke="#FFE86B" stroke-opacity=".18" stroke-width="2"/>
    <circle cx="1092" cy="504" r="96" fill="#FFE86B" opacity=".08"/>
    <circle cx="104" cy="536" r="170" fill="#51E0C2" opacity=".07"/>

    <rect x="54" y="54" width="1092" height="522" rx="46" fill="#07111A" opacity=".74" stroke="#FFFFFF" stroke-opacity=".08"/>
    <rect x="88" y="84" width="56" height="56" rx="16" fill="#111C26" stroke="#FFE86B" stroke-opacity=".42"/>

    <circle cx="176" cy="254" r="90" fill="#FFE86B"/>
    <circle cx="176" cy="254" r="82" fill="#07111A"/>

    ${text("Jorge Antonio", 292, 184, { size: 47, weight: 800 })}
    ${text("Pérez Ordóñez", 292, 234, { size: 47, weight: 800 })}
    ${text("Software Engineer", 294, 278, { size: 25, weight: 600, fill: "#EAF2F7" })}
    ${text("Full-Stack", 294, 310, { size: 25, weight: 600, fill: "#EAF2F7" })}
    ${text("Sistemas reales para logística,", 294, 352, { size: 21, weight: 400, fill: "#B8C7D0" })}
    ${text("ventas en campo e instituciones.", 294, 381, { size: 21, weight: 400, fill: "#B8C7D0" })}

    <rect x="292" y="416" width="118" height="42" rx="21" fill="#FFE86B"/>
    ${text("6+ años", 319, 444, { size: 20, weight: 800, fill: "#0C151D" })}
    <rect x="424" y="416" width="186" height="42" rx="21" fill="#10232C" stroke="#51E0C2" stroke-opacity=".55"/>
    ${text("Cloud + Docker", 451, 444, { size: 19, weight: 700, fill: "#EAF2F7" })}

    <g filter="url(#shadow)">
        <rect x="690" y="84" width="388" height="228" rx="30" fill="#F8FAFC"/>
        <rect x="690" y="84" width="388" height="40" rx="30" fill="#E7EDF1"/>
        <circle cx="718" cy="104" r="6" fill="#FF6B6B"/>
        <circle cx="740" cy="104" r="6" fill="#FFE86B"/>
        <circle cx="762" cy="104" r="6" fill="#51E0C2"/>
        ${text("SyncFreight", 724, 292, { size: 20, weight: 800, fill: "#0C151D" })}
    </g>

    <g filter="url(#shadow)">
        <rect x="758" y="346" width="336" height="166" rx="28" fill="#F8FAFC"/>
        <rect x="758" y="346" width="336" height="34" rx="28" fill="#E7EDF1"/>
        <circle cx="784" cy="363" r="5" fill="#FF6B6B"/>
        <circle cx="803" cy="363" r="5" fill="#FFE86B"/>
        <circle cx="822" cy="363" r="5" fill="#51E0C2"/>
        ${text("SyncDistro", 790, 494, { size: 18, weight: 800, fill: "#0C151D" })}
    </g>

    <g filter="url(#shadow)">
        <rect x="638" y="414" width="266" height="136" rx="24" fill="#F8FAFC"/>
        <rect x="638" y="414" width="266" height="30" rx="24" fill="#E7EDF1"/>
        <circle cx="661" cy="429" r="4.5" fill="#FF6B6B"/>
        <circle cx="679" cy="429" r="4.5" fill="#FFE86B"/>
        <circle cx="697" cy="429" r="4.5" fill="#51E0C2"/>
        ${text("ILS · EPS USAC", 662, 532, { size: 17, weight: 800, fill: "#0C151D" })}
    </g>

    ${text("Portafolio profesional", 90, 512, { size: 22, weight: 700, fill: "#FFE86B", spacing: 3 })}
    ${text("antoniolj07.github.io/portafolio", 90, 548, { size: 20, weight: 500, fill: "#B8C7D0" })}
</svg>
`);

const logo = await sharp(assetPath("logo.png")).resize(34, 34).png().toBuffer();
const profile = await circleImage(assetPath("img", "jorge", "Perfil.jpeg"), 156);
const syncfreight = await roundedImage(assetPath("img", "projects", "syncfreight", "Syncfreight1.png"), 344, 154, 16);
const syncdistro = await roundedImage(assetPath("img", "projects", "distro", "CreacionRutaLight.png"), 292, 94, 14);
const eps = await roundedImage(assetPath("img", "projects", "eps", "Picture1.png"), 226, 70, 12);

const png = await sharp(background)
    .composite([
        { input: logo, left: 99, top: 95 },
        { input: profile, left: 98, top: 176 },
        { input: syncfreight, left: 712, top: 132 },
        { input: syncdistro, left: 780, top: 388 },
        { input: eps, left: 658, top: 454 },
    ])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();

await fs.writeFile(outputPng, png);
await sharp(png).webp({ quality: 92 }).toFile(outputWebp);

console.log(`Generated ${path.relative(rootDir, outputPng)}`);
console.log(`Generated ${path.relative(rootDir, outputWebp)}`);
