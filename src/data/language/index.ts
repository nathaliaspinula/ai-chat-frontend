export interface ILanguage {
  agentName: string
  agentInfo: string
  inputPlaceholder: string
}

export default {
  en: {
    agentName: 'Agent',
    agentInfo: 'Ask me anything!',
    inputPlaceholder: 'Type message here',
  },
  es: {
    agentName: 'Agente',
    agentInfo: '¡Pregúntame lo que quieras!',
    inputPlaceholder: 'Escribe tu mensaje aquí',
  },
  pt: {
    agentName: 'Agente',
    agentInfo: 'Pergunte-me qualquer coisa!',
    inputPlaceholder: 'Digite sua mensagem aqui',
  },
}
