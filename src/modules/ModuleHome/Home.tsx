import React, { Fragment, useState} from 'react';
import { Button } from 'antd';
import { Input } from 'antd';


const Home = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [moreInformation, setMoreInformaton] = useState({nombre:"", edad: 0});

    const onClickSuma = (set: any, initialValue: number, incremental: number) => {
        set(initialValue + incremental);
        setShowResults(true);
        setMoreInformaton({nombre:"Jorge", edad: 25});
    }

    const reset = () => {
        setShowResults(false);
        setCount(0);
        setCountTwo(0);
        setMoreInformaton({nombre:"", edad: 0});
    }

    const onChangeInputs = (e: any, typeValue:string) => {
        const moreInfo = moreInformation;
        if(typeValue == "nombre"){
            setMoreInformaton({nombre: e.target.value, edad: moreInfo.edad});
        }
        if(typeValue == "edad"){
            setMoreInformaton({nombre: moreInfo.nombre, edad: e.target.value});
        }
    }

    return (
    <Fragment>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
        
        <Button type="primary" className='bg-slate-700' onClick={()=>onClickSuma(setCount,count,2)}>suma + 2</Button>
        <Button type="primary" className='bg-slate-400' onClick={()=>onClickSuma(setCountTwo,countTwo,5)}>suma + 5</Button>

        {showResults && (
            <Fragment><h3>el numero es {count}</h3>
            <h3>el numeroTwo es {countTwo}</h3>
            <Button type="primary" danger onClick={reset}>Ocultar</Button>
            <h1 className='text-purple-800'>Hola: {moreInformation.nombre}, su edad es: {moreInformation.edad}</h1>
            </Fragment>)
        }
        
        <Input onChange={(e)=>onChangeInputs(e, "nombre")} placeholder="Escriba su nombre" />
        <Input onChange={(e)=>onChangeInputs(e, "edad")} placeholder="Escriba su edad" />

    </Fragment>);
}

export default Home;