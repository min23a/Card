import { faArtstation, faWeebly } from '@fortawesome/free-brands-svg-icons';
import { faItalic, faLemon, faPuzzlePiece, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';
import letter from '../Images/letter.png'
import word from '../Images/Word.png'
import lemon from '../Images/lemon.png'
import abstract from '../Images/abstract.png'
import mascot from '../Images/mascot.png'
import puzzle from '../Images/puzzle.png'

const items = [
    {
        title: 'Lettermark Logos',
        img: letter,
        text1: 'A Monogram or lettermark is a typography-based logo that’s comprised of a few letters, usually a company’s initials. The lettermark is all about simplicity.',
        text2: 'By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.',
        icon: faItalic
    },
    {
        title: 'Wordmark Logos',
        img: word,
        text1: 'Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business’ name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name.',
        text2: 'Google’s logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition.',
        icon: faWeebly
    },
    {
        title: 'Pictorial Mark Logos',
        img: lemon,
        text1: 'A pictorial mark (sometimes called brand mark or logo symbol) is an icon—or graphic-based logo. It’s probably the image that comes to mind when you think “logo”: the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies’ logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable.',
        text2: 'A true brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.',
        icon: faLemon
    },
    {
        title: 'Abstract Mark Logos',
        img: abstract,
        text1: 'An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image—like an apple or a bird—it’s an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower.',
        text2:'Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand.',
        icon: faArtstation
    },
    {
        title: 'Mascot Logos',
        img: mascot,
        text1: 'Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson.',
        text2: 'A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC’s Colonel and PUB’s cute Water Wally.',
        icon: faTheaterMasks
    },
    {
        title: 'Combination Logos',
        img: puzzle,
        text1: 'A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image.',
        text2: 'Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.',
        icon: faPuzzlePiece
    }
]

export {items}