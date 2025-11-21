import { Phone, Gift, Clock } from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';

const PHONE_DISPLAY = '(475) 685-8464';
const PHONE_TEL = '+14756858464';

export default function GoogleAdsCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border-2 border-white/30 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full mb-4 text-sm animate-bounce">
                  <Gift className="w-4 h-4" />
                  <span>Oferta Especial</span>
                </div>

                <h3 className="text-4xl md:text-5xl mb-4">
                  Diagnóstico GRATIS!
                </h3>

                <p className="text-2xl text-white/90 mb-6">
                  Análisis completo del agua + Cotización sin costo
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    'Prueba profesional de calidad del agua',
                    'Recomendaciones personalizadas',
                    'Sin compromiso de compra'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-500 text-sm">✔</span>
                      </div>
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-yellow-300">
                  <Clock className="w-5 h-5 animate-pulse" />
                  <p>
                    Solo los próximos <strong className="text-yellow-100">20 clientes</strong>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => (window.location.href = `tel:${PHONE_TEL}`)}
                  className="w-full group relative bg-white text-slate-900 px-8 py-6 rounded-2xl shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <Phone className="w-7 h-7 text-blue-600" />
                    <div className="text-left">
                      <div className="text-sm text-slate-600">Llame Ahora</div>
                      <div className="text-2xl">{PHONE_DISPLAY}</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() =>
                    window.open(
                      'https://wa.me/14756858464?text=Quiero%20el%20diagnóstico%20GRATIS',
                      '_blank'
                    )
                  }
                  className="w-full group relative bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-8 py-6 rounded-2xl shadow-2xl transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <WhatsAppIcon className="w-7 h-7 shrink-0" />
                    <div className="text-left leading-tight">
                      <div className="text-sm text-green-100">Respuesta Inmediata</div>
                      <div className="text-2xl font-semibold">WhatsApp</div>
                    </div>
                  </div>
                </button>

                <p className="text-center text-white/80 text-sm">
                  Respuesta en menos de 5 minutos ✅
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
