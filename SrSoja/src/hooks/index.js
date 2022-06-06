import { useContext } from "react"
import { ThisContext } from '../context'

/**
 * Retorna o contexto principal.
 * @returns ThisContext
 */
export default function getContext() {
    const context = useContext(ThisContext)

    if(!context) throw new Error('Erro no hook')

    return context
}