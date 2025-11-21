import { Phone } from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';

const PHONE_DISPLAY = '(475) 685-8464';
const PHONE_TEL = '+14756858464';

export default function FinalCTA() {
  const handleCall = () => {
    window.location.href = `tel:${PHONE_TEL}`;
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/14756858464?text=Hola,%20necesito%20información',
      '_blank'
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full mb-8 text-base animate-bounce shadow-xl">
            <span>✅</span>
            <span>Oferta por Tiempo Limitado!</span>
          </div>

          <h2 className="text-5xl md:text-7xl text-white mb-8 leading-tight">
            Obtenga Agua Limpia y Saludable{' '}
            <span className="text-yellow-300">HOY MISMO</span>
          </h2>

          <p className="text-2xl md:text-3xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Instalación en <strong className="text-white">24 horas</strong> +
            Diagnóstico <strong className="text-yellow-300">GRATIS</strong> +
            Garantía de por vida
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {['Sin costo de diagnóstico', 'Instalación profesional incluida', 'Financiamiento disponible'].map(
              (value) => (
                <div
                  key={value}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30"
                >
                  <div className="text-5xl mb-3">✔</div>
                  <p className="text-xl text-white">{value}</p>
                </div>
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={handleCall}
              className="group flex items-center justify-center gap-4 bg-white text-blue-900 px-12 py-7 rounded-2xl shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 text-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Phone className="w-8 h-8 relative z-10" />
              <div className="text-left relative z-10">
                <div className="text-sm text-blue-600">Llame Ahora</div>
                <div className="text-2xl">{PHONE_DISPLAY}</div>
              </div>
            </button>

            <button
              onClick={handleWhatsApp}
              className="group flex items-center justify-center gap-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-12 py-7 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 text-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <WhatsAppIcon className="w-8 h-8 relative z-10 shrink-0" />
              <div className="text-left relative z-10 leading-tight">
                <div className="text-sm text-green-200">Respuesta Inmediata</div>
                <div className="text-2xl">WhatsApp</div>
              </div>
            </button>
          </div>

          <div className="space-y-3">
            <p className="text-cyan-200 text-xl">
              🕒 Lunes a Sábado: 8:00 AM - 6:00 PM
            </p>
            <p className="text-yellow-300 text-lg animate-pulse">
              ¡Solo quedan 15 cupos esta semana!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
