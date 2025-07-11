/* empty css                                 */
import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, g as renderScript } from '../chunks/astro/server_2ufYdVaS.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BZV5qL5k.mjs';
export { renderers } from '../renderers.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Frequently Asked Questions | USRad Imaging" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gradient-to-b from-white to-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div class="text-center mb-16"> <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4"> <span class="block text-indigo-700">Frequently Asked Questions</span> </h1> <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
Answers to common questions about our premium diagnostic imaging
          services and what to expect during your visit.
</p> </div> <!-- Search Bar --> <div class="max-w-2xl mx-auto mb-12"> <div class="relative"> <input type="text" id="faq-search" class="w-full border-2 border-gray-300 bg-white h-14 px-5 pr-16 rounded-lg text-lg focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Search our FAQ..."> <button type="submit" class="absolute right-4 top-4"> <svg class="text-indigo-600 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> </div> </div> <!-- Replace the FAQ Tabs System section with this code --> <div class="max-w-6xl mx-auto"> <div class="mb-8 border-b border-gray-200 overflow-x-auto pb-1"> <nav class="-mb-px flex justify-start md:justify-center space-x-4 md:space-x-8 whitespace-nowrap" aria-label="Tabs"> <button class="tab-button active pb-4 px-1 border-b-2 font-medium text-base md:text-lg border-indigo-500 text-indigo-600 flex-shrink-0" data-target="general">
General Questions
</button> <button class="tab-button pb-4 px-1 border-b-2 font-medium text-base md:text-lg border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 flex-shrink-0" data-target="procedures">
Procedures
</button> <button class="tab-button pb-4 px-1 border-b-2 font-medium text-base md:text-lg border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 flex-shrink-0" data-target="insurance">
Affordability & Payment
</button> <button class="tab-button pb-4 px-1 border-b-2 font-medium text-base md:text-lg border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 flex-shrink-0" data-target="preparation">
Preparation
</button> </nav> </div> <!-- General Questions Section --> <div id="general" class="tab-content active"> <div class="grid grid-cols-1 gap-8 md:grid-cols-2"> <!-- FAQ Card 1 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
What makes USRad different from other imaging centers?
</h3> <div class="mt-2 text-gray-600"> <p>
USRad offers a trusted network of high-quality,
                        affordable imaging centers. Our network features:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
Our network offers advanced MRI scanners, with many
                          centers featuring premium 3T technology and modern CT
                          scanners for exceptional image clarity and reduced
                          scan times.
</li> <li>Private waiting areas</li> <li>
Extended appointment times for personalized care
</li> <li>
Board-certified radiologists with subspecialty
                          expertise
</li> <li>Same-day or next-day appointments available</li> <li>
Complimentary digital access to your complete imaging
                          history and reports
</li> </ul> <button class="mt-4 video-trigger inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"> <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Watch video tour
</button> </div> </div> </div> </div> </div> <!-- FAQ Card 2 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
How quickly can I get an appointment?
</h3> <div class="mt-2 text-gray-600"> <p>
We prioritize your time and healthcare needs across our
                        network:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
Stat appointments can often be accommodated within
                          24-48 hours
</li> <li>
Routine imaging appointments are prioritized and
                          typically scheduled within just a few days
</li> <li>
Comprehensive diagnostic packages with multiple
                          imaging modalities coordinated for your convenience
</li> <li>
Referring physician consultations available for
                          complex diagnostic needs
</li> </ul> <p class="mt-3">
Our Preferred Patient Program offers expedited
                        scheduling and enhanced digital access to imaging
                        results across our network of facilities.
</p> </div> </div> </div> </div> </div> <!-- FAQ Card 3 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
How do you ensure patient privacy?
</h3> <div class="mt-2 text-gray-600"> <p>
We maintain the highest standards of privacy and data
                        security:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
HIPAA-compliant secure electronic records system
</li> <li>Strict non-disclosure agreements with all staff</li> <li>
Secure direct communication channels with your
                          physician
</li> <li>
Private changing areas at all network facilities
</li> <li>
Regular privacy and security training for all
                          personnel
</li> </ul> <p class="mt-3">
We can arrange special accommodations for patients with
                        specific privacy concerns.
</p> </div> </div> </div> </div> </div> </div> <!-- FAQ Card 4 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
Who will be interpreting my results?
</h3> <div class="mt-2 text-gray-600"> <p>
Your imaging studies are interpreted by our elite team of
                      radiologists:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
