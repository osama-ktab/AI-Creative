import "./App.css";

const imagePath = "/Devices/webp/";
const mediaPath = "/Devices/";

const metrics = [
  {
    value: "+36",
    label: "تجربة مرئية وصوتية",
    note: "قوالب أولية يمكن تطويرها بسرعة داخل مشاريع الطلاب.",
  },
  {
    value: "4",
    label: "محاور رئيسية",
    note: "نص، صورة، صوت، فيديو ضمن بيئة عمل واحدة.",
  },
  {
    value: "100%",
    label: "واجهة عربية",
    note: "مبنية لتقديم المحتوى العلمي بطريقة واضحة وسلسة.",
  },
];

const workflowSteps = [
  {
    id: "01",
    title: "صياغة الفكرة",
    text: "نبدأ من وصف نصي دقيق يحدد الرسالة، النبرة، والجمهور المستهدف.",
  },
  {
    id: "02",
    title: "توليد الوسائط",
    text: "تحويل الفكرة إلى صور وتسجيلات صوتية ومشاهد فيديو قابلة للعرض.",
  },
  {
    id: "03",
    title: "تحرير ومراجعة",
    text: "مراجعة بشرية للغة والهوية البصرية والاتساق المعرفي قبل النشر.",
  },
  {
    id: "04",
    title: "تجربة المستخدم",
    text: "ترتيب المحتوى بصرياً داخل صفحة سريعة وتفاعلية ومتوافقة مع الهاتف.",
  },
];

const gallery = [
  {
    src: "neural-brain.webp",
    title: "تمثيل بصري للشبكات العصبية",
    text: "صورة معالجة توضح انتقال المعلومات داخل نموذج تعلم عميق.",
  },
  {
    src: "image-generation.webp",
    title: "توليد الصور من الوصف",
    text: "مثال على تحويل فكرة نصية إلى مشهد بصري قابل للاستخدام في الوسائط.",
  },
  {
    src: "audio-waves.webp",
    title: "بناء الصوت الاصطناعي",
    text: "تصميم موجات صوتية لاستخدامها في السرد، المؤثرات، أو التعليق.",
  },
  {
    src: "video-studio.webp",
    title: "إنتاج فيديو مدعوم بالنماذج",
    text: "واجهة تخيلية لسير عمل يجمع النص والصورة والصوت داخل مشهد واحد.",
  },
  {
    src: "human-robot-collab.webp",
    title: "تعاون الإنسان والأداة",
    text: "الهدف ليس استبدال المصمم، بل تسريع التجريب وتوسيع البدائل.",
  },
  {
    src: "model-architecture.webp",
    title: "طبقات النموذج التوليدي",
    text: "رسم يشرح كيف تتحول البيانات إلى أنماط ثم إلى مخرجات جديدة.",
  },
];

const tools = [
  ["النص", "نماذج لغوية تكتب، تلخص، تقترح سيناريوهات، وتعيد صياغة المحتوى."],
  ["الصورة", "نماذج انتشار وتحوير بصري تنتج رسوماً، ملصقات، ولقطات مفاهيمية."],
  ["الصوت", "توليد تعليق صوتي، موسيقى قصيرة، مؤثرات، وتنظيف التسجيلات."],
  ["الفيديو", "مزج صور ومقاطع وصوت ونصوص لإنتاج شرح بصري قصير."],
];

