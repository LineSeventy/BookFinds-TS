import { useEffect, useState } from "react";
import type { BookData } from "../Features/Types/types";
import { supabase } from "../lib/supabaseClient";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Books() {
  {
    const [bookData, setBookData] = useState<BookData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchBooks = async () => {
        try {
          setLoading(true);

          const { data, error } = await supabase.from("NBS-DB").select("*");

          console.log({ data, error });
          if (error) {
            throw error;
          }
          if (data) {
            setBookData(data as BookData[]);
          }
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchBooks();
    }, []);

    if (loading)
      return (
        <>
          <Header />
          <p className="px-6 py-12 text-center text-slate-600">
            Loading Data...
          </p>
          <Footer />
        </>
      );
    if (error)
      return (
        <>
          <Header />
          <p className="px-6 py-12 text-center text-red-600">
            Error loading data: {error}
          </p>
          <Footer />
        </>
      );
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bookData.map((book) => (
                <li key={book.id} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <img
                      className="h-64 w-full object-cover"
                      src={book.stored_image_url}
                      alt="Image"
                    />
                    <header className="px-5 pt-5 text-xl font-semibold text-slate-900">
                      {book.title}
                    </header>
                    <div className="flex-1 px-5 pb-5 pt-3">
                      <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                        {book.description}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Books;
