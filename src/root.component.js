import Typography from '@mui/material/Typography'
import SummaryPieChartCard from './components/SummaryCards/summaryPieChartsCard'
import StatusSummaryCard from './components/SummaryCards/summaryStatusCard'
import ImportCard from './components/SummaryCards/importCard'
import ExportCard from './components/SummaryCards/exportCard'
import SummaryChartsCard from './components/SummaryCards/summaryCharts'
import Table from './components/Table/table'
import './App.css'

import { StoreProvider } from './store/storeContext'

export default function Root(props) {
  return <section id="App-templates">
    <StoreProvider>
      <Typography variant="h2" paddingBottom={'3%'}>El reporte más fumado de la historia</Typography>
      <SummaryPieChartCard />
      <StatusSummaryCard />
      <ImportCard />
      <ExportCard />
      <SummaryChartsCard />
      {/* <Table /> */}
    </StoreProvider>
  </section>;
}
