import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const data = [
  {name:'Jan', sales:4000},
  {name:'Feb', sales:3000},
  {name:'Mar', sales:5000},
  {name:'Apr', sales:4000},
  {name:'May', sales:6000},
  {name:'Jun', sales:7000},
  {name:'Jul', sales:8000},
]

export default function Dashboard({accent, onOpenInvoice}){
  const recentInvoice = {
    id: 'INV-2025-001',
    date: '2025-08-10',
    customer: 'PT. Sukses Makmur',
    items:[{name:'Banner 440gsm 2x3m', qty:1, price:250000},{name:'Sticker Cut 20x20cm', qty:10, price:5000}],
    note:'Pengiriman minggu depan'
  }
  return (
    <section className='grid'>
      <div className='card'>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <div className='muted'>Total Penjualan</div>
            <div className='kpi'>Rp 58.340.000</div>
          </div>
          <div style={{background:'linear-gradient(90deg, rgba(16,185,129,0.14), rgba(16,185,129,0.06))', padding:10, borderRadius:10}}>
            <svg width='28' height='28' viewBox='0 0 24 24' fill='none'><path d='M3 10h18M7 6h10M8 14h8M10 18h4' stroke={accent} strokeWidth='1.6' strokeLinecap='round'/></svg>
          </div>
        </div>
        <div style={{height:160, marginTop:12}}>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart data={data}>
              <defs>
                <linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor={accent} stopOpacity={0.16}/>
                  <stop offset='100%' stopColor={accent} stopOpacity={0.02}/>
                </linearGradient>
              </defs>
              <XAxis dataKey='name' stroke='#94a3b8' />
              <YAxis stroke='#94a3b8' />
              <Tooltip />
              <Area type='monotone' dataKey='sales' stroke={accent} fill='url(#g)' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className='card'>
        <div className='muted'>Pesanan Baru</div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{fontSize:20, fontWeight:700}}>18</div>
          <div style={{fontSize:13}} className='muted'>Terakhir: 2 jam lalu</div>
        </div>
        <div style={{marginTop:12}} className='muted'>Quick action</div>
        <div style={{display:'flex', gap:8, marginTop:10}}>
          <button className='btn' onClick={()=>onOpenInvoice(recentInvoice)}>Cetak Invoice Terakhir</button>
          <button className='btn secondary'>Tambah Pesanan</button>
        </div>
      </div>

      <div className='card'>
        <div className='muted'>Pelanggan Aktif</div>
        <div style={{fontSize:20, fontWeight:700}}>124</div>
        <div style={{marginTop:12}} className='muted'>Top 3 pelanggan</div>
        <ol style={{marginTop:8}} className='muted'>
          <li>PT. Sukses Makmur</li>
          <li>CV. Kreatif Print</li>
          <li>Rumah Makan Padang</li>
        </ol>
      </div>
    </section>
  )
}
