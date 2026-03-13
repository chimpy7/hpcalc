import { useState } from 'react'
import './App.css'
import { datasets, slåUppPoäng } from './data/datasets'

function App() {
  const [valda, setValda] = useState<Set<number>>(new Set([0]))
  const [verbal, setVerbal] = useState<string>('')
  const [kvantitativ, setKvantitativ] = useState<string>('')

  const verbalNum = parseInt(verbal)
  const kvantitativNum = parseInt(kvantitativ)
  const harInput = !isNaN(verbalNum) && !isNaN(kvantitativNum)

  function toggleDataset(i: number) {
    setValda((prev) => {
      const nästa = new Set(prev)
      if (nästa.has(i)) {
        if (nästa.size > 1) nästa.delete(i)
      } else {
        nästa.add(i)
      }
      return nästa
    })
  }

  function väljaAlla() {
    setValda(new Set(datasets.map((_, i) => i)))
  }

  function avmarkera() {
    setValda(new Set([0]))
  }

  const resultat = datasets
    .map((dataset, i) => {
      if (!valda.has(i)) return null
      const verbalNorm = harInput ? slåUppPoäng(verbalNum, dataset.verbal) : null
      const kvantitativNorm = harInput ? slåUppPoäng(kvantitativNum, dataset.kvantitativ) : null
      const slutpoäng =
        verbalNorm !== null && kvantitativNorm !== null
          ? Math.round(((verbalNorm + kvantitativNorm) / 2) * 10) / 10
          : null
      return { namn: dataset.namn, verbalNorm, kvantitativNorm, slutpoäng }
    })
    .filter(Boolean) as {
      namn: string
      verbalNorm: number | null
      kvantitativNorm: number | null
      slutpoäng: number | null
    }[]

  const visaTabell = harInput && resultat.length > 0

  return (
    <div className="card">
      <h1>Högskoleprovet – Räkna ut ditt resultat</h1>

      <div className="inputs">
        <label>
          Verbal del – antal rätt (0–80)
          <input
            type="number"
            min={0}
            max={80}
            value={verbal}
            onChange={(e) => setVerbal(e.target.value)}
            placeholder="t.ex. 52"
          />
        </label>
        <label>
          Kvantitativ del – antal rätt (0–80)
          <input
            type="number"
            min={0}
            max={80}
            value={kvantitativ}
            onChange={(e) => setKvantitativ(e.target.value)}
            placeholder="t.ex. 48"
          />
        </label>
      </div>

      <fieldset className="dataset-val">
        <legend>Jämför mot dataset</legend>
        <div className="dataset-actions">
          <button type="button" onClick={väljaAlla}>Välj alla</button>
          <button type="button" onClick={avmarkera}>Avmarkera</button>
          <span className="vald-räknare">{valda.size} valda</span>
        </div>
        <div className="checkbox-grid">
          {datasets.map((d, i) => (
            <label key={i} className="checkbox-label">
              <input
                type="checkbox"
                checked={valda.has(i)}
                onChange={() => toggleDataset(i)}
              />
              {d.namn.replace('Dataset ', '')}
            </label>
          ))}
        </div>
      </fieldset>

      {visaTabell && (
        <div className="tabell-wrapper">
          <table className="jämförelse">
            <thead>
              <tr>
                <th>Dataset</th>
                <th>Verbal</th>
                <th>Kvant.</th>
                <th>Normpoäng</th>
              </tr>
            </thead>
            <tbody>
              {resultat.map((r) => (
                <tr key={r.namn}>
                  <td>{r.namn.replace('Dataset ', '')}</td>
                  <td>{r.verbalNorm !== null ? r.verbalNorm.toFixed(1) : '–'}</td>
                  <td>{r.kvantitativNorm !== null ? r.kvantitativNorm.toFixed(1) : '–'}</td>
                  <td className={r.slutpoäng !== null ? 'poäng-cell' : ''}>
                    {r.slutpoäng !== null ? r.slutpoäng.toFixed(1) : '–'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default App
