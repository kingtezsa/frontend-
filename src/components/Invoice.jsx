import React, {useRef} from 'react'

function formatMoney(v){ return 'Rp ' + v.toLocaleString('id-ID') }

export default function Invoice({data, onClose, accent}){
  const printRef = useRef()
  const total = data.items.reduce((s,i)=> s + (i.qty * i.price), 0)
  return (
    <div className='invoice-modal'>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:16, borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <div style={{width:44, height:44, borderRadius:10, background:'rgba(16,185,129,0.12)', display:'flex', alignItems:'center', justifyContent:'center', color:accent}}>RJ</div>
          <div>
            <div style={{fontWeight:700}}>Invoice Preview</div>
            <div className='muted' style={{fontSize:12}}>#{data.id} • {data.date}</div>
          </div>
        </div>
        <div style={{display:'flex', gap:8}}>
          <button className='btn secondary' onClick={onClose}>Close</button>
          <button className='btn' onClick={() => window.print()}>Print</button>
        </div>
      </div>
      <div className='print-area' ref={printRef}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <h2 style={{margin:'6px 0'}}>Rhema Jaya</h2>
            <div className='muted' style={{fontSize:13}}>Digital Printing — Jl. Contoh No.1, Jakarta</div>
          </div>
          <div style={{textAlign:'right'}}>
            <div><strong>Invoice</strong></div>
            <div className='muted'>{data.id}</div>
            <div style={{marginTop:8}} className='muted'>Tanggal: {data.date}</div>
          </div>
        </div>

        <hr style={{margin:'18px 0', border:'none', borderTop:'1px solid rgba(0,0,0,0.06)'}} />

        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div>
            <div className='muted'>Tagihan Untuk</div>
            <div style={{fontWeight:700}}>{data.customer}</div>
          </div>
          <div style={{textAlign:'right'}}>
            <div className='muted'>Jumlah</div>
            <div style={{fontWeight:700, fontSize:18}}>{formatMoney(total)}</div>
          </div>
        </div>

        <table style={{width:'100%', marginTop:16, borderCollapse:'collapse'}}>
          <thead>
            <tr style={{textAlign:'left', color:'#334155'}}>
              <th style={{padding:8}}>Item</th><th style={{padding:8}}>Qty</th><th style={{padding:8}}>Harga</th><th style={{padding:8}}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((it,idx)=> (
              <tr key={idx} style={{background: idx%2===0? 'rgba(0,0,0,0.02)':'transparent'}}>
                <td style={{padding:8}}>{it.name}</td>
                <td style={{padding:8}}>{it.qty}</td>
                <td style={{padding:8}}>{formatMoney(it.price)}</td>
                <td style={{padding:8}}>{formatMoney(it.qty * it.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{display:'flex', justifyContent:'flex-end', marginTop:12}}>
          <div style={{width:260, background:'rgba(0,0,0,0.02)', padding:12, borderRadius:8}}>
            <div style={{display:'flex', justifyContent:'space-between'}}><div className='muted'>Subtotal</div><div>{formatMoney(total)}</div></div>
            <div style={{display:'flex', justifyContent:'space-between'}}><div className='muted'>Pajak</div><div>{formatMoney(0)}</div></div>
            <hr style={{margin:'8px 0', border:'none', borderTop:'1px solid rgba(0,0,0,0.06)'}} />
            <div style={{display:'flex', justifyContent:'space-between', fontWeight:700}}><div>Total</div><div>{formatMoney(total)}</div></div>
          </div>
        </div>

        <div style={{marginTop:22}} className='muted'>Catatan: {data.note || '-'}</div>
      </div>
    </div>
  )
}
