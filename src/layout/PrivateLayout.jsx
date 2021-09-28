import Sidebar from 'components/Sidebar';


const PrivateLayout = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <Sidebar/>
            <main className='flex w-full bg-green-300 overflow-y-scroll'>{children}</main>
        </div>
    )
}

export default PrivateLayout;
