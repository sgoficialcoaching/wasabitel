import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Phone } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Política de Privacidad</h1>
              <p className="text-gray-600 mt-2">WasabiTel - Última actualización: Enero 2024</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Introducción */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Introducción</h2>
            </div>
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
              <p className="text-gray-700 leading-relaxed">
                En WasabiTel, nos comprometemos a proteger y respetar tu privacidad. Esta política explica 
                cómo recopilamos, utilizamos y protegemos tu información personal cuando utilizas nuestros 
                servicios de telecomunicaciones.
              </p>
            </div>
          </section>

          {/* Datos que recopilamos */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900">2. Datos que Recopilamos</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Datos de Identificación</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nombre completo y DNI/NIE
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dirección postal y de instalación
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Teléfono y dirección de correo electrónico
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Datos de Uso del Servicio</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Información de tráfico y consumo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Datos de facturación y pagos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Registros de atención al cliente
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Finalidad del tratamiento */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">3. Finalidad del Tratamiento</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-blue-900 mb-3">Prestación de Servicios</h3>
                <p className="text-blue-800">
                  Gestión de contratos, facturación, soporte técnico y mantenimiento de los servicios contratados.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-green-900 mb-3">Comunicaciones Comerciales</h3>
                <p className="text-green-800">
                  Envío de ofertas, promociones y información sobre nuevos servicios (solo con tu consentimiento).
                </p>
              </div>
            </div>
          </section>

          {/* Derechos del usuario */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Tus Derechos</h2>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="text-purple-800 mb-4 font-medium">
                Tienes derecho a ejercer los siguientes derechos sobre tus datos personales:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-purple-800 font-medium">Acceso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-purple-800 font-medium">Rectificación</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-purple-800 font-medium">Supresión</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-purple-800 font-medium">Limitación</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-purple-800 font-medium">Portabilidad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-purple-800 font-medium">Oposición</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Contacto</h2>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-200 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Para ejercer tus derechos o resolver cualquier duda sobre el tratamiento de tus datos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">WhatsApp</div>
                    <div className="text-gray-600">621 50 83 00</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Email</div>
                    <div className="text-gray-600">privacidad@wasabitel.com</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              Esta política de privacidad puede ser actualizada periódicamente. 
              Te notificaremos cualquier cambio significativo a través de nuestros canales habituales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;