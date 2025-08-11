import React from 'react'

export default function Sidebar({accent}){
  return (
    <aside className='sidebar' style={{borderRightColor:'rgba(255,255,255,0.03)'}}>
      <div className='brand'>
        <div className='logo' aria-hidden style={{background:'rgba(16,185,129,0.14)', color:accent}}>RJ</div>
        <div>
          <div style={{fontSize:14}}>Rhema Jaya</div>
          <div className='muted' style={{fontSize:12}}>Digital Printing</div>
        </div>
      </div>
      <nav className='nav'>
        <button><svg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 12h18' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/></svg> Dashboard</button>
        <button><svg width='18' height='18' viewBox='0 0 24 24' fill='none'><path d='M4 6h16M4 12h16M4 18h16' stroke='currentColor' strokeWidth='1.2' strokeLinecap='round'/></svg> Orders</button>
        <button><svg width='18' height='18' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='8' r='3' stroke='currentColor' strokeWidth='1.2'/><path d='M6 20c1.5-2 4.5-3 6-3s4.5 1 6 3' stroke='currentColor' strokeWidth='1.2' strokeLinecap='round'/></svg> Customers</button>
      </nav>
      <div style={{marginTop:'auto'}} className='muted'>&copy; {new Date().getFullYear()} Rhema Jaya</div>
    </aside>
  )
}
