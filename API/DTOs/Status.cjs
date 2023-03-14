// Define the Status class
class Status {
    constructor(id, fecha, estado, transacciones, executionID, tipoAccion) {
      this.ID = id;
      this.Fecha = fecha;
      this.Estado = estado;
      this.Transacciones = transacciones;
      this.ExecutionID = executionID;
      this.TipoAccion = tipoAccion;
    }
}

module.exports = Status;