import Sidebar from 'components/Sidebar';


const PrivateLayout = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <Sidebar/>
            <main className='bg-blue-500 w-full flex'>{children}</main>
        </div>
    )
}

export default PrivateLayout;
