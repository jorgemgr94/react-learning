import { useState, useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';
import Footer from '@src/components/Footer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip } from '@mui/material';
import { useLoading } from '@src/contexts/LoadingContext';

type Book = {
  id: number;
  title: string;
  authors: [
    {
      name: string;
    }
  ];
  formats: {
    'image/jpeg': string;
  };
};

export default function Debounce () {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchCriteria, setSeachCriteria] = useState<string>('');
  const { setLoading } = useLoading();

  useEffect(() => {
    setBooks([]);
    if (searchCriteria === '') return;

    setLoading(true);
    const controller = new AbortController();

    fetch(`https://gutendex.com/books/?search=${searchCriteria}`, {
      signal: controller.signal
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('something bad happened'));
      })
      .then((fetchedBooks) => {
        setBooks(fetchedBooks.results as Book[]);
        setLoading(false);
      });

    return () => {
      controller.abort();
      setLoading(false);
    };
  }, [searchCriteria, setLoading]);

  const debouncedSearch = useRef(
    debounce((text: string) => {
      setSeachCriteria(text);
    }, 300)
  ).current;

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }

  return (
    <>
      <section>
        <h1 className="mb-4 text-3xl font-bold">Books finder</h1>
        <Paper
          component="form"
          sx={{ p: '2px 8px', display: 'flex', alignItems: 'center' }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Books"
            onChange={handleChange}
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <ImageList variant="masonry" cols={5} gap={18}>
          {books.map((book) => (
            <ImageListItem key={book.id}>
              <img
                src={book.formats['image/jpeg']}
                srcSet={book.formats['image/jpeg']}
                alt={book.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={book.title}
                subtitle={book.authors.at(0)?.name || 'No author'}
                actionIcon={
                  <Tooltip title={book.title}>
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${book.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Footer />
      </section>
    </>
  );
}
