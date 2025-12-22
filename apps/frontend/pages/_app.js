import '../styles/globals.css'
import { DoctorProvider } from '../context/DoctorContext'

export default function App({ Component, pageProps }) {
  return (
    <DoctorProvider>
      <Component {...pageProps} />
    </DoctorProvider>
  )
}
