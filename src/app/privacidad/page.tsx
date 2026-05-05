export default function Privacidad() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
      
      <p className="text-gray-400 mb-8">Última actualización: Mayo 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Quiénes somos</h2>
        <p className="text-gray-300">SYNCRO (syncro.lat) es una agencia de soluciones tecnológicas B2B con sede en Córdoba, Argentina. Desarrollamos y operamos sistemas de gestión para organizadores y establecimientos de eventos. Contacto: hola@syncro.lat</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Qué datos recopilamos</h2>
        <p className="text-gray-300">Recopilamos los siguientes datos personales en el marco de los servicios prestados a nuestros clientes:</p>
        <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
          <li>Nombre y apellido</li>
          <li>Número de teléfono y WhatsApp</li>
          <li>Dirección de correo electrónico</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Propiedad de los datos</h2>
        <p className="text-gray-300">Los datos recopilados a través de los sistemas de SYNCRO son propiedad exclusiva del cliente contratante. SYNCRO actúa únicamente como procesador técnico de dichos datos, sin ningún derecho de uso, comercialización o cesión sobre los mismos. El cliente contratante es el único responsable del uso que se haga de los datos dentro de su organización.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Para qué usamos los datos</h2>
        <p className="text-gray-300">Los datos recopilados se utilizan exclusivamente para:</p>
        <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
          <li>Gestionar listas de invitados en eventos</li>
          <li>Facilitar la comunicación entre promotores y organizadores</li>
          <li>Proveer acceso al sistema de gestión a personal autorizado por el cliente</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Lo que SYNCRO NO hace con los datos</h2>
        <p className="text-gray-300">SYNCRO no vende, no cede, no comparte ni comercializa los datos de ningún cliente contratante ni de sus usuarios finales. Los datos de un cliente nunca son accesibles por otro cliente. SYNCRO no utiliza los datos para fines publicitarios ni de análisis comercial propio.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Almacenamiento y seguridad</h2>
        <p className="text-gray-300">Los datos se almacenan en servidores seguros con certificación SOC 2 (Supabase/Amazon AWS). Aplicamos medidas de seguridad técnicas incluyendo cifrado, control de acceso por roles y auditoría de accesos.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Retención de datos</h2>
        <p className="text-gray-300">Los datos de invitados se conservan por un período máximo de 90 días posteriores al evento. Los datos de personal autorizado se conservan mientras dure la relación comercial con el establecimiento cliente. Al finalizar el contrato, los datos son eliminados a pedido del cliente.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Derechos del titular</h2>
        <p className="text-gray-300">De acuerdo con la Ley 25.326 de Protección de Datos Personales de Argentina, toda persona tiene derecho a acceder, rectificar y suprimir sus datos personales. Para ejercer estos derechos, escribinos a hola@syncro.lat</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Cambios en esta política</h2>
        <p className="text-gray-300">SYNCRO se reserva el derecho de modificar esta política. Los cambios serán publicados en esta página con la fecha de actualización correspondiente.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">10. Contacto</h2>
        <p className="text-gray-300">Para consultas sobre privacidad: <a href="mailto:hola@syncro.lat" className="text-blue-400 hover:underline">hola@syncro.lat</a></p>
      </section>
    </main>
  );
}