Board-certified with subspecialty fellowship training
</li> <li>Faculty positions at leading medical institutions</li> <li>Published authors of peer-reviewed research</li> <li>
Dedicated to specific body systems for specialized
                        expertise
</li> </ul> <div class="mt-4 flex items-center"> <img src="/path/to/radiologist-avatar.jpg" alt="Dr. Emily Chen" class="h-12 w-12 rounded-full object-cover mr-4"> <div> <p class="text-sm font-medium text-gray-900">
Meet Our Team Lead
</p> <p class="text-sm text-gray-500">
Dr. Emily Chen, Director of Neuroradiology
</p> </div> </div> <button class="mt-4 video-trigger inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"> <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Meet our radiologists
</button> </div> </div> </div> </div> </div> </div> </div> <!-- Procedures Section --> <div id="procedures" class="tab-content hidden"> <div class="grid grid-cols-1 gap-8 md:grid-cols-2"> <!-- MRI FAQ --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
What makes USRad different from other imaging networks?
</h3> <div class="mt-2 text-gray-600"> <p>
USRad offers a trusted network of high-quality, affordable
                      imaging centers. Our network features:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
Advanced 3T MRI technology with faster scan times and
                        superior image quality
</li> <li>Wider bore machines to reduce claustrophobia</li> <li>
Noise-canceling headphones with curated music selection
</li> <li>Temperature-controlled comfort blankets</li> <li>
Extended appointment times for personalized attention
</li> </ul> <div class="mt-4"> <button class="procedure-details-toggle text-indigo-600 hover:text-indigo-800 font-medium flex items-center" data-target="mri-details"> <svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg>
View procedure details
</button> <div id="mri-details" class="procedure-details mt-3 hidden bg-indigo-50 p-4 rounded-lg"> <h4 class="font-semibold text-indigo-800">
MRI Procedure at USRad Network Providers
</h4> <ol class="list-decimal pl-5 mt-2 space-y-1 text-sm"> <li>
Arrive at our facility and check in with the front
                            desk
</li> <li>
Change into comfortable gowns in our private
                            changing area
</li> <li>
Complete safety screening and discuss any concerns
                            with our MRI specialist
</li> <li>Select your preferred music options</li> <li>
Our technologist will position you comfortably on
                            the MRI table
</li> <li>
The scan typically takes 20-45 minutes depending on
                            the area being imaged
</li> <li>
After your scan is completed, you can wait
                            comfortably while your images are prepared for you
                            to take home on CD if requested
</li> </ol> <p class="mt-2 text-sm text-indigo-700">
Full results are delivered within 24 to 48 hours .
</p> </div> </div> </div> </div> </div> </div> </div> <!-- CT Scan FAQ --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
What makes our CT scanning premium?
</h3> <div class="mt-2 text-gray-600"> <p>
USRad offers advanced CT imaging with superior patient
                      comfort:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
Ultra low-dose radiation protocols without compromising
                        image quality
</li> <li>Quick scan times (typically under 5 minutes)</li> <li>Advanced cardiac and vascular CT options</li> <li>
Specialized contrast protocols to minimize discomfort
</li> <li>Temperature-controlled scanning suite</li> </ul> <div class="mt-4"> <button class="procedure-details-toggle text-indigo-600 hover:text-indigo-800 font-medium flex items-center" data-target="ct-details"> <svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg>
View procedure details
</button> <div id="ct-details" class="procedure-details mt-3 hidden bg-indigo-50 p-4 rounded-lg"> <h4 class="font-semibold text-indigo-800">
CT Scan Procedure at USRad
</h4> <ol class="list-decimal pl-5 mt-2 space-y-1 text-sm"> <li>
Private check-in with dedicated patient coordinator
</li> <li>Review of procedure with our CT specialist</li> <li>
Change into premium cotton attire in your private
                            suite
</li> <li>
If contrast is needed, our nurse will insert an IV
                            using our comfort-focused technique
</li> <li>
The CT scan itself typically takes 5-10 minutes
</li> <li>
After your scan, enjoy premium refreshments in our
                            recovery lounge
</li> <li>
Receive a consultation with a radiologist for
                            immediate preliminary findings
</li> </ol> <p class="mt-2 text-sm text-indigo-700">
Our AI-enhanced analysis provides detailed 3D
                          reconstructions for superior diagnostic accuracy.
