import { useState } from "react";

export default function BacklogSection() {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [formData, setFormData] = useState({
    fecha: "",
    equipo: "",
    descripcion: "",
    parte: "",
    prioridad: "P1",
    responsable: "",
    turno: "A1",
    grupo: "G1",
    accion: "Abierta",
    imagen: null,
  });

  // Lista local de registros
  const [backlogs, setBacklogs] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagen") {
      setFormData((prev) => ({ ...prev, imagen: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Primero agregamos el backlog al estado local
    setBacklogs((prev) => [...prev, formData]);

    // Aquí llamaremos a las funciones para enviar correo y guardar en Google Sheets
    try {
      await enviarCorreo(formData);
      await guardarEnGoogleSheet(formData);
      alert("Backlog enviado correctamente.");
      // Limpiar form
      setFormData({
        fecha: "",
        equipo: "",
        descripcion: "",
        parte: "",
        prioridad: "P1",
        responsable: "",
        turno: "A1",
        grupo: "G1",
        accion: "Abierta",
        imagen: null,
      });
    } catch (error) {
      alert("Error al enviar backlog. Intente nuevamente.");
      console.error(error);
    }
  };

  // Funciones mock, las definimos abajo
  const enviarCorreo = async (data) => {
    // Aquí iría la lógica real para enviar correo
  };

  const guardarEnGoogleSheet = async (data) => {
    // Aquí iría la llamada al Google Apps Script
  };

  return (
    <section id="seccion-backlog" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-semibold mb-6">Reporte de backlog.</h2>

        <div className="mb-8">
          <a
            href="#backlog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Reporta tu backlog
          </a>
        </div>

        <div
          id="backlog"
          className="mb-12 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto"
        >
          <form
            id="backlogForm"
            onSubmit={handleSubmit}
            className="space-y-6"
            encType="multipart/form-data"
          >
            {/* aquí van los inputs, como antes */}
            {/* ... */}
            {/* Para no repetir el código, se asume que los inputs van igual que antes */}
          </form>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Registros de BACKLOG</h2>
        <button
          onClick={() => setMostrarTabla((v) => !v)}
          className="mb-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
        >
          {mostrarTabla ? "Ocultar tabla BACKLOG" : "Mostrar tabla BACKLOG"}
        </button>

        {mostrarTabla && (
          <div
            id="contenedorTablaBACKLOG"
            className="overflow-x-auto max-w-full"
          >
            <table
              id="backlogTable"
              className="min-w-full border-collapse border border-gray-300"
            >
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2 text-center">Fecha</th>
                  <th className="border border-gray-300 p-2 text-center">Equipo</th>
                  <th className="border border-gray-300 p-2 text-center">Descripción</th>
                  <th className="border border-gray-300 p-2 text-center">Parte</th>
                  <th className="border border-gray-300 p-2 text-center">Prioridad</th>
                  <th className="border border-gray-300 p-2 text-center">Responsable</th>
                  <th className="border border-gray-300 p-2 text-center">Turno</th>
                  <th className="border border-gray-300 p-2 text-center">Grupo</th>
                  <th className="border border-gray-300 p-2 text-center">Acción</th>
                  <th className="border border-gray-300 p-2 text-center">Imagen</th>
                </tr>
              </thead>
              <tbody>
                {backlogs.map((item, i) => (
                  <tr key={i} className="text-center">
                    <td className="border border-gray-300 p-2">{item.fecha}</td>
                    <td className="border border-gray-300 p-2">{item.equipo}</td>
                    <td className="border border-gray-300 p-2">{item.descripcion}</td>
                    <td className="border border-gray-300 p-2">{item.parte}</td>
                    <td className="border border-gray-300 p-2">{item.prioridad}</td>
                    <td className="border border-gray-300 p-2">{item.responsable}</td>
                    <td className="border border-gray-300 p-2">{item.turno}</td>
                    <td className="border border-gray-300 p-2">{item.grupo}</td>
                    <td className="border border-gray-300 p-2">{item.accion}</td>
                    <td className="border border-gray-300 p-2">
                      {item.imagen ? item.imagen.name : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

import emailjs from "emailjs-com";

const enviarCorreo = async (data) => {
  const templateParams = {
    fecha: data.fecha,
    equipo: data.equipo,
    descripcion: data.descripcion,
    parte: data.parte,
    prioridad: data.prioridad,
    responsable: data.responsable,
    turno: data.turno,
    grupo: data.grupo,
    accion: data.accion,
    // No puedes enviar el archivo directo por EmailJS
  };

  try {
    await emailjs.send(
      "service_q0qcq56",
      "template_m56gjzm",
      templateParams,
      "XxSnghWL0Nk3bQpIZ"
    );
  } catch (error) {
    throw new Error("Error enviando correo: " + error.text);
  }
};
