const Boton = () => {
    return (
        <div className='flex justify-center gap-3 m-4'>
            <button type='submit' className='primary-button'>Enviar datos</button>
            <button type='reset' className='secondary-button'>Limpiar datos</button>
        </div>
    )
}

export { Boton }