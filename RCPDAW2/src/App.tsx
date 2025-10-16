import React from 'react';
import Anthony from './Anthony'; // Solo si lo vas a usar

function App() {
  return (

    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
          Reanimación Cardiopulmonar (RCP)</h1>

      <section className="space-y-4 text-justify">

        <p>
          La reanimación cardiopulmonar (abreviada como RCP) o reanimación cardiorrespiratoria es un conjunto de maniobras reglamentarias destinadas a asegurar la oxigenación de los órganos vitales cuando la circulación de la sangre de una persona se detiene, independientemente de la causa del paro cardiorrespiratorio.
        </p>

        <p>
          Los principales componentes de la reanimación cardiopulmonar básica son avisar al servicio médico de emergencias dentro o fuera del hospital, y utilizar compresiones torácicas (masaje cardíaco externo, MCE) junto con respiración artificial (ventilación artificial). Otros elementos que pueden estar relacionados incluyen desfibriladores externos automáticos y el uso de maniobras anti-atragantamiento.
        </p>

        <p>
          Las recomendaciones específicas sobre la RCP varían en función de la edad del paciente y la causa del paro cardíaco. Se ha demostrado que cuando la RCP es puesta en práctica por personas adiestradas en la técnica y se inicia al cabo de pocos minutos tras el paro cardíaco, estos procedimientos pueden ser eficaces en salvar vidas humanas. Aunque un estudio publicado en 2010 ha puesto en duda el alcance del procedimiento, y así, de 95 000 pacientes, solo el 8 % presentó resultados positivos.
        </p>
      </section>

      <section className="mt-8">

        <h3 className="text-xl font-semibold mb-2">Un poco de su historia</h3>
        <p>Para 1776 ya se describía el procedimiento de hacer presión sobre el cartílago cricoides cuando se realiza insuflación artificial por la boca, con el fin de evitar la entrada de aire al esófago.A finales de los años cincuenta, Peter Safar y James Elan desarrollaron el concepto de la «respiración boca a boca».</p>

        <p>En 1960, William B. Kouwenhoven,Guy Knickerbocker y Jim Jude describieron las ventajas de la compresión torácica para provocar la circulación artificial.Safar luego estableció el protocolo de la RCP,el cual continuó siendo asumido por la Asociación Estadounidense del Corazón</p>

        <p>Entre 1991 y 2000, un solo socorrista alternaba quince compresiones torácicas y dos respiraciones en un adulto o un niño de más de ocho años; las compresiones se hacían a un ritmo de 60 por minuto. Para un bebé, se realizaban cuatro respiraciones iniciales (dos durante el cálculo; luego otras dos después del paso de la alarma) y se alternaban cinco compresiones torácicas y una respiración. Un socorrista aislado y sin medios practicaba la RCP durante un minuto antes de pedir ayuda; si los socorristas eran dos, alternaban cinco compresiones y una respiración, tanto en un adulto como en un bebé</p>

   


      </section>
    </main>
  );
}

export default App;
