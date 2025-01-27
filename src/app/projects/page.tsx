import Header from '@/components/Header'
import LandingPage from '@/components/Projects/LandingPage'

export default function Projects() {
    return (
        <div className='select-none min-h-screen min-w-screen flex items-center justify-center bg-primary overflow-hidden text-white'>
            <Header />
            <LandingPage />
        </div>
    )
}