function App() {
  return (
    <main className="site-shell" dir="rtl">
      <div className="bg-orb bg-orb-a" aria-hidden="true" />
      <div className="bg-orb bg-orb-b" aria-hidden="true" />

      <nav className="topbar" aria-label="التنقل الرئيسي">
        <a className="brand" href="#home" aria-label="GenAI World">
          <span className="brand-mark" aria-hidden="true">
            GW
          </span>
          <span>
            <strong>GenAI World</strong>
            <small>وسائط توليدية بوعي بصري</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#how">آلية العمل</a>
          <a href="#media">النماذج</a>
          <a href="#ethics">التقييم</a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">مشروع وسائط متعددة</p>
          <h1>الذكاء الاصطناعي التوليدي في بناء الصورة والصوت والفيديو</h1>
          <p>
            موقع تعريفي ثابت يشرح كيف تتحول الفكرة إلى مادة رقمية: وصف مكتوب،
            صورة معالجة، تعليق صوتي، ومشهد فيديو قصير يصلح للعرض والتعلم.
          </p>
          <div className="hero-actions">
            <a href="#media">استعراض النماذج</a>
            <a href="#report">ملاحظات التقرير</a>
          </div>

          <div className="hero-tags" aria-label="مجالات المشروع">
            <span>تعلم عميق</span>
            <span>تصميم وسائط</span>
            <span>إنتاج تعليمي</span>
          </div>
        </div>

        <figure className="hero-media">
          <img
            src={`${imagePath}genai-world-logo.webp`}
            alt="شعار GenAI World"
          />
          <figcaption>
            هوية بصرية للموقع مبنية حول الدمج بين الإبداع والحوسبة.
          </figcaption>
        </figure>
      </section>

      <section className="metrics" aria-label="أرقام سريعة عن المشروع">
        {metrics.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <h3>{item.label}</h3>
            <p>{item.note}</p>
          </article>
        ))}
      </section>

      <section className="intro-band" aria-label="ملخص سريع">
        <div>
          <span>01</span>
          <p>تعريف بالأدوات التوليدية وطريقة عملها.</p>
        </div>
        <div>
          <span>02</span>
          <p>صور WebP محسنة ومناسبة للويب.</p>
        </div>
        <div>
          <span>03</span>
          <p>فيديو وصوت مع شروحات نصية متزامنة.</p>
        </div>
      </section>

      <section
        className="tool-strip"
        aria-label="أنواع أدوات الذكاء الاصطناعي التوليدي">
        {tools.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="workflow" id="how" aria-label="سير العمل">
        <div className="section-heading centered">
          <p className="eyebrow">آلية العمل</p>
          <h2>من الفكرة الخام إلى تجربة وسائط متكاملة</h2>
          <p>
            هذا المسار لا يعتمد على التوليد الآلي فقط، بل يدمج التوليد مع تقييم
            بشري وتوجيه تصميمي يضمن أن تبقى الرسالة دقيقة وذات طابع خاص.
          </p>
        </div>

        <div className="workflow-grid">
          {workflowSteps.map((step) => (
            <article key={step.id} className="workflow-card">
              <span>{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid applications">
        <div className="image-stack">
          <img
            src={`${imagePath}visual-design.webp`}
            alt="تصميم رقمي يعبر عن توليد العناصر البصرية"
          />
          <img
            src={`${imagePath}story-robot.webp`}
            alt="روبوت يكتب داخل بيئة سردية"
          />
        </div>
        <div className="section-heading">
          <p className="eyebrow">تطبيقات ممكنة</p>
          <h2>نظام وسائط متعدد من فكرة واحدة</h2>
          <p>
            يمكن استخدام هذه الأدوات لبناء مواد تعليمية، عروض تفاعلية، قصص
            رقمية، واجهات تدريب، ونماذج أولية للحملات البصرية. القيمة الحقيقية
            تظهر عندما ندمج الأداة مع مراجعة بشرية واضحة ومعايير جودة ثابتة.
          </p>
          <ul className="check-list">
            <li>توليد مسودة بصرية ثم تحسينها يدوياً.</li>
            <li>إنشاء تعليق صوتي وتجربة أكثر من أسلوب سرد.</li>
            <li>تحويل السيناريو إلى مشهد فيديو قصير مع نصوص شرح.</li>
          </ul>
        </div>
      </section>

      <section className="media-section" id="media">
        <div className="section-heading centered">
          <p className="eyebrow">نماذج المشروع</p>
          <h2>صور وفيديوهات وأصوات مستخدمة داخل الموقع</h2>
          <p>
            تم اختيار الوسائط التالية لأنها تشرح المبدأ بصرياً وتعرض أمثلة قريبة
            من تطبيقات بناء نظم الوسائط المتعددة.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure key={item.src} className="gallery-item">
              <img
                src={`${imagePath}${item.src}`}
                alt={item.title}
                loading="lazy"
              />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="video-grid">
          <article className="video-panel">
            <video
              controls
              poster={`${imagePath}video-studio.webp`}
              preload="metadata">
              <source
                src={`${mediaPath}WhatsApp Video 2026-04-30 at 3.51.21 PM.mp4`}
                type="video/mp4"
              />
              <track
                default
                kind="subtitles"
                src="/captions/generative-workflow.vtt"
                srcLang="ar"
                label="العربية"
              />
            </video>
            <h3>مشهد تعريفي قصير</h3>
            <p>يوضح العلاقة بين النص والصورة والصوت ضمن سير إنتاج واحد.</p>
          </article>

          <article className="video-panel">
            <video
              controls
              poster={`${imagePath}ai-brain-interface.webp`}
              preload="metadata">
              <source
                src={`${mediaPath}WhatsApp Video 2026-04-30 at 3.56.45 PM.mp4`}
                type="video/mp4"
              />
              <track
                default
                kind="subtitles"
                src="/captions/multimedia-ai.vtt"
                srcLang="ar"
                label="العربية"
              />
            </video>
            <h3>تطبيقات الذكاء التوليدي</h3>
            <p>
              يعرض أمثلة لاستخدام النماذج في المحتوى الرقمي التعليمي والإبداعي.
            </p>
          </article>
        </div>

        <div className="audio-row" aria-label="مقاطع صوتية">
          <article>
            <h3>تعليق صوتي موجز</h3>
            <audio
              controls
              src={`${mediaPath}WhatsApp Audio 2026-04-30 at 3.56.44 PM.mpeg`}>
              المتصفح لا يدعم تشغيل الصوت.
            </audio>
          </article>
          <article>
            <h3>شرح صوتي موسع</h3>
            <audio
              controls
              src={`${mediaPath}WhatsApp Audio 2026-04-30 at 3.56.45 PM.mpeg`}>
              المتصفح لا يدعم تشغيل الصوت.
            </audio>
          </article>
        </div>
      </section>

      <section className="pros-cons" id="ethics">
        <article>
          <h2>الإيجابيات</h2>
          <ul>
            <li>تسريع مرحلة العصف البصري وإنتاج النماذج الأولية.</li>
            <li>تخفيض كلفة تجربة أكثر من أسلوب للصورة والصوت.</li>
            <li>مساعدة الفرق الصغيرة على بناء مواد تعليمية غنية.</li>
          </ul>
        </article>
        <article>
          <h2>السلبيات والتحديات</h2>
          <ul>
            <li>احتمال ظهور أخطاء معرفية أو تفاصيل بصرية غير دقيقة.</li>
            <li>الحاجة إلى مراعاة حقوق الملكية وخصوصية البيانات.</li>
            <li>ضرورة المراجعة البشرية كي لا يصبح المحتوى عاماً أو مضللاً.</li>
          </ul>
        </article>
      </section>

      <section className="report-note" id="report">
        <div>
          <p className="eyebrow">للتقرير</p>
          <h2>إشارة واضحة لاستخدام الذكاء الاصطناعي</h2>
        </div>
        <p>
          يمكن توثيق أن جزءاً من الصور والمقاطع والكتابة التوضيحية استُخدم فيه
          الذكاء الاصطناعي التوليدي، ثم جرى ترتيب المحتوى وتحسينه واختيار صيغه
          المناسبة للويب داخل هذا الموقع. جميع الصور المعروضة في الصفحة مستخدمة
          بصيغة WebP.
        </p>
      </section>
    </main>
  );
}

export default App;
