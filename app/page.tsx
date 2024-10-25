'use client';

import Coffee from './components/Coffee';
import Header from './components/Header';
import CheckoutComponent from './components/CheckoutComponent';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full p-4">
          <div className="w-1/3 mx-auto">
            <Coffee />
          </div>
          <div className="flex justify-center mb-2">
           <h1 className="text-5xl font-bold">Mochi Latte</h1>
          </div>
          <p className="text-center text-xl mb-4 text-slate-400">
            $0.99
          </p>
          <div className="flex justify-center items-center w-full mb-6">
            <CheckoutComponent />
          </div>
          <div className="flex justify-center items-center w-full">
            <p className="text-center text-lg mb-6 text-slate-400">
            Only coffee onchain can be this cheap. <br />
            No gas. No crypto jargon. <br />
            Instant settlement. Global reach. <br />
            Fully customizable. 
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