</p> </div> </div> <button class="mt-4 video-trigger inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"> <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
View CT technology
</button> </div> </div> </div> </div> </div> <!-- Ultrasound FAQ --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
Ultrasound & Specialized Imaging
</h3> <div class="mt-2 text-gray-600"> <p>Our ultrasound services include:</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>High-definition 4D ultrasound imaging</li> <li>Advanced Doppler studies for vascular assessment</li> <li>Elastography for tissue characterization</li> <li>
Heated gel and cushioned tables for maximum comfort
</li> <li>
Gender reveal packages with keepsake images (OB
                        ultrasounds)
</li> <li>Extended appointments with certified specialists</li> </ul> <div class="mt-4"> <button class="procedure-details-toggle text-indigo-600 hover:text-indigo-800 font-medium flex items-center" data-target="ultrasound-details"> <svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg>
View procedure details
</button> <div id="ultrasound-details" class="procedure-details mt-3 hidden bg-indigo-50 p-4 rounded-lg"> <h4 class="font-semibold text-indigo-800">
Ultrasound Procedure at USRad
</h4> <ol class="list-decimal pl-5 mt-2 space-y-1 text-sm"> <li>Check in with our patient concierge team</li> <li>Relax in your private preparation suite</li> <li>
Meet with your sonographer who will explain the
                            procedure
</li> <li>
Experience our climate-controlled exam rooms with
                            memory foam padding
</li> <li>
View your ultrasound in real-time on a dedicated
                            patient viewing screen
</li> <li>
Receive immediate preliminary results from our
                            radiologist
</li> <li>
Digital images provided via secure portal
                            immediately following your exam
</li> </ol> <p class="mt-2 text-sm text-indigo-700">
For pregnancy ultrasounds, we offer complimentary
                          gender reveal packages and 3D printed models as
                          keepsakes.
</p> </div> </div> </div> </div> </div> </div> </div> <!-- X-Ray FAQ --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
X-Ray and Fluoroscopy Services
</h3> <div class="mt-2 text-gray-600"> <p>Our digital X-ray services offer:</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>Ultra-low radiation dose digital systems</li> <li>No waiting - walk-in appointments available</li> <li>Instant digital image processing</li> <li>Specialized views and protocols as needed</li> <li>Same-day results with radiologist consultation</li> </ul> <p class="mt-3">For fluoroscopy procedures, we offer:</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
Specialized contrast studies with premium comfort
                        measures
</li> <li>
Private recovery suites for procedures requiring
                        preparation
</li> <li>
Direct radiologist supervision for all fluoroscopy
                        procedures
</li> </ul> <div class="mt-4"> <button class="procedure-details-toggle text-indigo-600 hover:text-indigo-800 font-medium flex items-center" data-target="xray-details"> <svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg>
View procedure details
</button> <div id="xray-details" class="procedure-details mt-3 hidden bg-indigo-50 p-4 rounded-lg"> <h4 class="font-semibold text-indigo-800">
X-Ray Procedure at USRad
</h4> <ol class="list-decimal pl-5 mt-2 space-y-1 text-sm"> <li>Express check-in with minimal paperwork</li> <li>
Change into premium cotton gowns in private changing
                            rooms
</li> <li>X-ray imaging takes only minutes to complete</li> <li>
Images are processed instantly and reviewed by a
                            radiologist
</li> <li>
Receive results before you leave, with digital
                            copies sent to your portal
</li> <li>
Option for immediate physician referral if treatment
                            is needed
</li> </ol> <p class="mt-2 text-sm text-indigo-700">
Our X-ray technology uses up to 50% less radiation
                          than conventional systems while producing superior
                          images.
</p> </div> </div> </div> </div> </div> </div> </div> </div> </div> <!-- Insurance & Billing Section --> <div id="insurance" class="tab-content hidden"> <div class="grid grid-cols-1 gap-8 md:grid-cols-2"> <!-- Insurance FAQ 1 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
What payment plans do you accept?
</h3> <div class="mt-2 text-gray-600"> <p>
Our network specializes in serving uninsured and
                      underinsured patients:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
We offer direct payment options with transparent,
                        affordable pricing
</li> <li>
Cash, credit card, and electronic payment methods
                        accepted
</li> <li>Flexible payment plans for those who need them</li> <li>HSA and FSA accounts accepted</li> <li>No surprise bills or hidden fees</li> </ul> <p class="mt-3">
Our billing team will verify your coverage prior to your
                      appointment and provide a cost estimate.
</p> <button class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"> <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path> </svg>
View accepted insurance list
</button> </div> </div> </div> </div> </div> <!-- Insurance FAQ 2 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
What payment options are available?
</h3> <div class="mt-2 text-gray-600"> <p>
We offer flexible payment solutions to accommodate our
                      clients:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
