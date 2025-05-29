import React, { useState } from 'react';
import { initialClientes } from './mock/clientes';
import { initialProveedores } from './mock/proveedores';
import { initialProductos } from './mock/productos';
import { initialPedidos } from './mock/pedidos';
import { initialDomicilios } from './mock/domicilios';
import { initialExportaciones } from './mock/exportaciones';
import { initialReportes } from './mock/reportes';
import { initialEstadisticas } from './mock/estadisticas';
import PijamaHeader from './components/PijamaHeader';
import PijamaTabs from './components/PijamaTabs';
import PijamaTab from './components/PijamaTab';
import PijamaCard from './components/PijamaCard';
import ClienteForm from './components/ClienteForm';
import ClienteList from './components/ClienteList';
import ProveedorForm from './components/ProveedorForm';
import ProveedorList from './components/ProveedorList';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import PedidoForm from './components/PedidoForm';
import PedidoList from './components/PedidoList';
import DomicilioForm from './components/DomicilioForm';
import DomicilioList from './components/DomicilioList';
import ExportacionForm from './components/ExportacionForm';
import ExportacionList from './components/ExportacionList';
import InventoryDashboard from './components/InventoryDashboard';
import ReporteVentas from './components/ReporteVentas';
import ReporteInventario from './components/ReporteInventario';
import ReporteProveedores from './components/ReporteProveedores';
import ReporteClientes from './components/ReporteClientes';
import EstadisticasProductosVendidos from './components/EstadisticasProductosVendidos';
import EstadisticasClientesFrecuentes from './components/EstadisticasClientesFrecuentes';
import EstadisticasProveedoresFrecuentes from './components/EstadisticasProveedoresFrecuentes';
import EstadisticasMovimientosInventario from './components/EstadisticasMovimientosInventario';
import EstadisticasBalanceInventario from './components/EstadisticasBalanceInventario';

