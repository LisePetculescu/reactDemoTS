import { useState } from "react";

interface Country {
  name: { common: string; official: string };
  capital: string[];
  borders: string[];
  population: number;
  altSpelling: Array<string>;
  flags: { png: string; svg: string; alt: string };
  maps: { googleMaps: string };
}

type CountryInfoProps = {
  country: Country | null;
};

const fetchCountryData = async (countryCode) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  const countries = await res.json();
  console.log(countries);
  return countries[0];
};

export default function App() {
  const [code, setCode] = useState("dk");
  const [country, setCountry] = useState(null);

  const getInfo = async () => {
    const info = await fetchCountryData(code);
    setCountry(info);
  };

  return (
    <>
      <h1>Show Country Info</h1>
      <input type="text" id="code" onChange={(e) => setCode(e.target.value)} placeholder="Enter Country Code" />
      <button onClick={() => getInfo()}>Get Info</button>
      <CountryInfo country={country} />
    </>
  );
}
const CountryInfo = (props) => {
  const country = props.country;

  return country == null ? (
    <p>Enter Country Code above to fetch country info</p>
  ) : (
    <>
      <h1>Country Info</h1>
      <h4>Flag</h4>
      <img style={{ width: 100 }} src={country.flags.png} alt={country.flags.alt} />
      <p>Country Name Common: TODO</p>
      <p>Country Name Official: TODO</p>
      <p>Country Capital: TODO</p>
      <p>Population: TODO</p>
      <p>Country Borders: TODO</p>
      <h4>Alternative Spellings</h4>
      <ol>TODO</ol>
      <a href="TODO" target="_blank">
        Google Maps
      </a>
    </>
  );
};

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