All major credit cards and digital wallets accepted
</li> <li>Cash, personal checks, and wire transfers</li> <li>HSA and FSA accounts</li> <li>Payment plans with 0% financing options</li> <li>
Corporate direct billing for executive health programs
</li> <li>International currency exchange services</li> </ul> <p class="mt-3">
Our membership programs offer significant savings for
                      clients requiring multiple imaging studies.
</p> </div> </div> </div> </div> </div> <!-- Insurance FAQ 3 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
Do I need a referral for imaging services?
</h3> <div class="mt-2 text-gray-600"> <p>Referral requirements for medical imaging:</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
All diagnostic imaging procedures require a physician's
                        order, which our team can help you coordinate
</li> <li>
Our patient care team can help obtain the necessary
                        documentation from your doctor
</li> <li>
We offer assistance in getting the appropriate referrals
                        for your specific imaging needs
</li> <li>
Telehealth consultation options are available to help
                        streamline the referral process
</li> </ul> <p class="mt-3">
Our team is experienced in helping cash-paying patients
                      navigate the referral process efficiently.
</p> </div> </div> </div> </div> </div> <!-- Insurance FAQ 4 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
What is your Patient Rewards Program?
</h3> <div class="mt-2 text-gray-600"> <p>
Our patient rewards program offers benefits to regular
                      patients:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>Priority scheduling for follow-up appointments</li> <li>Discounted rates on additional services</li> <li>Complimentary digital image storage</li> <li>Easy access to your imaging history</li> <li>Free annual screening reminder service</li> <li>Simplified image sharing with your physicians</li> </ul> <p class="mt-3">
Enrollment is free with your second imaging service at any
                      of our network facilities.
</p> <button class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"> <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg>
Learn more about membership
</button> </div> </div> </div> </div> </div> </div> </div> <!-- Preparation Section --> <div id="preparation" class="tab-content hidden"> <div class="grid grid-cols-1 gap-8 md:grid-cols-2"> <!-- Preparation FAQ 1 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
How should I prepare for my imaging appointment?
</h3> <div class="mt-2 text-gray-600"> <p>
Preparation varies by procedure, but general guidelines
                      include:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
Arrive 15 minutes before your scheduled appointment
</li> <li>
Bring your ID, insurance card, and physician's order
</li> <li>
Wear comfortable clothing without metal components
</li> <li>
Remove jewelry and electronic devices before the
                        procedure
</li> <li>
Follow any specific fasting or medication instructions
</li> </ul> <p class="mt-3">
Your appointment confirmation will include
                      procedure-specific preparation instructions, and our
                      concierge team will call to review them with you.
</p> <div class="mt-4"> <button class="preparation-toggle text-indigo-600 hover:text-indigo-800 font-medium flex items-center" data-target="mri-prep"> <svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg>
MRI preparation
</button> <div id="mri-prep" class="preparation-details mt-3 hidden bg-indigo-50 p-4 rounded-lg"> <h4 class="font-semibold text-indigo-800">
MRI Preparation Guidelines
</h4> <ul class="list-disc pl-5 mt-2 space-y-1 text-sm"> <li>
No specific food or drink restrictions unless
                            specified for your exam
</li> <li>
Continue taking medications as prescribed unless
                            instructed otherwise
</li> <li>
Wear clothing without metal zippers, buttons, or
                            underwire
</li> <li>
Remove all metal objects (jewelry, watches, hair
                            pins, etc.)
</li> <li>
Inform us of any implanted medical devices or metal
                            in your body
</li> <li>
Let us know if you have claustrophobia so we can
                            provide comfort measures
</li> </ul> </div> </div> <div class="mt-2"> <button class="preparation-toggle text-indigo-600 hover:text-indigo-800 font-medium flex items-center" data-target="ct-prep"> <svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg>
CT preparation
</button> <div id="ct-prep" class="preparation-details mt-3 hidden bg-indigo-50 p-4 rounded-lg"> <h4 class="font-semibold text-indigo-800">
CT Scan Preparation Guidelines
</h4> <ul class="list-disc pl-5 mt-2 space-y-1 text-sm"> <li>
For contrast studies: fast for 4 hours prior to your
                            appointment
</li> <li>
Drink plenty of water (unless instructed otherwise)
</li> <li>
Wear comfortable clothing without metal zippers or
                            buttons
</li> <li>
Continue taking medications unless instructed
                            otherwise
