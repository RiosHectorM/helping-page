import Message from '@/components/Message';
import Navbar from '@/components/Navbar';
import RandomNumber from '@/components/RandomNumber';
import UserTable from '@/components/UserTable';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 w-full bg-gradient-to-r from-red-400 via-pink-300 to-rose-800">
      <Navbar />
      <Message />
      <div className='flex'>
        <UserTable />
        <RandomNumber />
      </div>
    </main>
  );
}
