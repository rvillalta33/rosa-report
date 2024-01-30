import Typography from '@mui/material/Typography'
import SummaryCard from './components/SummaryCard/summaryCard'
import Table from './components/Table/table'
import './App.css'

import {StoreProvider} from './store/storeContext'

export default function Root(props) {
  return <section id="App-templates">
    <StoreProvider>
      <Typography variant="h2" paddingBottom={'3%'}>Title Template</Typography>
      <SummaryCard />
      <Table />
    </StoreProvider>
  </section>;
}
