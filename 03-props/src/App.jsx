import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      
      <Card user='Aman' age={22} img='https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Anand' age={21}  img='https://imgs.search.brave.com/HnljsdOpaYOoisDsjBi4SDGvUPVOvUcTsX33azfvXPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnRoZWdhbWVy/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDEv/aXp1a3UtbWlkb3Jp/eWEtaW4tbXktaGVy/by1hY2FkZW1pYS5q/cGc_cT00OSZmaXQ9/Y3JvcCZ3PTgyNSZk/cHI9Mg' />
      <Card user='Aditi' age={19}  img='https://imgs.search.brave.com/Vatbi_wDEAiy3SpGyz2rPvInhTfrvULGzJSpQleEiQI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbS5p/Z24uY29tL2lnbl9p/bi9pbWFnZS90L3Ro/ZS0xNS1iZXMvdGhl/LTE1LWJlc3QtbXkt/aGVyby1hY2FkZW1p/YS1jaGFyYWN0ZXJz/LXJhbmtlZF94a3pj/LmpwZw' />
      <Card user='Aarav' age={20}  img='https://imgs.search.brave.com/agu24ybFzxubtSBPEjjnbFfPxz26tqg8vYA-ePDVTPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbS5p/Z24uY29tL2lnbl9p/bi9waG90by90L3Ro/ZS0xNS1iZXMvdGhl/LTE1LWJlc3QtbXkt/aGVyby1hY2FkZW1p/YS1jaGFyYWN0ZXJz/LXJhbmtlZF8zZ3B0/LmpwZw' />
      <Card user='Ayush' age={29}  img='https://imgs.search.brave.com/z_jxBT2wRP7Q-rw0DiIcL1O3effPk4d3kYGMO4v83yg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbS5p/Z24uY29tL2lnbl9p/bi9pbWFnZS90L3Ro/ZS0xNS1iZXMvdGhl/LTE1LWJlc3QtbXkt/aGVyby1hY2FkZW1p/YS1jaGFyYWN0ZXJz/LXJhbmtlZF80Yjg3/LmpwZw' />
      <Card user='Anil' age={30}  img='https://imgs.search.brave.com/txSQY_3e-jza71-XMVumSJjJYgfqNKlJ2wEMVh4Kc-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdkLzY5/L2RmLzdkNjlkZmU2/NTU4YjY3YWIyOGM3/NGU4MGU1MDkyMWM5/LmpwZw' />
    </div>
  )
}

export default App