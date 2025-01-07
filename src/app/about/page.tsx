import Header from '@/components/Header'
import LandingPage from '@/components/About/LandingPage'

export default function About() {
    return (
        <div className='select-none min-h-screen min-w-screen flex items-center justify-center bg-primary overflow-hidden text-white'>
            <Header />
            <LandingPage />
        </div>
    )
}
