import { useEffect, useRef } from 'react'
import { Container, Span } from './styles'
import { useField } from '@unform/core'

function Input({ name, icon: Icon, ...rest}) {
    const inputRef = useRef()
    const { fieldName, error, registerField } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);


    return (
        <>
        <Container>
            { Icon &&  <Icon />}
            <input ref={inputRef} {...rest} />
            { error && <Span>{error}</Span> }
        </Container>
        
        </>
    )
}

export default Input;