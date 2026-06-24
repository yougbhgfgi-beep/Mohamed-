export default function SweetWords() {
  const reasons = [
    { title: 'عيونك', text: 'بشوف فيها مستقبلي وحياتي الجاية كلها.', icon: '👀' },
    { title: 'وجودك', text: 'كفاية بس إنك موجود، ده بيخلي الحياة ليها طعم ولون.', icon: '🌟' },
    { title: 'حنيتك', text: 'أحن وأطيب قلب في الدنيا، بتمسح دمعتي قبل ما تنزل.', icon: '❤️' },
    { title: 'أماني', text: 'معاك بحس إني مسنودة على جبل، ولا حاجة تقدر تكسرني.', icon: '🛡️' },
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Why I love you section */}
        <div>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-pink-600 mb-3">ليه بحبك؟ 💖</h2>
            <p className="text-pink-400 text-lg">أسباب بتخليني أعشقك كل يوم أكتر</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-right border border-pink-100"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4 flex-row-reverse">
                  <div className="text-4xl" style={{ animationDelay: `${i * 0.3}s` }}>
                    {r.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-pink-600">{r.title}</h3>
                </div>
                <p className="text-pink-700 leading-relaxed font-medium text-lg">
                  {r.text}
                </p>
                <div className="mt-4 flex justify-end">
                  <div className="h-1 w-16 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #ff69b4, #ff1493)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
