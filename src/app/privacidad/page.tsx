export default function Privacidad() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
      
      <p className="text-gray-400 mb-8">Última actualización: Mayo 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Quiénes somos</h2>
        <p className="text-gray-300">SYNCRO (syncro.lat) es una agencia de soluciones tecnológicas B2B con sede en Córdoba, Argentina. Desarrollamos y operamos sistemas de gestión para organizadores y establecimientos de eventos. Esta política se rige por la Ley N° 25.326 de Protección de los Datos Personales de la República Argentina. Contacto: hola@syncro.lat</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Roles y responsabilidades</h2>
        <p className="text-gray-300 mb-3"><strong className="text-white">Clientes contratantes:</strong> Los establecimientos y organizadores que contratan los servicios de SYNCRO actúan como responsables de los datos personales de sus invitados, compradores y personal autorizado.</p>
        <p className="text-gray-300"><strong className="text-white">SYNCRO:</strong> Actúa como encargado del tratamiento de datos, procesando la información exclusivamente siguiendo las instrucciones del cliente contratante y proporcionando la infraestructura tecnológica necesaria para la gestión de eventos.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Qué datos recopilamos</h2>
        <p className="text-gray-300 mb-3">Recopilamos los siguientes datos personales en el marco de los servicios prestados a nuestros clientes:</p>
        <p className="text-gray-300 mb-2"><strong className="text-white">Datos personales:</strong></p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Nombre y apellido</li>
          <li>Número de teléfono y WhatsApp</li>
          <li>Dirección de correo electrónico</li>
          <li>Datos de pago procesados a través de MercadoPago (no almacenados directamente por SYNCRO)</li>
        </ul>
        <p className="text-gray-300 mb-2"><strong className="text-white">Datos técnicos recopilados automáticamente:</strong></p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Dirección IP del dispositivo utilizado</li>
          <li>Tipo de navegador y sistema operativo</li>
          <li>Logs de actividad en el sistema (accesos, acciones realizadas, timestamps)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Propiedad de los datos</h2>
        <p className="text-gray-300">Los datos recopilados a través de los sistemas de SYNCRO son propiedad exclusiva del cliente contratante. SYNCRO actúa únicamente como procesador técnico de dichos datos, sin ningún derecho de uso, comercialización o cesión sobre los mismos. El cliente contratante es el único responsable del uso que se haga de los datos dentro de su organización y frente a terceros.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Para qué usamos los datos</h2>
        <p className="text-gray-300 mb-3">Los datos recopilados se utilizan exclusivamente para:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Gestionar listas de invitados y compradores en eventos</li>
          <li>Procesar y validar el acceso al evento mediante check-in digital</li>
          <li>Facilitar la comunicación entre promotores, organizadores y compradores vía WhatsApp</li>
          <li>Procesar pagos de entradas a través de MercadoPago</li>
          <li>Proveer acceso al sistema de gestión a personal autorizado por el cliente</li>
          <li>Garantizar la seguridad del sistema y prevenir accesos no autorizados</li>
          <li>Cumplir con obligaciones legales aplicables</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Lo que SYNCRO NO hace con los datos</h2>
        <p className="text-gray-300">SYNCRO no vende, no cede, no comparte ni comercializa los datos de ningún cliente contratante ni de sus usuarios finales. Los datos de un cliente nunca son accesibles por otro cliente. SYNCRO no utiliza los datos para fines publicitarios ni de análisis comercial propio.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Almacenamiento y seguridad</h2>
        <p className="text-gray-300 mb-3">Los datos se almacenan en servidores seguros con certificación SOC 2 (Supabase/Amazon AWS), protegidos por Cloudflare. Aplicamos las siguientes medidas de seguridad técnicas:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Cifrado AES-256-GCM para tokens y credenciales sensibles</li>
          <li>Control de acceso por roles con Row Level Security (RLS)</li>
          <li>Verificación de firma en todos los webhooks entrantes</li>
          <li>Registro de intentos de acceso no autorizados</li>
          <li>Protección DDoS y WAF mediante Cloudflare</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Retención de datos</h2>
        <p className="text-gray-300">Los datos de invitados y compradores se conservan por un período máximo de 90 días posteriores al evento. Los logs de actividad técnica se conservan por un período máximo de 30 días. Los datos de personal autorizado se conservan mientras dure la relación comercial con el establecimiento cliente. Al finalizar el contrato, los datos son eliminados a pedido del cliente.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Transferencias y almacenamiento internacional</h2>
        <p className="text-gray-300">Los datos pueden ser procesados en servidores ubicados fuera de Argentina, incluyendo infraestructura de Amazon AWS, Vercel y Meta (WhatsApp). En todos los casos se garantizan niveles de protección adecuados conforme a la normativa aplicable.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">10. Derechos del titular</h2>
        <p className="text-gray-300 mb-3">De acuerdo con la Ley 25.326 de Protección de Datos Personales de Argentina, toda persona tiene derecho a:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><strong className="text-white">Acceso:</strong> conocer qué datos personales tenemos sobre usted</li>
          <li><strong className="text-white">Rectificación:</strong> corregir datos inexactos o incompletos</li>
          <li><strong className="text-white">Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
          <li><strong className="text-white">Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias</li>
        </ul>
        <p className="text-gray-300 mt-3">Para ejercer estos derechos, escribinos a hola@syncro.lat. La Agencia de Acceso a la Información Pública es el órgano de control competente.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">11. Cambios en esta política</h2>
        <p className="text-gray-300">SYNCRO se reserva el derecho de modificar esta política. Los cambios serán publicados en esta página con la fecha de actualización correspondiente. Se recomienda revisar periódicamente esta página.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">12. Contacto</h2>
        <p className="text-gray-300">Para consultas sobre privacidad: <a href="mailto:hola@syncro.lat" className="text-blue-400 hover:underline">hola@syncro.lat</a></p>
      </section>
    </main>
  );
}
