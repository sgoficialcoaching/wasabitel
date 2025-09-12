import React from 'react';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, XCircle, Clock, Euro } from 'lucide-react';

interface TermsConditionsProps {
  onBack: () => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Términos y Condiciones</h1>
              <p className="text-gray-600 mt-2">WasabiTel - Última actualización: Enero 2024</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Aceptación */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Aceptación de los Términos</h2>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
              <p className="text-gray-700 leading-relaxed">
                Al contratar cualquier servicio de WasabiTel, aceptas estos términos y condiciones en su totalidad. 
                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
            </div>
          </section>

          {/* Servicios */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. Descripción de Servicios</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-blue-900 mb-3">Servicios de Fibra Óptica</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Conexión a internet de alta velocidad mediante fibra óptica
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Velocidades simétricas según el plan contratado
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Instalación y configuración de equipos necesarios
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-orange-900 mb-3">Servicios Móviles</h3>
                <ul className="space-y-2 text-orange-800">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Planes de datos móviles con cobertura nacional
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Llamadas y SMS según el plan contratado
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Acceso a redes 4G y 5G donde esté disponible
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Facturación */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Euro className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">3. Facturación y Pagos</h2>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-green-900 mb-3">Condiciones de Pago</h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Facturación mensual por adelantado
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Domiciliación bancaria obligatoria
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      IVA incluido en todos los precios
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-green-900 mb-3">Impagos</h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Suspensión del servicio tras 15 días
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Gastos de gestión de impago: 15€
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Reactivación: 30€
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Permanencia */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Permanencia y Cancelación</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-purple-900 mb-3">Servicios de Fibra</h3>
                <p className="text-purple-800 mb-3">
                  Permanencia mínima de 12 meses. En caso de baja anticipada, se aplicará una penalización 
                  equivalente a las mensualidades restantes con un máximo de 150€.
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-teal-900 mb-3">Servicios Móviles</h3>
                <p className="text-teal-800 mb-3">
                  Sin permanencia. Puedes cancelar tu servicio en cualquier momento con un preaviso de 30 días.
                </p>
              </div>
            </div>
          </section>

          {/* Responsabilidades */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Limitaciones y Responsabilidades</h2>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-red-900 mb-2">Uso Responsable</h3>
                  <p className="text-red-800">
                    El cliente se compromete a hacer un uso responsable de los servicios, respetando la legislación 
                    vigente y no realizando actividades que puedan dañar la red o afectar a otros usuarios.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-red-900 mb-2">Limitación de Responsabilidad</h3>
                  <p className="text-red-800">
                    WasabiTel no se hace responsable de daños indirectos, pérdida de datos o lucro cesante 
                    derivados del uso de nuestros servicios, salvo en casos de dolo o negligencia grave.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Modificaciones */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <h2 className="text-2xl font-bold text-gray-900">6. Modificaciones</h2>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="text-yellow-800">
                WasabiTel se reserva el derecho de modificar estos términos y condiciones. 
                Los cambios serán notificados con al menos 30 días de antelación a través de 
                los medios habituales de comunicación con el cliente.
              </p>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Contacto para Consultas Legales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Email Legal</div>
                    <div className="text-gray-600">legal@wasabitel.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Atención al Cliente</div>
                    <div className="text-gray-600">621 50 83 00</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              Estos términos y condiciones están sujetos a la legislación española. 
              Para cualquier disputa, serán competentes los juzgados de Madrid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;