const PijamaInventoryApp = () => {
  const [activeTab, setActiveTab] = useState('clientes');
  const [clientes, setClientes] = useState(initialClientes);
  const [proveedores, setProveedores] = useState(initialProveedores);
  const [productos, setProductos] = useState(initialProductos);
  const [pedidos, setPedidos] = useState(initialPedidos);
  const [domicilios, setDomicilios] = useState(initialDomicilios);
  const [exportaciones, setExportaciones] = useState(initialExportaciones);
  const [reportes, setReportes] = useState(initialReportes);
  const [estadisticas, setEstadisticas] = useState(initialEstadisticas);
  
  // Estados para clientes
  const [editingCliente, setEditingCliente] = useState(null);
  const [showClienteForm, setShowClienteForm] = useState(false);
  
  // Estados para proveedores
  const [editingProveedor, setEditingProveedor] = useState(null);
  const [showProveedorForm, setShowProveedorForm] = useState(false);
  
  // Estados para productos
  const [editingProducto, setEditingProducto] = useState(null);
  const [showProductoForm, setShowProductoForm] = useState(false);
  
  // Estados para pedidos
  const [editingPedido, setEditingPedido] = useState(null);
  const [showPedidoForm, setShowPedidoForm] = useState(false);
  
  // Estados para domicilios
  const [editingDomicilio, setEditingDomicilio] = useState(null);
  const [showDomicilioForm, setShowDomicilioForm] = useState(false);

  // Estados para exportaciones
  const [editingExportacion, setEditingExportacion] = useState(null);
  const [showExportacionForm, setShowExportacionForm] = useState(false);

  // Estado para reportes
  const [activeReport, setActiveReport] = useState('ventas');


  // Funciones para clientes
  const handleSaveCliente = (cliente) => {
    if (editingCliente) {
      setClientes(clientes.map(c => c.cedula === cliente.cedula ? cliente : c));
    } else {
      setClientes([...clientes, cliente]);
    }
    setShowClienteForm(false);
    setEditingCliente(null);
  };

  const handleDeleteCliente = (cedula) => {
    setClientes(clientes.filter(c => c.cedula !== cedula));
  };

  // Funciones para proveedores
  const handleSaveProveedor = (proveedor) => {
    if (editingProveedor) {
      setProveedores(proveedores.map(p => p.proveedor_id === proveedor.proveedor_id ? proveedor : p));
    } else {
      setProveedores([...proveedores, {
        ...proveedor,
        proveedor_id: `PROV-${(proveedores.length + 1).toString().padStart(3, '0')}`
      }]);
    }
    setShowProveedorForm(false);
    setEditingProveedor(null);
  };

  const handleDeleteProveedor = (proveedorId) => {
    setProveedores(proveedores.filter(p => p.proveedor_id !== proveedorId));
  };

  // Funciones para productos
  const handleSaveProducto = (producto) => {
    if (editingProducto) {
      setProductos(productos.map(p => p.producto_id === producto.producto_id ? producto : p));
    } else {
      setProductos([...productos, {
        ...producto,
        producto_id: `PJ-${(productos.length + 1).toString().padStart(3, '0')}`,
        stock_actual: 0
      }]);
    }
    setShowProductoForm(false);
    setEditingProducto(null);
  };

  const handleDeleteProducto = (productoId) => {
    setProductos(productos.filter(p => p.producto_id !== productoId));
  };

  // Funciones para pedidos
  const handleSavePedido = (pedido) => {
    if (editingPedido) {
      setPedidos(pedidos.map(p => p.pedido_id === pedido.pedido_id ? {
        ...pedido,
        total: pedido.detalles.reduce((sum, detalle) => sum + detalle.subtotal, 0),
        proveedor_nombre: proveedores.find(prov => prov.proveedor_id === pedido.proveedor_id)?.nombre_comercial || ''
      } : p));
    } else {
      setPedidos([...pedidos, {
        ...pedido,
        pedido_id: `PED-${(pedidos.length + 1).toString().padStart(3, '0')}`,
        total: pedido.detalles.reduce((sum, detalle) => sum + detalle.subtotal, 0),
        proveedor_nombre: proveedores.find(prov => prov.proveedor_id === pedido.proveedor_id)?.nombre_comercial || ''
      }]);
    }
    setShowPedidoForm(false);
    setEditingPedido(null);
  };

  const handleDeletePedido = (pedidoId) => {
    setPedidos(pedidos.filter(p => p.pedido_id !== pedidoId));
  };

  // Funciones para domicilios
  const handleSaveDomicilio = (domicilio) => {
    if (editingDomicilio) {
      setDomicilios(domicilios.map(d => d.domicilio_id === domicilio.domicilio_id ? {
        ...domicilio,
        cliente_nombre: clientes.find(c => c.cedula === domicilio.cliente_id)?.nombre || ''
      } : d));
    } else {
      setDomicilios([...domicilios, {
        ...domicilio,
        domicilio_id: `DOM-${(domicilios.length + 1).toString().padStart(3, '0')}`,
        cliente_nombre: clientes.find(c => c.cedula === domicilio.cliente_id)?.nombre || ''
      }]);
    }
    setShowDomicilioForm(false);
    setEditingDomicilio(null);
  };

  const handleDeleteDomicilio = (domicilioId) => {
    setDomicilios(domicilios.filter(d => d.domicilio_id !== domicilioId));
  };

  // Funciones para exportaciones
  const handleSaveExportacion = (exportacion) => {
    if (editingExportacion) {
      setExportaciones(exportaciones.map(e => e.exportacion_id === exportacion.exportacion_id ? {
        ...exportacion,
        total: exportacion.detalles.reduce((sum, detalle) => sum + detalle.subtotal_usd, 0),
        cliente_nombre: clientes.find(c => c.cedula === exportacion.cliente_id)?.nombre || ''
      } : e));
    } else {
      setExportaciones([...exportaciones, {
        ...exportacion,
        exportacion_id: `EXP-${(exportaciones.length + 1).toString().padStart(3, '0')}`,
        total: exportacion.detalles.reduce((sum, detalle) => sum + detalle.subtotal_usd, 0),
        cliente_nombre: clientes.find(c => c.cedula === exportacion.cliente_id)?.nombre || ''
      }]);
    }
    setShowExportacionForm(false);
    setEditingExportacion(null);
  };

  const handleDeleteExportacion = (exportacionId) => {
    setExportaciones(exportaciones.filter(e => e.exportacion_id !== exportacionId));
  };


  // Render tab content
  const renderTabContent = () => {
    switch(activeTab) {
      case 'clientes':
        return (
          <>
            {showClienteForm ? (
              <ClienteForm 
                cliente={editingCliente}
                onSave={handleSaveCliente}
                onCancel={() => {
                  setShowClienteForm(false);
                  setEditingCliente(null);
                }}
              />
            ) : (
              <>
                <button 
                  onClick={() => {
                    setShowClienteForm(true);
                    setEditingCliente(null);
                  }}
                  className="mb-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Agregar Cliente
                </button>
                <ClienteList 
                  clientes={clientes}
                  onEdit={(cliente) => {
                    setEditingCliente(cliente);
                    setShowClienteForm(true);
                  }}
                  onDelete={handleDeleteCliente}
                />
              </>
            )}
          </>
        );
      case 'proveedores':
        return (
          <>
            {showProveedorForm ? (
              <ProveedorForm 
                proveedor={editingProveedor}
                onSave={handleSaveProveedor}
                onCancel={() => {
                  setShowProveedorForm(false);
                  setEditingProveedor(null);
                }}
              />
            ) : (
              <>
                <button 
                  onClick={() => {
                    setShowProveedorForm(true);
                    setEditingProveedor(null);
                  }}
                  className="mb-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Agregar Proveedor
                </button>
                <ProveedorList 
                  proveedores={proveedores}
                  onEdit={(proveedor) => {
                    setEditingProveedor(proveedor);
                    setShowProveedorForm(true);
                  }}
                  onDelete={handleDeleteProveedor}
                />
              </>
            )}
          </>
        );
      case 'inventario':
        return (
          <>
            <InventoryDashboard />
            {showProductoForm ? (
              <ProductForm 
                product={editingProducto}
                onSave={handleSaveProducto}
                onCancel={() => {
                  setShowProductoForm(false);
                  setEditingProducto(null);
                }}
              />
            ) : (
              <>
                <button 
                  onClick={() => {
                    setShowProductoForm(true);
                    setEditingProducto(null);
                  }}
                  className="mb-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Agregar Producto
                </button>
                <ProductList 
                  products={productos}
                  onEdit={(producto) => {
                    setEditingProducto(producto);
                    setShowProductoForm(true);
                  }}
                  onDelete={handleDeleteProducto}
                />
              </>
            )}
          </>
        );
      case 'pedidos':
        return (
          <>
            {showPedidoForm ? (
              <PedidoForm 
                pedido={editingPedido}
                onSave={handleSavePedido}
                onCancel={() => {
                  setShowPedidoForm(false);
                  setEditingPedido(null);
                }}
              />
            ) : (
              <>
                <button 
                  onClick={() => {
                    setShowPedidoForm(true);
                    setEditingPedido(null);
                  }}
                  className="mb-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Crear Pedido
                </button>
                <PedidoList 
                  pedidos={pedidos}
                  onEdit={(pedido) => {
                    setEditingPedido(pedido);
                    setShowPedidoForm(true);
                  }}
                  onDelete={handleDeletePedido}
                />
              </>
            )}
          </>
        );
      case 'domicilios':
        return (
          <>
            {showDomicilioForm ? (
              <DomicilioForm 
                domicilio={editingDomicilio}
                onSave={handleSaveDomicilio}
                onCancel={() => {
                  setShowDomicilioForm(false);
                  setEditingDomicilio(null);
                }}
              />
            ) : (
              <>
                <button 
                  onClick={() => {
                    setShowDomicilioForm(true);
                    setEditingDomicilio(null);
                  }}
                  className="mb-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Crear Domicilio
                </button>
                <DomicilioList 
                  domicilios={domicilios}
                  onEdit={(domicilio) => {
                    setEditingDomicilio(domicilio);
                    setShowDomicilioForm(true);
                  }}
                  onDelete={handleDeleteDomicilio}
                />
              </>
            )}
          </>
        );
      case 'exportaciones':
        return (
          <>
            {showExportacionForm ? (
              <ExportacionForm 
                exportacion={editingExportacion}
                onSave={handleSaveExportacion}
                onCancel={() => {
                  setShowExportacionForm(false);
                  setEditingExportacion(null);
                }}
              />
            ) : (
              <>
                <button 
                  onClick={() => {
                    setShowExportacionForm(true);
                    setEditingExportacion(null);
                  }}
                  className="mb-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Crear Exportación
                </button>
                <ExportacionList 
                  exportaciones={exportaciones}
                  onEdit={(exportacion) => {
                    setEditingExportacion(exportacion);
                    setShowExportacionForm(true);
                  }}
                  onDelete={handleDeleteExportacion}
                />
              </>
            )}
          </>
        );
      case 'reportes':
        return (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Reportes</h3>
            <div className="flex space-x-4 mb-6">
              <button 
                onClick={() => setActiveReport('ventas')}
                className={`px-4 py-2 rounded-md ${activeReport === 'ventas' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Ventas
              </button>
              <button 
                onClick={() => setActiveReport('inventario')}
                className={`px-4 py-2 rounded-md ${activeReport === 'inventario' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Inventario
              </button>
              <button 
                onClick={() => setActiveReport('proveedores')}
                className={`px-4 py-2 rounded-md ${activeReport === 'proveedores' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Proveedores
              </button>
              <button 
                onClick={() => setActiveReport('clientes')}
                className={`px-4 py-2 rounded-md ${activeReport === 'clientes' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Clientes
              </button>
            </div>
            {activeReport === 'ventas' && <ReporteVentas ventas={reportes.reporte_ventas} />}
            {activeReport === 'inventario' && <ReporteInventario inventario={reportes.reporte_inventario} />}
            {activeReport === 'proveedores' && <ReporteProveedores proveedores={reportes.reporte_proveedores} />}
            {activeReport === 'clientes' && <ReporteClientes clientes={reportes.reporte_clientes} />}
          </div>
        );
      case 'estadisticas':
        return (
          <div className="p-6 space-y-8">
            <h3 className="text-xl font-semibold mb-4">Estadísticas Clave</h3>
            <EstadisticasProductosVendidos productos={estadisticas.productos_mas_vendidos} />
            <EstadisticasClientesFrecuentes clientes={estadisticas.clientes_frecuentes} />
            <EstadisticasProveedoresFrecuentes proveedores={estadisticas.proveedores_frecuentes} />
            <EstadisticasMovimientosInventario movimientos={estadisticas.movimientos_inventario} />
            <EstadisticasBalanceInventario balance={estadisticas.balance_inventario} />
          </div>
        );
      default:
        return <div className="p-4 text-gray-500">Selecciona una pestaña</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 dark:bg-gray-900">
      <PijamaHeader />
      
      <PijamaTabs>
        <PijamaTab active={activeTab === 'clientes'} onClick={() => setActiveTab('clientes')}>
          Clientes
        </PijamaTab>
        <PijamaTab active={activeTab === 'proveedores'} onClick={() => setActiveTab('proveedores')}>
          Proveedores
        </PijamaTab>
        <PijamaTab active={activeTab === 'inventario'} onClick={() => setActiveTab('inventario')}>
          Inventario
        </PijamaTab>
        <PijamaTab active={activeTab === 'pedidos'} onClick={() => setActiveTab('pedidos')}>
          Pedidos
        </PijamaTab>
        <PijamaTab active={activeTab === 'domicilios'} onClick={() => setActiveTab('domicilios')}>
          Domicilios
        </PijamaTab>
        <PijamaTab active={activeTab === 'exportaciones'} onClick={() => setActiveTab('exportaciones')}>
          Exportaciones
        </PijamaTab>
        <PijamaTab active={activeTab === 'reportes'} onClick={() => setActiveTab('reportes')}>
          Reportes
        </PijamaTab>
        <PijamaTab active={activeTab === 'estadisticas'} onClick={() => setActiveTab('estadisticas')}>
          Estadísticas
        </PijamaTab>
      </PijamaTabs>

      <div className="mt-4">
        <PijamaCard>
          {renderTabContent()}
        </PijamaCard>
      </div>
    </div>
  );
}

export default PijamaInventoryApp;

// DONE