const Paciente = () => {
  return (
    <div className="bg-white shadow-md px-5 py-10 ml-3 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propetario: {""}
        <span className="font-normal normal-case">Arturo</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">10 diciembre 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
          repellendus nemo minus assumenda totam velit corporis dolorem nihil
          nesciunt quis nisi eos illo. Culpa, obcaecati illum molestias dolor
          doloribus eveniet!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
