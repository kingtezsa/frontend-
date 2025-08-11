import React, {useState} from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import OrdersTable from './components/OrdersTable'
import Invoice from './components/Invoice'

export default function App(){
  const [viewInvoice, setViewInvoice] = useState(null)
  const [theme] = useState({ primary: 'rgba(16,185,129,0.14)', accent: '#10b981' }) // green
  const openInvoice = (invoice) => setViewInvoice(invoice)
  const closeInvoice = () => setViewInvoice(null)

  return (
    <div className='app-root'>
      <Sidebar accent={theme.accent} />
      <div className='main'>
        <Header accent={theme.accent} />
        <main className='content'>
          <Dashboard accent={theme.accent} onOpenInvoice={openInvoice} />
          <OrdersTable onOpenInvoice={openInvoice} accent={theme.accent} />
        </main>
      </div>
      {viewInvoice && <Invoice data={viewInvoice} onClose={closeInvoice} accent={theme.accent} />}
    </div>
  )
}
