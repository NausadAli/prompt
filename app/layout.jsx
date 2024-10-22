import '@styles/globals.css';
import Nav from '@Components/Nav'
import Provider from '@Components/Provider'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover and share AI prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Provider> */}
          {/* <div className='main'>
            <div className='gradient'/>
          </div> */}

          <main>
            <Nav />
            {children}
          </main>
        {/* </Provider> */}
      </body>
    </html>
  )
}