</li> <li>
Inform us of any allergies, especially to iodine or
                            contrast material
</li> <li>
Let us know if you have kidney issues or diabetes
</li> </ul> </div> </div> </div> </div> </div> </div> </div> <!-- Preparation FAQ 2 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
Is imaging radiation safe?
</h3> <div class="mt-2 text-gray-600"> <p>
We prioritize radiation safety with our advanced
                      technology and protocols:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
Our equipment uses the lowest radiation dose necessary
                        for diagnostic quality
</li> <li>
CT scanners feature advanced dose reduction technologies
</li> <li>
Pediatric protocols with specialized low-dose techniques
</li> <li>
Alternative non-radiation options (MRI, ultrasound) when
                        appropriate
</li> <li>
Board-certified medical physicists review all protocols
</li> </ul> <p class="mt-3">
Our radiation safety program exceeds all regulatory
                      requirements, and we provide personalized radiation dose
                      reports after each exam.
</p> <button class="mt-4 video-trigger inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"> <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Learn about our safety measures
</button> </div> </div> </div> </div> </div> <!-- Preparation FAQ 3 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
What should I expect during contrast studies?
</h3> <div class="mt-2 text-gray-600"> <p>
Our approach to contrast studies prioritizes your comfort:
</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
Premium warming protocols to minimize cold sensation
</li> <li>
Expert IV placement by specialized nurses using comfort
                        techniques
</li> <li>
Advanced contrast delivery systems for precise dosing
</li> <li>
Pre-medication options for patients with contrast
                        sensitivities
</li> <li>
Personalized hydration before and after your procedure
</li> </ul> <p class="mt-3">
Most patients experience only mild, temporary effects from
                      contrast material, such as a warm sensation or metallic
                      taste that resolves quickly.
</p> </div> </div> </div> </div> </div> <!-- Preparation FAQ 4 --> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg> </div> <div class="ml-4"> <h3 class="text-xl font-bold text-gray-900">
How will I receive my results?
</h3> <div class="mt-2 text-gray-600"> <p>Our premium result delivery options include:</p> <ul class="list-disc pl-5 mt-2 space-y-1"> <li>
Same-day preliminary results with radiologist
                        consultation
</li> <li>
Comprehensive digital reports within 24 to 48 hours
</li> <li>
Secure online portal access with perpetual image storage
</li> <li>
Direct physician communication by our radiologists
</li> <li>CD/USB/Cloud image delivery options</li> </ul> <p class="mt-3">
Patients in our rewards program receive expedited results
                      and enhanced digital access options.
</p> </div> <button class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"> <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path> </svg>
Access patient portal
</button> </div> </div> </div> </div> </div> </div> </div> </div>  <div class="mt-16 bg-[#003087] rounded-xl overflow-hidden shadow-xl"> <div class="px-6 py-8 sm:p-10 sm:pb-6"> <div class="grid grid-cols-1 gap-8 md:grid-cols-2"> <div> <h3 class="text-2xl font-extrabold text-white">
Still have questions?
</h3> <p class="mt-3 text-lg text-blue-200">
Our patient care team is available to assist with any questions
            about our imaging services.
</p> <div class="mt-6 flex flex-col space-y-4"> <a href="tel:+18005551234" class="inline-flex items-center text-white hover:text-indigo-100"> <svg class="h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
(800) USRad-24
</a> <a href="mailto:concierge@usradimaging.com" class="inline-flex items-center text-white hover:text-indigo-100"> <svg class="h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
concierge@usradimaging.com
</a> <a href="#" class="inline-flex items-center text-white hover:text-indigo-100"> <svg class="h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg>
Schedule a consultation
</a> </div> </div> <div class="bg-white p-6 rounded-lg shadow-inner"> <h4 class="text-lg font-medium text-gray-900">Send us a message</h4> <form class="mt-4 space-y-4"> <div> <label for="name" class="sr-only">Full name</label> <input type="text" name="name" id="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Full name"> </div> <div> <label for="email" class="sr-only">Email</label> <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Email"> </div> <div> <label for="message" class="sr-only">Message</label> <textarea id="message" name="message" rows="4" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your message"></textarea> </div> <div> <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Send message
</button> </div> </form> </div> </div> </div> </div>  ${renderScript($$result2, "/home/usrad/Web Development/usradiology-redund-project/src/pages/faq.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/usrad/Web Development/usradiology-redund-project/src/pages/faq.astro", void 0);

const $$file = "/home/usrad/Web Development/usradiology-redund-project/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
