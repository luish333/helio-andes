import React, { useState } from "react";
import Table from "react-bootstrap/Table";

function CalculadoraIntegral() {
  const [panelW, setPanelW] = useState(450);
  const [cantPaneles, setCantPaneles] = useState(8);
  const [precioPanel, setPrecioPanel] = useState(0);

  const [precioInversor, setPrecioInversor] = useState(650000);
  const [precioBateria, setPrecioBateria] = useState(320000);
  const [cantBaterias, setCantBaterias] = useState(0);

  const [estructurasCableado, setEstructurasCableado] = useState(180000);
  const [instalacionBase, setInstalacionBase] = useState(350000);

  const [pesoKg, setPesoKg] = useState(90);

  const [tipoTecho, setTipoTecho] = useState("");
  const [region, setRegion] = useState("");
  const [complejidad, setComplejidad] = useState("");
  const [subsidio, setSubsidio] = useState("");
  const [envioMetodo, setEnvioMetodo] = useState("");
  const [garantia, setGarantia] = useState("");

  const [planPago, setPlanPago] = useState("");
  const [tipoPie, setTipoPie] = useState("porcentaje");
  const [valorPie, setValorPie] = useState(0);

  const nz = (v) => (isNaN(v) ? 0 : Math.max(0, v));

  
let recargoTechoPct = 0;
if (tipoTecho === "teja") {
  recargoTechoPct = 0.05;
} else if (tipoTecho === "zinc") {
  recargoTechoPct = 0.02;
} else if (tipoTecho === "hormigon") {
  recargoTechoPct = 0.07;
}


let regionBaseEnvio = 0;
if (region === "rm") {
  regionBaseEnvio = 5000;
} else if (region === "norte") {
  regionBaseEnvio = 9000;
} else if (region === "sur") {
  regionBaseEnvio = 10000;
} else if (region === "austral") {
  regionBaseEnvio = 15000;
}



let complejidadPct = 0;
if (complejidad === "baja") {
  complejidadPct = 0.0;
} else if (complejidad === "media") {
  complejidadPct = 0.08;
} else if (complejidad === "alta") {
  complejidadPct = 0.15;
}



let subsidioPct = 0;
if (subsidio === "residencial") {
  subsidioPct = -0.08;
} else if (subsidio === "pyme") {
  subsidioPct = -0.05;
}


let envioMultiplicador = 0; // mantiene la obligación de elegir método
if (envioMetodo === "expres") {
  envioMultiplicador = 1.2;
} else if (envioMetodo === "estandar") {
  envioMultiplicador = 1.0;
}


let garantiaPct = 0;
if (garantia === "12") {
  garantiaPct = 0.02;
} else if (garantia === "24") {
  garantiaPct = 0.04;
} else if (garantia === "36") {
  garantiaPct = 0.06;
}



let planPagoInfo = { tasa: 0, cuotas: 0 };
if (planPago === "6") {
  planPagoInfo = { tasa: 0.012, cuotas: 6 };
} else if (planPago === "12") {
  planPagoInfo = { tasa: 0.011, cuotas: 12 };
} else if (planPago === "24") {
  planPagoInfo = { tasa: 0.010, cuotas: 24 };
} else if (planPago === "contado") {
  planPagoInfo = { tasa: 0, cuotas: 1 };
}



  const potenciaKW = (nz(panelW) * nz(cantPaneles)) / 1000;

  const subtotalPaneles = nz(precioPanel) > 0 ? nz(precioPanel) * nz(cantPaneles) : 0;
  const subtotalBaterias = nz(precioBateria) > 0 ? nz(precioBateria) * nz(cantBaterias) : 0;
  const subtotalEquipos = nz(subtotalPaneles) + nz(precioInversor) + nz(subtotalBaterias) + nz(estructurasCableado);

  const recargoTecho = Math.round(subtotalEquipos * recargoTechoPct);
  const equiposConRecargo = subtotalEquipos + recargoTecho;

  const subsidioMonto = Math.round(equiposConRecargo * subsidioPct);

  const instalacionFinal = Math.round(nz(instalacionBase) * (1 + complejidadPct));

  const ivaBase = equiposConRecargo + subsidioMonto + instalacionFinal;
  const iva = Math.round(ivaBase * 0.19);

  const envioBase = regionBaseEnvio + nz(pesoKg) * 700;
  const envio = Math.round(envioBase * envioMultiplicador);

  const garantiaMonto = Math.round(equiposConRecargo * garantiaPct);

  const totalAntesFinanciar =
    equiposConRecargo + subsidioMonto + instalacionFinal + iva + envio + garantiaMonto;

  const pieCalculado =
    tipoPie === "porcentaje"
      ? Math.max(0, Math.min(totalAntesFinanciar, Math.round(totalAntesFinanciar * (nz(valorPie) / 100))))
      : Math.max(0, Math.min(totalAntesFinanciar, nz(valorPie)));

  const montoFinanciar = Math.max(0, totalAntesFinanciar - pieCalculado);

  const interesTotal = Math.round(montoFinanciar * planPagoInfo.tasa * planPagoInfo.cuotas);
  const cuota =
    planPagoInfo.cuotas > 1 ? Math.round((montoFinanciar + interesTotal) / planPagoInfo.cuotas) : 0;

  const totalFinal = pieCalculado + montoFinanciar + interesTotal;

  const advertencia =
    potenciaKW > 7 && nz(cantBaterias) === 0
      ? "Recomendado considerar almacenamiento para estabilidad del sistema."
      : "";

  const CLP = (n) => `$ ${Math.round(n).toLocaleString("es-CL")}`;

  const reiniciar = () => {
    setPanelW(450);
    setCantPaneles(8);
    setPrecioPanel(0);
    setPrecioInversor(650000);
    setPrecioBateria(320000);
    setCantBaterias(0);
    setEstructurasCableado(180000);
    setInstalacionBase(350000);
    setPesoKg(90);
    setTipoTecho("");
    setRegion("");
    setComplejidad("");
    setSubsidio("");
    setEnvioMetodo("");
    setGarantia("");
    setPlanPago("");
    setTipoPie("porcentaje");
    setValorPie(0);
  };

  const copiarResumen = async () => {
    const texto = `
Potencia estimada: ${potenciaKW.toFixed(2)} kW
Subtotal equipos: ${CLP(subtotalEquipos)}
Recargo techo: ${CLP(recargoTecho)}
Subsidio: ${CLP(subsidioMonto)}
Instalación final: ${CLP(instalacionFinal)}
IVA (19%): ${CLP(iva)}
Envío: ${CLP(envio)}
Garantía: ${CLP(garantiaMonto)}
Total antes de financiar: ${CLP(totalAntesFinanciar)}
Pie: ${CLP(pieCalculado)}
Interés total: ${CLP(interesTotal)}
Cuota: ${cuota ? CLP(cuota) : "$ —"}
Total final: ${CLP(totalFinal)}
`.trim();
    try {
      await navigator.clipboard.writeText(texto);
      alert("Resumen copiado al portapapeles.");
    } catch {
      alert("No se pudo copiar. Permite acceso al portapapeles.");
    }
  };

  return (
    <div className="container my-4" id="demo">
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <div className="p-3 bg-light rounded border">
            <h4 className="mb-3">DEMO calculadora</h4>

            <div className="row g-3">
              <div className="col-6">
                <label className="form-label" htmlFor="panelW">Potencia del panel (W)</label>
                <input id="panelW" type="number" min="0" className="form-control"
                  placeholder="450"
                  value={panelW}
                  onChange={(e) => setPanelW(nz(Number(e.target.value)))}/>
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="cantPaneles">Cantidad de paneles</label>
                <input id="cantPaneles" type="number" min="0" className="form-control"
                  placeholder="8"
                  value={cantPaneles}
                  onChange={(e) => setCantPaneles(nz(Number(e.target.value)))}/>
              </div>

              <div className="col-12">
                <small className="text-muted">Potencia estimada: <strong>{potenciaKW.toFixed(2)} kW</strong></small>
                {advertencia && <div className="alert alert-warning py-1 mt-2 mb-0">{advertencia}</div>}
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="precioPanel">Precio por panel (opcional)</label>
                <input id="precioPanel" type="number" min="0" className="form-control"
                  placeholder="0 si no aplica"
                  value={precioPanel}
                  onChange={(e) => setPrecioPanel(nz(Number(e.target.value)))}/>
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="precioInversor">Inversor (precio)</label>
                <input id="precioInversor" type="number" min="0" className="form-control"
                  placeholder="650000"
                  value={precioInversor}
                  onChange={(e) => setPrecioInversor(nz(Number(e.target.value)))}/>
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="precioBateria">Batería (precio unidad)</label>
                <input id="precioBateria" type="number" min="0" className="form-control"
                  placeholder="320000"
                  value={precioBateria}
                  onChange={(e) => setPrecioBateria(nz(Number(e.target.value)))}/>
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="cantBaterias">Cantidad baterías</label>
                <input id="cantBaterias" type="number" min="0" className="form-control"
                  placeholder="0"
                  value={cantBaterias}
                  onChange={(e) => setCantBaterias(nz(Number(e.target.value)))}/>
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="estructuras">Estruct./cableado</label>
                <input id="estructuras" type="number" min="0" className="form-control"
                  placeholder="180000"
                  value={estructurasCableado}
                  onChange={(e) => setEstructurasCableado(nz(Number(e.target.value)))}/>
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="instBase">Instalación base</label>
                <input id="instBase" type="number" min="0" className="form-control"
                  placeholder="350000"
                  value={instalacionBase}
                  onChange={(e) => setInstalacionBase(nz(Number(e.target.value)))}/>
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="pesoKg">Peso envío (kg)</label>
                <input id="pesoKg" type="number" min="0" className="form-control"
                  placeholder="90"
                  value={pesoKg}
                  onChange={(e) => setPesoKg(nz(Number(e.target.value)))}/>
              </div>
            </div>

            <hr />

            <div className="row g-3">
              <div className="col-6">
                <label className="form-label" htmlFor="tipoTecho">Tipo de techo</label>
                <select id="tipoTecho" className="form-select" value={tipoTecho} onChange={(e)=>setTipoTecho(e.target.value)}>
                  <option value="">Seleccione</option>
                  <option value="teja">Teja/Asfalto (+5%)</option>
                  <option value="zinc">Zinc/Planchas (+2%)</option>
                  <option value="hormigon">Hormigón (+7%)</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="region">Región (para envío)</label>
                <select id="region" className="form-select" value={region} onChange={(e)=>setRegion(e.target.value)}>
                  <option value="">Seleccione</option>
                  <option value="rm">RM ($5.000)</option>
                  <option value="norte">Norte ($9.000)</option>
                  <option value="sur">Sur ($10.000)</option>
                  <option value="austral">Austral ($15.000)</option>
                </select>
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="complejidad">Complejidad instalación</label>
                <select id="complejidad" className="form-select" value={complejidad} onChange={(e)=>setComplejidad(e.target.value)}>
                  <option value="">Seleccione</option>
                  <option value="baja">Baja (0%)</option>
                  <option value="media">Media (+8%)</option>
                  <option value="alta">Alta (+15%)</option>
                </select>
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="subsidio">Subsidio referencial</label>
                <select id="subsidio" className="form-select" value={subsidio} onChange={(e)=>setSubsidio(e.target.value)}>
                  <option value="">Seleccione</option>
                  <option value="sin">Sin subsidio (0%)</option>
                  <option value="residencial">Residencial (−8%)</option>
                  <option value="pyme">Pyme (−5%)</option>
                </select>
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="envio">Método de envío</label>
                <select id="envio" className="form-select" value={envioMetodo} onChange={(e)=>setEnvioMetodo(e.target.value)}>
                  <option value="">Seleccione</option>
                  <option value="estandar">Estándar (x1.00)</option>
                  <option value="expres">Exprés (x1.20)</option>
                </select>
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="garantia">Garantía extendida</label>
                <select id="garantia" className="form-select" value={garantia} onChange={(e)=>setGarantia(e.target.value)}>
                  <option value="">Seleccione</option>
                  <option value="12">12 meses (+2%)</option>
                  <option value="24">24 meses (+4%)</option>
                  <option value="36">36 meses (+6%)</option>
                </select>
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="plan">Plan de pago</label>
                <select id="plan" className="form-select" value={planPago} onChange={(e)=>setPlanPago(e.target.value)}>
                  <option value="">Seleccione</option>
                  <option value="contado">Contado (0%)</option>
                  <option value="6">6 cuotas (1.2% mensual)</option>
                  <option value="12">12 cuotas (1.1% mensual)</option>
                  <option value="24">24 cuotas (1.0% mensual)</option>
                </select>
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="tipoPie">Tipo de pie</label>
                <select id="tipoPie" className="form-select" value={tipoPie} onChange={(e)=>setTipoPie(e.target.value)}>
                  <option value="porcentaje">Porcentaje</option>
                  <option value="monto">Monto fijo</option>
                </select>
              </div>

              <div className="col-6">
                <label className="form-label" htmlFor="valorPie">
                  {tipoPie === "porcentaje" ? "Valor de pie (%)" : "Valor de pie ($)"}
                </label>
                <input id="valorPie" type="number" min="0" className="form-control"
                  placeholder={tipoPie === "porcentaje" ? "Ej: 10" : "Ej: 500000"}
                  value={valorPie}
                  onChange={(e)=>setValorPie(nz(Number(e.target.value)))}/>
                {tipoPie === "porcentaje" && <small className="text-muted">Si es porcentaje, 10 = 10%.</small>}
              </div>

              <div className="col-12 d-flex gap-2 mt-2">
                <button className="btn btn-secondary" type="button" onClick={reiniciar}>Reiniciar</button>
                <button className="btn btn-outline-primary" type="button" onClick={copiarResumen}>Copiar resumen</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="p-3 bg-light rounded border">
            <h5 className="mb-3">Resumen</h5>
            <Table striped bordered hover responsive>
              <tbody>
                <tr>
                  <td>Potencia estimada (kW)</td>
                  <td className="text-end">{potenciaKW.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Subtotal equipos</td>
                  <td className="text-end">{CLP(subtotalEquipos)}</td>
                </tr>
                <tr>
                  <td>Recargo techo</td>
                  <td className="text-end">{CLP(recargoTecho)}</td>
                </tr>
                <tr>
                  <td>Subsidio</td>
                  <td className="text-end">{CLP(subsidioMonto)}</td>
                </tr>
                <tr>
                  <td>Instalación final</td>
                  <td className="text-end">{CLP(instalacionFinal)}</td>
                </tr>
                <tr>
                  <td>IVA 19%</td>
                  <td className="text-end">{CLP(iva)}</td>
                </tr>
                <tr>
                  <td>Envío</td>
                  <td className="text-end">{CLP(envio)}</td>
                </tr>
                <tr>
                  <td>Garantía</td>
                  <td className="text-end">{CLP(garantiaMonto)}</td>
                </tr>
                <tr className="table-secondary">
                  <td><strong>Total antes de financiar</strong></td>
                  <td className="text-end"><strong>{CLP(totalAntesFinanciar)}</strong></td>
                </tr>
                <tr>
                  <td>Pie</td>
                  <td className="text-end">{CLP(pieCalculado)}</td>
                </tr>
                <tr>
                  <td>Interés total</td>
                  <td className="text-end">{planPagoInfo.cuotas ? CLP(interesTotal) : "$ —"}</td>
                </tr>
                <tr>
                  <td>Cuota</td>
                  <td className="text-end">{cuota ? CLP(cuota) : "$ —"}</td>
                </tr>
                <tr className="table-warning">
                  <td><strong>Total final</strong></td>
                  <td className="text-end"><strong>{CLP(totalFinal)}</strong></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculadoraIntegral;

