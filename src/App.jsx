import "./App.css";
import metrics from "./content/metrics.json";
import workflowSteps from "./content/workflowSteps.json";
import gallery from "./content/gallery.json";
import tools from "./content/tools.json";
import videos from "./content/videos.json";
import audioTracks from "./content/audioTracks.json";

const imagePath = "/Devices/webp/";
const mediaPath = "/Devices/";

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
          {videos.map((video) => (
            <article key={video.src} className="video-panel">
              <video
                controls
                poster={`${imagePath}${video.poster}`}
                preload="metadata">
                <source src={`${mediaPath}${video.src}`} type="video/mp4" />
                <track
                  default
                  kind="subtitles"
                  src={video.track}
                  srcLang="ar"
                  label="العربية"
                />
              </video>
              <h3>{video.title}</h3>
              <p>{video.text}</p>
            </article>
          ))}
        </div>

        <div className="audio-row" aria-label="مقاطع صوتية">
          {audioTracks.map((audioTrack) => (
            <article key={audioTrack.src}>
              <h3>{audioTrack.title}</h3>
              <audio controls src={`${mediaPath}${audioTrack.src}`}>
                المتصفح لا يدعم تشغيل الصوت.
              </audio>
            </article>
          ))}
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
