import Head from 'next/head';
import Image from 'next/image';
import Joke from '../components/JokeComponent';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Joke />
    </>
  )
}
