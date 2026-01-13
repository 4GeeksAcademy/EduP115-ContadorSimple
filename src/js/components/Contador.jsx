import React from 'react'
import { useState, useEffect } from 'react'

const Contador = () => {

    const [numero, setNumero] = useState(0)
    const [unidades, setUnidades] = useState (['0', '0', '0', '0', '0', '0'])

    useEffect(() => {

        const intervalo = setInterval(() => {
            setNumero((prevNumero) => ((prevNumero + 1) % 1000000))
        }, 1000)
        
        return () => {
            clearInterval(intervalo)
        }

    }, [])

    useEffect(() => {
        const numeroString = numero.toString().padStart(6, '0').split('')
        setUnidades(numeroString)
    }, [numero])

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <div className="d-flex p-3 border border rounded bg-dark text-light">
                <div className="p-3 m-3 fs-1 border rounded"><i class="fa-solid fa-clock"></i></div>
                <div className="p-3 m-3 fs-1 border rounded">{unidades[0]}</div>
                <div className="p-3 m-3 fs-1 border rounded">{unidades[1]}</div>
                <div className="p-3 m-3 fs-1 border rounded">{unidades[2]}</div>
                <div className="p-3 m-3 fs-1 border rounded">{unidades[3]}</div>
                <div className="p-3 m-3 fs-1 border rounded">{unidades[4]}</div>
                <div className="p-3 m-3 fs-1 border rounded">{unidades[5]}</div>
            </div>
        </div>
    )

}

export default Contador