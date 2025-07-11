/* empty css                                 */
import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_2ufYdVaS.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BZV5qL5k.mjs';
import { $ as $$ChatbotToggle } from '../chunks/ChatbotToggle_C34OpM7j.mjs';
export { renderers } from '../renderers.mjs';

const $$CoFounder = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-24 bg-[#f0f4f9] text-gray-800"> <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center"> <!-- Image --> <div class="text-center md:text-left"> <img src="/images/donna.webp" alt="Donna Cabrera" class="w-72 h-72 mx-auto md:mx-0 object-cover rounded-xl shadow-lg border border-gray-200"> </div> <!-- Bio Summary - UPDATED TITLE COLOR AND WEIGHT --> <div class="space-y-4 text-center md:text-left"> <h1 class="text-5xl md:text-6xl font-semibold text-[#003087]">
Donna Cabrera
</h1> <p class="text-xl text-[#cc9933] font-semibold">
Co-Founder & Patient Advocacy Advisor
</p> <p class="text-lg text-gray-700">
Donna Cabrera's work in medical imaging began in the early 1990s,
          redefining the patient experience from the ground up. As co-founder of
          our original imaging venture and architect of the groundbreaking 'One
          Step Service' model, she continues to shape our patient-first vision
          as a trusted advisor at USRad.
</p> </div> </div> </section>  <section class="py-20 bg-white px-6"> <div class="max-w-6xl mx-auto"> <h2 class="text-3xl font-semibold text-[#003087] mb-12 text-center">
Her Legacy in Practice
</h2> <div class="grid md:grid-cols-2 gap-12"> <div class="space-y-6 text-gray-700"> <p class="text-lg leading-relaxed">
Donna's early leadership helped define our culture of care. At
            AnciCare PPO, she launched "One Step Service"—a coordinated model
            delivering 72-hour scheduling, urgent case accommodation, and
            streamlined reporting across the entire referral chain. The system
            became a national benchmark in patient service design.
</p> <p class="text-lg leading-relaxed">
Today, she guides USRad's service strategy with a singular goal:
            never lose the human connection in pursuit of scale. Her influence
            ensures that as our platform evolves, empathy remains its
            foundation.
</p> <!-- UPDATED BORDER COLOR --> <blockquote class="border-l-4 border-[#cc9933] pl-6 py-2 italic text-xl text-gray-600 my-8">
"Her presence reminds us that even in a world of innovation, care is
            still personal — and always should be."
</blockquote> </div> <!-- Principles Grid --> <div class="grid gap-6"> <div class="bg-[#f9f9f6] p-6 rounded-xl border shadow-sm"> <h3 class="text-lg font-semibold text-[#003087] mb-2">
Clear Communication
</h3> <p class="text-sm text-gray-700">
Ensuring patients understand procedures and next steps without
              confusion or jargon.
</p> </div> <div class="bg-[#f9f9f6] p-6 rounded-xl border shadow-sm"> <h3 class="text-lg font-semibold text-[#003087] mb-2">
Emotional Support
</h3> <p class="text-sm text-gray-700">
Addressing anxiety with timely, compassionate care at every step.
</p> </div> <div class="bg-[#f9f9f6] p-6 rounded-xl border shadow-sm"> <h3 class="text-lg font-semibold text-[#003087] mb-2">
Personalized Attention
</h3> <p class="text-sm text-gray-700">
Treating every patient as an individual—not just an appointment.
</p> </div> <div class="bg-[#f9f9f6] p-6 rounded-xl border shadow-sm"> <h3 class="text-lg font-semibold text-[#003087] mb-2">
Results Delivery
</h3> <p class="text-sm text-gray-700">
Closing the loop with fast, accurate reports and clarity for all.
</p> </div> </div> </div> </div> </section>  <section class="py-12 text-center px-4"> <a href="/contact" class="inline-block bg-[#003087] text-white px-8 py-3 rounded-full hover:bg-[#00256e] transition-all border-l-4 border-[#cc9933]">
Get in Touch
</a> </section> ${renderComponent($$result2, "ChatbotToggle", $$ChatbotToggle, { "chatbotLabel": "\u{1F4AC} Let's Talk" })} ` })}`;
}, "/home/usrad/Web Development/usradiology-redund-project/src/pages/co-founder.astro", void 0);

const $$file = "/home/usrad/Web Development/usradiology-redund-project/src/pages/co-founder.astro";
const $$url = "/co-founder";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CoFounder,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
