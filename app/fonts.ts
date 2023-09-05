import { Roboto_Mono, Victor_Mono, IBM_Plex_Mono} from "next/font/google";

import localFont from 'next/font/local'

export const font = localFont({
    src: './sequel-sans-book-disp.ttf',
    display: 'swap'
})

export const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
    weight: '300',
})