import React from 'react';
import { ArrowLeft, Scale, Building, FileText, Mail, Phone } from 'lucide-react';

interface LegalNoticeProps {
  onBack: () => void;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-teal-600 hover:text-teal-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Aviso Legal</h1>
              <p className="text-gray-600 mt-2">WasabiTel - Última actualización: Enero 2024</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Datos identificativos */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Building className="w-6 h-6 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Datos Identificativos</h2>
            </div>
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-xl">
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Denominación social:</strong> WasabiTel Telecomunicaciones S.L.</p>
                <p className="text-gray-700"><strong>CIF:</strong> B-12345678</p>
                <p className="text-gray-700"><strong>Domicilio social:</strong> Calle Ejemplo, 123, 28001 Madrid, España</p>
                <p className="text-gray-700"><strong>Teléfono:</strong> 621 50 83 00</p>
                <p className="text-gray-700"><strong>Email:</strong> info@wasabitel.com</p>
                <p className="text-gray-700"><strong>Registro Mercantil:</strong> Madrid, Tomo 1234, Folio 56, Sección 8, Hoja M-123456</p>
              </div>
            </div>
          </section>

          {/* Objeto y actividad */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. Objeto y Actividad</h2>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl">
              <p className="text-teal-800 leading-relaxed">
                WasabiTel es una empresa especializada en servicios de telecomunicaciones que ofrece:
              </p>
              <ul className="mt-4 space-y-2 text-teal-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Servicios de fibra óptica y conexión a internet
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Planes de telefonía móvil y datos
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sistemas de seguridad y videovigilancia
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Servicios de telecomunicaciones para empresas
                </li>
              </ul>
            </div>
          </section>

          {/* Condiciones de uso */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900">3. Condiciones de Uso del Sitio Web</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-orange-900 mb-3">Uso Permitido</h3>
                <p className="text-orange-800">
                  El acceso y uso de este sitio web implica la aceptación de estas condiciones. 
                  El usuario se compromete a utilizar el sitio web de forma lícita y conforme a la legislación vigente.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-red-900 mb-3">Uso Prohibido</h3>
                <p className="text-red-800">
                  Queda prohibido cualquier uso del sitio web que pueda dañar, inutilizar o sobrecargar 
                  los servidores, así como realizar actividades fraudulentas o que vulneren los derechos de terceros.
                </p>
              </div>
            </div>
          </section>

          {/* Propiedad intelectual */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Propiedad Intelectual</h2>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-blue-800 mb-4">
                Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos, diseños y código fuente, 
                son propiedad de WasabiTel o de terceros que han autorizado su uso.
              </p>
              <p className="text-blue-800">
                Queda prohibida la reproducción, distribución, comunicación pública o transformación de estos contenidos 
                sin autorización expresa del titular de los derechos.
              </p>
            </div>
          </section>

          {/* Responsabilidad */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Limitación de Responsabilidad</h2>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <p className="text-purple-800">
                WasabiTel no se hace responsable de los daños que puedan derivarse del uso de este sitio web, 
                salvo en casos de dolo o negligencia grave. La información contenida en el sitio web tiene carácter 
                meramente informativo y puede ser modificada sin previo aviso.
              </p>
            </div>
          </section>

          {/* Legislación aplicable */}
          <section>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Legislación Aplicable y Jurisdicción</h3>
              <p className="text-gray-700">
                Este aviso legal se rige por la legislación española. Para la resolución de cualquier controversia 
                que pudiera derivarse del acceso o uso de este sitio web, las partes se someten expresamente a los 
                Juzgados y Tribunales de Madrid, renunciando a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Contacto Legal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Email Legal</div>
                    <div className="text-gray-600">legal@wasabitel.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">WhatsApp</div>
                    <div className="text-gray-600">621 50 83 00</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              Última actualización: Enero 2024. WasabiTel se reserva el derecho de modificar 
              este aviso legal en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;