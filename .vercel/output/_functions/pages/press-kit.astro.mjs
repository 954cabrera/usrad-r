/* empty css                                 */
export { renderers } from '../renderers.mjs';

function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Michael Cabrera - USRad Press Kit</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Manrope', sans-serif;
            line-height: 1.6;
            color: #333;
            background: white;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.5in;
        }

        .header {
            text-align: center;
            border-bottom: 3px solid #cc9933;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }

        .logo-placeholder {
            width: 200px;
            height: 60px;
            background: #f0f4f9;
            border: 2px dashed #cc9933;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }

        .press-kit-title {
            font-size: 24px;
            font-weight: 700;
            color: #003087;
            margin-bottom: 10px;
        }

        .date {
            color: #666;
            font-size: 14px;
        }

        .section {
            margin-bottom: 25px;
            page-break-inside: avoid;
        }

        .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #003087;
            border-bottom: 2px solid #cc9933;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }

        .bio-section {
            display: grid;
            grid-template-columns: 150px 1fr;
            gap: 20px;
            align-items: start;
        }

        .photo-placeholder {
            width: 150px;
            height: 150px;
            background: #f0f4f9;
            border: 2px dashed #cc9933;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 12px;
            text-align: center;
            border-radius: 8px;
        }

        .bio-content h3 {
            font-size: 20px;
            font-weight: 700;
            color: #003087;
            margin-bottom: 5px;
        }

        .title {
            color: #cc9933;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 20px 0;
        }

        .stat-box {
            text-align: center;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #cc9933;
        }

        .stat-number {
            font-size: 24px;
            font-weight: 800;
            color: #003087;
        }

        .stat-label {
            font-size: 12px;
            color: #666;
            margin-top: 5px;
        }

        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
        }

        ul {
            padding-left: 20px;
        }

        li {
            margin-bottom: 5px;
        }

        .quote {
            background: #f8f9fa;
            padding: 20px;
            border-left: 4px solid #cc9933;
            font-style: italic;
            text-align: center;
            margin: 20px 0;
        }

        .contact-info {
            background: #003087;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }

        .contact-info h4 {
            margin-bottom: 10px;
            color: #cc9933;
        }

        .boilerplate {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            font-size: 14px;
        }

        @media print {
            body {
                max-width: none;
                margin: 0;
                padding: 0.5in;
            }

            .page-break {
                page-break-before: always;
            }
        }
    </style>
</head>

<body>
    <!-- Header -->
    <div class="header">
        <img src="/logo/USRad-Logo-final.png" alt="USRad Logo" style="width: 200px; height: auto; object-fit: contain;">
        <h1 class="press-kit-title">PRESS KIT</h1>
        <p class="date">Updated: May 2025</p>
    </div>

    <!-- Executive Bio -->
    <div class="section">
        <h2 class="section-title">Executive Biography</h2>
        <div class="bio-section">
            <img src="/images/michael.jpg" alt="Michael Cabrera"
                style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; border: 1px solid #ddd;">

            <div class="bio-content">
                <h3>Michael Cabrera</h3>
                <p class="title">Founder & CEO, USRad</p>
                <p>Michael Cabrera is a healthcare entrepreneur who previously led a national imaging network that was
                    acquired by a publicly traded company and was selected for MIT's "Birthing of Giants" program. At
                    USRad, he's focused on expanding access to affordable, high-quality imaging through systems built on
                    empathy, simplicity, and trust.</p>

                <p style="margin-top: 15px;"><strong>Education & Background:</strong> Healthcare entrepreneur with 15+
                    years of industry experience building and scaling imaging networks.</p>
            </div>
        </div>
    </div>

    <!-- Key Statistics -->
    <div class="section">
        <h2 class="section-title">Key Impact</h2>
        <div class="stats-grid">
            <div class="stat-box">
                <div class="stat-number">400,000+</div>
                <div class="stat-label">Imaging procedures delivered under Michael's leadership</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">70%</div>
                <div class="stat-label">Potential cost savings for employers</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">National</div>
                <div class="stat-label">Network coverage across the US</div>
            </div>
        </div>
    </div>

    <!-- Two Column Content -->
    <div class="two-column">
        <!-- Career Highlights -->
        <div class="section">
            <h2 class="section-title">Career Highlights</h2>
            <ul>
                <li>Built and scaled a national imaging network acquired by a publicly traded company</li>
                <li>Selected for MIT's "Birthing of Giants" program</li>
                <li>15+ years of healthcare industry experience</li>
                <li>Expertise in managed care and imaging network development</li>
            </ul>
        </div>

        <!-- Awards & Recognition -->
        <div class="section">
            <h2 class="section-title">Awards & Recognition</h2>
            <ul>
                <li><strong>Inc. 500:</strong> #210 Fastest Growing Private Companies</li>
                <li><strong>Hispanic Business:</strong> Top 500, 3 consecutive years</li>
                <li><strong>University of Florida:</strong> 100 Fastest Growing Companies Award, 2 consecutive years
                </li>
                <li><strong>SFBJ:</strong> 40 Under 40, Up & Comers Award</li>
            </ul>
        </div>
    </div>

    <!-- Quote -->
    <div class="quote">
        "Innovation in healthcare isn't about the latest technology—it's about making care more human, more accessible, more
        affordable."
        <br><strong>— Michael Cabrera</strong>
    </div>

    <!-- Company Overview -->
    <div class="section">
        <h2 class="section-title">About USRad</h2>
        <div class="boilerplate">
            <p><strong>Mission:</strong> Expand access to affordable, high-quality imaging—with transparency, empathy,
                and innovation at every step.</p>

            <p style="margin-top: 10px;"><strong>Vision:</strong> A healthcare system where no one delays care due to
                confusion or cost, and where imaging centers thrive through shared values.</p>

            <p style="margin-top: 10px;"><strong>What We Do:</strong> USRad offers a trusted network of high-quality,
                affordable imaging centers featuring advanced technology, board-certified radiologists, extended
                appointment times for personalized care, and priority scheduling typically within days, not weeks.</p>
        </div>
    </div>

    <!-- Contact Information -->
    <div class="section">
        <div class="contact-info">
            <h4>Media Contact</h4>
            <p><strong>Michael Cabrera</strong><br>
                Founder & CEO<br>
                USRad<br>
                📧 michael@usrad.com<br>
                📞 1-800-USRad-24<br>
                🌐 www.usrad.com<br>
                💼 linkedin.com/in/usradfl/</p>
        </div>
    </div>

    <!-- Assets Available -->
    <div class="section" style="margin-top: 30px;">
        <h2 class="section-title">Available Assets</h2>
        <div style="font-size: 14px;">
            <p><strong>High-Resolution Photos:</strong> Professional headshots, company logos, team photos</p>
            <p><strong>Company Materials:</strong> Logo files (PNG, SVG), brand guidelines, company overview</p>
            <p><strong>Additional Resources:</strong> Interview availability, speaking topics, case studies</p>
        </div>
    </div>

    <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #666;">
        © 2025 USRad. All rights reserved. For media inquiries, please contact michael@usrad.com
    </div>
</body>

</html>`
	}
render["astro:html"] = true;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: render
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
