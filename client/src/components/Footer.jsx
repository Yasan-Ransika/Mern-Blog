import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-black'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link to="/" className='self-center whitespace-nowrap text-sm text-xl font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 rounded-lg text-white'>BOC's Blog</span>
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
          <div>
            <Footer.Title title='About Us' />
            <Footer.LinkGroup col>
              <Footer.Link
                href='https://www.boc.lk/about'
                target='_blank'
                rel='noopener noreferrer'
              >
                Who We Are
              </Footer.Link>
              <Footer.Link
                  href='https://www.boc.lk/awards'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Awards & Recognitions
                </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
              <Footer.Title title='Help & Guidance' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.boc.lk/boc-faq'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  FAQ
                </Footer.Link>
                <Footer.Link 
                href='https://www.boc.lk/contact'
                target='_blank'
                rel='noopener noreferrer'
                >
                  Contact Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Special Notices' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.boc.lk/news/articles'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  News
                </Footer.Link>
                <Footer.Link 
                href='https://www.boc.lk/careers'
                target='_blank'
                rel='noopener noreferrer'
                >
                  Careers
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between '>
          <Footer.Copyright
            href='#'
            by="Bank of Ceylon. All Rights Reserved."
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/BANKOFCEYLON/' icon={BsFacebook}/>
            <Footer.Icon href='https://www.instagram.com/bankofceylon_/' icon={BsInstagram}/>
            <Footer.Icon href='https://twitter.com/bankofceylon_' icon={BsTwitter}/>
            <Footer.Icon href='https://www.linkedin.com/company/bank-of-ceylon' icon={BsLinkedin}/>
            <Footer.Icon href='https://www.youtube.com/channel/UC15IN8WsPTdisjUnXexAtOA' icon={BsYoutube}/>

          </div>
          </div>
      </div>
    </Footer> 
  );
}
