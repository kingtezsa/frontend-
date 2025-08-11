import React, {useEffect, useState} from 'react'

const API = import.meta.env.VITE_API_URL || ''

export default function OrdersTable({onOpenInvoice, accent}){
  const [sample, setSample] = useState([])
  const [loading, setLoading] = useState(true)

  async function load(){
    setLoading(true)
    try{
      const res = await fetch(API + '/orders')
      const data = await res.json()
      setSample(data.orders || [])
    }catch(e){
      console.error(e)
      setSample([])
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{ load() },[])

  async function addDummy(){
    const payload = { customer: 'Pelanggan Baru', total: 150000, status: 'Pending', date: new Date().toISOString().slice(0,10), items:[{name:'Banner 2x3m 440gsm', qty:1, price:150000}] }
    await fetch(API + '/orders', {method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(payload)})
    load()
  }

  return (
    <div className='card table' style={{marginTop:8}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div><strong>Daftar Pesanan</strong> <div className='muted' style={{fontSize:12}}>Terbaru</div></div>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <div className='muted' style={{fontSize:13}}>Total: {sample.length}</div>
          <button className='btn secondary' onClick={addDummy}>Tambah Dummy</button>
        </div>
      </div>
      {loading ? <div style={{padding:12}}>Loading...</div> : (
      <table style={{marginTop:12}}>
        <thead>
          <tr><th>Invoice</th><th>Pelanggan</th><th>Tanggal</th><th>Total</th><th>Status</th><th>Aksi</th></tr>
        </thead>
        <tbody>
          {sample.map(s=> (
            <tr key={s.id || s._id || s.date + s.customer}>
              <td>{s.id || ('INV-' + (s._id || '').slice(0,6))}</td>
              <td>{s.customer}</td>
              <td>{s.date}</td>
              <td>Rp {Number(s.total).toLocaleString('id-ID')}</td>
              <td>{s.status}</td>
              <td><button className='btn' onClick={()=>onOpenInvoice({
                id:s.id || ('INV-' + (s._id || '').slice(0,6)), date:s.date, customer:s.customer,
                items:s.items || [{name:'Item', qty:1, price:s.total}], note:s.note || ''
              })}>Lihat / Cetak</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  )
}
