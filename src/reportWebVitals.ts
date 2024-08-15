import { ReportHandler } from 'web-vitals' // Importa o tipo ReportHandler da biblioteca web-vitals

// Função para reportar métricas de performance da aplicação
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  // Verifica se onPerfEntry é uma função válida
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa dinamicamente as funções de medição de performance da biblioteca web-vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chama cada função de medição de performance passando onPerfEntry como callback
      getCLS(onPerfEntry) // Cumulative Layout Shift
      getFID(onPerfEntry) // First Input Delay
      getFCP(onPerfEntry) // First Contentful Paint
      getLCP(onPerfEntry) // Largest Contentful Paint
      getTTFB(onPerfEntry) // Time to First Byte
    })
  }
}

export default reportWebVitals // Exporta a função reportWebVitals como padrão
