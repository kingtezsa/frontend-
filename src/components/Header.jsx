import React from 'react'

export default function Header({accent}){
  return (
    <header className='header'>
      <div style={{display:'flex', gap:16, alignItems:'center'}}>
        <h1>Dashboard</h1>
        <div className='muted'>Overview & orders</div>
      </div>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <input className='search' placeholder='Cari pesanan atau pelanggan...' />
        <button className='btn secondary'>Export</button>
        <button className='btn'>+ New Order</button>
      </div>
    </header>
  )
}
