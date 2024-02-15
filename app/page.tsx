import CarouselPremios from '@/components/CarouselPremios';
import Message from '@/components/Message';
import Navbar from '@/components/Navbar';
import NumberGrid from '@/components/NumberGrid';
import RandomNumber from '@/components/RandomNumber';
import UserTable from '@/components/UserTable';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 w-full ">
      <Navbar />
      <Message />
      <div className="divider divider-secondary py-8">ELEGI UN NUMERO</div>
      <div className="flex w-3/4 justify-around flex-col md:flex-row">
        <UserTable />
        {/* <CarouselPremios /> */}
        <RandomNumber />
      </div>
      <NumberGrid />
    </main>
  );
}
