import NextGame from '@/components/Home/NextGame';
import Message from '@/components/Home/Message';
import Navbar from '@/components/Home/Navbar';
import NumberGrid from '@/components/Home/NumberGrid';
import RandomNumber from '@/components/Home/RandomNumber';
import UserTable from '@/components/shared/UserTable';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 w-full">
      <Navbar />
      <Message />
      <div className="divider divider-secondary py-8">ELEGI UN NUMERO</div>
      <div className="flex w-3/4 justify-center md:justify-around flex-col md:flex-row items-center">
        <NextGame />
        <RandomNumber />
      </div>
      <NumberGrid />
    </main>
  );
}
