import { useState, useEffect } from 'react';
import { X, Heart } from 'lucide-react';

const PARAGRAPHS = [
  'كل سنه وانت معايا يا حبيبي وعقبال مليون سنه كل سنه وانت جنبي كل سنه وانت في حياتي كل سنه وانت مالي عليا دنيتي كل سنه وانت منور حياتي بوجودك وكل سنه وانت احلى واجمل حبيب في الدنيا وعقبال سنين كتير بينا يا روح قلبي والعمر كله ليك وجنبي وفي حياتي يا حياتي كل سنه وانت حبيبي ونور عيني وابويا واخويا وصاحبي وابني وسندي وظهري ربنا يديم وجودك دايما في حياتي يا نور عيني ان شاء الله السنه الجايه ابقى انا وانت في بيت واحد كل سنه وانا وانت بنتخانق وكل سنه وانا مطلعه عينك وعارفه وكل سنه وانت معليلى ضغطي بس والله العظيم بحبك وما عنديش اغلى منك كل سنه وانت احلى اب في الدنيا بجد انت بطل حياتي يا احلى رزق من ربنا ويا رب تحقق كل اللي بتتمناه ياحبيب قلبي واشوفك دايما مبسوط يااغلي من عمري واسعد واحد في الدنيا والضحكه الحلوه ما تفارقش والشك ابدا وما اشوفش فيك حاجه وحشه ودائما تبقى في حياتي يا محمد  بجد ده احلى يوم في عمري عشان اليوم اللي جيت نورت الدنيا فيه  ياحياتي ونورت دنيتي وشرفت حياتي بوجودك فيها بجد انا متلخبطه ومش عارفه اكتب لك ايه عشان انا مهما اتكلم عنك مش هقدر اوصف انا بحبك قد ايه ولا غلاوتك في قلبي عامله ازاي والله ربنا شاهد على كلامي ان انت قبل ما تبقى حبيب ليا انت اب ليا ما بقاش فارق عندي صحاب ولا اي حاجه في الدنيا عشان انت بقيت سري واماني واي حاجه بعملها في حياتي تبقى لازم انت اول واحد تعرفها لما بعمل اي حاجه بجري عليك زي العيله الصغيره اللي بتجري على ابوها ده بجد مش كلام واكتب لك الكلام ده بجد من جوه قلبي وطالع بحب يا حبيبي عارفه ان الفتره اللي فاتت ما كانتش احسن حاجه تصدقني  اهم حاجه انت معايا وجنبي وبسمع صوتك يا اغلى حاجه في حياتي انا بجد بحبك اوي وبعشق وعايزك  جنبي انت اللي يتقال عليك السند بجد انت احلى عوض من ربنا ليا يا اغلى من عمري وعايزه اقول لك على حاجه يا محمد انا مش  هيهدى لي بال ولا هرتاح غير لما اسمك يبقى في ضهر بطاقتي اعمل حسابك على كده فكرك ان انا ممكن اسيبك او ابعد عنك ده بعينك يا حبيبي ولا انت ليك غيري ولا انا ليا غيرك  بحبك يا احلا ابو مالك فىىالدنيا كل سنه وانت تعجوز بس بحبك 😂❤❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹'
];

const TypewriterEffect = () => {
  const [charIndex, setCharIndex] = useState(0);
  const fullText = PARAGRAPHS.join('\n\n');

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCharIndex(c => c + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  const visibleFullText = fullText.slice(0, charIndex);
  const visibleParagraphs = visibleFullText.split('\n\n');

  return (
    <div className="space-y-6">
      {visibleParagraphs.map((p, i) => (
        <p key={i} className={`text-pink-600 ${i === 4 ? 'text-lg font-bold text-pink-700' : 'text-base'}`}>
          {p}
        </p>
      ))}
    </div>
  );
};

interface Props {
  onClose: () => void;
}

export default function EnvelopeModal({ onClose }: Props) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(255, 20, 147, 0.12)', backdropFilter: 'blur(8px)' }}>

      <div className="relative w-full max-w-2xl animate-fade-in-scale">
        {!opened ? (
          /* ENVELOPE CLOSED */
          <div className="text-center">
            <p className="text-pink-600 font-bold text-xl mb-8">
              ✉️ رسالة خاصة لك... اضغط لفتحها 💌
            </p>
            <button onClick={() => setOpened(true)}
              className="relative mx-auto block cursor-pointer group transition-transform hover:scale-105">
              {/* Envelope body */}
              <div className="w-72 h-48 mx-auto rounded-2xl shadow-2xl relative overflow-hidden"
                style={{ background: 'linear-gradient(145deg, #ffe4f0, #ffc0cb)' }}>

                {/* Envelope flap */}
                <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
                  <div className="w-full h-full"
                    style={{
                      background: 'linear-gradient(145deg, #ffb6c1, #ff69b4)',
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    }} />
                </div>

                {/* Center heart */}
                <div className="absolute inset-0 flex items-center justify-center mt-8">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #ff69b4, #ff1493)' }}>
                    <Heart size={24} className="text-white fill-white" />
                  </div>
                </div>

                {/* Bottom folds */}
                <div className="absolute bottom-0 left-0 right-0 h-16"
                  style={{
                    background: 'linear-gradient(to top, #ffb6c1, transparent)',
                  }} />
              </div>
            </button>
          </div>
        ) : (
          /* LETTER OPENED */
          <div className="glass-card rounded-3xl p-6 md:p-10 shadow-2xl animate-letter-slide relative max-h-[85vh] overflow-y-auto custom-scrollbar"
            style={{ boxShadow: '0 30px 70px rgba(255, 105, 180, 0.3)' }}>

            <button onClick={onClose}
              className="sticky top-0 float-left w-10 h-10 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors z-10">
              <X size={20} className="text-pink-500" />
            </button>

            <div className="text-center mb-8 clear-both">
              <div className="flex justify-center gap-1 text-2xl mb-3">
                {'💌 💕 💌'.split(' ').map((e, i) => (
                  <span key={i}>{e}</span>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-black shimmer-text">إلى... محمد 🔆 𝑀𝑜ℎ𝑎𝑚𝑀𝑒𝑑</h2>
            </div>

            <div className="text-right leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Cairo', color: '#8b1a4a' }}>
              <TypewriterEffect />
            </div>

            <button onClick={onClose}
              className="mt-10 w-full py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #ff69b4, #ff1493)' }}>
              أغلق الرسالة 💕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
